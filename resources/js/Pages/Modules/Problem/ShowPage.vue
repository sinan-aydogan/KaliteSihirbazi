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

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    problem: Object,
    users: {
        type: Array,
        default: () => []
    }
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))

const capaTypeOptions = computed(() => [
    {id: 'corrective', label: 'Düzeltici'},
    {id: 'preventive', label: 'Önleyici'},
])

const statusColorClasses = {
    open: 'bg-slate-100 text-slate-700',
    under_review: 'bg-sky-100 text-sky-700',
    capa_raised: 'bg-amber-100 text-amber-700',
    closed_without_capa: 'bg-emerald-100 text-emerald-700',
    closed: 'bg-emerald-100 text-emerald-700',
}

const severityColorClasses = {
    low: 'bg-slate-100 text-slate-700',
    medium: 'bg-sky-100 text-sky-700',
    high: 'bg-amber-100 text-amber-700',
    critical: 'bg-rose-100 text-rose-700',
}

const capaStatusColorClasses = {
    open: 'bg-slate-100 text-slate-700',
    action_plan: 'bg-sky-100 text-sky-700',
    in_progress: 'bg-amber-100 text-amber-700',
    pending_verification: 'bg-violet-100 text-violet-700',
    closed_effective: 'bg-emerald-100 text-emerald-700',
    closed_ineffective: 'bg-rose-100 text-rose-700',
}

const capaStatusLabels = {
    open: 'Açık',
    action_plan: 'Aksiyon Planlandı',
    in_progress: 'Devam Ediyor',
    pending_verification: 'Doğrulama Bekliyor',
    closed_effective: 'Kapatıldı (Etkili)',
    closed_ineffective: 'Kapatıldı (Etkisiz)',
}

const formatDate = (value) => value ? new Date(value).toLocaleDateString('tr-TR') : '-'

/* ---------- Workflow ---------- */
const markUnderReview = () => {
    router.post(route('problem.mark-under-review', props.problem.id), {}, {preserveScroll: true})
}

const closeWithoutCapa = () => {
    router.post(route('problem.close-without-capa', props.problem.id), {}, {preserveScroll: true})
}

const closeProblem = () => {
    router.post(route('problem.close', props.problem.id), {}, {preserveScroll: true})
}

/* ---------- Raise CAPA ---------- */
const showRaiseCapaModal = ref(false)
const capaForm = useForm({
    problem_id: props.problem.id,
    title: "",
    type: "corrective",
    description: props.problem.description,
    responsible_id: null,
    due_date: "",
})
const capaRules = ref({
    title: {required: helpers.withMessage(t('message.validation.required'), required)},
    type: {required: helpers.withMessage(t('message.validation.required'), required)},
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    responsible_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    due_date: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const capaV$ = useVuelidate(capaRules, capaForm)

const openRaiseCapa = () => {
    capaForm.reset();
    capaForm.problem_id = props.problem.id;
    capaForm.description = props.problem.description;
    capaV$.value.$reset();
    showRaiseCapaModal.value = true;
}

const submitRaiseCapa = async () => {
    const isValidated = await capaV$.value.$validate()
    if (!isValidated) return

    capaForm.post(route('capa.store'), {
        onSuccess: () => showRaiseCapaModal.value = false,
    })
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + problem.code" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('problem.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <!--Header Card-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <h2 class="text-xl font-bold">{{ problem.title }}</h2>
                    <div class="flex gap-2 mt-2">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="statusColorClasses[problem.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="tm(`term.problemStatus.${problem.status}`)"/>
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="severityColorClasses[problem.severity] ?? 'bg-slate-100 text-slate-700'"
                              v-text="tm(`term.problemSeverity.${problem.severity}`)"/>
                    </div>
                    <div v-if="problem.audit" class="mt-2 text-xs text-slate-400">
                        Denetim:
                        <span class="text-sky-600 cursor-pointer hover:underline" @click="router.visit(route('audit.show', problem.audit.id))">
                            {{ problem.audit.code }} — {{ problem.audit.title }}
                        </span>
                        <span v-if="problem.checklist_answer">— Soru: "{{ problem.checklist_answer.question.question }}"</span>
                    </div>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <simple-button v-if="problem.status === 'open'" color="blue" @click="markUnderReview">
                        <span v-text="tm('action.markUnderReview')"/>
                    </simple-button>
                    <simple-button v-if="['open', 'under_review'].includes(problem.status)" color="green" @click="openRaiseCapa">
                        <span v-text="tm('action.raiseCapa')"/>
                    </simple-button>
                    <simple-button v-if="['open', 'under_review'].includes(problem.status)" color="neutral" @click="closeWithoutCapa">
                        <span v-text="tm('action.closeWithoutCapa')"/>
                    </simple-button>
                    <simple-button v-if="problem.status === 'capa_raised'" color="green" @click="openRaiseCapa">
                        <span v-text="tm('action.raiseCapa')"/>
                    </simple-button>
                    <simple-button v-if="problem.status === 'capa_raised'" color="orange" @click="closeProblem">
                        <span v-text="tm('action.close')"/>
                    </simple-button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div><span class="text-slate-400 block" v-text="tm('term.sourceType')"/>{{ tm(`term.problemSourceType.${problem.source_type}`) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.detectedBy')"/>{{ problem.detected_by?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.department')"/>{{ problem.department?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.detectedDate')"/>{{ formatDate(problem.detected_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.closedAt')"/>{{ formatDate(problem.closed_at) }}</div>
            </div>

            <div class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.description')"/>
                <p>{{ problem.description }}</p>
            </div>
        </div>

        <!--Linked CAPAs-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <h3 class="font-bold mb-4" v-text="tm('term.capaCount')"/>
            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2">Kod</th>
                    <th class="px-2 pb-2">Başlık</th>
                    <th class="px-2 pb-2">Sorumlu</th>
                    <th class="px-2 pb-2">Durum</th>
                    <th class="px-2 pb-2"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="capa in problem.capas" :key="capa.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ capa.code }}</td>
                    <td class="px-2 py-2">{{ capa.title }}</td>
                    <td class="px-2 py-2">{{ capa.responsible?.name ?? '-' }}</td>
                    <td class="px-2 py-2">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="capaStatusColorClasses[capa.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="capaStatusLabels[capa.status] ?? capa.status"/>
                    </td>
                    <td class="px-2 py-2 text-right">
                        <font-awesome-icon icon="list-check" class="cursor-pointer text-sky-600 hover:scale-110 transition"
                                            @click="router.visit(route('capa.show', capa.id))"/>
                    </td>
                </tr>
                <tr v-if="problem.capas.length === 0">
                    <td colspan="5" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Raise CAPA Modal-->
        <teleport to="body">
            <Modal v-model="showRaiseCapaModal" :header="tm('title.raiseCapaPage.title')" :subHeader="tm('title.raiseCapaPage.subTitle')" closeable close-button max-width="2xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="title" :label="tm('term.title')" :errors="capaV$.title.$errors">
                            <text-input v-model="capaForm.title"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="type" label="Tip" :errors="capaV$.type.$errors">
                            <select-input v-model="capaForm.type" :options="capaTypeOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="responsible_id" label="Sorumlu" :errors="capaV$.responsible_id.$errors">
                            <select-input v-model="capaForm.responsible_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')" :errors="capaV$.description.$errors">
                            <text-area-input v-model="capaForm.description"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="due_date" label="Termin Tarihi" :errors="capaV$.due_date.$errors">
                            <text-input input-type="date" v-model="capaForm.due_date"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.raiseCapa')" color="green" @click="submitRaiseCapa" :loading="capaForm.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
