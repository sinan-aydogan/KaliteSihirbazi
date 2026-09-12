<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link, router, useForm} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import SelectInput from "@/Components/Form/SelectInput.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextAreaInput from "@/Components/Form/TextAreaInput.vue";

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, helpers} from "@vuelidate/validators"

// Props
const props = defineProps({
  measurementDevice: Object,
})

// Multi-lang
import Translates from "./translates"
import {ref} from "vue";

const {t, tm} = Translates();

/* ---------- Decommission / Reactivate ---------- */
const showDecommissionModal = ref(false);
const decommissionForm = useForm({reason: ""})
const decommissionRules = ref({reason: {required: helpers.withMessage(t('message.validation.required'), required)}})
const decommissionV$ = useVuelidate(decommissionRules, decommissionForm)

const openDecommission = () => {
  decommissionForm.reset();
  decommissionV$.value.$reset();
  showDecommissionModal.value = true;
}

const submitDecommission = async () => {
  const isValidated = await decommissionV$.value.$validate()
  if (!isValidated) return

  decommissionForm.post(route('measurement-device.decommission', props.measurementDevice.id), {
    onSuccess: () => showDecommissionModal.value = false,
    preserveScroll: true,
  })
}

const reactivate = () => {
  router.post(route('measurement-device.reactivate', props.measurementDevice.id), {}, {preserveScroll: true})
}

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
      <help-button title="Cihaz Detayı — Nasıl Çalışır?" subtitle="Cihaz bilgisi ve kalibrasyon takibi buradan yönetilir">
        <p><strong>Cihaz Bilgisi:</strong> Cihazın tipi, markası/modeli, seri numarası, satın alma bilgileri ve cihazdan/kalibrasyonundan sorumlu kişiler burada tutulur.</p>
        <p><strong>Kalibrasyon Görevleri:</strong> Bu cihaz için planlanan her kalibrasyon (planlanan tarih, kalibrasyon firması, ücret) ayrı bir görev olarak kaydedilir. Bir görevi düzenle ikonuyla açıp "Gerçekleşti mi?" ile tamamlandı olarak işaretleyebilir, sonucu (Uygun/Uygunsuz), rapor no ve sertifikayı girebilirsiniz — durum rozeti buna göre güncellenir.</p>
        <p><strong>Kullanımdan Düşürme:</strong> Bir kalibrasyon sonucu "Uygunsuz" çıktıysa veya cihaz artık kullanılamayacak durumdaysa, bir sebep belirterek cihazı kullanımdan düşürebilirsiniz. Kullanım dışı cihazlar silinmez, sadece durumu değişir ve kalibrasyon hatırlatmalarına dahil edilmez — istediğiniz zaman yeniden aktifleştirebilirsiniz.</p>
      </help-button>
      <simple-button v-if="measurementDevice.status === 'active'" @click="openDecommission" color="orange">
        <font-awesome-icon icon="fa-solid fa-ban" class="mr-2"/>
        <span v-text="tm('action.decommission')"/>
      </simple-button>
      <simple-button v-else @click="reactivate" color="blue">
        <font-awesome-icon icon="fa-solid fa-rotate-left" class="mr-2"/>
        <span v-text="tm('action.reactivate')"/>
      </simple-button>
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
        <div class="flex items-center space-x-2">
          <span v-text="measurementDevice.code" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
          <span
              class="px-2 py-0.5 rounded text-xs"
              :class="measurementDevice.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'"
          >
            {{ measurementDevice.status === 'active' ? tm('term.statusValue.active') : tm('term.statusValue.decommissioned') }}
          </span>
        </div>
        <!--Type-->
        <span v-text="measurementDevice.type.name" class="text-xs uppercase"/>
        <!--Decommission Info-->
        <div v-if="measurementDevice.status !== 'active'" class="mt-1 text-xs text-slate-500">
          {{ tm('term.decommissionReason') }}: {{ measurementDevice.decommission_reason }}
        </div>
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

  <teleport to="body">
    <Modal v-model="showDecommissionModal" :header="tm('action.decommission')" closeable close-button max-width="2xl">
      <Form full-size>
        <FormSection bg-less>
          <input-group class="col-span-6" labelFor="reason" :label="tm('term.decommissionReason')" :errors="decommissionV$.reason.$errors">
            <text-area-input v-model="decommissionForm.reason"/>
          </input-group>
        </FormSection>
      </Form>
      <template #footer>
        <SimpleButton :label="tm('action.decommission')" color="orange" @click="submitDecommission" :loading="decommissionForm.processing"/>
      </template>
    </Modal>
  </teleport>
</template>
