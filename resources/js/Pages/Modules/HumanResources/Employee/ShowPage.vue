<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";

const selectedTab = ref(PersonalInfo);

// Pages
import PersonalInfo from './Pages/PersonalInfo.vue'
import EmploymentInfo from './Pages/EmploymentInfo.vue'
import TimeOff from './Pages/TimeOff.vue'
import CareerPathing from './Pages/CareerPathing.vue'
import Debt from './Pages/Debt.vue'
import Education from './Pages/Education.vue'


// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Avatar from "@/Components/Avatar/Avatar.vue";

// Props
const props = defineProps({
  data: Object
})

// Provide Data
provide('data', props.data);

// Multi-lang
import Translates from "./translates"
import {provide, ref} from "vue";

const {t, tm} = Translates();

/*Tabs*/
const tabs = [
  {
    id: 'personalInfo',
    label: tm('term.personalInfo'),
    page: PersonalInfo
  },
  {
    id: 'employmentInfo',
    label: tm('term.employmentInfo'),
    page: EmploymentInfo
  },
  {
    id: 'careerPathing',
    label: t('term.careerPathing'),
    page: CareerPathing
  },
  {
    id: 'timeOff',
    label: t('term.timeOff'),
    page: TimeOff
  },
  {
    id: 'debt',
    label: t('term.debt'),
    page: Debt
  },
  {
    id: 'education',
    label: t('term.education'),
    page: Education
  }
]

const handleDelete = () => {
  Inertia.delete(route('employee.destroy', props.data.id))
}
</script>

<template>
  <app-layout :title="data.name">

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
        <div v-if="data['account']"  class="-ml-2">
          <avatar :src="data.account.profile_photo_url" size="lg"/>
        </div>
        <div class="flex flex-col justify-center">
          <!--Employee Name-->
          <span v-text="data.employeeName" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
          <!--Department-->
          <Link v-if="data['department']">
            <span v-text="data.department.name"></span>
          </Link>
        </div>
      </div>
    </template>

    <div>
      <!--Tabs-->
      <div class="flex">
        <template v-for="i in tabs">
          <div @click="selectedTab = i.page"
               class="flex justify-center items-center border border-r-0 first:rounded-l-md bg-slate-700 hover:bg-rose-700/10 hover:border-rose-400 px-4 py-2 whitespace-nowrap transition cursor-pointer">
            <span v-text="i.label"></span>
          </div>
        </template>
        <div class="flex w-full border rounded-r-md"></div>
      </div>

      <!--Content-->
      <div>
        <component :is="selectedTab"/>
      </div>
    </div>


  </app-layout>
</template>