<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Form from "@/Components/Form/Form.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import TextAreaInput from "@/Components/Form/TextAreaInput.vue";
import FileInput from "@/Components/Form/FileInput.vue";
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import draggable from "vuedraggable";

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Props
const props = defineProps({
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
    users: {
        type: Array,
        default: []
    },
    namingRule: {
        type: String,
        required: true
    },
})

// Store
import {useCreateDocumentStore} from "@/Pages/Modules/Document/stores/createDocument";
import {computed, onBeforeMount, ref} from "vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const createDocumentStore = useCreateDocumentStore()
const drag = ref(false)

const approverList = computed(()=>{
    return props.users.filter((user)=>{
        if(createDocumentStore.approvers.selected.length>0){
            return !createDocumentStore.approvers.selected.find(i=>i.id === user.id)
        }else{
            return user
        }

    })
})

onBeforeMount(() => {
    createDocumentStore.setNamingRule(props.namingRule)
})
</script>

<template>
    <app-layout
        :title="tm('title.createPage.title')"
        :sub-title="tm('title.createPage.subTitle')"
    >
        <!--General Info-->
        <Form multipart title="Genel Bilgiler" has-header>
            <FormSection grid>
                <template #title>Döküman Kimliği</template>
                <template #description>Dökümanın kimlik bilgileri</template>
                <!-- Code -->
                <input-group v-if="namingRule === 'manual'" class="col-span-3" labelFor="code"
                             :label="tm('term.code')" :errors="createDocumentStore.v$.code.$errors">
                    <text-input v-model="createDocumentStore.form.code"/>
                </input-group>

                <!-- Name -->
                <input-group :class="namingRule === 'manual' ? 'col-span-9' : 'col-span-12'" labelFor="name"
                             :label="tm('term.name')"
                             :errors="createDocumentStore.v$.name.$errors">
                    <text-input v-model="createDocumentStore.form.name"/>
                </input-group>
            </FormSection>

            <FormSection grid>
                <template #title>İlişkiler</template>
                <template #description>Dökümanın bağlı olduğu konumlar, dağıtım noktları</template>

                <!-- Type -->
                <input-group class="col-span-6" labelFor="document_type_id" :label="tm('term.type')"
                             :errors="createDocumentStore.v$.document_type_id.$errors">
                    <select-input v-model="createDocumentStore.form.document_type_id" :options="types"
                                  optionLabel="name"/>
                </input-group>

                <!-- Department -->
                <input-group class="col-span-6" labelFor="document_type_id" :label="tm('term.department')"
                             :errors="createDocumentStore.v$.department_id.$errors">
                    <select-input v-model="createDocumentStore.form.department_id" :options="departments"
                                  optionLabel="name"/>
                </input-group>

                <!-- Distribution Point -->
                <input-group class="col-span-12" labelFor="distribution_points"
                             :label="tm('term.distributionPoints')">
                    <multi-select-input v-model="createDocumentStore.form.distribution_points"
                                        :options="distributionPoints"
                                        optionLabel="name"/>
                </input-group>
            </FormSection>


            <FormSection>
                <!-- Description -->
                <input-group class="col-span-3" labelFor="type" :label="tm('term.description')">
                    <text-area-input v-model="createDocumentStore.form.description"/>
                </input-group>

                <!-- File -->
                <input-group class="col-span-3" labelFor="type" :label="tm('term.file')">
                    <file-input v-model="createDocumentStore.form.file"/>
                </input-group>
            </FormSection>
        </Form>

        <!--Review Procedure-->
        <Form title="Onay Bilgileri"
              has-header
              class="mt-6"
        >
            <FormSection grid title="Okuyucular"
                         description="Dökümanın muhatabı olan ve değişikliklerin mutlaka bildirilmesi gereken kullanıcılar.">
                <input-group label="Okuyucular" class="col-span-12">
                    <multi-select-input :options="users" option-label="name" option-key="id"/>
                </input-group>
            </FormSection>

            <FormSection grid title="Onaylayıcılar"
                         description="Dökümanın yayınlanmadan önce dökümanın uygunluğu teyit eden kişiler.">
                <input-group label="Kontrol Eden" class="col-span-12">
                    <div class="flex gap-4">
                        <select-input v-model="createDocumentStore.approvers.temp" :options="approverList" option-label="name"
                                      option-key="id" emit-object/>
                        <SimpleButton @click="createDocumentStore.addApprover()">Ekle</SimpleButton>
                    </div>
                </input-group>

                <!--Approver List-->
                <div class="flex flex-col col-span-12">
                    <draggable
                        :list="createDocumentStore.approvers.selected"
                        item-key="name"
                        class=""
                        ghost-class="ghost"
                        @start="drag = true"
                        @end="drag = false"
                    >
                        <template #item="{ element, index }">
                            <div class="flex border-t border-x last:border-b w-full p-2 first:rounded-t last:rounded-b">
                                <span v-text="index+1" class="px-2 border-r"></span>
                                <div class="flex justify-between w-full items-center">
                                    <span v-text="element.name" class="px-4"></span>
                                    <font-awesome-icon icon="fa-solid fa-trash"
                                                       class="mr-2 cursor-pointer hover:text-red-500 active:scale-90"
                                                       @click="createDocumentStore.removeApprover(index)"/>
                                </div>
                            </div>
                        </template>
                    </draggable>
                </div>
            </FormSection>
        </Form>
    </app-layout>
</template>
