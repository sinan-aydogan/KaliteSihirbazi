<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue"
import Modal from "@/Components/Modal/Modal.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

// Props
defineProps({
    tableData: {
        type: Object,
        default: () => ({data: []})
    }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"

/*Table*/
const tableHeaders = [
    {id: 'code', label: tm('term.code')},
    {id: 'name', label: tm('term.name')},
    {id: 'complaints_count', label: tm('term.complaintCount')},
    {id: 'is_active', label: tm('term.status'), align: 'center'},
]

const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    code: "",
    name: "",
    is_active: true,
})

const rules = ref({
    code: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
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

const openCreate = () => {
    resetForm();
    showModal.value = true;
}

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('distributor.store'), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('distributor.update', {id: form.id}), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            }
        })
    }
}

const getRowInfo = (row) => {
    form.id = row.id;
    form.code = row.code;
    form.name = row.name;
    form.is_active = row.is_active;
    formType.value = 'update';
    showModal.value = true;
}

const handleDelete = (id) => {
    router.delete(route("distributor.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Dağıtıcılar — Nasıl Çalışır?" subtitle="Dağıtıcı kayıtlarınızı buradan yönetirsiniz">
                <p>Bu liste, Müşteri Şikayetleri modülünde <strong>"Dağıtıcı" kaynaklı</strong> bir şikayet kaydedilirken seçilebilecek dağıtıcıları tutar.</p>
                <p>Üzerinde kayıtlı şikayet bulunan bir dağıtıcı silinemez.</p>
            </help-button>
            <simple-button @click="openCreate" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="t('action.addNew')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="tableHeaders"
            @edit="getRowInfo"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
        >
            <!--Status-->
            <template #is_active="{props: row}">
                <font-awesome-icon icon="fa-solid fa-circle-check" :class="row.is_active ? 'text-emerald-500': ''" size="lg"/>
            </template>
        </Table>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="formType === 'create' ? tm('title.createPage.title') : tm('title.updatePage.title')"
                :subHeader="formType === 'create' ? tm('title.createPage.subTitle') : tm('title.updatePage.subTitle')"
                closeable
                closeButton
                @closed="resetForm"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-3" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
                            <text-input v-model="form.code"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="is_active" :label="tm('term.status')">
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
    </app-layout>
</template>
