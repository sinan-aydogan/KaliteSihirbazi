<template>
    <div
        class="relative bg-slate-50 dark:bg-slate-800 z-20 flex flex-col border-r border-slate-300 dark:border-slate-600 px-4"
        ref="subMenu"
    >
        <!-- Logo -->
        <Link :href="route('dashboard')" class="h-16 w-16 text-rose-600 mb-4 mx-auto">
            <svg class="inline-block" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" stroke-linecap="square" stroke-width="1"/>
                <path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137"  stroke-linecap="square" stroke-width="6" />
            </svg>
        </Link>

        <!-- Main Links -->
        <div class="flex flex-col flex-grow overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-200 overscroll-x-none pr-4 -mr-4 scroll-smooth">
            <!-- Link -->
            <template v-for="link in links" :key="link.id">
                {{link.links.find(l=>l.id === activeMainLink)}}
                <div
                    @click="activeMainLink = link.id; showSubMenu=true"
                    class="
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
          "
                    :class="[
            { 'bg-rose-500 text-gray-50': activeMainLink === link.id || link.links.find(l=>l.id === activeMainLink) },
            'transition duration-300',
          ]"
                >
                    <!-- Icon -->
                    <font-awesome-icon :icon="link.icon" class="w-6 h-6"/>
                    <!-- Label -->
                    <span class="text-[.65rem]">
            {{ link.label }}
          </span>
                </div>
            </template>
        </div>
        <!-- Settings -->
        <Link
            :href="route('global-setting.index')"
            class="flex flex-shrink-0 justify-center items-center h-12 w-12 mx-auto bg-slate-100/75 border border-slate-600 text-slate-600 mb-4 rounded-full"
        >
            <font-awesome-icon icon="cog" class="w-6 h-6"/>

        </Link>

        <!-- User Menu -->
        <div class="flex items-center justify-center">
            <user-menu/>
        </div>
    </div>
    <!-- Sub Links -->

    <div
        class="absolute z-10 flex h-full flex-col border-r border-t border-b dark:border-slate-600 px-4 -mb-4 w-56 bg-gradient-to-tl from-gray-800/75 to-gray-800  text-gray-50 rounded-r-md"
        :class="[
            showSubMenu ? 'left-28' : '-left-56',
            'transition-all duration-700'
        ]"
        @click="showSubMenu = false"
    >
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
            <template v-for="subLink in links.find(l=>l.id === activeMainLink).links" :key="subLink.id">
                <Link
                    :href="route(subLink.link)"
                    class="flex items-center space-x-2 p-2 rounded-md hover:bg-rose-600/75 cursor-pointer text-sm"
                    :class="[
                        {'bg-rose-600/75' : route().current(subLink.link)}
                        ]"
                >
                    <!-- Icon -->
                    <font-awesome-icon :icon="subLink.icon"/>
                    <!-- Label -->
                    <span>
                            {{ subLink.label }}
                        </span>
                </Link>
            </template>
        </div>
    </div>
</template>

<script>
/* Functions */
import {Inertia} from "@inertiajs/inertia";
import {ref, onBeforeMount} from "vue";
import {onClickOutside} from '@vueuse/core'
import {Link} from "@inertiajs/inertia-vue3";

/* Components */
import MainMenuLinks from "@/Sources/mainMenu";
import UserMenu from '@/Layouts/UserMenu.vue';

export default {
    components: {
        UserMenu,
        Link
    },
    setup() {
        /*Links*/
        const {links} = MainMenuLinks(Inertia.page.props);

        /*Show SubMenu*/
        const subMenu = ref(null)
        const showSubMenu = ref();
        onClickOutside(subMenu, (event) => showSubMenu.value = false)

        /*Active Main Menu*/
        const activeMainLink = ref();
        onBeforeMount(()=>{
            let activePage;
            links.value.forEach(ml=>{

                ml.links.find(sl=>{
                    if(sl.link === route().current()){
                        activePage = sl
                    }
                })
            })

            if(activePage){
                activeMainLink.value = activePage.id.split('-')[0]
            }
        })

        return {
            links,
            activeMainLink,
            subMenu,
            showSubMenu
        };
    },
};
</script>
