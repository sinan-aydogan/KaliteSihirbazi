<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link, router} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import SelectInput from "@/Components/Form/SelectInput.vue";

// Props
const props = defineProps({
  measurementDevice: Object,
})

// Multi-lang
import Translates from "./translates"
import {ref} from "vue";

const {t, tm} = Translates();

const selectedTab = ref(route().current());
const changePage = ()=>{
  router.visit(route(selectedTab.value, props.measurementDevice.id));
}

/*Tabs*/
const tabs = [
  {
    id: 'deviceInfo',
    label: tm('term.deviceInfo'),
    route: 'measurement-device-info.index',
  },
  {
    id: 'calibrationTasks',
    label: tm('term.calibrationTasks'),
    route: 'measurement-device-calibrations.index',
  },
  {
    id: 'deviceActions',
    label: tm('term.deviceActions'),
    route: 'measurement-device-actions.index',
  },
]

const handleDelete = () => {
  router.delete(route('measurement-device.destroy', props.measurementDevice.id))
}
</script>

<template>

  <app-layout :title="measurementDevice.code + ' ' + measurementDevice.type.name">
    <template #actionArea>
      <simple-button @click="handleDelete" color="red">
        <font-awesome-icon icon="trash-can" class="mr-2"/>
        <span v-text="tm('action.delete')"/>
      </simple-button>

      <simple-button type="route" :link="route('measurement-device.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
        <span v-text="tm('action.goBack')"/>
      </simple-button>
    </template>

    <template #header>
      <div class="flex flex-col">
        <!--Code-->
        <span v-text="measurementDevice.code" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
        <!--Type-->
        <span v-text="measurementDevice.type.name" class="text-xs uppercase"/>
      </div>
    </template>

    <div>
      <!--Tabs-->
      <div class="hidden md:flex select-none pb-3 -mb-3 scrollbar-thin scrollbar-thumb-rose-500">
        <template v-for="i in tabs">
          <Link :href="route(i.route, measurementDevice.id)"
               class="flex justify-center items-center text-sm font-medium mr-0.5 first:rounded-l-md last:rounded-r-md  px-4 py-2 whitespace-nowrap transition cursor-pointer"
                :class="{
                  'bg-rose-500/75 hover:bg-rose-800' : route().current() === i.route,
                  'bg-slate-700 hover:bg-rose-500/50' : route().current() !== i.route
                }"
          >
            <span v-text="i.label"></span>
          </Link>
        </template>
      </div>

      <!--Select Navigation-->
      <div class="block md:hidden">
        <SelectInput v-model="selectedTab" @changed="changePage" :options="tabs" option-key="route"></SelectInput>
      </div>
      <!--Content-->
      <div class="my-6">
        <slot></slot>
      </div>
    </div>


  </app-layout>
</template>
