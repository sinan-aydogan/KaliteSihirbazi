<script setup>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Menu from "./menu";
import InputGroup from "@/Components/Form/InputGroup.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import FileTypeSelectInput from "@/Components/Form/FileTypeSelectInput.vue";
import FileSizeInput from "@/Components/Form/FileSizeInput.vue";
import {useForm} from "@inertiajs/vue3";
import FormSection from "@/Components/Form/FormSection.vue";

// Multi-lang
import Translates from "../translates"
import FormActionMessage from "@/Components/Form/FormActionMessage.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const {t, tm} = Translates();

const props = defineProps({
    settings: {
        type: Array,
        required: true,
    },
})


const settingObject = ()=>{
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

const documentNamingRuleOptions = [
    {
        id: 'auto',
        label: tm('setting.document.namingRule.auto'),
        desc: tm('setting.document.namingRule.autoDesc'),
    },
    {
        id: 'manual',
        label: tm('setting.document.namingRule.manual'),
        desc: tm('setting.document.namingRule.manualDesc'),
    },
]

const {links} = Menu()

const updateSettings = () => {
    form.post(route('document-setting.update'), {
        preserveScroll: true,
    })
}
</script>

<template>
    <SettingLayout
        :title="tm('setting.document.title')"
        :sub-title="tm('setting.document.subTitle')"
        :links="links"
    >
        <template #actionArea>
            <simple-button type="route" :link="route('document.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <div class="space-y-4">
            <FormSection
                :title="tm('setting.document.namingRule.title')"
                :description="tm('setting.document.namingRule.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex flex-col mr-4">
                        <input-group>
                            <select-input v-model="form.document_naming_rule.value" :options="documentNamingRuleOptions" option-key="id"/>
                        </input-group>

                        <span class="ml-2 mt-2 -mb-2 italic text-xs">
                            <font-awesome-icon icon="fa-solid fa-info-circle"/>
                            {{documentNamingRuleOptions.find(i=>i.id === form.document_naming_rule.value)?.desc}}
                        </span>
                    </div>


                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">

                            <!--Save Button-->
                            <SimpleButton
                                v-if="form.document_naming_rule.value !== settingObject().document_naming_rule.value"
                                :label="t('action.saveChanges')"
                                :loading="form.processing"
                                :disabled="form.processing"
                                @click="updateSettings"
                            />
                            <!--Success Message-->
                            <FormActionMessage v-else :on="form.recentlySuccessful">
                                {{ t('message.feedback.saved') }}
                            </FormActionMessage>
                        </transition>
                    </div>
                </div>
            </FormSection>

            <FormSection
                :title="tm('setting.document.allowedFileTypes.title')"
                :description="tm('setting.document.allowedFileTypes.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="flex-grow mr-4">
                        <input-group>
                            <file-type-select-input v-model="form.document_allowed_file_types.value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <!--Save Button-->
                            <SimpleButton
                                v-if="JSON.stringify(form.document_allowed_file_types.value) !== JSON.stringify(settingObject().document_allowed_file_types.value)"
                                :label="t('action.saveChanges')"
                                :loading="form.processing"
                                :disabled="form.processing"
                                @click="updateSettings"
                            />
                            <!--Success Message-->
                            <FormActionMessage v-else :on="form.recentlySuccessful">
                                {{ t('message.feedback.saved') }}
                            </FormActionMessage>
                        </transition>
                    </div>
                </div>
            </FormSection>

            <FormSection
                :title="tm('setting.document.maxFileSize.title')"
                :description="tm('setting.document.maxFileSize.subTitle')"
            >
                <div class="flex justify-between items-center">
                    <div class="mr-4">
                        <input-group>
                            <file-size-input v-model="form.document_max_file_size.value"/>
                        </input-group>
                    </div>

                    <div class="flex items-center space-x-2">
                        <transition mode="out-in" name="fade">
                            <!--Save Button-->
                            <SimpleButton
                                v-if="JSON.stringify(form.document_max_file_size.value) !== JSON.stringify(settingObject().document_max_file_size.value)"
                                :label="t('action.saveChanges')"
                                :loading="form.processing"
                                :disabled="form.processing"
                                @click="updateSettings"
                            />
                            <!--Success Message-->
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
