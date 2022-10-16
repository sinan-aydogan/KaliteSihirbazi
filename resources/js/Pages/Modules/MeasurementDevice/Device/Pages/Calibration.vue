<script setup>
import {ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useForm} from "@inertiajs/inertia-vue3";
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
import relativeTime from "dayjs/plugin/relativeTime";

// Multi-lang
import Translates from "../translates"
import dayjs from "dayjs";
// Validation
import {useVuelidate} from "@vuelidate/core"
import {helpers, required} from "@vuelidate/validators"

const {t, tm} = Translates();

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
  }
]

const showTaskCreateModal = ref(false);

const period = ref('');
const form = useForm({
  planned_date: '',
  accomplished_date: '',
  measurement_device_id: props.measurementDevice.id,
  calibration_firm_id: null,
  price: '',
  currency: '',
  status: false
})

const rules = ref({
  planned_date: {required: helpers.withMessage(t('message.validation.required'), required)},
  calibration_firm_id: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const v$ = useVuelidate(rules, form)

const handleSubmit = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  form.post(route('measurement-device-calibration.store'), {
    onSuccess: () => {
      form.reset();
      showTaskCreateModal.value = false;
      v$.value.$reset();
    }
  })
}

const handleDelete = (id) => {
  Inertia.delete(route('measurement-device-calibration.destroy', id))
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
          delete-action
      >
        <template #actionArea>
          <SimpleButton @click="showTaskCreateModal = true" :label="tm('action.createCalibrationTask')"/>
        </template>

        <template #planned_date="{props}">
          {{ dayjs(props.planned_date).format('DD-MMMM-YY') }} ({{ dayjs(props.planned_date).from(Date.now()) }})
        </template>

        <template #accomplished_date="{props}">
          {{ dayjs(props.accomplished_date).format('DD-MMMM-YY') }}
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
      </Table>
    </div>
    <!--Empty Message-->
    <EmptySource
        v-else
        :message="tm('message.feedback.emptyCalibrationTasksList')"
        :add-new-text="tm('action.createCalibrationTask')"
        class="mt-6"
        :add-new-callback="()=>{showTaskCreateModal = true}"
    ></EmptySource>

    <!--Calibration Task Create Form-->
    <Modal
        v-model="showTaskCreateModal"
        :header="tm('title.createCalibrationModal.title')"
        :sub-header="tm('title.createCalibrationModal.subTitle')"
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
        </FormSection>
      </Form>
      <template #footer>
        <SimpleButton :label="t('action.cancel')" color="neutral" @click="showTaskCreateModal=false"/>
        <SimpleButton :label="tm('action.createTask')" color="green" @click="handleSubmit" :loading="form.processing"/>
      </template>
    </Modal>
  </ShowPage>
</template>