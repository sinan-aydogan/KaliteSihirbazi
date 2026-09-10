<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {computed, ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";
import {onClickOutside} from "@vueuse/core";

// Components
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"
import TextListInput from "@/Components/Form/TextListInput.vue"
import TextListInputWithSelect from "@/Components/Form/TextListInputWithSelect.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import SwitchInput from "@/Components/Form/SwitchInput.vue"
import Avatar from "@/Components/Avatar/Avatar.vue"

// Props
const props = defineProps({
  tableData: {
    type: Object,
    default: () => ({data: []})
  },
  departments: {
    type: Array,
    default: () => []
  }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

// Validation
import {useVuelidate} from "@vuelidate/core"
import {required, maxLength, helpers} from "@vuelidate/validators"

/*Table*/
const baseTableHeaders = [
  {
    id: 'code',
    label: tm('term.code')
  },
  {
    id: 'name',
    label: tm('term.name')
  },
  {
    id: "staff_type",
    label: tm('term.staffType')
  },
  {
    id: "department_id",
    label: tm('term.department')
  },
  {
    id: "status",
    label: tm('term.status'),
    align: 'center'
  }
]

/*Column customization*/
const showAssigneesColumn = ref(false);
const showColumnCustomizer = ref(false);
const columnCustomizerContainer = ref(null);
onClickOutside(columnCustomizerContainer, () => {
  showColumnCustomizer.value = false;
});

const tableHeaders = computed(() => showAssigneesColumn.value
    ? [...baseTableHeaders, {id: 'assignees', label: tm('term.assignedEmployees'), filterable: false}]
    : baseTableHeaders);

/*Assigned employees avatar group*/
const maxVisibleAvatars = 5;
const visibleAssignments = (row) => (row.assignments ?? []).slice(0, row.assignments.length > maxVisibleAvatars ? maxVisibleAvatars - 1 : maxVisibleAvatars);
const hiddenAssignmentsCount = (row) => row.assignments?.length > maxVisibleAvatars ? row.assignments.length - (maxVisibleAvatars - 1) : 0;

const showPeopleModal = ref(false);
const selectedJobDescription = ref(null);
const openPeopleModal = (row) => {
  if (!row.assignments?.length) return;
  selectedJobDescription.value = row;
  showPeopleModal.value = true;
}
const formatDate = (date) => date ? new Date(date).toLocaleDateString('tr-TR') : '';

const showModal = ref(false);
const showSectionPicker = ref(false);
const selectedSections = ref([]);
const staffTypeLabel = (value) => staffTypes.find((type) => type.id === value)?.label ?? value ?? '—';

const openCreateModal = () => {
  form.reset();
  v$.value.$reset();
  selectedSections.value = [];
  showSectionPicker.value = false;
  formType.value = 'create';
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  showSectionPicker.value = false;
  selectedSections.value = [];
  form.reset();
  v$.value.$reset();
};

/*Form*/
const formType = ref("create");
const form = useForm({
  id: null,
  code: "",
  name: "",
  description: "",
  staff_type: "blue",
  department_id: null,
  responsibilities: [],
  powers: [],
  requirements: [],
  skills: [],
  working_conditions: [],
  working_tools: [],
  working_hours: [],
  overtime_status: [],
  travel_status: [],
  status: true,
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

const rules = ref({
  code: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
  },
  name: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
  },
  department_id: {required: helpers.withMessage(t('message.validation.required'), required)},
})

const v$ = useVuelidate(rules, form)

// Data
import Terms from "./terms"

const {staffTypes, locationTypes} = Terms()

const sectionDefinitions = computed(() => [
  {key: 'requirements', label: tm('term.requirements'), description: tm('term.requirementsDescription'), type: 'list'},
  {key: 'responsibilities', label: tm('term.responsibilities'), description: tm('term.responsibilitiesDescription'), type: 'list'},
  {key: 'powers', label: tm('term.powers'), description: tm('term.powersDescription'), type: 'list'},
  {key: 'skills', label: tm('term.skills'), description: tm('term.skillsDescription'), type: 'list'},
  {key: 'working_conditions', label: tm('term.workingConditions'), description: tm('term.workingConditionsDescription'), type: 'list'},
  {key: 'working_tools', label: tm('term.workingTools'), description: tm('term.workingToolsDescription'), type: 'list'},
  {key: 'working_hours', label: tm('term.workingHours'), description: tm('term.workingHoursDescription'), type: 'list'},
  {key: 'overtime_status', label: tm('term.overtimeStatus'), description: tm('term.overtimeStatusDescription'), type: 'list'},
  {key: 'travel_status', label: tm('term.travelStatus'), description: tm('term.travelStatusDescription'), type: 'travel'},
]);

const activeSections = computed(() => sectionDefinitions.value.filter(({key}) => selectedSections.value.includes(key)));
const availableSections = computed(() => sectionDefinitions.value.filter(({key}) => !selectedSections.value.includes(key)));

const hasSectionValue = (section) => {
  const values = form[section.key];
  if (!Array.isArray(values)) return false;

  if (section.type === 'travel') {
    return values.some((item) => item && (item.reason || item.location));
  }

  return values.some((item) => String(item ?? '').trim());
};

const syncSelectedSections = () => {
  selectedSections.value = sectionDefinitions.value.filter(hasSectionValue).map(({key}) => key);
};

const addSection = (key) => {
  if (!selectedSections.value.includes(key)) selectedSections.value.push(key);
  showSectionPicker.value = false;
};

const removeSection = (key) => {
  selectedSections.value = selectedSections.value.filter((sectionKey) => sectionKey !== key);
  form[key] = [];
};

const sectionData = (key) => selectedSections.value.includes(key) ? form[key] : [];

const resetForm = () => {
  form.reset();
  selectedSections.value = [];
  showSectionPicker.value = false;
  v$.value.$reset();
};

/*Create*/
const handleSubmit = async () => {
  try {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return

    // Correction Main Department
    if (form.type === 'main') {
        form.department_id = null
    }

    const formData = {
        code: form.code,
        name: form.name,
        description: form.description,
        staff_type: form.staff_type,
        department_id: form.department_id,
        responsibilities: sectionData('responsibilities'),
        powers: sectionData('powers'),
        requirements: sectionData('requirements'),
        skills: sectionData('skills'),
        working_conditions: sectionData('working_conditions'),
        working_tools: sectionData('working_tools'),
        working_hours: sectionData('working_hours'),
        overtime_status: sectionData('overtime_status'),
        travel_status: sectionData('travel_status'),
        status: form.status
    }

    if (formType.value === 'create') {
      await form.post(route('job-description.store'), {
        data: formData,
        onSuccess: () => {
          form.reset()
          v$.value.$reset()
          showModal.value = false
        },
        onError: (errors) => {
          console.error('Validation errors:', errors)
        }
      })
    } else {
      await form.put(route('job-description.update', { id: form.id }), {
        data: formData,
        onSuccess: () => {
          form.reset()
          v$.value.$reset()
          showModal.value = false
        }
      })
    }
  } catch (error) {
    console.error('Submission error:', error)
    alert('İşlem sırasında bir hata oluştu. Lütfen tekrar deneyin.')
  }
}


/*Update*/
const getRowInfo = (id) => {
  axios.get(route("job-description.edit", {id: id})).then(response => {
    form.id = response.data.id;
    form.code = response.data.code;
    form.name = response.data.name;
    form.type = response.data.type;
    form.department_id = response.data.department_id;
    form.employee_id = response.data.employee_id;
    form.description = response.data.description;
    form.staff_type = response.data.staff_type;
    form.responsibilities = response.data.responsibilities ? response.data.responsibilities : [];
    form.powers = response.data.powers ? response.data.powers : [];
    form.requirements = response.data.requirements ? response.data.requirements : [];
    form.skills = response.data.skills ? response.data.skills : [];
    form.working_conditions = response.data.working_conditions ? response.data.working_conditions : [];
    form.working_tools = response.data.working_tools ? response.data.working_tools : [];
    form.working_hours = response.data.working_hours ? response.data.working_hours : [];
    form.overtime_status = response.data.overtime_status ? response.data.overtime_status : [];
    form.travel_status = response.data.travel_status ? response.data.travel_status : [];
    form.status = response.data.status;
    syncSelectedSections();
    showModal.value = true;
    formType.value = "update";
  })
}

/*Delete*/
const handleDelete = (id) => {
  router.delete(route("job-description.destroy", id), {
    preserveState: true,
  });
}

</script>

<template>
  <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
    <template #actionArea>
      <simple-button type="route" :link="route('job-description.deleted')" color="red">
        <font-awesome-icon icon="trash-can" class="mr-2"/>
        <span v-text="$t('term.deletedItems')"/>
      </simple-button>

      <simple-button @click="openCreateModal" color="green">
        <font-awesome-icon icon="plus" class="mr-2"/>
        <span v-text="$t('action.addNew')"/>
      </simple-button>
    </template>
    <Table
        :data="tableData"
        :headers="tableHeaders"
        @view="router.visit(route('job-description.show', $event.id))"
        @edit="getRowInfo($event.id)"
        show-action
        edit-action
    >
      <!--Customize Table-->
      <template #tableActions>
        <div ref="columnCustomizerContainer" class="relative shrink-0">
          <simple-button color="neutral" size="slim" @click="showColumnCustomizer = !showColumnCustomizer">
            <font-awesome-icon icon="fa-solid fa-sliders"/>
            <span v-text="tm('term.customizeTable')"/>
          </simple-button>

          <div
              v-if="showColumnCustomizer"
              class="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-slate-300 bg-white p-3 shadow-xl dark:border-slate-500 dark:bg-slate-800"
          >
            <label class="flex items-center justify-between gap-3 text-sm text-slate-700 dark:text-slate-200">
              <span v-text="tm('term.showAssignedEmployees')"/>
              <switch-input v-model="showAssigneesColumn"/>
            </label>
          </div>
        </div>
      </template>

      <!--Staff Type-->
      <template #staff_type="{props}">
        <div
            class="flex space-x-2 items-center px-2 py-1 rounded"

        >
          <div
              class="flex items-center justify-center w-8 h-8 rounded"
              :class="props.staff_type=== 'white' ? 'dark:bg-slate-700': 'text-sky-700 dark:text-white dark:bg-sky-700'"
          >
            <font-awesome-icon
                :icon="'fa-solid '+ (props.staff_type=== 'white' ? 'fa-user-tie': 'fa-helmet-safety')"
                size="lg"
                class="px-2 py-1 rounded-full"
            />
          </div>

          <span v-text="staffTypeLabel(props.staff_type)"/>
        </div>
      </template>

      <!--Department-->
      <template #department_id="{props}">
        {{ props.department?.name ?? '' }}
      </template>

      <!--Status-->
      <template #status="{props}">
        <font-awesome-icon icon="fa-solid fa-circle-check" :class="props.status ? 'text-emerald-500': ''" size="lg"/>
      </template>

      <!--Assigned Employees-->
      <template #assignees="{props}">
        <div
            v-if="props.assignments?.length"
            class="flex -space-x-2 cursor-pointer"
            @click="openPeopleModal(props)"
        >
          <template v-for="assignment in visibleAssignments(props)" :key="assignment.id">
            <Avatar
                v-if="assignment.employee?.account"
                :src="assignment.employee.account.profile_photo_url"
                class="ring-2 ring-white dark:ring-slate-800"
                :title="assignment.employee.employeeName"
            />
            <div
                v-else
                class="flex w-8 h-8 items-center justify-center rounded-full bg-slate-500 text-xs font-semibold text-white ring-2 ring-white dark:ring-slate-800"
                :title="assignment.employee?.employeeName"
            >
              {{ assignment.employee?.employeeName?.charAt(0).toUpperCase() }}
            </div>
          </template>
          <div
              v-if="hiddenAssignmentsCount(props) > 0"
              class="flex w-8 h-8 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white ring-2 ring-white dark:ring-slate-800"
          >
            +{{ hiddenAssignmentsCount(props) }}
          </div>
        </div>
        <span v-else class="text-xs text-slate-400" v-text="tm('term.noAssignedEmployees')"/>
      </template>
    </Table>
  </app-layout>

  <teleport v-if="showModal" to="body">
    <!--Modal-->
    <Modal
        v-model="showModal"
        :header="tm('title.createPage.title')"
        :subHeader="tm('title.createPage.subTitle')"
        closeable
        closeButton
        @closed="closeModal"
    >
      <Form full-size>
        <FormSection bg-less>
          <!-- Code -->
          <input-group class="col-span-2" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
            <text-input v-model="form.code"/>
          </input-group>

          <!-- Name -->
          <input-group class="col-span-4" labelFor="name" :label="tm('term.name')"
                       :errors="v$.name.$errors">
            <text-input v-model="form.name"/>
          </input-group>

          <!-- Description -->
          <input-group class="col-span-6" labelFor="description" :label="tm('term.description')">
            <text-area-input :rows="4" v-model="form.description"/>
          </input-group>

          <!-- Type -->
          <input-group class="col-span-3" labelFor="staff_type" :label="tm('term.staffType')">
            <select-input v-model="form.staff_type" :options="staffTypes"/>
          </input-group>

          <!-- Department -->
          <input-group class="col-span-3" labelFor="department_id" :label="tm('term.department')"
                       :errors="v$.department_id.$errors">
            <select-input v-model="form.department_id" :options="departments" optionLabel="name"
                          :disabled="form.type === 'main'"/>
          </input-group>

          <section class="rounded-xl border border-slate-300 bg-slate-50/70 p-4 dark:border-slate-600 dark:bg-slate-800/45">
            <div class="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 class="font-semibold text-slate-800 dark:text-slate-100" v-text="tm('term.extraSections')"/>
                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400" v-text="tm('term.extraSectionsDescription')"/>
              </div>
              <SimpleButton
                  v-if="availableSections.length"
                  :label="tm('term.addSection')"
                  color="green"
                  @click="showSectionPicker = true"
              />
            </div>

            <button
                v-if="!activeSections.length"
                type="button"
                class="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-400 bg-white px-5 py-8 text-center transition hover:border-sky-500 hover:bg-sky-50 dark:border-slate-500 dark:bg-slate-700/60 dark:hover:border-sky-400 dark:hover:bg-slate-700"
                @click="showSectionPicker = true"
            >
              <font-awesome-icon icon="plus" class="mb-3 text-xl text-sky-600 dark:text-sky-400"/>
              <span class="font-semibold text-slate-700 dark:text-slate-100" v-text="tm('term.noExtraSections')"/>
              <span class="mt-1 text-sm text-slate-500 dark:text-slate-400" v-text="tm('term.noExtraSectionsDescription')"/>
            </button>

            <div v-else class="grid grid-cols-1 gap-4">
              <article
                  v-for="section in activeSections"
                  :key="section.key"
                  class="rounded-xl border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-600 dark:bg-slate-700"
              >
                <div class="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h4 class="font-semibold text-slate-800 dark:text-slate-100" v-text="section.label"/>
                    <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400" v-text="section.description"/>
                  </div>
                  <button
                      type="button"
                      class="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-slate-500 transition hover:bg-red-50 hover:text-red-600 dark:text-slate-300 dark:hover:bg-red-950/40 dark:hover:text-red-400"
                      :title="tm('term.removeSection')"
                      @click="removeSection(section.key)"
                  >
                    <font-awesome-icon icon="trash-can"/>
                  </button>
                </div>

                <text-list-input
                    v-if="section.type === 'list'"
                    :rows="4"
                    v-model="form[section.key]"
                />
                <text-list-input-with-select
                    v-else
                    v-model="form[section.key]"
                    :options="locationTypes"
                    label-key="label"
                    text-key="reason"
                    select-key="location"
                    :select-placeholder="tm('term.selectDirection')"
                />
              </article>
            </div>
          </section>

          <!-- Status -->
          <input-group class="col-span-6" labelFor="status" :label="tm('term.status')">
            <switch-input v-model="form.status"/>
          </input-group>
        </FormSection>
      </Form>

      <template #footer>
        <SimpleButton :label="t('action.reset')" color="orange" @click="resetForm" />
        <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
      </template>
    </Modal>
  </teleport>

  <teleport v-if="showSectionPicker" to="body">
    <Modal
        v-model="showSectionPicker"
        :header="tm('term.addExtraSection')"
        :subHeader="tm('term.addExtraSectionDescription')"
        closeable
        closeButton
    >
      <div v-if="availableSections.length" class="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <button
            v-for="section in availableSections"
            :key="section.key"
            type="button"
            class="group rounded-xl border border-slate-300 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-md dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-400"
            @click="addSection(section.key)"
        >
          <span class="flex items-start justify-between gap-3">
            <span>
              <span class="block font-semibold text-slate-800 dark:text-slate-100" v-text="section.label"/>
              <span class="mt-1 block text-sm leading-5 text-slate-500 dark:text-slate-400" v-text="section.description"/>
            </span>
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white dark:bg-slate-600 dark:text-sky-300 dark:group-hover:bg-sky-500">
              <font-awesome-icon icon="plus"/>
            </span>
          </span>
        </button>
      </div>
      <div v-else class="p-8 text-center text-slate-500 dark:text-slate-400" v-text="tm('term.allSectionsAdded')"/>
    </Modal>
  </teleport>

  <teleport v-if="showPeopleModal" to="body">
    <Modal
        v-model="showPeopleModal"
        :header="tm('term.assignedEmployees')"
        :subHeader="selectedJobDescription?.name"
        closeable
        closeButton
    >
      <div class="space-y-2 p-1">
        <div
            v-for="assignment in selectedJobDescription?.assignments ?? []"
            :key="assignment.id"
            class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded"
        >
          <div class="flex items-center space-x-3">
            <Avatar
                v-if="assignment.employee?.account"
                :src="assignment.employee.account.profile_photo_url"
            />
            <div
                v-else
                class="flex w-8 h-8 items-center justify-center rounded-full bg-slate-500 text-xs font-semibold text-white"
            >
              {{ assignment.employee?.employeeName?.charAt(0).toUpperCase() }}
            </div>
            <div>
              <p class="font-medium">{{ assignment.employee?.employeeName }}</p>
              <p v-if="assignment.employee?.department" class="text-xs text-slate-500">{{ assignment.employee.department.name }}</p>
            </div>
          </div>
          <span class="text-xs text-slate-500">{{ formatDate(assignment.assignment_date) }}</span>
        </div>
      </div>
    </Modal>
  </teleport>
</template>
