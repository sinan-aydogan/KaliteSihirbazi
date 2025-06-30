<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
import { router } from '@inertiajs/vue3';

// Components
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"

// Props
const props = defineProps({
  tableData: {
    type: Object,
    default: {}
  }
})

/*Multi-lang*/
import Translates from "./translates"
const {t,tm} = Translates();

/*Table*/
const tableHeaders = [
    {
        id: 'name',
        label: tm('term.name')
    },
    {
        id: 'start_date',
        label: tm('term.startDate'),
        value: (row) => !!row?.start_date ? new Date(row.start_date).toLocaleDateString('tr-TR') : ''
    },
    {
        id: 'end_date',
        label: tm('term.endDate'),
        value: (row) => !!row?.end_date ? new Date(row.end_date).toLocaleDateString('tr-TR') : ''
    },
    {
        id: "deleted_at",
        label: t('term.deletedAt')
    }
]

/*Deleted Time*/
import { useTimeAgo } from '@vueuse/core'
const timeAgo = (time)=>{
  return useTimeAgo(time).value
}
</script>

<template>
  <app-layout :title="tm('title.deletedPage.title')" :sub-title="tm('title.deletedPage.subTitle')">
    <template #actionArea>
      <simple-button type="route" :link="route('education-plan.index')" color="blue">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
        <span v-text="tm('action.returnToList')" />
      </simple-button>
    </template>
    <Table
        :data="tableData"
        :headers="tableHeaders"
        @delete="router.delete(route('education-plan.permanent-delete', $event.id))"
        @restore="router.visit(route('education-plan.restore', $event.id))"
        restore-action
        delete-action
    >
      <!--Deleted At-->
      <template #deleted_at="{props}">
        {{timeAgo(props.deleted_at)}}
      </template>
    </Table>
  </app-layout>
</template> 