<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router} from "@inertiajs/vue3";

// Components
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"

defineProps({
    tableData: {type: Object, default: () => ({})},
})

// Multi-lang
import Translates from "./translates"
const {t, tm} = Translates();

const tableHeaders = [
    {id: 'code', label: tm('term.code'), width: 'w-32'},
    {id: 'name', label: tm('term.name')},
    {id: 'device_type_id', label: tm('term.type')},
    {id: 'department_id', label: tm('term.department')},
]

import {useTimeAgo} from '@vueuse/core'

const timeAgo = (time) => useTimeAgo(time).value;
</script>

<template>
    <app-layout :title="tm('title.deletedPage.title')" :sub-title="tm('title.deletedPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('device.index')" color="blue">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.returnToList')"/>
            </simple-button>
        </template>
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @delete="router.delete(route('device.permanent-delete', $event.id))"
            @restore="router.visit(route('device.restore', $event.id))"
            restore-action
            delete-action
        >
            <template #device_type_id="{props}">
                <span v-if="props.type" v-text="props.type.name"/>
            </template>
            <template #department_id="{props}">
                <span v-if="props.department" v-text="props.department.name"/>
            </template>
            <template #deleted_at="{props}">
                {{ timeAgo(props.deleted_at) }}
            </template>
        </Table>
    </app-layout>
</template>
