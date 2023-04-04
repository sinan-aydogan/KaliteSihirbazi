<script setup>
import {ref} from 'vue';
import {useForm} from '@inertiajs/vue3';
import FormActionMessage from '@/Components/Form/FormActionMessage.vue';
import FormSection from '@/Components/Form/FormSection.vue';
import SimpleButton from '@/Components/Button/SimpleButton.vue';
import Modal from '@/Components/Modal/Modal.vue';
import InputGroup from '@/Components/Form/InputGroup.vue';
import TextInput from '@/Components/Form/TextInput.vue';

defineProps({
    sessions: Array,
});

const confirmingLogout = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmLogout = () => {
    confirmingLogout.value = true;

    setTimeout(() => passwordInput.value.focus(), 250);
};

const logoutOtherBrowserSessions = () => {
    form.delete(route('other-browser-sessions.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingLogout.value = false;

    form.reset();
};
</script>

<template>
    <FormSection
        :title="t('account.browserSessions')"
        :description="t('account.browserSessionsDesc')"
    >

        <div class="max-w-xl text-sm">
            {{ t('account.browserSessionsInfo') }}
        </div>

        <!-- Other Browser Sessions -->
        <div v-if="sessions.length > 0" class="mt-5 space-y-6">
            <div v-for="(session, i) in sessions" :key="i" class="flex items-center">
                <div>
                    <svg v-if="session.agent.is_desktop" fill="none" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
                        <path
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                         class="w-8 h-8">
                        <path d="M0 0h24v24H0z" stroke="none"/>
                        <rect x="7" y="4" width="10" height="16" rx="1"/>
                        <path d="M11 5h2M12 17v.01"/>
                    </svg>
                </div>

                <div class="ml-3">
                    <div class="text-sm">
                        {{ session.agent.platform ? session.agent.platform : t('account.unknown') }} - {{
                            session.agent.browser
                                ? session.agent.browser : t('account.unknown')
                        }}
                    </div>

                    <div>
                        <div class="text-xs text-slate-500 dark:text-slate-400">
                            {{ session.ip_address }},

                            <span v-if="session.is_current_device" class="text-green-500 font-semibold">
                                    {{ t('account.thisDevice') }}
                                </span>
                            <span v-else>{{ t('account.lastActive') }} {{ session.last_active }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end items-center mt-4 space-x-2">
            <FormActionMessage :on="form.recentlySuccessful">
                {{ t('message.feedback.done') }}
            </FormActionMessage>
            <SimpleButton :label="t('account.logOutOtherDevices')" @click="confirmLogout"/>
        </div>

        <!-- Log Out Other Devices Confirmation Modal -->
        <Modal
            v-model="confirmingLogout"
            @closed="closeModal"
            :header="t('account.logOutOtherDevices')"
            :sub-header="t('account.confirmPasswordModalDesc')"
        >
            <InputGroup label-for="password" :label="t('auth.password')" :errors="form.errors.password">
                <TextInput v-model="form.password" type="password" :placeholder="t('auth.password')" @keyup.enter="logoutOtherBrowserSessions" ref="passwordInput"/>
            </InputGroup>
            <template #footer>
                <SimpleButton :label="t('action.cancel')" color="orange" @click="closeModal"/>
                <SimpleButton :label="t('account.logOutOtherDevices')" @click="logoutOtherBrowserSessions" :loading="form.processing" :disabled="form.processing"/>
            </template>
        </Modal>

    </FormSection>
</template>
