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
    kanbanColumns: {
        type: Object,
        default: () => ({})
    },
    kaizenCategories: {
        type: Array,
        default: () => []
    },
    departments: {
        type: Array,
        default: () => []
    },
    users: {
        type: Array,
        default: () => []
    },
})

const categoryOptions = computed(() => props.kaizenCategories.map(c => ({id: c.id, label: c.name})))
const departmentOptions = computed(() => props.departments.map(d => ({id: d.id, label: d.name})))

const statusLabel = (status) => tm(`term.statusValue.${status}`)

const statusColorClasses = {
    submitted: 'bg-slate-100 text-slate-700',
    under_review: 'bg-sky-100 text-sky-700',
    approved: 'bg-indigo-100 text-indigo-700',
    rejected: 'bg-rose-100 text-rose-700',
    in_progress: 'bg-amber-100 text-amber-700',
    implemented: 'bg-emerald-100 text-emerald-700',
    closed: 'bg-slate-200 text-slate-500',
}

const headers = [
    {id: 'code', label: tm('term.code')},
    {id: 'title', label: tm('term.title')},
    {id: 'category', label: tm('term.category'), value: (row) => row.category?.name ?? '-'},
    {id: 'department', label: tm('term.department'), value: (row) => row.department?.name ?? '-'},
    {id: 'proposed_by', label: tm('term.proposedBy'), value: (row) => row.proposed_by?.name ?? '-'},
    {id: 'status', label: tm('term.status')},
]

/* ---------- View toggle ---------- */
const viewMode = ref('list')

/* ---------- Kanban columns ---------- */
const columnOrder = ['submitted', 'under_review', 'approved', 'in_progress', 'implemented', 'closed', 'rejected']

const transitionRoutes = {
    under_review: (id) => route('kaizen-suggestion.mark-under-review', id),
    approved: (id) => route('kaizen-suggestion.approve', id),
    in_progress: (id) => route('kaizen-suggestion.start', id),
    implemented: (id) => route('kaizen-suggestion.implement', id),
    closed: (id) => route('kaizen-suggestion.close', id),
}

const draggedId = ref(null)
const handleDragStart = (suggestion) => {
    draggedId.value = suggestion.id
}
const handleDrop = (targetStatus) => {
    const routeFn = transitionRoutes[targetStatus]
    if (draggedId.value && routeFn) {
        router.post(routeFn(draggedId.value), {}, {preserveScroll: true})
    }
    draggedId.value = null
}

/* ---------- Create Form ---------- */
const showModal = ref(false);
const form = useForm({
    title: "",
    current_situation: "",
    proposed_solution: "",
    kaizen_category_id: null,
    department_id: null,
})

const rules = ref({
    title: {required: helpers.withMessage(t('message.validation.required'), required)},
    current_situation: {required: helpers.withMessage(t('message.validation.required'), required)},
    proposed_solution: {required: helpers.withMessage(t('message.validation.required'), required)},
    kaizen_category_id: {required: helpers.withMessage(t('message.validation.required'), required)},
    department_id: {},
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

    form.post(route('kaizen-suggestion.store'), {
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
            <help-button title="Kaizen Önerileri — Nasıl Çalışır?" subtitle="Herkesin küçük iyileştirme fikrini kaydettiği öneri sistemi">
                <p><strong>Durum akışı:</strong> Gönderildi → Değerlendiriliyor → Onaylandı/Reddedildi → (onaylandıysa) Uygulanıyor → Uygulandı → Kapatıldı.</p>
                <p><strong>Pano</strong> görünümünde bir kartı ileri bir sütuna sürükleyerek durumunu değiştirebilirsiniz (reddetme, gerekçe gerektirdiği için sadece detay sayfasından yapılabilir).</p>
                <p>Bir öneri uygulandığında <strong>gerçekleşen yıllık kazanç</strong> girilir — bu, tahmini kazanç ile karşılaştırılabilecek somut bir sonuç kaydı oluşturur.</p>
            </help-button>
            <simple-button type="route" :link="route('kaizen-category.index')" color="blue">
                <font-awesome-icon icon="tags" class="mr-2"/>
                <span v-text="t('mainMenu.kaizenCategories')"/>
            </simple-button>
            <simple-button type="route" :link="route('continuous-improvement.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="t('action.goBack')"/>
            </simple-button>
        </template>

        <div class="flex items-center gap-2 mb-4">
            <simple-button :color="viewMode === 'list' ? 'blue' : 'gray'" @click="viewMode = 'list'">
                <font-awesome-icon icon="list" class="mr-2"/>
                <span v-text="tm('term.listView')"/>
            </simple-button>
            <simple-button :color="viewMode === 'kanban' ? 'blue' : 'gray'" @click="viewMode = 'kanban'">
                <font-awesome-icon icon="table-columns" class="mr-2"/>
                <span v-text="tm('term.kanbanView')"/>
            </simple-button>
        </div>

        <!--List View-->
        <Table
            v-if="viewMode === 'list'"
            :data="tableData"
            :headers="headers"
            :custom-actions="[{
                action: (row) => router.visit(route('kaizen-suggestion.show', row.id)),
                color: 'blue',
                icon: 'eye',
                label: tm('action.viewDetails'),
            }]"
        >
            <template #status="{props: row}">
                <span v-text="statusLabel(row.status)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="statusColorClasses[row.status] ?? 'bg-slate-100 text-slate-700'"/>
            </template>

            <template #actionArea>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="t('action.createSuggestion')"/>
                </simple-button>
            </template>
        </Table>

        <!--Kanban View-->
        <div v-else>
            <div class="flex justify-end mb-4">
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    <span v-text="t('action.createSuggestion')"/>
                </simple-button>
            </div>
            <div class="flex gap-4 overflow-x-auto pb-4">
                <div v-for="status in columnOrder" :key="status"
                     class="min-w-[260px] w-[260px] flex-shrink-0 rounded-xl bg-slate-100 dark:bg-slate-700 p-3"
                     @dragover.prevent
                     @drop="handleDrop(status)">
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-2 py-0.5 rounded text-xs" :class="statusColorClasses[status]" v-text="statusLabel(status)"/>
                        <span class="text-xs text-slate-400">{{ (kanbanColumns[status] ?? []).length }}</span>
                    </div>
                    <div class="space-y-2">
                        <div v-for="suggestion in (kanbanColumns[status] ?? [])" :key="suggestion.id"
                             draggable="true"
                             @dragstart="handleDragStart(suggestion)"
                             @click="router.visit(route('kaizen-suggestion.show', suggestion.id))"
                             class="cursor-pointer rounded-lg bg-white dark:bg-slate-600 p-3 shadow-sm hover:shadow-md transition">
                            <p class="text-xs text-slate-400">{{ suggestion.code }}</p>
                            <p class="text-sm font-medium">{{ suggestion.title }}</p>
                            <p class="text-xs text-slate-400 mt-1">{{ suggestion.category?.name ?? '-' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <teleport to="body">
            <Modal
                v-model="showModal"
                :header="tm('title.createModal.title')"
                :sub-header="tm('title.createModal.subTitle')"
                closeable
                close-button
                max-width="2xl"
            >
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-8" labelFor="title" :label="tm('term.title')" :errors="v$.title.$errors">
                            <text-input v-model="form.title"/>
                        </input-group>

                        <input-group class="col-span-4" labelFor="kaizen_category_id" :label="tm('term.category')" :errors="v$.kaizen_category_id.$errors">
                            <select-input v-model="form.kaizen_category_id" :options="categoryOptions"/>
                        </input-group>

                        <input-group class="col-span-6" labelFor="department_id" :label="tm('term.department')">
                            <select-input v-model="form.department_id" :options="departmentOptions"/>
                        </input-group>

                        <input-group class="col-span-12" labelFor="current_situation" :label="tm('term.currentSituation')" :errors="v$.current_situation.$errors">
                            <text-area-input v-model="form.current_situation"/>
                        </input-group>

                        <input-group class="col-span-12" labelFor="proposed_solution" :label="tm('term.proposedSolution')" :errors="v$.proposed_solution.$errors">
                            <text-area-input v-model="form.proposed_solution"/>
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
