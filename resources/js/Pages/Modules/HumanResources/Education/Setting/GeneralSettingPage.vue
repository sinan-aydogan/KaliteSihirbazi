<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {useForm} from "@inertiajs/vue3";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import FormSection from "@/Components/Form/FormSection.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import FileTypeSelectInput from "@/Components/Form/FileTypeSelectInput.vue";
import FileSizeInput from "@/Components/Form/FileSizeInput.vue";
import FormActionMessage from "@/Components/Form/FormActionMessage.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

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

const updateSettings = () => {
    form.post(route('education-setting.update'), {
        preserveScroll: true,
    })
}
</script>

<template>
    <app-layout
        :title="tm('setting.education.generalSettings.title')"
        :sub-title="tm('setting.education.generalSettings.subTitle')"
    >
        <template #actionArea>
            <simple-button type="route" :link="route('education-setting.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <div class="space-y-4">
            <FormSection
                :title="tm('setting.education.allowedFileTypes.title')"
                :description="tm('setting.education.allowedFileTypes.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex-grow mr-4">
                        <input-group>
                            <file-type-select-input v-model="form.education_allowed_file_types.value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="JSON.stringify(form.education_allowed_file_types.value) !== JSON.stringify(settingObject().education_allowed_file_types.value)"
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
                :title="tm('setting.education.maxFileSize.title')"
                :description="tm('setting.education.maxFileSize.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="mr-4">
                        <input-group>
                            <file-size-input v-model="form.education_max_file_size.value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <SimpleButton
                                v-if="JSON.stringify(form.education_max_file_size.value) !== JSON.stringify(settingObject().education_max_file_size.value)"
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
    </app-layout>
</template>
