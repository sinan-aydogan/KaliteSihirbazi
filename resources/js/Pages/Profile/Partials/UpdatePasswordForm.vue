<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import FormActionMessage from '@/Components/Form/FormActionMessage.vue';
import FormSection from '@/Components/Form/FormSection.vue';
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }

            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <FormSection
        :title="t('account.updatePassword')"
        :description="t('account.updatePasswordDesc')"
    >
        <div class="col-span-6 sm:col-span-4">
            <input-group :label="t('account.currentPassword')" label-for="current_password"
                         errorBag="updatePassword" :errors="form.errors.current_password">
                <text-input id="current_password" inputType="password" v-model="form.current_password"
                            autocomplete="current-password" ref="currentPasswordInput" />
            </input-group>
        </div>

        <div class="col-span-6 sm:col-span-4">
            <input-group :label="t('account.newPassword')" label-for="password" errorBag="updatePassword"
                         :errors="form.errors.password">
                <text-input id="password" inputType="password" v-model="form.password" autocomplete="new-password"
                            ref="passwordInput" />
            </input-group>
        </div>

        <div class="col-span-6 sm:col-span-4">
            <input-group :label="t('account.newPassword')" label-for="password_confirmation"
                         errorBag="updatePassword" :errors="form.errors.password_confirmation">
                <text-input id="password" inputType="password" v-model="form.password_confirmation"
                            autocomplete="new-password" />
            </input-group>
        </div>

        <template #actions>
            <FormActionMessage :on="form.recentlySuccessful" class="mr-3">
                {{  t('message.feedback.saved')  }}
            </FormActionMessage>

            <SimpleButton :label="t('action.save')" @click="updatePassword" :loading="form.processing" :disabled="form.processing"/>
        </template>
    </FormSection>
</template>
