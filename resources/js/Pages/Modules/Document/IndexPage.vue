<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
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
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue";
import FileInput from "@/Components/Form/FileInput.vue";

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
    description: "",
    document_type_id: null,
    publishing_status: 'draft',
    distribution_points: [],
    related_departments: [],
    file: null
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
const rules = ref({
    code: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
    },
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    document_type_id: {required: helpers.withMessage(t('message.validation.required'), required)},
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
            }
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
    axios.get(route("department.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.name = response.data.name;
        form.type = response.data.type;
        form.department_id = response.data.department_id;
        form.employee_id = response.data.employee_id;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("department.destroy", id), {
        preserveState: true,
    });
}

</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('department.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="t('term.deletedItems')"/>
            </simple-button>

            <simple-button @click="showModal = true; formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="t('action.addNew')"/>
            </simple-button>
        </template>
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @view="router.visit(route('department.show', $event.id))"
            @edit="getRowInfo($event.id)"
            show-action
            edit-action
        >
            <!--<template #manager="{props}">-->
            <!--    <div class="flex space-x-2 items-center">-->
            <!--        <avatar :src="props.manager.has_account ? props.manager.account.profile_photo_url : ''"/>-->
            <!--        <span v-text="props.manager.employeeName"/>-->
            <!--    </div>-->
            <!--</template>-->
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
        >
            <Form full-size>
                <FormSection
                    bg-less
                >
                    <!-- Manager -->
                    <input-group class="col-span-6" labelFor="document_type_id" :label="tm('term.type')"
                                 :errors="v$.document_type_id.$errors">
                        <select-input v-model="form.document_type_id" :options="types" optionLabel="name"/>
                    </input-group>


                    <!-- Code -->
                    <input-group class="col-span-2" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
                        <text-input v-model="form.code"/>
                    </input-group>

                    <!-- Space Filler -->
                    <div class="col-span-4"></div>

                    <!-- Name -->
                    <input-group class="col-span-6" labelFor="name" :label="tm('term.name')"
                                 :errors="v$.name.$errors">
                        <text-input v-model="form.name"/>
                    </input-group>

                    <!-- File -->
                    <input-group class="col-span-3" labelFor="type" :label="tm('term.description')">
                        <file-input v-model="form.file"/>
                    </input-group>

                    <!-- Description -->
                    <input-group class="col-span-3" labelFor="type" :label="tm('term.description')">
                        <text-area-input v-model="form.description"/>
                    </input-group>
                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit"
                              :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
