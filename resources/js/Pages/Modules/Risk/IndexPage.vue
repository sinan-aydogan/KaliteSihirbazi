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
import {helpers, maxLength, required, requiredIf} from "@vuelidate/validators";
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
    riskCategories: {
        type: Array,
        default: () => []
    },
    riskHazardClasses: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const departmentOptions = computed(() => props.departments.map(d => ({id: d.id, label: d.name})))
const riskCategoryOptions = computed(() => props.riskCategories.map(c => ({id: c.id, label: c.name})))
const riskHazardClassOptions = computed(() => props.riskHazardClasses.map(c => ({id: c.id, label: c.name})))

const treatmentStrategyOptions = computed(() => [
    {id: 'mitigate', label: tm('term.treatmentStrategyValue.mitigate')},
    {id: 'accept', label: tm('term.treatmentStrategyValue.accept')},
    {id: 'transfer', label: tm('term.treatmentStrategyValue.transfer')},
    {id: 'avoid', label: tm('term.treatmentStrategyValue.avoid')},
])

const probabilityImpactOptions = [1, 2, 3, 4, 5].map(n => ({id: n, label: String(n)}))

const levelLabel = (level) => tm(`term.riskLevel.${level}`)
const statusLabel = (status) => tm(`term.riskStatus.${status}`)

const levelColorClasses = {
    low: 'bg-emerald-100 text-emerald-700',
    medium: 'bg-amber-100 text-amber-700',
    high: 'bg-orange-100 text-orange-700',
    critical: 'bg-rose-100 text-rose-700',
}

const statusColorClasses = {
    identified: 'bg-slate-100 text-slate-700',
    under_analysis: 'bg-slate-100 text-slate-700',
    treatment_planned: 'bg-sky-100 text-sky-700',
    treatment_in_progress: 'bg-amber-100 text-amber-700',
    monitoring: 'bg-emerald-100 text-emerald-700',
    review_required: 'bg-rose-100 text-rose-700',
    closed: 'bg-slate-200 text-slate-500',
}

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'title', label: tm('term.title')},
    {id: 'department', label: tm('term.department'), value: (row) => row.department?.name ?? '-'},
    {id: 'risk_category', label: tm('term.riskCategory'), value: (row) => row.risk_category?.name ?? '-'},
    {id: 'initial_level', label: tm('term.initialAssessment')},
    {id: 'status', label: tm('term.status')},
    {id: 'controls_count', label: tm('term.controlCount')},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    title: "",
    description: "",
    department_id: null,
    scope_note: "",
    risk_category_id: null,
    risk_hazard_class_id: null,
    risk_owner_id: null,
    identified_date: new Date().toISOString().substring(0, 10),
    initial_probability: 3,
    initial_impact: 3,
    treatment_strategy: "mitigate",
    acceptance_justification: "",
    next_review_date: "",
})

const rules = ref({
    title: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    description: {},
    department_id: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    scope_note: {},
    risk_category_id: {},
    risk_hazard_class_id: {},
    risk_owner_id: {},
    identified_date: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    initial_probability: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    initial_impact: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    treatment_strategy: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    acceptance_justification: {
        required: helpers.withMessage(
            t('message.validation.required'),
            requiredIf(() => form.treatment_strategy === 'accept')
        ),
    },
    next_review_date: {},
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
        form.post(route('risk.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('risk.update', {id: form.id}), {
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
    axios.get(route("risk.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.title = response.data.title;
        form.description = response.data.description;
        form.department_id = response.data.department_id;
        form.scope_note = response.data.scope_note;
        form.risk_category_id = response.data.risk_category_id;
        form.risk_hazard_class_id = response.data.risk_hazard_class_id;
        form.risk_owner_id = response.data.risk_owner_id;
        form.identified_date = response.data.identified_date?.substring(0, 10);
        form.initial_probability = response.data.initial_probability;
        form.initial_impact = response.data.initial_impact;
        form.treatment_strategy = response.data.treatment_strategy;
        form.acceptance_justification = response.data.acceptance_justification;
        form.next_review_date = response.data.next_review_date?.substring(0, 10) ?? "";
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("risk.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Riskler — Nasıl Çalışır?" subtitle="Bölümlerin risklerini tanımlayıp yaşam döngüsü boyunca izlediğiniz ana ekran">
                <p><strong>Bu sayfada ne yapabilirim?</strong> "Yeni Ekle" ile bir risk tanımlayabilir, 1-5 arası Olasılık × Etki değerlendirmesi yapabilir, listeden bir kaydın detayına (göz ikonu) girip önlem ekleyebilir, gözden geçirme yapabilir ve riski kapatabilirsiniz.</p>
                <p><strong>İlk Değerlendirme</strong> seviyesi (Düşük/Orta/Yüksek/Kritik), Olasılık × Etki skorunun modül ayarlarındaki eşiklere göre otomatik hesaplanmasıyla belirlenir.</p>
                <p><strong>Yaklaşım</strong> alanı ISO 31000'e göre dört seçenek sunar: Azalt (önlem alınacak), Kabul Et (gerekçe zorunlu), Transfer Et (sigorta/taşerona devir) veya Kaçın (faaliyeti durdur).</p>
                <p>Bir risk <strong>gerçekleşip bir uygunsuzluğa dönüşürse</strong> (detay sayfasındaki "Bu Riske Bağlı Uygunsuzluk Aç" ile), sistem riski otomatik olarak "Gözden Geçirme Gerekiyor" durumuna alır — önlemlerin yetersiz mi kaldığı, yoksa kabul edilebilir bir sonuç mu olduğu bu gözden geçirmede kayda geçer.</p>
                <p>Sağ üstteki <strong>"Modülü Yönet"</strong> butonu, Risk Kategorileri, Tehlike Sınıfları ve skor eşiği ayarlarını yönetebileceğiniz ayarlar merkezine götürür.</p>
            </help-button>
            <simple-button type="route" :link="route('risk-setting.index')" color="blue">
                <font-awesome-icon icon="fa-solid fa-cog" class="mr-2"/>
                <span v-text="tm('term.manageModule')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="headers"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
            :custom-actions="[{
                action: (row) => router.visit(route('risk.show', row.id)),
                color: 'blue',
                icon: 'eye',
                label: tm('action.viewDetails'),
            }]"
        >
            <!--Level-->
            <template #initial_level="{props: row}">
                <span v-text="levelLabel(row.initial_level)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="levelColorClasses[row.initial_level] ?? 'bg-slate-100 text-slate-700'"/>
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
                        <input-group class="col-span-6" labelFor="title" :label="tm('term.title')" :errors="v$.title.$errors">
                            <text-input v-model="form.title"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="department_id" :label="tm('term.department')" :errors="v$.department_id.$errors">
                            <select-input v-model="form.department_id" :options="departmentOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="scope_note" :label="tm('term.scopeNote')">
                            <text-input v-model="form.scope_note"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="risk_category_id" :label="tm('term.riskCategory')">
                            <select-input v-model="form.risk_category_id" :options="riskCategoryOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="risk_hazard_class_id" :label="tm('term.riskHazardClass')">
                            <select-input v-model="form.risk_hazard_class_id" :options="riskHazardClassOptions"/>
                        </input-group>

                        <input-group class="col-span-4" labelFor="risk_owner_id" :label="tm('term.riskOwner')">
                            <select-input v-model="form.risk_owner_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-4" labelFor="identified_date" :label="tm('term.identifiedDate')" :errors="v$.identified_date.$errors">
                            <text-input input-type="date" v-model="form.identified_date"/>
                        </input-group>

                        <input-group class="col-span-4" labelFor="next_review_date" :label="tm('term.nextReviewDate')">
                            <text-input input-type="date" v-model="form.next_review_date"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="initial_probability" :label="tm('term.probability')" :errors="v$.initial_probability.$errors">
                            <select-input v-model="form.initial_probability" :options="probabilityImpactOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="initial_impact" :label="tm('term.impact')" :errors="v$.initial_impact.$errors">
                            <select-input v-model="form.initial_impact" :options="probabilityImpactOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="treatment_strategy" :label="tm('term.treatmentStrategy')" :errors="v$.treatment_strategy.$errors">
                            <select-input v-model="form.treatment_strategy" :options="treatmentStrategyOptions"/>
                        </input-group>

                        <input-group v-if="form.treatment_strategy === 'accept'" class="col-span-6" labelFor="acceptance_justification" :label="tm('term.acceptanceJustification')" :errors="v$.acceptance_justification.$errors">
                            <text-area-input v-model="form.acceptance_justification"/>
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
