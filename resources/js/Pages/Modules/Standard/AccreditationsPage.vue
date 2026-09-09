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
import FileInput from "@/Components/Form/FileInput.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"

// Multi-lang
import Translates from "./translates"

/*Validation*/
import {helpers, maxLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

const props = defineProps({
    standard: Object,
    accreditations: {
        type: Array,
        default: () => []
    }
})

const statusOptions = computed(() => [
    {id: 'active', label: tm('term.accreditationStatus.active')},
    {id: 'suspended', label: tm('term.accreditationStatus.suspended')},
    {id: 'withdrawn', label: tm('term.accreditationStatus.withdrawn')},
])

const statusLabel = (status) => statusOptions.value.find(o => o.id === status)?.label ?? status

const statusColorClasses = {
    active: 'bg-emerald-100 text-emerald-700',
    suspended: 'bg-amber-100 text-amber-700',
    withdrawn: 'bg-rose-100 text-rose-700',
}

const headers = [
    {id: 'certification_body', label: tm('term.certificationBody')},
    {id: 'certificate_number', label: tm('term.certificateNumber')},
    {id: 'issue_date', label: tm('term.issueDate'), value: (row) => new Date(row.issue_date).toLocaleDateString('tr-TR')},
    {id: 'expiry_date', label: tm('term.expiryDate'), value: (row) => new Date(row.expiry_date).toLocaleDateString('tr-TR')},
    {id: 'status', label: tm('term.status')},
]

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    certification_body: "",
    accreditation_body: "",
    certificate_number: "",
    scope: "",
    issue_date: "",
    expiry_date: "",
    status: "active",
    notes: "",
    certificate_file: null,
})

const rules = ref({
    certification_body: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    accreditation_body: {},
    certificate_number: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    scope: {},
    issue_date: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    expiry_date: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    status: {
        required: helpers.withMessage(t('message.validation.required'), required),
    },
    notes: {},
})

const v$ = useVuelidate(rules, form)

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    formType.value = 'create';
    showModal.value = true;
}

/*Create/Update*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    if (formType.value === 'create') {
        form.post(route('company-accreditation.store', props.standard.id), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('company-accreditation.update', {companyAccreditation: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    }
}

/*Update*/
const getRowInfo = (row) => {
    form.id = row.id;
    form.certification_body = row.certification_body;
    form.accreditation_body = row.accreditation_body;
    form.certificate_number = row.certificate_number;
    form.scope = row.scope;
    form.issue_date = row.issue_date?.substring(0, 10);
    form.expiry_date = row.expiry_date?.substring(0, 10);
    form.status = row.status;
    form.notes = row.notes;
    form.certificate_file = null;
    showModal.value = true;
    formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
    router.delete(route("company-accreditation.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="tm('title.accreditationsPage.title') + ' — ' + standard.name" :sub-title="tm('title.accreditationsPage.subTitle')">
        <template #actionArea>
            <help-button title="Akreditasyonlar — Nasıl Çalışır?" subtitle="Sertifika durumu ve süre dolumu takibi buradan yönetilir">
                <p><strong>Akreditasyon Kaydı:</strong> Bir sertifikasyon kuruluşunun bu standarda göre verdiği somut sertifikayı temsil eder — sertifika numarası, kapsamı, veriliş/geçerlilik tarihleri ve isteğe bağlı sertifika dosyası ile birlikte kaydedilir.</p>
                <p><strong>Durum ile Süre Dolumu bağımsızdır:</strong> "Aktif/Askıya Alınmış/Geri Çekilmiş" durumu elle seçilen bir alandır; "Süresi Doldu" rozeti ise yalnızca geçerlilik tarihine bakılarak otomatik hesaplanır. Yani bir sertifika durumu hâlâ "Aktif" görünse bile geçerlilik tarihi geçmişse "Süresi Doldu" rozeti ayrıca görünür — durumu güncellemek kullanıcının elindedir, sistem otomatik değiştirmez.</p>
            </help-button>
            <simple-button type="route" :link="route('standard.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <Table
            :data="accreditations"
            :headers="headers"
            @edit="getRowInfo"
            @delete="handleDelete($event.id)"
            edit-action
            delete-action
        >
            <!--Status-->
            <template #status="{props: row}">
                <span v-text="statusLabel(row.status)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="statusColorClasses[row.status] ?? 'bg-slate-100 text-slate-700'"/>
                <span v-if="row.is_expired" v-text="tm('term.expired')"
                      class="ml-1 px-2 py-0.5 rounded text-xs bg-rose-100 text-rose-700"/>
            </template>

            <template #actionArea>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="tm('action.addAccreditation')"/>
                </simple-button>
            </template>
        </Table>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="tm('title.createAccreditationPage.title')"
                :subHeader="tm('title.createAccreditationPage.subTitle')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-6" labelFor="certification_body" :label="tm('term.certificationBody')" :errors="v$.certification_body.$errors">
                            <text-input v-model="form.certification_body"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="accreditation_body" :label="tm('term.accreditationBody')">
                            <text-input v-model="form.accreditation_body"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="certificate_number" :label="tm('term.certificateNumber')" :errors="v$.certificate_number.$errors">
                            <text-input v-model="form.certificate_number"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="status" :label="tm('term.status')" :errors="v$.status.$errors">
                            <select-input v-model="form.status" :options="statusOptions"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="issue_date" :label="tm('term.issueDate')" :errors="v$.issue_date.$errors">
                            <text-input input-type="date" v-model="form.issue_date"/>
                        </input-group>

                        <input-group class="col-span-3" labelFor="expiry_date" :label="tm('term.expiryDate')" :errors="v$.expiry_date.$errors">
                            <text-input input-type="date" v-model="form.expiry_date"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="scope" :label="tm('term.scope')">
                            <text-area-input v-model="form.scope"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="notes" :label="tm('term.notes')">
                            <text-area-input v-model="form.notes"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="certificate_file" :label="tm('term.certificateFile')">
                            <file-input accept=".pdf,.jpg,.jpeg,.png" @change="form.certificate_file = $event ? $event[0] : null"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                    <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </app-layout>
</template>
