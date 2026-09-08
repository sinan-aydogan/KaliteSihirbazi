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
    departments: {
        type: Array,
        default: () => []
    },
    problemSourceTypes: {
        type: Array,
        default: () => []
    }
})

const sourceTypeOptions = computed(() => props.problemSourceTypes.map(t => ({id: t.id, label: t.name})))

const severityOptions = computed(() => [
    {id: 'low', label: tm('term.problemSeverity.low')},
    {id: 'medium', label: tm('term.problemSeverity.medium')},
    {id: 'high', label: tm('term.problemSeverity.high')},
    {id: 'critical', label: tm('term.problemSeverity.critical')},
])

const departmentOptions = computed(() => props.departments.map(d => ({id: d.id, label: d.name})))

const statusColorClasses = {
    open: 'bg-slate-100 text-slate-700',
    under_review: 'bg-sky-100 text-sky-700',
    capa_raised: 'bg-amber-100 text-amber-700',
    closed_without_capa: 'bg-emerald-100 text-emerald-700',
    closed: 'bg-emerald-100 text-emerald-700',
}

const severityColorClasses = {
    low: 'bg-slate-100 text-slate-700',
    medium: 'bg-sky-100 text-sky-700',
    high: 'bg-amber-100 text-amber-700',
    critical: 'bg-rose-100 text-rose-700',
}

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'title', label: tm('term.title')},
    {id: 'source_type', label: tm('term.sourceType'), value: (row) => row.problem_source_type?.name ?? '-'},
    {id: 'severity', label: tm('term.severity')},
    {id: 'detected_date', label: tm('term.detectedDate'), value: (row) => new Date(row.detected_date).toLocaleDateString('tr-TR')},
    {id: 'status', label: tm('term.status')},
    {id: 'capas_count', label: tm('term.capaCount')},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    title: "",
    description: "",
    problem_source_type_id: null,
    severity: "medium",
    department_id: null,
    detected_date: "",
})

const rules = ref({
    title: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    description: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    problem_source_type_id: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    severity: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    department_id: {},
    detected_date: {
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
        form.post(route('problem.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('problem.update', {id: form.id}), {
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
    axios.get(route("problem.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.title = response.data.title;
        form.description = response.data.description;
        form.problem_source_type_id = response.data.problem_source_type_id;
        form.severity = response.data.severity;
        form.department_id = response.data.department_id;
        form.detected_date = response.data.detected_date?.substring(0, 10);
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("problem.destroy", id), {
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
                action: (row) => router.visit(route('problem.show', row.id)),
                color: 'blue',
                icon: 'bug',
                label: tm('action.viewDetails'),
            }]"
        >
            <!--Severity-->
            <template #severity="{props: row}">
                <span v-text="tm(`term.problemSeverity.${row.severity}`)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="severityColorClasses[row.severity] ?? 'bg-slate-100 text-slate-700'"/>
            </template>

            <!--Status-->
            <template #status="{props: row}">
                <span v-text="tm(`term.problemStatus.${row.status}`)"
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

                        <input-group class="col-span-3" labelFor="problem_source_type_id" :label="tm('term.sourceType')" :errors="v$.problem_source_type_id.$errors">
                            <select-input v-model="form.problem_source_type_id" :options="sourceTypeOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="severity" :label="tm('term.severity')" :errors="v$.severity.$errors">
                            <select-input v-model="form.severity" :options="severityOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')" :errors="v$.description.$errors">
                            <text-area-input v-model="form.description"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="department_id" :label="tm('term.department')">
                            <select-input v-model="form.department_id" :options="departmentOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="detected_date" :label="tm('term.detectedDate')" :errors="v$.detected_date.$errors">
                            <text-input input-type="date" v-model="form.detected_date"/>
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
