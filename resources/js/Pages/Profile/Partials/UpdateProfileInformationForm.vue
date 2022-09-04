<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Link, useForm } from '@inertiajs/inertia-vue3';
import JetButton from '@/Jetstream/Button.vue';
import Form from '@/Components/Form/Form.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import JetLabel from '@/Jetstream/Label.vue';
import FormActionMessage from '@/Components/Form/FormActionMessage.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";

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
    Inertia.delete(route('current-user-photo.destroy'), {
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
    <Form @submitted="updateProfileInformation">
        <template #title>
            {{  t('account.accountInformation')  }}
        </template>

        <template #description>
            {{  t('account.accountInformationDesc')  }}
        </template>

        <template #form>
            <!-- Profile Photo -->
            <div v-if="$page.props.jetstream.managesProfilePhotos" class="col-span-6 sm:col-span-4">
                <!-- Profile Photo File Input -->
                <input ref="photoInput" type="file" class="hidden" @change="updatePhotoPreview">

                <JetLabel for="photo" value="Photo" />

                <!-- Current Profile Photo -->
                <div v-show="!photoPreview" class="mt-2">
                    <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full h-20 w-20 object-cover">
                </div>

                <!-- New Profile Photo Preview -->
                <div v-show="photoPreview" class="mt-2">
                    <span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                        :style="'background-image: url(\'' + photoPreview + '\');'" />
                </div>

                <JetSecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                    {{  t('account.selectAvatar')  }}
                </JetSecondaryButton>

                <JetSecondaryButton v-if="user.profile_photo_path" type="button" class="mt-2"
                    @click.prevent="deletePhoto">
                    {{  t('account.removeAvatar')  }}
                </JetSecondaryButton>

                <JetInputError :message="form.errors.photo" class="mt-2" />
            </div>

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <input-group :label="t('account.name')" label-for="name" errorBag="updateProfileInformation"
                    :errors="form.errors.name">
                    <text-input id="name" v-model="form.name" autocomplete="name" ref="userName" />
                </input-group>
            </div>

            <!-- Email -->
            <div class="col-span-6 sm:col-span-4">
                <input-group :label="t('auth.email')" label-for="email" errorBag="updateProfileInformation"
                    :errors="form.errors.email">
                    <text-input id="email" v-model="form.email" ref="userEmail" />
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
