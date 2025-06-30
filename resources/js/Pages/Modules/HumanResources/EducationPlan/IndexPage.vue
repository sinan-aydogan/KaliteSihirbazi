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
        id: 'start_date',
        label: tm('term.startDate'),
        value: (row) => !!row?.start_date ? new Date(row.start_date).toLocaleDateString('tr-TR') : ''
    },
    {
        id: 'end_date',
        label: tm('term.endDate'),
        value: (row) => !!row?.end_date ? new Date(row.end_date).toLocaleDateString('tr-TR') : ''
    },
    {
        id: 'description',
        label: tm('term.description'),
        value: (row) => row?.description ? (row.description.length > 50 ? row.description.substring(0, 50) + '...' : row.description) : ''
    }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const form = useForm({
    id: null,
    name: "",
    start_date: "",
    end_date: "",
    description: ""
})

// Rules
const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    start_date: {required: helpers.withMessage(t('message.validation.required'), required)},
    end_date: {required: helpers.withMessage(t('message.validation.required'), required)},
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('education-plan.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('education-plan.update', {id: form.id}), {
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
    axios.get(route("education-plan.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.name = response.data.name;
        form.start_date = response.data.start_date;
        form.end_date = response.data.end_date;
        form.description = response.data.description;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("education-plan.destroy", id), {
        preserveState: true,
    });
}

</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <!--Deleted-->
            <simple-button type="route" :link="route('education-plan.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('term.deletedItems')"/>
            </simple-button>

            <!--Add new-->
            <simple-button @click="showModal = true; form.reset(); formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="$t('action.addNew')"/>
            </simple-button>
        </template>
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @view="router.visit(route('education-plan.show', $event.id))"
            @edit="getRowInfo($event.id)"
            @delete="handleDelete($event.id)"
            show-action
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
                    <!-- Name -->
                    <input-group class="col-span-12" labelFor="name" :label="tm('term.name')" :errors="v$.name.$errors">
                        <text-input v-model="form.name"/>
                    </input-group>

                    <!-- Start Date -->
                    <input-group class="col-span-6" labelFor="start_date" :label="tm('term.startDate')" :errors="v$.start_date.$errors">
                        <text-input input-type="date" v-model="form.start_date"/>
                    </input-group>

                    <!-- End Date -->
                    <input-group class="col-span-6" labelFor="end_date" :label="tm('term.endDate')" :errors="v$.end_date.$errors">
                        <text-input input-type="date" v-model="form.end_date"/>
                    </input-group>

                    <!-- Description -->
                    <input-group class="col-span-12" labelFor="description" :label="tm('term.description')">
                        <text-area-input v-model="form.description" :rows="4"/>
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