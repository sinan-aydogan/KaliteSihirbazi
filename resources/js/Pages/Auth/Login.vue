<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Checkbox from '@/Jetstream/Checkbox.vue';
import InputError from '@/Jetstream/InputError.vue';
import InputLabel from '@/Jetstream/InputLabel.vue';
import PrimaryButton from '@/Jetstream/PrimaryButton.vue';
import TextInput from '@/Jetstream/TextInput.vue';
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const backgroundImage = computed(() => {
    return usePage().props.theme.auth.backgroundImage || '/assets/images/default/authBackground.jpg';
});

/*Logo Image*/
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const logoImage = computed(() => {
    let defaultLogos = {
        light: '/assets/images/default/darkLogo.svg',
        dark: '/assets/images/default/lightLogo.svg'
    };

    if (usePage().props.theme.mod === 'auto' || usePage().props.theme.mod === undefined) {
        return defaultLogos[isDark.value ? 'dark' : 'light'];
    }

    return usePage().props.theme.logoImage || defaultLogos[usePage().props.theme.mode];
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in" />
    <div class="min-h-screen flex">
        <!-- Sol: Form Alanı -->
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-8 py-12">
            <div class="w-full max-w-md">
                <div class="flex flex-col items-center mb-8">
                    <img :src="logoImage" alt="Logo" class="h-16 w-16 object-cover mb-4"/>
                    <h1 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white" v-text="$page.props.app.name"></h1>
                    <p class="text-gray-500 dark:text-gray-400 text-center" v-text="$t('auth.loginDescription')"></p>
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
                    <div>
                        <InputLabel for="password" :value="$t('auth.password')" />
                        <TextInput
                            id="password"
                            v-model="form.password"
                            type="password"
                            class="mt-1 block w-full"
                            required
                            autocomplete="current-password"
                        />
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>
                    <div class="flex items-center justify-between">
                        <label class="flex items-center">
                            <Checkbox v-model:checked="form.remember" name="remember" />
                            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400" v-text="$t('auth.rememberMe')"></span>
                        </label>
                        <Link v-if="canResetPassword" :href="route('password.request')" class="text-sm font-medium text-red-600 hover:underline" v-text="$t('auth.forgotYourPassword')"></Link>
                    </div>
                    <PrimaryButton class="w-full flex items-center justify-center" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        {{ $t('auth.login') }}
                    </PrimaryButton>
                </form>
                <div class="mt-6 text-center">
                    <Link :href="route('register')" class="text-sm font-medium text-red-600 hover:underline">{{ $t('auth.dontHaveAnAccountLetsGetStarted') }}</Link>
                </div>
            </div>
        </div>
        <!-- Sağ: Görsel Alanı -->
        <div class="hidden md:block w-1/2 relative">
            <img :src="backgroundImage" alt="Login Background" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
    </div>
</template>
