<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useForm} from "@inertiajs/inertia-vue3";

// Components
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    }
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
        id: 'name',
        label: tm('term.name')
    },
    {
        id: 'email',
        label: tm('term.email')
    },
    {
        id: 'phone',
        label: tm('term.phone')
    },
    {
        id: 'address',
        label: tm('term.address')
    }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const formRef = ref()
const form = useForm({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: "",
})

/*Related Data with select*/
const loading = ref(false)
const getDataModel = ref()
const getData = (query) => {
    if (query) {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            Inertia.reload({
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
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('calibration-firm.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('calibration-firm.update', {id: form.id}), {
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
    axios.get(route("calibration-firm.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.name = response.data.name;
        form.email = response.data.email;
        form.phone = response.data.phone;
        form.address = response.data.address;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    alert(id)
    Inertia.delete(route("calibration-firm.destroy", id), {
        preserveState: true,
    });
}

</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('calibration-firm.deleted')" color="red">
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
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
        ></Table>
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
                    <!-- Name -->
                    <input-group class="col-span-6" labelFor="name" :label="tm('term.name')"
                                 :errors="v$.name.$errors">
                        <text-input v-model="form.name"/>
                    </input-group>

                    <!-- Email -->
                    <input-group class="col-span-6" labelFor="email" :label="tm('term.email')">
                        <text-input v-model="form.email"/>
                    </input-group>

                    <!-- Phone -->
                    <input-group class="col-span-6" labelFor="phone" :label="tm('term.phone')">
                        <text-input v-model="form.phone"/>
                    </input-group>

                    <!-- Address -->
                    <input-group class="col-span-6" labelFor="address" :label="tm('term.address')">
                        <text-area-input v-model="form.address"/>
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
