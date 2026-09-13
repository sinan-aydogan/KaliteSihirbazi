<script setup>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import {computed, ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";
import Menu from "../menu";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue"
import Modal from "@/Components/Modal/Modal.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

const {links} = Menu()

const props = defineProps({
    tableData: {
        type: Object,
        default: () => ({data: []})
    },
    departments: {
        type: Array,
        default: () => []
    },
    users: {
        type: Array,
        default: () => []
    },
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"

const departmentOptions = computed(() => props.departments.map(d => ({id: d.id, label: d.name})))
const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))

const tableHeaders = [
    {id: 'name', label: tm('term.name')},
    {id: 'department', label: tm('term.department'), value: (row) => row.department?.name ?? '-'},
    {id: 'responsible', label: tm('term.responsible'), value: (row) => row.responsible?.name ?? '-'},
    {id: 'five_s_audits_count', label: tm('term.fiveSAuditCount')},
    {id: 'gemba_walks_count', label: tm('term.gembaWalkCount')},
    {id: 'is_active', label: tm('term.status'), align: 'center'},
]

const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: "",
    department_id: null,
    responsible_id: null,
    is_active: true,
})

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
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
        form.post(route('improvement-area.store'), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('improvement-area.update', {id: form.id}), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            }
        })
    }
}

const getRowInfo = (row) => {
    form.id = row.id;
    form.name = row.name;
    form.department_id = row.department_id;
    form.responsible_id = row.responsible_id;
    form.is_active = row.is_active;
    formType.value = 'update';
    showModal.value = true;
}

const handleDelete = (id) => {
    router.delete(route("improvement-area.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <setting-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')" :links="links">
        <template #actionArea>
            <help-button title="İyileştirme Alanları — Nasıl Çalışır?" subtitle="5S ve Gemba için alan tanımı">
                <p>Bir 5S denetimi veya Gemba turu kaydedilirken, denetlenen/gezilen <strong>alan</strong> buradaki listeden seçilir.</p>
                <p>Üzerinde kayıtlı 5S denetimi veya Gemba turu bulunan bir alan silinemez.</p>
            </help-button>
            <simple-button @click="openCreate" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="t('action.addNew')"/>
            </simple-button>
            <simple-button type="route" :link="route('continuous-improvement.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
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
                :header="formType === 'create' ? t('action.create') : t('action.update')"
                closeable
                closeButton
                @closed="resetForm"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="department_id" :label="tm('term.department')">
                            <select-input v-model="form.department_id" :options="departmentOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="responsible_id" :label="tm('term.responsible')">
                            <select-input v-model="form.responsible_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="is_active" :label="tm('term.status')">
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
    </setting-layout>
</template>
