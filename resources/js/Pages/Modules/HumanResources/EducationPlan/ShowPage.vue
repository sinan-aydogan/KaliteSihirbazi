<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router} from "@inertiajs/vue3";

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
  router.delete(route('education-plan.destroy', props.data.id))
}

// Format dates
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
</script>

<template>
<app-layout :title="data.name">

  <template #actionArea>
    <simple-button @click="handleDelete" color="red">
      <font-awesome-icon icon="trash-can" class="mr-2" />
      <span v-text="tm('action.delete')" />
    </simple-button>

    <simple-button type="route" :link="route('education-plan.index')">
      <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
      <span v-text="tm('action.goBack')" />
    </simple-button>
  </template>

  <template #header>
    <!--Education Plan Name-->
    <div class="flex items-center space-x-4">
      <!--Name-->
      <span v-text="data.name" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
    </div>
    <!--Date Range-->
    <div class="flex items-center space-x-1 text-xs mt-1">
      <font-awesome-icon icon="fa-solid fa-calendar-days"/>
      <span>{{ formatDate(data.start_date) }} - {{ formatDate(data.end_date) }}</span>
    </div>
  </template>

  <div class="grid grid-cols-12 gap-6">

    <!--Description-->
    <div class="col-span-12">
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
        <h3 class="text-lg font-semibold mb-4">{{ tm('term.description') }}</h3>
        <p v-if="data.description" class="text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ data.description }}
        </p>
        <Alert v-else>
          {{ tm('message.feedback.noDescription') }}
        </Alert>
      </div>
    </div>

    <!--Educations List (Future feature)-->
    <div class="col-span-12">
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
        <h3 class="text-lg font-semibold mb-4">{{ tm('term.educations') }}</h3>
        <Alert>
          {{ tm('message.feedback.noEducationsInPlan') }}
        </Alert>
        <!--Add Education-->
        <simple-button class="mt-4" full-size color="green">
          <font-awesome-icon icon="fa-solid fa-plus"/>
          <span v-text="tm('action.addEducation')"/>
        </simple-button>
      </div>
    </div>
  </div>

</app-layout>
</template> 