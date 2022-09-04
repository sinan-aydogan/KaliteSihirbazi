<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/Form/FormSection.vue';
import JetDialogModal from '@/Jetstream/DialogModal.vue';
import JetDangerButton from '@/Jetstream/DangerButton.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    setTimeout(() => passwordInput.value.focus(), 250);
};

const deleteUser = () => {
    form.delete(route('current-user.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <FormSection>
        <template #title>
            {{  t('account.deleteAccount')  }}
        </template>

        <template #description>
            {{  t('account.deleteAccountDesc')  }}
        </template>

        <template #content>
            <div class="max-w-xl text-sm">
                {{  t('account.deleteAccountInfo')  }}
            </div>

            <div class="mt-5">
                <JetDangerButton @click="confirmUserDeletion">
                    {{  t('account.deleteAccount')  }}
                </JetDangerButton>
            </div>

            <!-- Delete Account Confirmation Modal -->
            <JetDialogModal :show="confirmingUserDeletion" @close="closeModal">
                <template #title>
                    {{  t('account.deleteAccount')  }}
                </template>

                <template #content>
                    {{  t('account.deleteAccountModalMessage')  }}

                    <div class="mt-4">
                        <JetInput ref="passwordInput" v-model="form.password" type="password" class="mt-1 block w-3/4"
                            :placeholder="t('auth.password')" @keyup.enter="deleteUser" />

                        <JetInputError :message="form.errors.password" class="mt-2" />
                    </div>
                </template>

                <template #footer>
                    <JetSecondaryButton @click="closeModal">
                        {{  t('global.cancel')  }}
                    </JetSecondaryButton>

                    <JetDangerButton class="ml-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                        @click="deleteUser">
                        {{  t('account.deleteAccount')  }}
                    </JetDangerButton>
                </template>
            </JetDialogModal>
        </template>
    </FormSection>
</template>
