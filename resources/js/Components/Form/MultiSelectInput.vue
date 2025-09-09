<script setup>
import {computed, ref, watch, nextTick, onMounted, onBeforeUnmount} from "vue";
import {
    VClosePopper,
    Dropdown
} from 'floating-vue'
import 'floating-vue/dist/style.css'

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => []
    },
    options: {
        type: Array,
        default: () => []
    },
    optionKey: {
        type: String,
        default: "id"
    },
    optionLabel: {
        type: String,
        default: "label"
    },
    selectText: {
        type: String,
        default: ''
    },
    emitObject: {
        type: Boolean,
        default: false
    },
    disabled: Boolean,
    // maxVisible: how many selected items to show in the input area before collapsing to +N
    maxVisible: {
        type: Number,
        default: 5
    },
    // maxSelectable: limit how many items can be selected (null or 0 means unlimited)
    maxSelectable: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['update:modelValue', 'changed'])

const showOptions = ref(false);
const optionsArea = ref(null);
const selectedArea = ref(null);
const visibleLimit = ref(props.maxVisible);
let ro = null;

const toggle = () => {
    if (!props.disabled) showOptions.value = !showOptions.value
}

// normalize selected values: if emitObject -> modelValue contains objects, else keys
const selectedItems = computed(() => {
    if (!props.modelValue || props.modelValue.length === 0) return [];
    if (props.emitObject) {
        return props.modelValue;
    }
    // map keys to actual option objects when possible
    return props.modelValue.map(val => props.options.find(o => o[props.optionKey] === val)).filter(Boolean);
})

const selectedKeysSet = computed(() => new Set(selectedItems.value.map(i => i[props.optionKey])));

const isSelected = (option) => selectedKeysSet.value.has(option[props.optionKey]);

const selectedCount = computed(() => selectedItems.value.length);

const canSelectMore = computed(() => {
    if (!props.maxSelectable || props.maxSelectable <= 0) return true;
    return selectedCount.value < props.maxSelectable;
})

const selectToggle = (option) => {
    const key = option[props.optionKey];
    const currentlySelected = isSelected(option);

    if (currentlySelected) {
        // remove
        if (props.emitObject) {
            const next = props.modelValue.filter(i => i[props.optionKey] !== key);
            emit('update:modelValue', next);
        } else {
            const next = props.modelValue.filter(i => i !== key);
            emit('update:modelValue', next);
        }
    } else {
        if (!canSelectMore.value) return; // respect maxSelectable
        if (props.emitObject) {
            const next = [...props.modelValue, option];
            emit('update:modelValue', next);
        } else {
            const next = [...props.modelValue, key];
            emit('update:modelValue', next);
        }
    }
}

// options sorted with selected items first (preserve original order within groups)
const sortedOptions = computed(() => {
    const selected = [];
    const others = [];
    for (const o of props.options) {
        if (isSelected(o)) selected.push(o);
        else others.push(o);
    }
    return [...selected, ...others];
})

// Display string/array for the input area: show up to maxVisible labels and +N
const visibleLabels = computed(() => {
    const labels = selectedItems.value.map(i => i[props.optionLabel]);
    if (labels.length === 0) return [];
    const limit = Math.max(0, Math.min(visibleLimit.value || props.maxVisible, labels.length));
    if (labels.length <= limit) return labels;
    // show limit-1 items and a +N badge
    const visible = labels.slice(0, Math.max(0, limit - 1));
    const remaining = labels.length - (limit - 1);
    visible.push(`+${remaining}`);
    return visible;
})

const measureCache = new Map();
const measurerEl = (() => {
    const el = document.createElement('span');
    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.whiteSpace = 'nowrap';
    el.className = 'px-2 py-0.5 rounded text-sm';
    document.body.appendChild(el);
    return el;
})();

const measureTextWidth = (text) => {
    if (measureCache.has(text)) return measureCache.get(text);
    measurerEl.textContent = text;
    const w = Math.ceil(measurerEl.getBoundingClientRect().width);
    measureCache.set(text, w);
    return w;
}

const adjustVisibleCount = async () => {
    await nextTick();
    if (!selectedArea.value) return;
    const el = selectedArea.value;
    const labels = selectedItems.value.map(i => i[props.optionLabel]);
    if (!labels || labels.length === 0) {
        visibleLimit.value = 0;
        return;
    }

    // container width available (subtract small padding allowance)
    const containerWidth = Math.floor(el.clientWidth) - 8;
    // gap between badges (tailwind gap-1 = 0.25rem = 4px typical)
    const gap = 4;

    // try to fit as many badges as possible while keeping +N visible when needed
    let cumulative = 0;
    let fitted = 0;
    for (let i = 0; i < labels.length; i++) {
        const lbl = labels[i];
        const w = measureTextWidth(lbl);
        const remaining = labels.length - (i + 1);
        const plusW = remaining > 0 ? measureTextWidth(`+${remaining}`) : 0;

        const needed = cumulative + (i > 0 ? gap : 0) + w + (remaining > 0 ? gap + plusW : 0);
        if (needed <= containerWidth) {
            cumulative += (i > 0 ? gap : 0) + w;
            fitted = i + 1; // number of item badges that fit without plus
            continue;
        }
        // cannot fit this item while keeping plus visible -> stop
        break;
    }

    if (fitted === labels.length) {
        // all fit
        visibleLimit.value = labels.length;
    } else {
        // show fitted items plus +N badge; visibleLimit expects total slots (items + plus)
        const slots = Math.max(1, fitted + 1);
        // also do not exceed props.maxVisible
        visibleLimit.value = Math.min(slots, Math.max(1, props.maxVisible));
    }
}

onMounted(() => {
    // observe resizing of the selected area so we can adjust badges
    if (window.ResizeObserver && selectedArea.value) {
        ro = new ResizeObserver(() => adjustVisibleCount());
        ro.observe(selectedArea.value);
    } else {
        window.addEventListener('resize', adjustVisibleCount);
    }
    // initial adjust
    adjustVisibleCount();
});

onBeforeUnmount(() => {
    if (ro && selectedArea.value) ro.unobserve(selectedArea.value);
    window.removeEventListener('resize', adjustVisibleCount);
    if (measurerEl && measurerEl.parentNode) measurerEl.parentNode.removeChild(measurerEl);
});

// recompute when selection or maxVisible changes
watch([selectedItems, () => props.maxVisible], () => {
    adjustVisibleCount();
}, { immediate: true });

const clear = () => {
    emit('update:modelValue', [])
    showOptions.value = false
}

watch(() => props.modelValue, () => {
    emit('changed')
})
</script>

<template>
    <Dropdown v-model="showOptions">
        <div @click="toggle"
             class="flex justify-between items-center space-x-2 h-10 dark:bg-slate-900/30 border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-lg cursor-pointer select-none w-full"
             :class="{
                'opacity-50 pointer-events-none': disabled
            }">
            <div class="overflow-hidden whitespace-nowrap flex items-center gap-2 flex-1">
                <template v-if="!selectedCount">
                    <span v-text="selectText.length > 0 ? selectText : t('action.select')"></span>
                </template>

                <template v-else>
                    <slot v-if="$slots.hasOwnProperty('selected')" name="selected" :props="selectedItems"></slot>
                    <slot v-else-if="$slots.hasOwnProperty('both')" name="both" :props="selectedItems"></slot>
                    <div v-else class="flex items-center gap-1 overflow-hidden">
                        <template v-for="(lbl, idx) in visibleLabels" :key="idx">
                            <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-sm truncate" style="max-width:10rem">{{ lbl }}</span>
                        </template>
                    </div>
                </template>
            </div>

            <div class="flex items-center space-x-2">
                <font-awesome-icon v-if="selectedCount" @click.stop="clear" icon="circle-xmark" class="hover:text-rose-600 active:scale-90 duration-100"/>
                <font-awesome-icon icon="chevron-down"/>
            </div>
        </div>

        <template #popper>
            <div v-if="options.length > 0" class="max-h-[20rem] overflow-y-auto" ref="optionsArea">
                <template v-for="(option,index) in sortedOptions" :key="option[optionKey]">
                    <div @click.stop="selectToggle(option)"
                         class="select-option flex items-center justify-between"
                         :class="isSelected(option) ? 'select-option__active' : ''"
                    >
                        <div class="flex items-center gap-2">
                            <input type="checkbox" :checked="isSelected(option)" @change.prevent="selectToggle(option)" />
                            <div>
                                <slot v-if="$slots.hasOwnProperty('option')" name="option" :props="option"></slot>
                                <slot v-else-if="$slots.hasOwnProperty('both')" name="both" :props="option"></slot>
                                <span v-else v-text="option[optionLabel]"></span>
                            </div>
                        </div>

                        <div>
                            <font-awesome-icon icon="circle-check" v-if="isSelected(option)"/>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </Dropdown>
</template>

<style scoped lang="sass">
@reference "../../../css/app.css";

.select-option
    @apply flex justify-between items-center border-b dark:border-slate-600 last:border-b-0 last:rounded-b first:rounded-t py-1 px-2 hover:bg-slate-100 dark:hover:bg-slate-600/75 cursor-pointer transition-all whitespace-nowrap

.select-option__active
    @apply bg-slate-100 dark:bg-slate-600/75

</style>
