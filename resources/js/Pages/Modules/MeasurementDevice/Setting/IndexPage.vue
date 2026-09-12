<script setup>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Menu from "./menu";
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import {useForm} from "@inertiajs/vue3";
import FormSection from "@/Components/Form/FormSection.vue";
import FormActionMessage from "@/Components/Form/FormActionMessage.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";

// Multi-lang
import Translates from "./translates"

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
    form.post(route('measurement-device-setting.update'), {
        preserveScroll: true,
    })
}
</script>

<template>
    <SettingLayout
        :title="tm('title.indexPage.title')"
        :sub-title="tm('title.indexPage.subTitle')"
        :links="links"
    >
        <template #actionArea>
            <help-button title="Ölçüm Cihazı Yönetimi Ayarları — Nasıl Çalışır?" subtitle="Kalibrasyon hatırlatma süresini buradan değiştirebilirsiniz">
                <p><strong>Kalibrasyon Hatırlatma Süresi:</strong> Cihaz listesinde ve kalibrasyon görevleri sayfasında "Yaklaşan Kalibrasyonlar" olarak işaretlenmesi için, planlanan tarihe kalan gün sayısı eşiğidir. Bu eşiğin altına düşen ve henüz gerçekleşmemiş her görev otomatik olarak listelenir.</p>
            </help-button>
            <simple-button type="route" :link="route('measurement-device.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <div class="space-y-4">
            <FormSection
                :title="tm('term.reminderDays.title')"
                :description="tm('term.reminderDays.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4 mr-4">
                        <input-group :label="tm('term.reminderDays.label')">
                            <text-input input-type="number" v-model="form.calibration_reminder_days.value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="form.calibration_reminder_days.value !== settingObject().calibration_reminder_days.value"
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
