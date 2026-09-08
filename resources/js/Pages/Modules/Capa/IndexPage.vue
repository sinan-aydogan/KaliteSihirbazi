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
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, maxLength, required} from "@vuelidate/validators";
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
    }
})

const typeOptions = computed(() => [
    {id: 'corrective', label: tm('term.capaType.corrective')},
    {id: 'preventive', label: tm('term.capaType.preventive')},
])

const sourceTypeOptions = computed(() => [
    {id: 'document_revision_request', label: tm('term.capaSourceType.document_revision_request')},
    {id: 'audit_finding', label: tm('term.capaSourceType.audit_finding')},
    {id: 'customer_complaint', label: tm('term.capaSourceType.customer_complaint')},
    {id: 'internal', label: tm('term.capaSourceType.internal')},
    {id: 'other', label: tm('term.capaSourceType.other')},
])

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))

const statusLabel = (status) => tm(`term.capaStatus.${status}`)

const statusColorClasses = {
    open: 'bg-slate-100 text-slate-700',
    action_plan: 'bg-sky-100 text-sky-700',
    in_progress: 'bg-amber-100 text-amber-700',
    pending_verification: 'bg-violet-100 text-violet-700',
    closed_effective: 'bg-emerald-100 text-emerald-700',
    closed_ineffective: 'bg-rose-100 text-rose-700',
}

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'title', label: tm('term.title')},
    {id: 'type', label: tm('term.type'), value: (row) => tm(`term.capaType.${row.type}`)},
    {id: 'responsible', label: tm('term.responsible'), value: (row) => row.responsible?.name ?? '-'},
    {id: 'due_date', label: tm('term.dueDate'), value: (row) => new Date(row.due_date).toLocaleDateString('tr-TR')},
    {id: 'status', label: tm('term.status')},
    {id: 'actions_count', label: tm('term.actionCount')},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    title: "",
    type: "corrective",
    description: "",
    source_type: null,
    root_cause: "",
    responsible_id: null,
    due_date: "",
})

const rules = ref({
    title: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    type: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    description: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    source_type: {},
    root_cause: {},
    responsible_id: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    due_date: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
})

const v$ = useVuelidate(rules, form)

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    formType.value = 'create';
    showModal.value = true;
}

/*Create/Update*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('capa.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('capa.update', {id: form.id}), {
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
    axios.get(route("capa.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.title = response.data.title;
        form.type = response.data.type;
        form.description = response.data.description;
        form.source_type = response.data.source_type;
        form.root_cause = response.data.root_cause;
        form.responsible_id = response.data.responsible_id;
        form.due_date = response.data.due_date?.substring(0, 10);
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("capa.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
            :custom-actions="[{
                action: (row) => router.visit(route('capa.show', row.id)),
                color: 'blue',
                icon: 'list-check',
                label: tm('action.viewDetails'),
            }]"
        >
            <!--Status-->
            <template #status="{props: row}">
                <span v-text="statusLabel(row.status)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="statusColorClasses[row.status] ?? 'bg-slate-100 text-slate-700'"/>
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
                :header="tm('title.createPage.title')"
                :subHeader="tm('title.createPage.subTitle')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="title" :label="tm('term.title')" :errors="v$.title.$errors">
                            <text-input v-model="form.title"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="type" :label="tm('term.type')" :errors="v$.type.$errors">
                            <select-input v-model="form.type" :options="typeOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="source_type" :label="tm('term.sourceType')">
                            <select-input v-model="form.source_type" :options="sourceTypeOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')" :errors="v$.description.$errors">
                            <text-area-input v-model="form.description"/>
                        </input-group>

                        <input-group v-if="formType === 'update'" class="col-span-6" labelFor="root_cause" :label="tm('term.rootCause')">
                            <text-area-input v-model="form.root_cause"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="responsible_id" :label="tm('term.responsible')" :errors="v$.responsible_id.$errors">
                            <select-input v-model="form.responsible_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="due_date" :label="tm('term.dueDate')" :errors="v$.due_date.$errors">
                            <text-input input-type="date" v-model="form.due_date"/>
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
