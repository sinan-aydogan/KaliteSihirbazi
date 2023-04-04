<script setup>
//Components
import {ref, watch} from "vue";
import {useForm} from "@inertiajs/vue3"
import ShowPage from "@/Pages/Modules/MeasurementDevice/Device/ShowPage.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Form from "@/Components/Form/Form.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates();

const props = defineProps({
  measurementDevice: Object,
  departments: {
    type: Array,
    default: []
  },
  measurementDeviceTypes: {
    type: Array,
    default: []
  },
  employees: {
    type: Array,
    default: []
  }
})

const form = useForm({
  id: props.measurementDevice.id,
  code: props.measurementDevice.code,
  brand: props.measurementDevice.brand,
  model: props.measurementDevice.model,
  serial_no: props.measurementDevice.serial_no,
  properties: props.measurementDevice.properties,
  purchase_date: props.measurementDevice.purchase_date,
  purchase_price: props.measurementDevice.purchase_price,
  purchase_price_unit: props.measurementDevice.purchase_price_unit,
  device_supervisor_id: props.measurementDevice.device_supervisor_id,
  calibration_supervisor_id: props.measurementDevice.calibration_supervisor_id,
  department_id: props.measurementDevice.department_id,
  measurement_device_type_id: props.measurementDevice.measurement_device_type_id,
})

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"
const rules = ref({
  code: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
  },
  device_supervisor_id: {required: helpers.withMessage(t('message.validation.required'), required)},
  calibration_supervisor_id: {required: helpers.withMessage(t('message.validation.required'), required)},
  department_id: {required: helpers.withMessage(t('message.validation.required'), required)},
  measurement_device_type_id: {required: helpers.withMessage(t('message.validation.required'), required)},
})

const v$ = useVuelidate(rules, form)

/*Watch Changes in the form*/
const hasChanges = ref(false);
watch(() => form, () => {
  let fields = [
    'id',
    'code',
    'brand',
    'model',
    'serial_no',
    'properties',
    'purchase_date',
    'purchase_price',
    'purchase_price_unit',
    'device_supervisor_id',
    'calibration_supervisor_id',
    'department_id',
    'measurement_device_type_id'
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
    hasChanges.value = check(form[fields[i]], props.measurementDevice[fields[i]])
    if (check(form[fields[i]], props.measurementDevice[fields[i]])) break;
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
    route: 'measurement-device-info.index',
  }))
      .put(route('measurement-device.update', form.id), {
        onSuccess: () => {
          v$.value.$reset();
        }
      })
}
</script>

<template>
  <ShowPage :measurement-device="measurementDevice">
    <Form full-size>
      <!--Device Info-->
      <FormSection :title="tm('term.deviceInfo')" grid>
        <template #aside>
          <SimpleButton
              :disabled="!hasChanges"
              :label="t('action.update')"
              color="green"
              @handleClick="handleUpdate"
              :loading="form.processing"/>
        </template>
        <!-- Code -->
        <input-group class="col-span-12 sm:col-span-4" labelFor="code" :label="tm('term.code')"
                     :errors="v$.code.$errors">
          <text-input v-model="form.code"/>
        </input-group>

        <!-- Measurement Device Type -->
        <input-group class="col-span-12 sm:col-span-8" labelFor="measurement_device_type_id" :label="tm('term.type')" :errors="v$.measurement_device_type_id.$errors">
          <select-input v-model="form.measurement_device_type_id" :options="measurementDeviceTypes" option-label="name"/>
        </input-group>

        <!-- Brand -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="brand" :label="tm('term.brand')">
          <text-input v-model="form.brand"/>
        </input-group>

        <!-- Model -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="model" :label="tm('term.model')">
          <text-input v-model="form.model"/>
        </input-group>

        <!-- Serial No -->
        <input-group class="col-span-12" labelFor="serial_no" :label="tm('term.serialNo')">
          <text-input v-model="form.serial_no"/>
        </input-group>

        <!-- Properties -->
        <!--<input-group class="col-span-12" labelFor="serial_no" :label="tm('term.properties')">
          <text-input v-model="form.serial_no"/>
        </input-group>-->

        <!-- Purchase Date -->
        <input-group class="col-span-12 sm:col-span-4" labelFor="purchase_date" :label="tm('term.purchasingDate')">
          <text-input v-model="form.purchase_date" inputType="date"/>
        </input-group>

        <!-- Purchase Price -->
        <input-group class="col-span-12 sm:col-span-4" labelFor="purchase_date" :label="tm('term.purchasingPrice')">
          <text-input v-model="form.purchase_date" inputType="number"/>
        </input-group>

        <!-- Purchase Price Unit-->
        <input-group class="col-span-12 sm:col-span-4" labelFor="purchase_price_unit" :label="tm('term.purchasingPriceUnit')">
          <text-input v-model="form.purchase_price_unit"/>
        </input-group>
      </FormSection>

      <!--Management Info-->
      <FormSection :title="tm('term.managementInfo')" grid>
        <!-- Department -->
        <input-group class="col-span-12" labelFor="department_id" :label="tm('term.department')"
                     :errors="v$.department_id.$errors">
          <select-input v-model="form.department_id" :options="departments" optionLabel="name"/>
        </input-group>

        <!-- Device Supervisor -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="measurement_device_type_id" :label="tm('term.deviceSupervisor')" :errors="v$.device_supervisor_id.$errors">
          <select-input v-model="form.device_supervisor_id" :options="employees" option-label="employeeName"/>
        </input-group>

        <!-- Calibration Supervisor -->
        <input-group class="col-span-12 sm:col-span-6" labelFor="measurement_device_type_id" :label="tm('term.calibrationSupervisor')" :errors="v$.calibration_supervisor_id.$errors">
          <select-input v-model="form.calibration_supervisor_id" :options="employees" option-label="employeeName" />
        </input-group>



        <!--Filler-->
        <div class="hidden sm:block col-span-6"></div>
      </FormSection>
    </Form>
  </ShowPage>
</template>
