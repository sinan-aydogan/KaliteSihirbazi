<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";

// Components
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import FileInput from "@/Components/Form/FileInput.vue"
import {fileTypesToAcceptAttribute} from "@/Components/Form/FileTypeSelectInput.vue";

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    },
    allowedFileTypes: {
        type: Array,
        default: () => []
    }
})

const documentsAccept = computed(() => fileTypesToAcceptAttribute(props.allowedFileTypes))

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"

/*Table*/
const tableHeaders = [
    {
        id: 'name',
        label: tm('term.educationInstructor')
    },
    {
        id: 'photo',
        label: tm('term.photo'),
        value: (row) => row?.media?.find(m => m.collection_name === 'education_instructor_photo') ? 'Var' : 'Yok'
    },
    {
        id: 'documents_count',
        label: tm('term.documents'),
        value: (row) => {
            const docs = row?.media?.filter(m => m.collection_name === 'education_instructor_documents') || [];
            return `${docs.length} belge`;
        }
    },
    {
        id: 'educations_count',
        label: tm('term.educationsCount'),
        value: (row) => row?.educations_count || 0
    },
    {
        id: 'created_at',
        label: t('term.createdAt'),
        value: (row) => !!row?.created_at ? new Date(row.created_at).toLocaleDateString('tr-TR') : ''
    }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const form = useForm({
    id: null,
    name: "",
    photo: null,
    documents: []
})

const resetForm = () => {
    form.reset();
    v$.value.$reset();
    showModal.value = false;
    formType.value = "create";
    existingPhoto.value = null;
    existingDocuments.value = [];
}

// Media preview state (for edit mode)
const existingPhoto = ref(null)
const existingDocuments = ref([])

// Rules
const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    }
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('education-instructor.store'), {
            onSuccess: () => {
                resetForm();
            }
        })
    } else {
        // Use POST with method override so PHP will parse multipart/form-data into $_FILES
        form.post(route('education-instructor.update', {id: form.id}), {
            headers: { 'X-HTTP-Method-Override': 'PUT' },
            onSuccess: () => {
                resetForm();
            }
        })
    }
}

/*Update*/
const getRowInfo = async (id) => {
    try {
        const response = await axios.get(route("education-instructor.edit", {id: id}));
        form.id = response.data.education_instructor?.id || response.data.id;
        form.name = response.data.education_instructor?.name || response.data.name;
        // Media files from controller
        existingPhoto.value = response.data.photo || null;
        existingDocuments.value = response.data.documents || [];
        // Clear file inputs when loading existing media
        form.photo = null;
        form.documents = [];

        // open modal after data is populated to avoid rendering issues that break reactivity
        formType.value = "update";
        showModal.value = true;
    } catch (e) {
        console.error(e);
    }
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("education-instructor.destroy", id), {
        preserveState: true,
    });
}

// File handlers
const handlePhotoChange = (files) => {
    form.photo = files[0] || null;
    // If user selects a new photo, hide existing photo preview
    if (form.photo) existingPhoto.value = null
}

const handleDocumentsChange = (files) => {
    form.documents = Array.from(files);
    // If user adds new documents, we don't remove existing ones automatically.
}

// Delete existing document by media id
const deleteExistingDocument = async (mediaId) => {
    if (!form.id) return;
    try {
        await axios.delete(route('education-instructor.delete-media', {educationInstructor: form.id, mediaId: mediaId}));
        existingDocuments.value = existingDocuments.value.filter(d => d.id !== mediaId)
        // flash message could be handled globally, keep simple
    } catch (e) {
        console.error(e)
    }
}

// Remove existing photo (show file input again)
const removeExistingPhoto = async () => {
    if (!form.id) {
        existingPhoto.value = null
        return
    }

    try {
        // call same delete-media route for photo if media exists
        if (existingPhoto.value && existingPhoto.value.id) {
            await axios.delete(route('education-instructor.delete-media', {educationInstructor: form.id, mediaId: existingPhoto.value.id}));
        }
        existingPhoto.value = null
    } catch (e) {
        console.error(e)
    }
}

</script>

<template>
    <app-layout :title="tm('term.educationInstructors')" :sub-title="'Eğitmen bilgilerini yönetin'">
        <template #actionArea>
            <!--Back to Settings-->
            <simple-button type="route" :link="route('education-setting.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
                <span v-text="tm('action.goBack')"/>
            </simple-button>

            <!--Add new-->
            <simple-button @click="showModal = true; form.reset(); formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="tm('action.addInstructor')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="tableHeaders"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
        />
    </app-layout>

    <teleport to="body">
        <!--Modal-->
        <Modal
            v-model="showModal"
            :header="formType === 'create' ? tm('action.addInstructor') : 'Eğitmeni Düzenle'"
            :subHeader="formType === 'create' ? 'Yeni bir eğitmen oluşturun' : 'Eğitmen bilgilerini güncelleyin'"
            closeable
            close-button
        >
            <Form full-size>
                <FormSection
                    bg-less
                    grid
                >
                    <!-- Name -->
                    <input-group class="col-span-12" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                        <text-input v-model="form.name" :placeholder="'Eğitmen adını giriniz'"/>
                    </input-group>

                    <!-- Photo -->
                    <input-group class="col-span-12" labelFor="photo" :label="tm('term.photo')">
                        <!-- If existing photo present (edit mode) show preview with delete button -->
                        <div v-if="existingPhoto" class="flex items-center justify-center mb-2">
                            <div class="relative">
                                <img :src="existingPhoto.original_url || existingPhoto.full_url || existingPhoto.url" class="max-h-36 w-auto p-1 border rounded-md" />
                                <div class="absolute top-0 right-0 -mt-2 -mr-2">
                                    <simple-button color="red" type="button" @click.stop="removeExistingPhoto">
                                        <font-awesome-icon icon="trash-can"/>
                                    </simple-button>
                                </div>
                            </div>
                        </div>

                        <!-- File input (shown when no existing photo or after deletion) -->
                        <div v-if="!existingPhoto">
                            <file-input
                                @change="handlePhotoChange"
                                accept="image/*"
                                browse-label="Fotoğraf Seçin"
                                preview
                            />
                        </div>
                        <p v-if="!existingPhoto" class="text-sm text-gray-500 mt-1">
                            Desteklenen formatlar: JPG, PNG. Maksimum 2MB.
                        </p>
                    </input-group>

                    <!-- Documents -->
                    <input-group class="col-span-12" labelFor="documents" :label="tm('term.documents')">
                        <!-- Existing documents list (when editing) -->
                        <div v-if="existingDocuments && existingDocuments.length>0" class="flex flex-col space-y-2 mb-2">
                            <div v-for="doc in existingDocuments" :key="doc.id" class="grid grid-cols-12 gap-2 items-center border p-2 rounded-md">
                                <!-- Thumbnail / Icon -->
                                <div class="col-span-1 flex items-center justify-center">
                                    <template v-if="doc.mime_type && doc.mime_type.split('/')[0] === 'image'">
                                        <img :src="doc.original_url || doc.full_url || doc.url" class="object-cover w-12 h-12 rounded-md" />
                                    </template>
                                    <template v-else>
                                        <font-awesome-icon icon="fa-solid fa-file" class="text-gray-600" style="font-size:1.5rem"/>
                                    </template>
                                </div>

                                <!-- File name -->
                                <div class="col-span-6 min-w-0">
                                    <div class="font-semibold truncate" v-text="doc.file_name || doc.name"></div>
                                </div>

                                <!-- Mime type and size -->
                                <div class="col-span-3 text-sm text-slate-500 truncate">
                                    {{ doc.mime_type }} • {{ (doc.size/1024/1024).toFixed(2) }} MB
                                </div>

                                <!-- Actions -->
                                <div class="col-span-2 flex items-center justify-end gap-2">
                                    <simple-button :link="doc.original_url || doc.full_url || doc.url" type="external" color="neutral">
                                        <font-awesome-icon icon="download"/>
                                    </simple-button>
                                    <simple-button color="red" type="button" @click.stop.prevent="deleteExistingDocument(doc.id)">
                                        <font-awesome-icon icon="trash-can"/>
                                    </simple-button>
                                </div>
                            </div>
                        </div>

                        <!-- File input for adding new documents -->
                        <file-input
                            @change="handleDocumentsChange"
                            multiple
                            :accept="documentsAccept"
                            browse-label="Belge Seçin"
                            placeholder=""
                            preview
                        />
                        <p class="text-sm text-gray-500 mt-1">
                            Desteklenen formatlar: PDF, DOC, DOCX, JPG, PNG. Her dosya maksimum 5MB. Birden fazla dosya seçebilirsiniz.
                        </p>
                    </input-group>
                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="resetForm" />
                <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
