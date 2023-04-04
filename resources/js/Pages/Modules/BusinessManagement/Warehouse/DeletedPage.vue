<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";

// Components
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Avatar from "@/Components/Avatar/Avatar.vue"

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
  warehouseTypes: {
    type: Array,
    default: []
  },
  employees: {
    type: Array,
    default: []
  },
})

/*Multi-lang*/
import Translates from "./translates"
const {t,tm} = Translates();

/*Table*/
const tableHeaders = [
  {
    id: 'code',
    label: tm('term.code'),
    width: 'w-32'
  },
  {
    id: 'name',
    label: tm('term.name')
  },
  {
    id: "warehouse_type_id",
    label: tm('term.type')
  },
  {
    id: "department_id",
    label: tm('term.department')
  },
  {
    id: "supervisor_id",
    label: tm('term.supervisor')
  }
]

/*Deleted Time*/
import { useTimeAgo } from '@vueuse/core'
const timeAgo = (time)=>{
  return useTimeAgo(time).value
}

/*Delete*/
const handleDelete = (id) => {
  router.delete(route("warehouse.destroy", id), {
    preserveState: true,
  });
}

</script>

<template>
  <app-layout :title="tm('title.deletedPage.title')" :sub-title="tm('title.deletedPage.subTitle')">
    <template #actionArea>
      <simple-button type="route" :link="route('warehouse.index')" color="blue">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
        <span v-text="tm('action.returnToList')" />
      </simple-button>
    </template>
    <Table
        :data="tableData"
        :headers="tableHeaders"
        @delete="router.delete(route('warehouse.permanent-delete', $event.id))"
        @restore="router.visit(route('warehouse.restore', $event.id))"
        restore-action
        delete-action
    >
      <template #manager="{props}">
        <div v-if="props.manager" class="flex space-x-2 items-center">
          <avatar :src="props.manager.has_account ? props.manager.account.profile_photo_url : ''"/>
          <span v-text="props.manager.employeeName"/>
        </div>
      </template>

      <!--Deleted At-->
      <template #deleted_at="{props}">
        {{timeAgo(props.deleted_at)}}
      </template>
    </Table>
  </app-layout>
</template>
