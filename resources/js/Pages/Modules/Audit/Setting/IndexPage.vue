<script setup>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Menu from "./menu";
import InputGroup from "@/Components/Form/InputGroup.vue";
import SwitchInput from "@/Components/Form/SwitchInput.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import {useForm} from "@inertiajs/vue3";
import FormSection from "@/Components/Form/FormSection.vue";
import FormActionMessage from "@/Components/Form/FormActionMessage.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates();

const props = defineProps({
    settings: {
        type: Array,
        required: true,
    },
})

const settingObject = () => {
    let obj = {};
    props.settings.forEach(setting => {
        obj[setting.code] = {
            value: setting.type === 'json' ? JSON.parse(setting.value) : setting.value,
            type: setting.type,
        };
    })
    return obj;
}

const form = useForm(settingObject());

const {links} = Menu()

const updateSettings = () => {
    form.post(route('audit-setting.update'), {
        preserveScroll: true,
    })
}
</script>

<template>
    <SettingLayout
        :title="tm('setting.audit.title')"
        :sub-title="tm('setting.audit.subTitle')"
        :links="links"
    >
        <template #actionArea>
            <help-button title="Denetim Ayarları — Nasıl Çalışır?" subtitle="Denetim modülünün davranışını etkileyen genel ayarlar">
                <p><strong>Dış Denetim Ön Koşulu</strong> açıldığında: yeni bir dış denetim (Belgelendirme/Tedarikçi/Müşteri) oluşturduğunuzda, seçtiğiniz kapsam(lar)da yakın zamanda tamamlanmış bir iç denetim yoksa sistem bunu size sarı bir uyarı olarak gösterir. Bu <em>engelleyici değil, önerici</em> bir kontroldür — denetim yine de oluşturulur.</p>
                <p><strong>Ön Koşul Zaman Penceresi</strong>, "yakın zamanda" kelimesinin kaç gün anlamına geldiğini belirler (varsayılan 365 gün).</p>
                <p>Soldaki menüden Denetim Türleri, Kapsamları, Checklist Şablonları ve İç Denetçiler tanım sayfalarına da ulaşabilirsiniz.</p>
            </help-button>
            <simple-button type="route" :link="route('audit.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <div class="space-y-4">
            <FormSection
                :title="tm('setting.audit.prerequisite.title')"
                :description="tm('setting.audit.prerequisite.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3 mr-4">
                        <input-group>
                            <switch-input v-model="form.audit_external_requires_internal_first.value"/>
                        </input-group>
                        <span v-text="tm('setting.audit.prerequisite.toggleLabel')"/>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="form.audit_external_requires_internal_first.value !== settingObject().audit_external_requires_internal_first.value"
                                :label="t('action.saveChanges')"
                                :loading="form.processing"
                                :disabled="form.processing"
                                @click="updateSettings"
                            />
                            <FormActionMessage v-else :on="form.recentlySuccessful">
                                {{ t('message.feedback.saved') }}
                            </FormActionMessage>
                        </transition>
                    </div>
                </div>
            </FormSection>

            <FormSection
                :title="tm('setting.audit.window.title')"
                :description="tm('setting.audit.window.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="mr-4 w-40">
                        <input-group>
                            <text-input input-type="number" v-model="form.audit_internal_prerequisite_window_days.value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="String(form.audit_internal_prerequisite_window_days.value) !== String(settingObject().audit_internal_prerequisite_window_days.value)"
                                :label="t('action.saveChanges')"
                                :loading="form.processing"
                                :disabled="form.processing"
                                @click="updateSettings"
                            />
                            <FormActionMessage v-else :on="form.recentlySuccessful">
                                {{ t('message.feedback.saved') }}
                            </FormActionMessage>
                        </transition>
                    </div>
                </div>
            </FormSection>
        </div>
    </SettingLayout>
</template>
