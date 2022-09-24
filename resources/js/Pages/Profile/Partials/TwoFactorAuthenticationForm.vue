<script setup>
import {ref, computed, watch} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import {useForm, usePage} from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/Form/FormSection.vue';
import SimpleButton from '@/Components/Button/SimpleButton.vue';
import JetConfirmsPassword from '@/Jetstream/ConfirmsPassword.vue';
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";

const props = defineProps({
  requiresConfirmation: Boolean,
});

const enabling = ref(false);
const confirming = ref(false);
const disabling = ref(false);
const qrCode = ref(null);
const setupKey = ref(null);
const recoveryCodes = ref([]);

const confirmationForm = useForm({
  code: '',
});

const twoFactorEnabled = computed(
    () => !enabling.value && usePage().props.value.user?.two_factor_enabled,
);

watch(twoFactorEnabled, () => {
  if (!twoFactorEnabled.value) {
    confirmationForm.reset();
    confirmationForm.clearErrors();
  }
});

const enableTwoFactorAuthentication = () => {
  enabling.value = true;

  Inertia.post('/user/two-factor-authentication', {}, {
    preserveScroll: true,
    onSuccess: () => Promise.all([
      showQrCode(),
      showSetupKey(),
      showRecoveryCodes(),
    ]),
    onFinish: () => {
      enabling.value = false;
      confirming.value = props.requiresConfirmation;
    },
  });
};

const showQrCode = () => {
  return axios.get('/user/two-factor-qr-code').then(response => {
    qrCode.value = response.data.svg;
  });
};

const showSetupKey = () => {
  return axios.get('/user/two-factor-secret-key').then(response => {
    setupKey.value = response.data.secretKey;
  });
}

const showRecoveryCodes = () => {
  return axios.get('/user/two-factor-recovery-codes').then(response => {
    recoveryCodes.value = response.data;
  });
};

const confirmTwoFactorAuthentication = () => {
  confirmationForm.post('/user/confirmed-two-factor-authentication', {
    errorBag: "confirmTwoFactorAuthentication",
    preserveScroll: true,
    preserveState: true,
    onSuccess: () => {
      confirming.value = false;
      qrCode.value = null;
      setupKey.value = null;
    },
  });
};

const regenerateRecoveryCodes = () => {
  axios
      .post('/user/two-factor-recovery-codes')
      .then(() => showRecoveryCodes());
};

const disableTwoFactorAuthentication = () => {
  disabling.value = true;

  Inertia.delete('/user/two-factor-authentication', {
    preserveScroll: true,
    onSuccess: () => {
      disabling.value = false;
      confirming.value = false;
    },
  });
};
</script>

<template>
  <FormSection
      :title="t('account.twoFactorAuthentication')"
      :description="t('account.twoFactorAuthenticationDesc')"
  >
    <h3 v-if="twoFactorEnabled && !confirming" class="text-lg font-medium text-emerald-600 dark:text-emerald-400">
      {{ t('account.twoFactorAuthenticationEnabledTitle') }}
    </h3>

    <h3 v-else-if="twoFactorEnabled && confirming" class="text-lg font-medium text-amber-600 dark:text-amber-400">
      {{ t('account.twoFactorAuthenticationFinishEnablingTitle') }}
    </h3>

    <h3 v-else class="text-lg font-medium text-rose-600 dark:text-rose-400">
      {{ t('account.twoFactorAuthenticationNotEnabledTitle') }}
    </h3>

    <div class="mt-3 max-w-xl text-sm">
      <p>
        {{ t('account.twoFactorAuthenticationNotEnabledDesc') }}
      </p>
    </div>

    <div v-if="twoFactorEnabled">
      <div v-if="qrCode">
        <div class="mt-4 max-w-xl text-sm">
          <p v-if="confirming" class="font-semibold">
            {{ t('account.twoFactorAuthenticationFinishEnablingDesc') }}
          </p>

          <p v-else>
            {{ t('account.twoFactorAuthenticationEnabledDesc') }}
          </p>
        </div>

        <div class="mt-4" v-html="qrCode"/>

        <div class="mt-4 max-w-xl text-sm" v-if="setupKey">
          <p class="font-semibold">
            {{ t('account.twoFactorAuthenticationSetupKey') }}: <span v-html="setupKey"></span>
          </p>
        </div>

        <div v-if="confirming" class="mt-4">
          <InputGroup :label="t('term.code')" label-for="code" :errors="confirmationForm.errors.code" error-bag="confirmTwoFactorAuthentication">
            <TextInput input-id="code" name="code" inputmode="numeric" autofocus  autocomplete="one-time-code" v-model="confirmationForm.code" @keyup.enter="confirmTwoFactorAuthentication"/>
          </InputGroup>
        </div>
      </div>

      <div v-if="recoveryCodes.length > 0 && !confirming">
        <div class="mt-4 max-w-xl text-sm">
          <p class="font-semibold">
            {{ t('account.twoFactorAuthenticationEnabledInfo') }}
          </p>
        </div>

        <div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg">
          <div v-for="code in recoveryCodes" :key="code">
            {{ code }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex space-x-2 justify-end mt-4">
      <div v-if="!twoFactorEnabled">
        <JetConfirmsPassword @confirmed="enableTwoFactorAuthentication"
                             :title="t('account.confirmPasswordModalTitle')"
                             :content="t('account.confirmPasswordModalDesc')"
                             :button="t('action.confirm')">
          <SimpleButton :label="t('action.enable')" :loading="enabling" :disabled="enabling"/>
        </JetConfirmsPassword>
      </div>

      <div v-else class="flex justify-end">
        <JetConfirmsPassword @confirmed="confirmTwoFactorAuthentication"
                             :title="t('account.confirmPasswordModalTitle')"
                             :content="t('account.confirmPasswordModalDesc')"
                             :button="t('action.confirm')">
          <SimpleButton v-if="confirming" class="mr-3" :label="t('action.confirm')" :loading="enabling"
                        :disabled="enabling"/>
        </JetConfirmsPassword>

        <JetConfirmsPassword @confirmed="regenerateRecoveryCodes"
                             :title="t('account.confirmPasswordModalTitle')"
                             :content="t('account.confirmPasswordModalDesc')"
                             :button="t('action.confirm')">
          <SimpleButton v-if="recoveryCodes.length > 0 && !confirming" class="mr-3"
                        :label="t('account.regenerateRecoveryCodes')"/>
        </JetConfirmsPassword>

        <JetConfirmsPassword @confirmed="showRecoveryCodes" :title="t('account.confirmPasswordModalTitle')"
                             :content="t('account.confirmPasswordModalDesc')" :button="t('action.confirm')">
          <SimpleButton v-if="recoveryCodes.length === 0 && !confirming" class="mr-3"
                        :label="t('account.showRecoveryCodes')"/>
        </JetConfirmsPassword>

        <JetConfirmsPassword @confirmed="disableTwoFactorAuthentication"
                             :title="t('account.confirmPasswordModalTitle')"
                             :content="t('account.confirmPasswordModalDesc')"
                             :button="t('action.confirm')">
          <SimpleButton v-if="confirming" :label="t('action.cancel')" color="orange" :loading="disabling" :disabled="disabling"/>
        </JetConfirmsPassword>

        <JetConfirmsPassword @confirmed="disableTwoFactorAuthentication"
                             :title="t('account.confirmPasswordModalTitle')"
                             :content="t('account.confirmPasswordModalDesc')"
                             :button="t('action.confirm')">
          <SimpleButton v-if="!confirming" :label="t('action.disable')" :loading="disabling" :disabled="disabling"/>
        </JetConfirmsPassword>
      </div>
    </div>
  </FormSection>
</template>
