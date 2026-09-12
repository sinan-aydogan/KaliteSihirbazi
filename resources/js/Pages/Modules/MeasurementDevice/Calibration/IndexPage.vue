<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router} from "@inertiajs/vue3";

/*Components*/
import Table from "@/Components/Table/Table.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"

// Multi-lang
import Translates from "../Device/translates"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {useFormat} from "@/Stores/useFormat.js";

const {t, tm} = Translates();
const format = useFormat();
dayjs.extend(relativeTime)

defineProps({
  tableData: {
    type: Object,
    default: () => ({})
  }
})

const headers = [
  {id: 'device', label: t('term.device'), value: (row) => row.device?.code ?? '-'},
  {id: 'planned_date', label: t('term.plannedDate')},
  {id: 'accomplished_date', label: t('term.accomplishedDate')},
  {id: 'source', label: t('term.calibrationFirm')},
  {id: 'status', label: tm('term.status'), align: 'center'},
  {id: 'result', label: tm('term.result'), align: 'center'},
  {id: 'certificate', label: tm('term.certificate'), align: 'center', filterable: false},
  {id: 'report', label: tm('term.report'), align: 'center', filterable: false},
]
</script>

<template>
  <app-layout :title="tm('title.calibrationTasksIndexPage.title')" :sub-title="tm('title.calibrationTasksIndexPage.subTitle')">
    <template #actionArea>
      <help-button title="Kalibrasyon Emirleri — Nasıl Çalışır?" subtitle="Tüm cihazların kalibrasyon emirlerinin listesi">
        <p>Bu liste, sistemdeki tüm cihazlara ait kalibrasyon emirlerini tek bir yerden görüntülemenizi sağlar. Yeni bir emir oluşturmak veya mevcut bir emri düzenlemek için ilgili cihazın sayfasındaki "Kalibrasyon Emirleri" sekmesine gidin.</p>
      </help-button>
    </template>

    <Table
        :data="tableData"
        :headers="headers"
        @view="router.visit(route('measurement-device-calibrations.index', $event.measurement_device_id))"
        show-action
    >
      <template #planned_date="{props}">
        {{ format.date(props.planned_date) }} ({{ dayjs(props.planned_date).from(Date.now()) }})
      </template>

      <template #accomplished_date="{props}">
        {{ format.date(props.accomplished_date) }}
      </template>

      <template #source="{props}">
        <span v-if="props.type === 'internal'" class="text-xs">
          <span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 mr-1">{{ tm('term.typeValue.internal') }}</span>
          {{ props.reference_device?.code }}
        </span>
        <span v-else>{{ props.firm?.name }}</span>
      </template>

      <!--Status-->
      <template #status="{props}">
        <div class="flex space-x-2 items-center px-2 py-1 rounded-md" :class="{
          'bg-emerald-500/50' : props.status,
          'bg-orange-500/50' : !props.status
        }">
          <font-awesome-icon :icon="`fa-solid fa-${props.status ? 'circle-check' : 'hourglass-half' }`"/>
          <span v-text="tm(props.status ? 'term.accomplished' : 'term.active')"/>
        </div>
      </template>

      <!--Result-->
      <template #result="{props}">
        <span
            v-if="props.result"
            class="px-2 py-0.5 rounded text-xs"
            :class="props.result === 'passed' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'"
        >
          {{ tm(`term.resultValue.${props.result}`) }}
        </span>
        <span v-else>-</span>
      </template>

      <!--Certificate-->
      <template #certificate="{props}">
        <a
            v-if="props.certificate_url"
            :href="props.certificate_url"
            target="_blank"
            class="text-sky-600 hover:scale-110 transition inline-block"
        >
          <font-awesome-icon icon="fa-solid fa-file-arrow-down"/>
        </a>
        <span v-else>-</span>
      </template>

      <!--Report-->
      <template #report="{props}">
        <a
            v-if="props.status"
            :href="route('measurement-device-calibration.report', props.id)"
            target="_blank"
            class="text-sky-600 hover:scale-110 transition inline-block"
        >
          <font-awesome-icon icon="fa-solid fa-file-lines"/>
        </a>
        <span v-else>-</span>
      </template>
    </Table>
  </app-layout>
</template>
