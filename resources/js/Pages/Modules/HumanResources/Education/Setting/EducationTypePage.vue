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

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    }
})

// Multi-lang
import Translates from "../translates"

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
        id: 'educations_count',
        label: t('term.educationsCount'),
        value: (row) => row?.educations_count || 0
    },
    {
        id: 'created_at',
        label: t('term.createdAt'),
        value: (row) => !!row?.created_at ? new Date(row.created_at).toLocaleDateString('tr-TR') : ''
    }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const form = useForm({
    id: null,
    name: ""
})

// Rules
const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    }
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('education-type.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('education-type.update', {id: form.id}), {
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
    axios.get(route("education-type.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.name = response.data.name;
    })
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("education-type.destroy", id), {
        preserveState: true,
    });
}

</script>

<template>
    <app-layout :title="tm('term.educationTypes')" :sub-title="'Eğitim türlerini yönetin'">
        <template #actionArea>
            <!--Back to Settings-->
            <simple-button type="route" :link="route('education-setting.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
                <span v-text="tm('action.goBack')"/>
            </simple-button>

            <!--Add new-->
            <simple-button @click="showModal = true; form.reset(); formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="tm('action.addEducationType')"/>
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
            :header="formType === 'create' ? tm('action.addEducationType') : 'Eğitim Türünü Düzenle'"
            :subHeader="formType === 'create' ? 'Yeni bir eğitim türü oluşturun' : 'Eğitim türü bilgilerini güncelleyin'"
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
                        <text-input v-model="form.name" :placeholder="'Eğitim türü adını giriniz'"/>
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
