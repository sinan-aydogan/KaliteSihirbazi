<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
import { router, useForm } from '@inertiajs/vue3';

// Components
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
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
  employees: {
    type: Array,
    default: []
  },
})

/*Multi-lang*/
import Translates from "./translates"
const {t,tm} = Translates();

// Validation
import { useVuelidate } from "@vuelidate/core"
import { required, maxLength, helpers } from "@vuelidate/validators"

/*Table*/
const tableHeaders = [
  {
    id: 'code',
    label: tm ('term.code')
  },
  {
    id: 'name',
    label: tm ('term.name')
  },
  {
    id: "manager",
    label: tm ('term.manager')
  },
  {
    id: "deleted_at",
    label: tm ('term.deletedAt')
  }
]
const showModal = ref(false);

/*Deleted Time*/
import { useTimeAgo } from '@vueuse/core'
const timeAgo = (time)=>{
  return useTimeAgo(time).value
}

/*Form*/
const formType = ref("create");
const formRef = ref()
const form = useForm({
  id: null,
  code: "",
  name: "",
  type: "main",
  department_id: null,
  employee_id: null,
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
const departmentValidation = (value) => (form.type === "main" && !value) || (form.type === 'sub' && value)
const rules = ref({
  code: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
  },
  name: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
  },
  type: { required: helpers.withMessage(t('message.validation.required'), required) },
  department_id: { departmentValidation: helpers.withMessage(t('message.validation.required'), departmentValidation) },
})

const v$ = useVuelidate(rules, form)

// Data
const departmentTypes = [
  {
    id: 'main',
    label: tm('term.mainDepartment')
  },
  {
    id: 'sub',
    label: tm('term.subDepartment')
  }
];

/*Create*/
const handleSubmit = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  // Correction Main Department
  if (form.type === 'main') {
    form.department_id = null
  }

  if (formType.value === 'create') {
    form.post(route('department.store'),{
      onSuccess: ()=>{
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  } else {
    form.put(route('department.update', { id: form.id }))
  }
}

/*Update*/
const getRowInfo = (id) => {
  axios.get(route("department.edit", { id: id })).then(response => {
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
  <app-layout :title="tm('title.deletedPage.title')" :sub-title="tm('title.deletedPage.subTitle')">
    <template #actionArea>
      <simple-button type="route" :link="route('department.index')" color="blue">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
        <span v-text="tm('action.returnToList')" />
      </simple-button>
    </template>
    <Table
        :data="tableData"
        :headers="tableHeaders"
        @delete="router.delete(route('department.permanent-delete', $event.id))"
        @restore="router.visit(route('department.restore', $event.id))"
        restore-action
        delete-action
    >
      <template #manager="{props}">
        <div v-if="props.manager" class="flex space-x-2 items-center">
          <avatar :src="props.manager.has_account ? props.manager.account.profile_photo_url : ''"/>
          <span v-text="props.manager.employeeName"/>
        </div>
      </template>

      <!--Deleted At-->
      <template #deleted_at="{props}">
        {{timeAgo(props.deleted_at)}}
      </template>
    </Table>
  </app-layout>

  <teleport to="body">
    <!--Modal-->
    <Modal v-model="showModal" :header="tm('title.createPage.title')" :subHeader="tm('title.createPage.subTitle')"
           closeable closeButton :actionButtons="['submit', 'reset']" @reset="form.reset()" @submit="handleSubmit">
      <Form layout="basic">
        <!-- Code -->
        <input-group class="col-span-2" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
          <text-input v-model="form.code" />
        </input-group>

        <!-- Space Filler -->
        <div class="col-span-4"></div>

        <!-- Name -->
        <input-group class="col-span-6" labelFor="name" :label="tm('term.name')"
                     :errors="v$.name.$errors">
          <text-input v-model="form.name" />
        </input-group>

        <!-- Manager -->
        <input-group class="col-span-6" labelFor="employee_id" :label="tm('term.manager')">
          <select-input v-model="form.employee_id" :options="employees" optionLabel="employeeName" />
        </input-group>

        <!-- Type -->
        <input-group class="col-span-3" labelFor="type" :label="tm('term.type')">
          <select-input v-model="form.type" :options="departmentTypes" />
        </input-group>

        <!-- Main Department -->
        <input-group class="col-span-3" labelFor="department_id" :label="tm('term.mainDepartment')"
                     :errors="v$.department_id.$errors">
          <select-input v-model="form.department_id" :options="departments" optionLabel="name"
                        :disabled="form.type === 'main'" />
        </input-group>
      </Form>
    </Modal>
  </teleport>
</template>
