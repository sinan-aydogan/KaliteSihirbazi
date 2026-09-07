<script setup>
import {computed, ref} from "vue"
import {useForm, router} from "@inertiajs/vue3"
import {useI18n} from "vue-i18n"
import SettingLayout from "@/Layouts/SettingLayout.vue"
import useSettingMenu from "@/Sources/settingMenu.js"

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue"
import Modal from "@/Components/Modal/Modal.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"

const {t} = useI18n()
const {links} = useSettingMenu()

const props = defineProps({
    tagTypes: {
        type: Array,
        default: () => []
    }
})

const slugify = (value) => value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const headers = [
    {id: 'name', label: t('tagManagement.typeName')},
    {id: 'description', label: t('tagManagement.description')},
    {id: 'tags_count', label: t('tagManagement.tagCount'), align: 'center'},
]

/*Create / rename a tag type*/
const showTypeModal = ref(false)
const typeFormMode = ref('create')
const typeForm = useForm({
    id: null,
    key: '',
    name: '',
    description: '',
})

const openCreateType = () => {
    typeForm.reset()
    typeFormMode.value = 'create'
    showTypeModal.value = true
}

const openEditType = (row) => {
    typeForm.id = row.id
    typeForm.key = row.key
    typeForm.name = row.name
    typeForm.description = row.description
    typeFormMode.value = 'update'
    showTypeModal.value = true
}

const submitType = () => {
    if (typeFormMode.value === 'create') {
        typeForm
            .transform((data) => ({...data, key: data.key || slugify(data.name)}))
            .post(route('tag-type.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    showTypeModal.value = false
                    typeForm.reset()
                }
            })
    } else {
        typeForm.put(route('tag-type.update', typeForm.id), {
            preserveScroll: true,
            onSuccess: () => {
                showTypeModal.value = false
                typeForm.reset()
            }
        })
    }
}

const deleteType = (row) => {
    router.delete(route('tag-type.destroy', row.id), {preserveScroll: true})
}

/*Tags within a type*/
const selectedTypeId = ref(null)
const showTagsModal = ref(false)
const selectedType = computed(() => props.tagTypes.find(type => type.id === selectedTypeId.value))

const manageTags = (row) => {
    selectedTypeId.value = row.id
    showTagsModal.value = true
}

const newTagName = ref('')
const addTag = () => {
    if (!newTagName.value) return

    router.post(route('tag.store'), {
        tag_type_id: selectedTypeId.value,
        name: newTagName.value,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            newTagName.value = ''
        }
    })
}

const removeTag = (tag) => {
    router.delete(route('tag.destroy', tag.id), {preserveScroll: true})
}
</script>

<template>
    <setting-layout :title="t('settingMenu.tagManagement')" :links="links">
        <template #actionArea>
            <simple-button color="green" @click="openCreateType">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="t('action.addNew')"/>
            </simple-button>
        </template>

        <Table
            :data="tagTypes"
            :headers="headers"
            edit-action
            delete-action
            @edit="openEditType"
            @delete="deleteType"
            :custom-actions="[{
                action: manageTags,
                color: 'blue',
                label: t('tagManagement.manageTags'),
            }]"
        />

        <teleport to="body">
            <!--Tag Type Create/Edit Modal-->
            <Modal
                v-model="showTypeModal"
                :header="typeFormMode === 'create' ? t('tagManagement.createType') : t('tagManagement.editType')"
                closeable
                close-button
            >
                <Form>
                    <FormSection grid>
                        <input-group class="col-span-12" labelFor="name" :label="t('tagManagement.typeName')">
                            <text-input v-model="typeForm.name"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="description" :label="t('tagManagement.description')">
                            <text-input v-model="typeForm.description"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <simple-button color="green" @click="submitType" :loading="typeForm.processing">
                        <span v-text="t('action.save')"/>
                    </simple-button>
                </template>
            </Modal>

            <!--Manage Tags Modal-->
            <Modal
                v-model="showTagsModal"
                :header="selectedType ? (t('tagManagement.manageTags') + ' — ' + selectedType.name) : t('tagManagement.manageTags')"
                closeable
                close-button
            >
                <div class="flex flex-col gap-4">
                    <div class="flex flex-wrap gap-2">
                        <div v-for="tag in selectedType?.tags ?? []" :key="tag.id"
                             class="flex items-center gap-2 px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-sm">
                            <span v-text="tag.name"/>
                            <font-awesome-icon icon="circle-xmark" class="cursor-pointer hover:text-rose-600"
                                               @click="removeTag(tag)"/>
                        </div>
                        <span v-if="!selectedType?.tags?.length" class="text-sm text-slate-400"
                              v-text="t('tagManagement.noTags')"/>
                    </div>

                    <div class="flex gap-2">
                        <text-input v-model="newTagName" :placeholder="t('tagManagement.newTagName')"
                                    @keyup.enter="addTag"/>
                        <simple-button color="green" @click="addTag">
                            <span v-text="t('action.add')"/>
                        </simple-button>
                    </div>
                </div>
            </Modal>
        </teleport>
    </setting-layout>
</template>
