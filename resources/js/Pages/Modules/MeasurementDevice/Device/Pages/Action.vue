<script setup>
import {ref} from "vue";
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
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"

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
  actions: {
    type: Array,
    default: () => []
  },
  actionTypes: {
    type: Array,
    default: () => []
  },
})

const actionTypeOptions = props.actionTypes.map(type => ({id: type.id, label: type.name}))

const headers = [
  {id: 'started_at', label: tm('term.startedAt')},
  {id: 'type', label: tm('term.actionType')},
  {id: 'resolved_at', label: tm('term.resolvedAt')},
  {id: 'description', label: tm('term.description')},
  {id: 'recorded_by', label: tm('term.recordedBy')},
]

const showModal = ref(false);
const formType = ref('create');
const form = useForm({
  id: null,
  measurement_device_id: props.measurementDevice.id,
  measurement_device_action_type_id: null,
  started_at: '',
  resolved_at: '',
  description: '',
})

const rules = ref({
  measurement_device_action_type_id: {required: helpers.withMessage(t('message.validation.required'), required)},
  started_at: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const v$ = useVuelidate(rules, form)

const openCreate = () => {
  form.reset();
  v$.value.$reset();
  formType.value = 'create';
  showModal.value = true;
}

const handleSubmit = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  if (formType.value === 'create') {
    form.post(route('measurement-device-action.store'), {
      onSuccess: () => {
        form.reset();
        showModal.value = false;
        v$.value.$reset();
      }
    })
  } else {
    form.put(route('measurement-device-action.update', {id: form.id}), {
      onSuccess: () => {
        form.reset();
        showModal.value = false;
        v$.value.$reset();
      }
    })
  }
}

const getRowInfo = (row) => {
  form.id = row.id;
  form.measurement_device_id = row.measurement_device_id;
  form.measurement_device_action_type_id = row.measurement_device_action_type_id;
  form.started_at = dayjs(row.started_at).format('YYYY-MM-DD');
  form.resolved_at = row.resolved_at ? dayjs(row.resolved_at).format('YYYY-MM-DD') : '';
  form.description = row.description ?? '';
  formType.value = 'update';
  showModal.value = true;
}

const handleDelete = (id) => {
  router.delete(route('measurement-device-action.destroy', id))
}
</script>
<template>
  <ShowPage :measurement-device="measurementDevice">
    <div v-if="actions.length > 0" class="mt-6">
      <Table
          :data="actions"
          :headers="headers"
          @delete="handleDelete($event.id)"
          @edit="getRowInfo"
          edit-action
          delete-action
      >
        <template #actionArea>
          <SimpleButton @click="openCreate" :label="t('action.createAction')"/>
        </template>

        <template #started_at="{props}">
          {{ format.date(props.started_at) }}
        </template>

        <template #type="{props}">
          <span class="px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-700">{{ props.type?.name }}</span>
        </template>

        <template #resolved_at="{props}">
          <span v-if="props.resolved_at">{{ format.date(props.resolved_at) }}</span>
          <span v-else>-</span>
        </template>

        <template #description="{props}">
          <span v-if="props.description" class="line-clamp-2">{{ props.description }}</span>
          <span v-else>-</span>
        </template>

        <template #recorded_by="{props}">
          {{ props.recorded_by?.name ?? '-' }}
        </template>
      </Table>
    </div>
    <EmptySource
        v-else
        :message="tm('message.feedback.emptyActionsList')"
        :add-new-text="t('action.createAction')"
        class="mt-6"
        :add-new-callback="openCreate"
    ></EmptySource>

    <teleport to="body">
      <Modal
          v-model="showModal"
          :header="formType === 'create' ? tm('title.createActionModal.title') : tm('title.updateActionModal.title')"
          :sub-header="formType === 'create' ? tm('title.createActionModal.subTitle') : tm('title.updateActionModal.subTitle')"
          closeable
          close-button
      >
        <Form full-size>
          <FormSection bg-less>
            <input-group class="col-span-6" labelFor="measurement_device_action_type_id" :label="tm('term.actionType')" :errors="v$.measurement_device_action_type_id.$errors">
              <select-input v-model="form.measurement_device_action_type_id" :options="actionTypeOptions"/>
            </input-group>

            <input-group class="col-span-3" labelFor="started_at" :label="tm('term.startedAt')" :errors="v$.started_at.$errors">
              <text-input v-model="form.started_at" input-type="date"/>
            </input-group>

            <input-group class="col-span-3" labelFor="resolved_at" :label="tm('term.resolvedAt')">
              <text-input v-model="form.resolved_at" input-type="date"/>
            </input-group>

            <input-group class="col-span-12" labelFor="description" :label="tm('term.description')">
              <text-area-input v-model="form.description"/>
            </input-group>
          </FormSection>
        </Form>
        <template #footer>
          <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
          <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
        </template>
      </Modal>
    </teleport>
  </ShowPage>
</template>
