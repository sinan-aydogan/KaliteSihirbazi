<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Alert from "@/Components/Alert/Alert.vue";

// Props
const props = defineProps({
  data: Object
})

// Multi-lang
import Translates from "./translates"
const {t,tm} = Translates();

const handleDelete = ()=>{
  Inertia.delete(route('warehouse.destroy', props.data.id))
}
</script>

<template>
<app-layout :title="data.name">

  <template #actionArea>
    <simple-button @click="handleDelete" color="red">
      <font-awesome-icon icon="trash-can" class="mr-2" />
      <span v-text="tm('action.delete')" />
    </simple-button>

    <simple-button type="route" :link="route('warehouse.index')">
      <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
      <span v-text="tm('action.goBack')" />
    </simple-button>
  </template>

  <template #header>
    <!--Department Name-->
    <div class="flex items-center space-x-4">
      <!--Name-->
      <span v-text="data.name" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
      <!--Code-->
      <div class="flex space-x-1 items-center border px-2 py-1 rounded-lg">
        <font-awesome-icon icon="fa-solid fa-fingerprint"/>
        <span v-text="data.code" class="text-sm uppercase"/>
      </div>
    </div>
    <div class="flex space-x-2 text-xs items-center mt-1">
      <!--Manager-->
      <div v-if="data['supervisor']" class="flex items-center space-x-1">
        <font-awesome-icon icon="fa-solid fa-user-shield" :class="`before:content-['${tm('term.manager')}']`"/>
        <!--Manager Name-->
        <Link :href="route('employee.show', data.supervisor.id)" v-text="data.supervisor.employeeName"/>
      </div>
      <!--Type-->
      <div v-if="data['type']" class="flex items-center space-x-1">
        <font-awesome-icon icon="fa-solid fa-trowel-bricks" :class="`before:content-['${tm('term.manager')}']`"/>
        <!--Type Name-->
        <span v-text="data.type.name"></span>
      </div>
    </div>
  </template>

  <div class="grid grid-cols-12">

    <!--Employee List-->
    <div v-if="data['items']">
      Employee List
    </div>
    <div v-else class="col-span-12 space-y-2">
      <!--Alert-->
      <Alert>
        {{tm('message.feedback.noAttachedItems')}}
      </Alert>
      <!--Add Employee-->
      <simple-button full-size color="green">
        <font-awesome-icon icon="fa-solid fa-plus"/>
        <span v-text="tm('action.addItem')"/>
      </simple-button>
    </div>
  </div>

</app-layout>
</template>