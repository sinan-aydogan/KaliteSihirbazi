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
  warehouseTypes: {
    type: Array,
    default: []
  },
  employees: {
    type: Array,
    default: []
  },
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
    id: 'code',
    label: tm('term.code'),
    width: 'w-32'
  },
  {
    id: 'name',
    label: tm('term.name')
  },
  {
    id: "warehouse_type_id",
    label: tm('term.type')
  },
  {
    id: "department_id",
    label: tm('term.department')
  },
  {
    id: "supervisor_id",
    label: tm('term.supervisor')
  }
]
const showModal = ref(false);

/*Form*/
const formType = ref("create");
const formRef = ref()
const form = useForm({
  id: null,
  code: "",
  name: "",
  warehouse_type_id: null,
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
const rules = ref({
  code: {
    required: helpers.withMessage(tm('message.validation.required'), required),
    maxLength: helpers.withMessage(tm('message.validation.maxLength', [10]), maxLength(10))
  },
  name: {
    required: helpers.withMessage(tm('message.validation.required'), required),
    maxLength: helpers.withMessage(tm('message.validation.maxLength', [255]), maxLength(255))
  },
  warehouse_type_id: {required: helpers.withMessage(tm('message.validation.required'), required)},
  department_id: {required: helpers.withMessage(tm('message.validation.required'), required)},
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  if (formType.value === 'create') {
    form.post(route('warehouse.store'), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  } else {
    form.put(route('warehouse.update', {id: form.id}), {
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
  axios.get(route("warehouse.edit", {id: id})).then(response => {
    form.id = response.data.id;
    form.code = response.data.code;
    form.name = response.data.name;
    form.warehouse_type_id = response.data.warehouse_type_id;
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
  <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
    <template #actionArea>
      <!--Deleted Records-->
      <simple-button type="route" :link="route('warehouse.deleted')" color="red">
        <font-awesome-icon icon="trash-can" class="mr-2"/>
        <span v-text="tm('term.deletedItems')"/>
      </simple-button>

      <!--Manage Department Module-->
      <simple-button type="route" :link="route('warehouse-setting.index')" color="blue">
        <font-awesome-icon icon="fa-solid fa-cog" class="mr-2"/>
        <span v-text="tm('term.manageModule')"/>
      </simple-button>

      <!--Add New Button-->
      <simple-button @click="showModal = true; formType = 'create'" color="green">
        <font-awesome-icon icon="plus" class="mr-2"/>
        <span v-text="tm('action.addNew')"/>
      </simple-button>
    </template>
    <!--Table-->
    <Table
        :data="tableData"
        :headers="tableHeaders"
        @view="router.visit(route('warehouse.show', $event.id))"
        @edit="getRowInfo($event.id)"
        show-action
        edit-action
    >
      <!--Warehouse Type-->
      <template #warehouse_type_id="{props}">
        <div v-if="props.type" class="flex space-x-2 items-center">
          <span v-text="props.type.name"/>
        </div>
      </template>

      <!--Related Department-->
      <template #department_id="{props}">
        <div v-if="props.department" class="flex space-x-2 items-center">
          <span v-text="props.department.name"/>
        </div>
      </template>

      <!--Supervisor-->
      <template #supervisor_id="{props}">
        <div v-if="props.supervisor" class="flex space-x-2 items-center">
          <avatar v-if="props.supervisor['has_account']" :src="props.supervisor.has_account ? props.supervisor.account.profile_photo_url : ''"/>
          <span v-text="props.supervisor.employeeName"/>
        </div>
      </template>
    </Table>
  </app-layout>

  <teleport to="body">
    <!--Modal-->
    <Modal
        v-model="showModal"
        :header="tm('title.createPage.title')"
        :subHeader="tm('title.createPage.subTitle')"
        closeable
        close-button
        @closed="form.reset()"
    >
      <Form full-size>
        <FormSection
            bg-less
        >
          <!-- Code -->
          <input-group class="col-span-2" labelFor="code" :label="tm('term.code')" :errors="v$.code.$errors">
            <text-input v-model="form.code"/>
          </input-group>

          <!-- Space Filler -->
          <div class="col-span-4"></div>

          <!-- Name -->
          <input-group class="col-span-6" labelFor="name" :label="tm('term.name')"
                       :errors="v$.name.$errors">
            <text-input v-model="form.name"/>
          </input-group>

          <!-- Supervisor -->
          <input-group class="col-span-6" labelFor="employee_id" :label="tm('term.supervisor')">
            <select-input v-model="form.employee_id" :options="employees" optionLabel="employeeName"/>
          </input-group>

          <!-- Type -->
          <input-group class="col-span-3" labelFor="warehouse_type_id" :label="tm('term.type')">
            <select-input v-model="form.warehouse_type_id" :options="warehouseTypes" option-label="name"/>
          </input-group>

          <!-- Related Department -->
          <input-group class="col-span-3" labelFor="department_id" :label="tm('term.department')"
                       :errors="v$.department_id.$errors">
            <select-input v-model="form.department_id" :options="departments" optionLabel="name"/>
          </input-group>
        </FormSection>
      </Form>
      <template #footer>
        <SimpleButton :label="tm('action.reset')" color="orange" @click="form.reset()" />
        <SimpleButton :label="tm('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
      </template>
    </Modal>
  </teleport>
</template>
