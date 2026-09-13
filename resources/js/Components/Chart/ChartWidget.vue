<script setup>
import {computed} from "vue";
import {Chart as ChartJS, registerables} from "chart.js";
import {Bar, Pie, Line} from "vue-chartjs";
import Table from "@/Components/Table/Table.vue";

ChartJS.register(...registerables);

const props = defineProps({
  chartType: {
    type: String,
    default: "bar",
  },
  labels: {
    type: Array,
    default: () => [],
  },
  values: {
    type: Array,
    default: () => [],
  },
});

const palette = ["#f43f5e", "#6366f1", "#10b981", "#f59e0b", "#0ea5e9", "#a855f7", "#ec4899", "#14b8a6"];

const chartData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      data: props.values,
      backgroundColor: props.chartType === "pie"
          ? props.labels.map((_, i) => palette[i % palette.length])
          : palette[0],
      borderColor: palette[0],
      borderWidth: props.chartType === "line" ? 2 : 0,
      tension: 0.3,
    },
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {display: props.chartType === "pie"},
  },
}));

const tableRows = computed(() => props.labels.map((label, i) => ({label, value: props.values[i]})));
const tableHeaders = [
  {id: "label", label: "Etiket"},
  {id: "value", label: "Değer"},
];
</script>

<template>
  <div class="h-64">
    <div v-if="labels.length === 0" class="h-full flex items-center justify-center text-sm text-slate-400">
      Veri yok
    </div>
    <Bar v-else-if="chartType === 'bar'" :data="chartData" :options="chartOptions"/>
    <Pie v-else-if="chartType === 'pie'" :data="chartData" :options="chartOptions"/>
    <Line v-else-if="chartType === 'line'" :data="chartData" :options="chartOptions"/>
    <div v-else class="h-full overflow-y-auto">
      <Table :data="tableRows" :headers="tableHeaders" :action-column="false"/>
    </div>
  </div>
</template>
