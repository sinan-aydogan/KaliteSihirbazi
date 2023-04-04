<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link, router } from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Avatar from "@/Components/Avatar/Avatar.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";

// Props
const props = defineProps({
  employee: Object,
})

// Multi-lang
import Translates from "./translates"
import {ref} from "vue";

const {t, tm} = Translates();

const selectedTab = ref(route().current());
const changePage = ()=>{
  router.visit(route(selectedTab.value, props.employee.id));
}
/*Tabs*/
const tabs = [
  {
    id: 'personalInfo',
    label: tm('term.personalInfo'),
    route: 'employee-personal-info.index',
  },
  {
    id: 'employmentInfo',
    label: tm('term.employmentInfo'),
    route: 'employee-employment-info.index',
  },
  {
    id: 'careerPathing',
    label: t('term.careerPathing'),
    route: 'employee-jd-assignment.index',
  },
  {
    id: 'timeOff',
    label: t('term.timeOff'),
    route: 'employee-time-off.index',
  },
  {
    id: 'debt',
    label: t('term.debt'),
    route: 'employee-debt.index',
  },
  {
    id: 'education',
    label: t('term.education'),
    route: 'employee-education.index',
  }
]

const handleDelete = () => {
  router.delete(route('employee.destroy', props.employee.id))
}
</script>

<template>

  <app-layout :title="employee.name">
    <template #actionArea>
      <simple-button @click="handleDelete" color="red">
        <font-awesome-icon icon="trash-can" class="mr-2"/>
        <span v-text="tm('action.delete')"/>
      </simple-button>

      <simple-button type="route" :link="route('employee.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
        <span v-text="tm('action.goBack')"/>
      </simple-button>
    </template>

    <template #header>
      <div class="flex space-x-4">
        <!--Profile Photo-->
        <div v-if="employee['account']"  class="-ml-2">
          <avatar :src="employee.account.profile_photo_url" size="lg"/>
        </div>
        <div class="flex flex-col justify-center">
          <!--Employee Name-->
          <span v-text="employee.employeeName" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
          <!--Department-->
          <Link v-if="employee['department']">
            <span v-text="employee.department.name"></span>
          </Link>
        </div>
      </div>
    </template>

    <div>
      <!--Tabs-->
      <div class="hidden md:flex select-none pb-3 -mb-3 scrollbar-thin scrollbar-thumb-rose-500">
        <template v-for="i in tabs">
          <Link :href="route(i.route, employee.id)"
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
