<script setup>
import {ref, watch} from "vue";
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
    id: "calibrationFirm",
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
  }
]

const resultOptions = [
  {id: 'passed', label: tm('term.resultValue.passed')},
  {id: 'failed', label: tm('term.resultValue.failed')},
]

const showTaskCreateModal = ref(false);
const formType = ref('create');

const period = ref('');
const form = useForm({
  id: null,
  planned_date: '',
  accomplished_date: '',
  measurement_device_id: props.measurementDevice.id,
  calibration_firm_id: null,
  price: '',
  currency: '',
  status: false,
  result: null,
  report_number: '',
  report_notes: '',
  next_calibration_date: '',
  certificate: null,
})

const rules = ref({
  planned_date: {required: helpers.withMessage(t('message.validation.required'), required)},
  calibration_firm_id: {required: helpers.withMessage(t('message.validation.required'), required)},
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
  }
})

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
  form.calibration_firm_id = row.calibration_firm_id;
  form.price = row.price;
  form.currency = row.currency;
  form.status = row.status;
  form.result = row.result;
  form.report_number = row.report_number ?? '';
  form.report_notes = row.report_notes ?? '';
  form.next_calibration_date = row.next_calibration_date ? dayjs(row.next_calibration_date).format('YYYY-MM-DD') : '';
  form.certificate = null;
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

        <template #calibrationFirm="{props}">
          {{ props.firm.name }}
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

          <!--Calibration Firm-->
          <InputGroup class="col-span-12" label-for="calibration_firm_id" :label="t('term.calibrationFirm')"
                      :errors="v$.calibration_firm_id.$errors">
            <SelectInput
                v-model="form.calibration_firm_id"
                :options="calibrationFirms"
                option-label="name"
                option-key="id"
            />
          </InputGroup>

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
