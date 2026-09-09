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
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

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
    {id: 'description', label: tm('term.description'), value: (row) => row.description ?? '-'},
    {id: 'company_accreditations_count', label: tm('term.accreditationCount')},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: "",
    description: "",
})

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    description: {},
})

const v$ = useVuelidate(rules, form)

/*Create/Update*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('standard.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('standard.update', {id: form.id}), {
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
    axios.get(route("standard.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.name = response.data.name;
        form.description = response.data.description;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("standard.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Standartlar — Nasıl Çalışır?" subtitle="Standart ile akreditasyon kaydı arasındaki ilişkiyi buradan öğrenin">
                <p><strong>Standart:</strong> Şirketin uyduğu/uygulamak istediği kalite standardının tanımıdır (ör. ISO 9001, ISO 14001). Kendisi bir sertifika değildir — bir sertifikasyon kuruluşunun bu standarda göre verdiği somut belgeler ayrı bir kayıt olan "akreditasyon"dur.</p>
                <p><strong>Akreditasyon Sayısı:</strong> Bir standarda bağlı kaç akreditasyon (sertifika) kaydı olduğunu gösterir. Sertifika numarası, geçerlilik tarihleri ve durumu yönetmek için sertifika ikonuna tıklayarak o standardın akreditasyon listesine gidin.</p>
            </help-button>
        </template>
        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
            :custom-actions="[{
                action: (row) => router.visit(route('company-accreditation.index', row.id)),
                color: 'blue',
                icon: 'certificate',
                label: tm('action.manageAccreditations'),
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
