<script setup>
/*Functions*/
import { computed } from "vue";
import {usePage, useForm} from '@inertiajs/vue3';
import { useI18n } from "vue-i18n";

/*Components*/
import FormSection from '@/Components/Form/FormSection.vue';
import FormActionMessage from '@/Components/Form/FormActionMessage.vue';
import SimpleButton from "@/Components/Button/SimpleButton.vue";


/*Multi-lang*/
const { t } = useI18n();

const themes = computed(() => {
    return [
        {
            id: 'light',
            name: t('account.lightTheme'),
            description: t('account.lightThemeDesc'),
            icon: 'sun',
            style: 'bg-amber-500'
        },
        {
            id: 'dark',
            name: t('account.darkTheme'),
            description: t('account.darkThemeDesc'),
            icon: 'moon',
            style: 'bg-slate-800'
        },
        {
            id: 'auto',
            name: t('account.autoTheme'),
            description: t('account.autoThemeDesc'),
            icon: 'wand-magic-sparkles',
            style: 'bg-sky-500'
        }
    ]
})

const themeUpdateForm = useForm({
    activeTheme: usePage().props.auth.user.theme
})

const updateActiveTheme = () => {
    themeUpdateForm.post(route('user-theme.update'), {
        errorBag: 'activeTheme',
        preserveScroll: true,
    })
}
</script>

<template>
    <FormSection
        :title="t('account.theme')"
        :description="t('account.themeDesc')"
    >
                <div class="flex justify-between h-10 mb-2">
                    <div class="flex justify-between space-x-4 select-none">
                        <template v-for="theme in themes">
                            <div class="inline-flex items-center space-x-2 px-4" :class="[
                                themeUpdateForm.activeTheme === theme.id ?
                                    theme.style + ' rounded-md text-white'
                                    :
                                    'opacity-50 dark:opacity-75 cursor-pointer'


                            ]"
                                @click="themeUpdateForm.activeTheme !== theme.id && (themeUpdateForm.activeTheme = theme.id)">
                                <!--Icon-->
                                <font-awesome-icon :icon="`fa-solid fa-${theme.icon}`" />

                                <!--Theme Name-->
                                <span v-text="theme.name" v-if="themeUpdateForm.activeTheme === theme.id" />
                            </div>
                        </template>
                    </div>
                    <div class="flex items-center space-x-2">

                        <transition mode="out-in" name="fade">
                            <!--Save Button-->
                          <SimpleButton
                              v-if="themeUpdateForm.activeTheme !== $page.props.auth.user.theme"
                              :label="t('action.saveChanges')"
                              :loading="themeUpdateForm.processing"
                              :disabled="themeUpdateForm.processing || (themeUpdateForm.activeTheme === $page.props.auth.user.theme)"
                              @click="updateActiveTheme"
                          />
                            <!--Success Message-->
                            <FormActionMessage v-else :on="themeUpdateForm.recentlySuccessful">
                                {{  t('message.feedback.saved')  }}
                            </FormActionMessage>
                        </transition>
                    </div>
                </div>

                <!--Theme Description-->
                <span
                    v-text="themes.find((t) => (t.id === themeUpdateForm.activeTheme)).description"
                    class="text-xs text-slate-500 dark:text-slate-300 italic" />
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
