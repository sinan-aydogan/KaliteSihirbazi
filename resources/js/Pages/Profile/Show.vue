<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import Divider from '@/Components/Content/Divider.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';
import LanguageChanger from "@/Pages/Profile/Partials/LanguageChanger.vue";
import ThemeChanger from "@/Pages/Profile/Partials/ThemeChanger.vue";

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
});
</script>

<template>
    <AppLayout :title="t('account.account')">

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                <!-- User Info -->
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <UpdateProfileInformationForm :user="$page.props.user" />

                    <Divider />
                </div>

                <!-- Update Password -->
                <div v-if="$page.props.jetstream.canUpdatePassword">
                    <UpdatePasswordForm class="mt-10 sm:mt-0" />

                    <Divider />
                </div>

                <!-- Two Authentication -->
                <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
                    <TwoFactorAuthenticationForm :requires-confirmation="confirmsTwoFactorAuthentication"
                        class="mt-10 sm:mt-0" />

                    <Divider />
                </div>

                <!-- Logout from Other Browsers -->
                <LogoutOtherBrowserSessionsForm :sessions="sessions" class="mt-10 sm:mt-0" />

                <!-- Language Changer -->
                <div>
                    <Divider />

                    <language-changer />

                </div>

                <!-- Theme Changer -->
                <div>
                    <Divider />

                    <theme-changer />

                </div>

                <!-- Delete User -->
                <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
                    <Divider />

                    <DeleteUserForm class="mt-10 sm:mt-0" />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
