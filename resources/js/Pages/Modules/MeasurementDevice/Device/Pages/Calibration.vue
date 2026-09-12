<script setup>
import {computed, ref, watch} from "vue";
import {useForm, router} from "@inertiajs/vue3";
import ShowPage from "@/Pages/Modules/MeasurementDevice/Device/ShowPage.vue";
import EmptySource from "@/Components/Content/EmptySource.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue"
import Modal from "@/Components/Modal/Modal.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import FileInput from "@/Components/Form/FileInput.vue"
import relativeTime from "dayjs/plugin/relativeTime";

// Multi-lang
import Translates from "../translates"
import dayjs from "dayjs";
import {useFormat} from "@/Stores/useFormat.js";
// Validation
import {useVuelidate} from "@vuelidate/core"
import {helpers, required} from "@vuelidate/validators"

const {t, tm} = Translates();
const format = useFormat();

const props = defineProps({
  measurementDevice: Object,
  calibrationTasks: Array,
  calibrationFirms: Array,
  referenceDevices: {
    type: Array,
    default: () => []
  },
  calibrationTechnicians: {
    type: Array,
    default: () => []
  },
})

const headers = [
  {
    id: "planned_date",
    label: t('term.plannedDate'),
  },
  {
    id: "accomplished_date",
    label: t('term.accomplishedDate'),
  },
  {
    id: "source",
    label: t('term.calibrationFirm')
  },
  {
    id: 'status',
    label: tm('term.status'),
    align: 'center'
  },
  {
    id: 'result',
    label: tm('term.result'),
    align: 'center'
  },
  {
    id: 'certificate',
    label: tm('term.certificate'),
    align: 'center',
    filterable: false,
  },
  {
    id: 'report',
    label: tm('term.report'),
    align: 'center',
    filterable: false,
  }
]

const resultOptions = [
  {id: 'passed', label: tm('term.resultValue.passed')},
  {id: 'failed', label: tm('term.resultValue.failed')},
]

const typeOptions = [
  {id: 'external', label: tm('term.typeValue.external')},
  {id: 'internal', label: tm('term.typeValue.internal')},
]

const technicianOptions = computed(() => props.calibrationTechnicians
    .filter(technician => technician.measurement_device_types.some(t => t.id === props.measurementDevice.type.id))
    .map(technician => ({id: technician.id, label: technician.user.name})))

const showTaskCreateModal = ref(false);
const formType = ref('create');

const period = ref('');
const form = useForm({
  id: null,
  planned_date: '',
  accomplished_date: '',
  measurement_device_id: props.measurementDevice.id,
  type: 'external',
  calibration_firm_id: null,
  reference_measurement_device_id: null,
  performed_by_id: null,
  price: '',
  currency: '',
  status: false,
  result: null,
  report_number: '',
  report_notes: '',
  next_calibration_date: '',
  certificate: null,
  measurement_points: [],
})

const rules = ref({
  planned_date: {required: helpers.withMessage(t('message.validation.required'), required)},
  calibration_firm_id: {
    required: helpers.withMessage(t('message.validation.required'), (value) => form.type !== 'external' || !!value),
  },
  reference_measurement_device_id: {
    required: helpers.withMessage(t('message.validation.required'), (value) => form.type !== 'internal' || !!value),
  },
  performed_by_id: {
    required: helpers.withMessage(t('message.validation.required'), (value) => form.type !== 'internal' || !!value),
  },
  next_calibration_date: {},
})
const v$ = useVuelidate(rules, form)

watch(() => form.status, (status) => {
  if (!status) {
    form.accomplished_date = '';
    form.result = null;
    form.report_number = '';
    form.report_notes = '';
    form.next_calibration_date = '';
    form.measurement_points = [];
  }
})

watch(() => form.type, (type) => {
  if (type === 'external') {
    form.reference_measurement_device_id = null;
    form.performed_by_id = null;
  } else {
    form.calibration_firm_id = null;
  }
})

const addMeasurementPoint = () => {
  form.measurement_points.push({unit: '', nominal_value: '', measured_value: '', tolerance: ''});
}

const removeMeasurementPoint = (index) => {
  form.measurement_points.splice(index, 1);
}

const pointDeviation = (point) => {
  if (point.nominal_value === '' || point.measured_value === '') return null;
  return (Number(point.measured_value) - Number(point.nominal_value)).toFixed(3);
}

const pointWithinTolerance = (point) => {
  const deviation = pointDeviation(point);
  if (deviation === null || point.tolerance === '') return null;
  return Math.abs(deviation) <= Number(point.tolerance);
}

const openCreate = () => {
  form.reset();
  v$.value.$reset();
  formType.value = 'create';
  showTaskCreateModal.value = true;
}

const handleSubmit = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  if (formType.value === 'create') {
    form.post(route('measurement-device-calibration.store'), {
      onSuccess: () => {
        form.reset();
        showTaskCreateModal.value = false;
        v$.value.$reset();
      }
    })
  } else {
    form.put(route('measurement-device-calibration.update', {id: form.id}), {
      onSuccess: () => {
        form.reset();
        showTaskCreateModal.value = false;
        v$.value.$reset();
      }
    })
  }
}

const getRowInfo = (row) => {
  form.id = row.id;
  form.planned_date = dayjs(row.planned_date).format('YYYY-MM-DD');
  form.accomplished_date = row.accomplished_date ? dayjs(row.accomplished_date).format('YYYY-MM-DD') : '';
  form.measurement_device_id = row.measurement_device_id;
  form.type = row.type;
  form.calibration_firm_id = row.calibration_firm_id;
  form.reference_measurement_device_id = row.reference_measurement_device_id;
  form.performed_by_id = row.performed_by_id;
  form.price = row.price;
  form.currency = row.currency;
  form.status = row.status;
  form.result = row.result;
  form.report_number = row.report_number ?? '';
  form.report_notes = row.report_notes ?? '';
  form.next_calibration_date = row.next_calibration_date ? dayjs(row.next_calibration_date).format('YYYY-MM-DD') : '';
  form.certificate = null;
  form.measurement_points = (row.measurement_points ?? []).map(p => ({
    unit: p.unit ?? '',
    nominal_value: p.nominal_value,
    measured_value: p.measured_value,
    tolerance: p.tolerance ?? '',
  }));
  formType.value = 'update';
  showTaskCreateModal.value = true;
}

const handleDelete = (id) => {
  router.delete(route('measurement-device-calibration.destroy', id))
}
dayjs.extend(relativeTime)
</script>
<template>
  <ShowPage :measurement-device="measurementDevice">
    <!--Current Traceability Reference-->
    <div v-if="measurementDevice.currentTraceabilityReference" class="mt-4 px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-sm inline-flex items-center gap-2">
      <font-awesome-icon icon="fa-solid fa-link"/>
      <span>{{ tm('term.currentTraceabilityReference') }}: <strong>{{ measurementDevice.currentTraceabilityReference.code }}</strong></span>
    </div>

    <div v-if="calibrationTasks.length>0" class="mt-6"
    >
      <Table
          :data="calibrationTasks"
          :headers="headers"
          @delete="handleDelete($event.id)"
          @edit="getRowInfo"
          edit-action
          delete-action
      >
        <template #actionArea>
          <SimpleButton @click="openCreate" :label="tm('action.createCalibrationTask')"/>
        </template>

        <template #planned_date="{props}">
          {{ format.date(props.planned_date) }} ({{ dayjs(props.planned_date).from(Date.now()) }})
        </template>

        <template #accomplished_date="{props}">
          {{ format.date(props.accomplished_date) }}
        </template>

        <template #source="{props}">
          <span v-if="props.type === 'internal'" class="text-xs">
            <span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 mr-1">{{ tm('term.typeValue.internal') }}</span>
            {{ props.reference_device?.code }}
          </span>
          <span v-else>{{ props.firm?.name }}</span>
        </template>

        <!--Status-->
        <template #status="{props}">
          <div class="flex space-x-2 items-center px-2 py-1 rounded-md" :class="{
            'bg-emerald-500/50' : props.status,
            'bg-orange-500/50' : !props.status
          }">
            <font-awesome-icon :icon="`fa-solid fa-${props.status ? 'circle-check' : 'hourglass-half' }`"/>
            <span v-text="tm(props.status ? 'term.accomplished' : 'term.active')"/>
          </div>
        </template>

        <!--Result-->
        <template #result="{props}">
          <span
              v-if="props.result"
              class="px-2 py-0.5 rounded text-xs"
              :class="props.result === 'passed' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'"
          >
            {{ tm(`term.resultValue.${props.result}`) }}
          </span>
          <span v-else>-</span>
        </template>

        <!--Certificate-->
        <template #certificate="{props}">
          <a
              v-if="props.certificate_url"
              :href="props.certificate_url"
              target="_blank"
              class="text-sky-600 hover:scale-110 transition inline-block"
          >
            <font-awesome-icon icon="fa-solid fa-file-arrow-down"/>
          </a>
          <span v-else>-</span>
        </template>

        <!--Report-->
        <template #report="{props}">
          <a
              v-if="props.status"
              :href="route('measurement-device-calibration.report', props.id)"
              target="_blank"
              class="text-sky-600 hover:scale-110 transition inline-block"
          >
            <font-awesome-icon icon="fa-solid fa-file-lines"/>
          </a>
          <span v-else>-</span>
        </template>
      </Table>
    </div>
    <!--Empty Message-->
    <EmptySource
        v-else
        :message="tm('message.feedback.emptyCalibrationTasksList')"
        :add-new-text="tm('action.createCalibrationTask')"
        class="mt-6"
        :add-new-callback="openCreate"
    ></EmptySource>

    <!--Calibration Task Create/Update Form-->
    <Modal
        v-model="showTaskCreateModal"
        :header="formType === 'create' ? tm('title.createCalibrationModal.title') : tm('title.updateCalibrationModal.title')"
        :sub-header="formType === 'create' ? tm('title.createCalibrationModal.subTitle') : tm('title.updateCalibrationModal.subTitle')"
        closeable
        close-button
    >
      <Form full-size>
        <FormSection bg-less grid>

          <!--Planned Date-->
          <InputGroup class="col-span-12" label-for="planned_date" :label="t('term.plannedDate')"
                      :errors="v$.planned_date.$errors">
            <TextInput v-model="form.planned_date" input-type="date"/>
          </InputGroup>

          <!--Calibration Type-->
          <InputGroup class="col-span-12" label-for="type" :label="tm('term.calibrationType')">
            <SelectInput v-model="form.type" :options="typeOptions"/>
          </InputGroup>

          <!--Calibration Firm (External)-->
          <InputGroup v-if="form.type === 'external'" class="col-span-12" label-for="calibration_firm_id" :label="t('term.calibrationFirm')"
                      :errors="v$.calibration_firm_id.$errors">
            <SelectInput
                v-model="form.calibration_firm_id"
                :options="calibrationFirms"
                option-label="name"
                option-key="id"
            />
          </InputGroup>

          <template v-else>
            <!--Reference Device (Internal)-->
            <InputGroup class="col-span-6" label-for="reference_measurement_device_id" :label="tm('term.referenceDevice')"
                        :errors="v$.reference_measurement_device_id.$errors">
              <SelectInput
                  v-model="form.reference_measurement_device_id"
                  :options="referenceDevices"
                  option-label="code"
                  option-key="id"
              />
            </InputGroup>

            <!--Performed By (Internal)-->
            <InputGroup class="col-span-6" label-for="performed_by_id" :label="tm('term.performedBy')"
                        :errors="v$.performed_by_id.$errors">
              <SelectInput v-model="form.performed_by_id" :options="technicianOptions"/>
            </InputGroup>
          </template>

          <!--Price-->
          <InputGroup class="col-span-6" label-for="price" :label="t('term.calibrationFee')">
            <TextInput v-model="form.price" input-type="number"/>
          </InputGroup>

          <!--Currency-->
          <InputGroup class="col-span-6" label-for="currency" :label="t('term.currency')">
            <TextInput v-model="form.currency"/>
          </InputGroup>

          <!--Accomplished?-->
          <InputGroup class="col-span-6" label-for="status" :label="tm('term.isAccomplished')">
            <SwitchInput v-model="form.status"/>
          </InputGroup>

          <!--Accomplished Date-->
          <InputGroup v-if="form.status" class="col-span-6" label-for="accomplished_date" :label="t('term.accomplishedDate')">
            <TextInput v-model="form.accomplished_date" input-type="date"/>
          </InputGroup>

          <template v-if="form.status">
            <!--Result-->
            <InputGroup class="col-span-6" label-for="result" :label="tm('term.result')">
              <SelectInput v-model="form.result" :options="resultOptions"/>
            </InputGroup>

            <!--Report Number-->
            <InputGroup class="col-span-6" label-for="report_number" :label="tm('term.reportNumber')">
              <TextInput v-model="form.report_number"/>
            </InputGroup>

            <!--Next Calibration Date-->
            <InputGroup class="col-span-6" label-for="next_calibration_date" :label="tm('term.nextCalibrationDate')"
                        :errors="v$.next_calibration_date.$errors">
              <TextInput v-model="form.next_calibration_date" input-type="date"/>
            </InputGroup>

            <!--Certificate-->
            <InputGroup class="col-span-6" label-for="certificate" :label="tm('term.certificate')">
              <FileInput accept=".pdf,.jpg,.jpeg,.png" @change="form.certificate = $event ? $event[0] : null"/>
            </InputGroup>

            <!--Report Notes-->
            <InputGroup class="col-span-12" label-for="report_notes" :label="tm('term.reportNotes')">
              <TextAreaInput v-model="form.report_notes"/>
            </InputGroup>

            <!--Measurement Points-->
            <div class="col-span-12">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium">{{ tm('term.measurementPoints') }}</span>
                <SimpleButton size="slim" color="blue" @click="addMeasurementPoint">
                  <font-awesome-icon icon="plus" class="mr-1"/>
                  <span v-text="tm('action.addMeasurementPoint')"/>
                </SimpleButton>
              </div>

              <div v-if="form.measurement_points.length === 0" class="text-xs text-slate-400">
                {{ tm('message.feedback.emptyMeasurementPoints') }}
              </div>

              <div v-for="(point, index) in form.measurement_points" :key="index"
                   class="grid grid-cols-12 gap-2 items-center mb-2 p-2 rounded-md bg-slate-50 dark:bg-slate-800/50">
                <div class="col-span-3">
                  <TextInput v-model="point.nominal_value" input-type="number" :placeholder="tm('term.nominalValue')"/>
                </div>
                <div class="col-span-3">
                  <TextInput v-model="point.measured_value" input-type="number" :placeholder="tm('term.measuredValue')"/>
                </div>
                <div class="col-span-2">
                  <TextInput v-model="point.tolerance" input-type="number" :placeholder="tm('term.tolerance')"/>
                </div>
                <div class="col-span-2">
                  <TextInput v-model="point.unit" :placeholder="tm('term.unit')"/>
                </div>
                <div class="col-span-1 text-center text-xs" :class="{
                  'text-emerald-600': pointWithinTolerance(point) === true,
                  'text-rose-600': pointWithinTolerance(point) === false,
                }">
                  {{ pointDeviation(point) ?? '-' }}
                </div>
                <div class="col-span-1 text-center">
                  <font-awesome-icon icon="trash-can" class="cursor-pointer text-rose-600" @click="removeMeasurementPoint(index)"/>
                </div>
              </div>
            </div>

            <!--Decommission nudge-->
            <div v-if="form.result === 'failed'" class="col-span-12 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 p-3 text-sm">
              {{ tm('term.failedResultNudge') }}
            </div>
          </template>
        </FormSection>
      </Form>
      <template #footer>
        <SimpleButton :label="t('action.cancel')" color="neutral" @click="showTaskCreateModal=false"/>
        <SimpleButton
            :label="formType === 'create' ? tm('action.createTask') : tm('action.updateTask')"
            color="green"
            @click="handleSubmit"
            :loading="form.processing"
        />
      </template>
    </Modal>
  </ShowPage>
</template>
