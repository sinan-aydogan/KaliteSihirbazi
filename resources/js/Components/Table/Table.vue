<script setup>
/*Functions*/
import {ref, computed, toRefs} from 'vue'
import {debouncedWatch} from '@vueuse/core'
import {Link, router, usePage} from "@inertiajs/vue3";
import {useI18n} from "vue-i18n";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import TableFilters from "@/Components/Table/TableFilters.vue";

const props = defineProps({
    data: {
        type: [Array, Object],
        default: () => []
    },
    dataKey: {
        type: String,
        default: 'tableData'
    },
    uniqueIdKey: {
        type: String,
        default: 'id'
    },
    headers: {
        type: [Array, Object],
        default: () => []
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
    customActions: {
        type: Array,
        default: () => []
    },
    deleteActionVisible: {
        type: Function,
        default: () => true
    }
})

defineEmits(['delete', 'edit', 'view', 'restore'])

const iconActionColors = {
    blue: 'text-sky-600 dark:bg-sky-500 dark:text-white hover:text-sky-900',
    green: 'text-emerald-500 dark:bg-emerald-500 dark:text-white hover:text-emerald-900',
    red: 'text-rose-500 dark:bg-rose-500 dark:text-white hover:text-rose-900',
    orange: 'text-amber-500 dark:bg-amber-500 dark:text-white hover:text-amber-900',
    neutral: 'text-slate-600 dark:bg-slate-300 dark:text-slate-700 hover:text-slate-900',
}

const {t} = useI18n();

/*Data states*/
const {data, dataKey, headers} = toRefs(props)
const page = usePage()
const sourceData = computed(() => {
    const rows = data.value?.data ?? data.value;
    return Array.isArray(rows) ? rows : [];
})
const getInitialFilters = () => {
    try {
        const value = new URL(page.url, 'http://localhost').searchParams.get('tableFilters')
        return value ? JSON.parse(value) : []
    } catch {
        return []
    }
}
const filters = ref(getInitialFilters())
const serverFiltered = computed(() => Array.isArray(data.value?.data) && data.value?.current_page !== undefined)
const flattenValue = (value) => {
    if (Array.isArray(value)) {
        return value.map(flattenValue).join(' ')
    }

    if (value && typeof value === 'object') {
        return Object.values(value).map(flattenValue).join(' ')
    }

    return value ?? ''
}
const resolveValue = (row, header) => flattenValue(header?.filterValue
    ? header.filterValue(row)
    : header?.value
        ? header.value(row)
        : header?.id.split('.').reduce((value, key) => value?.[key], row))
const matches = (actual, filter) => {
    const left = String(actual ?? '').toLocaleLowerCase();
    const right = String(filter.value ?? '').toLocaleLowerCase();
    const leftNumber = Number(actual);
    const rightNumber = Number(filter.value);
    return {
        co: () => left.includes(right), nco: () => !left.includes(right),
        eq: () => left === right, neq: () => left !== right,
        sw: () => left.startsWith(right), ew: () => left.endsWith(right),
        gt: () => leftNumber > rightNumber, gte: () => leftNumber >= rightNumber,
        lt: () => leftNumber < rightNumber, lte: () => leftNumber <= rightNumber,
    }[filter.comparator]?.() ?? true;
}
const gData = computed(() => sourceData.value.filter((row) => filters.value.every((filter) => {
    const header = headers.value.find((item) => item.id === filter.key);
    return matches(resolveValue(row, header), filter);
})))

const selectedItems = ref([])
const indeterminate = computed(() => selectedItems.value.length > 0 && selectedItems.value.length < gData.value.length)

debouncedWatch(filters, (value) => {
    if (!serverFiltered.value) return

    router.get(page.url.split('?')[0], {
        tableFilters: value.length ? JSON.stringify(value) : undefined,
    }, {
        only: [dataKey.value],
        preserveScroll: true,
        preserveState: true,
        replace: true,
    })
}, {deep: true, debounce: 350})

</script>

<template>
    <!--Table-->
    <div class="relative">
        <div class="flex space-x-2 justify-between items-center min-w-full">
            <!--Left Side-->
            <div class="flex space-x-2">
                <!--Search-->
                <!--Advanced Search: Filter-->
                <TableFilters v-model="filters" :headers="headers" />
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
            class="flex p-2 -m-2 overscroll-x-auto scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-transparent">
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

                    <th v-if="actionColumn">
                        <div class="flex flex-shrink-0 justify-end pr-2 items-center  text-slate-400 font-semibold"
                             v-text="t('table.actions')"></div>
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
                                    <span v-else v-text="cell.value ? cell.value(row) : row[cell.id]"/>
                                </div>
                            </td>
                        </template>
                        <!--Actions-->
                        <td class="border-b group-last:border-b-0"
                            :class="[
                        selectedItems.includes(row[uniqueIdKey]) ? 'bg-rose-50 border-rose-300 group-hover:bg-rose-100' : 'bg-slate-100 dark:bg-slate-500 group-odd:bg-slate-50 dark:group-odd:bg-slate-600 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 border-slate-300'
                        ]">
                            <div
                                class="flex flex-shrink-0 justify-end items-center space-x-3 pr-2  min-h-[2.5rem]">

                                <!--Custom Actions-->
                                <template v-for="action in customActions">
                                    <font-awesome-icon
                                        v-if="action.icon"
                                        @click="action.action(row)"
                                        :icon="action.icon"
                                        :title="action.label ?? ''"
                                        class="action-button"
                                        :class="iconActionColors[action.color] ?? iconActionColors.blue"
                                    />
                                    <simple-button v-else
                                                   @click="action.action(row)"
                                                   :color="action.color"
                                                   :size="action.size"
                                                   :full-size="action.fullSize"
                                                   :disabled="action.disabled ?? false"
                                                   :label="action.label ?? ''"
                                    />
                                </template>
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
                                    v-if="deleteAction && deleteActionVisible(row)"
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
                            <font-awesome-icon icon="info-circle" class="w-6 h-6"/>
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
            <Link :href="(data?.meta?.links ? data.meta.links[0].url : data.prev_page_url) ?? '#table'"
                  class="col-span-1 space-x-2 inline-flex place-self-start items-center px-4 py-2 border dark:border-transparent border-gray-300 text-sm font-medium rounded-md text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50"
                  :class="{'opacity-25 pointer-events-none': data?.meta?.links ? data.meta.links[0].url === null : data.prev_page_url  === null}"
            >
                <font-awesome-icon icon="chevron-left" size="sm" aria-hidden="true"/>
                <span v-text="t('term.previous')"></span>
            </Link>
            <Link :href="(data?.meta?.links ? data.meta.links[data.meta.links.length-1].url : data.next_page_url) ?? '#table'"
                  class="col-span-1 ml-3 space-x-2 relative inline-flex  place-self-end items-center px-4 py-2 border dark:border-transparent border-gray-300 text-sm font-medium rounded-md text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50"
                  :class="{'opacity-25 pointer-events-none': data?.meta?.links ? data.meta.links[data.meta.links.length-1].url === null : data.next_page_url  === null}"
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
                            <span v-text="data?.meta?.links ? data.meta.total : data.total" class="font-bold"></span>
                        </template>
                        <template v-slot:from>
                            <span v-text="data?.meta?.links ? data.meta.from : data.from" class="font-bold"></span>
                        </template>
                        <template v-slot:to>
                            <span v-text="data?.meta?.links ? data.meta.to : data.to" class="font-bold"></span>
                        </template>
                    </i18n-t>
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                    <template v-for="(link,index) in data?.meta?.links ? data.meta.links : data.links" :key="index">
                        <!--Previous-->
                        <Link v-if="index === 0" :href="link.url ?? '#table'"
                              class="relative inline-flex items-center px-1 rounded-l-md border dark:border-0 dark:border-r dark:border-slate-800 border-gray-300 bg-white dark:bg-slate-600 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 disabled:opacity-25"
                              :class="{'opacity-25 pointer-events-none' : !link.url}"
                        >
                            <span class="sr-only" v-text="t('term.previous')"></span>
                            <font-awesome-icon icon="chevron-left" class="h-5 w-5" aria-hidden="true"/>
                        </Link>

                        <!--Page-->
                        <Link
                            v-if="link.url && index> 0 && (data?.meta?.links ? data.meta.links.length !== index+1 : data.links.length !== index+1)"
                            :href="link.url" aria-current="page"
                            class="relative inline-flex items-center px-3 py-1  border dark:border-t-0 dark:border-b-0 dark:text-slate-200 text-sm font-medium"
                            :class="{
                                'z-10 bg-rose-50 dark:bg-rose-500 border-rose-500 text-rose-600 dark:text-white' : link.active,
                                'bg-white hover:bg-gray-50 border-gray-300 text-slate-800 dark:bg-slate-600 dark:hover:bg-slate-800 dark:border-slate-800': !link.active
                                }"
                        >
                            {{ link.label }}
                        </Link>

                        <!--Filler-->
                        <span

                            v-if="link.url === null && index >0 && index < (data?.meta?.links ? data.meta.links.length-1 : data.links.length-1)"
                            class="relative inline-flex items-center px-3 py-1 border ark:bg-slate-600 dark:border-t-0 dark:border-b-0 border-gray-300 bg-white dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium"> ... </span>

                        <!--Next-->
                        <Link v-if="data['meta'] ? data.meta.links.length === index+1 : data.links.length === index+1"
                              :href="link.url ?? '#table'"
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


<style scoped>
@reference "../../../css/app.css";

tbody > tr:first-child > td:first-child {
    border-top-left-radius: 0.5rem;
}

tbody > tr:first-child > td:last-child {
    border-top-right-radius: 0.5rem;
}

tbody > tr:last-child > td:first-child {
    border-bottom-left-radius: 0.5rem;
}

tbody > tr:last-child > td:last-child {
    border-bottom-right-radius: 0.5rem;
}

.action-button {
    @apply hover:scale-110 active:scale-90 dark:p-1 dark:rounded cursor-pointer transition;
}
</style>
