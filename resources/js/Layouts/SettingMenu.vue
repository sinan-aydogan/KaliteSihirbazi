<script setup>
import {ref, reactive, onMounted} from "vue";
import {onClickOutside} from '@vueuse/core'
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    links: Array
})

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
onClickOutside(subMenu, () => showSubMenu.value = false)

/*Active Menu Links*/
const activeLinks = reactive({
    parent: null,
    child: null
});

onMounted(() => {
    props.links.forEach(linkGroup => {

        linkGroup.items.forEach(parent => {
            /*Dropdown*/
            if (parent.links) {
                parent.links.forEach(child => {
                    if (child.link === route().current()) {
                        activeLinks.parent = parent.id
                        activeLinks.child = child.id
                        showingSubMenu.value = parent.id
                    }
                })
                /*Route*/
            } else {
                if (parent.link === route().current()) {
                    activeLinks.parent = parent.id
                }
            }
        })
    })
})
</script>

<template>
    <div>
        <template v-for="link in links">
            <!-- Links-->
            <div class="flex flex-col flex-grow overflow-y-auto select-none space-y-1">
                <!-- Link -->
                <template v-for="mainLink in link.items" :key="mainLink.id">
                    <!--MainMenu Links-->
                    <component :is="mainLink.link ? Link : 'a'"
                               @click="activeLinks.parent = mainLink.id; toggle(mainLink.id)"
                               :href="mainLink.link ? route(mainLink.link) : '#'"
                               class="flex flex-shrink-0 px-2 py-[.4rem] justify-between items-center rounded-md hover:bg-slate-600 text-center cursor-pointer"
                               :class="[
                        { 'bg-rose-500 text-gray-50': activeLinks.parent === mainLink.id },
                        'transition duration-300',
                        ]"
                    >
                        <!--Link Content-->
                        <div class="flex items-center space-x-2">
                            <!-- Icon -->
                            <font-awesome-icon v-if="mainLink['icon']" :icon="mainLink.icon"/>
                            <!-- Label -->
                            <span class="text-xs text-left" v-text="mainLink.label"></span>
                        </div>

                        <!--Trigger-->
                        <font-awesome-icon v-if="mainLink.links" icon="fa-solid fa-angle-down" size="sm"/>
                    </component>

                    <!--SubMenu Links-->
                    <div v-if="mainLink.links && showingSubMenu === mainLink.id" class="flex flex-col justify-start">
                        <template v-for="subLink in mainLink.links" :key="subLink.id">
                            <component :is="subLink.link ? Link : 'a'"
                                       :href="subLink.link ? route(subLink.link) : '#'"
                                       class="flex items-center hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer px-2 py-1 rounded-md pl-8"
                                       :class="[
                            { 'border border-rose-500/25 bg-rose-500/10 text-gray-50': activeLinks.child === subLink.id },
                            'transition duration-300',
                            ]"
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
