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
import Translates from "./translates"

/*Validation*/
import {email, helpers, maxLength, required} from "@vuelidate/validators";
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
    {id: 'email', label: tm('term.email'), value: (row) => row.email ?? '-'},
    {id: 'phone', label: tm('term.phone'), value: (row) => row.phone ?? '-'},
    {id: 'audits_count', label: tm('term.auditCount')},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: "",
})

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    email: {
        email: helpers.withMessage(t('message.validation.email'), email),
    },
    phone: {},
    address: {},
})

const v$ = useVuelidate(rules, form)

/*Create/Update*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('audit-firm.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('audit-firm.update', {id: form.id}), {
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
    axios.get(route("audit-firm.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.name = response.data.name;
        form.email = response.data.email;
        form.phone = response.data.phone;
        form.address = response.data.address;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("audit-firm.destroy", id), {
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
                action: (row) => router.visit(route('audit-firm-auditor.index', row.id)),
                color: 'blue',
                icon: 'user-group',
                label: t('action.manageAuditors'),
            }]"
        >
            <template #actionArea>
                <simple-button @click="showModal = true; formType = 'create'" color="green">
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
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="email" :label="tm('term.email')" :errors="v$.email.$errors">
                            <text-input v-model="form.email"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="phone" :label="tm('term.phone')">
                            <text-input v-model="form.phone"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="address" :label="tm('term.address')">
                            <text-input v-model="form.address"/>
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
