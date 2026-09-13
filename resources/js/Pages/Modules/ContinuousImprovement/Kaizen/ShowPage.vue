<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, ref} from "vue"
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
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    suggestion: Object,
    users: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))

const statusLabel = (status) => tm(`term.statusValue.${status}`)

const statusColorClasses = {
    submitted: 'bg-slate-100 text-slate-700',
    under_review: 'bg-sky-100 text-sky-700',
    approved: 'bg-indigo-100 text-indigo-700',
    rejected: 'bg-rose-100 text-rose-700',
    in_progress: 'bg-amber-100 text-amber-700',
    implemented: 'bg-emerald-100 text-emerald-700',
    closed: 'bg-slate-200 text-slate-500',
}

const formatDate = (value) => value ? new Date(value).toLocaleDateString('tr-TR') : '-'

/* ---------- Simple (no-payload) transitions ---------- */
const markUnderReview = () => {
    router.post(route('kaizen-suggestion.mark-under-review', props.suggestion.id), {}, {preserveScroll: true})
}
const closeSuggestion = () => {
    router.post(route('kaizen-suggestion.close', props.suggestion.id), {}, {preserveScroll: true})
}

/* ---------- Approve ---------- */
const showApproveModal = ref(false)
const approveForm = useForm({
    evaluation_note: "",
    responsible_id: null,
    planned_completion_date: "",
})
const openApprove = () => {
    approveForm.reset();
    showApproveModal.value = true;
}
const submitApprove = () => {
    approveForm.post(route('kaizen-suggestion.approve', props.suggestion.id), {
        onSuccess: () => showApproveModal.value = false,
        preserveScroll: true,
    })
}

/* ---------- Reject ---------- */
const showRejectModal = ref(false)
const rejectForm = useForm({
    rejection_reason: "",
    evaluation_note: "",
})
const rejectRules = ref({
    rejection_reason: {required: helpers.withMessage(t('message.validation.required'), required)},
    evaluation_note: {},
})
const rejectV$ = useVuelidate(rejectRules, rejectForm)
const openReject = () => {
    rejectForm.reset();
    rejectV$.value.$reset();
    showRejectModal.value = true;
}
const submitReject = async () => {
    const isValidated = await rejectV$.value.$validate()
    if (!isValidated) return

    rejectForm.post(route('kaizen-suggestion.reject', props.suggestion.id), {
        onSuccess: () => showRejectModal.value = false,
        preserveScroll: true,
    })
}

/* ---------- Start (approved -> in_progress) ---------- */
const showStartModal = ref(false)
const startForm = useForm({
    plan_note: "",
    do_note: "",
})
const openStart = () => {
    startForm.reset();
    showStartModal.value = true;
}
const submitStart = () => {
    startForm.post(route('kaizen-suggestion.start', props.suggestion.id), {
        onSuccess: () => showStartModal.value = false,
        preserveScroll: true,
    })
}

/* ---------- Implement (in_progress -> implemented) ---------- */
const showImplementModal = ref(false)
const implementForm = useForm({
    realized_annual_saving: "",
    realization_note: "",
    check_note: "",
    act_note: "",
})
const openImplement = () => {
    implementForm.reset();
    showImplementModal.value = true;
}
const submitImplement = () => {
    implementForm.post(route('kaizen-suggestion.implement', props.suggestion.id), {
        onSuccess: () => showImplementModal.value = false,
        preserveScroll: true,
    })
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + suggestion.code" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <help-button title="Kaizen Önerisi Detayı — Nasıl Çalışır?" subtitle="Önerinin değerlendirme ve uygulama süreci">
                <p><strong>Durum akışı:</strong> Gönderildi → Değerlendiriliyor → Onaylandı/Reddedildi → (onaylandıysa) Uygulanıyor → Uygulandı → Kapatıldı.</p>
                <p><strong>PDCA döngüsü:</strong> Uygulamaya başlarken Planla (P) ve Uygula (D) notları, uygulandı işaretlenirken Kontrol Et (C) ve Önlem Al (A) notları kaydedilir — kaizen'in çalışma yöntemi budur.</p>
                <p>Uygulandı olarak işaretlerken girilen <strong>gerçekleşen yıllık kazanç</strong>, başlangıçtaki tahmini kazançla karşılaştırılabilir somut bir sonuçtur.</p>
            </help-button>
            <simple-button type="route" :link="route('kaizen-suggestion.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <!--Header Card-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <h2 class="text-xl font-bold">{{ suggestion.title }}</h2>
                    <div class="flex gap-2 mt-2 flex-wrap">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="statusColorClasses[suggestion.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="statusLabel(suggestion.status)"/>
                        <span v-if="suggestion.category" class="px-2 py-0.5 rounded text-xs bg-indigo-100 text-indigo-700">{{ suggestion.category.name }}</span>
                    </div>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <simple-button v-if="suggestion.status === 'submitted'" color="blue" @click="markUnderReview">
                        <font-awesome-icon icon="magnifying-glass" class="mr-2"/>
                        <span v-text="t('action.markUnderReview')"/>
                    </simple-button>
                    <simple-button v-if="['submitted', 'under_review'].includes(suggestion.status)" color="green" @click="openApprove">
                        <font-awesome-icon icon="circle-check" class="mr-2"/>
                        <span v-text="t('action.approve')"/>
                    </simple-button>
                    <simple-button v-if="['submitted', 'under_review'].includes(suggestion.status)" color="red" @click="openReject">
                        <font-awesome-icon icon="circle-xmark" class="mr-2"/>
                        <span v-text="t('action.reject')"/>
                    </simple-button>
                    <simple-button v-if="suggestion.status === 'approved'" color="blue" @click="openStart">
                        <font-awesome-icon icon="play" class="mr-2"/>
                        <span v-text="t('action.start')"/>
                    </simple-button>
                    <simple-button v-if="suggestion.status === 'in_progress'" color="green" @click="openImplement">
                        <font-awesome-icon icon="check" class="mr-2"/>
                        <span v-text="t('action.implement')"/>
                    </simple-button>
                    <simple-button v-if="suggestion.status === 'implemented'" color="green" @click="closeSuggestion">
                        <font-awesome-icon icon="lock" class="mr-2"/>
                        <span v-text="t('action.closeSuggestion')"/>
                    </simple-button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div><span class="text-slate-400 block" v-text="tm('term.department')"/>{{ suggestion.department?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.proposedBy')"/>{{ suggestion.proposed_by?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.responsible')"/>{{ suggestion.responsible?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.plannedCompletionDate')"/>{{ formatDate(suggestion.planned_completion_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.completedAt')"/>{{ formatDate(suggestion.completed_at) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.estimatedAnnualSaving')"/>{{ suggestion.estimated_annual_saving ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.realizedAnnualSaving')"/>{{ suggestion.realized_annual_saving ?? '-' }}</div>
            </div>

            <div class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.currentSituation')"/>
                <p>{{ suggestion.current_situation }}</p>
            </div>
            <div class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.proposedSolution')"/>
                <p>{{ suggestion.proposed_solution }}</p>
            </div>

            <div v-if="suggestion.evaluation_note" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.evaluationNote')"/>
                <p>{{ suggestion.evaluation_note }}</p>
            </div>
            <div v-if="suggestion.rejection_reason" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.rejectionReason')"/>
                <p>{{ suggestion.rejection_reason }}</p>
            </div>
            <div v-if="suggestion.realization_note" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.realizationNote')"/>
                <p>{{ suggestion.realization_note }}</p>
            </div>
        </div>

        <!--PDCA-->
        <div v-if="suggestion.plan_note || suggestion.do_note || suggestion.check_note || suggestion.act_note"
             class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <h3 class="font-bold mb-4">PDCA</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="bg-white dark:bg-slate-700 rounded p-4">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.planNote')"/>
                    <p>{{ suggestion.plan_note ?? '-' }}</p>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-4">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.doNote')"/>
                    <p>{{ suggestion.do_note ?? '-' }}</p>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-4">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.checkNote')"/>
                    <p>{{ suggestion.check_note ?? '-' }}</p>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-4">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.actNote')"/>
                    <p>{{ suggestion.act_note ?? '-' }}</p>
                </div>
            </div>
        </div>

        <!--Approve Modal-->
        <teleport to="body">
            <Modal v-model="showApproveModal" :header="tm('title.approveModal.title')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="responsible_id" :label="tm('term.responsible')">
                            <select-input v-model="approveForm.responsible_id" :options="userOptions"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="planned_completion_date" :label="tm('term.plannedCompletionDate')">
                            <text-input input-type="date" v-model="approveForm.planned_completion_date"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="evaluation_note" :label="tm('term.evaluationNote')">
                            <text-area-input v-model="approveForm.evaluation_note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.approve')" color="green" @click="submitApprove" :loading="approveForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Reject Modal-->
        <teleport to="body">
            <Modal v-model="showRejectModal" :header="tm('title.rejectModal.title')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-12" labelFor="rejection_reason" :label="tm('term.rejectionReason')" :errors="rejectV$.rejection_reason.$errors">
                            <text-area-input v-model="rejectForm.rejection_reason"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="evaluation_note" :label="tm('term.evaluationNote')">
                            <text-area-input v-model="rejectForm.evaluation_note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.reject')" color="red" @click="submitReject" :loading="rejectForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Start Modal-->
        <teleport to="body">
            <Modal v-model="showStartModal" :header="tm('title.startModal.title')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-12" labelFor="plan_note" :label="tm('term.planNote')">
                            <text-area-input v-model="startForm.plan_note"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="do_note" :label="tm('term.doNote')">
                            <text-area-input v-model="startForm.do_note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.start')" color="blue" @click="submitStart" :loading="startForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Implement Modal-->
        <teleport to="body">
            <Modal v-model="showImplementModal" :header="tm('title.implementModal.title')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="realized_annual_saving" :label="tm('term.realizedAnnualSaving')">
                            <text-input input-type="number" v-model="implementForm.realized_annual_saving"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="realization_note" :label="tm('term.realizationNote')">
                            <text-area-input v-model="implementForm.realization_note"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="check_note" :label="tm('term.checkNote')">
                            <text-area-input v-model="implementForm.check_note"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="act_note" :label="tm('term.actNote')">
                            <text-area-input v-model="implementForm.act_note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.implement')" color="green" @click="submitImplement" :loading="implementForm.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
