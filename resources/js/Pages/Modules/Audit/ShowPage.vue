<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, reactive, ref} from "vue"
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

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    audit: Object,
    users: {
        type: Array,
        default: () => []
    },
    checklistTemplates: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const checklistTemplateOptions = computed(() => props.checklistTemplates.map(ct => ({id: ct.id, label: ct.name})))

const problemSourceTypeOptions = computed(() => [
    {id: 'audit_finding', label: 'Denetim Bulgusu'},
    {id: 'customer_complaint', label: 'Müşteri Şikayeti'},
    {id: 'internal_observation', label: 'İç Gözlem'},
    {id: 'supplier', label: 'Tedarikçi'},
    {id: 'other', label: 'Diğer'},
])

const problemSeverityOptions = computed(() => [
    {id: 'low', label: 'Düşük'},
    {id: 'medium', label: 'Orta'},
    {id: 'high', label: 'Yüksek'},
    {id: 'critical', label: 'Kritik'},
])

const checklistAnswerOptions = computed(() => [
    {id: 'compliant', label: 'Uygun'},
    {id: 'non_compliant', label: 'Uygunsuz'},
    {id: 'not_applicable', label: 'Kapsam Dışı'},
    {id: 'observation', label: 'Gözlem'},
])

const resultOptions = computed(() => [
    {id: 'passed', label: tm('term.auditResult.passed')},
    {id: 'passed_with_findings', label: tm('term.auditResult.passed_with_findings')},
    {id: 'failed', label: tm('term.auditResult.failed')},
])

const statusColorClasses = {
    planned: 'bg-slate-100 text-slate-700',
    in_progress: 'bg-amber-100 text-amber-700',
    completed: 'bg-emerald-100 text-emerald-700',
    cancelled: 'bg-rose-100 text-rose-700',
}

const checklistAnswerColorClasses = {
    compliant: 'bg-emerald-100 text-emerald-700',
    non_compliant: 'bg-rose-100 text-rose-700',
    not_applicable: 'bg-slate-100 text-slate-700',
    observation: 'bg-sky-100 text-sky-700',
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
const isInternal = computed(() => props.audit.audit_type?.direction === 'internal')

/* ---------- Workflow ---------- */
const startAudit = () => {
    router.post(route('audit.start', props.audit.id), {}, {preserveScroll: true})
}

const cancelAudit = () => {
    router.post(route('audit.cancel', props.audit.id), {}, {preserveScroll: true})
}

const showCompleteModal = ref(false)
const completeForm = useForm({
    result: null,
    report_notes: "",
})
const completeRules = ref({
    result: {required: helpers.withMessage(t('message.validation.required'), required)},
    report_notes: {},
})
const completeV$ = useVuelidate(completeRules, completeForm)

const openComplete = () => {
    completeForm.reset();
    completeV$.value.$reset();
    showCompleteModal.value = true;
}

const submitComplete = async () => {
    const isValidated = await completeV$.value.$validate()
    if (!isValidated) return

    completeForm.post(route('audit.complete', props.audit.id), {
        onSuccess: () => showCompleteModal.value = false,
    })
}

/* ---------- Checklist ---------- */
const showAttachChecklistModal = ref(false)
const attachChecklistForm = useForm({
    audit_checklist_template_id: null,
})

const submitAttachChecklist = () => {
    attachChecklistForm.post(route('audit-checklist.store', props.audit.id), {
        onSuccess: () => showAttachChecklistModal.value = false,
    })
}

const answerDrafts = reactive(
    Object.fromEntries(
        props.audit.checklists.flatMap(c => c.answers).map(a => [a.id, {answer: a.answer, notes: a.notes ?? ""}])
    )
)

const saveAnswer = (answerId) => {
    router.put(route('audit-checklist-answer.update', answerId), {
        answer: answerDrafts[answerId].answer,
        notes: answerDrafts[answerId].notes,
    }, {preserveScroll: true})
}

/* ---------- Record Finding ---------- */
const showFindingModal = ref(false)
const findingForm = useForm({
    audit_id: props.audit.id,
    audit_checklist_answer_id: null,
    title: "",
    description: "",
    source_type: "audit_finding",
    severity: "medium",
    detected_date: new Date().toISOString().substring(0, 10),
})
const findingRules = ref({
    title: {required: helpers.withMessage(t('message.validation.required'), required)},
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    source_type: {required: helpers.withMessage(t('message.validation.required'), required)},
    severity: {required: helpers.withMessage(t('message.validation.required'), required)},
    detected_date: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const findingV$ = useVuelidate(findingRules, findingForm)

const openFinding = (answer = null) => {
    findingForm.reset();
    findingForm.audit_id = props.audit.id;
    findingForm.audit_checklist_answer_id = answer?.id ?? null;
    if (answer) {
        findingForm.title = answer.question.question;
        findingForm.description = answerDrafts[answer.id]?.notes ?? "";
    }
    findingV$.value.$reset();
    showFindingModal.value = true;
}

const submitFinding = async () => {
    const isValidated = await findingV$.value.$validate()
    if (!isValidated) return

    findingForm.post(route('problem.store'), {
        onSuccess: () => showFindingModal.value = false,
    })
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + audit.code" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('audit.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <!--Header Card-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <h2 class="text-xl font-bold">{{ audit.title }}</h2>
                    <div class="flex gap-2 mt-2 flex-wrap">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="statusColorClasses[audit.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="tm(`term.auditStatus.${audit.status}`)"/>
                        <span class="px-2 py-0.5 rounded text-xs bg-indigo-100 text-indigo-700">{{ audit.audit_type?.name }}</span>
                        <span v-for="scope in audit.scopes" :key="scope.id" class="px-2 py-0.5 rounded text-xs bg-slate-200 dark:bg-slate-500">{{ scope.name }}</span>
                        <span v-if="audit.result" class="px-2 py-0.5 rounded text-xs bg-violet-100 text-violet-700"
                              v-text="tm(`term.auditResult.${audit.result}`)"/>
                    </div>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <simple-button v-if="audit.status === 'planned'" color="blue" @click="startAudit">
                        <font-awesome-icon icon="play" class="mr-2"/>
                        <span v-text="t('action.start')"/>
                    </simple-button>
                    <simple-button v-if="audit.status === 'in_progress'" color="green" @click="openComplete">
                        <font-awesome-icon icon="circle-check" class="mr-2"/>
                        <span v-text="t('action.complete')"/>
                    </simple-button>
                    <simple-button v-if="['planned', 'in_progress'].includes(audit.status)" color="orange" @click="cancelAudit">
                        <font-awesome-icon icon="circle-xmark" class="mr-2"/>
                        <span v-text="t('action.cancel')"/>
                    </simple-button>
                    <simple-button v-if="audit.status === 'in_progress'" color="red" @click="openFinding()">
                        <font-awesome-icon icon="bug" class="mr-2"/>
                        <span v-text="t('action.addFinding')"/>
                    </simple-button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div v-if="!isInternal"><span class="text-slate-400 block" v-text="tm('term.standard')"/>{{ audit.standard?.name ?? '-' }}</div>
                <div v-if="!isInternal"><span class="text-slate-400 block" v-text="tm('term.companyAccreditation')"/>{{ audit.company_accreditation?.certificate_number ?? '-' }}</div>
                <div v-if="!isInternal"><span class="text-slate-400 block" v-text="tm('term.auditFirm')"/>{{ audit.audit_firm?.name ?? '-' }}</div>
                <div v-if="!isInternal && audit.firm_auditors?.length"><span class="text-slate-400 block" v-text="tm('term.firmAuditors')"/>{{ audit.firm_auditors.map(a => a.name).join(', ') }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.auditor')"/>{{ audit.auditor?.name ?? '-' }}</div>
                <div v-if="isInternal"><span class="text-slate-400 block" v-text="tm('term.department')"/>{{ audit.department?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.plannedDate')"/>{{ formatDate(audit.planned_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.actualDate')"/>{{ formatDate(audit.actual_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.closedAt')"/>{{ formatDate(audit.closed_at) }}</div>
            </div>

            <div v-if="audit.scope" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.scope')"/>
                <p>{{ audit.scope }}</p>
            </div>

            <div v-if="audit.report_notes" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.reportNotes')"/>
                <p>{{ audit.report_notes }}</p>
            </div>
        </div>

        <!--Checklists (internal audits)-->
        <div v-if="isInternal" class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold" v-text="tm('term.checklists')"/>
                <simple-button v-if="audit.checklists.length === 0" color="blue" @click="showAttachChecklistModal = true">
                    <font-awesome-icon icon="list-check" class="mr-2"/>
                    <span v-text="tm('action.attachChecklist')"/>
                </simple-button>
            </div>

            <div v-for="checklist in audit.checklists" :key="checklist.id" class="mb-6 last:mb-0">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-sm">{{ checklist.template?.name ?? 'Checklist' }}</span>
                    <a :href="route('audit-checklist.print', checklist.id)" target="_blank">
                        <simple-button color="neutral" type="button">
                            <font-awesome-icon icon="print" class="mr-2"/>
                            <span v-text="tm('action.print')"/>
                        </simple-button>
                    </a>
                </div>
                <table class="w-full text-sm">
                    <thead>
                    <tr class="text-slate-400 text-left">
                        <th class="px-2 pb-2 w-8">#</th>
                        <th class="px-2 pb-2" v-text="tm('term.question')"/>
                        <th class="px-2 pb-2 w-40">Sonuç</th>
                        <th class="px-2 pb-2 w-56">Not</th>
                        <th class="px-2 pb-2 w-32"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(answer, index) in checklist.answers" :key="answer.id" class="border-t border-slate-200 dark:border-slate-500">
                        <td class="px-2 py-2">{{ index + 1 }}</td>
                        <td class="px-2 py-2">
                            {{ answer.question.question }}
                            <span v-if="answer.question.standard_reference" class="block text-xs text-slate-400">{{ answer.question.standard_reference }}</span>
                        </td>
                        <td class="px-2 py-2">
                            <select-input v-if="audit.status === 'in_progress'" v-model="answerDrafts[answer.id].answer" :options="checklistAnswerOptions"/>
                            <span v-else-if="answer.answer" class="px-2 py-0.5 rounded text-xs" :class="checklistAnswerColorClasses[answer.answer] ?? ''">{{ checklistAnswerOptions.find(o => o.id === answer.answer)?.label }}</span>
                            <span v-else class="text-slate-400">-</span>
                        </td>
                        <td class="px-2 py-2">
                            <text-input v-if="audit.status === 'in_progress'" v-model="answerDrafts[answer.id].notes"/>
                            <span v-else>{{ answer.notes ?? '-' }}</span>
                        </td>
                        <td class="px-2 py-2 text-right whitespace-nowrap">
                            <template v-if="audit.status === 'in_progress'">
                                <simple-button color="blue" @click="saveAnswer(answer.id)">
                                    <font-awesome-icon icon="circle-check"/>
                                </simple-button>
                                <span v-if="answer.problem" class="ml-2 text-xs text-sky-600 cursor-pointer hover:underline" @click="router.visit(route('problem.show', answer.problem.id))">{{ answer.problem.code }}</span>
                                <simple-button v-else-if="answerDrafts[answer.id].answer === 'non_compliant'" color="red" class="ml-2" @click="openFinding(answer)">
                                    <font-awesome-icon icon="bug"/>
                                </simple-button>
                            </template>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p v-if="audit.checklists.length === 0" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
        </div>

        <!--Findings-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <h3 class="font-bold mb-4" v-text="tm('term.findings')"/>
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
                <tr v-for="finding in audit.findings" :key="finding.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ finding.code }}</td>
                    <td class="px-2 py-2">{{ finding.title }}</td>
                    <td class="px-2 py-2">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="problemStatusColorClasses[finding.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="problemStatusLabels[finding.status] ?? finding.status"/>
                    </td>
                    <td class="px-2 py-2 text-right">
                        <font-awesome-icon icon="bug" class="cursor-pointer text-sky-600 hover:scale-110 transition"
                                            @click="router.visit(route('problem.show', finding.id))"/>
                    </td>
                </tr>
                <tr v-if="audit.findings.length === 0">
                    <td colspan="4" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Complete Audit Modal-->
        <teleport to="body">
            <Modal v-model="showCompleteModal" :header="t('action.complete')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="result" :label="tm('term.result')" :errors="completeV$.result.$errors">
                            <select-input v-model="completeForm.result" :options="resultOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="report_notes" :label="tm('term.reportNotes')">
                            <text-area-input v-model="completeForm.report_notes"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.complete')" color="green" @click="submitComplete" :loading="completeForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Attach Checklist Modal-->
        <teleport to="body">
            <Modal v-model="showAttachChecklistModal" :header="tm('title.attachChecklistPage.title')" :subHeader="tm('title.attachChecklistPage.subTitle')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="audit_checklist_template_id" :label="tm('term.checklistTemplate')">
                            <select-input v-model="attachChecklistForm.audit_checklist_template_id" :options="checklistTemplateOptions"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.attachChecklist')" color="green" @click="submitAttachChecklist" :loading="attachChecklistForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Record Finding Modal-->
        <teleport to="body">
            <Modal v-model="showFindingModal" :header="tm('title.addFindingPage.title')" :subHeader="tm('title.addFindingPage.subTitle')" closeable close-button max-width="2xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="title" label="Başlık" :errors="findingV$.title.$errors">
                            <text-input v-model="findingForm.title"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="source_type" label="Kaynak" :errors="findingV$.source_type.$errors">
                            <select-input v-model="findingForm.source_type" :options="problemSourceTypeOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="severity" label="Önem Derecesi" :errors="findingV$.severity.$errors">
                            <select-input v-model="findingForm.severity" :options="problemSeverityOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="description" label="Açıklama" :errors="findingV$.description.$errors">
                            <text-area-input v-model="findingForm.description"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="detected_date" label="Tespit Tarihi" :errors="findingV$.detected_date.$errors">
                            <text-input input-type="date" v-model="findingForm.detected_date"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.addFinding')" color="green" @click="submitFinding" :loading="findingForm.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
