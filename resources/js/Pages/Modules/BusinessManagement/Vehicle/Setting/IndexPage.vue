<script setup>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Menu from "./menu";
import InputGroup from "@/Components/Form/InputGroup.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
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
            value: setting.value,
            type: setting.type,
        };
    })
    return obj;
}

const form = useForm(settingObject());

const {links} = Menu()

const updateSettings = () => {
    form.post(route('vehicle-setting.update'), {
        preserveScroll: true,
    })
}
</script>

<template>
    <SettingLayout
        :title="tm('setting.vehicle.title')"
        :sub-title="tm('setting.vehicle.subTitle')"
        :links="links"
    >
        <template #actionArea>
            <simple-button type="route" :link="route('vehicle.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <div class="divide-y divide-amber-500">
            Ayarlar
        </div>
    </SettingLayout>
</template>
