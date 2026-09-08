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
    form.post(route('risk-setting.update'), {
        preserveScroll: true,
    })
}
</script>

<template>
    <SettingLayout
        :title="tm('setting.risk.title')"
        :sub-title="tm('setting.risk.subTitle')"
        :links="links"
    >
        <template #actionArea>
            <help-button title="Risk Ayarları — Nasıl Çalışır?" subtitle="Risk modülünün skorlama ve gözden geçirme davranışını etkileyen genel ayarlar">
                <p><strong>Skor Eşikleri</strong>: Her risk için Olasılık (1-5) × Etki (1-5) çarpılarak 1-25 arası bir skor hesaplanır. Bu üç eşik değeri, skorun Düşük/Orta/Yüksek/Kritik seviyesine nasıl dönüştüğünü belirler — örneğin "Orta" eşiği 6 ise, skoru 6 ve üzeri olan her risk en az Orta seviyede sayılır.</p>
                <p><strong>Gerçekleşme Sonrası Gözden Geçirme</strong> açıldığında: öngörülen bir risk gerçekleşip bir uygunsuzluğa dönüştüğünde (uygunsuzluk kaydı "Risk Gerçekleşmesi" kaynağıyla ve bu riske bağlı olarak açıldığında), sistem otomatik olarak riski "Gözden Geçirme Gerekiyor" durumuna alır ve bekleyen bir gözden geçirme kaydı açar. Bu kayıt tamamlanana kadar risk kapatılamaz — böylece "önlem yetersiz miydi, yoksa kabul edilebilir bir sonuç muydu?" sorusu her seferinde kayıt altına alınır.</p>
                <p>Soldaki menüden Risk Kategorileri ve Tehlike Sınıfları tanım sayfalarına da ulaşabilirsiniz.</p>
            </help-button>
            <simple-button type="route" :link="route('risk.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <div class="space-y-4">
            <FormSection
                :title="tm('setting.risk.thresholds.title')"
                :description="tm('setting.risk.thresholds.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4 mr-4">
                        <input-group :label="tm('term.riskLevel.medium')">
                            <text-input input-type="number" v-model="form.risk_score_thresholds.value.medium"/>
                        </input-group>
                        <input-group :label="tm('term.riskLevel.high')">
                            <text-input input-type="number" v-model="form.risk_score_thresholds.value.high"/>
                        </input-group>
                        <input-group :label="tm('term.riskLevel.critical')">
                            <text-input input-type="number" v-model="form.risk_score_thresholds.value.critical"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="JSON.stringify(form.risk_score_thresholds.value) !== JSON.stringify(settingObject().risk_score_thresholds.value)"
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
                :title="tm('setting.risk.realizationReview.title')"
                :description="tm('setting.risk.realizationReview.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3 mr-4">
                        <input-group>
                            <switch-input v-model="form.risk_review_required_on_realization.value"/>
                        </input-group>
                        <span v-text="tm('setting.risk.realizationReview.toggleLabel')"/>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="form.risk_review_required_on_realization.value !== settingObject().risk_review_required_on_realization.value"
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
