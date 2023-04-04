<script setup>
/*Functions*/
import {ref, computed, toRefs} from 'vue'
import {onClickOutside} from "@vueuse/core";
import {Link, useForm} from "@inertiajs/vue3";
import {cloneDeep} from "lodash";
import {useI18n} from "vue-i18n";

/*Components*/
import TextInput from "@/Components/Form/TextInput.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import FilterBadge from "@/Components/Table/FilterBadge.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import Checkbox from "@/Jetstream/Checkbox.vue";
import {debouncedWatch} from "@vueuse/core";

const props = defineProps({
  data: {
    type: [Array, Object],
    default: []
  },
  dataKey: {
    type: String,
    default: 'data'
  },
  uniqueIdKey: {
    type: String,
    default: 'id'
  },
  headers: {
    type: [Array, Object],
    default: []
  },
  simpleSearch: {
    type: Boolean,
    default: false
  },
  actionColumn: {
    type: Boolean,
    default: true
  },
  deleteAction: {
    type: Boolean,
    default: false
  },
  showAction: {
    type: Boolean,
    default: false
  },
  editAction: {
    type: Boolean,
    default: false
  },
  restoreAction: {
    type: Boolean,
    default: false
  },
  bulkActions: {
    type: Array,
    default: () => []
  },
})

defineEmits(['delete', 'edit', 'view', 'restore'])


const {t} = useI18n();

/*Data states*/
const {data, dataKey, headers} = toRefs(props)
const gData = computed(() => {
  return data.value['data'] ? data.value['data'] : data.value;
})

const comparators = [
  {
    label: t('table.comparators.contains'),
    value: 'co',
    icon: 'arrows-left-right-to-line'
  },
  {
    label: t('table.comparators.notContains'),
    value: 'nco',
    icon: 'stop'
  },
  {
    label: t('table.comparators.equal'),
    value: 'eq',
    icon: 'equals'
  },
  {
    label: t('table.comparators.notEqual'),
    value: 'neq',
    icon: 'not-equal'
  },
  {
    label: t('table.comparators.greaterThan'),
    value: 'gt',
    icon: 'greater-than'
  },
  {
    label: t('table.comparators.greaterThanOrEqual'),
    value: 'gte',
    icon: 'greater-than-equal'
  },
  {
    label: t('table.comparators.lessThan'),
    value: 'lt',
    icon: 'less-than'
  },
  {
    label: t('table.comparators.lessThanOrEqual'),
    value: 'lte',
    icon: 'less-than-equal'
  },
  {
    label: t('table.comparators.between'),
    value: 'bt',
    icon: 'long-arrow-right'
  },
  {
    label: t('table.comparators.notBetween'),
    value: 'nbt',
    icon: 'long-arrow-left'
  },

  {
    label: t('table.comparators.startsWith'),
    value: 'sw',
    icon: 'right-long'
  },
  {
    label: t('table.comparators.endsWith'),
    value: 'ew',
    icon: 'left-long'
  },
]

const selectedItems = ref([])
const checked = ref(false)
const indeterminate = computed(() => selectedItems.value.length > 0 && selectedItems.value.length < gData.value.length)

/*Outside click*/
const targetFilter = ref();
onClickOutside(targetFilter, (event) => {
  filterSelectForm.reset()
  showFilter.value = false
});
/*Filter*/
const showFilter = ref(false);
const filterSelectForm = useForm({
  key: null,
  comparator: null,
  value: null,
})

const unSelectedFilters = ref(cloneDeep(headers.value))
const addFilter = () => {
  search.query.push(cloneDeep(filterSelectForm))
  unSelectedFilters.value.splice(unSelectedFilters.value.findIndex(f => f.id === filterSelectForm.value.key), 1)
  filterSelectForm.reset()
  showFilter.value = false
}
const deleteFilter = (index) => {
  unSelectedFilters.value.push(headers.value.find(h => h.id === search.query[index].key))
  search.query.splice(index, 1)
}

/*Search*/
const dataLoading = ref(false);
const search = useForm({
  query: [],
  perPager: 10,
  sortDirection: 'asc',
  sortBy: null,
})

debouncedWatch(() => cloneDeep(search.query), () => {
  search.post(route('department.search'), data, {}, {
    only: dataKey.value,
    onBefore: visit => {
      dataLoading.value = true;
    },
    onFinish: visit => {
      dataLoading.value = false;
    },
  })
}, {
  debounce: 500
});
</script>

<template>
  <!--Table-->
  <div class="relative">
    <div class="flex space-x-2 inline-flex justify-between items-center min-w-full">
      <!--Left Side-->
      <div class="flex space-x-2">
        <!--Search-->
        <div v-if="simpleSearch" class="relative">
          <text-input input-id="table-search">
            <template #append>
              <font-awesome-icon icon="search"/>
            </template>
          </text-input>
        </div>

        <!--Advanced Search: Filter-->
        <div ref="targetFilter" class="relative flex space-x-1 items-center">
          <simple-button class="mr-2 select-none" :class="{
            'pointer-events-none': search.query.length === headers.length
          }" color="neutral" size="slim" @click="showFilter = !showFilter"
                         :disabled="search.query.length === headers.length">
            <font-awesome-icon icon="filter"/>
            <span v-text="t('term.filters')"></span>
          </simple-button>

          <div v-if="showFilter"
               class="absolute space-y-2 -left-2 top-10 z-50 bg-white dark:bg-slate-700  dark:border-transparent dark:shadow-slate-500 rounded-lg p-4 shadow-lg dark:shadow-sm border">
            <!--Select Key-->
            <select-input :options="unSelectedFilters" v-model="filterSelectForm.key"
                          :select-text="t('table.selectField')"></select-input>

            <!--Select Comparator-->
            <select-input
                v-if="filterSelectForm.key && headers.find(i=>i.id === filterSelectForm.key).filterType === 'text'"
                v-model="filterSelectForm.comparator"
                option-key="value"
                :options="comparators"
                :select-text="t('table.selectComparator')"
            ></select-input>

            <!--Filter Value-->
            <text-input v-model="filterSelectForm.value"
                        v-if="filterSelectForm.key && headers.find(i=>i.id === filterSelectForm.key).filterType === 'text'"/>
            <select-input v-model="filterSelectForm.value" :options="headers"
                          v-if="filterSelectForm.key && headers.find(i=>i.id === filterSelectForm.key).filterType === 'select'"></select-input>

            <!--Add Filter-->
            <simple-button @click="addFilter" full-size>{{ t('table.addFilter') }}</simple-button>
          </div>

          <!--Filters-->
          <template v-for="(filter,index) in search.query" :key="filter">
            <filter-badge
                :filterId="index"
                :filter-key="headers.find(i=>i.id === filter.key).label"
                :filter-comparator="filter.comparator ? comparators.find(i=>i.value === filter.comparator).icon : null"
                :filter-value="filter.value"
                @deleteFilter="deleteFilter(index)"
            />
          </template>

        </div>
      </div>

      <!--Right Side-->
      <div v-if="$slots.actionArea || selectedItems.length > 0" class="relative flex space-x-2">
        <!--Action Buttons-->
        <div v-if="selectedItems.length > 0"
             class="flex items-center space-x-3 sm:left-16">
          <!--Delete All-->
          <button type="button"
                  class="inline-flex items-center rounded border border-rose-500 bg-rose-50 px-2.5 py-1.5 text-xs font-medium text-rose-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">
            Hepsini sil
          </button>
        </div>
        <!--Slot-->
        <slot v-if="$slots.actionArea" name="actionArea"></slot>
      </div>
    </div>

    <div
        class="p-2 -m-2 overflow-x-scroll overscroll-x-auto scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-transparent">
      <!--Table-->
      <table class="w-full mt-4 text-sm">
        <!--Header-->
        <thead>
        <tr>
          <th v-if="bulkActions.length>0">
            <!--Checkbox-->
            <div class="flex flex-shrink-0 w-12 h-8 justify-center items-center">
              <input type="checkbox" :checked="indeterminate || selectedItems.length === gData.length"
                     :indeterminate="indeterminate"
                     @change="selectedItems = $event.target.checked ? gData.map(d=>d[uniqueIdKey]) : []"
                     class="rounded h-4 w-4 text-rose-600 focus:ring-rose-500"/>
            </div>
          </th>
          <template v-for="header in headers">
            <th>
              <div class="flex flex-shrink-0 h-full px-2 mb-1 text-slate-400 font-semibold"
                   v-text="header.label"
                   :class="{
                            'justify-start' : header.align === 'left' || !header['align'],
                            'justify-end' : header.align === 'right',
                            'justify-center' : header.align === 'center'
                        }"></div>
            </th>
          </template>

          <th>
            <div class="flex flex-shrink-0 justify-center items-center  text-slate-400 font-semibold" v-text="t('table.actions')"></div>
          </th>
        </tr>
        </thead>

        <!--Body-->
        <tbody :style="'filter: drop-shadow(0 0 1px rgba('+
                (gData.length>0 ? '0,0,0,0.25' : '14,165,233,1') +
                '))'">
        <template v-for="row in gData">
          <tr class="group">
            <!--Checkbox-->
            <td v-if="bulkActions.length>0" class="border-b group-last:border-b-0 w-12 overflow-hidden"
                :class="[
                        selectedItems.includes(row[uniqueIdKey]) ? 'bg-rose-50 border-rose-300 group-hover:bg-rose-100' : 'bg-slate-100 dark:bg-slate-500 group-odd:bg-slate-50 dark:group-odd:bg-slate-600 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 border-slate-300'
                        ]">
              <div class="relative flex  flex-shrink-0 h-full">
                <!--Selected Indicator-->
                <div v-if="selectedItems.includes(row[uniqueIdKey])"
                     class="absolute -ml-0.5 h-full w-[.25rem] bg-rose-500"
                ></div>
                <!--Checkbox-->
                <div class="flex justify-center items-center w-12 py-3">
                  <input type="checkbox" :value="row[uniqueIdKey]" v-model="selectedItems"
                         class="rounded h-4 w-4 text-rose-600 focus:ring-rose-500"/>
                </div>
              </div>
            </td>
            <!--Content-->
            <template v-for="cell in headers">
              <td class="border-b group-last:border-b-0"
                  :class="[
                        selectedItems.includes(row[uniqueIdKey]) ? 'bg-rose-50 border-rose-300 group-hover:bg-rose-100' : 'bg-slate-100 dark:bg-slate-500 group-odd:bg-slate-50 dark:group-odd:bg-slate-600 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 border-slate-300',
                        cell.width
                        ]">
                <div class="flex flex-shrink-0 px-2 min-h-[2.5rem] items-center"
                     :class="{
                            'justify-start' : cell.align === 'left' || !cell['align'],
                            'justify-end' : cell.align === 'right',
                            'justify-center' : cell.align === 'center'
                        }">
                  <!--Raw Value-->
                  <slot v-if="$slots[cell.id]" :name="cell.id" :props="row"/>
                  <span v-else v-text="row[cell.id]"/>
                </div>
              </td>
            </template>
            <!--Actions-->
            <td class="border-b group-last:border-b-0"
                :class="[
                        selectedItems.includes(row[uniqueIdKey]) ? 'bg-rose-50 border-rose-300 group-hover:bg-rose-100' : 'bg-slate-100 dark:bg-slate-500 group-odd:bg-slate-50 dark:group-odd:bg-slate-600 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 border-slate-300'
                        ]">
              <div
                  class="flex flex-shrink-0 justify-center items-center space-x-3 pr-2  min-h-[2.5rem] items-center">
                <font-awesome-icon
                    v-if="showAction"
                    @click="$emit('view', row)"
                    icon="eye"
                    class="action-button text-slate-600 dark:bg-slate-300 dark:text-slate-700 hover:text-slate-900"/>
                <font-awesome-icon
                    v-if="editAction"
                    @click="$emit('edit', row)"
                    icon="edit"
                    class="action-button text-sky-600 dark:bg-sky-500 dark:text-white hover:text-sky-900"
                />
                <font-awesome-icon
                    v-if="restoreAction"
                    @click="$emit('restore', row)"
                    icon="fa-solid fa-rotate-left"
                    class="action-button text-emerald-500 dark:bg-emerald-500 dark:text-white hover:text-emerald-900"
                />
                <font-awesome-icon
                    v-if="deleteAction"
                    @click="$emit('delete', row)"
                    icon="trash"
                    class="action-button text-rose-500 dark:bg-rose-500 dark:text-white hover:text-rose-900"
                />
              </div>
            </td>
          </tr>
        </template>

        <!--No results-->
        <tr v-if="gData.length===0">
          <td :colspan="headers.length + actionColumn ?? 1" class="bg-sky-100 text-sky-700">
            <div class="flex justify-center items-center p-4">
              <font-awesome-icon icon="info-circle" size="w-6 h-6"/>
              <span class="ml-2 font-semibold" v-text="t('message.feedback.noResults')"></span>
            </div>
          </td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>

  <!--Pagination-->
  <div v-if="data['data'] && data.total>data.per_page" class="py-3 flex items-center justify-between">
    <div class="grid grid-cols-2 w-full sm:hidden select-none">
      <Link :href="data['meta'] ? data.meta.links[0].url : data.prev_page_url"
            class="col-span-1 space-x-2 inline-flex place-self-start items-center px-4 py-2 border dark:border-transparent border-gray-300 text-sm font-medium rounded-md text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50"
            :class="{'opacity-25 pointer-events-none': data['meta'] ? data.meta.links[0].url === null : data.prev_page_url  === null}"
      >
        <font-awesome-icon icon="chevron-left" size="sm" aria-hidden="true"/>
        <span v-text="t('term.previous')"></span>
      </Link>
      <Link :href="data['meta'] ? data.meta.links[data.meta.links.length-1].url : data.next_page_url"
            class="col-span-1 ml-3 space-x-2 relative inline-flex  place-self-end items-center px-4 py-2 border dark:border-transparent border-gray-300 text-sm font-medium rounded-md text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50"
            :class="{'opacity-25 pointer-events-none': data['meta'] ? data.meta.links[data.meta.links.length-1].url === null : data.next_page_url  === null}"
      >
        <span v-text="('term.next')"></span>
        <font-awesome-icon icon="chevron-right" size="sm" aria-hidden="true"/>
      </Link>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-slate-800 dark:text-slate-200">
          <i18n-t keypath="table.paginationDetail" tag="span">
            <template v-slot:total>
              <span v-text="data['meta'] ? data.meta.total : data.total" class="font-bold"></span>
            </template>
            <template v-slot:from>
              <span v-text="data['meta'] ? data.meta.from : data.from" class="font-bold"></span>
            </template>
            <template v-slot:to>
              <span v-text="data['meta'] ? data.meta.to : data.to" class="font-bold"></span>
            </template>
          </i18n-t>
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

          <template v-for="(link,index) in data['meta'] ? data.meta.links : data.links" :key="index">
            <!--Previous-->
            <Link v-if="index === 0" :href="link.url" :disabled="link.url"
                  class="relative inline-flex items-center px-1 rounded-l-md border dark:border-0 dark:border-r dark:border-slate-800 border-gray-300 bg-white dark:bg-slate-600 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 disabled:opacity-25"
                  :class="{'opacity-25 pointer-events-none' : !link.url}"
            >
              <span class="sr-only" v-text="t('term.previous')"></span>
              <font-awesome-icon icon="chevron-left" class="h-5 w-5" aria-hidden="true"/>
            </Link>

            <!--Page-->
            <Link
                v-if="index> 0 && (data['meta'] ? data.meta.links.length !== index+1 : data.links.length !== index+1)"
                :href="link.url" aria-current="page"
                class="relative inline-flex items-center px-3 py-1 bg-white dark:bg-slate-600 border dark:border-t-0 dark:border-b-0 border-gray-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 text-sm font-medium"
                :class="{'z-10 bg-rose-50 border-rose-500 text-rose-600' : link.active}"
            >
              {{ link.label }}
            </Link>

            <!--Filler-->
            <span

                v-if="link.url === null && index >0 && index < (data['meta'] ? data.meta.links.length-1 : data.links.length-1)"
                class="relative inline-flex items-center px-3 py-1 border ark:bg-slate-600 border dark:border-t-0 dark:border-b-0 border-gray-300 bg-white dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium"> ... </span>

            <!--Next-->
            <Link v-if="data['meta'] ? data.meta.links.length === index+1 : data.links.length === index+1"
                  :href="link.url"
                  class="relative inline-flex items-center px-1 rounded-r-md border dark:border-0 dark:border-l dark:border-slate-800 border-gray-300 bg-white dark:bg-slate-600 text-sm font-medium text-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 hover:bg-gray-50"
                  :class="{'opacity-25 pointer-events-none' : !link.url}"
            >
              <span class="sr-only" v-text="t('term.next')"></span>
              <font-awesome-icon icon="chevron-right" class="h-5 w-5" aria-hidden="true"/>
            </Link>
          </template>

        </nav>
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
tbody > tr:first-child > td:first-child
  border-top-left-radius: 0.50rem


tbody > tr:first-child > td:last-child
  border-top-right-radius: 0.50rem


tbody > tr:last-child > td:first-child
  border-bottom-left-radius: 0.50rem


tbody > tr:last-child > td:last-child
  border-bottom-right-radius: 0.50rem


.action-button
  @apply hover:scale-110 active:scale-90 dark:p-1 dark:rounded cursor-pointer transition
</style>
