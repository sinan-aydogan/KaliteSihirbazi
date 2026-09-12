<script setup>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import {router} from '@inertiajs/vue3';
import Menu from "../menu";

// Components
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"

// Props
defineProps({
    tableData: {
        type: Object,
        default: {}
    },
})

/*Multi-lang*/
import Translates from "./translates"
const {t, tm} = Translates();
const {links} = Menu()

/*Table*/
const tableHeaders = [
    {id: 'name', label: tm('term.name')},
    {id: 'phone', label: tm('term.phone')},
    {id: 'email', label: tm('term.email')},
]

/*Deleted Time*/
import {useTimeAgo} from '@vueuse/core'

const timeAgo = (time) => {
    return useTimeAgo(time).value
}
</script>

<template>
    <setting-layout :title="tm('title.deletedPage.title')" :sub-title="tm('title.deletedPage.subTitle')" :links="links">
        <template #actionArea>
            <simple-button type="route" :link="route('calibration-firm.index')" color="blue">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="$t('term.returnToList')"/>
            </simple-button>
        </template>
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @delete="router.delete(route('calibration-firm.permanent-delete', $event.id))"
            @restore="router.visit(route('calibration-firm.restore', $event.id))"
            restore-action
            delete-action
        >
            <!--Deleted At-->
            <template #deleted_at="{props}">
                {{ timeAgo(props.deleted_at) }}
            </template>
        </Table>
    </setting-layout>
</template>
