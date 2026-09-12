<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link, router } from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Avatar from "@/Components/Avatar/Avatar.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";
import DetailPageTabs from "@/Components/Navigation/DetailPageTabs.vue";

// Props
const props = defineProps({
  employee: Object,
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

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
      <DetailPageTabs :tabs="tabs" :route-param="employee.id"/>
      <!--Content-->
      <div class="my-6">
        <slot></slot>
      </div>
    </div>


  </app-layout>
</template>
