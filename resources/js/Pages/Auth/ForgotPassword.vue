<script setup>
import { computed } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';
import { Head, useForm } from '@inertiajs/vue3';
import InputError from '@/Jetstream/InputError.vue';
import InputLabel from '@/Jetstream/InputLabel.vue';
import PrimaryButton from '@/Jetstream/PrimaryButton.vue';
import TextInput from '@/Jetstream/TextInput.vue';

const backgroundImage = computed(() => {
    return usePage().props.theme.auth.backgroundImage || '/assets/images/default/authBackground.jpg';
});

const logoImage = computed(() => {
    let defaultLogos = {
        light: '/assets/images/default/darkLogo.svg',
        dark: '/assets/images/default/lightLogo.svg'
    };
    return usePage().props.theme.logoImage || defaultLogos[usePage().props.theme.mode];
});


defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <Head title="Forgot Password" />
    <div class="min-h-screen flex">
        <!-- Sol: Form Alanı -->
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12">
            <div class="w-full max-w-md">
                <div class="flex flex-col items-center mb-8">
                    <img :src="logoImage" alt="Logo" class="h-16 w-16 object-cover mb-4"/>
                    <h1 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('auth.resetPassword') }}</h1>
                    <p class="text-gray-500 dark:text-gray-400 text-center" v-text="$t('auth.forgotPasswordDescription')"></p>
                </div>
                <form @submit.prevent="submit" class="space-y-6">
                    <div>
                        <InputLabel for="email" :value="$t('auth.email')" />
                        <TextInput
                            id="email"
                            v-model="form.email"
                            type="email"
                            class="mt-1 block w-full"
                            required
                            autofocus
                            autocomplete="username"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>
                    <PrimaryButton class="w-full flex items-center justify-center" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        {{ $t('auth.requestPasswordResetEmail') }}
                    </PrimaryButton>
                </form>

                <div class="mt-6 text-center">
                    <Link :href="route('login')" class="text-sm font-medium text-red-600 hover:underline">{{ $t('auth.areYouRememberedYourPassword') }}</Link>
                </div>

                <div v-if="status" class="mt-6 font-medium text-sm text-green-600 dark:text-green-400 text-center">
                    {{ status }}
                </div>
            </div>
        </div>
        <!-- Sağ: Görsel Alanı -->
        <div class="hidden md:block w-1/2 relative">
            <img :src="backgroundImage" alt="Forgot Password Background" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
    </div>
</template>
