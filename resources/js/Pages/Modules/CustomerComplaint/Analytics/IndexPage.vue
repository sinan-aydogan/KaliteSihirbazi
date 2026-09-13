<script setup>
import {ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import Grid from "@/Layouts/Grid.vue";
import DataWidget from "@/Layouts/DataWidget.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import SwitchInput from "@/Components/Form/SwitchInput.vue";
import ChartWidget from "@/Components/Chart/ChartWidget.vue";

import Translates from "./translates";
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
  summary: Object,
  defaultBreakdowns: {
    type: Array,
    default: () => [],
  },
  templates: {
    type: Array,
    default: () => [],
  },
});

const chartTypeOptions = [
  {id: "bar", label: tm("term.chartTypeValue.bar")},
  {id: "pie", label: tm("term.chartTypeValue.pie")},
  {id: "line", label: tm("term.chartTypeValue.line")},
  {id: "table", label: tm("term.chartTypeValue.table")},
];

const groupByOptions = [
  {id: "source_type", label: tm("term.groupByValue.source_type")},
  {id: "subject", label: tm("term.groupByValue.subject")},
  {id: "severity", label: tm("term.groupByValue.severity")},
  {id: "status", label: tm("term.groupByValue.status")},
  {id: "channel", label: tm("term.groupByValue.channel")},
  {id: "department", label: tm("term.groupByValue.department")},
  {id: "distributor", label: tm("term.groupByValue.distributor")},
  {id: "supplier", label: tm("term.groupByValue.supplier")},
  {id: "month", label: tm("term.groupByValue.month")},
];

const metricOptions = [
  {id: "count", label: tm("term.metricValue.count")},
  {id: "avg_resolution_days", label: tm("term.metricValue.avg_resolution_days")},
];

/* Template Create/Update Form */
const showModal = ref(false);
const formType = ref("create");
const form = useForm({
  id: null,
  name: "",
  is_shared: false,
  config: {
    chart_type: "bar",
    group_by: "source_type",
    metric: "count",
    date_from: "",
    date_to: "",
  },
});

const rules = ref({
  name: {required: helpers.withMessage(t("message.validation.required"), required)},
  config: {
    chart_type: {required: helpers.withMessage(t("message.validation.required"), required)},
    group_by: {required: helpers.withMessage(t("message.validation.required"), required)},
    metric: {required: helpers.withMessage(t("message.validation.required"), required)},
  },
});
const v$ = useVuelidate(rules, form);

const openCreate = () => {
  form.reset();
  v$.value.$reset();
  previewData.value = null;
  formType.value = "create";
  showModal.value = true;
};

const openEdit = (template) => {
  form.id = template.id;
  form.name = template.name;
  form.is_shared = template.is_shared;
  form.config = {
    chart_type: template.config.chart_type,
    group_by: template.config.group_by,
    metric: template.config.metric,
    date_from: template.config.date_from ?? "",
    date_to: template.config.date_to ?? "",
  };
  previewData.value = template.data;
  formType.value = "update";
  showModal.value = true;
};

const handleSubmit = async () => {
  const isValidated = await v$.value.$validate();
  if (!isValidated) return;

  if (formType.value === "create") {
    form.post(route("customer-complaint-report-template.store"), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      },
    });
  } else {
    form.put(route("customer-complaint-report-template.update", {customerComplaintReportTemplate: form.id}), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      },
    });
  }
};

const handleDelete = (id) => {
  router.delete(route("customer-complaint-report-template.destroy", id), {
    preserveState: true,
  });
};

/* Live preview inside the modal */
const previewData = ref(null);
const previewLoading = ref(false);
const runPreview = async () => {
  previewLoading.value = true;
  try {
    const response = await window.axios.post(route("customer-complaint-analytics.preview"), {
      group_by: form.config.group_by,
      metric: form.config.metric,
      date_from: form.config.date_from || null,
      date_to: form.config.date_to || null,
    });
    previewData.value = response.data;
  } finally {
    previewLoading.value = false;
  }
};
</script>

<template>
  <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
    <template #actionArea>
      <help-button title="Şikayet Analizi — Nasıl Çalışır?" subtitle="Özet veriler ve özel rapor şablonları">
        <p>Üstteki kartlar tüm şikayet verilerinden canlı hesaplanan özetlerdir (toplam, açık, ortalama çözüm süresi, süresi geçen).</p>
        <p><strong>Genel Bakış</strong> bölümü sabit varsayılan grafiklerdir. <strong>Rapor Şablonlarım</strong> bölümünde ise kendi grafiğinizi (tip, gruplama, metrik, tarih aralığı) seçip kaydedebilir, isterseniz herkese açık paylaşabilirsiniz.</p>
      </help-button>
      <simple-button @click="openCreate" color="green">
        <font-awesome-icon icon="plus" class="mr-2"/>
        <span v-text="t('action.createTemplate')"/>
      </simple-button>
      <simple-button type="route" :link="route('customer-complaint.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
        <span v-text="t('action.goBack')"/>
      </simple-button>
    </template>

    <!--Summary Cards-->
    <Grid :large="4" :medium="2" :small="1">
      <data-widget :title="tm('term.totalComplaints')" :value="summary.total" bg-icon="comment-dots"/>
      <data-widget :title="tm('term.openComplaints')" :value="summary.open" bg-icon="hourglass-half" diff-color="orange"/>
      <data-widget
          :title="tm('term.avgResolutionDays')"
          :value="summary.avg_resolution_days !== null ? `${summary.avg_resolution_days} ${tm('term.days')}` : '-'"
          bg-icon="arrow-trend-up"
          diff-color="green"
      />
      <data-widget :title="tm('term.overdueComplaints')" :value="summary.overdue" bg-icon="circle-exclamation" diff-color="red"/>
    </Grid>

    <!--Default Breakdowns-->
    <h3 class="mt-8 mb-3 font-semibold text-slate-700 dark:text-slate-200" v-text="tm('term.overview')"></h3>
    <Grid :large="2" :medium="1" :small="1" :gap="4">
      <div v-for="breakdown in defaultBreakdowns" :key="breakdown.title"
           class="rounded-xl border border-slate-300 bg-white p-4 shadow-md shadow-slate-300/40 dark:border-slate-500 dark:bg-slate-700">
        <p class="font-semibold mb-2" v-text="breakdown.title"></p>
        <chart-widget :chart-type="breakdown.chart_type" :labels="breakdown.data.labels" :values="breakdown.data.values"/>
      </div>
    </Grid>

    <!--User Templates-->
    <h3 class="mt-8 mb-3 font-semibold text-slate-700 dark:text-slate-200" v-text="tm('term.myTemplates')"></h3>
    <Grid v-if="templates.length > 0" :large="2" :medium="1" :small="1" :gap="4">
      <div v-for="template in templates" :key="template.id"
           class="rounded-xl border border-slate-300 bg-white p-4 shadow-md shadow-slate-300/40 dark:border-slate-500 dark:bg-slate-700">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <p class="font-semibold" v-text="template.name"></p>
            <span v-if="template.is_shared" class="px-2 py-0.5 rounded text-xs bg-indigo-100 text-indigo-700" v-text="tm('term.sharedBadge')"></span>
          </div>
          <div v-if="template.can_manage" class="flex items-center gap-2 text-slate-500">
            <font-awesome-icon icon="edit" class="cursor-pointer hover:text-sky-600" @click="openEdit(template)"/>
            <font-awesome-icon icon="trash-can" class="cursor-pointer hover:text-rose-600" @click="handleDelete(template.id)"/>
          </div>
        </div>
        <p class="text-xs text-slate-500 mb-2">{{ tm('term.createdBy') }}: {{ template.created_by?.name }}</p>
        <chart-widget :chart-type="template.config.chart_type" :labels="template.data.labels" :values="template.data.values"/>
      </div>
    </Grid>
    <p v-else class="text-sm text-slate-500" v-text="tm('message.feedback.emptyTemplatesList')"></p>

    <teleport to="body">
      <Modal
          v-model="showModal"
          :header="formType === 'create' ? tm('title.createTemplateModal.title') : tm('title.updateTemplateModal.title')"
          :sub-header="formType === 'create' ? tm('title.createTemplateModal.subTitle') : tm('title.updateTemplateModal.subTitle')"
          closeable
          close-button
          max-width="3xl"
      >
        <Form full-size>
          <FormSection bg-less>
            <input-group class="col-span-12" labelFor="name" :label="tm('term.templateName')" :errors="v$.name.$errors">
              <text-input v-model="form.name"/>
            </input-group>

            <input-group class="col-span-4" labelFor="chart_type" :label="tm('term.chartType')">
              <select-input v-model="form.config.chart_type" :options="chartTypeOptions"/>
            </input-group>

            <input-group class="col-span-4" labelFor="group_by" :label="tm('term.groupBy')">
              <select-input v-model="form.config.group_by" :options="groupByOptions"/>
            </input-group>

            <input-group class="col-span-4" labelFor="metric" :label="tm('term.metric')">
              <select-input v-model="form.config.metric" :options="metricOptions"/>
            </input-group>

            <input-group class="col-span-4" labelFor="date_from" :label="tm('term.dateFrom')">
              <text-input v-model="form.config.date_from" input-type="date"/>
            </input-group>

            <input-group class="col-span-4" labelFor="date_to" :label="tm('term.dateTo')">
              <text-input v-model="form.config.date_to" input-type="date"/>
            </input-group>

            <input-group class="col-span-4" labelFor="is_shared" :label="tm('term.isShared')">
              <switch-input v-model="form.is_shared"/>
            </input-group>
          </FormSection>

          <div class="px-4 pb-4">
            <SimpleButton :label="t('action.preview')" color="blue" :loading="previewLoading" @click="runPreview"/>
            <div v-if="previewData" class="mt-4 rounded-lg border border-slate-200 dark:border-slate-600 p-3">
              <chart-widget :chart-type="form.config.chart_type" :labels="previewData.labels" :values="previewData.values"/>
            </div>
          </div>
        </Form>
        <template #footer>
          <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
          <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
        </template>
      </Modal>
    </teleport>
  </app-layout>
</template>
