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
    complaint: Object,
    users: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))

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
const formatDateTime = (value) => value ? new Date(value).toLocaleString('tr-TR') : '-'

/* ---------- Workflow ---------- */
const acknowledge = () => {
    router.post(route('customer-complaint.acknowledge', props.complaint.id), {}, {preserveScroll: true})
}

/* ---------- Resolve ---------- */
const showResolveModal = ref(false)
const resolveForm = useForm({resolution_summary: ""})
const resolveRules = ref({resolution_summary: {required: helpers.withMessage(t('message.validation.required'), required)}})
const resolveV$ = useVuelidate(resolveRules, resolveForm)

const openResolve = () => {
    resolveForm.reset();
    resolveV$.value.$reset();
    showResolveModal.value = true;
}

const submitResolve = async () => {
    const isValidated = await resolveV$.value.$validate()
    if (!isValidated) return

    resolveForm.post(route('customer-complaint.resolve', props.complaint.id), {
        onSuccess: () => showResolveModal.value = false,
        preserveScroll: true,
    })
}

/* ---------- Close ---------- */
const showCloseModal = ref(false)
const closeForm = useForm({customer_satisfaction_rating: null})
const closeV$ = useVuelidate({customer_satisfaction_rating: {}}, closeForm)

const openClose = () => {
    closeForm.reset();
    showCloseModal.value = true;
}

const submitClose = () => {
    closeForm.post(route('customer-complaint.close', props.complaint.id), {
        onSuccess: () => showCloseModal.value = false,
        preserveScroll: true,
    })
}

const satisfactionOptions = [1, 2, 3, 4, 5].map(n => ({id: n, label: String(n)}))

/* ---------- Reopen ---------- */
const showReopenModal = ref(false)
const reopenForm = useForm({reopen_reason: ""})
const reopenRules = ref({reopen_reason: {required: helpers.withMessage(t('message.validation.required'), required)}})
const reopenV$ = useVuelidate(reopenRules, reopenForm)

const openReopen = () => {
    reopenForm.reset();
    reopenV$.value.$reset();
    showReopenModal.value = true;
}

const submitReopen = async () => {
    const isValidated = await reopenV$.value.$validate()
    if (!isValidated) return

    reopenForm.post(route('customer-complaint.reopen', props.complaint.id), {
        onSuccess: () => showReopenModal.value = false,
        preserveScroll: true,
    })
}

/* ---------- Raise a root-cause Problem ---------- */
const showRootCauseModal = ref(false)
const rootCauseForm = useForm({
    customer_complaint_id: props.complaint.id,
    title: "",
    description: "",
    source_type: "customer_complaint",
    severity: props.complaint.severity,
    detected_date: new Date().toISOString().substring(0, 10),
})
const rootCauseRules = ref({
    title: {required: helpers.withMessage(t('message.validation.required'), required)},
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    severity: {required: helpers.withMessage(t('message.validation.required'), required)},
    detected_date: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const rootCauseV$ = useVuelidate(rootCauseRules, rootCauseForm)

const openRootCause = () => {
    rootCauseForm.reset();
    rootCauseForm.customer_complaint_id = props.complaint.id;
    rootCauseForm.severity = props.complaint.severity;
    rootCauseV$.value.$reset();
    showRootCauseModal.value = true;
}

const submitRootCause = async () => {
    const isValidated = await rootCauseV$.value.$validate()
    if (!isValidated) return

    rootCauseForm.post(route('problem.store'), {
        onSuccess: () => showRootCauseModal.value = false,
    })
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + complaint.code" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <help-button title="Şikayet Detayı — Nasıl Çalışır?" subtitle="Bir şikayetin tüm yaşam döngüsünü buradan yönetirsiniz">
                <p><strong>Durum akışı:</strong> Alındı → (İlk Yanıtı Kaydet) → İnceleniyor → (Çözüldü Olarak İşaretle) → Çözüldü → (Müşteriye Bildir ve Kapat) → Kapatıldı.</p>
                <p><strong>Kök Neden Araştırması (DÖF) Aç:</strong> Şikayetin kök nedenini araştırmak/düzeltici faaliyet başlatmak gerekiyorsa bu butonla bir uygunsuzluk kaydı açın. Sistem otomatik olarak şikayeti "İnceleniyor" durumuna alır.</p>
                <p><strong>Yeniden Aç:</strong> Kapatılmış bir şikayette müşteri verilen çözümden memnun kalmadıysa, nedenini belirterek şikayeti yeniden açabilirsiniz — bu, kalıcı olmayan çözümleri ve tekrarlayan sorunları kayda geçirmenizi sağlar.</p>
            </help-button>
            <simple-button type="route" :link="route('customer-complaint.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <!--Header Card-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <h2 class="text-xl font-bold">{{ complaint.title }}</h2>
                    <div class="flex gap-2 mt-2 flex-wrap">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="statusColorClasses[complaint.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="statusLabel(complaint.status)"/>
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="severityColorClasses[complaint.severity] ?? 'bg-slate-100 text-slate-700'"
                              v-text="tm(`term.severityValue.${complaint.severity}`)"/>
                        <span class="px-2 py-0.5 rounded text-xs bg-indigo-100 text-indigo-700" v-text="tm(`term.channelValue.${complaint.channel}`)"/>
                    </div>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <simple-button v-if="complaint.status === 'received'" color="blue" @click="acknowledge">
                        <font-awesome-icon icon="play" class="mr-2"/>
                        <span v-text="tm('action.acknowledge')"/>
                    </simple-button>
                    <simple-button v-if="['received', 'under_investigation', 'reopened'].includes(complaint.status)" color="amber" @click="openResolve">
                        <font-awesome-icon icon="circle-check" class="mr-2"/>
                        <span v-text="tm('action.resolve')"/>
                    </simple-button>
                    <simple-button v-if="complaint.status === 'resolved'" color="green" @click="openClose">
                        <font-awesome-icon icon="circle-check" class="mr-2"/>
                        <span v-text="tm('action.close')"/>
                    </simple-button>
                    <simple-button v-if="complaint.status === 'closed'" color="orange" @click="openReopen">
                        <font-awesome-icon icon="rotate-left" class="mr-2"/>
                        <span v-text="tm('action.reopen')"/>
                    </simple-button>
                    <simple-button color="red" @click="openRootCause">
                        <font-awesome-icon icon="screwdriver-wrench" class="mr-2"/>
                        <span v-text="tm('action.raiseRootCause')"/>
                    </simple-button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div><span class="text-slate-400 block" v-text="tm('term.customer')"/>{{ complaint.customer?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.department')"/>{{ complaint.department?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.productReference')"/>{{ complaint.product_reference ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.reportedBy')"/>{{ complaint.reported_by?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.receivedDate')"/>{{ formatDate(complaint.received_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.responseDueDate')"/>{{ formatDate(complaint.response_due_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.firstResponseAt')"/>{{ formatDateTime(complaint.first_response_at) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.closedAt')"/>{{ formatDateTime(complaint.closed_at) }}</div>
            </div>

            <div v-if="complaint.customer" class="mt-4 text-sm">
                <span class="text-slate-400 block">Müşteri İletişim</span>
                <p>{{ complaint.customer.contact_name ?? '-' }} — {{ complaint.customer.phone ?? '-' }} — {{ complaint.customer.email ?? '-' }}</p>
            </div>

            <div class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.description')"/>
                <p>{{ complaint.description }}</p>
            </div>

            <div v-if="complaint.resolution_summary" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.resolutionSummary')"/>
                <p>{{ complaint.resolution_summary }}</p>
            </div>

            <div v-if="complaint.reopened_count > 0" class="mt-4 text-sm bg-rose-50 dark:bg-rose-950 rounded p-3">
                <span class="text-rose-500 block">{{ tm('term.reopenedCount') }}: {{ complaint.reopened_count }}</span>
                <p v-if="complaint.reopen_reason">{{ complaint.reopen_reason }}</p>
            </div>

            <div v-if="complaint.customer_satisfaction_rating" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.satisfactionRating')"/>
                <p>{{ complaint.customer_satisfaction_rating }} / 5</p>
            </div>
        </div>

        <!--Root-Cause Problems-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <h3 class="font-bold mb-4" v-text="tm('term.rootCauseProblems')"/>
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
                <tr v-for="problem in complaint.problems" :key="problem.id" class="border-t border-slate-200 dark:border-slate-500">
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
                <tr v-if="complaint.problems.length === 0">
                    <td colspan="4" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Resolve Modal-->
        <teleport to="body">
            <Modal v-model="showResolveModal" :header="tm('action.resolve')" closeable close-button max-width="2xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="resolution_summary" :label="tm('term.resolutionSummary')" :errors="resolveV$.resolution_summary.$errors">
                            <text-area-input v-model="resolveForm.resolution_summary"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.resolve')" color="green" @click="submitResolve" :loading="resolveForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Close Modal-->
        <teleport to="body">
            <Modal v-model="showCloseModal" :header="tm('action.close')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="customer_satisfaction_rating" :label="tm('term.satisfactionRating')">
                            <select-input v-model="closeForm.customer_satisfaction_rating" :options="satisfactionOptions"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.close')" color="green" @click="submitClose" :loading="closeForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Reopen Modal-->
        <teleport to="body">
            <Modal v-model="showReopenModal" :header="tm('action.reopen')" closeable close-button max-width="2xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="reopen_reason" :label="tm('term.reopenReason')" :errors="reopenV$.reopen_reason.$errors">
                            <text-area-input v-model="reopenForm.reopen_reason"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.reopen')" color="orange" @click="submitReopen" :loading="reopenForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Raise Root-Cause Problem Modal-->
        <teleport to="body">
            <Modal v-model="showRootCauseModal" :header="tm('action.raiseRootCause')" closeable close-button max-width="2xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="title" :label="tm('term.title')" :errors="rootCauseV$.title.$errors">
                            <text-input v-model="rootCauseForm.title"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="severity" label="Önem Derecesi" :errors="rootCauseV$.severity.$errors">
                            <select-input v-model="rootCauseForm.severity" :options="[
                                {id: 'low', label: 'Düşük'},
                                {id: 'medium', label: 'Orta'},
                                {id: 'high', label: 'Yüksek'},
                                {id: 'critical', label: 'Kritik'},
                            ]"/>
                        </input-group>
                        <input-group class="col-span-3" labelFor="detected_date" label="Tespit Tarihi" :errors="rootCauseV$.detected_date.$errors">
                            <text-input input-type="date" v-model="rootCauseForm.detected_date"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')" :errors="rootCauseV$.description.$errors">
                            <text-area-input v-model="rootCauseForm.description"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.raiseRootCause')" color="red" @click="submitRootCause" :loading="rootCauseForm.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
