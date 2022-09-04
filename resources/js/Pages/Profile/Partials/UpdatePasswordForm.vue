<script setup>
import { ref, onMounted } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import FormActionMessage from '@/Components/Form/FormActionMessage.vue';
import JetButton from '@/Jetstream/Button.vue';
import Form from '@/Components/Form/Form.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import JetLabel from '@/Jetstream/Label.vue';
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";

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
    <Form @submitted="updatePassword">
        <template #title>
            {{  t('account.updatePassword')  }}
        </template>

        <template #description>
            {{  t('account.updatePasswordDesc')  }}
        </template>

        <template #form>
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
        </template>

        <template #actions>
            <FormActionMessage :on="form.recentlySuccessful" class="mr-3">
                {{  t('global.saved')  }}
            </FormActionMessage>

            <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                {{  t('global.save')  }}
            </JetButton>
        </template>
    </Form>
</template>
