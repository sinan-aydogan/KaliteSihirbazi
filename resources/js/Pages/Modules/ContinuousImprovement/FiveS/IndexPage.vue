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
    areas: {
        type: Array,
        default: () => []
    },
    users: {
        type: Array,
        default: () => []
    },
})

const areaOptions = computed(() => props.areas.map(a => ({id: a.id, label: a.name})))
const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const scoreOptions = [0, 1, 2, 3, 4, 5].map(n => ({id: n, label: String(n)}))

const scoreColorClass = (score) => {
    if (score >= 20) return 'text-emerald-600'
    if (score >= 15) return 'text-amber-600'
    return 'text-rose-600'
}

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'area', label: tm('term.area'), value: (row) => row.area?.name ?? '-'},
    {id: 'audit_date', label: tm('term.auditDate'), value: (row) => new Date(row.audit_date).toLocaleDateString('tr-TR')},
    {id: 'audited_by', label: tm('term.auditedBy'), value: (row) => row.audited_by?.name ?? '-'},
    {id: 'findings_count', label: tm('term.findings')},
    {id: 'total_score', label: tm('term.totalScore')},
]

/* ---------- Create Form ---------- */
const showModal = ref(false);
const form = useForm({
    area_id: null,
    audited_by_id: null,
    audit_date: new Date().toISOString().substring(0, 10),
    sort_score: 5,
    set_in_order_score: 5,
    shine_score: 5,
    standardize_score: 5,
    sustain_score: 5,
    general_note: "",
})

const rules = ref({
    area_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    audited_by_id: {},
    audit_date: {required: helpers.withMessage(t('message.validation.required'), required)},
    sort_score: {required: helpers.withMessage(t('message.validation.required'), required)},
    set_in_order_score: {required: helpers.withMessage(t('message.validation.required'), required)},
    shine_score: {required: helpers.withMessage(t('message.validation.required'), required)},
    standardize_score: {required: helpers.withMessage(t('message.validation.required'), required)},
    sustain_score: {required: helpers.withMessage(t('message.validation.required'), required)},
    general_note: {},
})
const v$ = useVuelidate(rules, form)

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    showModal.value = true;
}

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    form.post(route('five-s-audit.store'), {
        onSuccess: () => {
            form.reset();
            v$.value.$reset();
            showModal.value = false;
        }
    })
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="5S Denetimleri — Nasıl Çalışır?" subtitle="Bir alanın 5S kriterlerine göre puanlanması">
                <p>Her kriter (Sınıflandır, Düzenle, Temizlik, Standartlaştır, Disiplin) 0-5 arası puanlanır; toplam puan otomatik hesaplanır (0-25).</p>
                <p>Puanı düşük çıkan bir kriter için detay sayfasından <strong>bulgu</strong> (aksiyon maddesi) ekleyip sorumlu/son tarih atayabilirsiniz.</p>
            </help-button>
            <simple-button type="route" :link="route('area.index')" color="blue">
                <font-awesome-icon icon="map-location-dot" class="mr-2"/>
                <span v-text="t('mainMenu.areas')"/>
            </simple-button>
            <simple-button type="route" :link="route('continuous-improvement.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="headers"
            :custom-actions="[{
                action: (row) => router.visit(route('five-s-audit.show', row.id)),
                color: 'blue',
                icon: 'eye',
                label: tm('action.viewDetails'),
            }]"
        >
            <template #total_score="{props: row}">
                <span class="font-semibold" :class="scoreColorClass(row.total_score)">{{ row.total_score }} / 25</span>
            </template>

            <template #actionArea>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="t('action.createAudit')"/>
                </simple-button>
            </template>
        </Table>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="tm('title.createModal.title')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="area_id" :label="tm('term.area')" :errors="v$.area_id.$errors">
                            <select-input v-model="form.area_id" :options="areaOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="audited_by_id" :label="tm('term.auditedBy')">
                            <select-input v-model="form.audited_by_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="audit_date" :label="tm('term.auditDate')" :errors="v$.audit_date.$errors">
                            <text-input input-type="date" v-model="form.audit_date"/>
                        </input-group>

                        <input-group class="col-span-2" labelFor="sort_score" :label="tm('term.sortScore')">
                            <select-input v-model="form.sort_score" :options="scoreOptions"/>
                        </input-group>
                        <input-group class="col-span-2" labelFor="set_in_order_score" :label="tm('term.setInOrderScore')">
                            <select-input v-model="form.set_in_order_score" :options="scoreOptions"/>
                        </input-group>
                        <input-group class="col-span-2" labelFor="shine_score" :label="tm('term.shineScore')">
                            <select-input v-model="form.shine_score" :options="scoreOptions"/>
                        </input-group>
                        <input-group class="col-span-2" labelFor="standardize_score" :label="tm('term.standardizeScore')">
                            <select-input v-model="form.standardize_score" :options="scoreOptions"/>
                        </input-group>
                        <input-group class="col-span-2" labelFor="sustain_score" :label="tm('term.sustainScore')">
                            <select-input v-model="form.sustain_score" :options="scoreOptions"/>
                        </input-group>

                        <input-group class="col-span-12" labelFor="general_note" :label="tm('term.generalNote')">
                            <text-area-input v-model="form.general_note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                    <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
