<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
import { router } from '@inertiajs/vue3';

// Components
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Avatar from "@/Components/Avatar/Avatar.vue"

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
        id: 'code',
        label: tm('term.code')
    },
    {
        id: 'type',
        label: tm('term.type'),
        value: (row) => row?.vehicle_type?.name
    },
    {
        id: "brand",
        label: tm('term.brand')
    },
    {
        id: "model",
        label: tm('term.model')
    },
    {
        id: "purchase_date",
        label: tm('term.purchaseDate')
    },
    {
        id: "deleted_at",
        label: t('term.deletedAt')
    }
]
const showModal = ref(false);

/*Deleted Time*/
import { useTimeAgo } from '@vueuse/core'
const timeAgo = (time)=>{
  return useTimeAgo(time).value
}

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
</script>

<template>
  <app-layout :title="tm('title.deletedPage.title')" :sub-title="tm('title.deletedPage.subTitle')">
    <template #actionArea>
      <simple-button type="route" :link="route('vehicle.index')" color="blue">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
        <span v-text="tm('action.returnToList')" />
      </simple-button>
    </template>
    <Table
        :data="tableData"
        :headers="tableHeaders"
        @delete="router.delete(route('vehicle.permanent-delete', $event.id))"
        @restore="router.visit(route('vehicle.restore', $event.id))"
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
