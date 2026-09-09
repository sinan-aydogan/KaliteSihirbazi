<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link, router } from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Avatar from "@/Components/Avatar/Avatar.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";

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
      <help-button title="Personel Detayı — Nasıl Çalışır?" subtitle="Durum, kariyer yolu ve sekmeler arası ayrım">
        <p><strong>Durum:</strong> "Çalışıyor" dışındaki her durumda (Ayrıldı/Emekli/İşten Çıkarıldı) bir <strong>Ayrılış Tarihi</strong> istenir. <strong>Ayrılış Detayı</strong> (serbest metin sebep) yalnızca Ayrıldı veya İşten Çıkarıldı durumunda görünür — Emeklilik için ayrı bir sebep girilmez.</p>
        <p><strong>Acil Durum Kişileri:</strong> Kişisel Bilgiler sekmesinde eklenen/silinen acil durum kişileri, sekmenin kendi "Güncelle" butonuna basılana kadar kaydedilmez — listeye eklemek anlık bir sunucu kaydı değildir.</p>
        <p><strong>Kariyer Yolu:</strong> Bu sekme, personele atanan görev tanımlarının bir <strong>geçmiş kaydıdır</strong> — her satır, kim tarafından ne zaman atandığını gösteren ayrı bir atama kaydıdır. Mevcut bir atama düzenlenemez; yalnızca yeni bir atama eklenebilir veya bir kayıt silinebilir.</p>
        <p><strong>Zimmet ve İzin</strong> sekmeleri bu sürümde henüz aktif değildir — sayfada bu şekilde belirtilir.</p>
      </help-button>

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
               class="mr-1 flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition"
                :class="{
                  'border-rose-500 bg-rose-500 text-white shadow-sm hover:bg-rose-600 dark:border-rose-500 dark:bg-rose-600' : route().current() === i.route,
                  'border-slate-300 bg-white text-slate-600 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-rose-500 dark:hover:bg-slate-600' : route().current() !== i.route
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
