<script setup>
/*Functions*/
import { useForm, usePage } from "@inertiajs/inertia-vue3";

/*Components*/
import FormSection from '@/Components/Form/FormSection.vue';
import FormActionMessage from '@/Components/Form/FormActionMessage.vue';
import SimpleButton from "@/Components/Button/SimpleButton.vue";

/*Sources*/
import { languages, flags } from "@/Languages/language";


const languageUpdateForm = useForm({
    activeLanguage: usePage().props.value.user.language
})

const updateActiveLanguage = () => {
    languageUpdateForm.post(route('user-language.update'), {
        errorBag: 'activeLanguage',
        preserveScroll: true,
    })
}
</script>

<template>
    <FormSection
        :title="t('account.displayLanguage')"
        :description="t('account.displayLanguageDesc')"
    >
            <div class="flex justify-between h-10">
                <div class="flex justify-between space-x-4">
                    <template v-for="language in languages">
                        <div class="inline-flex items-center space-x-2" :class="[
                            { 'opacity-25 cursor-pointer': languageUpdateForm.activeLanguage !== language.id },
                        ]"
                            @click="languageUpdateForm.activeLanguage !== language.id && (languageUpdateForm.activeLanguage = language.id)">
                            <!--Language Name-->
                            <span v-text="language.name" />
                            <!--Flag-->
                            <component :is="flags[language.flag]" class="w-6 aspect-auto drop-shadow" />
                        </div>
                    </template>
                </div>
                <div class="flex items-center space-x-2">

                    <transition mode="out-in" name="fade">
                        <!--Save Button-->
                      <SimpleButton
                          :label="t('action.saveChanges')"
                          v-if="languageUpdateForm.activeLanguage !== $page.props.user.language"
                          :loading="languageUpdateForm.processing"
                          :disabled="languageUpdateForm.processing || (languageUpdateForm.activeLanguage === $page.props.user.language)"
                          @click="updateActiveLanguage"
                      />

                        <!--Success Message-->
                        <FormActionMessage v-else :on="languageUpdateForm.recentlySuccessful">
                            {{  t('message.feedback.saved')  }}
                        </FormActionMessage>
                    </transition>
                </div>
            </div>
    </FormSection>
</template>

<style scoped>
.fade-enter-active,
.face-leave-active {
    transition: all ease-in-out 300ms;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(.5);
}

.fade-leave-from,
.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>
