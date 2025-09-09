<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref, computed} from "vue";
import {useForm, router} from "@inertiajs/vue3";

// Components
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    },
    educationPlans: {
        type: Array,
        default: () => []
    },
    instructors: {
        type: Array,
        default: () => []
    },
    educationTypes: {
        type: Array,
        default: () => []
    }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers, integer, minValue, maxValue} from "@vuelidate/validators"
import MultiSelectInput from "../../../../Components/Form/MultiSelectInput.vue";

/*Table*/
const tableHeaders = [
    {
        id: 'name',
        label: tm('term.name')
    },
    {
        id: 'education_plan.name',
        label: tm('term.educationPlan'),
        value: (row) => row?.education_plan?.name || ''
    },
    {
        id: 'planned_date',
        label: tm('term.plannedDate'),
        value: (row) => !!row?.planned_date ? new Date(row.planned_date).toLocaleDateString('tr-TR') : ''
    },
    {
        id: 'duration',
        label: tm('term.duration'),
        value: (row) => row?.duration ? `${row.duration} dk` : ''
    },
    {
        id: 'status',
        label: tm('term.status'),
        value: (row) => {
            if (row?.is_cancelled) return tm('term.cancelled');
            if (row?.is_completed) return tm('term.completed');
            return tm('term.planned');
        }
    },
    {
        id: 'education_types',
        label: tm('term.educationTypes'),
        value: (row) => row?.education_types?.map(type => type.name).join(', ') || ''
    }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const form = useForm({
    id: null,
    education_plan_id: "",
    name: "",
    description: "",
    planned_date: "",
    performed_date: "",
    duration: "",
    is_completed: false,
    is_cancelled: false,
    cancel_reason: ""
})

// Rules
const rules = ref({
    education_plan_id: {
        required: helpers.withMessage(t('message.validation.required'), required)
    },
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    education_types: {
        required: helpers.withMessage(t('message.validation.required'), required)
    },
    planned_date: {
        required: helpers.withMessage(t('message.validation.required'), required)
    },
    instructors: {
        required: helpers.withMessage(t('message.validation.required'), required)
    },
    duration: {
        required: helpers.withMessage(t('message.validation.required'), required),
        integer: helpers.withMessage(t('message.validation.integer'), integer),
        minValue: helpers.withMessage(t('message.validation.minValue', [1]), minValue(1)),
        maxValue: helpers.withMessage(t('message.validation.maxValue', [1440]), maxValue(1440))
    }
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('education.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('education.update', {id: form.id}), {
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
    axios.get(route("education.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.education_plan_id = response.data.education_plan_id;
        form.education_types = response.data.education_types;
        form.instructors = response.data.instructors;
        form.name = response.data.name;
        form.description = response.data.description;
        form.planned_date = response.data.planned_date;
        form.performed_date = response.data.performed_date;
        form.duration = response.data.duration;
        form.is_completed = response.data.is_completed;
        form.is_cancelled = response.data.is_cancelled;
        form.cancel_reason = response.data.cancel_reason;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("education.destroy", id), {
        preserveState: true,
    });
}

/*Navigation to Settings*/
const goToSettings = () => {
    router.visit(route('education.settings.index'))
}

</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <!--Deleted-->
            <simple-button type="route" :link="route('education.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('term.deletedItems')"/>
            </simple-button>

            <!--Manage Module-->
            <simple-button type="route" :link="route('education-setting.index')" color="blue">
                <font-awesome-icon icon="fa-solid fa-cog" class="mr-2"/>
                <span v-text="tm('term.manageModule')"/>
            </simple-button>

            <!--Add new-->
            <simple-button @click="showModal = true; form.reset(); formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="$t('action.addNew')"/>
            </simple-button>
        </template>
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @view="router.visit(route('education.show', $event.id))"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            show-action
            edit-action
            delete-action
        />
    </app-layout>

    <teleport to="body">
        <!--Modal-->
        <Modal
            v-model="showModal"
            :header="tm('title.createPage.title')"
            :subHeader="tm('title.createPage.subTitle')"
            closeable
            close-button
        >
            <Form full-size>
                <FormSection
                    bg-less
                    grid
                >
                    <!-- Education Plan -->
                    <input-group class="col-span-12" labelFor="education_plan_id" :label="tm('term.educationPlan')" :errors="v$.education_plan_id.$errors">
                        <select-input v-model="form.education_plan_id" :options="educationPlans" optionKey="id" optionLabel="name"/>
                    </input-group>

                    <!-- Name -->
                    <input-group class="col-span-12" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                        <text-input v-model="form.name"/>
                    </input-group>

                    <!-- Education Type -->
                    <input-group class="col-span-12" labelFor="short_description" :label="tm('term.shortDescription')" :errors="v$.education_types.$errors">
                        <MultiSelectInput v-model="form.education_types" :options="educationTypes" optionKey="id" optionLabel="name"/>
                    </input-group>

                    <!-- Instructors -->
                    <input-group class="col-span-12" labelFor="instructors" :label="tm('term.instructors')" :errors="v$.instructors.$errors">
                        <MultiSelectInput v-model="form.instructors" :options="instructors" optionKey="id" optionLabel="name"/>
                    </input-group>

                    <!-- Description -->
                    <input-group class="col-span-12" labelFor="description" :label="tm('term.description')">
                        <text-area-input v-model="form.description" :rows="4"/>
                    </input-group>

                    <!-- Planned Date -->
                    <input-group class="col-span-6" labelFor="planned_date" :label="tm('term.plannedDate')" :errors="v$.planned_date.$errors">
                        <text-input input-type="date" v-model="form.planned_date"/>
                    </input-group>

                    <!-- Duration -->
                    <input-group class="col-span-6" labelFor="duration" :label="tm('term.duration')" :errors="v$.duration.$errors">
                        <text-input input-type="number" v-model="form.duration" :placeholder="tm('term.durationPlaceholder')"/>
                    </input-group>

                    <!-- Performed Date (Only if completed) -->
                    <input-group v-if="form.is_completed" class="col-span-6" labelFor="performed_date" :label="tm('term.performedDate')">
                        <text-input input-type="date" v-model="form.performed_date"/>
                    </input-group>

                    <!-- Status Checkboxes -->
                    <div class="col-span-12 space-y-2">
                        <label class="flex items-center">
                            <input type="checkbox" v-model="form.is_completed" class="mr-2" />
                            <span v-text="tm('term.isCompleted')"/>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" v-model="form.is_cancelled" class="mr-2" />
                            <span v-text="tm('term.isCancelled')"/>
                        </label>
                    </div>

                    <!-- Cancel Reason (Only if cancelled) -->
                    <input-group v-if="form.is_cancelled" class="col-span-12" labelFor="cancel_reason" :label="tm('term.cancelReason')">
                        <text-area-input v-model="form.cancel_reason" :rows="3"/>
                    </input-group>

                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()" />
                <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
