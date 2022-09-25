<script setup>
import {ref} from "vue"
import {Inertia} from "@inertiajs/inertia";
import {useForm} from "@inertiajs/inertia-vue3";
import EmptySource from "@/Components/Content/EmptySource.vue"
import Modal from "@/Components/Modal/Modal.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import Table from "@/Components/Table/Table.vue";
import TextInput from "@/Components/Form/TextInput.vue"
import relativeTime from "dayjs/plugin/relativeTime";
import ShowPage from "@/Pages/Modules/HumanResources/Employee/ShowPage.vue"

// Multi-lang
import Translates from "../translates"
import dayjs from "dayjs";

const {t, tm} = Translates();

const props = defineProps({
  employee: Object,
  departments: Array,
  jobDescriptions: Array,
  employees: Array,
})

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, helpers} from "@vuelidate/validators"

const form = useForm({
  employee_id: props.employee.id,
  job_description_id: null,
  assignment_date: '',
  appointer_id: null
})

const rules = ref({
  job_description_id: {required: helpers.withMessage(t('message.validation.required'), required)},
  assignment_date: {required: helpers.withMessage(t('message.validation.required'), required)},
  appointer_id: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const v$ = useVuelidate(rules, form)

const showAssigmentModal = ref(false);

const handleSubmit = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  form.post(route('job-description-assignment.store'), {
    onSuccess: () => {
      form.reset()
      showAssigmentModal.value = false
    }
  })
}

const headers = [
  {
    id: "name",
    label: t('term.jobDescription')
  },
  {
    id: 'assignment_date',
    label: tm('term.assignment_date')
  },
  {
    id: 'appointer',
    label: tm('term.appointer')
  }
]

const handleDelete = (id) => {
  Inertia.delete(route('job-description-assignment.destroy', id))
}

dayjs.extend(relativeTime)
</script>

<template>
  <ShowPage :employee="employee">
    <div v-if="employee.jdAssignments.length>0" class="mt-6"
    >
      <Table
          :data="employee.jdAssignments"
          :headers="headers"
          @delete="handleDelete($event.id)"
          delete-action
      >
        <template #actionArea>
          <SimpleButton @click="showAssigmentModal = true" :label="tm('action.makeAssigment')"/>
        </template>

        <template #name="{props}">
          {{ props.job_description.name }}
        </template>

        <template #assignment_date="{props}">
          {{ dayjs(props.assignment_date).format('DD-MMMM-YY') }} ({{ dayjs(props.assignment_date).from(Date.now()) }})
        </template>

        <template #appointer="{props}">
          {{ props.appointer.employeeName }}
        </template>
      </Table>
    </div>
    <!--Empty Message-->
    <EmptySource
        v-else
        :message="tm('message.feedback.emptyJobDescriptionAssigment')"
        :add-new-text="tm('action.makeAssigment')"
        class="mt-6"
        :add-new-callback="()=>{showAssigmentModal = true}"
    ></EmptySource>

    <!--Job Description Assigment Form-->
    <Modal
        v-model="showAssigmentModal"
        :header="tm('title.jdAssigmentModal.title')"
        closeable
        close-button
    >
      <Form full-size>
        <FormSection bg-less>
          <!--Job Description-->
          <InputGroup label-for="job_description_id" :label="t('term.jobDescription')">
            <SelectInput v-model="form.job_description_id" :options="jobDescriptions" option-label="name"
                         option-key="id"/>
          </InputGroup>

          <!--Assigment Date-->
          <InputGroup label-for="assignment_date" :label="t('term.assignment_date')">
            <TextInput v-model="form.assignment_date" input-type="date"/>
          </InputGroup>

          <!--Appointer-->
          <InputGroup label-for="appointer_id" :label="t('term.appointer')">
            <SelectInput v-model="form.appointer_id" :options="employees" option-label="employeeName" option-key="id"/>
          </InputGroup>
        </FormSection>
      </Form>
      <template #footer>
        <SimpleButton :label="t('action.cancel')" color="neutral" @click="showAssigmentModal=false"/>
        <SimpleButton :label="tm('action.makeAssigment')" color="green" @click="handleSubmit"
                      :loading="form.processing"/>
      </template>
    </Modal>
  </ShowPage>
</template>