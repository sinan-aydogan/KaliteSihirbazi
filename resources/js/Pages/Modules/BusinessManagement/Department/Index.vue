<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-vue3";

// Components
import Modal from "@/Components/Modal/Modal.vue"
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Form from "@/Components/Form/Form.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import Avatar from "@/Components/Avatar/Avatar.vue"

// Validate
// Validation
import { useVuelidate } from "@vuelidate/core"
import { required, maxLength, helpers } from "@vuelidate/validators"

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
const { t } = useI18n();

/*Table*/
const tableHeaders = [
  {
    id: 'code',
    label: t ('department.global.code')
  },
  {
    id: 'name',
    label: t ('department.global.name')
  },
  {
    id: "manager",
    label: t ('department.global.manager')
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
            Inertia.reload({
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
        required: helpers.withMessage(t('global.messages.validation.required'), required),
        maxLength: helpers.withMessage(t('global.messages.validation.maxLength', [10]), maxLength(10))
    },
    name: {
        required: helpers.withMessage(t('global.messages.validation.required'), required),
        maxLength: helpers.withMessage(t('global.messages.validation.maxLength', [255]), maxLength(255))
    },
    type: { required: helpers.withMessage(t('global.messages.validation.required'), required) },
    department_id: { departmentValidation: helpers.withMessage(t('global.messages.validation.required'), departmentValidation) },
})

const v$ = useVuelidate(rules, form)

// Data
const departmentTypes = [
    {
        id: 'main',
        label: t('department.global.mainDepartment')
    },
    {
        id: 'sub',
        label: t('department.global.subDepartment')
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
    Inertia.delete(route("department.destroy", id), {
        preserveState: true,
    });
}

</script>

<template>
    <app-layout :title="$t('department.index.title')" :sub-title="$t('department.index.subTitle')">
        <template #actionArea>
            <simple-button @click="showModal = true; formType = 'create'" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2" />
                <span v-text="$t('global.deletedItems')" />
            </simple-button>

            <simple-button @click="showModal = true; formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2" />
                <span v-text="$t('global.addNew')" />
            </simple-button>
        </template>
      <Table :data="tableData" :headers="tableHeaders" @view="Inertia.visit(route('department.show', $event.id))">
        <template #manager="{props}">
          <div class="flex space-x-2 items-center">
            <avatar :src="props.manager.has_account ? props.manager.account.profile_photo_url : ''"/>
            <span v-text="props.manager.employeeName"/>
          </div>
        </template>
      </Table>
        <!--Table-->
        <!-- <el-table :data="tableData.data" style="width: 100%" :empty-text="$t('global.noData')">
            <el-table-column :label="$t('global.code')" prop="code" />
            <el-table-column :label="$t('department.global.name')" prop="name" />
            <el-table-column :label="$t('department.global.manager')" prop="user_name" />
            <el-table-column :label="$t('department.global.mainDepartment')" prop="department_name" />
            <el-table-column align="right">

                <template #default="scope">
                    <el-button size="small" @click="getRowInfo(scope.row.id)">
                        {{  $t('global.edit')  }}
                    </el-button>
                    <el-popconfirm :title="$t('global.questions.deleteConfirm')" :cancel-button-text="$t('global.no')"
                        :confirm-button-text="$t('global.yes')" @confirm="handleDelete(scope.row.id)">
                        <template #reference>
                            <el-button size="small" type="danger">
                                {{  $t('global.delete')  }}
                            </el-button>
                        </template>
                    </el-popconfirm>

                </template>
            </el-table-column>
        </el-table> -->
    </app-layout>

  <teleport to="body">
    <!--Modal-->
    <Modal v-model="showModal" :header="t('department.create.title')" :subHeader="t('department.create.subTitle')"
           closeable closeButton :actionButtons="['submit', 'reset']" @reset="form.reset()" @submit="handleSubmit">
      <Form layout="basic">
        <!-- Code -->
        <input-group class="col-span-2" labelFor="code" :label="t('global.code')" :errors="v$.code.$errors">
          <text-input v-model="form.code" />
        </input-group>

        <!-- Space Filler -->
        <div class="col-span-4"></div>

        <!-- Name -->
        <input-group class="col-span-6" labelFor="name" :label="t('department.global.name')"
                     :errors="v$.name.$errors">
          <text-input v-model="form.name" />
        </input-group>

        <!-- Manager -->
        <input-group class="col-span-6" labelFor="employee_id" :label="t('department.global.manager')">
          <select-input v-model="form.employee_id" :options="employees" optionLabel="employeeName" />
        </input-group>

        <!-- Type -->
        <input-group class="col-span-3" labelFor="type" :label="t('department.global.type')">
          <select-input v-model="form.type" :options="departmentTypes" />
        </input-group>

        <!-- Main Department -->
        <input-group class="col-span-3" labelFor="department_id" :label="t('department.global.mainDepartment')"
                     :errors="v$.department_id.$errors">
          <select-input v-model="form.department_id" :options="departments" optionLabel="name"
                        :disabled="form.type === 'main'" />
        </input-group>
      </Form>
    </Modal>
  </teleport>
</template>
