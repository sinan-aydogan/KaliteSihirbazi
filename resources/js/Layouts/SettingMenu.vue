<template>
    <div>
        <template v-for="link in links">

            <!-- Links-->
            <div class="flex flex-col flex-grow overflow-y-auto select-none space-y-1">
                <!-- Link -->
                <template v-for="mainLink in link.items" :key="mainLink.id">
                    <!--MainMenu Links-->
                    <component :is="mainLink.link ? 'Link' : 'a'"
                               @click="activeMainLink = mainLink.id; toggle(mainLink.id)"
                               :href="mainLink.link ? route(mainLink.link) : '#'"
                               class="flex flex-shrink-0 px-2 py-[.4rem] justify-between items-center rounded-md hover:bg-slate-600 text-center cursor-pointer"
                               :class="[
                        { 'bg-rose-500 text-gray-50': activeMainLink === mainLink.id && !mainLink.links },
                        'transition duration-300',
                        ]"
                    >
                        <!--Link Content-->
                        <div class="flex items-center space-x-2">
                            <!-- Icon -->
                            <font-awesome-icon :icon="mainLink.icon"/>
                            <!-- Label -->
                            <span class="text-xs text-left" v-text="mainLink.label"></span>
                        </div>

                        <!--Trigger-->
                        <font-awesome-icon v-if="mainLink.links" icon="angle-down" size="sm"/>
                    </component>

                    <!--SubMenu Links-->
                    <div v-if="mainLink.links && showingSubMenu === mainLink.id" class="flex flex-col justify-start">
                        <template v-for="subLink in mainLink.links" :key="subLink.id">
                            <component :is="subLink.link ? 'Link' : 'a'"
                                       :href="subLink.link ? route(subLink.link) : '#'"
                                       class="flex items-center hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer px-2 py-1 rounded-md pl-8"
                            >
                                <!-- Label -->
                                <span v-text="subLink.label" class="text-xs le"></span>
                            </component>
                        </template>
                    </div>
                </template>
            </div>

            <!--Divider-->
            <hr class="last:hidden my-2 border-slate-300 dark:border-slate-600"/>
        </template>
    </div>
</template>

<script>
/* Functions */
import {Inertia} from "@inertiajs/inertia";
import {ref, onBeforeMount} from "vue";
import {onClickOutside} from '@vueuse/core'
import {Link} from "@inertiajs/inertia-vue3";

/* Components */
import SettingMenuLinks from "@/Sources/settingMenu";

export default {
    name: "SettingMenu",
    components: {
        Link
    },
    setup() {
        /*Links*/
        const {links} = SettingMenuLinks(Inertia.page.props);

        /*Show SubMenu*/
        const subMenu = ref(null)
        const showingSubMenu = ref()
        const toggle = (id) => {
            if (showingSubMenu.value === id) {
                showingSubMenu.value = null
            } else {
                showingSubMenu.value = id
            }
        };
        onClickOutside(subMenu, (event) => showSubMenu.value = false)

        /*Active Main Menu*/
        const activeMainLink = ref();
        onBeforeMount(() => {
            let activePage;
            links.value.forEach(ml => {

                if (ml.links) {
                    ml.links.find(sl => {
                        if (sl.link === route().current()) {
                            activePage = sl
                        }
                    })
                }
            })

            if (activePage) {
                activeMainLink.value = activePage.id.split('-')[0]
            }
        })

        return {
            links,
            activeMainLink,
            subMenu,
            showingSubMenu,
            toggle
        };
    },
}
</script>
