<script setup>
// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import {useForm} from "@inertiajs/inertia-vue3";

// Multi-lang
import Translates from "../translates"
import {inject, onMounted, ref} from "vue";

const {t, tm} = Translates();
// Inject
const data = inject('data')
// Data
import Terms from "../terms"
const {bloodTypes, genders, yesNoQuestions} = Terms()

onMounted(() => {
  form.id = data.id
  form.code = data.code
  form.name = data.name
  form.sex = data.sex
  form.is_married = data.is_married
  form.contact_info = data.contact_info
  form.children_count = data.children_count
  form.birthday = data.birthday
  form.blood_type = data.blood_type
  form.contact_info = data.contact_info ? {
    personal: {
      phone: data.contact_info.personal.phone,
      email: data.contact_info.personal.email
    },
    work: {
      phone: data.contact_info.work.phone,
      email: data.contact_info.work.email,
    },
    emergencyContacts: data.contact_info.emergencyContacts
  } : {
    personal: {
      phone: '',
      email: ''
    },
    work: {
      phone: '',
      email: ''
    },
    emergencyContacts: []
  }

})
// Form
const form = useForm({
  id: null,
  code: "",
  name: "",
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
  blood_type: '',
})
const emergencyContactForm = ref({
  name: '',
  relationship: '',
  data: ''
})
const showEmergencyContactForm = ref(false)

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, numeric, helpers} from "@vuelidate/validators"

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
</script>

<template>
  <div class="bg-slate-600 p-4 my-8 rounded-md">

    <Form layout="basic" :grid-size="12">
      <!--Personal Info-->
      <div class="flex justify-between col-span-12 pb-4 border-b border-slate-500 items-center">
        <h2 v-text="tm('term.personalInfo')" class="font-bold text-xl"></h2>
        <simple-button :label="t('action.update')"/>
      </div>
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
          class="col-span-12 font-bold -mb-6 pb-2 border-b border-slate-500"></h3>

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
    </Form>

  </div>
</template>