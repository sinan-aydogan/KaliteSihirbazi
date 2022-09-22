<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useForm, Link} from "@inertiajs/inertia-vue3";

// Components
import Avatar from "@/Components/Avatar/Avatar.vue"
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
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
import {required, maxLength, numeric, helpers} from "@vuelidate/validators"

/*Table*/
const tableHeaders = [
  {
    id: 'code',
    label: tm('term.code'),
    width: 'w-32'
  },
  {
    id: 'employeeName',
    label: tm('term.name'),
    width: 'w-64'
  },
  {
    id: "department_id",
    label: tm('term.department'),
    width: 'w-64'
  },
  {
    id: "blood_type",
    label: tm('term.bloodType')
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
  has_account: false,
  code: "",
  name: "",
  department_id: null,
  employment_type: '',
  sex: null,
  is_married: null,
  contact_info: {
    personal: {
      phone: '',
      email: ''
    },
    work: {
      phone: '',
      email: ''
    },
    emergencyContacts: []
  },
  children_count: 0,
  birthday: '',
  employment_date: '',
  leaving_date: '',
  leaving_detail: '',
  blood_type: '',
  status: 'working',
})
const emergencyContactForm = ref({
  name: '',
  relationship: '',
  data: ''
})
const showEmergencyContactForm = ref(false)

/*Related Data with select*/
const loading = ref(false)
const getDataModel = ref()
const getData = (query) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      Inertia.reload({
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
  children_count: {numeric: helpers.withMessage(t('message.validation.number'), numeric)},
})

const v$ = useVuelidate(rules, form)

// Data
import Terms from "./terms"

const {bloodTypes, employmentTypes, genders, yesNoQuestions, statuses} = Terms()

/*Add Emergency Contact*/
const addEmergencyContact = () => {
  if (emergencyContactForm.value.name && emergencyContactForm.value.relationship && emergencyContactForm.value.data) {
    form.contact_info.emergencyContacts.push(emergencyContactForm.value)
    emergencyContactForm.value = {
      name: '',
      relationship: '',
      data: ''
    }
  } else {
    alert(t('message.feedback.pleaseFillInAllFields'));
  }

}
const deleteEmergencyContact = (index) => {
  form.contact_info.emergencyContacts.splice(index, 1)
}

/*Create*/
const handleSubmit = async () => {

  const isValidated = await v$.value.$validate()
  if (!isValidated) return
  // Correction Main Department
  if (form.type === 'main') {
    form.department_id = null
  }

  if (formType.value === 'create') {
    form.post(route('employee.store'), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  } else {
    form.put(route('employee.update', {id: form.id}), {
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
  axios.get(route("employee.edit", {id: id})).then(response => {
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
  Inertia.delete(route("employee.destroy", id), {
    preserveState: true,
  });
}

</script>

<template>
  <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
    <template #actionArea>
      <simple-button type="route" :link="route('employee.deleted')" color="red">
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
        @view="Inertia.visit(route('employee.show', $event.id))"
        @edit="getRowInfo($event.id)"
        show-action
        edit-action
    >

      <!--Employee Name-->
      <template #employeeName="{props}">
        <component
            :is="props['account'] ? Link : 'div'"
            :href="props['account'] ? route('employee.show', props.account.accountable_id) : null"
            class="flex space-x-2 items-center"
        >
          <Avatar v-if="props['account']" :src="props.account.profile_photo_url"/>
          <span v-text="props.employeeName"/>
        </component>
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
    <Modal v-model="showModal" :header="tm('title.createPage.title')" :subHeader="tm('title.createPage.subTitle')"
           closeable closeButton :actionButtons="['submit', 'reset']" @reset="form.reset()" @submit="handleSubmit">
      <Form layout="basic" :grid-size="12">
        <!--Personal Info-->
        <h3 v-text="tm('term.personalInfo')" class="col-span-12 font-bold -mb-2 pb-2 border-b border-slate-500"></h3>
        <!-- Code -->
        <input-group class="col-span-4" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
          <text-input v-model="form.code"/>
        </input-group>

        <!-- Name -->
        <input-group class="col-span-8" labelFor="name" :label="tm('term.name')"
                     :errors="v$.name.$errors">
          <text-input v-model="form.name"/>
        </input-group>

        <!-- Birthday -->
        <input-group class="col-span-4" labelFor="birthday" :label="tm('term.birthday')">
          <text-input v-model="form.birthday" inputType="date"/>
        </input-group>

        <!-- Sex -->
        <input-group class="col-span-4" labelFor="sex" :label="tm('term.sex')">
          <select-input v-model="form.sex" :options="genders">
            <template #both="{props}">
              <div class="space-x-2" :class="{
                'text-pink-600 dark:text-pink-400' : props.id === 'female',
                'text-sky-600 dark:text-sky-400' : props.id === 'male',
                'text-indigo-600 dark:text-indigo-400' : props.id === 'other',
              }">
                <font-awesome-icon
                    :icon="`fa-solid ${props.id === 'female' ? 'fa-venus' : props.id === 'male' ? 'fa-mars' : 'fa-transgender'}`"/>
                <span v-text="props.label"></span>
              </div>
            </template>
          </select-input>
        </input-group>

        <!-- Blood Type -->
        <input-group class="col-span-4" labelFor="blood_type" :label="tm('term.bloodType')">
          <select-input v-model="form.blood_type" :options="bloodTypes"/>
        </input-group>

        <!-- Is Married? -->
        <input-group class="col-span-4" labelFor="is_married" :label="tm('term.isMarried')">
          <select-input v-model="form.is_married" :options="yesNoQuestions"/>
        </input-group>

        <!-- Children Count -->
        <input-group class="col-span-4" labelFor="name" :label="tm('term.childrenCount')"
                     :errors="v$.children_count.$errors">
          <text-input input-type="number" v-model="form.children_count"/>
        </input-group>

        <!--Filler-->
        <div class="col-span-4"></div>

        <!--Contact Info-->
        <h3 v-text="tm('term.contactInfo')" class="col-span-12 font-bold -mb-2 pb-2 border-b border-slate-500"></h3>
        <!-- Personal Phone -->
        <input-group class="col-span-6" labelFor="personalPhone" :label="tm('term.personalPhone')">
          <text-input v-model="form.contact_info.personal.phone"/>
        </input-group>

        <!-- Personal Email -->
        <input-group class="col-span-6" labelFor="personalEmail" :label="tm('term.personalEmail')">
          <text-input v-model="form.contact_info.personal.email"/>
        </input-group>

        <!-- Work Phone -->
        <input-group class="col-span-6" labelFor="workPhone" :label="tm('term.workPhone')">
          <text-input v-model="form.contact_info.work.phone"/>
        </input-group>

        <!-- Work Email -->
        <input-group class="col-span-6" labelFor="workEmail" :label="tm('term.workEmail')">
          <text-input v-model="form.contact_info.work.email"/>
        </input-group>

        <!-- Emergency Contact -->
        <h3 v-text="tm('term.emergencyContacts')"
            class="col-span-12 font-bold -mb-2 pb-2 border-b border-slate-500"></h3>

        <div class="col-span-12">
          <!--List-->
          <div v-if="form.contact_info.emergencyContacts.length>0">
            <template v-for="(i,index) in form.contact_info.emergencyContacts">
              <div
                  class="flex justify-between pr-4 w-full border-b last:border-b-0 border-dotted border-slate-500 py-2">
                <div class="space-x-2">
                  <span v-text="i.name"></span>
                  <span v-text="i.relationship" class="before:content-['('] after:content-[')']"></span>
                </div>
                <span v-text="i.data"></span>
                <font-awesome-icon @click="deleteEmergencyContact(index)" icon="fa-solid fa-trash"
                                   class="cursor-pointer"/>
              </div>
            </template>
          </div>
          <!--Empty Message-->
          <div v-else-if="form.contact_info.emergencyContacts.length===0 && !showEmergencyContactForm"
               class="flex flex-col bg-slate-600 p-6 space-y-6 justify-center items-center rounded w-full border border-dashed">
            <span v-text="tm('message.feedback.emptyEmergencyContactsList')"></span>
            <simple-button @click="showEmergencyContactForm=true" :label="t('action.addNew')" full-size size="slim"/>
          </div>
        </div>

        <div v-if="showEmergencyContactForm" class="col-span-12 flex flex-col -mt-2">
          <div class="flex space-x-2">
            <input-group class="w-full" labelFor="workEmail" :label="tm('term.emergencyContactName')">
              <text-input v-model="emergencyContactForm.name"/>
            </input-group>

            <input-group class="w-full" labelFor="workEmail" :label="tm('term.relationshipDegree')">
              <text-input v-model="emergencyContactForm.relationship"/>
            </input-group>

            <input-group class="w-full" labelFor="workEmail" :label="tm('term.phone')">
              <text-input v-model="emergencyContactForm.data"/>
            </input-group>
          </div>

          <simple-button @click="addEmergencyContact" :label="t('action.addNew')" full-size size="slim" class="mt-2"/>
        </div>


        <!--Employment Info-->
        <h3 v-text="tm('term.employmentInfo')" class="col-span-12 font-bold -mb-2 pb-2 border-b border-slate-500"></h3>

        <!-- Department -->
        <input-group class="col-span-6" labelFor="department_id" :label="tm('term.department')"
                     :errors="v$.department_id.$errors">
          <select-input v-model="form.department_id" :options="departments" optionLabel="name"/>
        </input-group>

        <!-- Employment Type -->
        <input-group class="col-span-6" labelFor="employment_type" :label="tm('term.employmentType')">
          <select-input v-model="form.employment_type" :options="employmentTypes"/>
        </input-group>

        <!-- Employment Date -->
        <input-group class="col-span-6" labelFor="employmentDate" :label="tm('term.employmentDate')">
          <text-input v-model="form.employment_date" inputType="date"/>
        </input-group>

        <!-- Status -->
        <input-group class="col-span-6" labelFor="status" :label="tm('term.status')">
          <select-input v-model="form.status" :options="statuses">
            <template #both="{props}">
              <span v-text="props.label" class="px-1 py-0.5 rounded text-slate-100 text-sm" :class="props.style"></span>
            </template>
          </select-input>
        </input-group>

        <!-- Leaving Date -->
        <input-group v-if="form.status !== 'working'" class="col-span-6" labelFor="leavingDate"
                     :label="tm('term.leavingDate')">
          <text-input v-model="form.leaving_date" inputType="date"/>
        </input-group>

        <!--Filler-->
        <div class="col-span-6"></div>

        <!-- Leaving Detail -->
        <input-group v-if="form.status !== 'working' && form.status !== 'retired'" class="col-span-12"
                     labelFor="leavingDetail" :label="tm('term.leavingDetail')">
          <text-area-input v-model="form.leaving_detail"/>
        </input-group>
      </Form>
    </Modal>
  </teleport>
</template>
