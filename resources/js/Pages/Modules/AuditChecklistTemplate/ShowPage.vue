<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue"
import {useForm, router} from "@inertiajs/vue3";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    template: Object,
})

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    question: "",
    standard_reference: "",
    sort_order: null,
})

const rules = ref({
    question: {required: helpers.withMessage(t('message.validation.required'), required)},
    standard_reference: {},
    sort_order: {},
})

const v$ = useVuelidate(rules, form)

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    formType.value = 'create';
    showModal.value = true;
}

const openEdit = (question) => {
    form.id = question.id;
    form.question = question.question;
    form.standard_reference = question.standard_reference;
    form.sort_order = question.sort_order;
    formType.value = 'update';
    showModal.value = true;
}

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('audit-checklist-question.store', props.template.id), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('audit-checklist-question.update', {auditChecklistQuestion: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    }
}

const handleDelete = (id) => {
    router.delete(route("audit-checklist-question.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.showPage.title') + ' — ' + template.name" :sub-title="tm('title.showPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('audit-checklist-template.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
            <a :href="route('audit-checklist-template.print', template.id)" target="_blank" class="inline-block">
                <simple-button color="neutral" type="button">
                    <font-awesome-icon icon="print" class="mr-2"/>
                    <span v-text="tm('action.print')"/>
                </simple-button>
            </a>
            <simple-button color="green" @click="openCreate">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="tm('action.addQuestion')"/>
            </simple-button>
        </template>

        <div class="bg-slate-100 dark:bg-slate-600 rounded-lg p-6">
            <table class="w-full text-sm">
                <thead>
                <tr class="text-slate-400 text-left">
                    <th class="px-2 pb-2">#</th>
                    <th class="px-2 pb-2" v-text="tm('term.question')"/>
                    <th class="px-2 pb-2" v-text="tm('term.standardReference')"/>
                    <th class="px-2 pb-2"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(question, index) in template.questions" :key="question.id" class="border-t border-slate-200 dark:border-slate-500">
                    <td class="px-2 py-2">{{ index + 1 }}</td>
                    <td class="px-2 py-2">{{ question.question }}</td>
                    <td class="px-2 py-2 text-slate-400">{{ question.standard_reference ?? '-' }}</td>
                    <td class="px-2 py-2 text-right whitespace-nowrap">
                        <font-awesome-icon icon="pen" class="cursor-pointer text-sky-600 hover:scale-110 transition mr-3" @click="openEdit(question)"/>
                        <font-awesome-icon icon="trash-can" class="cursor-pointer text-rose-600 hover:scale-110 transition" @click="handleDelete(question.id)"/>
                    </td>
                </tr>
                <tr v-if="template.questions.length === 0">
                    <td colspan="4" class="text-center py-4 text-slate-400" v-text="t('message.feedback.noResults')"/>
                </tr>
                </tbody>
            </table>
        </div>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="tm('title.addQuestionPage.title')"
                :subHeader="tm('title.addQuestionPage.subTitle')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="question" :label="tm('term.question')" :errors="v$.question.$errors">
                            <text-area-input v-model="form.question"/>
                        </input-group>

                        <input-group class="col-span-4" labelFor="standard_reference" :label="tm('term.standardReference')">
                            <text-input v-model="form.standard_reference"/>
                        </input-group>

                        <input-group class="col-span-2" labelFor="sort_order" :label="tm('term.sortOrder')">
                            <text-input input-type="number" v-model="form.sort_order"/>
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
