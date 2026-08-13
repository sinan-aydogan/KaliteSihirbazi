<script setup>
import {computed, ref} from 'vue';
import {Link, router} from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import SimpleButton from '@/Components/Button/SimpleButton.vue';
import Table from '@/Components/Table/Table.vue';
import Translates from './translates';

const props = defineProps({department: Object});
const {tm} = Translates();
const employmentTypes = computed(() => [
    {id: 'fullTime', label: tm('term.fullTime')},
    {id: 'partTime', label: tm('term.partTime')},
    {id: 'seasonal', label: tm('term.seasonal')},
    {id: 'intern', label: tm('term.intern')},
    {id: 'contracted', label: tm('term.contracted')},
    {id: 'dailyWage', label: tm('term.dailyWage')},
    {id: 'handicappedStaff', label: tm('term.handicappedStaff')},
    {id: 'convictStaff', label: tm('term.convictStaff')},
]);

const selectedFilter = ref({type: 'all', value: null});
const employees = computed(() => props.department.employees ?? []);
const employeeCount = computed(() => employees.value.length);
const womenCount = computed(() => employees.value.filter((employee) => employee.sex === 'female').length);
const menCount = computed(() => employees.value.filter((employee) => employee.sex === 'male').length);
const onLeaveCount = computed(() => employees.value.filter((employee) => ['onLeave', 'izinli'].includes(employee.status)).length);
const employmentTypeCounts = computed(() => employmentTypes.value.map((type) => ({
    ...type,
    count: employees.value.filter((employee) => employee.employment_type === type.id).length,
})).filter((type) => type.count > 0));

const filteredEmployees = computed(() => {
    const {type, value} = selectedFilter.value;
    if (type === 'sex') return employees.value.filter((employee) => employee.sex === value);
    if (type === 'leave') return employees.value.filter((employee) => ['onLeave', 'izinli'].includes(employee.status));
    if (type === 'employment') return employees.value.filter((employee) => employee.employment_type === value);
    return employees.value;
});

const setFilter = (type, value = null) => {
    selectedFilter.value = selectedFilter.value.type === type && selectedFilter.value.value === value
        ? {type: 'all', value: null}
        : {type, value};
};
const isSelected = (type, value = null) => selectedFilter.value.type === type && selectedFilter.value.value === value;
const employmentLabel = (value) => employmentTypes.value.find((type) => type.id === value)?.label ?? value ?? '—';
const tableHeaders = [
    {id: 'code', label: tm('term.employeeCode')},
    {id: 'employeeName', label: tm('term.employeeName')},
    {id: 'sex', label: tm('term.gender')},
    {id: 'employment_type', label: tm('term.employmentType')},
    {id: 'status', label: tm('term.status')},
];

const handleDelete = () => router.delete(route('department.destroy', props.department.id));
</script>

<template>
    <AppLayout :title="department.name">
        <template #actionArea>
            <SimpleButton @click="handleDelete" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="tm('action.delete')"/>
            </SimpleButton>
            <SimpleButton type="route" :link="route('department.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </SimpleButton>
        </template>

        <template #header>
            <div>
                <div class="flex items-center gap-4">
                    <span class="text-xl font-semibold leading-none text-slate-800 dark:text-slate-200" v-text="department.name"/>
                    <div class="flex items-center gap-1 rounded-lg border border-slate-300 px-2 py-1 dark:border-slate-600">
                        <font-awesome-icon icon="fa-solid fa-fingerprint"/>
                        <span class="text-sm uppercase" v-text="department.code"/>
                    </div>
                </div>
                <div v-if="department.manager" class="mt-1 flex items-center gap-1 text-xs">
                    <font-awesome-icon icon="fa-solid fa-user-shield"/>
                    <Link :href="route('employee-personal-info.index', department.manager.id)" v-text="department.manager.employeeName"/>
                </div>
                <div v-else class="mt-1 text-xs text-slate-500" v-text="tm('term.noManagerAppointed')"/>
            </div>
        </template>

        <div class="mb-6 flex select-none overflow-x-auto pb-1">
            <button type="button" class="flex items-center gap-2 whitespace-nowrap rounded-md border border-rose-500 bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow-sm dark:bg-rose-600">
                <span v-text="tm('term.employees')"/>
                <span class="rounded-full bg-white/25 px-2 py-0.5 text-xs font-bold" v-text="employeeCount"/>
            </button>
        </div>

        <div class="mb-5 grid gap-3 md:grid-cols-3">
            <section class="rounded-xl border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-600 dark:bg-slate-800">
                <div class="mb-3 flex items-center justify-between">
                    <h3 class="font-semibold" v-text="tm('term.genderDistribution')"/>
                    <font-awesome-icon icon="users" class="text-slate-400"/>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <button type="button" @click="setFilter('sex', 'female')" class="rounded-lg border p-3 text-left transition" :class="isSelected('sex', 'female') ? 'border-pink-500 bg-pink-50 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300' : 'border-slate-200 hover:border-pink-300 dark:border-slate-600'">
                        <span class="block text-2xl font-bold" v-text="womenCount"/><span class="text-sm" v-text="tm('term.women')"/>
                    </button>
                    <button type="button" @click="setFilter('sex', 'male')" class="rounded-lg border p-3 text-left transition" :class="isSelected('sex', 'male') ? 'border-sky-500 bg-sky-50 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300' : 'border-slate-200 hover:border-sky-300 dark:border-slate-600'">
                        <span class="block text-2xl font-bold" v-text="menCount"/><span class="text-sm" v-text="tm('term.men')"/>
                    </button>
                </div>
            </section>

            <button type="button" @click="setFilter('leave')" class="rounded-xl border bg-white p-4 text-left shadow-sm transition dark:bg-slate-800" :class="isSelected('leave') ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-300 hover:border-amber-400 dark:border-slate-600'">
                <div class="flex h-full items-center justify-between">
                    <div><span class="block text-4xl font-bold" v-text="onLeaveCount"/><span class="text-sm text-slate-500 dark:text-slate-400" v-text="tm('term.onLeaveEmployees')"/></div>
                    <font-awesome-icon icon="calendar-days" class="text-3xl text-amber-500"/>
                </div>
            </button>

            <section class="rounded-xl border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-600 dark:bg-slate-800">
                <h3 class="mb-2 font-semibold" v-text="tm('term.employmentTypes')"/>
                <div v-if="employmentTypeCounts.length" class="space-y-1">
                    <button v-for="type in employmentTypeCounts" :key="type.id" type="button" @click="setFilter('employment', type.id)" class="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm transition" :class="isSelected('employment', type.id) ? 'bg-rose-500 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-700'">
                        <span v-text="type.label"/><span class="font-bold" v-text="type.count"/>
                    </button>
                </div>
                <p v-else class="text-sm text-slate-500" v-text="tm('term.noEmploymentType')"/>
            </section>
        </div>

        <div v-if="selectedFilter.type !== 'all'" class="mb-3 flex justify-end">
            <button type="button" @click="setFilter('all')" class="text-sm font-medium text-rose-600 hover:underline dark:text-rose-400" v-text="tm('action.clearFilter')"/>
        </div>

        <Table :data="filteredEmployees" :headers="tableHeaders" show-action @view="router.visit(route('employee-personal-info.index', $event.id))">
            <template #employment_type="{props: employee}">{{ employmentLabel(employee.employment_type) }}</template>
            <template #sex="{props: employee}">{{ employee.sex === 'female' ? tm('term.women') : employee.sex === 'male' ? tm('term.men') : '—' }}</template>
        </Table>
    </AppLayout>
</template>
