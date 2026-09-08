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
import SwitchInput from "@/Components/Form/SwitchInput.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    capa: Object,
    users: {
        type: Array,
        default: () => []
    }
})

const typeOptions = computed(() => [
    {id: 'corrective', label: tm('term.capaType.corrective')},
    {id: 'preventive', label: tm('term.capaType.preventive')},
])

const sourceTypeOptions = computed(() => [
    {id: 'document_revision_request', label: tm('term.capaSourceType.document_revision_request')},
    {id: 'audit_finding', label: tm('term.capaSourceType.audit_finding')},
    {id: 'customer_complaint', label: tm('term.capaSourceType.customer_complaint')},
    {id: 'internal', label: tm('term.capaSourceType.internal')},
    {id: 'other', label: tm('term.capaSourceType.other')},
])

const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))

const statusColorClasses = {
    open: 'bg-slate-100 text-slate-700',
    action_plan: 'bg-sky-100 text-sky-700',
    in_progress: 'bg-amber-100 text-amber-700',
    pending_verification: 'bg-violet-100 text-violet-700',
    closed_effective: 'bg-emerald-100 text-emerald-700',
    closed_ineffective: 'bg-rose-100 text-rose-700',
}

const actionStatusColorClasses = {
    pending: 'bg-slate-100 text-slate-700',
    in_progress: 'bg-amber-100 text-amber-700',
    done: 'bg-emerald-100 text-emerald-700',
}

const formatDate = (value) => value ? new Date(value).toLocaleDateString('tr-TR') : '-'

/* ---------- Edit CAPA ---------- */
const showEditModal = ref(false)
const editForm = useForm({
    title: props.capa.title,
    type: props.capa.type,
    description: props.capa.description,
    source_type: props.capa.source_type,
    root_cause: props.capa.root_cause,
    responsible_id: props.capa.responsible_id,
    due_date: props.capa.due_date?.substring(0, 10),
})
const editRules = ref({
    title: {required: helpers.withMessage(t('message.validation.required'), required)},
    type: {required: helpers.withMessage(t('message.validation.required'), required)},
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    source_type: {},
    root_cause: {},
    responsible_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    due_date: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const editV$ = useVuelidate(editRules, editForm)

const openEdit = () => {
    editForm.title = props.capa.title;
    editForm.type = props.capa.type;
    editForm.description = props.capa.description;
    editForm.source_type = props.capa.source_type;
    editForm.root_cause = props.capa.root_cause;
    editForm.responsible_id = props.capa.responsible_id;
    editForm.due_date = props.capa.due_date?.substring(0, 10);
    showEditModal.value = true;
}

const submitEdit = async () => {
    const isValidated = await editV$.value.$validate()
    if (!isValidated) return

    editForm.put(route('capa.update', props.capa.id), {
        onSuccess: () => showEditModal.value = false,
    })
}

/* ---------- Actions ---------- */
const showActionModal = ref(false)
const actionFormType = ref('create')
const actionForm = useForm({
    id: null,
    description: "",
    responsible_id: null,
    due_date: "",
})
const actionRules = ref({
    description: {required: helpers.withMessage(t('message.validation.required'), required)},
    responsible_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    due_date: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const actionV$ = useVuelidate(actionRules, actionForm)

const openCreateAction = () => {
    actionForm.reset();
    actionV$.value.$reset();
    actionFormType.value = 'create';
    showActionModal.value = true;
}

const openEditAction = (action) => {
    actionForm.id = action.id;
    actionForm.description = action.description;
    actionForm.responsible_id = action.responsible_id;
    actionForm.due_date = action.due_date?.substring(0, 10);
    actionFormType.value = 'update';
    showActionModal.value = true;
}

const submitAction = async () => {
    const isValidated = await actionV$.value.$validate()
    if (!isValidated) return

    if (actionFormType.value === 'create') {
        actionForm.post(route('capa-action.store', props.capa.id), {
            onSuccess: () => {
                actionForm.reset();
                actionV$.value.$reset();
                showActionModal.value = false;
            }
        })
    } else {
        actionForm.put(route('capa-action.update', actionForm.id), {
            onSuccess: () => {
                actionForm.reset();
                actionV$.value.$reset();
                showActionModal.value = false;
            }
        })
    }
}

const deleteAction = (id) => {
    router.delete(route('capa-action.destroy', id), {preserveScroll: true})
}

const startAction = (id) => {
    router.post(route('capa-action.start', id), {}, {preserveScroll: true})
}

const completeAction = (id) => {
    router.post(route('capa-action.complete', id), {}, {preserveScroll: true})
}

/* ---------- Workflow ---------- */
const submitForVerification = () => {
    router.post(route('capa.submit-for-verification', props.capa.id), {}, {preserveScroll: true})
}

const reopen = () => {
    router.post(route('capa.reopen', props.capa.id), {}, {preserveScroll: true})
}

const showVerifyModal = ref(false)
const verifyForm = useForm({
    is_effective: true,
    notes: "",
})

const openVerify = () => {
    verifyForm.reset();
    showVerifyModal.value = true;
}

const submitVerify = () => {
    verifyForm.post(route('capa.verify', props.capa.id), {
        onSuccess: () => showVerifyModal.value = false,
    })
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + capa.code" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('capa.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <!--Header Card-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                    <h2 class="text-xl font-bold">{{ capa.title }}</h2>
                    <span class="px-2 py-0.5 rounded text-xs mt-2 inline-block"
                          :class="statusColorClasses[capa.status] ?? 'bg-slate-100 text-slate-700'"
                          v-text="tm(`term.capaStatus.${capa.status}`)"/>
                    <div v-if="capa.problem" class="mt-2 text-xs text-slate-400">
                        Uygunsuzluk:
                        <span class="text-sky-600 cursor-pointer hover:underline" @click="router.visit(route('problem.show', capa.problem.id))">
                            {{ capa.problem.code }} — {{ capa.problem.title }}
                        </span>
                    </div>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <simple-button v-if="capa.status === 'in_progress'" color="green" @click="submitForVerification">
                        <span v-text="tm('action.submitForVerification')"/>
                    </simple-button>
                    <simple-button v-if="capa.status === 'pending_verification'" color="blue" @click="openVerify">
                        <span v-text="tm('action.verify')"/>
                    </simple-button>
                    <simple-button v-if="capa.status === 'closed_ineffective'" color="orange" @click="reopen">
                        <span v-text="tm('action.reopen')"/>
                    </simple-button>
                    <simple-button color="neutral" @click="openEdit">
                        <font-awesome-icon icon="edit" class="mr-2"/>
                        <span v-text="t('action.update')"/>
                    </simple-button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div><span class="text-slate-400 block" v-text="tm('term.type')"/>{{ tm(`term.capaType.${capa.type}`) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.sourceType')"/>{{ capa.source_type ? tm(`term.capaSourceType.${capa.source_type}`) : '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.responsible')"/>{{ capa.responsible?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.openedBy')"/>{{ capa.opened_by?.name ?? '-' }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.dueDate')"/>{{ formatDate(capa.due_date) }}</div>
                <div><span class="text-slate-400 block" v-text="tm('term.closedAt')"/>{{ formatDate(capa.closed_at) }}</div>
            </div>

            <div class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.description')"/>
                <p>{{ capa.description }}</p>
            </div>
            <div v-if="capa.root_cause" class="mt-4 text-sm">
                <span class="text-slate-400 block" v-text="tm('term.rootCause')"/>
                <p>{{ capa.root_cause }}</p>
            </div>
        </div>

        <!--Actions-->
        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold" v-text="tm('title.createActionPage.title')"/>
                <simple-button color="green" @click="openCreateAction">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="tm('action.addAction')"/>
                </simple-button>
            </div>

            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2" v-text="tm('term.action')"/>
                    <th class="px-2 pb-2" v-text="tm('term.actionResponsible')"/>
                    <th class="px-2 pb-2" v-text="tm('term.actionDueDate')"/>
                    <th class="px-2 pb-2" v-text="tm('term.status')"/>
                    <th class="px-2 pb-2 text-right" v-text="t('table.actions')"/>
                </tr>
                </thead>
                <tbody>
                <tr v-for="action in capa.actions" :key="action.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ action.description }}</td>
                    <td class="px-2 py-2">{{ action.responsible?.name ?? '-' }}</td>
                    <td class="px-2 py-2">{{ formatDate(action.due_date) }}</td>
                    <td class="px-2 py-2">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="actionStatusColorClasses[action.status] ?? 'bg-slate-100 text-slate-700'"
                              v-text="tm(`term.actionStatus.${action.status}`)"/>
                    </td>
                    <td class="px-2 py-2">
                        <div class="flex justify-end items-center gap-3">
                            <font-awesome-icon v-if="action.status === 'pending'" icon="play" title="start"
                                                class="action-button text-emerald-500 cursor-pointer" @click="startAction(action.id)"/>
                            <font-awesome-icon v-if="action.status !== 'done'" icon="circle-check" title="complete"
                                                class="action-button text-sky-600 cursor-pointer" @click="completeAction(action.id)"/>
                            <font-awesome-icon icon="edit" class="action-button text-sky-600 cursor-pointer" @click="openEditAction(action)"/>
                            <font-awesome-icon icon="trash" class="action-button text-rose-500 cursor-pointer" @click="deleteAction(action.id)"/>
                        </div>
                    </td>
                </tr>
                <tr v-if="capa.actions.length === 0">
                    <td colspan="5" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Verifications-->
        <div v-if="capa.verifications.length > 0" class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <h3 class="font-bold mb-4" v-text="tm('title.verifyPage.title')"/>
            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2" v-text="tm('term.verificationDate')"/>
                    <th class="px-2 pb-2" v-text="tm('term.verifiedBy')"/>
                    <th class="px-2 pb-2" v-text="tm('term.isEffective')"/>
                    <th class="px-2 pb-2" v-text="tm('term.notes')"/>
                </tr>
                </thead>
                <tbody>
                <tr v-for="verification in capa.verifications" :key="verification.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ formatDate(verification.verification_date) }}</td>
                    <td class="px-2 py-2">{{ verification.verified_by?.name ?? '-' }}</td>
                    <td class="px-2 py-2">
                        <span class="px-2 py-0.5 rounded text-xs"
                              :class="verification.is_effective ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'"
                              v-text="verification.is_effective ? tm('action.effective') : tm('action.ineffective')"/>
                    </td>
                    <td class="px-2 py-2">{{ verification.notes ?? '-' }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <!--Edit CAPA Modal-->
        <teleport to="body">
            <Modal v-model="showEditModal" :header="capa.code" closeable close-button max-width="2xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="title" :label="tm('term.title')" :errors="editV$.title.$errors">
                            <text-input v-model="editForm.title"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="type" :label="tm('term.type')" :errors="editV$.type.$errors">
                            <select-input v-model="editForm.type" :options="typeOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="source_type" :label="tm('term.sourceType')">
                            <select-input v-model="editForm.source_type" :options="sourceTypeOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="description" :label="tm('term.description')" :errors="editV$.description.$errors">
                            <text-area-input v-model="editForm.description"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="root_cause" :label="tm('term.rootCause')">
                            <text-area-input v-model="editForm.root_cause"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="responsible_id" :label="tm('term.responsible')" :errors="editV$.responsible_id.$errors">
                            <select-input v-model="editForm.responsible_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="due_date" :label="tm('term.dueDate')" :errors="editV$.due_date.$errors">
                            <text-input input-type="date" v-model="editForm.due_date"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.update')" color="green" @click="submitEdit" :loading="editForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Action Modal-->
        <teleport to="body">
            <Modal v-model="showActionModal" :header="tm('title.createActionPage.title')" :subHeader="tm('title.createActionPage.subTitle')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="description" :label="tm('term.action')" :errors="actionV$.description.$errors">
                            <text-area-input v-model="actionForm.description"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="responsible_id" :label="tm('term.actionResponsible')" :errors="actionV$.responsible_id.$errors">
                            <select-input v-model="actionForm.responsible_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="due_date" :label="tm('term.actionDueDate')" :errors="actionV$.due_date.$errors">
                            <text-input input-type="date" v-model="actionForm.due_date"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t(`action.${actionFormType === 'create' ? 'create' : 'update'}`)" color="green" @click="submitAction" :loading="actionForm.processing"/>
                </template>
            </Modal>
        </teleport>

        <!--Verify Modal-->
        <teleport to="body">
            <Modal v-model="showVerifyModal" :header="tm('title.verifyPage.title')" :subHeader="tm('title.verifyPage.subTitle')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="is_effective" :label="tm('term.isEffective')">
                            <switch-input v-model="verifyForm.is_effective"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="notes" :label="tm('term.notes')">
                            <text-area-input v-model="verifyForm.notes"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="tm('action.verify')" color="green" @click="submitVerify" :loading="verifyForm.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>

<style scoped>
.action-button {
    @apply hover:scale-110 active:scale-90 transition;
}
</style>
