<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates();

// Settings menu items
const settingsMenu = [
    {
        title: tm('term.educationTypes'),
        description: 'Eğitim türlerini yönetin',
        icon: 'tags',
        iconWrapper: 'bg-sky-600',
        route: 'education-type.index',
        color: 'blue',
    },
    {
        title: tm('term.educationInstructors'),
        description: 'Eğitmen bilgilerini yönetin',
        icon: 'user-tie',
        iconWrapper: 'bg-green-600',
        route: 'education-instructor.index',
        color: 'green'
    }
]

</script>

<template>
    <app-layout :title="tm('title.settingsPage.title')" :sub-title="tm('title.settingsPage.subTitle')">
        <template #actionArea>
            <!--Return to List-->
            <simple-button type="route" :link="route('education.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="item in settingsMenu"
                :key="item.route"
                class="bg-white dark:bg-slate-600 rounded-lg p-6 shadow hover:shadow-lg transition-shadow cursor-pointer"
                @click="router.visit(route(item.route))"
            >
                <div class="flex items-center mb-4">
                    <div
                        :class="`w-12 h-12 ${item.iconWrapper} rounded-lg flex items-center justify-center text-white mr-4`"
                    >
                        <font-awesome-icon :icon="item.icon" class="text-xl"/>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                        <p class="text-sm text-gray-500">{{ item.description }}</p>
                    </div>
                </div>
                <simple-button
                    type="route"
                    :link="route(item.route)"
                    :color="item.color"
                    full-size
                >
                    {{ item.title }} Yönet
                    <font-awesome-icon icon="arrow-right" class="ml-2"/>
                </simple-button>
            </div>
        </div>
    </app-layout>
</template>
