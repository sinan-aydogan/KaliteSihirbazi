<template>
  <jet-form-section @submitted="updateProfileInformation">
    <template #title>
      {{ $t('account.accountInformation') }}
    </template>

    <template #description>
      {{ $t('account.accountInformationDesc') }}
    </template>

    <template #form>
      <!-- Profile Photo -->
      <div class="col-span-6 sm:col-span-4" v-if="$page.props.jetstream.managesProfilePhotos">
        <!-- Profile Photo File Input -->
        <input type="file" class="hidden"
               ref="photo"
               @change="updatePhotoPreview">

        <jet-label for="photo" value="Photo"/>

        <!-- Current Profile Photo -->
        <div class="mt-2" v-show="! photoPreview">
          <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full h-20 w-20 object-cover">
        </div>

        <!-- New Profile Photo Preview -->
        <div class="mt-2" v-show="photoPreview">
                    <span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                          :style="'background-image: url(\'' + photoPreview + '\');'">
                    </span>
        </div>

        <jet-secondary-button class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
          {{ $t('account.selectAvatar') }}
        </jet-secondary-button>

        <jet-secondary-button type="button" class="mt-2" @click.prevent="deletePhoto" v-if="user.profile_photo_path">
          {{ $t('account.removeAvatar') }}
        </jet-secondary-button>

        <jet-input-error :message="form.errors.photo" class="mt-2"/>
      </div>

      <!-- Name -->
      <div class="col-span-6 sm:col-span-4">
        <input-group :label="$t('account.name')" label-for="name" :errors="form.errors.name">
          <text-input id="name" type="text" v-model="form.name" autocomplete="name"/>
        </input-group>
      </div>

      <!-- Email -->
      <div class="col-span-6 sm:col-span-4">
        <input-group :label="$t('auth.email')" label-for="email" :errors="form.errors.email">
          <text-input id="email" type="email" v-model="form.email"/>
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
import JetButton from '@/Jetstream/Button.vue'
import JetFormSection from '@/Jetstream/FormSection.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetInputError from '@/Jetstream/InputError.vue'
import JetLabel from '@/Jetstream/Label.vue'
import JetActionMessage from '@/Jetstream/ActionMessage.vue'
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
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
    JetSecondaryButton,
    InputGroup,
    TextInput
  },

  props: ['user'],

  data() {
    return {
      form: this.$inertia.form({
        _method: 'PUT',
        name: this.user.name,
        email: this.user.email,
        photo: null,
      }),

      photoPreview: null,
    }
  },

  methods: {
    updateProfileInformation() {
      if (this.$refs.photo) {
        this.form.photo = this.$refs.photo.files[0]
      }

      this.form.post(route('user-profile-information.update'), {
        errorBag: 'updateProfileInformation',
        preserveScroll: true,
        onSuccess: () => (this.clearPhotoFileInput()),
      });
    },

    selectNewPhoto() {
      this.$refs.photo.click();
    },

    updatePhotoPreview() {
      const photo = this.$refs.photo.files[0];

      if (!photo) return;

      const reader = new FileReader();

      reader.onload = (e) => {
        this.photoPreview = e.target.result;
      };

      reader.readAsDataURL(photo);
    },

    deletePhoto() {
      this.$inertia.delete(route('current-user-photo.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
          this.photoPreview = null;
          this.clearPhotoFileInput();
        },
      });
    },

    clearPhotoFileInput() {
      if (this.$refs.photo?.value) {
        this.$refs.photo.value = null;
      }
    },
  },
})
</script>
