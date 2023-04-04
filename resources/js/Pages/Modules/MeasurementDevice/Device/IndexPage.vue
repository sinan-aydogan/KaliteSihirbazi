<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
import {useForm, Link, router} from "@inertiajs/vue3";

// Components
import Avatar from "@/Components/Avatar/Avatar.vue"
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
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
    label: tm('term.code'),
    width: 'w-32'
  },
  {
    id: 'measurement_type_id',
    label: tm('term.type'),
  },
  {
    id: 'department_id',
    label: tm('term.department'),
  },
  {
    id: 'serial_no',
    label: tm('term.code'),
  },
  {
    id: 'device_supervisor_id',
    label: tm('term.supervisor'),
  },
  {
    id: 'calibration_supervisor_id',
    label: tm('term.supervisor'),
  },
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const form = useForm({
  id: null,
  code: "",
  brand: "",
  model: null,
  serial_no: '',
  properties: null,
  purchase_date:null,
  purchase_price:null,
  purchase_price_unit:null,
  device_supervisor_id:null,
  calibration_supervisor_id:null,
  department_id:null,
  measurement_device_type_id:null,
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

/*Create*/
const handleSubmit = async () => {

  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  if (formType.value === 'create') {
    form.post(route('measurement-device.store'), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  } else {
    form.put(route('measurement-device.update', {id: form.id}), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  }
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
        @view="router.visit(route('measurement-device-info.index', $event.id))"
        @edit="getRowInfo($event.id)"
        show-action
        edit-action
    >

      <!--Type-->
      <template #measurement_type_id="{props}">
        {{ props.type ? props.type.name : '' }}
      </template>

      <!--Employee Name-->
      <template #employeeName="{props}">
        <component
            :is="props['account'] ? Link : 'div'"
            :href="props['account'] ? route('employee-personal-info.index', props.account.accountable_id) : null"
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

      <!--Device Supervisor-->
      <template #device_supervisor_id="{props}">
        {{ props.device_supervisor ? props.device_supervisor.employeeName : '' }}
      </template>

      <!--Calibration Supervisor-->
      <template #calibration_supervisor_id="{props}">
        {{ props.calibration_supervisor ? props.calibration_supervisor.employeeName : '' }}
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
        @submit="handleSubmit"
    >
      <Form full-size>
        <!--Device Info-->
        <FormSection :title="tm('term.deviceInfo')" grid>
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
      <template #footer>
        <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
        <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
      </template>
    </Modal>
  </teleport>
</template>
