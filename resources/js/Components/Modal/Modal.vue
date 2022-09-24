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

const emit = defineEmits(['close', 'submit', 'reset'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    default: "2xl",
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  closeButton: {
    type: Boolean,
    default: false,
  },
  header: {
    type: String,
    default: "",
  },
  subHeader: {
    type: String,
    default: "",
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
  notification: {
    type: Boolean,
    default: false,
  },
  notificationType: {
    type: String,
    default: "",
  },
  notificationTitle: {
    type: String,
    default: "",
  },
  notificationMessage: {
    type: String,
    default: "",
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
const {closeable, modelValue, maxWidth} = toRefs(props);
const close = () => {
  if (closeable.value) {
    emit("update:modelValue", false);
    emit("reset");
    isExpanded.value = false;
  }
};

const closeOnEscape = (e) => {
  if (e.key === "Escape" && modelValue.value && closeable.value) {
    close();
  }
};

onMounted(() => document.addEventListener("keydown", closeOnEscape));
onUnmounted(() => {
  document.removeEventListener("keydown", closeOnEscape);
  document.body.style.overflow = null;
});

watch(
    modelValue,
    () => {
      if (modelValue.value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    },
    {immediate: true}
);

/*Icon List*/
const iconList = [
  {
    key: "success",
    content:
        '<svg fill="transparent" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
        "</svg>",
    color: "text-green-500",
    border: "border-green-500",
  },
  {
    key: "warning",
    content:
        '<svg fill="transparent" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />\n' +
        "</svg>",
    color: "text-yellow-500",
    border: "border-yellow-500",
  },
  {
    key: "error",
    content:
        '<svg fill="transparent" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
        "</svg>",
    color: "text-red-500",
    border: "border-red-500",
  },
  {
    key: "info",
    content:
        '<svg fill="transparent" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
        "</svg>",
    color: "text-blue-500",
    border: "border-blue-500",
  },
  {
    key: "question",
    content:
        '<svg fill="transparent" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
        "</svg>",
    color: "text-indigo-500",
    border: "border-indigo-500",
  },
];

/*Style*/
const maxWidthClass = computed(() => {
  return {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
  }[maxWidth.value];
});

/*Drag*/
const width = ref(window.innerWidth);
const height = ref(window.innerHeight);

window.onresize = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

const modalContainer = ref(null);
const clickDiff = ref({x: 0, y: 0});

const dragStart = (e) => {
  let modal = modalContainer.value.getBoundingClientRect();
  clickDiff.value = {
    x: e.clientX - modal.left,
    y: e.clientY - modal.top,
  };
};

const dragEnd = (e) => {
  let diff = {x: 0, y: 0};
  let modal = modalContainer.value.getBoundingClientRect();
  /*X origin*/
  if (e.clientX - clickDiff.value.x < 0) {
    diff.x = 0;
  } else if (e.clientX > width.value - (modal.width - clickDiff.value.x)) {
    diff.x = width.value - modal.width;
  } else {
    diff.x = e.clientX - clickDiff.value.x;
  }

  /*Y origin*/
  if (e.clientY - clickDiff.value.y < 0) {
    diff.y = 0;
  } else if (
      e.clientY >
      height.value - (modal.height + clickDiff.value.y)
  ) {
    diff.y = height.value - (modal.height + clickDiff.value.y + 10);
  } else {
    diff.y = e.clientY - clickDiff.value.y;
  }

  modalContainer.value.style.left = diff.x + "px";
  modalContainer.value.style.top = diff.y + "px";
};

/*Fullscreen*/
const isExpanded = ref(false);
const defaultStyle = ref(null);
const updateSize = () => {
  if (!isExpanded) {
    defaultStyle.value = modelValue.value.style;
  }
  if (modalContainer.value) {
    if (isExpanded.value) {
      modalContainer.value.style.width = width.value + "px";
      modalContainer.value.style.height = height.value + "px";
      modalContainer.value.style.padding = "10px";
    } else {
      modalContainer.value.style = defaultStyle.value
          ? defaultStyle.value
          : "";
    }
  }
};

watch(
    [width, height],
    () => {
      updateSize();
    },
    {immediate: true}
);

</script>

<template>
  <teleport to="body">
    <transition leave-active-class="duration-200">
      <div v-show="modelValue" class="fixed flex inset-0 overflow-y-auto sm:px-0 z-50" :class="[
                {
                    'items-center justify-center': position === 'center',
                },
            ]" scroll-region>
        <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0"
                    enter-to-class="opacity-100" leave-active-class="ease-in duration-300"
                    leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-show="modelValue" class="fixed inset-0 transform transition-all"
               @click="closeable ? close() : ''">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
        </transition>

        <transition enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-300"
                    leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div id="draggable " v-if="modelValue"
               class="relative flex h-min max-w-[calc(100%-25px)] flex-col mx-auto transform transition-all w-full"
               :class="[!isExpanded ? maxWidthClass + ' m-6' : '']" :draggable="draggable"
               @dragstart="dragStart($event)" @dragend="dragEnd($event)" ref="modalContainer">
            <!--Header-->
            <div
                class="flex space-y-1 border-b dark:border-slate-500/75 items-center px-4 py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 first:rounded-t-lg select-none"
                :class="[{ 'cursor-move': draggable }]">
              <div>
                <!--Header-->
                <div v-if="header || $slots.header">
                  <span v-if="header" v-text="header" class="text-xl font-semibold"></span>
                  <slot v-else name="header"></slot>
                </div>
                <!--Sub-header-->
                <div v-if="subHeader || $slots.subHeader" class="text-xs text-slate-500 dark:text-slate-400">
                  <span v-if="subHeader" v-text="subHeader"></span>
                  <slot v-else name="subHeader"></slot>
                </div>
              </div>

              <!--Top Action Icons-->
              <div class="absolute flex justify-center items-center z-10 right-4 top-2 items-center space-x-2"
                   :class="[{ 'pr-2 pt-2': isExpanded }]">
                <!--Maximize Icon-->
                <div v-if="expandable" @click="
    isExpanded = !isExpanded;
updateSize();
                                " class="flex justify-center items-center cursor-pointer">
                  <font-awesome-icon icon="expand-alt" v-if="isExpanded"
                                     class="w-4 h-4 text-slate-600"/>
                  <font-awesome-icon icon="compress-alt" v-else class="w-4 h-4 text-slate-600"/>
                </div>

                <!--Close Button-->
                <div v-if="modelValue && closeButton" @click="close()"
                     class="flex justify-center items-center w-6 h-6 hover:bg-slate-200 rounded-full dark:hover:bg-rose-600 cursor-pointer">
                  <font-awesome-icon icon="x" @click="$emit('update:modelValue', '')"
                                     class="w-4 h-4 text-slate-600 hover:text-rose-600 dark:text-slate-200 hover:dark:text-slate-200"/>
                </div>
              </div>
            </div>

            <!--Body-->
            <div
                class="flex p-4 first:rounded-t-lg last:rounded-b-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                :class="[
                                {
                                    'flex-grow': isExpanded,
                                },
                            ]">
              <!--Special Content for Type-->
              <div v-if="notification" class="flex flex-col w-full justify-center items-center">
                <!--Icon-->
                <div v-if="notificationType || $slots.hasOwnProperty('icon')"
                     class="flex justify-center items-center rounded-full p-2 mb-2" :class="
                                        notificationType
                                            ? iconList.find((i) => i.key === notificationType).border
                                            : ''
                                    ">
                  <svg v-if="notificationType" v-html="
                                        iconList.find((i) => i.key === notificationType).content
                                    " :class="[
    iconList.find((i) => i.key === notificationType).color,
]" class="w-24 h-24 iconAnimation"/>
                  <slot v-else name="icon"/>
                </div>

                <!--Title-->
                <p v-if="notificationTitle" v-text="notificationTitle"
                   class="text-2xl font-semibold mb-2"></p>
                <!--Message-->
                <span v-if="notificationMessage" v-text="notificationMessage"></span>
              </div>

              <!--Common Content-->
              <div v-else class="w-full h-full">
                <slot></slot>
              </div>
            </div>

            <!--Footer-->
            <div v-if="$slots.footer || actionButtons.length > 0"
                 class="flex flex-row justify-center sm:justify-end space-x-2 px-4 py-4 border-t bg-white dark:bg-slate-700 border-slate-300/75 dark:border-slate-500/75 text-right last:rounded-b-lg">
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
    </transition>
  </teleport>
</template>

<style scoped>
.iconAnimation {
  animation: iconAnimation 700ms ease-in-out;
}

@keyframes iconAnimation {
  0% {
    transform: scale(0.5) rotateY(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1) rotateY(180deg);
  }
}
</style>
