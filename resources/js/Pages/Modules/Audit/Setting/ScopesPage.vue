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

// Multi-lang
import Translates from "../translates"

/*Validation*/
import {helpers, maxLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

defineProps({
    tableData: {
        type: Object,
        default: () => ({})
    }
})

const headers = [
    {id: 'name', label: tm('term.name')},
    {id: 'audits_count', label: tm('term.auditCount')},
    {id: 'is_protected', label: tm('term.protected'), value: (row) => row.is_protected ? '✔' : '-'},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: "",
    sort_order: 0,
})

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    sort_order: {},
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
        form.post(route('audit-scope.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('audit-scope.update', {id: form.id}), {
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
    form.sort_order = row.sort_order;
    showModal.value = true;
    formType.value = "update"
}

const handleDelete = (id) => {
    router.delete(route("audit-scope.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.scopesPage.title')" :sub-title="tm('title.scopesPage.subTitle')">
        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
            :delete-action-visible="(row) => !row.is_protected"
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
                :header="tm('title.scopesPage.title')"
                closeable
                close-button
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-4" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-2" labelFor="sort_order" :label="tm('term.sortOrder')">
                            <text-input input-type="number" v-model="form.sort_order"/>
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
