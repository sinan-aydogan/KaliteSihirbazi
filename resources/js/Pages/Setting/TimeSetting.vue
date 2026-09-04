<script setup>
import {computed} from "vue";
import {useForm} from "@inertiajs/vue3";
import dayjs from "dayjs";
import SettingLayout from "@/Layouts/SettingLayout.vue";
import Menu from "@/Sources/settingMenu";
import FormSection from "@/Components/Form/FormSection.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import FormActionMessage from "@/Components/Form/FormActionMessage.vue";
import {DATE_FORMAT_OPTIONS, TIME_FORMAT_OPTIONS} from "@/Stores/useFormat.js";

const {links} = Menu();

const props = defineProps({
    settings: {
        type: Array,
        required: true,
    },
});

const settingObject = () => {
    let obj = {};
    props.settings.forEach(setting => {
        obj[setting.code] = {
            value: setting.value,
            type: setting.type,
        };
    });
    return obj;
};

const form = useForm(settingObject());

// Live preview: show "now" formatted with each candidate preset.
const now = dayjs();
const dateFormatOptions = DATE_FORMAT_OPTIONS.map(value => ({value, label: now.format(value)}));
const timeFormatOptions = TIME_FORMAT_OPTIONS.map(value => ({value, label: now.format(value)}));

const updateSettings = () => {
    form.post(route('global-setting.time.update'), {
        preserveScroll: true,
    });
};
</script>

<template>
    <SettingLayout
        :links="links"
        :title="$t('settingMenu.timeSettings')"
    >
        <template #actionArea>
            <simple-button type="route" :link="route('global-setting.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="$t('action.goBack')"/>
            </simple-button>
        </template>

        <div class="space-y-4">
            <FormSection
                :title="$t('settingMenu.dateFormat')"
                :description="$t('settingMenu.dateFormatDesc')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex-grow mr-4">
                        <input-group>
                            <select-input v-model="form.global_date_format.value" :options="dateFormatOptions" option-key="value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="form.global_date_format.value !== settingObject().global_date_format.value"
                                :label="$t('action.saveChanges')"
                                :loading="form.processing"
                                :disabled="form.processing"
                                @click="updateSettings"
                            />
                            <FormActionMessage v-else :on="form.recentlySuccessful">
                                {{ $t('message.feedback.saved') }}
                            </FormActionMessage>
                        </transition>
                    </div>
                </div>
            </FormSection>

            <FormSection
                :title="$t('settingMenu.timeFormat')"
                :description="$t('settingMenu.timeFormatDesc')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex-grow mr-4">
                        <input-group>
                            <select-input v-model="form.global_time_format.value" :options="timeFormatOptions" option-key="value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="form.global_time_format.value !== settingObject().global_time_format.value"
                                :label="$t('action.saveChanges')"
                                :loading="form.processing"
                                :disabled="form.processing"
                                @click="updateSettings"
                            />
                            <FormActionMessage v-else :on="form.recentlySuccessful">
                                {{ $t('message.feedback.saved') }}
                            </FormActionMessage>
                        </transition>
                    </div>
                </div>
            </FormSection>
        </div>
    </SettingLayout>
</template>
