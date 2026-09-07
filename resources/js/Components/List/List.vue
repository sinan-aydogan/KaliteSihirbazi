<script setup>
import {useI18n} from "vue-i18n";
import ListItem from "./ListItem.vue";

const {t} = useI18n();

const props = defineProps({
    items: {
        type: Array,
        default: () => []
    },
    itemKey: {
        type: String,
        default: 'id'
    },
    swipeable: {
        type: Boolean,
        default: true
    },
    actionsWidth: {
        type: Number,
        default: 128
    },
    emptyText: {
        type: String,
        default: null
    },
})

const itemRefs = {}
const setItemRef = (key, el) => {
    if (el) itemRefs[key] = el
    else delete itemRefs[key]
}

const closeOthers = (exceptKey) => {
    Object.entries(itemRefs).forEach(([key, el]) => {
        if (key !== String(exceptKey)) el?.close?.()
    })
}

const emit = defineEmits(['full-swipe'])
</script>

<template>
    <ul class="flex flex-col rounded-lg border border-slate-200 dark:border-slate-700 divide-y divide-slate-200 dark:divide-slate-700 overflow-hidden">
        <template v-if="items.length">
            <ListItem
                v-for="item in items"
                :key="item[itemKey]"
                :ref="(el) => setItemRef(item[itemKey], el)"
                :swipeable="swipeable"
                :actions-width="actionsWidth"
                @open="closeOthers(item[itemKey])"
                @full-swipe="emit('full-swipe', item)"
            >
                <slot :item="item"/>
                <template v-if="$slots.actions" #actions="{close}">
                    <slot name="actions" :item="item" :close="close"/>
                </template>
            </ListItem>
        </template>
        <li v-else class="flex justify-center items-center gap-2 p-4 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300">
            <font-awesome-icon icon="info-circle" class="w-5 h-5"/>
            <span class="font-semibold text-sm" v-text="emptyText ?? t('message.feedback.noResults')"/>
        </li>
    </ul>
</template>
