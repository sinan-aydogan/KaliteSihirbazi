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

// Multi-lang
import Translates from "../translates"
const {t, tm} = Translates();

defineProps({
    tableData: {type: Object, default: () => ({})},
})

const headers = [
    {id: 'name', label: tm('term.typeName')},
]

const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: "",
})

import {helpers, maxLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [100]), maxLength(100))
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
        form.post(route('machine-type.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('machine-type.update', {machine_type: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    }
}

const getRowInfo = (id) => {
    axios.get(route("machine-type.edit", {machine_type: id})).then(response => {
        form.id = response.data.id;
        form.name = response.data.name;
    })
    showModal.value = true;
    formType.value = "update"
}

const handleDelete = (id) => {
    router.delete(route("machine-type.destroy", id), {preserveState: true});
}
</script>

<template>
    <app-layout :title="tm('title.typeIndexPage.title')" :sub-title="tm('title.typeIndexPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('machine.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <Table :data="tableData" :headers="headers" @edit="getRowInfo($event.id)" @delete="handleDelete($event.id)" edit-action delete-action>
            <template #actionArea>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="tm('action.addNew')"/>
                </simple-button>
            </template>
        </Table>

        <teleport to="body">
            <Modal v-model="showModal" :header="tm('title.typeIndexPage.title')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-12" labelFor="name" :label="tm('term.typeName')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
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
