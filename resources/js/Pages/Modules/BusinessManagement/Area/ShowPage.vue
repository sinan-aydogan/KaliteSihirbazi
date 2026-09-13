<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed} from "vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    data: {type: Object, required: true},
})

import Translates from "./translates"
const {t, tm} = Translates();

const equipmentList = computed(() => [
    ...(props.data.devices ?? []).map((item) => ({...item, kind: 'device', route: 'device.show'})),
    ...(props.data.machines ?? []).map((item) => ({...item, kind: 'machine', route: 'machine.show'})),
    ...(props.data.measurement_devices ?? []).map((item) => ({...item, kind: 'measurement-device', route: 'measurement-device.show', name: `${item.brand ?? ''} ${item.model ?? ''}`.trim() || item.code})),
])
</script>

<template>
    <app-layout :title="data.name">
        <template #actionArea>
            <simple-button type="route" :link="route('area.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <template #header>
            <div class="flex items-center space-x-4">
                <span v-text="data.name" class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"/>
            </div>
            <div class="flex space-x-3 text-xs items-center mt-1">
                <div v-if="data.department" class="flex items-center space-x-1">
                    <font-awesome-icon icon="fa-solid fa-sitemap"/>
                    <span v-text="data.department.name"></span>
                </div>
                <div v-if="data.responsible" class="flex items-center space-x-1">
                    <font-awesome-icon icon="fa-solid fa-user-shield"/>
                    <span v-text="data.responsible.name"></span>
                </div>
            </div>
        </template>

        <div class="rounded-lg border dark:border-slate-600 p-4">
            <h3 class="font-semibold mb-3 flex items-center space-x-2">
                <font-awesome-icon icon="map-location-dot"/>
                <span>{{ tm('equipment.equipmentInArea') }}</span>
            </h3>

            <ul class="divide-y dark:divide-slate-600">
                <li v-for="item in equipmentList" :key="item.kind + '-' + item.id" class="py-2 flex items-center justify-between">
                    <Link :href="route(item.route, item.id)" class="hover:underline">
                        {{ item.name || item.code }}
                        <span class="text-xs text-slate-500 ml-1">({{ item.code }})</span>
                    </Link>
                </li>
                <li v-if="!equipmentList.length" class="py-2 text-sm text-slate-400">{{ tm('equipment.noEquipment') }}</li>
            </ul>
        </div>
    </app-layout>
</template>
