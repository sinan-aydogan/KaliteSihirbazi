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
import SelectInput from "@/Components/Form/SelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"

// Props
defineProps({
    tableData: {type: Object, default: () => ({})},
    departments: {type: Array, default: () => []},
    machineTypes: {type: Array, default: () => []},
    employees: {type: Array, default: () => []},
})

// Multi-lang
import Translates from "./translates"
const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"

const tableHeaders = [
    {id: 'code', label: tm('term.code'), width: 'w-32'},
    {id: 'name', label: tm('term.name')},
    {id: 'machine_type_id', label: tm('term.type')},
    {id: 'department_id', label: tm('term.department')},
    {id: 'responsible_id', label: tm('term.responsible')},
    {id: 'is_active', label: tm('term.isActive'), align: 'center'},
]

const showModal = ref(false);
const formType = ref("create");
const form = useForm({
    id: null,
    code: "",
    name: "",
    machine_type_id: null,
    department_id: null,
    responsible_id: null,
    brand: "",
    model: "",
    serial_no: "",
    is_active: true,
    notes: "",
})

const rules = ref({
    code: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [20]), maxLength(20))
    },
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [150]), maxLength(150))
    },
})

const v$ = useVuelidate(rules, form)

const resetForm = () => {
    form.reset();
    v$.value.$reset();
    formType.value = 'create';
}

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('machine.store'), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            },
        })
    } else {
        form.put(route('machine.update', {machine: form.id}), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            },
        })
    }
}

const handleAddNew = () => {
    resetForm();
    showModal.value = true;
    formType.value = 'create';
}

const getRowInfo = (id) => {
    axios.get(route("machine.edit", {machine: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.name = response.data.name;
        form.machine_type_id = response.data.machine_type_id;
        form.department_id = response.data.department_id;
        form.responsible_id = response.data.responsible_id;
        form.brand = response.data.brand;
        form.model = response.data.model;
        form.serial_no = response.data.serial_no;
        form.is_active = response.data.is_active;
        form.notes = response.data.notes;
    })
    showModal.value = true;
    formType.value = "update"
}

const handleModalClosed = () => {
    resetForm();
}

const handleDelete = (id) => {
    router.delete(route("machine.destroy", id), {preserveState: true});
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('machine.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('term.deletedItems')"/>
            </simple-button>

            <simple-button type="route" :link="route('machine-type.index')" color="blue">
                <font-awesome-icon icon="fa-solid fa-cog" class="mr-2"/>
                <span v-text="tm('action.manageTypes')"/>
            </simple-button>

            <simple-button @click="handleAddNew" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="tm('action.addNew')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="tableHeaders"
            @view="router.visit(route('machine.show', $event.id))"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            show-action
            edit-action
            delete-action
        >
            <template #machine_type_id="{props}">
                <span v-if="props.type" v-text="props.type.name"/>
            </template>
            <template #department_id="{props}">
                <span v-if="props.department" v-text="props.department.name"/>
            </template>
            <template #responsible_id="{props}">
                <span v-if="props.responsible" v-text="props.responsible.employeeName"/>
            </template>
            <template #is_active="{props}">
                <font-awesome-icon icon="fa-solid fa-circle-check" :class="props.is_active ? 'text-emerald-500' : ''" size="lg"/>
            </template>
        </Table>
    </app-layout>

    <teleport to="body">
        <Modal v-model="showModal" :header="tm('title.indexPage.title')" closeable close-button @closed="handleModalClosed">
            <Form full-size>
                <FormSection bg-less>
                    <input-group class="col-span-3" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
                        <text-input v-model="form.code"/>
                    </input-group>
                    <input-group class="col-span-9" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                        <text-input v-model="form.name"/>
                    </input-group>
                    <input-group class="col-span-6" labelFor="machine_type_id" :label="tm('term.type')">
                        <select-input v-model="form.machine_type_id" :options="machineTypes" optionLabel="name"/>
                    </input-group>
                    <input-group class="col-span-6" labelFor="department_id" :label="tm('term.department')">
                        <select-input v-model="form.department_id" :options="departments" optionLabel="name"/>
                    </input-group>
                    <input-group class="col-span-6" labelFor="responsible_id" :label="tm('term.responsible')">
                        <select-input v-model="form.responsible_id" :options="employees" optionLabel="employeeName"/>
                    </input-group>
                    <input-group class="col-span-4" labelFor="brand" :label="tm('term.brand')">
                        <text-input v-model="form.brand"/>
                    </input-group>
                    <input-group class="col-span-4" labelFor="model" :label="tm('term.model')">
                        <text-input v-model="form.model"/>
                    </input-group>
                    <input-group class="col-span-4" labelFor="serial_no" :label="tm('term.serialNo')">
                        <text-input v-model="form.serial_no"/>
                    </input-group>
                    <input-group class="col-span-3" labelFor="is_active" :label="tm('term.isActive')">
                        <switch-input v-model="form.is_active"/>
                    </input-group>
                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="resetForm"/>
                <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
