<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, ref, watch} from "vue"
import {useForm, router} from "@inertiajs/vue3";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required, requiredIf} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    risk: Object,
    users: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const probabilityImpactOptions = [1, 2, 3, 4, 5].map(n => ({id: n, label: String(n)}))

const controlStatusOptions = computed(() => [
    {id: 'planned', label: tm('term.controls.status.planned')},
    {id: 'in_progress', label: tm('term.controls.status.in_progress')},
    {id: 'completed', label: tm('term.controls.status.completed')},
])

const effectivenessOptions = computed(() => [
    {id: 'not_evaluated', label: tm('term.controls.effectiveness.not_evaluated')},
    {id: 'ineffective', label: tm('term.controls.effectiveness.ineffective')},
    {id: 'partially_effective', label: tm('term.controls.effectiveness.partially_effective')},
    {id: 'effective', label: tm('term.controls.effectiveness.effective')},
])

const conclusionOptions = computed(() => [
    {id: 'controls_reinforced', label: tm('term.reviews.conclusion.controls_reinforced')},
    {id: 'risk_accepted_as_is', label: tm('term.reviews.conclusion.risk_accepted_as_is')},
    {id: 'risk_reclassified', label: tm('term.reviews.conclusion.risk_reclassified')},
    {id: 'no_change', label: tm('term.reviews.conclusion.no_change')},
])

const levelLabel = (level) => level ? tm(`term.riskLevel.${level}`) : '-'
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

const problemStatusColorClasses = {
    open: 'bg-slate-100 text-slate-700',
    under_review: 'bg-sky-100 text-sky-700',
    capa_raised: 'bg-amber-100 text-amber-700',
    closed_without_capa: 'bg-emerald-100 text-emerald-700',
    closed: 'bg-emerald-100 text-emerald-700',
}

const problemStatusLabels = {
    open: 'Açık',
    under_review: 'İnceleniyor',
    capa_raised: 'DÖF Açıldı',
    closed_without_capa: 'DÖF Gerektirmeden Kapatıldı',
    closed: 'Kapatıldı',
}

const formatDate = (value) => value ? new Date(value).toLocaleDateString('tr-TR') : '-'

/* ---------- Workflow ---------- */
const startAnalysis = () => {
    router.put(route('risk.update', props.risk.id), {
        title: props.risk.title,
        description: props.risk.description,
        department_id: props.risk.department_id,
        scope_note: props.risk.scope_note,
        risk_category_id: props.risk.risk_category_id,
        risk_hazard_class_id: props.risk.risk_hazard_class_id,
        risk_owner_id: props.risk.risk_owner_id,
        identified_date: props.risk.identified_date,
        initial_probability: props.risk.initial_probability,
        initial_impact: props.risk.initial_impact,
        treatment_strategy: props.risk.treatment_strategy,
        acceptance_justification: props.risk.acceptance_justification,
        next_review_date: props.risk.next_review_date,
        status: 'under_analysis',
    }, {preserveScroll: true})
}

const closeRisk = () => {
    router.post(route('risk.close', props.risk.id), {}, {preserveScroll: true})
}

/* ---------- Controls ---------- */
const showControlModal = ref(false)
const controlForm = useForm({
    description: "",
    responsible_id: null,
    due_date: "",
})
const controlRules = ref({
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    responsible_id: {},
    due_date: {},
})
const controlV$ = useVuelidate(controlRules, controlForm)

const openAddControl = () => {
    controlForm.reset();
    controlV$.value.$reset();
    showControlModal.value = true;
}

const submitControl = async () => {
    const isValidated = await controlV$.value.$validate()
    if (!isValidated) return

    controlForm.post(route('risk-control.store', props.risk.id), {
        onSuccess: () => showControlModal.value = false,
        preserveScroll: true,
    })
}

const controlDrafts = ref({})

watch(() => props.risk.controls, (controls) => {
    controls.forEach(c => {
        if (!controlDrafts.value[c.id]) {
            controlDrafts.value[c.id] = {
                description: c.description,
                responsible_id: c.responsible_id,
                due_date: c.due_date?.substring(0, 10) ?? "",
                status: c.status,
                effectiveness_rating: c.effectiveness_rating,
            }
        }
    })
}, {immediate: true})

const saveControl = (controlId) => {
    router.put(route('risk-control.update', controlId), controlDrafts.value[controlId], {preserveScroll: true})
}

const deleteControl = (controlId) => {
    router.delete(route('risk-control.destroy', controlId), {preserveScroll: true})
}

/* ---------- Reviews ---------- */
const showReviewModal = ref(false)
const reviewForm = useForm({
    probability: 3,
    impact: 3,
    controls_adequate: true,
    conclusion: "no_change",
    notes: "",
})
const reviewRules = ref({
    probability: {required: helpers.withMessage(t('message.validation.required'), required)},
    impact: {required: helpers.withMessage(t('message.validation.required'), required)},
    controls_adequate: {},
    conclusion: {required: helpers.withMessage(t('message.validation.required'), required)},
    notes: {},
})
const reviewV$ = useVuelidate(reviewRules, reviewForm)

const openAddReview = () => {
    reviewForm.reset();
    reviewV$.value.$reset();
    showReviewModal.value = true;
}

const submitReview = async () => {
    const isValidated = await reviewV$.value.$validate()
    if (!isValidated) return

    reviewForm.post(route('risk-review.store', props.risk.id), {
        onSuccess: () => showReviewModal.value = false,
        preserveScroll: true,
    })
}

const showCompleteReviewModal = ref(false)
const completingReviewId = ref(null)
const completeReviewForm = useForm({
    probability: 3,
    impact: 3,
    controls_adequate: false,
    conclusion: "controls_reinforced",
    notes: "",
})
const completeReviewV$ = useVuelidate(reviewRules, completeReviewForm)

const openCompleteReview = (review) => {
    completingReviewId.value = review.id;
    completeReviewForm.reset();
    completeReviewV$.value.$reset();
    showCompleteReviewModal.value = true;
}

const submitCompleteReview = async () => {
    const isValidated = await completeReviewV$.value.$validate()
    if (!isValidated) return

    completeReviewForm.put(route('risk-review.update', completingReviewId.value), {
        onSuccess: () => showCompleteReviewModal.value = false,
        preserveScroll: true,
    })
}

/* ---------- Raise a Nonconformity (risk realization) ---------- */
const showRealizationModal = ref(false)
const realizationForm = useForm({
    risk_id: props.risk.id,
    title: "",
    description: "",
    source_type: "risk_realization",
    severity: "medium",
    detected_date: new Date().toISOString().substring(0, 10),
})
const realizationRules = ref({
    title: {required: helpers.withMessage(t('message.validation.required'), required)},
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    severity: {required: helpers.withMessage(t('message.validation.required'), required)},
    detected_date: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const realizationV$ = useVuelidate(realizationRules, realizationForm)

const openRealization = () => {
    realizationForm.reset();
    realizationForm.risk_id = props.risk.id;
    realizationV$.value.$reset();
    showRealizationModal.value = true;
}

const submitRealization = async () => {
    const isValidated = await realizationV$.value.$validate()
    if (!isValidated) return

    realizationForm.post(route('problem.store'), {
        onSuccess: () => showRealizationModal.value = false,
    })
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + risk.code" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <help-button title="Risk Detayı — Nasıl Çalışır?" subtitle="Bir riskin tüm yaşam döngüsünü buradan yönetirsiniz">
                <p><strong>Durum akışı:</strong> Tanımlandı → (Analize Başla) → Analiz Ediliyor → (bir önlem eklendiğinde otomatik) Önlem Planlandı → (bir önlem "Devam Ediyor" yapıldığında otomatik) Önlem Uygulanıyor → (bir gözden geçirme tamamlandığında otomatik) İzleniyor.</p>
                <p><strong>Önlemler</strong>, riski azaltmak için planladığınız somut aksiyonlardır. Her önlemi tamamladığınızda, o önlemin riski gerçekten azaltmadaki <strong>etkinliğini</strong> (Etkisiz/Kısmen Etkili/Etkili) de derecelendirebilirsiniz.</p>
                <p><strong>Gözden Geçirmeler</strong>, riskin periyodik olarak yeniden değerlendirilmesidir — güncel Olasılık/Etki girilir ve bir sonuç seçilir. Bu, riskin "Güncel Değerlendirme"sini (kalan/residual skor) günceller.</p>
                <p><strong>Bu Riske Bağlı Uygunsuzluk Aç:</strong> Öngördüğünüz bu risk gerçekten gerçekleştiyse (önlemlere rağmen), bu butonla bir uygunsuzluk kaydı açın. Sistem otomatik olarak riski "Gözden Geçirme Gerekiyor" durumuna alır ve bekleyen bir gözden geçirme kaydı oluşturur — burada <strong>"Önlemler yeterli miydi?"</strong> sorusunu cevaplayarak, önlemin yetersiz mi kaldığını yoksa kabul edilebilir bir sonuç mu olduğunu kayda geçirirsiniz. Bu gözden geçirme tamamlanmadan risk kapatılamaz.</p>
            </help-button>
            <simple-button type="route" :link="route('risk.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <!--Header Card-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <h2 class="text-xl font-bold">{{ risk.title }}</h2>
                    <div class="flex gap-2 mt-2 flex-wrap">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="statusColorClasses[risk.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="statusLabel(risk.status)"/>
                        <span v-if="risk.risk_category" class="px-2 py-0.5 rounded text-xs bg-indigo-100 text-indigo-700">{{ risk.risk_category.name }}</span>
                        <span v-if="risk.risk_hazard_class" class="px-2 py-0.5 rounded text-xs bg-slate-200 dark:bg-slate-500">{{ risk.risk_hazard_class.name }}</span>
                    </div>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <simple-button v-if="risk.status === 'identified'" color="blue" @click="startAnalysis">
                        <font-awesome-icon icon="play" class="mr-2"/>
                        <span>Analize Başla</span>
                    </simple-button>
                    <simple-button v-if="!['closed', 'review_required'].includes(risk.status)" color="green" @click="closeRisk">
                        <font-awesome-icon icon="circle-check" class="mr-2"/>
                        <span v-text="t('action.close')"/>
                    </simple-button>
                    <simple-button color="red" @click="openRealization">
                        <font-awesome-icon icon="triangle-exclamation" class="mr-2"/>
                        <span v-text="tm('action.raiseRealization')"/>
                    </simple-button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div><span class="text-slate-400 block" v-text="tm('term.department')"/>{{ risk.department?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.scopeNote')"/>{{ risk.scope_note ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.riskOwner')"/>{{ risk.risk_owner?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.identifiedBy')"/>{{ risk.identified_by?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.identifiedDate')"/>{{ formatDate(risk.identified_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.nextReviewDate')"/>{{ formatDate(risk.next_review_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.treatmentStrategy')"/>{{ tm(`term.treatmentStrategyValue.${risk.treatment_strategy}`) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.closedAt')"/>{{ formatDate(risk.closed_at) }}</div>
            </div>

            <div v-if="risk.acceptance_justification" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.acceptanceJustification')"/>
                <p>{{ risk.acceptance_justification }}</p>
            </div>

            <div v-if="risk.description" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.description')"/>
                <p>{{ risk.description }}</p>
            </div>

            <!--Scoring-->
            <div class="grid grid-cols-2 gap-4 mt-6">
                <div class="bg-white dark:bg-slate-700 rounded p-4">
                    <span class="text-slate-400 block text-xs mb-2" v-text="tm('term.initialAssessment')"/>
                    <div class="flex items-center gap-3">
                        <span class="text-sm">{{ tm('term.probability') }}: <strong>{{ risk.initial_probability }}</strong></span>
                        <span class="text-sm">{{ tm('term.impact') }}: <strong>{{ risk.initial_impact }}</strong></span>
                        <span class="text-sm">{{ tm('term.score') }}: <strong>{{ risk.initial_score }}</strong></span>
                        <span class="px-2 py-0.5 rounded text-xs" :class="levelColorClasses[risk.initial_level] ?? ''" v-text="levelLabel(risk.initial_level)"/>
                    </div>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-4">
                    <span class="text-slate-400 block text-xs mb-2" v-text="tm('term.residualAssessment')"/>
                    <div v-if="risk.residual_score !== null" class="flex items-center gap-3">
                        <span class="text-sm">{{ tm('term.probability') }}: <strong>{{ risk.residual_probability }}</strong></span>
                        <span class="text-sm">{{ tm('term.impact') }}: <strong>{{ risk.residual_impact }}</strong></span>
                        <span class="text-sm">{{ tm('term.score') }}: <strong>{{ risk.residual_score }}</strong></span>
                        <span class="px-2 py-0.5 rounded text-xs" :class="levelColorClasses[risk.residual_level] ?? ''" v-text="levelLabel(risk.residual_level)"/>
                    </div>
                    <span v-else class="text-sm text-slate-400">Henüz gözden geçirme yapılmadı</span>
                </div>
            </div>
        </div>

        <!--Controls-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold" v-text="tm('term.controls.title')"/>
                <simple-button color="blue" @click="openAddControl">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="tm('action.addControl')"/>
                </simple-button>
            </div>
            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2" v-text="tm('term.controls.description')"/>
                    <th class="px-2 pb-2 w-40" v-text="tm('term.controls.responsible')"/>
                    <th class="px-2 pb-2 w-32" v-text="tm('term.controls.dueDate')"/>
                    <th class="px-2 pb-2 w-40" v-text="tm('term.status')"/>
                    <th class="px-2 pb-2 w-44">Etkinlik</th>
                    <th class="px-2 pb-2 w-24"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="control in risk.controls" :key="control.id" class="border-t border-slate-200 dark:border-slate-500 align-top">
                    <td class="px-2 py-2"><text-input v-model="controlDrafts[control.id].description"/></td>
                    <td class="px-2 py-2"><select-input v-model="controlDrafts[control.id].responsible_id" :options="userOptions"/></td>
                    <td class="px-2 py-2"><text-input input-type="date" v-model="controlDrafts[control.id].due_date"/></td>
                    <td class="px-2 py-2"><select-input v-model="controlDrafts[control.id].status" :options="controlStatusOptions"/></td>
                    <td class="px-2 py-2"><select-input v-model="controlDrafts[control.id].effectiveness_rating" :options="effectivenessOptions"/></td>
                    <td class="px-2 py-2 text-right whitespace-nowrap">
                        <simple-button color="blue" @click="saveControl(control.id)">
                            <font-awesome-icon icon="circle-check"/>
                        </simple-button>
                        <simple-button color="red" class="ml-1" @click="deleteControl(control.id)">
                            <font-awesome-icon icon="trash"/>
                        </simple-button>
                    </td>
                </tr>
                <tr v-if="risk.controls.length === 0">
                    <td colspan="6" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Reviews-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold" v-text="tm('term.reviews.title')"/>
                <simple-button color="blue" @click="openAddReview">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="tm('action.addReview')"/>
                </simple-button>
            </div>
            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2 w-28" v-text="tm('term.reviews.reviewDate')"/>
                    <th class="px-2 pb-2 w-32">Tetikleyici</th>
                    <th class="px-2 pb-2">Sonuç</th>
                    <th class="px-2 pb-2" v-text="tm('term.reviews.notes')"/>
                    <th class="px-2 pb-2 w-32"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="review in risk.reviews" :key="review.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ formatDate(review.review_date) }}</td>
                    <td class="px-2 py-2">
                        {{ tm(`term.reviews.trigger.${review.trigger}`) }}
                        <span v-if="review.linked_problem" class="block text-xs text-sky-600 cursor-pointer hover:underline" @click="router.visit(route('problem.show', review.linked_problem.id))">{{ review.linked_problem.code }}</span>
                    </td>
                    <td class="px-2 py-2">
                        <span v-if="!review.conclusion" class="px-2 py-0.5 rounded text-xs bg-rose-100 text-rose-700" v-text="tm('term.reviews.pending')"/>
                        <span v-else>{{ tm(`term.reviews.conclusion.${review.conclusion}`) }} — {{ tm('term.score') }}: {{ review.score }} ({{ levelLabel(review.level) }})</span>
                    </td>
                    <td class="px-2 py-2">{{ review.notes ?? '-' }}</td>
                    <td class="px-2 py-2 text-right">
                        <simple-button v-if="!review.conclusion" color="amber" @click="openCompleteReview(review)">
                            <span v-text="tm('action.completeReview')"/>
                        </simple-button>
                    </td>
                </tr>
                <tr v-if="risk.reviews.length === 0">
                    <td colspan="5" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Realized Problems-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <h3 class="font-bold mb-4" v-text="tm('term.realizedProblems')"/>
            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2">Kod</th>
                    <th class="px-2 pb-2">Başlık</th>
                    <th class="px-2 pb-2">Durum</th>
                    <th class="px-2 pb-2"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="problem in risk.realized_problems" :key="problem.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ problem.code }}</td>
                    <td class="px-2 py-2">{{ problem.title }}</td>
                    <td class="px-2 py-2">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="problemStatusColorClasses[problem.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="problemStatusLabels[problem.status] ?? problem.status"/>
                    </td>
                    <td class="px-2 py-2 text-right">
                        <font-awesome-icon icon="bug" class="cursor-pointer text-sky-600 hover:scale-110 transition"
                                            @click="router.visit(route('problem.show', problem.id))"/>
                    </td>
                </tr>
                <tr v-if="risk.realized_problems.length === 0">
                    <td colspan="4" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Add Control Modal-->
        <teleport to="body">
            <Modal v-model="showControlModal" :header="tm('action.addControl')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="description" :label="tm('term.controls.description')" :errors="controlV$.description.$errors">
                            <text-area-input v-model="controlForm.description"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="responsible_id" :label="tm('term.controls.responsible')">
                            <select-input v-model="controlForm.responsible_id" :options="userOptions"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="due_date" :label="tm('term.controls.dueDate')">
                            <text-input input-type="date" v-model="controlForm.due_date"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.addControl')" color="green" @click="submitControl" :loading="controlForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Add Review Modal-->
        <teleport to="body">
            <Modal v-model="showReviewModal" :header="tm('action.addReview')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-3" labelFor="probability" :label="tm('term.probability')" :errors="reviewV$.probability.$errors">
                            <select-input v-model="reviewForm.probability" :options="probabilityImpactOptions"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="impact" :label="tm('term.impact')" :errors="reviewV$.impact.$errors">
                            <select-input v-model="reviewForm.impact" :options="probabilityImpactOptions"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="controls_adequate" :label="tm('term.reviews.controlsAdequate')">
                            <switch-input v-model="reviewForm.controls_adequate"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="conclusion" label="Sonuç" :errors="reviewV$.conclusion.$errors">
                            <select-input v-model="reviewForm.conclusion" :options="conclusionOptions"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="notes" :label="tm('term.reviews.notes')">
                            <text-area-input v-model="reviewForm.notes"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.addReview')" color="green" @click="submitReview" :loading="reviewForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Complete Pending Review Modal-->
        <teleport to="body">
            <Modal v-model="showCompleteReviewModal" :header="tm('action.completeReview')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-3" labelFor="probability" :label="tm('term.probability')" :errors="completeReviewV$.probability.$errors">
                            <select-input v-model="completeReviewForm.probability" :options="probabilityImpactOptions"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="impact" :label="tm('term.impact')" :errors="completeReviewV$.impact.$errors">
                            <select-input v-model="completeReviewForm.impact" :options="probabilityImpactOptions"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="controls_adequate" :label="tm('term.reviews.controlsAdequate')">
                            <switch-input v-model="completeReviewForm.controls_adequate"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="conclusion" label="Sonuç" :errors="completeReviewV$.conclusion.$errors">
                            <select-input v-model="completeReviewForm.conclusion" :options="conclusionOptions"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="notes" :label="tm('term.reviews.notes')">
                            <text-area-input v-model="completeReviewForm.notes"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.completeReview')" color="green" @click="submitCompleteReview" :loading="completeReviewForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Raise Realization Modal-->
        <teleport to="body">
            <Modal v-model="showRealizationModal" :header="tm('action.raiseRealization')" closeable close-button max-width="2xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="title" :label="tm('term.title')" :errors="realizationV$.title.$errors">
                            <text-input v-model="realizationForm.title"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="severity" label="Önem Derecesi" :errors="realizationV$.severity.$errors">
                            <select-input v-model="realizationForm.severity" :options="[
                                {id: 'low', label: 'Düşük'},
                                {id: 'medium', label: 'Orta'},
                                {id: 'high', label: 'Yüksek'},
                                {id: 'critical', label: 'Kritik'},
                            ]"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="detected_date" label="Tespit Tarihi" :errors="realizationV$.detected_date.$errors">
                            <text-input input-type="date" v-model="realizationForm.detected_date"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')" :errors="realizationV$.description.$errors">
                            <text-area-input v-model="realizationForm.description"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.raiseRealization')" color="red" @click="submitRealization" :loading="realizationForm.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
