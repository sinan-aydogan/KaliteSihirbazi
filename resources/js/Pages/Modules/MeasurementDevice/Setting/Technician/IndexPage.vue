<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, ref} from "vue"
import {useForm, router} from "@inertiajs/vue3";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import FileInput from "@/Components/Form/FileInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    tableData: {
        type: Object,
        default: () => ({})
    },
    users: {
        type: Array,
        default: () => []
    },
    measurementDeviceTypes: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const deviceTypeOptions = computed(() => props.measurementDeviceTypes.map(d => ({id: d.id, label: d.name})))

const headers = [
    {id: 'user', label: tm('term.user'), value: (row) => row.user?.name ?? '-'},
    {id: 'measurement_device_types', label: tm('term.deviceTypes'), value: (row) => row.measurement_device_types.map(d => d.name).join(', ') || '-'},
    {id: 'is_active', label: tm('term.isActive'), value: (row) => row.is_active ? '✔' : '-'},
    {id: 'competency_documents', label: tm('term.competencyDocuments'), value: (row) => row.competency_documents.length},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    user_id: null,
    is_active: true,
    notes: "",
    measurement_device_type_ids: [],
    competency_documents: [],
})

const rules = ref({
    user_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    is_active: {},
    notes: {},
    measurement_device_type_ids: {},
})

const v$ = useVuelidate(rules, form)

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    formType.value = 'create';
    showModal.value = true;
}

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('calibration-technician.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('calibration-technician.update', {id: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    }
}

const getRowInfo = (row) => {
    form.id = row.id;
    form.user_id = row.user_id;
    form.is_active = row.is_active;
    form.notes = row.notes;
    form.measurement_device_type_ids = row.measurement_device_types.map(d => d.id);
    formType.value = 'update';
    showModal.value = true;
}

const handleDelete = (id) => {
    router.delete(route("calibration-technician.destroy", id), {
        preserveState: true,
    });
}

const deleteMedia = (technicianId, mediaId) => {
    router.delete(route("calibration-technician.delete-media", [technicianId, mediaId]), {
        preserveState: true,
        preserveScroll: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Kalibrasyon Personeli — Nasıl Çalışır?" subtitle="İç kalibrasyon yapmaya yetkili personel havuzu">
                <p>Bir personeli burada kalibrasyon teknisyeni olarak tanımlayın ve hangi cihaz tiplerini (örn. Kumpas, Terazi) kalibre etmeye yetkili olduğunu (çoklu seçim) belirtin.</p>
                <p>Bir kalibrasyon görevi "İç Kalibrasyon" olarak işaretlendiğinde, "Kalibrasyonu Yapan" alanında sadece o cihazın tipi için burada aktif+yetkili olarak tanımlanmış teknisyenler seçilebilir.</p>
                <p>"Yetkinlik Belgeleri" ile personelin kalibrasyon konusundaki eğitim/sertifika belgelerini yükleyebilirsiniz.</p>
            </help-button>
        </template>

        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
        >
            <!--Competency Documents-->
            <template #competency_documents="{props: row}">
                <div class="flex flex-col gap-1">
                    <div v-for="doc in row.competency_documents" :key="doc.id" class="flex items-center gap-2">
                        <a :href="doc.url" target="_blank" class="text-sky-600 hover:underline truncate max-w-40">{{ doc.name }}</a>
                        <font-awesome-icon icon="trash-can" class="cursor-pointer text-rose-600 text-xs" @click="deleteMedia(row.id, doc.id)"/>
                    </div>
                    <span v-if="row.competency_documents.length === 0" class="text-slate-400">-</span>
                </div>
            </template>

            <template #actionArea>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="t('action.addNew')"/>
                </simple-button>
            </template>
        </Table>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="formType === 'create' ? tm('title.createPage.title') : tm('title.indexPage.title')"
                :subHeader="tm('title.createPage.subTitle')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="user_id" :label="tm('term.user')" :errors="v$.user_id.$errors">
                            <select-input v-model="form.user_id" :options="userOptions" :disabled="formType === 'update'"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="measurement_device_type_ids" :label="tm('term.deviceTypes')">
                            <multi-select-input v-model="form.measurement_device_type_ids" :options="deviceTypeOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="is_active" :label="tm('term.isActive')">
                            <switch-input v-model="form.is_active"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="notes" :label="tm('term.notes')">
                            <text-area-input v-model="form.notes"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="competency_documents" :label="tm('term.competencyDocuments')">
                            <file-input multiple accept=".pdf,.jpg,.jpeg,.png" @change="form.competency_documents = $event ?? []"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                    <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
