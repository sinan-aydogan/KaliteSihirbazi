<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, ref} from "vue"
import {useForm, router} from "@inertiajs/vue3";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    tableData: {
        type: Object,
        default: () => ({})
    },
    areas: {
        type: Array,
        default: () => []
    },
    users: {
        type: Array,
        default: () => []
    },
})

const areaOptions = computed(() => props.areas.map(a => ({id: a.id, label: a.name})))
const userOptions = computed(() => props.users.map(u => ({id: u.id, label: u.name})))

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'area', label: tm('term.area'), value: (row) => row.area?.name ?? '-'},
    {id: 'walk_date', label: tm('term.walkDate'), value: (row) => new Date(row.walk_date).toLocaleDateString('tr-TR')},
    {id: 'conducted_by', label: tm('term.conductedBy'), value: (row) => row.conducted_by?.name ?? '-'},
    {id: 'findings_count', label: tm('term.findings')},
]

/* ---------- Create Form ---------- */
const showModal = ref(false);
const form = useForm({
    area_id: null,
    conducted_by_id: null,
    walk_date: new Date().toISOString().substring(0, 10),
    participants: "",
    observations: "",
    general_note: "",
})

const rules = ref({
    area_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    conducted_by_id: {},
    walk_date: {required: helpers.withMessage(t('message.validation.required'), required)},
    participants: {},
    observations: {required: helpers.withMessage(t('message.validation.required'), required)},
    general_note: {},
})
const v$ = useVuelidate(rules, form)

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    showModal.value = true;
}

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    form.post(route('gemba-walk.store'), {
        onSuccess: () => {
            form.reset();
            v$.value.$reset();
            showModal.value = false;
        }
    })
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Gemba Turları — Nasıl Çalışır?" subtitle="Sahada yapılan gözlem turları">
                <p>"Gemba", işin gerçekten yapıldığı yer demektir — bu turlarda sahaya gidip gözlem yapılır, İş Güvenliği/Kalite/Teslimat/Maliyet/Motivasyon başlıklarında bulgular kaydedilir.</p>
            </help-button>
            <simple-button type="route" :link="route('area.index')" color="blue">
                <font-awesome-icon icon="map-location-dot" class="mr-2"/>
                <span v-text="t('mainMenu.areas')"/>
            </simple-button>
            <simple-button type="route" :link="route('continuous-improvement.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="headers"
            :custom-actions="[{
                action: (row) => router.visit(route('gemba-walk.show', row.id)),
                color: 'blue',
                icon: 'eye',
                label: tm('action.viewDetails'),
            }]"
        >
            <template #actionArea>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="t('action.createWalk')"/>
                </simple-button>
            </template>
        </Table>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="tm('title.createModal.title')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="area_id" :label="tm('term.area')" :errors="v$.area_id.$errors">
                            <select-input v-model="form.area_id" :options="areaOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="conducted_by_id" :label="tm('term.conductedBy')">
                            <select-input v-model="form.conducted_by_id" :options="userOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="walk_date" :label="tm('term.walkDate')" :errors="v$.walk_date.$errors">
                            <text-input input-type="date" v-model="form.walk_date"/>
                        </input-group>

                        <input-group class="col-span-12" labelFor="participants" :label="tm('term.participants')">
                            <text-input v-model="form.participants"/>
                        </input-group>

                        <input-group class="col-span-12" labelFor="observations" :label="tm('term.observations')" :errors="v$.observations.$errors">
                            <text-area-input v-model="form.observations"/>
                        </input-group>

                        <input-group class="col-span-12" labelFor="general_note" :label="tm('term.generalNote')">
                            <text-area-input v-model="form.general_note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                    <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
