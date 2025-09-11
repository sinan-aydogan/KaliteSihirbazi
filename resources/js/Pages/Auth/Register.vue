<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import Checkbox from '@/Jetstream/Checkbox.vue';
import InputError from '@/Jetstream/InputError.vue';
import InputLabel from '@/Jetstream/InputLabel.vue';
import PrimaryButton from '@/Jetstream/PrimaryButton.vue';
import TextInput from '@/Jetstream/TextInput.vue';
import { computed } from 'vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

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

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Register" />
    <div class="min-h-screen flex">
        <!-- Sol: Form Alanı -->
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-8 py-12">
            <div class="w-full max-w-md">
                <div class="flex flex-col items-center mb-8">
                    <img :src="logoImage" alt="Logo" class="h-16 w-16 object-cover mb-4"/>
                    <h1 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white" v-text="$page.props.app.name"></h1>
                    <p class="text-gray-500 dark:text-gray-400 text-center" v-text="$t('auth.registerDescription')"></p>
                </div>
                <form @submit.prevent="submit" class="space-y-6">
                    <div>
                        <InputLabel for="name" :value="$t('auth.name')" />
                        <TextInput
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full"
                            required
                            autofocus
                            autocomplete="name"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>
                    <div>
                        <InputLabel for="email" :value="$t('auth.email')" />
                        <TextInput
                            id="email"
                            v-model="form.email"
                            type="email"
                            class="mt-1 block w-full"
                            required
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
                            autocomplete="new-password"
                        />
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>
                    <div>
                        <InputLabel for="password_confirmation" :value="$t('auth.confirmPassword')" />
                        <TextInput
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            class="mt-1 block w-full"
                            required
                            autocomplete="new-password"
                        />
                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                    </div>
                    <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
                        <label class="flex items-center">
                            <Checkbox id="terms" v-model:checked="form.terms" name="terms" required />
                            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                I agree to the <a target="_blank" :href="route('terms.show')" class="underline">Terms of Service</a> and <a target="_blank" :href="route('policy.show')" class="underline">Privacy Policy</a>
                            </span>
                        </label>
                        <InputError class="mt-2" :message="form.errors.terms" />
                    </div>
                    <PrimaryButton class="flex items-center justify-center w-full" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        {{ $t('auth.register') }}
                    </PrimaryButton>
                </form>
                <div class="mt-6 text-center">
                    <Link :href="route('login')" class="text-sm text-red-600 hover:underline">{{ $t('auth.alreadyRegistered') }}</Link>
                </div>
            </div>
        </div>
        <!-- Sağ: Görsel Alanı -->
        <div class="hidden md:block w-1/2 relative">
            <img :src="backgroundImage" alt="Register Background" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
    </div>
</template>
