<script setup>
import { reactive, ref} from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import {useForm, router} from "@inertiajs/vue3";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Table from "@/Components/Table/Table.vue";
import Form from "@/Components/Form/Form.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import Modal from "@/Components/Modal/Modal.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import {useNotification} from "@/Stores/useNotification.js";

// Props
const props = defineProps({
    tableData: {
        type: [Object, Array],
        default: () => []
    },
    supplierTypeTableData: {
        type: Object,
        default: {}
    },
    supplierTypes: {
        type: Array,
        default: []
    },
    supplierTags: {
        type: Array,
        default: []
    },
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"

/*Table*/
const tableHeaders = [
    {
        id: 'code',
        label: t('term.code')
    },
    {
        id: 'name',
        label: t('term.name')
    },
    {
        id: "types",
        label: t('term.type')
    },
    {
        id: "tags",
        label: t('term.tag')
    }
]

const showModal = ref(false);

/*Form*/
const formType = ref("create");

const formRef = ref()
const form = useForm({
    id: null,
    code: "",
    name: "",
    types: [],
    contact_info: {},
    tags: [],
    is_active: true,
    notes: {},
})

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
const rules = reactive({
    code: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
    },
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
});

const v$ = useVuelidate(rules, form)

const resetForm = () => {
    form.reset();
    v$.value.$reset();
    formType.value = 'create';
}

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('supplier.store'), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            }
        })
    } else if (formType.value === 'update') {
        form.put(route('supplier.update', {id: form.id}), {
            onSuccess: () => {
                resetForm();
                showModal.value = false;
            }
        })
    }
}

// Add New button handler
const handleAddNew = () => {
    resetForm();
    showModal.value = true;
    formType.value = 'create';
}

const createContactField = (type) => {
    let id = (Math.random().toString(36) + Date.now().toString(36)).toLowerCase().substr(2, 9)
    form.contact_info[id] = {
        type: type,
        title: '',
        value: '',
        is_primary: 0,
    }
}

const makeDefaultContactField = (id)=>{
    let type = form.contact_info[id].type
    let primary_count = 0
    for(const t in form.contact_info){
        if(form.contact_info[t].type === type && form.contact_info[t].is_primary === 1){
            primary_count++
        }
    }

    /*Validate*/
    if(form.contact_info[id].is_primary){
        form.contact_info[id].is_primary = false
    }else{
        if(primary_count === 0){
            form.contact_info[id].is_primary = true
        }else{
            alert('You can only have one primary contact')
        }
    }
}

const deleteContactField= (id) => {
    delete form.contact_info[id]
}

/*Update*/
const getRowInfo = (id) => {
    // Check if tableData has data property or is direct array
    const suppliers = props.tableData.data || props.tableData;
    const supplier = suppliers.find(item => item.id === id);

    if (supplier) {
        formType.value = "update";
        showModal.value = true;

        form.id = supplier.id;
        form.code = supplier.code;
        form.name = supplier.name;
        form.types = supplier.types?.map(type => type.id) || [];
        form.tags = supplier.tags?.map(tag => tag.id) || [];
        form.contact_info = supplier.contact_info || {};
        form.is_active = supplier.is_active;
        form.notes = supplier.notes || {};
    } else {
        useNotification().addStatic({
            type: 'danger',
            content: tm()('message.feedback.suppliersListEmpty'),
            _token: Date.now()
        });
    }
}

// Modal closed handler
const handleModalClosed = () => {
    resetForm();
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("supplier.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="$t('supplier.main.index.title')" :sub-title="$t('supplier.main.index.subTitle')">
        <template #actionArea>
            <!--
            <simple-button type="route" :link="route('supplier.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('term.deletedItems')"/>
            </simple-button>
            -->

            <simple-button @click="handleAddNew" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="$t('action.addNew')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="tableHeaders"
            @view="router.visit(route('supplier.show', $event.id))"
            @edit="getRowInfo($event.id)"
            show-action
            edit-action
        >
            <!--Types-->
            <template #types="{props}">
                {{ props.types.map((type) => type.name).join(', ')}}
            </template>

            <!--Tags-->
            <template #tags="{props}">
                {{ props.tags.map((tag) => tag.name).join(', ')}}
            </template>
        </Table>
    </app-layout>

    <teleport to="body">
        <!--Modal-->
        <Modal
            v-model="showModal"
            :header="formType === 'create' ? tm('title.createPage.title') : tm('title.updatePage.title')"
            :subHeader="formType === 'create' ? tm('title.createPage.subTitle') : tm('title.updatePage.subTitle')"
            closeable
            close-button
            @closed="handleModalClosed"
        >
            <Form full-size>
                <FormSection
                    bg-less
                >
                    <!-- Code -->
                    <input-group class="col-span-2" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
                        <text-input v-model="form.code"/>
                    </input-group>

                    <!-- Space Filler -->
                    <div class="col-span-4"></div>

                    <!-- Name -->
                    <input-group class="col-span-6" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                        <text-input v-model="form.name"/>
                    </input-group>

                    <!-- Type -->
                    <input-group class="col-span-3" labelFor="types" :label="tm('term.type')">
                        <select-input v-model="form.types" :options="supplierTypes" option-label="name"/>
                    </input-group>

                    <!-- Tags -->
                    <input-group class="col-span-3" labelFor="tags" :label="tm('term.tag')">
                        <select-input v-model="form.tags" :options="supplierTags" option-label="name"/>
                    </input-group>

                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="resetForm" />
                <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
