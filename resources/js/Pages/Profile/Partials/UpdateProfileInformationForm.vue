<script setup>
import {ref} from 'vue';
import {useForm, router} from '@inertiajs/vue3';
import FormSection from "@/Components/Form/FormSection.vue";
import JetInputError from '@/Jetstream/InputError.vue';
import FormActionMessage from '@/Components/Form/FormActionMessage.vue';
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";

const props = defineProps({
    user: Object,
});

const userName = ref(null);
const userEmail = ref(null);

const form = useForm({
    _method: 'PUT',
    name: props.user.name,
    email: props.user.email,
    photo: null,
});

const verificationLinkSent = ref(null);
const photoPreview = ref(null);
const photoInput = ref(null);

const updateProfileInformation = () => {
    if (photoInput.value) {
        form.photo = photoInput.value.files[0];
    }

    form.post(route('user-profile-information.update'), {
        errorBag: 'updateProfileInformation',
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput(),
        onError: () => {
            if (form.errors.name) {
                form.reset('name');
                userName.value.focus();
            }

            if (form.errors.email) {
                form.reset('email');
                userEmail.value.focus();
            }
        },
    });
};

const sendEmailVerification = () => {
    verificationLinkSent.value = true;
};

const selectNewPhoto = () => {
    photoInput.value.click();
};

const updatePhotoPreview = () => {
    const photo = photoInput.value.files[0];

    if (!photo) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };

    reader.readAsDataURL(photo);
};

const deletePhoto = () => {
    router.delete(route('current-user-photo.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
            photoPreview.value = null;
            clearPhotoFileInput();
        },
    });
};

const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};
</script>

<template>

    <form-section
        :title="t('account.accountInformation')"
        :description="t('account.accountInformationDesc')"
    >
        <!-- Profile Photo -->
        <div v-if="$page.props.jetstream.managesProfilePhotos" class="col-span-6 sm:col-span-4">
            <!-- Profile Photo File Input -->
            <input ref="photoInput" type="file" class="hidden" @change="updatePhotoPreview">

            <h4 v-text="t('account.profilePhoto')"></h4>

            <!-- Current Profile Photo -->
            <div v-show="!photoPreview" class="flex justify-center mt-2">
                <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full h-36 w-36 object-cover">
            </div>

            <!-- New Profile Photo Preview -->
            <div v-show="photoPreview" class="mt-2">
                    <span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                          :style="'background-image: url(\'' + photoPreview + '\');'"/>
            </div>

            <div class="flex justify-center space-x-2 mt-2">
                <SimpleButton :label="t('account.selectAvatar')" size="slim" @click.prevent="selectNewPhoto"/>

                <SimpleButton v-if="user.profile_photo_path" :label="t('account.removeAvatar')" size="slim"  @click.prevent="deletePhoto"/>
            </div>

            <JetInputError :message="form.errors.photo" class="mt-2"/>
        </div>

        <!-- Name -->
        <div class="col-span-6 sm:col-span-4">
            <input-group :label="t('account.name')" label-for="name" errorBag="updateProfileInformation"
                         :errors="form.errors.name">
                <text-input id="name" v-model="form.name" autocomplete="name" ref="userName"/>
            </input-group>
        </div>

        <!-- Email -->
        <div class="col-span-6 sm:col-span-4">
            <input-group :label="t('auth.email')" label-for="email" errorBag="updateProfileInformation"
                         :errors="form.errors.email">
                <text-input id="email" v-model="form.email" ref="userEmail"/>
            </input-group>
        </div>

        <template #actions>
            <FormActionMessage :on="form.recentlySuccessful" class="mr-3">
                {{ t('message.feedback.saved') }}
            </FormActionMessage>

            <SimpleButton @click="updateProfileInformation" :label="t('action.save')" :loading="form.processing" :disabled="form.processing"/>
        </template>
    </form-section>
</template>
