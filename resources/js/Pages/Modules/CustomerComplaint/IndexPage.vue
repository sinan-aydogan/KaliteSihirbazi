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
import {helpers, required, requiredIf} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    tableData: {
        type: Object,
        default: () => ({})
    },
    customers: {
        type: Array,
        default: () => []
    },
    departments: {
        type: Array,
        default: () => []
    },
    suppliers: {
        type: Array,
        default: () => []
    },
    distributors: {
        type: Array,
        default: () => []
    },
    complaintSourceTypes: {
        type: Array,
        default: () => []
    },
    complaintSubjects: {
        type: Array,
        default: () => []
    },
})

const customerOptions = computed(() => props.customers.map(c => ({id: c.id, label: c.name})))
const departmentOptions = computed(() => props.departments.map(d => ({id: d.id, label: d.name})))
const supplierOptions = computed(() => props.suppliers.map(s => ({id: s.id, label: s.name})))
const distributorOptions = computed(() => props.distributors.map(d => ({id: d.id, label: d.name})))
const complaintSourceTypeOptions = computed(() => props.complaintSourceTypes.map(s => ({id: s.id, label: s.name})))
const complaintSubjectOptions = computed(() => props.complaintSubjects.map(s => ({id: s.id, label: s.name})))

const selectedSourceKey = computed(() => props.complaintSourceTypes.find(s => s.id === form.complaint_source_type_id)?.key ?? null)

const channelOptions = computed(() => [
    {id: 'phone', label: tm('term.channelValue.phone')},
    {id: 'email', label: tm('term.channelValue.email')},
    {id: 'portal', label: tm('term.channelValue.portal')},
    {id: 'in_person', label: tm('term.channelValue.in_person')},
    {id: 'letter', label: tm('term.channelValue.letter')},
    {id: 'other', label: tm('term.channelValue.other')},
])

const severityOptions = computed(() => [
    {id: 'low', label: tm('term.severityValue.low')},
    {id: 'medium', label: tm('term.severityValue.medium')},
    {id: 'high', label: tm('term.severityValue.high')},
    {id: 'critical', label: tm('term.severityValue.critical')},
])

const statusLabel = (status) => tm(`term.statusValue.${status}`)

const statusColorClasses = {
    received: 'bg-slate-100 text-slate-700',
    under_investigation: 'bg-sky-100 text-sky-700',
    resolved: 'bg-amber-100 text-amber-700',
    closed: 'bg-emerald-100 text-emerald-700',
    reopened: 'bg-rose-100 text-rose-700',
}

const severityColorClasses = {
    low: 'bg-slate-100 text-slate-700',
    medium: 'bg-sky-100 text-sky-700',
    high: 'bg-amber-100 text-amber-700',
    critical: 'bg-rose-100 text-rose-700',
}

const partyLabel = (row) => row.customer?.name ?? row.supplier?.name ?? row.distributor?.name ?? '-'

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'title', label: tm('term.title')},
    {id: 'complaint_source_type', label: tm('term.complaintSourceType'), value: (row) => row.complaint_source_type?.name ?? '-'},
    {id: 'party', label: tm('term.relatedParty'), value: partyLabel},
    {id: 'complaint_subject', label: tm('term.complaintSubject'), value: (row) => row.complaint_subject?.name ?? '-'},
    {id: 'department', label: tm('term.department'), value: (row) => row.department?.name ?? '-'},
    {id: 'severity', label: tm('term.severity')},
    {id: 'status', label: tm('term.status')},
    {id: 'problems_count', label: tm('term.problemCount')},
]

/*Form*/
const showModal = ref(false);
const form = useForm({
    complaint_source_type_id: null,
    complaint_subject_id: null,
    customer_id: null,
    supplier_id: null,
    distributor_id: null,
    title: "",
    description: "",
    channel: "email",
    product_reference: "",
    severity: "medium",
    received_date: new Date().toISOString().substring(0, 10),
    department_id: null,
})

const rules = ref({
    complaint_source_type_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    complaint_subject_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    customer_id: {
        required: helpers.withMessage(t('message.validation.required'), requiredIf(() => selectedSourceKey.value === 'customer')),
    },
    supplier_id: {
        required: helpers.withMessage(t('message.validation.required'), requiredIf(() => selectedSourceKey.value === 'supplier')),
    },
    distributor_id: {
        required: helpers.withMessage(t('message.validation.required'), requiredIf(() => selectedSourceKey.value === 'distributor')),
    },
    title: {required: helpers.withMessage(t('message.validation.required'), required)},
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    channel: {required: helpers.withMessage(t('message.validation.required'), required)},
    product_reference: {},
    severity: {required: helpers.withMessage(t('message.validation.required'), required)},
    received_date: {required: helpers.withMessage(t('message.validation.required'), required)},
    department_id: {},
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

    form.post(route('customer-complaint.store'), {
        onSuccess: () => {
            form.reset();
            v$.value.$reset();
            showModal.value = false;
        }
    })
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("customer-complaint.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Müşteri Şikayetleri — Nasıl Çalışır?" subtitle="Şikayetlerin alım, inceleme, çözüm ve kapanış döngüsünü buradan yönetirsiniz">
                <p><strong>Bu sayfada ne yapabilirim?</strong> "Yeni Ekle" ile bir şikayet kaydedin; listeden bir kaydın detayına (göz ikonu) girip incelemeye alabilir, çözüm özeti girebilir, müşteriye bildirerek kapatabilir ve gerekirse kök neden araştırması (DÖF) açabilirsiniz.</p>
                <p><strong>Kaynak ve Konu:</strong> Her şikayet bir kaynağa (İç/Müşteri/Tedarikçi/Dağıtıcı) ve bir konuya (Ürün Kalitesi, Teslimat vb.) atanır. Seçilen kaynağa göre ilgili taraf alanı (Müşteri/Tedarikçi/Dağıtıcı) değişir — İç kaynaklı şikayetlerde hiçbiri istenmez. Bu listeler "Modülü Yönet" üzerinden özelleştirilebilir.</p>
                <p><strong>Yanıt Termini</strong>, şikayet kaydedildiğinde modül ayarlarındaki SLA gün sayısına göre otomatik hesaplanır.</p>
                <p>Bir şikayete bağlı <strong>kök neden araştırması</strong> açıldığında (detay sayfasındaki "Kök Neden Araştırması Aç" ile), şikayet otomatik olarak "İnceleniyor" durumuna geçer.</p>
                <p>Müşteri, verilen çözümden memnun kalmazsa kapatılmış bir şikayet <strong>yeniden açılabilir</strong> — bu, kalıcı olmayan çözümleri kayda geçirmenizi sağlar.</p>
                <p>Sağ üstteki <strong>"Modülü Yönet"</strong> butonu, yanıt süresi (SLA) ayarını yönetebileceğiniz ayarlar merkezine götürür.</p>
            </help-button>
            <simple-button type="route" :link="route('customer-complaint-setting.index')" color="blue">
                <font-awesome-icon icon="fa-solid fa-cog" class="mr-2"/>
                <span v-text="tm('term.manageModule')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="headers"
            @delete="handleDelete($event.id)"
            delete-action
            :custom-actions="[{
                action: (row) => router.visit(route('customer-complaint.show', row.id)),
                color: 'blue',
                icon: 'eye',
                label: tm('action.viewDetails'),
            }]"
        >
            <!--Severity-->
            <template #severity="{props: row}">
                <span v-text="tm(`term.severityValue.${row.severity}`)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="severityColorClasses[row.severity] ?? 'bg-slate-100 text-slate-700'"/>
            </template>

            <!--Status-->
            <template #status="{props: row}">
                <span v-text="statusLabel(row.status)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="statusColorClasses[row.status] ?? 'bg-slate-100 text-slate-700'"/>
            </template>

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
                        <input-group class="col-span-3" labelFor="complaint_source_type_id" :label="tm('term.complaintSourceType')" :errors="v$.complaint_source_type_id.$errors">
                            <select-input v-model="form.complaint_source_type_id" :options="complaintSourceTypeOptions"/>
                        </input-group>

                        <input-group v-if="selectedSourceKey === 'customer'" class="col-span-3" labelFor="customer_id" :label="tm('term.customer')" :errors="v$.customer_id.$errors">
                            <select-input v-model="form.customer_id" :options="customerOptions"/>
                        </input-group>

                        <input-group v-else-if="selectedSourceKey === 'supplier'" class="col-span-3" labelFor="supplier_id" :label="tm('term.supplier')" :errors="v$.supplier_id.$errors">
                            <select-input v-model="form.supplier_id" :options="supplierOptions"/>
                        </input-group>

                        <input-group v-else-if="selectedSourceKey === 'distributor'" class="col-span-3" labelFor="distributor_id" :label="tm('term.distributor')" :errors="v$.distributor_id.$errors">
                            <select-input v-model="form.distributor_id" :options="distributorOptions"/>
                        </input-group>

                        <div v-else class="col-span-3"></div>

                        <input-group class="col-span-6" labelFor="complaint_subject_id" :label="tm('term.complaintSubject')" :errors="v$.complaint_subject_id.$errors">
                            <select-input v-model="form.complaint_subject_id" :options="complaintSubjectOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="title" :label="tm('term.title')" :errors="v$.title.$errors">
                            <text-input v-model="form.title"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="channel" :label="tm('term.channel')" :errors="v$.channel.$errors">
                            <select-input v-model="form.channel" :options="channelOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="severity" :label="tm('term.severity')" :errors="v$.severity.$errors">
                            <select-input v-model="form.severity" :options="severityOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="received_date" :label="tm('term.receivedDate')" :errors="v$.received_date.$errors">
                            <text-input input-type="date" v-model="form.received_date"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="department_id" :label="tm('term.department')">
                            <select-input v-model="form.department_id" :options="departmentOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="product_reference" :label="tm('term.productReference')">
                            <text-input v-model="form.product_reference"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')" :errors="v$.description.$errors">
                            <text-area-input v-model="form.description"/>
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
