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

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    },
    vehicleTypes: {
        type: Array,
        default: []
    },
    vehicleStatuses: {
        type: Array,
        default: []
    }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue";

/*Table*/
const tableHeaders = [
    {
        id: 'code',
        label: tm('term.code')
    },
    {
        id: 'type',
        label: tm('term.type'),
        value: (row) => row?.vehicle_type?.name
    },
    {
        id: "brand",
        label: tm('term.brand')
    },
    {
        id: "model",
        label: tm('term.model')
    },
    {
        id: "purchase_date",
        label: tm('term.purchaseDate')
    }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const formRef = ref()
const form = useForm({
    id: null,
    code: "",
    vehicle_type_id: null,
    vehicle_status_id: null,
    brand: "",
    model: "",
    production_year: "",
    purchase_date: "",
    purchase_description: "",
    disposing_date: "",
    disposing_reason: "",
    disposing_description: "",
    notes: ""
})

/*Data*/
const disposingReasons = [
    {id: 'sold', name: "Satış"},
    {id: 'scrap', name: "Hurda"},
    {id: 'stolen', name: "Çalındı"}
]

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
        maxLength: helpers.withMessage(t('message.validation.maxLength', [50]), maxLength(50))
    },
    vehicle_type_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    production_year: {maxLength: helpers.withMessage(t('message.validation.maxLength',[4]), maxLength(4))},
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('vehicles.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('vehicles.update', {id: form.id}), {
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
    axios.get(route("vehicles.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.vehicle_type_id = response.data?.vehicle_type?.id;
        form.vehicle_status_id = response.data?.vehicle_status?.id
        form.brand = response.data.brand;
        form.model = response.data.model;
        form.production_year = response.data.production_year;
        form.purchase_date = response.data.production_year;
        form.purchase_description = response.data.production_year;
        form.disposing_date = response.data.production_year;
        form.disposing_reason = response.data.production_year;
        form.disposing_description = response.data.production_year;
        form.notes = response.data.production_year;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("vehicles.destroy", id), {
        preserveState: true,
    });
}

</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('vehicles.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('term.deletedItems')"/>
            </simple-button>

            <simple-button @click="showModal = true; form.reset(); formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="$t('action.addNew')"/>
            </simple-button>
        </template>
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
        />
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
                    grid
                >
                    <!-- Code -->
                    <input-group class="col-span-6" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
                        <text-input v-model="form.code"/>
                    </input-group>

                    <!-- Vehicle Type -->
                    <input-group class="col-span-6" labelFor="vehicle_type_id" :label="tm('term.type')"
                                 :errors="v$.vehicle_type_id.$errors">
                        <select-input v-model="form.vehicle_type_id" :options="vehicleTypes" option-label="name" option-key="id"/>
                    </input-group>

                    <!-- Brand -->
                    <input-group class="col-span-6" labelFor="brand" :label="tm('term.brand')">
                        <text-input v-model="form.brand"/>
                    </input-group>

                    <!-- Model -->
                    <input-group class="col-span-6" labelFor="model" :label="tm('term.model')">
                        <text-input v-model="form.model"/>
                    </input-group>

                    <!-- Production Year -->
                    <input-group class="col-span-6" labelFor="production_year" :label="tm('term.productionYear')" :errors="v$.production_year.$errors">
                        <text-input :maxlength="4" v-model="form.production_year"/>
                    </input-group>

                    <!--Space filler-->
                    <div class="col-span-6"/>

                    <!-- Purchase Date -->
                    <input-group class="col-span-6" labelFor="purchase_date" :label="tm('term.purchaseDate')">
                        <text-input input-type="date" v-model.number="form.purchase_date"/>
                    </input-group>

                    <!-- Purchase Description -->
                    <input-group class="col-span-6" labelFor="purchase_description" :label="tm('term.purchaseDescription')">
                        <text-area-input v-model="form.purchase_description"/>
                    </input-group>

                    <!-- Disposing Date -->
                    <input-group class="col-span-6" labelFor="disposing_date" :label="tm('term.disposingDate')">
                        <text-input input-type="date" v-model.number="form.disposing_date"/>
                    </input-group>

                    <!-- Disposing Reason -->
                    <input-group class="col-span-6" labelFor="disposing_reason" :label="tm('term.disposingReason')">
                        <select-input v-model="form.disposing_reason" :options="disposingReasons" option-label="name" option-key="id"/>
                    </input-group>

                    <!-- Disposing Description -->
                    <input-group class="col-span-12" labelFor="disposing_description" :label="tm('term.disposingDescription')">
                        <text-area-input v-model="form.disposing_description"/>
                    </input-group>

                    <!-- Notes -->
                    <input-group class="col-span-12" labelFor="notes" :label="tm('term.notes')">
                        <text-area-input v-model="form.notes"/>
                    </input-group>


                    <!--Vehicle Status-->
                    <input-group class="col-span-6" labelFor="vehicle_status_id" :label="tm('term.status')">
                        <select-input v-model="form.vehicle_status_id" :options="vehicleStatuses" option-label="name" option-key="id"/>
                    </input-group>

                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()" />
                <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
