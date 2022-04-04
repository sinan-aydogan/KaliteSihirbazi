<template>
    <div
        ref="globalContainer"
    >
        <Head :title="title"/>

        <jet-banner/>
        <!-- Global Container -->
        <div class="flex h-screen min-w-screen bg-slate-50 dark:bg-slate-800 py-4 text-slate-700 dark:text-slate-100">
            <!-- Side Menu Area -->
            <div
                :class="showMenu && smallScreen ? '-ml-[7rem]' : ''"
                class="relative min-w-[7rem] flex flex-shrink-0 justify-center transition-all duration-300"
            >
                <side-menu/>
            </div>
            <!-- Content Area -->
            <div class="w-full px-4 overflow-y-auto overscroll-x-none space-y-6">
                <!-- Top Area -->
                <nav class="bg-white border-b border-gray-200 rounded-lg">
                    <!-- Primary Navigation Menu -->
                    <div class="px-6">
                        <div class="relative flex justify-between items-center h-16">
                            <!--Left Side-->
                            <div class="flex items-center">
                                <div v-if="smallScreen"
                                     class="flex cursor-pointer w-6 h-6 items-center justify-center mr-2 -ml-2">
                                    <!--Hamburger-->
                                    <font-awesome-icon
                                        :icon="showMenu ? 'bars' : 'x'"
                                        size="lg"
                                        @click="showMenu=!showMenu"
                                        class="hover:scale-110 active:scale-90 duration-300"
                                    />
                                </div>

                                <!-- Page Heading -->
                                <header v-if="$slots.header">
                                    <slot name="header"></slot>
                                </header>

                                <div v-else class="flex flex-col space-y-1">
                                    <!--Title-->
                                    <span
                                        v-if="title"
                                        class="font-semibold text-xl text-gray-800 leading-none"
                                        v-text="title"
                                    />

                                    <!--Sub Title-->
                                    <span
                                        v-if="subTitle"
                                        class="hidden sm:block text-xs text-gray-500 leading-none"
                                        v-text="subTitle"
                                    />
                                </div>

                            </div>
                            <!--Right Side-->
                            <div class="flex items-center space-x-4">
                                <!--Full-size-->
                                <font-awesome-icon
                                    @click="toggle"
                                    :icon="isFullscreen ? 'compress' : 'expand'"
                                    class="w-6 h-6 text-gray-600 hover:scale-125 active:scale-90 cursor-pointer transition duration-300"
                                />
                                <!--Action Area-->
                                <div v-if="$slots.actionArea" class="flex space-x-2">
                                    <slot name="actionArea"></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Page Content -->
                <main>
                    {{$page.props.request}}
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
/*Functions*/
import {defineComponent, onBeforeMount, onBeforeUpdate, onUpdated, ref} from "vue";
import JetApplicationMark from "@/Jetstream/ApplicationMark.vue";
import {Head, Link} from "@inertiajs/inertia-vue3";
import {useFullscreen, useBreakpoints, breakpointsTailwind} from '@vueuse/core'

/*Components*/
import JetBanner from "@/Jetstream/Banner.vue";
import JetDropdown from "@/Jetstream/Dropdown.vue";
import JetDropdownLink from "@/Jetstream/DropdownLink.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";
import SideMenu from "@/Layouts/SideMenu"

/*Sources*/
import {useI18n} from "vue-i18n";
import {Inertia} from "@inertiajs/inertia";


export default defineComponent({
    props: {
        title: String,
        subTitle: String,
    },

    components: {
        Head,
        JetApplicationMark,
        JetBanner,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
        Link,
        SideMenu,
    },

    setup() {
        /*Multi-language*/
        const {locale} = useI18n({
            useScope: "global",
        });

        onBeforeMount(() => {
            locale.value = Inertia.page.props.user.language;
        });

        onUpdated(() => {
            locale.value = Inertia.page.props.user.language;
        });

        /*Expand Window*/
        const globalContainer = ref();
        const {isFullscreen, toggle} = useFullscreen(globalContainer)

        /*Hamburger Menu*/
        const showMenu = ref();
        const breakpoints = useBreakpoints(breakpointsTailwind)
        const smallScreen = breakpoints.smaller('md')

        /*Navigation*/
        const showingNavigationDropdown = ref(false);

        /*Logout*/
        const logout = () => {
            Inertia.post(route("logout"));
        };

        return {
            globalContainer,
            showingNavigationDropdown,
            isFullscreen,
            toggle,
            showMenu,
            smallScreen,
            logout,
        };
    },
});
</script>
