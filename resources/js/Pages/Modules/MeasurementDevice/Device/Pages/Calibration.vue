<script setup>
import {ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useForm} from "@inertiajs/inertia-vue3";
import ShowPage from "@/Pages/Modules/MeasurementDevice/Device/ShowPage.vue";
import EmptySource from "@/Components/Content/EmptySource.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue"
import Modal from "@/Components/Modal/Modal.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import relativeTime from "dayjs/plugin/relativeTime";

// Multi-lang
import Translates from "../translates"
import dayjs from "dayjs";
// Validation
import {useVuelidate} from "@vuelidate/core"
import {helpers, required} from "@vuelidate/validators"

const {t, tm} = Translates();

const props = defineProps({
    measurementDevice: Object,
    calibrationTasks: Array,
    calibrationFirms: Array,
})

const headers = [
    {
        id: "planned_date",
        label: t('term.plannedDate'),
    },
    {
        id: "accomplished_date",
        label: t('term.accomplishedDate'),
    },
    {
        id: "calibrationFirm",
        label: t('term.calibrationFirm')
    },
    {
        id: 'status',
        label: tm('term.status'),
        align: 'center'
    }
]

const showTaskCreateModal = ref(false);

const period = ref('');
const form = useForm({
    planned_date: '',
    accomplished_date: '',
    measurement_device_id: props.measurementDevice.id,
    calibration_firm_id: null,
    price: '',
    currency: '',
    status: false
})

const rules = ref({
    planned_date: {required: helpers.withMessage(t('message.validation.required'), required)},
    calibration_firm_id: {required: helpers.withMessage(t('message.validation.required'), required)},
})
const v$ = useVuelidate(rules, form)

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    form.post(route('measurement-device-calibration.store'), {
        onSuccess: () => {
            form.reset();
            showTaskCreateModal.value = false;
            v$.value.$reset();
        }
    })
}

const handleDelete = (id) => {
    Inertia.delete(route('measurement-device-calibration.destroy', id))
}

/*Calibration Report Add Form*/
const showCalibrationReportAddForm = ref(false)
const selectedTask = ref({})
const selectCalibrationTask = (task) => {
    showCalibrationReportAddForm.value = true
    selectedTask.value = task
}

const reportForm = useForm({
    accomplished_date: '',
    calibration_report_file: '',
    report_number: ''
})

const handleReportFormSubmit = ()=>{
    alert('Form gönderildi :), şaka şaka daha rapor ekleme fonksiyonu bitmedi. En kısa sürede eklenecek. Takipte kal.')
}
dayjs.extend(relativeTime)
</script>
<template>
    <ShowPage :measurement-device="measurementDevice">
        <div v-if="calibrationTasks.length>0" class="mt-6"
        >
            <Table
                :data="calibrationTasks"
                :headers="headers"
            >
                <template #actionArea>
                    <SimpleButton @click="showTaskCreateModal = true" :label="tm('action.createCalibrationTask')"/>
                </template>

                <template #planned_date="{props}">
                    {{ dayjs(props.planned_date).format('DD-MMMM-YY') }} ({{
                        dayjs(props.planned_date).from(Date.now())
                    }})
                </template>

                <template #accomplished_date="{props}">
                    {{ dayjs(props.accomplished_date).format('DD-MMMM-YY') }}
                </template>

                <template #calibrationFirm="{props}">
                    {{ props.firm.name }}
                </template>

                <!--Status-->
                <template #status="{props}">
                    <div class="flex space-x-2 items-center px-2 py-1 rounded-md" :class="{
            'bg-emerald-500/50' : props.status,
            'bg-orange-500/50' : !props.status
          }">
                        <font-awesome-icon :icon="`fa-solid fa-${props.status ? 'circle-check' : 'hourglass-half' }`"/>
                        <span v-text="tm(props.status ? 'term.accomplished' : 'term.active')"/>
                    </div>
                </template>

                <!--Action-->
                <template #leftItemAction="{props}">
                    <div @click="selectCalibrationTask(props)"
                         class="hover:scale-110 dark:hover:bg-emerald-500 active:scale-90 px-2 py-1 space-x-2 rounded-md cursor-pointer transition text-slate-600 dark:bg-slate-300 dark:text-slate-700 hover:text-slate-900 select-none">
                        <font-awesome-icon
                            icon="fa-regular fa-circle-check"/>
                        <span v-text="t('action.complete')"></span>
                    </div>
                </template>
            </Table>
        </div>
        <!--Empty Message-->
        <EmptySource
            v-else
            :message="tm('message.feedback.emptyCalibrationTasksList')"
            :add-new-text="tm('action.createCalibrationTask')"
            class="mt-6"
            :add-new-callback="()=>{showTaskCreateModal = true}"
        ></EmptySource>

        <!--Calibration Task Create Form-->
        <Modal
            v-model="showTaskCreateModal"
            :header="tm('title.createCalibrationModal.title')"
            :sub-header="tm('title.createCalibrationModal.subTitle')"
            closeable
            close-button
        >
            <Form full-size>
                <FormSection bg-less grid>

                    <!--Planned Date-->
                    <InputGroup class="col-span-12" label-for="planned_date" :label="t('term.plannedDate')"
                                :errors="v$.planned_date.$errors">
                        <TextInput v-model="form.planned_date" input-type="date"/>
                    </InputGroup>

                    <!--Calibration Firm-->
                    <InputGroup class="col-span-12" label-for="calibration_firm_id" :label="t('term.calibrationFirm')"
                                :errors="v$.calibration_firm_id.$errors">
                        <SelectInput
                            v-model="form.calibration_firm_id"
                            :options="calibrationFirms"
                            option-label="name"
                            option-key="id"
                        />
                    </InputGroup>

                    <!--Price-->
                    <InputGroup class="col-span-6" label-for="price" :label="t('term.calibrationFee')">
                        <TextInput v-model="form.price" input-type="number"/>
                    </InputGroup>

                    <!--Currency-->
                    <InputGroup class="col-span-6" label-for="currency" :label="t('term.currency')">
                        <TextInput v-model="form.currency"/>
                    </InputGroup>
                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.cancel')" color="neutral" @click="showTaskCreateModal=false"/>
                <SimpleButton :label="tm('action.createTask')" color="green" @click="handleSubmit"
                              :loading="form.processing"/>
            </template>
        </Modal>

        <!--Calibration Report Add Form-->
        <Modal v-model="showCalibrationReportAddForm" header="Kalibrasyon Raporu Ekle"
               sub-header="Cihaza ait kalibrasyon raporu detaylarını ekleyin">
            <Form full-size>
                <FormSection bg-less grid>
                    <div class="col-span-12 p-2 bg-slate-800/50 rounded-md">
                        <div class="grid grid-cols-2">
                            <div class="flex flex-col pl-2">
                                <!--Firm-->
                                <span class="font-semibold" v-text="t('term.calibrationFirm')"></span>
                                <span class="text-sm">{{ selectedTask.firm.name }}</span>
                            </div>

                            <div class="flex flex-col border-l pl-4">
                                <!--Sending Date-->
                                <span class="font-semibold" v-text="t('term.plannedDate')"></span>
                                <span class="text-sm">{{`${dayjs(selectedTask.planned_date).format('DD-MMMM-YYYY')} ( ${dayjs(selectedTask.planned_date).fromNow()} )`}}</span>
                            </div>
                        </div>
                    </div>

                    <!--Accomplished Date-->
                    <InputGroup class="col-span-12" label-for="accomplished_date" :label="t('term.accomplishedDate')">
                        <TextInput v-model="reportForm.accomplished_date" input-type="date"/>
                    </InputGroup>

                    <!--Report Number-->
                    <InputGroup class="col-span-12" label-for="report_number" :label="t('term.reportNumber')">
                        <TextInput v-model="reportForm.report_number"/>
                    </InputGroup>

                    <!--Report File-->
                    <input-group class="col-span-12" label-for="calibration_report_file"
                                 :label="t('term.calibrationReportFile')">
                        <input type="file" @change="reportForm.calibration_report_file = $event.target.value"/>
                    </input-group>
                </FormSection>
            </Form>

            <template #footer>
                <SimpleButton :label="t('action.cancel')" color="neutral" @click="showCalibrationReportAddForm=false"/>
                <SimpleButton :label="tm('action.addThisReport')" color="green" @click="handleReportFormSubmit"
                              :loading="reportForm.processing"/>
            </template>

        </Modal>
    </ShowPage>
</template>
