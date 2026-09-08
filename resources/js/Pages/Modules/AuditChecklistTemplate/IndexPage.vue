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
import SwitchInput from "@/Components/Form/SwitchInput.vue"

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
    auditScopes: {
        type: Array,
        default: () => []
    },
})

const scopeOptions = computed(() => props.auditScopes.map(s => ({id: s.id, label: s.name})))

const headers = [
    {id: 'name', label: tm('term.name')},
    {id: 'audit_scope', label: tm('term.auditScope'), value: (row) => row.audit_scope?.name ?? '-'},
    {id: 'questions_count', label: tm('term.questionCount')},
    {id: 'is_active', label: tm('term.isActive'), value: (row) => row.is_active ? '✔' : '-'},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: "",
    audit_scope_id: null,
    description: "",
    is_active: true,
})

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    audit_scope_id: {},
    description: {},
    is_active: {},
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
        form.post(route('audit-checklist-template.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('audit-checklist-template.update', {id: form.id}), {
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
    form.name = row.name;
    form.audit_scope_id = row.audit_scope_id;
    form.description = row.description;
    form.is_active = row.is_active;
    showModal.value = true;
    formType.value = "update"
}

const handleDelete = (id) => {
    router.delete(route("audit-checklist-template.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
            :custom-actions="[{
                action: (row) => router.visit(route('audit-checklist-template.show', row.id)),
                color: 'blue',
                icon: 'list-check',
                label: tm('action.addQuestion'),
            }]"
        >
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
                        <input-group class="col-span-6" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-4" labelFor="audit_scope_id" :label="tm('term.auditScope')">
                            <select-input v-model="form.audit_scope_id" :options="scopeOptions"/>
                        </input-group>

                        <input-group class="col-span-2" labelFor="is_active" :label="tm('term.isActive')">
                            <switch-input v-model="form.is_active"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')">
                            <text-area-input v-model="form.description"/>
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
