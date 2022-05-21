<template>
    <app-layout :title="$t('department.index.title')" :sub-title="$t('department.index.subTitle')">
        <template #actionArea>
            <el-button @click="showModal = true;formType='create'">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('global.deletedItems')"/>
            </el-button>
            <el-button type="primary" @click="showModal = true;">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="$t('global.addNew')"/>
            </el-button>
        </template>
        <!--Table-->
        <el-table :data="tableData.data" style="width: 100%">
            <el-table-column :label="$t('global.code')" prop="code"/>
            <el-table-column :label="$t('department.global.name')" prop="name"/>
            <el-table-column :label="$t('department.global.manager')" prop="user_name"/>
            <el-table-column :label="$t('department.global.mainDepartment')" prop="department_name"/>
            <el-table-column align="right">

                <template #default="scope">
                    <el-button size="small" @click="getRowInfo(scope.row.id)">
                        {{ $t('global.edit') }}
                    </el-button>
                    <el-popconfirm
                        :title="$t('global.questions.deleteConfirm')"
                        :cancel-button-text="$t('global.no')"
                        :confirm-button-text="$t('global.yes')"
                        @confirm="handleDelete(scope.row.id)"
                    >
                        <template #reference>
                            <el-button
                                size="small"
                                type="danger"
                            >
                                {{ $t('global.delete') }}
                            </el-button>
                        </template>
                    </el-popconfirm>

                </template>
            </el-table-column>
        </el-table>

        <!--Modal-->
        <el-dialog :title="$t('department.create.title')" v-model="showModal">
            <el-form
                ref="formRef"
                :model="form"
                label-width="auto"
                :rules="rules"
            >
                <!--Code-->
                <el-form-item
                    :label="$t('global.code')"
                    prop="code"
                >
                    <el-input
                        v-model="form.code"
                        type="text"
                        autocomplete="off"
                        :formatter="(value) => value.toUpperCase()"
                        :maxlength="10"
                        show-word-limit
                    />
                </el-form-item>

                <!--Name-->
                <el-form-item
                    :label="$t('department.global.name')"
                    prop="name"
                >
                    <el-input
                        v-model="form.name"
                        type="text"
                        autocomplete="off"
                        :maxlength="100"
                        show-word-limit
                    />
                </el-form-item>

                <!--Type-->
                <el-form-item
                    :label="$t('department.global.type')"
                    prop="type"
                >
                    <el-radio-group v-model="form.type">
                        <el-radio-button label="main">{{ $t('department.global.mainDepartment') }}</el-radio-button>
                        <el-radio-button label="sub">{{ $t('department.global.subDepartment') }}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <!--Main Department-->
                <el-form-item
                    v-if="form.type === 'sub'"
                    :label="$t('department.global.mainDepartment')"
                    prop="department_id"
                >
                    <el-select
                        v-model="form.department_id"
                        filterable
                        clearable
                        remote
                        reserve-keyword
                        @focus="getDataModel = 'departments'"
                        :remote-method="getData"
                        :loading="loading"
                        :no-data-text="$t('global.noData')"
                        :no-match-text="$t('global.noMatches')"
                        :loading-text="$t('global.loading')"
                        :placeholder="$t('department.message.selectDepartment')"
                    >
                        <el-option
                            v-for="item in departments"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        />
                    </el-select>
                </el-form-item>

                <!--Manager-->
                <el-form-item
                    :label="$t('department.global.manager')"
                    prop="user_id"
                >
                    <el-select
                        v-model="form.user_id"
                        @focus="getDataModel = 'users'"
                        filterable
                        remote
                        clearable
                        reserve-keyword
                        :remote-method="getData"
                        :loading="loading"
                        :no-data-text="$t('global.noData')"
                        :no-match-text="$t('global.noMatches')"
                        :loading-text="$t('global.loading')"
                        :placeholder="$t('department.message.selectManager')"
                    >
                        <el-option
                            v-for="item in users"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        />
                    </el-select>
                </el-form-item>

                <!--Action Buttons-->
                <el-form-item>
                    <el-button type="primary" @click="submit(formRef)">
                        {{ $t(formType === 'create' ? 'global.create' : 'global.update') }}
                    </el-button>
                    <el-button v-if="formType==='create'" @click="form.reset()">
                        {{ $t('global.reset') }}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout";
import { reactive, ref} from "vue";
import {useI18n} from "vue-i18n";
import {Inertia} from "@inertiajs/inertia";

const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    },
    departments: {
        type: Array,
        default: []
    },
    users: {
        type: Array,
        default: []
    },
})
const {t} = useI18n();
const showModal = ref(false);

/*Form*/
const formType = ref("create");
import {useForm} from "@inertiajs/inertia-vue3";
const formRef = ref()
const form = useForm({
    id: null,
    code: "",
    name: "",
    type: "main",
    department_id: null,
    user_id: null,
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

/*Validation*/
const checkDepartment = (rule, value, callback) => {
    if (!value && form.type === "sub") {
        return callback(new Error(t('global.messages.validation.required')))
    } else {
        return callback()
    }
}
const rules = reactive({
    code: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
        {max: 10, message: t('global.messages.validation.maxLength', [10]), trigger: 'blur'},
    ],
    name: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
        {max: 100, message: t('global.messages.validation.maxLength', [100]), trigger: 'blur'},
    ],
    type: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
    ],
    department_id: [
        {required: true, validator: checkDepartment, trigger: 'focus'},
    ]
});

/*Create*/
const submit = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            if (formType.value === 'create') {
                form.post(route('department.store'))
            } else {
                form.put(route('department.update', {id: form.id}))
            }
            form.reset();
            showModal.value = false;
        } else {
            return false
        }
    })
}
/*Update*/
const getRowInfo = (id) => {
    axios.get(route("department.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.name = response.data.name;
        form.type = response.data.type;
        form.department_id = response.data.department_id;
        form.user_id = response.data.user_id;
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
