<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link, router} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Alert from "@/Components/Alert/Alert.vue";
import Badge from "@/Components/Badge/Badge.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";

// Props
const props = defineProps({
  data: Object
})

// Multi-lang
import Translates from "./translates"
const {t, tm} = Translates();

import Terms from "./terms"

const {staffTypes, locationTypes} = Terms()

const staffTypeLabel = (value) => staffTypes.find((type) => type.id === value)?.label ?? value ?? '—';
const locationLabel = (value) => locationTypes.find((type) => type.id === value)?.label ?? value ?? '—';

const handleDelete = () => {
  router.delete(route('job-description.destroy', props.data.id))
}

/*Extra sections rendered as simple bullet lists*/
const listSections = [
  {key: 'responsibilities', label: tm('term.responsibilities')},
  {key: 'powers', label: tm('term.powers')},
  {key: 'requirements', label: tm('term.requirements')},
  {key: 'skills', label: tm('term.skills')},
  {key: 'working_conditions', label: tm('term.workingConditions')},
  {key: 'working_tools', label: tm('term.workingTools')},
  {key: 'working_hours', label: tm('term.workingHours')},
  {key: 'overtime_status', label: tm('term.overtimeStatus')},
]

const hasItems = (key) => Array.isArray(props.data[key]) && props.data[key].filter((item) => String(item ?? '').trim()).length > 0
const hasTravel = () => Array.isArray(props.data.travel_status) && props.data.travel_status.some((item) => item && (item.reason || item.location))
</script>

<template>
  <app-layout :title="data.name" :sub-title="data.code">
    <template #actionArea>
      <help-button title="Görev Tanımı — Nasıl Çalışır?" subtitle="Bölümler ve kadro tipi">
        <p>Bir görev tanımı yalnızca isim ve departmandan ibaret değildir — <strong>Sorumluluklar, Yetkiler, Gereklilikler, Yetenekler, Çalışma Koşulları/Ekipmanları/Saatleri, Fazla Mesai ve Seyahat Durumu</strong> gibi bölümler oluşturulurken serbestçe eklenir. Bir görev tanımında hangi bölümlerin bulunacağı zorunlu değildir; eklenmeyen bir bölüm bu sayfada hiç görünmez.</p>
        <p><strong>Kadro Tipi</strong> (Beyaz Yaka / Mavi Yaka) ve <strong>Durum</strong> (Aktif/Pasif) sadece sınıflandırma amaçlıdır — pasif bir görev tanımı silinmiş sayılmaz, listede görünmeye devam eder.</p>
      </help-button>

      <simple-button @click="handleDelete" color="red">
        <font-awesome-icon icon="trash-can" class="mr-2"/>
        <span v-text="tm('action.delete')"/>
      </simple-button>

      <simple-button type="route" :link="route('job-description.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
        <span v-text="tm('action.goBack')"/>
      </simple-button>
    </template>

    <template #header>
      <div class="flex items-center space-x-4">
        <span v-text="data.name" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
        <div class="flex space-x-1 items-center border px-2 py-1 rounded-lg">
          <font-awesome-icon icon="fa-solid fa-fingerprint"/>
          <span v-text="data.code" class="text-sm uppercase"/>
        </div>
      </div>
      <div class="flex items-center space-x-3 text-xs mt-1">
        <span v-if="data.department">{{ data.department.name }}</span>
        <span v-else>Departman atanmamış</span>
        <Badge :color="data.staff_type === 'white' ? 'blue' : 'orange'">{{ staffTypeLabel(data.staff_type) }}</Badge>
        <Badge :color="data.status ? 'green' : 'neutral'">{{ data.status ? t('term.active') : t('term.inactive') }}</Badge>
      </div>
    </template>

    <div class="grid grid-cols-12 gap-6">
      <!--Description-->
      <div class="col-span-12">
        <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <h3 class="text-lg font-semibold mb-4">{{ tm('term.description') }}</h3>
          <p v-if="data.description" class="text-slate-600 dark:text-slate-300 leading-relaxed">{{ data.description }}</p>
          <Alert v-else>{{ tm('message.feedback.noDescription') }}</Alert>
        </div>
      </div>

      <!--List sections-->
      <div
          v-for="section in listSections"
          :key="section.key"
          v-show="hasItems(section.key)"
          class="col-span-12 lg:col-span-6"
      >
        <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow h-full">
          <h3 class="text-lg font-semibold mb-3">{{ section.label }}</h3>
          <ul class="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
            <li v-for="(item, index) in data[section.key]" :key="index" v-show="String(item ?? '').trim()">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!--Travel status-->
      <div v-if="hasTravel()" class="col-span-12 lg:col-span-6">
        <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow h-full">
          <h3 class="text-lg font-semibold mb-3">{{ tm('term.travelStatus') }}</h3>
          <div class="space-y-2">
            <div
                v-for="(item, index) in data.travel_status"
                :key="index"
                v-show="item && (item.reason || item.location)"
                class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded"
            >
              <span>{{ item.reason }}</span>
              <Badge color="violet">{{ locationLabel(item.location) }}</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>
