<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue"
import {useForm, router} from "@inertiajs/vue3";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import FileInput from "@/Components/Form/FileInput.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    auditFirm: Object,
    auditors: {
        type: Array,
        default: () => []
    }
})

const headers = [
    {id: 'name', label: tm('term.auditorName')},
    {id: 'title', label: tm('term.auditorTitle'), value: (row) => row.title ?? '-'},
    {id: 'email', label: tm('term.email'), value: (row) => row.email ?? '-'},
    {id: 'competency_documents', label: tm('term.competencyDocuments'), value: (row) => row.competency_documents.length},
    {id: 'visit_documents', label: tm('term.visitDocuments'), value: (row) => row.visit_documents.length},
]

/*Form*/
const showModal = ref(false);
const form = useForm({
    name: "",
    title: "",
    email: "",
    phone: "",
    competency_documents: [],
    visit_documents: [],
})

const rules = ref({
    name: {required: helpers.withMessage(t('message.validation.required'), required)},
    title: {},
    email: {},
    phone: {},
})

const v$ = useVuelidate(rules, form)

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    showModal.value = true;
}

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    form.post(route('audit-firm-auditor.store', props.auditFirm.id), {
        onSuccess: () => {
            form.reset();
            v$.value.$reset();
            showModal.value = false;
        }
    })
}

const handleDelete = (id) => {
    router.delete(route("audit-firm-auditor.destroy", id), {
        preserveState: true,
    });
}

const deleteMedia = (auditorId, mediaId) => {
    router.delete(route("audit-firm-auditor.delete-media", [auditorId, mediaId]), {
        preserveState: true,
        preserveScroll: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.auditorsPage.title') + ' — ' + auditFirm.name" :sub-title="tm('title.auditorsPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('audit-firm.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <Table
            :data="auditors"
            :headers="headers"
            @delete="handleDelete($event.id)"
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

            <!--Visit Documents-->
            <template #visit_documents="{props: row}">
                <div class="flex flex-col gap-1">
                    <div v-for="doc in row.visit_documents" :key="doc.id" class="flex items-center gap-2">
                        <a :href="doc.url" target="_blank" class="text-sky-600 hover:underline truncate max-w-40">{{ doc.name }}</a>
                        <font-awesome-icon icon="trash-can" class="cursor-pointer text-rose-600 text-xs" @click="deleteMedia(row.id, doc.id)"/>
                    </div>
                    <span v-if="row.visit_documents.length === 0" class="text-slate-400">-</span>
                </div>
            </template>

            <template #actionArea>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="tm('action.addAuditor')"/>
                </simple-button>
            </template>
        </Table>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="tm('title.createAuditorPage.title')"
                :subHeader="tm('title.createAuditorPage.subTitle')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="name" :label="tm('term.auditorName')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="title" :label="tm('term.auditorTitle')">
                            <text-input v-model="form.title"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="email" :label="tm('term.email')">
                            <text-input v-model="form.email"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="competency_documents" :label="tm('term.competencyDocuments')">
                            <file-input multiple accept=".pdf,.jpg,.jpeg,.png" @change="form.competency_documents = $event ?? []"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="visit_documents" :label="tm('term.visitDocuments')">
                            <file-input multiple accept=".pdf,.jpg,.jpeg,.png" @change="form.visit_documents = $event ?? []"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                    <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
