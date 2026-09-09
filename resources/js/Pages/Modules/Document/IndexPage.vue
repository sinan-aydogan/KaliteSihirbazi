<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";

// Components
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import Avatar from "@/Components/Avatar/Avatar.vue"

import {useShowDocument} from "./stores/showDocument";

const showDocument = useShowDocument();

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    },
    departments: {
        type: Array,
        default: []
    },
    types: {
        type: Array,
        default: []
    },
    distributionPoints: {
        type: Array,
        default: []
    },
    namingRule: {
        type: String,
        required: true
    },
    allowedFileTypes: {
        type: Array,
        default: () => []
    },
    tagTypes: {
        type: Array,
        default: () => []
    },
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, requiredIf, maxLength, helpers} from "@vuelidate/validators"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue";
import FileInput from "@/Components/Form/FileInput.vue";
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ShowModal from "@/Pages/Modules/Document/ShowModal.vue";
import {fileTypesToAcceptAttribute} from "@/Components/Form/FileTypeSelectInput.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";

const fileAccept = computed(() => fileTypesToAcceptAttribute(props.allowedFileTypes))

/*Table*/
const tableHeaders = [
    {
        id: 'code',
        label: tm('term.code')
    },
    {
        id: 'name',
        label: tm('term.name')
    },
    {
        id: 'document_type',
        label: tm('term.type'),
        value: (value) => value.document_type.name,
    },
    {
        id: 'department',
        label: tm('term.department'),
        value: (value) => value.department.name,
    },
    {
        id: 'creator',
        label: tm('term.creator'),
    },
    {
        id: 'distributionPoints',
        label: t('term.distributionPoints'),
        align: 'center',
    },
    {
        id: 'tags',
        label: tm('term.tags'),
    }
]
const showModal = ref(false);
const showDistributionPointsModal = ref(false);

/*Form*/
const formType = ref("create");
const formRef = ref()
const form = useForm({
    id: null,
    code: "",
    name: "",
    description: "",
    document_type_id: null,
    department_id: null,
    publishing_status: 'draft',
    distribution_points: [],
    related_departments: [],
    tag_ids: [],
    file: null
})

/*Tags: one multi-select per enabled tag type, merged into form.tag_ids*/
const tagIdsForType = (tagType) => form.tag_ids.filter(id => tagType.tags.some(tag => tag.id === id))
const setTagIdsForType = (tagType, value) => {
    const typeTagIds = new Set(tagType.tags.map(tag => tag.id))
    form.tag_ids = [...form.tag_ids.filter(id => !typeTagIds.has(id)), ...value]
}

/*Related Data with select*/
const loading = ref(false)
const getDataModel = ref()
const getData = (query) => {
    if (query) {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            router.reload({
                data: {
                    qD: query
                },
                preserveState: true,
                preserveScroll: true,
                only: [getDataModel.value]
            })
        }, 500)
    } else {
        props[getDataModel.value] = []
    }
}

// Rules
const rules = ref({
    code: {
        required: helpers.withMessage(t('message.validation.required'), requiredIf(props.namingRule === 'manual')),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
    },
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    document_type_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    department_id: {required: helpers.withMessage(t('message.validation.required'), required)},
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('document.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            },
            forceFormData: true,
        })
    } else {
        form.put(route('document.update', {id: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    }
}

/*Update*/
const getRowInfo = (id) => {
    axios.get(route("document.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.name = response.data.name;
        form.description = response.data.description;
        form.document_type_id = response.data.document_type_id;
        form.department_id = response.data.department_id;
        form.publishing_status = response.data.publishing_status;
        form.distribution_points = response.data.distribution_points;
        form.related_departments = response.data.related_departments;
        form.file = response.data.file;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("document.destroy", id), {
        preserveState: true,
    });
}

/*Show Distribution Points*/
const selectedDocument = ref([]);
const showDistributionPoints = (points) => {
    showDistributionPointsModal.value = true;
    selectedDocument.value = points.distribution_points;
}

const handleFileChange = (files) => {
   form.file = files[0] || null;
}

const handleCloseModal = () => {
    v$.value.$reset();
    form.reset();
    showModal.value = false;
}

</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Doküman Yönetimi — Nasıl Çalışır?" subtitle="Versiyon onay akışını, revizyon taleplerini ve iptal/yerine geçme mekanizmasını buradan öğrenin">
                <p><strong>Versiyon Onay Akışı:</strong> Taslak → (Onaya Gönder) → İnceleniyor → (İnceleme Onayı) → Onay Bekliyor → (Onayla) → Onaylandı. İnceleme veya onay adımında reddedilirse versiyon "Reddedildi" durumuna geçer. Bir versiyon onaylandığında, dökümanın önceki onaylı versiyonu otomatik olarak "Eskidi" durumuna geçer — aynı anda yalnızca bir versiyon yürürlükte kalır.</p>
                <p><strong>Yeni Revizyon:</strong> Bir dökümana yeni revizyon (versiyon), yalnızca mevcut versiyon Onaylandı/Reddedildi/Eskidi durumlarından birindeyken eklenebilir — süreci devam eden (Taslak/İnceleniyor/Onay Bekliyor) bir versiyon varken yeni revizyon başlatılamaz.</p>
                <p><strong>Revizyon Talebi:</strong> Herhangi bir kullanıcı bir dökümanın revize edilmesini talep edebilir. Talep, yetkili biri tarafından kabul veya reddedilir; kabul edilen bir talep, onu karşılayan yeni versiyon yüklendiğinde otomatik olarak "Tamamlandı" durumuna geçer.</p>
                <p><strong>İptal / Yerine Geçme:</strong> Bir döküman iptal edildiğinde, varsa onaylı versiyonu da "Eskidi" durumuna alınır. İptal ederken isteğe bağlı olarak dökümanın yerine geçen başka bir döküman belirtilebilir.</p>
                <p><strong>Dağıtım Noktaları ve Yetkiler:</strong> Bir versiyon onaylandığında, dökümanın türüne yetkili (Yazar/İnceleyen/Onaylayan/Görüntüleyen) tüm kullanıcılara ve dağıtım noktalarındaki herkese "okudum/anladım" onay kaydı otomatik olarak açılır.</p>
            </help-button>
            <!--Deleted Documents-->
            <simple-button type="route" :link="route('department.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('term.deletedItems')"/>
            </simple-button>

            <!--Manage Department Module-->
            <simple-button type="route" :link="route('document-setting.index')" color="blue">
                <font-awesome-icon icon="fa-solid fa-cog" class="mr-2"/>
                <span v-text="tm('term.manageModule')"/>
            </simple-button>

            <!--Add New Button-->
            <simple-button @click="showModal = true; formType = 'create'; form.reset()" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="$t('action.addNew')"/>
            </simple-button>
        </template>
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @view="showDocument.getDocument($event.id)"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            show-action
            edit-action
            delete-action
            :delete-action-visible="(row) => row.can_delete"
        >
            <!--Creator-->
            <template #creator="{props}">
                <div class="flex space-x-2 items-center">
                    <avatar :src="props.creator.profile_photo_url"/>
                    <span v-text="props.creator.name"/>
                </div>
            </template>

            <!--Distribution Points-->
            <template #distributionPoints="{props}">
                <font-awesome-icon
                    icon="location-dot"
                    class="hover:scale-105 cursor-pointer transition-all"
                    @click="showDistributionPoints(props)"
                />
            </template>

            <!--Tags-->
            <template #tags="{props}">
                <div class="flex flex-wrap gap-1">
                    <span v-for="tag in props.tags" :key="tag.id" v-text="tag.name"
                          class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-xs"/>
                </div>
            </template>
        </Table>
    </app-layout>

    <teleport to="body">
        <!--Modal-->
        <Modal
            v-model="showModal"
            :header="tm('title.createPage.title')"
            :subHeader="tm('title.createPage.subTitle')"
            closeable
            close-button
            @closed="handleCloseModal"
        >
            <Form full-size multipart>
                <FormSection grid>
                    <!-- Code -->
                    <input-group v-if="namingRule === 'manual'" class="col-span-3" labelFor="code"
                                 :label="tm('term.code')" :errors="v$.code.$errors">
                        <text-input v-model="form.code"/>
                    </input-group>

                    <!-- Name -->
                    <input-group :class="namingRule === 'manual' ? 'col-span-9' : 'col-span-12'" labelFor="name"
                                 :label="tm('term.name')"
                                 :errors="v$.name.$errors">
                        <text-input v-model="form.name"/>
                    </input-group>

                </FormSection>

                <FormSection grid>
                    <!-- Type -->
                    <input-group class="col-span-6" labelFor="document_type_id" :label="tm('term.type')"
                                 :errors="v$.document_type_id.$errors">
                        <select-input v-model="form.document_type_id" :options="types" optionLabel="name"/>
                    </input-group>

                    <!-- Department -->
                    <input-group class="col-span-6" labelFor="document_type_id" :label="tm('term.department')"
                                 :errors="v$.department_id.$errors">
                        <select-input v-model="form.department_id" :options="departments" optionLabel="name"/>
                    </input-group>

                    <!-- Distribution Point -->
                    <input-group class="col-span-12" labelFor="distribution_points"
                                 :label="tm('term.distributionPoints')">
                        <multi-select-input v-model="form.distribution_points" :options="distributionPoints"
                                            optionLabel="name"/>
                    </input-group>

                    <!-- Tags: one multi-select per tag type enabled for this module -->
                    <input-group v-for="tagType in tagTypes" :key="tagType.id" class="col-span-12"
                                 :label="tagType.name">
                        <multi-select-input :model-value="tagIdsForType(tagType)"
                                            @update:model-value="(value) => setTagIdsForType(tagType, value)"
                                            :options="tagType.tags" optionLabel="name"/>
                    </input-group>
                </FormSection>


                <FormSection>
                    <!-- Description -->
                    <input-group class="col-span-3" labelFor="type" :label="tm('term.description')">
                        <text-area-input v-model="form.description"/>
                    </input-group>

                    <!-- File -->
                    <input-group class="col-span-3" labelFor="type" :label="tm('term.file')">
                        <file-input
                            @change="handleFileChange"
                            :accept="fileAccept"
                            browse-label="Belge Seçin"
                        />
                    </input-group>
                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit"
                              :loading="form.processing"/>
            </template>
        </Modal>


        <!--Distribution Points Modal-->
        <Modal
            v-model="showDistributionPointsModal"
            :header="tm('title.distributionPointIndexPage.title')"
            closeable
            close-button
        >
            <ul class="gap-4">
                <li v-for="point in selectedDocument" v-bind="point" v-text="point.name"></li>
            </ul>
        </Modal>

        <!--Show Modal-->
        <show-modal/>
    </teleport>
</template>
