<script setup>
/*Functions*/
import { onBeforeMount, onUpdated, ref, watch} from "vue";
import {Head, usePage} from "@inertiajs/vue3";
import {useBreakpoints, breakpointsTailwind} from '@vueuse/core'
import Theme from "@/Functions/Theme";
import Notification from "@/Components/Notification/Notification.vue"

/*Components*/
import Banner from "@/Components/Account/Banner.vue";
import SideMenu from "@/Layouts/SideMenu.vue"

/*Sources*/
import {useI18n} from "vue-i18n";

/*Stores*/
import {useNotification} from "@/Stores/useNotification.js";
import {useFullscreenStore} from "@/Stores/useFullscreen.js";
import {useFormat} from "@/Stores/useFormat.js";
import dayjs from "dayjs";
import { storeToRefs } from "pinia";

defineProps({
  title: String,
  subTitle: String,
})

/*Theme*/
Theme();

/*Multi-language*/
const {locale, t} = useI18n({
  useScope: "global",
});

onBeforeMount(() => {
  locale.value = usePage().props.auth.user.language;
  dayjs.locale(locale.value)
  useFormat().init(usePage().props.formatSettings);
  addNotification();
});

onUpdated(() => {
  locale.value = usePage().props.auth.user.language;
});

/*Expand Window*/
const fullscreen = useFullscreenStore();
const {globalContainer, isFullscreen} = storeToRefs(fullscreen);

/*Hamburger Menu*/
const showMenu = ref();
const breakpoints = useBreakpoints(breakpointsTailwind)
const smallScreen = breakpoints.smaller('md')

/*Navigation*/
const showingNavigationDropdown = ref(false);

/*Notification*/
const notification = useNotification();
const addNotification = () => {
  let message = usePage().props.flash.message
  if (message) {
    notification.add({
      type: message.type,
      content: message.content,
      _token: message._token
    })
  }
}
watch(()=>usePage().props.flash.message, ()=>{
  addNotification();
})
</script>

<template>
  <div ref="globalContainer">

    <Head :title="title"/>

    <Banner />
    <!-- Global Container -->
    <div class="flex h-screen w-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-100 overflow-hidden">
      <!-- Side Menu Area -->
      <div :class="showMenu && smallScreen ? '-ml-[7rem]' : ''"
           class="absolute sm:relative z-30 w-28 min-w-28 max-w-28 flex-none transition-all duration-300">
        <side-menu @hide="showMenu=true"/>
      </div>
      <!-- Content Area -->
      <div class="min-w-0 flex-1 pt-4 px-4 overflow-y-scroll overscroll-x-none space-y-6">
        <!-- Top Area -->
        <nav class="bg-white dark:bg-slate-600 border dark:border-transparent rounded-lg">
          <!-- Primary Navigation Menu -->
          <div class="px-6">
            <div class="relative flex justify-between items-center h-16">
              <!--Left Side-->
              <div class="flex items-center">
                <div v-if="smallScreen"
                     class="flex cursor-pointer w-6 h-6 items-center justify-center mr-2 -ml-2">
                  <!--Hamburger-->
                  <font-awesome-icon :icon="showMenu ? 'bars' : 'x'" size="lg"
                                     @click="showMenu = !showMenu"
                                     class="hover:scale-110 active:scale-90 duration-300"/>
                </div>

                <!-- Page Heading -->
                <header v-if="$slots.header">
                  <slot name="header"></slot>
                </header>

                <div v-else class="flex flex-col space-y-1">
                  <!--Title-->
                  <span v-if="title"
                        class="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-none"
                        v-text="title"/>

                  <!--Sub Title-->
                  <span v-if="subTitle" class="hidden sm:block text-xs text-slate-500 dark:text-slate-100/50 leading-none"
                        v-text="subTitle"/>
                </div>

              </div>
              <!--Right Side-->
              <div v-if="!smallScreen" class="flex items-center space-x-4">
                <!--Full-size-->
                <font-awesome-icon @click="fullscreen.toggle" :icon="isFullscreen ? 'compress' : 'expand'"
                                   class="w-6 h-6 text-gray-600 hover:scale-125 active:scale-90 cursor-pointer transition duration-300"/>
                <!--Action Area-->
                <div v-if="$slots.actionArea" class="flex space-x-2">
                  <slot name="actionArea"></slot>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!--Right Side-->
        <div v-if="smallScreen" class="flex flex-wrap justify-center items-center space-x-4">
          <!--Full-size-->
          <font-awesome-icon v-if="!smallScreen" @click="fullscreen.toggle" :icon="isFullscreen ? 'compress' : 'expand'"
                             class="w-6 h-6 text-gray-600 hover:scale-125 active:scale-90 cursor-pointer transition duration-300"/>
          <!--Action Area-->
          <div v-if="$slots.actionArea" class="flex space-x-2">
            <slot name="actionArea"></slot>
          </div>
        </div>

        <!-- Page Content -->
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
  <!-- Notification -->
  <teleport to="body">
    <notification/>
  </teleport>
</template>
