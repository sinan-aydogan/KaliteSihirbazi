<script setup>
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import SimpleButton from '@/Components/Button/SimpleButton.vue';
import FilterBadge from '@/Components/Table/FilterBadge.vue';

const props = defineProps({
  headers: { type: Array, default: () => [] },
  modelValue: { type: Array, default: () => [] },
});
const emit = defineEmits(['update:modelValue']);

const container = ref(null);
const open = ref(false);
const draft = ref({ key: '', comparator: 'co', value: '' });
const comparators = [
  { value: 'co', label: 'İçerir', icon: 'arrows-left-right-to-line' },
  { value: 'nco', label: 'İçermez', icon: 'stop' },
  { value: 'eq', label: 'Eşittir', icon: 'equals' },
  { value: 'neq', label: 'Eşit değildir', icon: 'not-equal' },
  { value: 'sw', label: 'İle başlar', icon: 'right-long' },
  { value: 'ew', label: 'İle biter', icon: 'left-long' },
  { value: 'gt', label: 'Büyüktür', icon: 'greater-than' },
  { value: 'gte', label: 'Büyük veya eşittir', icon: 'greater-than-equal' },
  { value: 'lt', label: 'Küçüktür', icon: 'less-than' },
  { value: 'lte', label: 'Küçük veya eşittir', icon: 'less-than-equal' },
];
const availableHeaders = computed(() => props.headers.filter(
  (header) => header.filterable !== false && !props.modelValue.some((filter) => filter.key === header.id),
));
const selectedHeader = computed(() => props.headers.find((header) => header.id === draft.value.key));
const optionValue = (option) => typeof option === 'object' ? (option.id ?? option.value) : option;
const optionLabel = (option) => typeof option === 'object' ? (option.label ?? option.name ?? optionValue(option)) : option;

const resetDraft = () => { draft.value = { key: '', comparator: 'co', value: '' }; };
const add = () => {
  if (!draft.value.key || String(draft.value.value).trim() === '') return;
  emit('update:modelValue', [...props.modelValue, { ...draft.value }]);
  resetDraft();
  open.value = false;
};
const remove = (index) => emit('update:modelValue', props.modelValue.filter((_, i) => i !== index));

onClickOutside(container, () => { open.value = false; });
</script>

<template>
  <div ref="container" class="flex min-w-0 flex-wrap items-center gap-2">
    <div class="relative shrink-0">
      <SimpleButton color="neutral" size="slim" :disabled="availableHeaders.length === 0" @click="open = !open">
        <font-awesome-icon icon="filter" />
        <span>Filtreler</span>
      </SimpleButton>

      <form
        v-if="open"
        class="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-300 bg-white p-3 shadow-xl dark:border-slate-500 dark:bg-slate-800"
        @submit.prevent="add"
      >
        <div class="flex flex-col gap-3">
          <label class="flex flex-col gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            Alan
            <select v-model="draft.key" class="h-10 rounded-lg border-slate-300 bg-white text-sm dark:border-slate-600 dark:bg-slate-700">
              <option value="" disabled>Alan seçin</option>
              <option v-for="header in availableHeaders" :key="header.id" :value="header.id">{{ header.label }}</option>
            </select>
          </label>
          <label v-if="draft.key" class="flex flex-col gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            Karşılaştırma
            <select v-model="draft.comparator" class="h-10 rounded-lg border-slate-300 bg-white text-sm dark:border-slate-600 dark:bg-slate-700">
              <option v-for="item in comparators" :key="item.value" :value="item.value">{{ item.label }}</option>
            </select>
          </label>
          <label v-if="draft.key" class="flex flex-col gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            Değer
            <select
              v-if="selectedHeader?.filterOptions"
              v-model="draft.value"
              class="h-10 rounded-lg border-slate-300 bg-white text-sm dark:border-slate-600 dark:bg-slate-700"
            >
              <option value="" disabled>Değer seçin</option>
              <option v-for="option in selectedHeader.filterOptions" :key="optionValue(option)" :value="optionValue(option)">
                {{ optionLabel(option) }}
              </option>
            </select>
            <input v-else v-model="draft.value" class="h-10 rounded-lg border-slate-300 bg-white text-sm dark:border-slate-600 dark:bg-slate-700" />
          </label>
          <SimpleButton type="submit" full-size label="Filtre Ekle" :disabled="!draft.key || String(draft.value).trim() === ''" />
        </div>
      </form>
    </div>

    <FilterBadge
      v-for="(filter, index) in modelValue"
      :key="filter.key"
      :filter-key="headers.find((header) => header.id === filter.key)?.label"
      :filter-comparator="comparators.find((item) => item.value === filter.comparator)?.icon"
      :filter-value="filter.value"
      @delete-filter="remove(index)"
    />
  </div>
</template>
