<script setup>
import {usePage} from "@inertiajs/vue3";
import AppLayout from '@/Layouts/AppLayout.vue';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';
import LanguageChanger from "@/Pages/Profile/Partials/LanguageChanger.vue";
import ThemeChanger from "@/Pages/Profile/Partials/ThemeChanger.vue";
import Divider from "@/Components/Content/Divider.vue";

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
});
</script>

<template>
    <AppLayout :title="t('account.account')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{t('account.account')}}
            </h2>
        </template>

        <div>

            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <!-- User Info -->
                <div v-if="usePage().props.jetstream.canUpdateProfileInformation">
                    <UpdateProfileInformationForm :user="usePage().props.auth.user" />

                    <Divider />
                </div>

                <!-- Update Password -->
                <div v-if="usePage().props.jetstream.canUpdatePassword">
                    <UpdatePasswordForm class="mt-10 sm:mt-0" />

                    <Divider />
                </div>

                <!-- Two Factor Authentication -->
                <div v-if="usePage().props.jetstream.canManageTwoFactorAuthentication">
                    <TwoFactorAuthenticationForm
                        :requires-confirmation="confirmsTwoFactorAuthentication"
                        class="mt-10 sm:mt-0"
                    />

                    <Divider />
                </div>


                <LogoutOtherBrowserSessionsForm :sessions="sessions" class="mt-10 sm:mt-0" />

                <!-- Language Changer -->
                <div>
                    <Divider />

                    <language-changer/>

                </div>

                <!-- Theme Changer -->
                <div>
                    <Divider />

                    <theme-changer/>

                </div>

                <!-- Delete Account -->
                <template v-if="usePage().props.jetstream.hasAccountDeletionFeatures">
                    <Divider />

                    <DeleteUserForm class="mt-10 sm:mt-0" />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
