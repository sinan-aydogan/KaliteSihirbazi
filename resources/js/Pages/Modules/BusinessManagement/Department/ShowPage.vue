<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {Link, router} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue";

// Props
const props = defineProps({
    department: Object,
    employeeList: Array
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

/*Table*/
const tableHeaders = [
    {
        id: 'code',
        label: tm('term.employeeCode')
    },
    {
        id: 'employeeName',
        label: tm('term.employeeName')
    }
]

const handleDelete = () => {
    router.delete(route('department.destroy', props.department.id))
}
</script>

<template>
    <app-layout :title="department.name">

        <template #actionArea>
            <simple-button @click="handleDelete" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="tm('action.delete')"/>
            </simple-button>

            <simple-button type="route" :link="route('department.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <template #header>
            <!--Department Name-->
            <div class="flex items-center space-x-4">
                <!--Name-->
                <span v-text="department.name"
                      class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
                <!--Code-->
                <div class="flex space-x-1 items-center border px-2 py-1 rounded-lg">
                    <font-awesome-icon icon="fa-solid fa-fingerprint"/>
                    <span v-text="department.code" class="text-sm uppercase"/>
                </div>
            </div>
            <!--Manager-->
            <div v-if="department['manager']" class="flex items-center space-x-1 text-xs mt-1">
                <font-awesome-icon icon="fa-solid fa-user-shield" :class="`before:content-['${tm('term.manager')}']`"/>
                <!--Manager Name-->
                <Link :href="route('employee.show', department.manager.id)" v-text="department.manager.employeeName"/>
            </div>
            <div v-else>
                {{ tm('term.noManagerAppointed') }}
            </div>
        </template>

        <div class="grid grid-cols-12">

            <!--Employee List-->
            <div class="col-span-6">
                <div class="mb-2 font-semibold text-xl">{{ tm('term.employees') }}</div>

                <Table :data="department.employees" :headers="tableHeaders">
                </Table>
            </div>

        </div>
    </app-layout>
</template>
