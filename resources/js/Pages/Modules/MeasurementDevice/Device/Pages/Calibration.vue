<script setup>
import {ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
import ShowPage from "@/Pages/Modules/MeasurementDevice/Device/ShowPage.vue";
import EmptySource from "@/Components/Content/EmptySource.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue"

// Multi-lang
import Translates from "../translates"
import dayjs from "dayjs";

const {t, tm} = Translates();

const props = defineProps({
  measurementDevice: Object,
  calibrationTasks: Array
})

const headers = [
  {
    id: "planned-date",
    label: t('term.plannedDate')
  },
  {
    id: "accomplished_date-date",
    label: t('term.accomplishedDate')
  },
  {
    id: 'status',
    label: tm('term.status')
  }
]

const showTaskCreateModal = ref(false);

const handleDelete = (id) => {
  Inertia.delete(route('calibration-task.destroy', id))
}
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
          <SimpleButton @click="showTaskCreateModal = true" :label="tm('action.makeAssigment')"/>
        </template>

        <template #name="{props}">
          {{ props.job_description.name }}
        </template>

        <template #assignment_date="{props}">
          {{ dayjs(props.assignment_date).format('DD-MMMM-YY') }} ({{ dayjs(props.assignment_date).from(Date.now()) }})
        </template>

        <template #appointer="{props}">
          {{ props.appointer.employeeName }}
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
  </ShowPage>
</template>