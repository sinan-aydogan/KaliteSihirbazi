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
    audit: Object,
    users: {
        type: Array,
        default: () => []
    },
})

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))
const criterionOptions = computed(() => [
    {id: 'sort', label: tm('term.criterionValue.sort')},
    {id: 'set_in_order', label: tm('term.criterionValue.set_in_order')},
    {id: 'shine', label: tm('term.criterionValue.shine')},
    {id: 'standardize', label: tm('term.criterionValue.standardize')},
    {id: 'sustain', label: tm('term.criterionValue.sustain')},
    {id: 'general', label: tm('term.criterionValue.general')},
])

const statusLabel = (status) => tm(`term.statusValue.${status}`)
const statusColorClasses = {
    open: 'bg-rose-100 text-rose-700',
    in_progress: 'bg-amber-100 text-amber-700',
    resolved: 'bg-emerald-100 text-emerald-700',
}

const scoreColorClass = (score) => {
    if (score >= 20) return 'text-emerald-600'
    if (score >= 15) return 'text-amber-600'
    return 'text-rose-600'
}

const formatDate = (value) => value ? new Date(value).toLocaleDateString('tr-TR') : '-'

/* ---------- Add Finding ---------- */
const showFindingModal = ref(false)
const findingForm = useForm({
    criterion: "general",
    description: "",
    responsible_id: null,
    due_date: "",
})
const findingRules = ref({
    criterion: {required: helpers.withMessage(t('message.validation.required'), required)},
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    responsible_id: {},
    due_date: {},
})
const findingV$ = useVuelidate(findingRules, findingForm)

const openAddFinding = () => {
    findingForm.reset();
    findingV$.value.$reset();
    showFindingModal.value = true;
}

const submitFinding = async () => {
    const isValidated = await findingV$.value.$validate()
    if (!isValidated) return

    findingForm.post(route('five-s-audit-finding.store', props.audit.id), {
        onSuccess: () => showFindingModal.value = false,
        preserveScroll: true,
    })
}

/* ---------- Resolve Finding ---------- */
const showResolveModal = ref(false)
const resolvingFindingId = ref(null)
const resolveForm = useForm({
    resolution_note: "",
})
const openResolve = (finding) => {
    resolvingFindingId.value = finding.id;
    resolveForm.reset();
    showResolveModal.value = true;
}
const submitResolve = () => {
    resolveForm.post(route('five-s-audit-finding.resolve', resolvingFindingId.value), {
        onSuccess: () => showResolveModal.value = false,
        preserveScroll: true,
    })
}

const deleteFinding = (findingId) => {
    router.delete(route('five-s-audit-finding.destroy', findingId), {preserveScroll: true})
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + audit.code" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <help-button title="5S Denetimi Detayı — Nasıl Çalışır?" subtitle="Puanlar ve bulgular">
                <p>Puanı düşük bir kriter için <strong>bulgu ekleyip</strong> sorumlu ve son tarih atayabilirsiniz; çözüldüğünde "Çözüldü Olarak İşaretle" ile kapatılır.</p>
            </help-button>
            <simple-button type="route" :link="route('five-s-audit.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <!--Header Card-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <h2 class="text-xl font-bold">{{ audit.area?.name }}</h2>
                    <div class="flex gap-2 mt-2 flex-wrap text-sm text-slate-500">
                        <span>{{ tm('term.auditDate') }}: {{ formatDate(audit.audit_date) }}</span>
                        <span>{{ tm('term.auditedBy') }}: {{ audit.audited_by?.name ?? '-' }}</span>
                    </div>
                </div>
                <div class="text-3xl font-bold" :class="scoreColorClass(audit.total_score)">{{ audit.total_score }} / 25</div>
            </div>

            <div class="grid grid-cols-5 gap-3 mt-6 text-center text-sm">
                <div class="bg-white dark:bg-slate-700 rounded p-3">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.sortScore')"/>
                    <span class="font-bold text-lg">{{ audit.sort_score }}</span>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-3">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.setInOrderScore')"/>
                    <span class="font-bold text-lg">{{ audit.set_in_order_score }}</span>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-3">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.shineScore')"/>
                    <span class="font-bold text-lg">{{ audit.shine_score }}</span>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-3">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.standardizeScore')"/>
                    <span class="font-bold text-lg">{{ audit.standardize_score }}</span>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded p-3">
                    <span class="text-slate-400 block text-xs mb-1" v-text="tm('term.sustainScore')"/>
                    <span class="font-bold text-lg">{{ audit.sustain_score }}</span>
                </div>
            </div>

            <div v-if="audit.general_note" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.generalNote')"/>
                <p>{{ audit.general_note }}</p>
            </div>
        </div>

        <!--Findings-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold" v-text="tm('term.findings')"/>
                <simple-button color="blue" @click="openAddFinding">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="t('action.addFinding')"/>
                </simple-button>
            </div>
            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2 w-32" v-text="tm('term.criterion')"/>
                    <th class="px-2 pb-2" v-text="tm('term.description')"/>
                    <th class="px-2 pb-2 w-32" v-text="tm('term.responsible')"/>
                    <th class="px-2 pb-2 w-28" v-text="tm('term.dueDate')"/>
                    <th class="px-2 pb-2 w-28" v-text="tm('term.status')"/>
                    <th class="px-2 pb-2 w-32"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="finding in audit.findings" :key="finding.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ tm(`term.criterionValue.${finding.criterion}`) }}</td>
                    <td class="px-2 py-2">{{ finding.description }}</td>
                    <td class="px-2 py-2">{{ finding.responsible?.name ?? '-' }}</td>
                    <td class="px-2 py-2">{{ formatDate(finding.due_date) }}</td>
                    <td class="px-2 py-2">
                        <span class="px-2 py-0.5 rounded text-xs" :class="statusColorClasses[finding.status] ?? ''" v-text="statusLabel(finding.status)"/>
                    </td>
                    <td class="px-2 py-2 text-right whitespace-nowrap">
                        <simple-button v-if="finding.status !== 'resolved'" color="green" @click="openResolve(finding)">
                            <font-awesome-icon icon="check"/>
                        </simple-button>
                        <simple-button color="red" class="ml-1" @click="deleteFinding(finding.id)">
                            <font-awesome-icon icon="trash"/>
                        </simple-button>
                    </td>
                </tr>
                <tr v-if="audit.findings.length === 0">
                    <td colspan="6" class="text-center py-4 text-slate-400" v-text="tm('message.feedback.emptyFindingsList')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Add Finding Modal-->
        <teleport to="body">
            <Modal v-model="showFindingModal" :header="tm('title.addFindingModal.title')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="criterion" :label="tm('term.criterion')" :errors="findingV$.criterion.$errors">
                            <select-input v-model="findingForm.criterion" :options="criterionOptions"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="due_date" :label="tm('term.dueDate')">
                            <text-input input-type="date" v-model="findingForm.due_date"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="responsible_id" :label="tm('term.responsible')">
                            <select-input v-model="findingForm.responsible_id" :options="userOptions"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="description" :label="tm('term.description')" :errors="findingV$.description.$errors">
                            <text-area-input v-model="findingForm.description"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.addFinding')" color="green" @click="submitFinding" :loading="findingForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Resolve Finding Modal-->
        <teleport to="body">
            <Modal v-model="showResolveModal" :header="tm('title.resolveFindingModal.title')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-12" labelFor="resolution_note" :label="tm('term.resolutionNote')">
                            <text-area-input v-model="resolveForm.resolution_note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.resolve')" color="green" @click="submitResolve" :loading="resolveForm.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
