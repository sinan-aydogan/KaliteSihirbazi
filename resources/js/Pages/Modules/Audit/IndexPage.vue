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
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue"

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
    },
    standards: {
        type: Array,
        default: () => []
    },
    companyAccreditations: {
        type: Array,
        default: () => []
    },
    auditFirms: {
        type: Array,
        default: () => []
    },
    auditFirmAuditors: {
        type: Array,
        default: () => []
    },
    departments: {
        type: Array,
        default: () => []
    },
    auditTypes: {
        type: Array,
        default: () => []
    },
    auditScopes: {
        type: Array,
        default: () => []
    },
    checklistTemplates: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const standardOptions = computed(() => props.standards.map(s => ({id: s.id, label: s.name})))
const auditFirmOptions = computed(() => props.auditFirms.map(f => ({id: f.id, label: f.name})))
const departmentOptions = computed(() => props.departments.map(d => ({id: d.id, label: d.name})))
const auditTypeOptions = computed(() => props.auditTypes.map(t => ({id: t.id, label: t.name})))
const auditScopeOptions = computed(() => props.auditScopes.map(s => ({id: s.id, label: s.name})))
const checklistTemplateOptions = computed(() => props.checklistTemplates.map(ct => ({id: ct.id, label: ct.name})))
const companyAccreditationOptions = computed(() => props.companyAccreditations.map(ca => ({
    id: ca.id,
    label: `${ca.standard?.name ?? ''} — ${ca.certificate_number}`,
})))
const firmAuditorOptions = computed(() => props.auditFirmAuditors
    .filter(a => !form.audit_firm_id || a.audit_firm_id === form.audit_firm_id)
    .map(a => ({id: a.id, label: a.name})))

const selectedAuditType = computed(() => props.auditTypes.find(t => t.id === form.audit_type_id))
const isInternal = computed(() => selectedAuditType.value?.direction === 'internal')

const statusLabel = (status) => tm(`term.auditStatus.${status}`)

const statusColorClasses = {
    planned: 'bg-slate-100 text-slate-700',
    in_progress: 'bg-amber-100 text-amber-700',
    completed: 'bg-emerald-100 text-emerald-700',
    cancelled: 'bg-rose-100 text-rose-700',
}

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'title', label: tm('term.title')},
    {id: 'audit_type', label: tm('term.type'), value: (row) => row.audit_type?.name ?? '-'},
    {id: 'audit_firm', label: tm('term.auditFirm'), value: (row) => row.audit_firm?.name ?? row.auditor?.name ?? '-'},
    {id: 'planned_date', label: tm('term.plannedDate'), value: (row) => new Date(row.planned_date).toLocaleDateString('tr-TR')},
    {id: 'status', label: tm('term.status')},
    {id: 'findings_count', label: tm('term.findingCount')},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    title: "",
    audit_type_id: null,
    standard_id: null,
    company_accreditation_id: null,
    audit_firm_id: null,
    firm_auditor_ids: [],
    auditor_id: null,
    department_id: null,
    scope_ids: [],
    checklist_template_id: null,
    scope: "",
    planned_date: "",
})

const rules = ref({
    title: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    audit_type_id: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    standard_id: {},
    company_accreditation_id: {},
    audit_firm_id: {},
    firm_auditor_ids: {},
    auditor_id: {},
    department_id: {},
    scope_ids: {},
    checklist_template_id: {},
    scope: {},
    planned_date: {
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

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('audit.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('audit.update', {id: form.id}), {
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
    axios.get(route("audit.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.title = response.data.title;
        form.audit_type_id = response.data.audit_type_id;
        form.standard_id = response.data.standard_id;
        form.company_accreditation_id = response.data.company_accreditation_id;
        form.audit_firm_id = response.data.audit_firm_id;
        form.firm_auditor_ids = response.data.firm_auditors.map(a => a.id);
        form.auditor_id = response.data.auditor_id;
        form.department_id = response.data.department_id;
        form.scope_ids = response.data.scopes.map(s => s.id);
        form.scope = response.data.scope;
        form.planned_date = response.data.planned_date?.substring(0, 10);
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("audit.destroy", id), {
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
                action: (row) => router.visit(route('audit.show', row.id)),
                color: 'blue',
                icon: 'eye',
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

                        <input-group class="col-span-3" labelFor="audit_type_id" :label="tm('term.type')" :errors="v$.audit_type_id.$errors">
                            <select-input v-model="form.audit_type_id" :options="auditTypeOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="planned_date" :label="tm('term.plannedDate')" :errors="v$.planned_date.$errors">
                            <text-input input-type="date" v-model="form.planned_date"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="scope_ids" :label="tm('term.scopes')">
                            <multi-select-input v-model="form.scope_ids" :options="auditScopeOptions"/>
                        </input-group>

                        <template v-if="isInternal">
                            <input-group class="col-span-6" labelFor="department_id" :label="tm('term.department')">
                                <select-input v-model="form.department_id" :options="departmentOptions"/>
                            </input-group>

                            <input-group v-if="formType === 'create'" class="col-span-6" labelFor="checklist_template_id" :label="tm('term.checklistTemplate')">
                                <select-input v-model="form.checklist_template_id" :options="checklistTemplateOptions"/>
                            </input-group>
                        </template>

                        <template v-else>
                            <input-group class="col-span-3" labelFor="standard_id" :label="tm('term.standard')">
                                <select-input v-model="form.standard_id" :options="standardOptions"/>
                            </input-group>

                            <input-group class="col-span-3" labelFor="company_accreditation_id" :label="tm('term.companyAccreditation')">
                                <select-input v-model="form.company_accreditation_id" :options="companyAccreditationOptions"/>
                            </input-group>

                            <input-group class="col-span-3" labelFor="audit_firm_id" :label="tm('term.auditFirm')">
                                <select-input v-model="form.audit_firm_id" :options="auditFirmOptions"/>
                            </input-group>

                            <input-group class="col-span-3" labelFor="firm_auditor_ids" :label="tm('term.firmAuditors')">
                                <multi-select-input v-model="form.firm_auditor_ids" :options="firmAuditorOptions"/>
                            </input-group>
                        </template>

                        <input-group class="col-span-6" labelFor="auditor_id" :label="tm('term.auditor')">
                            <select-input v-model="form.auditor_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="scope" :label="tm('term.scope')">
                            <text-area-input v-model="form.scope"/>
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
