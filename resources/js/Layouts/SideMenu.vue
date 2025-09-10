<script setup>
/* Functions */
import {usePage} from '@inertiajs/vue3';
import { ref, onBeforeMount, computed } from "vue";
import { onClickOutside } from '@vueuse/core'
import { Link } from "@inertiajs/vue3";

/* Components */
import MainMenuLinks from "@/Sources/mainMenu";
import UserMenu from '@/Layouts/UserMenu.vue';

/*Emits*/
const emit = defineEmits(['hide'])

/*Breakpoints*/
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

/*Links*/
const { links } = MainMenuLinks({roles: usePage().props.auth.roles, permissions: usePage().props.auth.permissions});

/*Show SubMenu*/
const subMenu = ref(null)
const showSubMenu = ref();
onClickOutside(subMenu, (event) => {
  showSubMenu.value = false
  if(breakpoints.isSmaller('md')){
    emit('hide')
  }
})

/*Active Main Menu*/
const activeMainLink = ref();
onBeforeMount(() => {
    let activePage;
    links.value.forEach(ml => {

        ml.links.find(sl => {
            if (sl.link === route().current()) {
                activePage = sl
            }
        })
    })

    if (activePage) {
        activeMainLink.value = activePage.id.split('-')[0]
    }
})

const logoImage = computed(() => {
    let defaultLogos = {
        light: '/assets/images/default/darkLogo.svg',
        dark: '/assets/images/default/lightLogo.svg'
    };

    return usePage().props.theme.logoImage || defaultLogos[usePage().props.theme.mode];
});

</script>


<template>
    <div class="relative py-4 bg-slate-50 dark:bg-slate-800 z-20 flex flex-col border-r border-slate-300 dark:border-slate-600 px-4 h-screen"
        ref="subMenu">
        <!-- Logo -->
        <Link :href="route('dashboard')" class="h-16 w-16 text-rose-600 mb-4 mx-auto">
        <img :src="logoImage" alt="Logo" class="h-16 w-16 object-cover"/>
        </Link>

      <!--Mobile Menu Hider-->
      <div class="flex sm:hidden items-center justify-center mb-4 bg-rose-500 rounded-full cursor-pointer" @click="$emit('hide')">
        <font-awesome-icon icon="left-long" size="xl"/>
      </div>

        <!-- Main Links -->
        <div
            class="flex flex-col flex-grow overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-200 overscroll-x-none pr-4 -mr-4 scroll-smooth">
            <!-- Link -->
            <template v-for="link in links" :key="link.id">
                {{  link.links.find(l => l.id === activeMainLink)  }}
                <div @click="activeMainLink = link.id; showSubMenu = true" class="
            flex
            flex-col
            flex-shrink-0
            space-y-1
            items-center
            justify-center
            w-20
            py-2
            rounded-md
            text-center
            cursor-pointer
            select-none
          " :class="[
              { 'bg-rose-500 text-gray-50': activeMainLink === link.id || link.links.find(l => l.id === activeMainLink) },
              'transition duration-300',
          ]">
                    <!-- Icon -->
                    <font-awesome-icon :icon="link.icon" class="w-6 h-6" />
                    <!-- Label -->
                    <span class="text-[.65rem]">
                        {{  link.label  }}
                    </span>
                </div>
            </template>
        </div>
        <!-- Settings -->
        <Link :href="route('global-setting.index')"
            class="flex flex-shrink-0 justify-center items-center h-12 w-12 mx-auto bg-slate-100/75 border border-slate-600 text-slate-600 mb-4 rounded-full">
        <font-awesome-icon icon="cog" class="w-6 h-6" />

        </Link>

        <!-- User Menu -->
        <div class="flex items-center justify-center">
            <user-menu />
        </div>
    </div>
    <!-- Sub Links -->

    <div class="absolute z-10 flex h-full flex-col border-r border-t border-b dark:border-slate-600 px-4 -mb-4 w-56 bg-gradient-to-tl from-gray-800/75 to-gray-800  text-gray-50 rounded-r-md"
        :class="[
            showSubMenu ? 'left-28' : '-left-56',
            'transition-all duration-700'
        ]" @click="showSubMenu = false">
        <!-- Firm Info -->
        <div class="flex flex-col h-20 justify-center items-center">
            <!-- Firm Name -->
            <span class="text-2xl font-bold"> Kalite Sihirbazı </span>
            <!-- Firm Slogan -->
            <span class="text-xs font-semibold"> Yaşam için kalite </span>
        </div>

        <!-- Sub Links -->
        <div v-if="activeMainLink" class="mt-6 space-y-1">
            <!-- Sub Link -->
            <template v-for="subLink in links.find(l => l.id === activeMainLink).links" :key="subLink.id">
                <Link :href="route(subLink.link)"
                    class="flex items-center space-x-2 p-2 rounded-md hover:bg-rose-600/75 cursor-pointer text-sm"
                    :class="[
                        { 'bg-rose-600/75': route().current(subLink.link) }
                    ]">
                <!-- Icon -->
                <font-awesome-icon :icon="subLink.icon" />
                <!-- Label -->
                <span>
                    {{  subLink.label  }}
                </span>
                </Link>
            </template>
        </div>
    </div>
</template>
