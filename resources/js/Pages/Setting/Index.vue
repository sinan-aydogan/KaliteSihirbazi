<template>
    <setting-layout :title="$t('settingMenu.generalSettings')">
        <content-card
            :title="$t('settingMenu.generalSettings')"
            :sub-title="$t('settingMenu.generalSettingsDesc')"
        >
            <!--App Logo-->
            <input-group
                :label="$t('settingMenu.appLogo')"
                label-for="app-logo"
                :sub-label="$t('settingMenu.appLogoDesc')"
                class="mb-6"
            >
                <div class="flex border bg-gray-900/25 dark:border-slate-600 rounded-md m-4">
                    <div class="flex flex-col w-full justify-center items-center border-r dark:border-slate-600">
                        <span class="text-sm mb-4">
                            {{ $t('settingMenu.lightLogo') }}
                        </span>
                        <img src="img/light-logo.svg" class="h-20 w-20 cover"/>
                        <div class="flex w-full rounded-br-md mt-4">
                            <button
                                class="bg-slate-500 text-slate-900 text-sm py-1 font-semibold hover:bg-slate-200 hover:text-slate-700 w-full rounded-bl-md">
                                {{ $t('global.change') }}
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col w-full justify-center items-center">
                        <span class="text-sm mb-4">
                            {{ $t('settingMenu.darkLogo') }}
                        </span>
                        <img src="img/dark-logo.svg" class="h-20 w-20 cover"/>
                        <div class="flex w-full rounded-br-md mt-4">
                            <button
                                class="bg-amber-500 text-amber-900 text-sm py-1 font-semibold hover:bg-amber-200 w-full ">
                                {{ $t('global.cancel') }}
                            </button>
                            <button
                                class="bg-sky-500 text-sky-900 text-sm py-1 font-semibold hover:bg-sky-200 w-full rounded-br-md">
                                {{ $t('global.save') }}
                            </button>
                        </div>
                    </div>
                </div>
            </input-group>

            <!--App Name-->
            <input-group
                :label="$t('settingMenu.appName')"
                label-for="app-name"
                :sub-label="$t('settingMenu.appNameDesc')"
                class="mb-6"
            >
                <text-input placeholder="Kalite Sihirbazı"/>
            </input-group>

            <!--App Email-->
            <input-group
                :label="$t('settingMenu.appMailSendingEmail')"
                label-for="app-email"
                :sub-label="$t('settingMenu.appMailSendingEmailDesc')"
                class="mb-6"
            >
                <text-input placeholder="noreply@kalitesihirbazi.com.tr"/>
            </input-group>

            <!--Global Admins-->
            <input-group
                :label="$t('settingMenu.appGlobalAdmins')"
                label-for="app-email"
                :sub-label="$t('settingMenu.appGlobalAdminsDesc')"

            >
                <ul role="list"
                    class="divide-y divide-gray-200 dark:divide-slate-600 mt-4 first:rounded-t-md last:rounded-b-md overflow-hidden">
                    <li v-for="admin in superAdmins" :key="admin.id" class="hover:bg-gray-50 dark:hover:bg-slate-600">
                        <div class="flex items-center px-4 py-4 sm:px-6">
                            <div class="min-w-0 flex-1 flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="h-12 w-12 rounded-full" :src="admin.profile_photo_url"
                                         alt="admin.name"/>
                                </div>
                                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>
                                        <p class="text-sm font-medium truncate">
                                            {{ admin.name }}</p>
                                        <p class="mt-2 flex items-center text-sm space-x-1">
                                            <font-awesome-icon icon="id-card"/>
                                            <span class="truncate">{{ admin.title }}</span>
                                        </p>
                                    </div>
                                    <div class="hidden md:block">
                                        <div>
                                            <p class="text-sm">
                                                <span class="font-semibold mr-2">Atanma Zamanı:</span>
                                                <time :datetime="admin.assignedDate">
                                                    {{ admin.assignedDate }}
                                                </time>
                                            </p>
                                            <p class="mt-2 flex items-center text-sm">
                                                <span class="font-semibold mr-2">Atayan:</span>
                                                <span v-if="superAdmins.find(a=>a.id === admin.assignedBy)"
                                                      v-text="superAdmins.find(a=>a.id === admin.assignedBy).name"></span>
                                                <span v-else>Global Admin</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex space-x-2 items-center border rounded-md px-2 py-1 hover:border-transparent hover:text-rose-700 hover:bg-rose-200 cursor-pointer">
                                <font-awesome-icon icon="trash"/>
                                <span v-text="$t('auth.disempower')" class="text-sm mr-2"></span>
                            </div>
                        </div>
                    </li>
                    <li class="flex justify-center space-x-2 justify-center items-center py-2 bg-emerald-500 dark:text-emerald-900 hover:bg-emerald-200 cursor-pointer font-semibold text-sm">
                        <font-awesome-icon icon="plus"/>
                        <span v-text="$t('settingMenu.addGlobalAdmin')"></span>
                    </li>
                </ul>
            </input-group>
        </content-card>
    </setting-layout>
</template>

<script>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import ContentCard from "@/Layouts/ContentCard.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";

export default {
    name: "Index",
    components: {TextInput, InputGroup, ContentCard, SettingLayout},
    setup() {
        const superAdmins = [
            {
                id: 1,
                name: "Sinan AYDOĞAN",
                title: "Business Manager",
                profile_photo_url: "https://i.pravatar.cc/150/21",
                assignedDate: '03.09.2021',
                assignedBy: 0
            },
            {
                id: 2,
                name: "Hamdi KAYA",
                title: "IT Manager",
                profile_photo_url: "https://i.pravatar.cc/150/25",
                assignedDate: '01.03.2022',
                assignedBy: 1
            },
            {
                id: 3,
                name: "Zuhal TAŞÇI",
                title: "Factory Manager",
                profile_photo_url: "https://i.pravatar.cc/150/25",
                assignedDate: '05.01.2022',
                assignedBy: 1
            }
        ]

        return {
            superAdmins
        }
    }
}
</script>

<style scoped>

</style>
