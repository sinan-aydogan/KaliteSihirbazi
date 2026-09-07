<script setup>
import {useForm} from "@inertiajs/vue3"
import SettingLayout from "@/Layouts/SettingLayout.vue"
import Menu from "./menu"

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates()
const {links} = Menu()

const props = defineProps({
    tagTypes: {
        type: Array,
        default: () => []
    },
    enabledTagTypeIds: {
        type: Array,
        default: () => []
    },
})

const form = useForm({
    tag_type_ids: [...props.enabledTagTypeIds],
})

const handleSubmit = () => {
    form.post(route('document-tag-setting.update'), {preserveScroll: true})
}
</script>

<template>
    <SettingLayout
        :title="tm('setting.document.tags.title')"
        :sub-title="tm('setting.document.tags.subTitle')"
        :links="links"
    >
        <Form>
            <FormSection grid>
                <div class="col-span-12 flex flex-col gap-2">
                    <label v-for="tagType in tagTypes" :key="tagType.id"
                           class="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" :value="tagType.id" v-model="form.tag_type_ids"
                               class="rounded h-4 w-4 text-rose-600 focus:ring-rose-500"/>
                        <span v-text="tagType.name"/>
                    </label>
                    <span v-if="!tagTypes.length" class="text-sm text-slate-400" v-text="tm('setting.document.tags.noTypes')"/>
                </div>
            </FormSection>

            <template #actions>
                <SimpleButton color="green" @click="handleSubmit" :loading="form.processing">
                    <span v-text="t('action.save')"/>
                </SimpleButton>
            </template>
        </Form>
    </SettingLayout>
</template>
