<script setup>
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import {useI18n} from "vue-i18n";

import SimpleButton from "@/Components/Button/SimpleButton.vue";
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue";
import {Link} from "@inertiajs/vue3";

const {t} = useI18n();

const props = defineProps({
    equipmentType: {type: String, required: true},
    equipmentId: {type: [Number, String], required: true},
    areas: {type: Array, default: () => []},
    allAreas: {type: Array, default: () => []},
});

const form = useForm({
    area_ids: props.areas.map((area) => area.id),
});

const save = () => {
    form.put(route('equipment-area.update', {equipmentType: props.equipmentType, equipmentId: props.equipmentId}));
};
</script>

<template>
    <div class="rounded-lg border dark:border-slate-600 p-4">
        <h3 class="font-semibold mb-2 flex items-center space-x-2">
            <font-awesome-icon icon="map-location-dot"/>
            <span>{{ t('equipment.areas') }}</span>
        </h3>
        <p class="text-sm text-slate-500 mb-3">{{ t('equipment.areasDesc') }}</p>

        <MultiSelectInput v-model="form.area_ids" :options="allAreas" optionKey="id" optionLabel="name"/>

        <div class="mt-3 flex flex-wrap gap-2">
            <Link
                v-for="area in areas"
                :key="area.id"
                :href="route('area.index')"
                class="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
            >
                {{ area.name }}
            </Link>
        </div>

        <div class="mt-3 flex justify-end">
            <SimpleButton :label="t('action.save')" color="green" @click="save" :loading="form.processing"/>
        </div>
    </div>
</template>
