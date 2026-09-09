<script setup>
/*Functions*/
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
} from "vue";

/*Component*/
import SimpleButton from "@/Components/Button/SimpleButton.vue";

const emit = defineEmits(['update:modelValue', 'closed', 'open', 'expand', 'timerEnd', 'submit', 'reset'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  /*Size — accepts xs/sm/md/lg/xl/2xl/3xl/4xl/5xl/6xl/7xl/full. `size` is the ta-ui-kit-aligned
  name; `maxWidth` is kept as the original alias since most of the app's ~50 call sites use it.*/
  maxWidth: {
    default: null,
  },
  size: {
    default: null,
  },
  radius: {
    type: String,
    default: "lg", // none | sm | md | lg | full
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  closeButton: {
    type: Boolean,
    default: false,
  },
  closeOnEsc: {
    type: Boolean,
    default: true,
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
  preventScroll: {
    type: Boolean,
    default: true,
  },
  /*beforeClose can return false (or resolve to false) to veto a close attempt — used to guard
  unsaved-changes style flows. Receives the trigger: 'closeButton' | 'esc' | 'backdrop' | 'timer' | 'programmatic'.*/
  beforeClose: {
    type: Function,
    default: null,
  },
  header: {
    type: String,
    default: "",
  },
  subHeader: {
    type: String,
    default: "",
  },
  /*title/description are ta-ui-kit-aligned aliases for header/subHeader.*/
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  /*Renders a small status icon badge beside the header title.*/
  status: {
    type: String,
    default: null, // success | warning | danger | error | info | question
  },
  icon: {
    type: String,
    default: null,
  },
  iconColor: {
    type: String,
    default: null, // success | warning | danger | info | accent
  },
  /*'center'/'alert' stack the header icon/title/description into a centered column — useful for
  confirmation-style dialogs. 'default' keeps the app's existing left-aligned header.*/
  layout: {
    type: String,
    default: "default", // default | center | alert
  },
  actionButtons: {
    type: Array,
    default: () => [],
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  expandable: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: "top",
  },
  centered: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: Number,
    default: 50,
  },
  /*Auto-close countdown in ms. Omit (default null) for no timer.*/
  timer: {
    type: Number,
    default: null,
  },
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
  actionButtonsDef: {
    type: Object,
    default: {
      reset: {
        color: "orange",
        style: "filled",
        title: "",
        iconButton: false
      },
      submit: {
        color: "green",
        style: "filled",
        title: "",
        iconButton: false
      },
      cancel: {
        color: "neutral",
        style: "link-plus",
        title: "",
        iconButton: false
      },
    },
  },
});

/*Showing Status*/
const {closeable, modelValue} = toRefs(props);

/*Fullscreen*/
const isExpanded = ref(false);
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
  dragPosition.value = {x: 0, y: 0};
  emit("expand", isExpanded.value);
};

/*Draggable — pointer-based; drag is reset whenever the modal (re)opens or is expanded.*/
const dragPosition = ref({x: 0, y: 0});
const isDragging = ref(false);
let dragStartX = 0;
let dragStartY = 0;
let dragOriginX = 0;
let dragOriginY = 0;

const onDragStart = (e) => {
  if (!props.draggable || isExpanded.value) return;
  if (e.target.closest("button, a, input, select, textarea")) return;

  isDragging.value = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragOriginX = dragPosition.value.x;
  dragOriginY = dragPosition.value.y;

  window.addEventListener("pointermove", onDragMove);
  window.addEventListener("pointerup", onDragEnd);
};

const onDragMove = (e) => {
  if (!isDragging.value) return;
  dragPosition.value = {
    x: dragOriginX + (e.clientX - dragStartX),
    y: dragOriginY + (e.clientY - dragStartY),
  };
};

const onDragEnd = () => {
  isDragging.value = false;
  window.removeEventListener("pointermove", onDragMove);
  window.removeEventListener("pointerup", onDragEnd);
};

const panelStyle = computed(() => {
  if (isExpanded.value || (dragPosition.value.x === 0 && dragPosition.value.y === 0)) return {};
  return {transform: `translate(${dragPosition.value.x}px, ${dragPosition.value.y}px)`};
});

/*Auto-close timer*/
const timerProgress = ref(100);
const remainingMs = ref(0);
const isTimerPaused = ref(false);
let timerRafId = null;
let lastTimestamp = null;

const startTimer = () => {
  if (!props.timer || props.timer <= 0) return;
  stopTimer();
  remainingMs.value = props.timer;
  timerProgress.value = 100;
  lastTimestamp = performance.now();
  isTimerPaused.value = false;

  const step = (now) => {
    if (!modelValue.value) return;
    if (lastTimestamp !== null) {
      const delta = now - lastTimestamp;
      lastTimestamp = now;
      if (!isTimerPaused.value) {
        remainingMs.value = Math.max(0, remainingMs.value - delta);
        timerProgress.value = Math.max(0, (remainingMs.value / props.timer) * 100);
        if (remainingMs.value <= 0) {
          emit("timerEnd");
          close("timer");
          return;
        }
      }
    } else {
      lastTimestamp = now;
    }
    timerRafId = requestAnimationFrame(step);
  };
  timerRafId = requestAnimationFrame(step);
};

const stopTimer = () => {
  if (timerRafId !== null) {
    cancelAnimationFrame(timerRafId);
    timerRafId = null;
  }
  lastTimestamp = null;
};

const onMouseEnter = () => {
  if (props.pauseOnHover && props.timer) isTimerPaused.value = true;
};
const onMouseLeave = () => {
  if (props.pauseOnHover && props.timer) {
    isTimerPaused.value = false;
    lastTimestamp = performance.now();
  }
};

const close = async (trigger = "programmatic") => {
  if (!closeable.value) return;
  if ((trigger === "esc" && !props.closeOnEsc) || (trigger === "backdrop" && !props.closeOnBackdrop)) return;

  if (props.beforeClose) {
    const canClose = await props.beforeClose(trigger);
    if (canClose === false) return;
  }

  emit("update:modelValue", false);
  emit("closed");
  emit("reset");
  isExpanded.value = false;
};

const closeOnEscape = (e) => {
  if (e.key === "Escape" && modelValue.value) {
    close("esc");
  }
};

onMounted(() => document.addEventListener("keydown", closeOnEscape));
onUnmounted(() => {
  document.removeEventListener("keydown", closeOnEscape);
  if (props.preventScroll) document.body.style.overflow = null;
  stopTimer();
  window.removeEventListener("pointermove", onDragMove);
  window.removeEventListener("pointerup", onDragEnd);
});

watch(
    modelValue,
    () => {
      if (modelValue.value) {
        emit("open");
        dragPosition.value = {x: 0, y: 0};
        isExpanded.value = false;
        if (props.preventScroll) document.body.style.overflow = "hidden";
        if (props.timer) startTimer();
      } else {
        if (props.preventScroll) document.body.style.overflow = null;
        stopTimer();
      }
    },
    {immediate: true}
);

/*Header text/icon — title/status are ta-ui-kit-aligned aliases layered on top of the
app's original header/notification-free props.*/
const resolvedHeader = computed(() => props.title || props.header);
const resolvedSubHeader = computed(() => props.description || props.subHeader);

const STATUS_ICON = {
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-xmark",
  error: "circle-xmark",
  info: "info-circle",
  question: "circle-question",
};

const STATUS_BADGE_CLASSES = {
  success: "text-emerald-600 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-900/40 dark:border-emerald-800",
  warning: "text-amber-600 bg-amber-100 border-amber-200 dark:text-amber-400 dark:bg-amber-900/40 dark:border-amber-800",
  danger: "text-rose-600 bg-rose-100 border-rose-200 dark:text-rose-400 dark:bg-rose-900/40 dark:border-rose-800",
  error: "text-rose-600 bg-rose-100 border-rose-200 dark:text-rose-400 dark:bg-rose-900/40 dark:border-rose-800",
  info: "text-sky-600 bg-sky-100 border-sky-200 dark:text-sky-400 dark:bg-sky-900/40 dark:border-sky-800",
  question: "text-violet-600 bg-violet-100 border-violet-200 dark:text-violet-400 dark:bg-violet-900/40 dark:border-violet-800",
};

const resolvedIcon = computed(() => props.icon || (props.status ? STATUS_ICON[props.status] : null));
const resolvedIconBadgeClass = computed(() => STATUS_BADGE_CLASSES[props.status] ?? STATUS_BADGE_CLASSES.info);
const isCenteredLayout = computed(() => props.layout === "center" || props.layout === "alert");
const effectivePosition = computed(() => (props.centered ? "center" : props.position));

/*Size — accepts the ta-ui-kit scale. Unknown/missing values fall back to "2xl" (the app's
long-standing default) instead of silently producing no max-width class, which is what made
help-panel modals (max-width="3xl", previously unmapped) render full-bleed.*/
const SIZE_MAP = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
  "6xl": "sm:max-w-6xl",
  "7xl": "sm:max-w-7xl",
  full: "sm:max-w-[calc(100vw-3rem)]",
};

const maxWidthClass = computed(() => SIZE_MAP[props.size ?? props.maxWidth] ?? SIZE_MAP["2xl"]);

const RADIUS_MAP = {
  none: "rounded-none",
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-xl",
  full: "rounded-2xl",
};

const radiusClass = computed(() => RADIUS_MAP[props.radius] ?? RADIUS_MAP.lg);

defineExpose({close, toggleExpand, isExpanded});
</script>

<template>
  <teleport to="body">
      <div v-show="modelValue" class="fixed inset-0 flex justify-center overflow-hidden p-3 sm:p-6" :style="{zIndex}" :class="[
                {
                    'items-center': effectivePosition === 'center',
                    'items-start': effectivePosition !== 'center',
                },
            ]" scroll-region>
        <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0"
                    enter-to-class="opacity-100" leave-active-class="ease-in duration-300"
                    leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-show="modelValue" class="fixed inset-0 transform transition-all"
               @click="close('backdrop')">
            <div class="absolute inset-0 bg-slate-900/55 backdrop-blur-[2px]"></div>
          </div>
        </transition>

        <transition enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-300"
                    leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div v-if="modelValue"
               class="relative mx-auto flex max-h-[calc(100dvh-1.5rem)] w-full transform flex-col overflow-hidden border border-slate-300 bg-white shadow-2xl shadow-slate-950/25 transition-all sm:max-h-[calc(100dvh-3rem)] dark:border-slate-500 dark:bg-slate-700"
               :class="[!isExpanded ? maxWidthClass : 'h-full max-h-full', !isExpanded ? radiusClass : 'rounded-none']"
               :style="panelStyle"
               @click.stop
               @mouseenter="onMouseEnter"
               @mouseleave="onMouseLeave">

            <!--Countdown Timer Line-->
            <div v-if="timer" class="absolute top-0 inset-x-0 h-1 overflow-hidden z-30 bg-slate-200 dark:bg-slate-600">
              <div class="h-full bg-sky-500 transition-none origin-left" :style="{width: `${timerProgress}%`}"></div>
            </div>

            <!--Header-->
            <div class="relative z-10 flex min-h-14 items-center bg-slate-100 px-5 py-3 pr-14 text-slate-800 shadow-sm shadow-slate-300/60 select-none dark:bg-slate-800 dark:text-slate-100 dark:shadow-black/20"
                :class="[
                    {'cursor-move': draggable},
                    isCenteredLayout ? 'flex-col items-center text-center pt-7 pb-4' : '',
                ]"
                @pointerdown="onDragStart">
              <div class="flex min-w-0" :class="isCenteredLayout ? 'flex-col items-center gap-2 w-full' : 'items-center gap-3'">
                <!--Status/Icon Badge-->
                <div v-if="resolvedIcon"
                     class="flex shrink-0 items-center justify-center rounded-xl border"
                     :class="[isCenteredLayout ? 'size-11 text-lg' : 'size-9 text-sm', resolvedIconBadgeClass]">
                  <font-awesome-icon :icon="resolvedIcon"/>
                </div>

                <div>
                  <!--Header-->
                  <div v-if="resolvedHeader || $slots.header">
                    <span v-if="resolvedHeader" v-text="resolvedHeader" class="text-xl font-semibold"></span>
                    <slot v-else name="header"></slot>
                  </div>
                  <!--Sub-header-->
                  <div v-if="resolvedSubHeader || $slots.subHeader" class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    <span v-if="resolvedSubHeader" v-text="resolvedSubHeader"></span>
                    <slot v-else name="subHeader"></slot>
                  </div>
                </div>
              </div>

              <!--Top Action Icons-->
              <div class="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center gap-1"
                   :class="[{ 'pr-2 pt-2': isExpanded, 'top-4 translate-y-0': isCenteredLayout }]">
                <!--Maximize Icon-->
                <div v-if="expandable" @click="toggleExpand()" class="flex justify-center items-center cursor-pointer">
                  <font-awesome-icon icon="expand-alt" v-if="isExpanded" class="w-4 h-4 text-slate-600"/>
                  <font-awesome-icon icon="compress-alt" v-else class="w-4 h-4 text-slate-600"/>
                </div>

                <!--Close Button-->
                <button v-if="modelValue && closeButton" type="button" aria-label="Close" @click="close('closeButton')"
                     class="flex size-9 cursor-pointer items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-200 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400/50 dark:text-slate-300 dark:hover:bg-slate-600 dark:hover:text-rose-300">
                  <font-awesome-icon icon="x" class="size-4"/>
                </button>
              </div>
            </div>

            <!--Body-->
            <div class="min-h-0 flex-1 overflow-y-auto bg-white px-5 pt-1 pb-4 text-slate-700 dark:bg-slate-700 dark:text-slate-100"
                :class="isCenteredLayout ? 'text-center' : ''">
              <slot></slot>
            </div>

            <!--Footer-->
            <div v-if="$slots.footer || actionButtons.length > 0"
                 class="flex flex-row justify-center gap-2 border-t border-slate-200 bg-slate-50 px-5 py-4 text-right sm:justify-end dark:border-slate-600 dark:bg-slate-800/70">
              <slot v-if="$slots.footer" name="footer"></slot>
              <div v-else class="flex justify-between items-center">
                <simple-button v-if="
                                    actionButtons.includes('cancel') &&
                                    actionButtonsDef.hasOwnProperty('cancel')
                                " :design="actionButtonsDef.cancel.design" :color="actionButtonsDef.cancel.color"
                               @click="close()">
                                    <span v-if="actionButtonsDef.cancel.iconButton"
                                          v-text="actionButtonsDef.cancel.title ? actionButtonsDef.cancel.title : t('action.cancel')"></span>
                  <slot v-else name="action-cancel-button"></slot>
                </simple-button>
                <div class="flex space-x-2">
                  <simple-button v-if="
                                        actionButtons.includes('reset') &&
                                        actionButtonsDef.hasOwnProperty('reset')
                                    " :design="actionButtonsDef.reset.design" :color="actionButtonsDef.reset.color"
                                 @click="$emit('reset')">
                                        <span v-if="!actionButtonsDef.reset.iconButton"
                                              v-text="actionButtonsDef.reset.title ? actionButtonsDef.reset.title : t('action.reset')"></span>
                    <slot v-else name="action-resesimple-button"></slot>
                  </simple-button>
                  <simple-button v-if="
                                        actionButtons.includes('submit') &&
                                        actionButtonsDef.hasOwnProperty('submit')
                                    " :design="actionButtonsDef.submit.design" :color="actionButtonsDef.submit.color"
                                 @click="$emit('submit')">
                                        <span v-if="!actionButtonsDef.submit.iconButton"
                                              v-text="actionButtonsDef.submit.title ? actionButtonsDef.submit.title : t('action.submit')"></span>
                    <slot v-else name="action-submisimple-button"></slot>
                  </simple-button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
  </teleport>
</template>
