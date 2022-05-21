<template>
    <app-layout :title="$t('warehouse.index.title')" :sub-title="$t('warehouse.index.subTitle')">        <template #actionArea>
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
        <el-table :data="tableData.data" style="width: 100%" :empty-text="$t('global.noData')">
            <el-table-column :label="$t('global.code')" prop="code"/>
            <el-table-column :label="$t('warehouse.global.name')" prop="name"/>
            <el-table-column :label="$t('global.supervisor')" prop="user_name"/>
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
        <el-dialog :title="$t('warehouse.create.title')" v-model="showModal">
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
                    :label="$t('warehouse.global.name')"
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
                    :label="$t('warehouse.global.type')"
                    prop="type"
                >
                    <el-radio-group v-model="form.type">
                        <el-radio-button label="import">{{ $t('warehouse.global.finishedProductsWarehouse') }}</el-radio-button>
                        <el-radio-button label="export">{{ $t('warehouse.global.rawMaterialWarehouse') }}</el-radio-button>
                        <el-radio-button label="general">{{ $t('warehouse.global.generalWarehouse') }}</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <!--Manager-->
                <el-form-item
                    :label="$t('global.supervisor')"
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
                        :placeholder="$t('warehouse.message.selectSupervisor')"
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
    type: "general",
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
    ]
});

/*Create*/
const submit = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            if (formType.value === 'create') {
                form.post(route('warehouse.store'))
            } else {
                form.put(route('warehouse.update', {id: form.id}))
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
    axios.get(route("warehouse.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.name = response.data.name;
        form.type = response.data.type;
        form.user_id = response.data.user_id;
    })
    showModal.value = true;
    formType.value = "update"
}
/*Delete*/
const handleDelete = (id) => {
    Inertia.delete(route("warehouse.destroy", id), {
        preserveState: true,
    });
}
</script>
