<template>
    <app-layout title="Departmanlar" sub-title="İşletmenizdeki depatmanları buradan yönetebilirsiniz.">
        <template #actionArea>
            <el-button type="danger">
                <font-awesome-icon icon="trash-can" class="mr-1"/>
                <span class="hidden md:block">Silinmişler</span>
            </el-button>
            <el-button type="success">
                <font-awesome-icon icon="plus" class="mr-1"/>
                <span class="hidden md:block">Yeni Ekle</span>
            </el-button>
        </template>

        <!--Table-->
        <el-table :data="tableData.data" style="width: 100%">
            <el-table-column :label="$t('global.code')" prop="code"/>
            <el-table-column :label="$t('department.global.name')" prop="name"/>
            <el-table-column :label="$t('department.global.manager')" prop="user_name"/>
            <el-table-column :label="$t('department.global.mainDepartment')" prop="department_name"/>
            <el-table-column align="right">
                <template #header>
                    <el-button @click="showModal=true" type="primary">{{ $t('global.addNew') }}</el-button>
                </template>
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
                                {{$t('global.delete') }}
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
                label-width="100px"
                class="demo-ruleForm"
            >
                <!--Code-->
                <el-form-item
                    :label="$t('global.code')"
                    prop="code"
                    :rules="rules.code"

                >
                    <el-input
                        v-model.number="form.code"
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
                    :rules="rules.name"
                >
                    <el-input
                        v-model.number="form.name"
                        type="text"
                        autocomplete="off"
                        :maxlength="100"
                        show-word-limit
                    />
                </el-form-item>

                <!--Action Buttons-->
                <el-form-item>
                    <el-button type="primary" @click="handleCreate(formRef)">
                        {{ $t('global.save') }}
                    </el-button>
                    <el-button @click="form.reset()">
                        {{ $t('global.reset') }}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout";
import {reactive, ref} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {useI18n} from "vue-i18n";
import {Inertia} from "@inertiajs/inertia";

defineProps({
    tableData: {
        type: Object,
        default: {}
    }
})

const {t} = useI18n();
const showModal = ref(false);
const formType = ref("create");
/*Create*/
const formRef = ref()
const form = useForm({
    id: null,
    code: "",
    name: "",
    type: ""
})
const rules = reactive({
    code: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
        {max: 10, message: t('global.messages.validation.maxLength',[10]), trigger: 'blur'},
    ],
    name: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
        {max: 100, message: t('global.messages.validation.maxLength',[100]), trigger: 'blur'},
    ],
    type: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
    ]
});
const handleCreate = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            if(formType.value==='create'){
                form.post(route('department.store'))
            }else{
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
const getRowInfo = (id)=>{
    axios.get(route("department.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.name = response.data.name;
        form.type = response.data.type;
    })
    showModal.value = true;
    formType.value = "update"
}
/*Delete*/
const handleDelete = (id)=>{
    Inertia.delete(route("department.destroy", id),{
        preserveState: true,
    });
}

</script>
