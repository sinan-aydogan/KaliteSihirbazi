<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router} from "@inertiajs/vue3";

import SimpleButton from "@/Components/Button/SimpleButton.vue"
import EquipmentAreaAssignment from "@/Components/Equipment/EquipmentAreaAssignment.vue";
import EquipmentOperatorAuthorizations from "@/Components/Equipment/EquipmentOperatorAuthorizations.vue";

const props = defineProps({
    data: {type: Object, required: true},
    allAreas: {type: Array, default: () => []},
    employees: {type: Array, default: () => []},
})

import Translates from "./translates"
const {t, tm} = Translates();

const handleDelete = () => {
    router.delete(route('machine.destroy', props.data.id))
}
</script>

<template>
    <app-layout :title="data.name">
        <template #actionArea>
            <simple-button @click="handleDelete" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="tm('action.delete')"/>
            </simple-button>

            <simple-button type="route" :link="route('machine.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <template #header>
            <div class="flex items-center space-x-4">
                <span v-text="data.name" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
                <div class="flex space-x-1 items-center border px-2 py-1 rounded-lg">
                    <font-awesome-icon icon="fa-solid fa-fingerprint"/>
                    <span v-text="data.code" class="text-sm uppercase"/>
                </div>
            </div>
            <div class="flex space-x-3 text-xs items-center mt-1">
                <div v-if="data.type" class="flex items-center space-x-1">
                    <font-awesome-icon icon="fa-solid fa-trowel-bricks"/>
                    <span v-text="data.type.name"></span>
                </div>
                <div v-if="data.department" class="flex items-center space-x-1">
                    <font-awesome-icon icon="fa-solid fa-sitemap"/>
                    <span v-text="data.department.name"></span>
                </div>
                <div v-if="data.responsible" class="flex items-center space-x-1">
                    <font-awesome-icon icon="fa-solid fa-user-shield"/>
                    <span v-text="data.responsible.employeeName"></span>
                </div>
            </div>
        </template>

        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-6">
                <EquipmentAreaAssignment equipment-type="machine" :equipment-id="data.id" :areas="data.areas" :all-areas="allAreas"/>
            </div>
            <div class="col-span-12 md:col-span-6">
                <EquipmentOperatorAuthorizations equipment-type="machine" :equipment-id="data.id" :authorizations="data.operator_authorizations" :employees="employees"/>
            </div>
        </div>
    </app-layout>
</template>
