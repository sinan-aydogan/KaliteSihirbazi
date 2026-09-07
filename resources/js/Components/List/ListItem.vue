<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    swipeable: {
        type: Boolean,
        default: true
    },
    actionsWidth: {
        type: Number,
        default: 128
    },
})

const emit = defineEmits(['open', 'full-swipe'])

const translateX = ref(0)
const dragging = ref(false)
const isOpen = ref(false)
const startX = ref(0)
const startTranslate = ref(0)
const rawDelta = ref(0)
const dragMoved = ref(false)
const suppressNextClick = ref(false)

const maxOffset = computed(() => -props.actionsWidth)
/*A deliberate extra pull past the fully-open position commits the row's primary action, mirroring the two-stage swipe (reveal, then commit) this was modelled after.*/
const fullSwipeOffset = computed(() => maxOffset.value - props.actionsWidth)
const clamp = (value) => Math.min(0, Math.max(maxOffset.value, value))

const onPointerDown = (event) => {
    if (!props.swipeable) return
    dragging.value = true
    dragMoved.value = false
    startX.value = event.clientX
    startTranslate.value = translateX.value
    event.currentTarget.setPointerCapture?.(event.pointerId)
}

const onPointerMove = (event) => {
    if (!dragging.value) return
    rawDelta.value = startTranslate.value + (event.clientX - startX.value)
    if (Math.abs(event.clientX - startX.value) > 4) dragMoved.value = true
    translateX.value = clamp(rawDelta.value)
}

const onPointerUp = () => {
    if (!dragging.value) return
    dragging.value = false
    if (dragMoved.value) suppressNextClick.value = true

    if (rawDelta.value <= fullSwipeOffset.value) {
        translateX.value = 0
        isOpen.value = false
        emit('full-swipe')
        return
    }

    const shouldOpen = translateX.value < maxOffset.value / 2
    translateX.value = shouldOpen ? maxOffset.value : 0
    if (shouldOpen && !isOpen.value) emit('open')
    isOpen.value = shouldOpen
}

const close = () => {
    translateX.value = 0
    isOpen.value = false
}

const open = () => {
    translateX.value = maxOffset.value
    if (!isOpen.value) emit('open')
    isOpen.value = true
}

const toggleOpen = () => isOpen.value ? close() : open()

const onContentClick = () => {
    if (suppressNextClick.value) {
        suppressNextClick.value = false
        return
    }
    if (isOpen.value) close()
}

defineExpose({close})
</script>

<template>
    <li class="relative overflow-hidden">
        <!--Actions layer, revealed by swiping the content left (or tapping the more-actions button)-->
        <div v-if="$slots.actions" class="absolute inset-y-0 right-0 flex items-stretch"
             :style="{width: actionsWidth + 'px'}">
            <slot name="actions" :close="close"/>
        </div>

        <!--Content layer-->
        <div
            class="relative bg-white dark:bg-slate-800 touch-pan-y select-none"
            :class="[
                !dragging && 'transition-transform duration-200 ease-out',
                swipeable && $slots.actions && ['cursor-pointer', 'pr-8']
            ]"
            :style="{transform: `translateX(${translateX}px)`}"
            @pointerdown="onPointerDown"
            @pointermove="onPointerMove"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
            @click="onContentClick"
        >
            <slot/>

            <!--More-actions affordance: makes the swipe gesture discoverable-->
            <button
                v-if="swipeable && $slots.actions"
                type="button"
                class="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:text-slate-500 dark:hover:text-slate-300 dark:hover:bg-slate-700"
                @pointerdown.stop
                @click.stop="toggleOpen"
            >
                <font-awesome-icon icon="ellipsis-vertical"/>
            </button>
        </div>
    </li>
</template>
