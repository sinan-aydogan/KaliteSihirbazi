import {defineStore} from "pinia";
import {useForm} from "@inertiajs/vue3";
import {ref} from "vue";
import {helpers, maxLength, required, requiredIf} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import Translates from "../translates"

export const useCreateDocumentStore = defineStore('createDocument', () => {

    // Multi-lang
    const {t, tm} = Translates();

    const namingRule = ref('auto')

    const form = useForm({
        id: null,
        code: "",
        name: "",
        description: "",
        document_type_id: null,
        department_id: null,
        publishing_status: 'draft',
        distribution_points: [],
        related_departments: [],
        approving_procedure: {
            read: [],
            approve: [],
        },
        file: null
    })

    const approvers = ref({
        temp: null,
        selected: [],
    })

    // Rules
    const rules = ref({
        code: {
            required: helpers.withMessage(t('message.validation.required'), requiredIf(namingRule.value === 'manual')),
            maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
        },
        name: {
            required: helpers.withMessage(t('message.validation.required'), required),
            maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
        },
        document_type_id: {required: helpers.withMessage(t('message.validation.required'), required)},
        department_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    })

    const v$ = useVuelidate(rules, form)

    const setNamingRule = (value) => {
        namingRule.value = value
    }

    const addApprover = () => {
        approvers.value.selected.push(approvers.value.temp)
        approvers.value.temp = null
    }

    const removeApprover = (index) => {
        approvers.value.selected.splice(index,1)
    }

    /*Create*/
    const handleSubmit = async () => {
        const isValidated = await v$.value.$validate()
        if (!isValidated) return

        if (formType.value === 'create') {
            form.post(route('document.store'), {
                onSuccess: () => {
                    form.reset();
                    v$.value.$reset();
                    showModal.value = false;
                },
                forceFormData: true,
            })
        } else {
            form.put(route('document.update', {id: form.id}), {
                onSuccess: () => {
                    form.reset();
                    v$.value.$reset();
                    showModal.value = false;
                }
            })
        }
    }

    return {
        form,
        approvers,
        addApprover,
        removeApprover,
        v$,
        handleSubmit,
        setNamingRule,
    }
})
