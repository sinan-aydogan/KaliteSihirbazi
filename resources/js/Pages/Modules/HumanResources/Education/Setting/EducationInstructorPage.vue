<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
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

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    }
})

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
        label: tm('term.name')
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
        label: 'Verdiği Eğitimler',
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
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('education-instructor.update', {id: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    }
}

/*Update*/
const getRowInfo = (id) => {
    axios.get(route("education-instructor.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.name = response.data.name;
        // Media files are handled separately
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("education-instructor.destroy", id), {
        preserveState: true,
    });
}

/*View Details*/
const viewDetails = (id) => {
    router.visit(route("education-instructor.show", id));
}

// File handlers
const handlePhotoChange = (files) => {
    form.photo = files[0] || null;
}

const handleDocumentsChange = (files) => {
    form.documents = Array.from(files);
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
            @view="viewDetails($event.id)"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            show-action
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
                        <file-input
                            @change="handlePhotoChange"
                            accept="image/*"
                            browse-label="Fotoğraf Seçin"
                            preview
                        />
                        <p class="text-sm text-gray-500 mt-1">
                            Desteklenen formatlar: JPG, PNG. Maksimum 2MB.
                        </p>
                    </input-group>

                    <!-- Documents -->
                    <input-group class="col-span-12" labelFor="documents" :label="tm('term.documents')">
                        <file-input
                            @change="handleDocumentsChange"
                            multiple
                            accept=".pdf,.doc,.docx,image/*"
                            browse-label="Belge Seçin"
                            preview
                        />
                        <p class="text-sm text-gray-500 mt-1">
                            Desteklenen formatlar: PDF, DOC, DOCX, JPG, PNG. Her dosya maksimum 5MB. Birden fazla dosya seçebilirsiniz.
                        </p>
                    </input-group>
                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()" />
                <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
