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
import SelectInput from "@/Components/Form/SelectInput.vue"

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

const directionOptions = computed(() => [
    {id: 'internal', label: tm('term.directionValue.internal')},
    {id: 'external', label: tm('term.directionValue.external')},
])

const headers = [
    {id: 'name', label: tm('term.name')},
    {id: 'direction', label: tm('term.direction'), value: (row) => tm(`term.directionValue.${row.direction}`)},
    {id: 'audits_count', label: tm('term.auditCount')},
    {id: 'is_protected', label: tm('term.protected'), value: (row) => row.is_protected ? '✔' : '-'},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: "",
    direction: "internal",
    sort_order: 0,
})

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    direction: {
        required: helpers.withMessage(t('message.validation.required'), required),
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
        form.post(route('audit-type.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('audit-type.update', {id: form.id}), {
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
    form.direction = row.direction;
    form.sort_order = row.sort_order;
    showModal.value = true;
    formType.value = "update"
}

const handleDelete = (id) => {
    router.delete(route("audit-type.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.typesPage.title')" :sub-title="tm('title.typesPage.subTitle')">
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
                :header="tm('title.typesPage.title')"
                closeable
                close-button
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-4" labelFor="direction" :label="tm('term.direction')" :errors="v$.direction.$errors">
                            <select-input v-model="form.direction" :options="directionOptions"/>
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
