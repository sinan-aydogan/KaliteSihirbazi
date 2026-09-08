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
import SelectInput from "@/Components/Form/SelectInput.vue"
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    tableData: {
        type: Object,
        default: () => ({})
    },
    users: {
        type: Array,
        default: () => []
    },
    departments: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const departmentOptions = computed(() => props.departments.map(d => ({id: d.id, label: d.name})))

const headers = [
    {id: 'user', label: tm('term.user'), value: (row) => row.user?.name ?? '-'},
    {id: 'departments', label: tm('term.departments'), value: (row) => row.departments.map(d => d.name).join(', ') || '-'},
    {id: 'is_active', label: tm('term.isActive'), value: (row) => row.is_active ? '✔' : '-'},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    user_id: null,
    is_active: true,
    notes: "",
    department_ids: [],
})

const rules = ref({
    user_id: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    is_active: {},
    notes: {},
    department_ids: {},
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
        form.post(route('internal-auditor.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('internal-auditor.update', {id: form.id}), {
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
    form.user_id = row.user_id;
    form.is_active = row.is_active;
    form.notes = row.notes;
    form.department_ids = row.departments.map(d => d.id);
    showModal.value = true;
    formType.value = "update"
}

const handleDelete = (id) => {
    router.delete(route("internal-auditor.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="İç Denetçiler — Nasıl Çalışır?" subtitle="İç denetim yapmaya yetkili personel ve sorumlu oldukları departmanlar">
                <p>Bir personeli iç denetçi olarak burada tanımlayın ve hangi departman(lar)dan sorumlu olduğunu (çoklu seçim) belirtin — bu, kimin hangi alanı denetleyebileceğini gösteren bir roster/havuzdur.</p>
                <p>"Aktif" durumu kapatılan bir denetçi listede görünmeye devam eder ancak pasif olarak işaretlenir; kaldırmak için silme işlemini kullanın.</p>
                <p>Bu liste şu an "Denetimler" sayfasındaki Denetçi (Sorumlu) seçiminden bağımsızdır — bir bilgi/roster kaydı olarak tutulur, denetim planlarken hâlâ tüm kullanıcılar arasından seçim yapılabilir.</p>
            </help-button>
        </template>

        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
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
                        <input-group class="col-span-6" labelFor="user_id" :label="tm('term.user')" :errors="v$.user_id.$errors">
                            <select-input v-model="form.user_id" :options="userOptions" :disabled="formType === 'update'"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="department_ids" :label="tm('term.departments')">
                            <multi-select-input v-model="form.department_ids" :options="departmentOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="is_active" :label="tm('term.isActive')">
                            <switch-input v-model="form.is_active"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="notes" :label="tm('term.notes')">
                            <text-area-input v-model="form.notes"/>
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
