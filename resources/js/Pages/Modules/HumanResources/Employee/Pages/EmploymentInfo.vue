<script setup>
// Components
import {useForm} from "@inertiajs/inertia-vue3";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import ShowPage from "@/Pages/Modules/HumanResources/Employee/ShowPage.vue"

// Multi-lang
import Translates from "../translates"
import {ref, watch} from "vue";
const {t, tm} = Translates();

const props = defineProps({
  employee: Object,
  departments: Array
})

// Data
import Terms from "../terms"
const {employmentTypes, statuses} = Terms()

// Form
const form = useForm({
  id: props.employee.id,
  has_account: props.employee.has_account,
  department_id: props.employee.department_id,
  employment_type: props.employee.employment_type,
  employment_date: props.employee.employment_date,
  leaving_date: props.employee.leaving_date,
  leaving_detail: props.employee.leaving_detail,
  status: props.employee.status,
})

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, helpers} from "@vuelidate/validators"
import {cloneDeep} from "lodash";

const rules = ref({
  department_id: {required: helpers.withMessage(t('message.validation.required'), required)},
  employment_type: {required: helpers.withMessage(t('message.validation.required'), required)},
  employment_date: {required: helpers.withMessage(t('message.validation.required'), required)},
  status: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const v$ = useVuelidate(rules, form)

/*Watch Changes in the form*/
const hasChanges = ref(false);
watch(() => cloneDeep(form), () => {
  let fields = [
    'has_account',
    'department_id',
    'employment_type',
    'employment_date',
    'leaving_date',
    'leaving_detail',
    'status',
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
})

/*Handle Update*/
const handleUpdate = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  form.transform((data) => ({
    ...data,
    route: 'employee-employment-info.index',
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
      <FormSection
          :title="tm('term.employmentInfo')"
      >
        <template #aside>
          <SimpleButton
              :label="t('action.update')"
              color="green"
              @handleClick="handleUpdate"
              :loading="form.processing"
              :disabled="!hasChanges"
          />
        </template>

        <!-- Department -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="department_id" :label="tm('term.department')"
                     :errors="v$.department_id.$errors">
          <select-input v-model="form.department_id" :options="departments" optionLabel="name"/>
        </input-group>

        <!-- Employment Type -->
        <input-group
            class="col-span-12 sm:col-span-6"
            labelFor="employment_type"
            :label="tm('term.employmentType')"
            :errors="v$.employment_type.$errors"
        >
          <select-input v-model="form.employment_type" :options="employmentTypes"/>
        </input-group>

        <!-- Employment Date -->
        <input-group
            class="col-span-12 sm:col-span-6"
            labelFor="employment_date"
            :label="tm('term.employmentDate')"
            :errors="v$.employment_date.$errors"
        >
          <text-input v-model="form.employment_date" :model-value="dayjs(form.employment_date).format('YYYY-MM-DD')" inputType="date"/>
        </input-group>

        <!-- Status -->
        <input-group
            class="col-span-12 sm:col-span-6"
            labelFor="status"
            :label="tm('term.status')"
            :errors="v$.status.$errors"
        >
          <select-input v-model="form.status" :options="statuses">
            <template #both="{props}">
                <span v-text="props.label" class="px-1 py-0.5 rounded text-slate-100 text-sm"
                      :class="props.style"></span>
            </template>
          </select-input>
        </input-group>

        <!-- Leaving Date -->
        <input-group v-if="form.status !== 'working'" class="col-span-12 sm:col-span-6" labelFor="leaving_date"
                     :label="tm('term.leavingDate')">
          <text-input v-model="form.leaving_date"  :model-value="dayjs(form.leaving_date).format('YYYY-MM-DD')" inputType="date"/>
        </input-group>

        <!--Filler-->
        <div class="hidden sm:block col-span-6"></div>

        <!-- Leaving Detail -->
        <input-group v-if="form.status !== 'working' && form.status !== 'retired'" class="col-span-12"
                     labelFor="leaving_detail" :label="tm('term.leavingDetail')">
          <text-area-input v-model="form.leaving_detail"/>
        </input-group>
      </FormSection>
    </Form>
  </ShowPage>
</template>