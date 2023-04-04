<script setup>
import {ref} from 'vue';
import {useForm} from '@inertiajs/vue3';
import FormSection from '@/Components/Form/FormSection.vue';
import SimpleButton from '@/Components/Button/SimpleButton.vue';
import Modal from '@/Components/Modal/Modal.vue';
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";

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
    <FormSection
        :title="t('account.deleteAccount') "
        :description="t('account.deleteAccountDesc')"
    >

        <div class="max-w-xl text-sm">
            {{ t('account.deleteAccountInfo') }}
        </div>

        <div class="flex justify-end mt-4">
            <SimpleButton :label="t('account.deleteAccount')" @click="confirmUserDeletion" color="red"/>
        </div>

        <!-- Delete Account Confirmation Modal -->
        <Modal
            :header="t('account.deleteAccount')"
            :sub-header="t('account.deleteAccountDesc')"
            v-model="confirmingUserDeletion"
            @closed="closeModal"
        >
            <p v-text="t('account.deleteAccountModalMessage')" class="mb-4 text-sm"></p>
            <InputGroup :label="t('auth.password')" label-for="password" :errors="form.errors.password">
                <TextInput
                    v-model="form.password"
                    type="password"
                    :placeholder="t('auth.password')"
                    @keyup.enter="deleteUser"
                    ref="passwordInput"
                />
            </InputGroup>
            <template #footer>
                <!--Cancel Button-->
                <SimpleButton
                    :label="t('action.cancel')"
                    color="orange"
                    @click="closeModal"
                />

                <!--Delete Button-->
                <SimpleButton
                    :label="t('account.deleteAccount')"
                    color="red" @click="deleteUser"
                    :loading="form.processing"
                    :disabled="form.processing"
                />
            </template>
        </Modal>
    </FormSection>
</template>
