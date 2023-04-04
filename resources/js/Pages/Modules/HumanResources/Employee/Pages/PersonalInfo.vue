<script setup>
// Components
import {ref, watch} from "vue";
import {useForm} from "@inertiajs/vue3";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import ShowPage from "@/Pages/Modules/HumanResources/Employee/ShowPage.vue"

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates();
const props = defineProps({
  employee: Object
})

// Data
import Terms from "../terms"

const {bloodTypes, genders, yesNoQuestions,} = Terms()

const form = useForm({
  id : props.employee.id,
  code : props.employee.code,
  name : props.employee.employeeName,
  sex : props.employee.sex,
  is_married : props.employee.is_married,
  children_count : props.employee.children_count,
  birthday : props.employee.birthday,
  blood_type : props.employee.blood_type,
  contact_info : cloneDeep(props.employee.contact_info ? {
    work: {
      email: props.employee.contact_info.work.email,
      phone: props.employee.contact_info.work.phone,
    },
    personal: {
      email: props.employee.contact_info.personal.email,
      phone: props.employee.contact_info.personal.phone
    },
    emergencyContacts: props.employee.contact_info.emergencyContacts
  } : {
    work: {
      email: '',
      phone: ''
    },
    personal: {
      email: '',
      phone: ''
    },
    emergencyContacts: []
  })
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
import {cloneDeep} from "lodash";

const rules = ref({
  code: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
  },
  name: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
  },
  birthday: {required: helpers.withMessage(t('message.validation.required'), required)},
  sex: {required: helpers.withMessage(t('message.validation.required'), required)},
  is_married: {required: helpers.withMessage(t('message.validation.required'), required)},
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

/*Watch Changes in the form*/
const hasChanges = ref(false);
watch(() => form, () => {
  let fields = [
    'code',
    'name',
    'sex',
    'is_married',
    'contact_info',
    'children_count',
    'birthday',
    'blood_type',
  ]
  function check(val1, val2) {
    let status;
    if (typeof val1 === 'object') {
      status = JSON.stringify(val1) !== JSON.stringify(val2)
    } else {
      status = val1 !== val2
    }

    return status
  }

  /*Form fields check*/
  for (let i = 0; i < fields.length; i++) {
    hasChanges.value = check(form[fields[i]], props.employee[fields[i]])
    if (check(form[fields[i]], props.employee[fields[i]])) break;
  }
},{
  deep: true
})

/*Handle Update*/
const handleUpdate = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  form.transform((data) => ({
    ...data,
    route: 'employee-personal-info.index',
  }))
      .put(route('employee.update', form.id), {
        onSuccess: () => {
          v$.value.$reset();
        }
      })
}
</script>

<template>
  <ShowPage :employee="employee">

    <Form full-size>
      <FormSection grid :title="tm('term.personalInfo')">
        <template #aside>
          <SimpleButton
              :disabled="!hasChanges"
              :label="t('action.update')"
              color="green"
              @handleClick="handleUpdate"
              :loading="form.processing"/>
        </template>
        <!-- Code -->
        <input-group
            class="col-span-12 sm:col-span-4"
            labelFor="code"
            :label="tm('term.code')"
            :errors="v$.code.$errors"
        >
          <text-input v-model="form.code"/>
        </input-group>

        <!-- Name -->
        <input-group
            class="col-span-12 sm:col-span-8"
            labelFor="name"
            :label="tm('term.name')"
            :errors="v$.name.$errors"
        >
          <text-input v-model="form.name"/>
        </input-group>

        <!-- Birthday -->
        <input-group
            class="col-span-6 sm:col-span-4"
            labelFor="birthday"
            :label="tm('term.birthday')"
            :errors="v$.birthday.$errors"
        >
          <text-input v-model="form.birthday" :model-value="dayjs(form.birthday).format('YYYY-MM-DD')" inputType="date"/>
        </input-group>

        <!-- Sex -->
        <input-group
            class="col-span-6 sm:col-span-4"
            labelFor="sex"
            :label="tm('term.sex')"
            :errors="v$.sex.$errors"
        >
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
        <input-group class="col-span-6 sm:col-span-4" labelFor="blood_type" :label="tm('term.bloodType')">
          <select-input v-model="form.blood_type" :options="bloodTypes"/>
        </input-group>

        <!-- Is Married? -->
        <input-group
            class="col-span-6 sm:col-span-4"
            labelFor="is_married"
            :label="tm('term.isMarried')"
            :errors="v$.is_married.$errors"
        >
          <select-input v-model="form.is_married" :options="yesNoQuestions"/>
        </input-group>

        <!-- Children Count -->
        <input-group class="col-span-6 sm:col-span-4" labelFor="name" :label="tm('term.childrenCount')"
                     :errors="v$.children_count.$errors">
          <text-input input-type="number" v-model="form.children_count"/>
        </input-group>
      </FormSection>

      <!--Contact Info-->
      <FormSection grid :title="tm('term.contactInfo')">
        <!-- Personal Phone -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="personalPhone" :label="tm('term.personalPhone')">
          <text-input v-model="form.contact_info.personal.phone"/>
        </input-group>

        <!-- Personal Email -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="personalEmail" :label="tm('term.personalEmail')">
          <text-input v-model="form.contact_info.personal.email"/>
        </input-group>

        <!-- Work Phone -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="workPhone" :label="tm('term.workPhone')">
          <text-input v-model="form.contact_info.work.phone"/>
        </input-group>

        <!-- Work Email -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="workEmail" :label="tm('term.workEmail')">
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
                  class="flex justify-between items-center pr-4 w-full border-b last:border-b-0 border-dotted border-slate-500 py-2">
                <!--Contact Info-->
                <div class="flex flex-col sm:flex-row justify-between sm:items-center w-full pr-4">

                  <!--Contact Name-->
                  <div class="flex flex-col">
                    <div>
                      <font-awesome-icon icon="fa-solid fa-user" class="mr-2"/>
                      <span v-text="i.name" class="font-semibold"></span>
                    </div>
                    <span v-text="i.relationship" class="text-xs italic text-slate-400"></span>
                  </div>

                  <!--Contact Line-->
                  <span v-text="i.data" class="underline text-lg"></span>
                </div>

                <!--Delete Button-->
                <font-awesome-icon
                    @click="deleteEmergencyContact(index)"
                    icon="fa-solid fa-trash"
                    class="cursor-pointer"
                />
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

        <!--Emergency Contact Add Form-->
        <div v-if="showEmergencyContactForm"
             class="col-span-12 flex flex-col border border-slate-500 p-2 rounded-lg">
          <div class="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">

            <!--Name-->
            <input-group class="w-full" labelFor="emergencyContactName" :label="tm('term.emergencyContactName')">
              <text-input v-model="emergencyContactForm.name"/>
            </input-group>

            <!--Relationship Degree-->
            <input-group class="w-full" labelFor="relationshipDegree" :label="tm('term.relationshipDegree')">
              <text-input v-model="emergencyContactForm.relationship"/>
            </input-group>

            <!--Phone-->
            <input-group class="w-full" labelFor="phone" :label="tm('term.phone')">
              <text-input v-model="emergencyContactForm.data"/>
            </input-group>

            <!--Close Button-->
            <div @click="showEmergencyContactForm = false"
                 class="absolute -right-4 -top-8 sm:-top-4 flex items-center justify-center w-6 h-6 bg-rose-500 rounded cursor-pointer hover:scale-105 active:scale-95 transition-all">
              <font-awesome-icon icon="fa-solid fa-xmark" class=""/>
            </div>
          </div>

          <div class="mt-4 sm:mt-2">
            <simple-button
                @click.stop="addEmergencyContact"
                :label="t('action.add')"
                full-size size="slim"
            />
          </div>
        </div>

        <!--Show Add Form-->
        <div v-else-if="!showEmergencyContactForm && form.contact_info.emergencyContacts.length>0"
             class="col-span-12">
          <simple-button
              @click="showEmergencyContactForm = true"
              full-size size="slim"
              :label="t('action.addOtherOne')"
          />
        </div>
      </FormSection>
    </Form>
  </ShowPage>
</template>
