<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
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
import TextListInput from "@/Components/Form/TextListInput.vue"
import TextListInputWithSelect from "@/Components/Form/TextListInputWithSelect.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"

// Props
const props = defineProps({
  tableData: {
    type: Object,
    default: {}
  },
  departments: {
    type: Array,
    default: []
  }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"

/*Table*/
const tableHeaders = [
  {
    id: 'code',
    label: tm('term.code')
  },
  {
    id: 'name',
    label: tm('term.name')
  },
  {
    id: "staff_type",
    label: tm('term.staffType')
  },
  {
    id: "department_id",
    label: tm('term.department')
  },
  {
    id: "status",
    label: tm('term.status'),
    align: 'center'
  }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const form = useForm({
  id: null,
  code: "",
  name: "",
  description: "",
  staff_type: "blue",
  department_id: null,
  responsibilities: [],
  powers: [],
  requirements: [],
  skills: [],
  working_conditions: [],
  working_tools: [],
  working_hours: [],
  overtime_status: [],
  travel_status: [],
  status: true,
})

/*Related Data with select*/
const loading = ref(false)
const getDataModel = ref()
const getData = (query) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      router.reload({
        data: {
          qD: query
        },
        preserveState: true,
        preserveScroll: true,
        only: [getDataModel.value]
      })
    }, 500)
  } else {
    props[getDataModel.value] = []
  }
}

// Rules
const lengthValidation = (value) => value.length > 0

const rules = ref({
  code: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
  },
  name: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
  },
  department_id: {required: helpers.withMessage(t('message.validation.required'), required)},
  responsibilities: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  powers: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  requirements: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  skills: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  working_conditions: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  working_tools: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  working_hours: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  overtime_status: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
  travel_status: {lengthValidation: helpers.withMessage(t('message.validation.required'), lengthValidation)},
})

const v$ = useVuelidate(rules, form)

// Data
import Terms from "./terms"

const {staffTypes, locationTypes} = Terms()

/*Create*/
const handleSubmit = async () => {

  const isValidated = await v$.value.$validate()
  if (!isValidated) return
  // Correction Main Department
  if (form.type === 'main') {
    form.department_id = null
  }

  if (formType.value === 'create') {
    form.post(route('job-description.store'), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  } else {
    form.put(route('job-description.update', {id: form.id}), {
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
  axios.get(route("job-description.edit", {id: id})).then(response => {
    form.id = response.data.id;
    form.code = response.data.code;
    form.name = response.data.name;
    form.type = response.data.type;
    form.department_id = response.data.department_id;
    form.employee_id = response.data.employee_id;
  })
  showModal.value = true;
  formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
  router.delete(route("job-description.destroy", id), {
    preserveState: true,
  });
}

</script>

<template>
  <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
    <template #actionArea>
      <simple-button type="route" :link="route('job-description.deleted')" color="red">
        <font-awesome-icon icon="trash-can" class="mr-2"/>
        <span v-text="t('term.deletedItems')"/>
      </simple-button>

      <simple-button @click="showModal = true; formType = 'create'" color="green">
        <font-awesome-icon icon="plus" class="mr-2"/>
        <span v-text="t('action.addNew')"/>
      </simple-button>
    </template>
    <Table
        :data="tableData"
        :headers="tableHeaders"
        @view="router.visit(route('job-description.show', $event.id))"
        @edit="getRowInfo($event.id)"
        show-action
        edit-action
    >
      <!--Staff Type-->
      <template #staff_type="{props}">
        <div
            class="flex space-x-2 items-center px-2 py-1 rounded"

        >
          <div
              class="flex items-center justify-center w-8 h-8 rounded"
              :class="props.staff_type=== 'white' ? 'dark:bg-slate-700': 'text-sky-700 dark:text-white dark:bg-sky-700'"
          >
            <font-awesome-icon
                :icon="'fa-solid '+ (props.staff_type=== 'white' ? 'fa-user-tie': 'fa-helmet-safety')"
                size="lg"
                class="px-2 py-1 rounded-full"
            />
          </div>

          <span v-text="staffTypes.find(i=>i.id === props.staff_type).label"/>
        </div>
      </template>

      <!--Department-->
      <template #department_id="{props}">
        {{ props.department_id ? props.department.name : '' }}
      </template>

      <!--Status-->
      <template #status="{props}">
        <font-awesome-icon icon="fa-solid fa-circle-check" :class="props.status ? 'text-emerald-500': ''" size="lg"/>
      </template>
    </Table>
  </app-layout>

  <teleport to="body">
    <!--Modal-->
    <Modal
        v-model="showModal"
        :header="tm('title.createPage.title')"
        :subHeader="tm('title.createPage.subTitle')"
        closeable
        closeButton
    >
      <Form full-size>
        <FormSection bg-less>
          <!-- Code -->
          <input-group class="col-span-2" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
            <text-input v-model="form.code"/>
          </input-group>

          <!-- Name -->
          <input-group class="col-span-4" labelFor="name" :label="tm('term.name')"
                       :errors="v$.name.$errors">
            <text-input v-model="form.name"/>
          </input-group>

          <!-- Description -->
          <input-group class="col-span-6" labelFor="description" :label="tm('term.description')">
            <text-area-input :rows="4" v-model="form.description"/>
          </input-group>

          <!-- Type -->
          <input-group class="col-span-3" labelFor="staff_type" :label="tm('term.staffType')">
            <select-input v-model="form.staff_type" :options="staffTypes"/>
          </input-group>

          <!-- Department -->
          <input-group class="col-span-3" labelFor="department_id" :label="tm('term.department')"
                       :errors="v$.department_id.$errors">
            <select-input v-model="form.department_id" :options="departments" optionLabel="name"
                          :disabled="form.type === 'main'"/>
          </input-group>

          <!-- Requirements -->
          <input-group class="col-span-6" labelFor="requirements" :label="tm('term.requirements')"
                       :errors="v$.requirements.$errors">
            <text-list-input :rows="4" v-model="form.requirements"/>
          </input-group>

          <!-- Responsibilities -->
          <input-group class="col-span-6" labelFor="responsibilities" :label="tm('term.responsibilities')"
                       :errors="v$.responsibilities.$errors">
            <text-list-input :rows="4" v-model="form.responsibilities"/>
          </input-group>

          <!-- Powers -->
          <input-group class="col-span-6" labelFor="powers" :label="tm('term.powers')" :errors="v$.powers.$errors">
            <text-list-input :rows="4" v-model="form.powers"/>
          </input-group>

          <!-- Skills -->
          <input-group class="col-span-6" labelFor="skills" :label="tm('term.skills')" :errors="v$.skills.$errors">
            <text-list-input :rows="4" v-model="form.skills"/>
          </input-group>

          <!-- Working Conditions -->
          <input-group class="col-span-6" labelFor="working_conditions" :label="tm('term.workingConditions')"
                       :errors="v$.working_conditions.$errors">
            <text-list-input :rows="4" v-model="form.working_conditions"/>
          </input-group>

          <!-- Working Tools -->
          <input-group class="col-span-6" labelFor="working_tools" :label="tm('term.workingTools')"
                       :errors="v$.working_tools.$errors">
            <text-list-input :rows="4" v-model="form.working_tools"/>
          </input-group>

          <!-- Working Hours -->
          <input-group class="col-span-6" labelFor="working_hours" :label="tm('term.workingHours')"
                       :errors="v$.working_hours.$errors">
            <text-list-input :rows="4" v-model="form.working_hours"/>
          </input-group>

          <!-- Overtime Status -->
          <input-group class="col-span-6" labelFor="overtime_status" :label="tm('term.overtimeStatus')"
                       :errors="v$.overtime_status.$errors">
            <text-list-input :rows="4" v-model="form.overtime_status"/>
          </input-group>

          <!-- Travel Status -->
          <input-group class="col-span-6" labelFor="travel_status" :label="tm('term.travelStatus')"
                       :errors="v$.travel_status.$errors">
            <text-list-input-with-select
                v-model="form.travel_status"
                :options="locationTypes"
                label-key="label"
                text-key="reason"
                select-key="location"
                select-placeholder="Yön Seçini"
            />
          </input-group>

          <!-- Status -->
          <input-group class="col-span-6" labelFor="status" :label="tm('term.status')">
            <switch-input v-model="form.status"/>
          </input-group>
        </FormSection>
      </Form>

      <template #footer>
        <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()" />
        <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
      </template>
    </Modal>
  </teleport>
</template>
