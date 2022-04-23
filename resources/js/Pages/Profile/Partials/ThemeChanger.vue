<template>
  <jet-action-section>
    <template #title>
      {{ $t('account.theme') }}
    </template>

    <template #description>
      {{ $t('account.themeDesc') }}
    </template>

    <template #content>
      <div class="-mb-2">
        <div class="flex justify-between h-10 mb-2">
          <div class="flex justify-between space-x-4 select-none">
            <template v-for="theme in themes">
              <div
                  class="inline-flex items-center space-x-2 px-4"
                  :class="[
                                themeUpdateForm.activeTheme === theme.id ?
                                theme.style + ' rounded-md text-white'
                                :
                                'opacity-50 dark:opacity-75 cursor-pointer'


                        ]"
                  @click="themeUpdateForm.activeTheme !== theme.id && (themeUpdateForm.activeTheme = theme.id)"
              >
                <!--Icon-->
                <font-awesome-icon :icon="theme.icon"/>

                <!--Theme Name-->
                <span v-text="theme.name" v-if="themeUpdateForm.activeTheme === theme.id "/>
              </div>
            </template>
          </div>
          <div class="flex items-center space-x-2">

            <transition mode="out-in" name="fade">
              <!--Save Button-->
              <jet-button
                  v-if="themeUpdateForm.activeTheme !== $page.props.user.theme"
                  :class="{ 'opacity-25': themeUpdateForm.processing }"
                  :disabled="themeUpdateForm.processing || (themeUpdateForm.activeTheme === $page.props.user.theme)"
                  @click="updateActiveTheme"
              >
                {{ $t('global.saveChanges') }}
              </jet-button>

              <!--Success Message-->
              <jet-action-message v-else :on="themeUpdateForm.recentlySuccessful">
                {{ $t('global.saved') }}
              </jet-action-message>
            </transition>
          </div>
        </div>

        <!--Theme Description-->
        <div v-text="themes.find(t=>t.id === themeUpdateForm.activeTheme).description" class="text-xs text-slate-500 dark:text-slate-300 italic"/>
      </div>
    </template>
  </jet-action-section>
</template>

<script>
/*Functions*/
import {useForm} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";
import {useI18n} from "vue-i18n";

/*Components*/
import JetActionSection from '@/Jetstream/ActionSection.vue'
import JetDangerButton from '@/Jetstream/DangerButton.vue'
import JetButton from '@/Jetstream/Button.vue'
import JetActionMessage from '@/Jetstream/ActionMessage'
import {computed} from "vue";

export default {
  name: "ThemeChanger",
  components: {
    JetActionSection,
    JetDangerButton,
    JetButton,
    JetActionMessage,
  },
  setup() {
    /*Multi-lang*/
    const {t} = useI18n();

    const themes = computed(()=>{
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
      activeTheme: Inertia.page.props.user.theme
    })

    const updateActiveTheme = () => {
      themeUpdateForm.post(route('user-theme.update'), {
        errorBag: 'activeTheme',
        preserveScroll: true,
      })
    }

    return {
      themes,
      themeUpdateForm,
      updateActiveTheme
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .face-leave-active {
  transition: all ease-in-out 300ms;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(.5);
}

.fade-leave-from, .fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
