<template>
  <jet-form-section @submitted="updatePassword">
    <template #title>
      {{ $t('account.updatePassword') }}
    </template>

    <template #description>
      {{ $t('account.updatePasswordDesc') }}
    </template>

    <template #form>
      <div class="col-span-6 sm:col-span-4">
        <input-group :label="$t('account.currentPassword')" label-for="current_password" :errors="form.errors.current_password">
          <text-input id="current_password" type="current_password" v-model="form.current_password" autocomplete="current-password"/>
        </input-group>
      </div>

      <div class="col-span-6 sm:col-span-4">
        <input-group :label="$t('account.newPassword')" label-for="password" :errors="form.errors.password">
          <text-input id="password" type="password" v-model="form.current_password" autocomplete="new-password"/>
        </input-group>
      </div>

      <div class="col-span-6 sm:col-span-4">
        <input-group :label="$t('account.confirmPassword')" label-for="password_confirmation" :errors="form.errors.password_confirmation">
          <text-input id="password_confirmation" type="password_confirmation" v-model="form.current_password" autocomplete="new-password"/>
        </input-group>
      </div>
    </template>

    <template #actions>
      <jet-action-message :on="form.recentlySuccessful" class="mr-3">
        {{ $t('global.saved') }}
      </jet-action-message>

      <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ $t('global.save') }}
      </jet-button>
    </template>
  </jet-form-section>
</template>

<script>
/*Functions*/
import {defineComponent} from 'vue'


/*Components*/
import JetActionMessage from '@/Jetstream/ActionMessage.vue'
import JetButton from '@/Jetstream/Button.vue'
import JetFormSection from '@/Jetstream/FormSection.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetInputError from '@/Jetstream/InputError.vue'
import JetLabel from '@/Jetstream/Label.vue'
import InputGroup from "@/Components/Form/InputGroup";
import TextInput from "@/Components/Form/TextInput";

export default defineComponent({
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel,
    InputGroup,
    TextInput
  },

  data() {
    return {
      form: this.$inertia.form({
        current_password: '',
        password: '',
        password_confirmation: '',
      }),
    }
  },

  methods: {
    updatePassword() {
      this.form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
        onError: () => {
          if (this.form.errors.password) {
            this.form.reset('password', 'password_confirmation')
            this.$refs.password.focus()
          }

          if (this.form.errors.current_password) {
            this.form.reset('current_password')
            this.$refs.current_password.focus()
          }
        }
      })
    },
  },
})
</script>
