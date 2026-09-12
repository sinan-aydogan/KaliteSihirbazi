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
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, maxLength, required, email as emailRule} from "@vuelidate/validators";
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
    {id: 'phone', label: tm('term.phone')},
    {id: 'email', label: tm('term.email')},
    {id: 'tasks_count', label: tm('term.taskCount')},
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
        required: helpers.withMessage(t('message.validation.required'), required),
        email: helpers.withMessage(t('message.validation.email'), emailRule),
    },
    phone: {required: helpers.withMessage(t('message.validation.required'), required)},
    address: {required: helpers.withMessage(t('message.validation.required'), required)},
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
        form.post(route('calibration-firm.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('calibration-firm.update', {id: form.id}), {
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
    form.email = row.email;
    form.phone = row.phone;
    form.address = row.address;
    formType.value = 'update';
    showModal.value = true;
}

const handleDelete = (id) => {
    router.delete(route("calibration-firm.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Kalibrasyon Firmaları — Nasıl Çalışır?" subtitle="Kalibrasyon emri oluştururken seçilebilecek firma listesi">
                <p>Bu liste, bir kalibrasyon emri oluştururken seçilebilecek firmaları tutar. Üzerinde kayıtlı kalibrasyon emri bulunan bir firma silinemez — önce ilgili emirlerin başka bir firmaya taşınması veya silinmesi gerekir.</p>
                <p>Bir firmayı sildiğinizde kalıcı olarak kaybolmaz — "Silinen Öğeler" listesine taşınır ve buradan geri yüklenebilir veya kalıcı olarak silinebilir.</p>
            </help-button>
            <simple-button type="route" :link="route('calibration-firm.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('term.deletedItems')"/>
            </simple-button>
            <simple-button @click="openCreate" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="t('action.addNew')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
        />

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="formType === 'create' ? tm('title.createPage.title') : tm('title.indexPage.title')"
                :subHeader="tm('title.createPage.subTitle')"
                closeable
                close-button
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="email" :label="tm('term.email')" :errors="v$.email.$errors">
                            <text-input v-model="form.email"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="phone" :label="tm('term.phone')" :errors="v$.phone.$errors">
                            <text-input v-model="form.phone"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="address" :label="tm('term.address')" :errors="v$.address.$errors">
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
