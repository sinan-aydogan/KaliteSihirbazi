<template>
    <app-layout :title="$t('supplier.main.index.title')" :sub-title="$t('supplier.main.index.subTitle')">
        <template #actionArea>

            <!--Deleted Items-->
            <el-button @click="showModal = true;formType='create'">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="$t('global.deletedItems')"/>
            </el-button>

            <!--Manage Types-->
            <el-button type="primary" @click="showModal = true;">
                <font-awesome-icon icon="layer-group" class="mr-2"/>
                <span v-text="$t('supplier.type.global.manage')"/>
            </el-button>

            <!--Add New-->
            <el-button type="primary" @click="showModal = true;">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="$t('global.addNew')"/>
            </el-button>
        </template>
        <!--Table-->
        <el-table :data="supplierTableData.data" style="width: 100%" :empty-text="$t('global.noData')">
            <el-table-column :label="$t('global.code')" prop="code" width="125px"/>
            <el-table-column :label="$t('supplier.main.global.name')" prop="name"/>

            <!--Types-->
            <el-table-column :label="$t('supplier.type.global.supplierType')" prop="types" align="center">
                <template #default="scope">
                    <div class="flex flex-wrap space-x-1">
                        <template v-for="(t,index) in scope.row.types">
                            <el-tag v-text="index"/>
                        </template>
                    </div>
                </template>
            </el-table-column>

            <!--Status-->
            <el-table-column :label="$t('global.status')" prop="is_active" align="center" width="150px">
                <template #default="scope">
                    <el-tag v-if="scope.row.is_active" type="success" size="mini" v-text="$t('global.active')"/>
                    <el-tag v-else type="danger" size="mini" v-text="$t('global.inactive')"/>
                </template>
            </el-table-column>
            <el-table-column align="right">

                <template #default="scope">
                    <!--Edit-->
                    <el-button size="small" @click="getRowInfo(scope.row.id)">
                        {{ $t('global.edit') }}
                    </el-button>
                    <!--Delete-->
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
        <el-dialog :title="$t('supplier.main.create.title')" v-model="showModal">
            <el-form
                ref="formRef"
                :model="form"
                label-width="auto"
                :rules="rules"
            >
                <el-tabs tab-position="top" class="demo-tabs">
                    <el-tab-pane :label="$t('global.generalDetails')">
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
                            :label="$t('supplier.main.global.name')"
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
                            :label="$t('supplier.type.global.supplierType')"
                            prop="supplier_types"
                        >
                            <el-select
                                v-model="form.supplier_types"
                                multiple
                                filterable
                                clearable
                                :loading="loading"
                                :no-data-text="$t('global.noData')"
                                :no-match-text="$t('global.noMatches')"
                                :loading-text="$t('global.loading')"
                                :placeholder="$t('global.selectType')"
                            >
                                <el-option
                                    v-for="item in types"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id"
                                />
                            </el-select>
                        </el-form-item>

                        <!--Tags-->
                        <el-form-item
                            :label="$t('global.tags')"
                            prop="tags"
                        >
                            <el-select
                                v-model="form.tags"
                                multiple
                                filterable
                                clearable
                                :loading="loading"
                                :no-data-text="$t('global.noData')"
                                :no-match-text="$t('global.noMatches')"
                                :loading-text="$t('global.loading')"
                                :placeholder="$t('global.selectType')"
                            >
                                <el-option
                                    v-for="item in tags"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id"
                                />
                            </el-select>
                        </el-form-item>

                        <!--Status-->
                        <el-form-item
                            :label="$t('global.status')"
                            prop="is_active"
                        >
                            <el-radio-group v-model="form.is_active">
                                <el-radio-button :label="true">{{ $t('global.active') }}</el-radio-button>
                                <el-radio-button :label="false">{{ $t('global.inactive') }}</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-tab-pane>
                    <el-tab-pane>
                        <template #label>
                            <font-awesome-icon icon="at" class="mr-1"/>
                            <span v-text="$t('global.contactDetails')"/>
                        </template>
                        <!--Button of contact adding-->
                        <div class="flex justify-end mt-1">
                            <el-dropdown type="primary" trigger="click">
                                <span
                                    class="flex justify-center cursor-pointer bg-emerald-500 text-white p-2 space-x-2 rounded-lg tems-center">
                                    <font-awesome-icon icon="plus"/>
                                    <span v-text="$t('supplier.main.create.selectContactType')"></span>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item @click="createContactField('phone')">
                                            <font-awesome-icon icon="phone" class="mr-2"/>
                                            <span v-text="$t('global.phoneNumber')"/>
                                        </el-dropdown-item>
                                        <el-dropdown-item @click="createContactField('email')">
                                            <font-awesome-icon icon="at" class="mr-2"/>
                                            <span v-text="$t('auth.email')"/>
                                        </el-dropdown-item>
                                        <el-dropdown-item @click="createContactField('address')">
                                            <font-awesome-icon icon="map-location-dot" class="mr-2"/>
                                            <span v-text="$t('global.address')"/>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>

                        <!--Contact Details-->
                        <div class="space-y-2 py-4" v-if="Object.keys(form.contact_info).length>0">
                            <template v-for="(field,index) in form.contact_info" :key="field">

                                <div class="flex border rounded-lg space-x-2 p-2 w-full justify-between items-center h-full">
                                   <div class="flex flex-col space-y-1 w-full">
                                       <!--Title-->
                                       <el-input v-model="form.contact_info[index].title" :placeholder="$t('global.title')"/>

                                       <!--Value-->
                                       <el-input v-model="form.contact_info[index].value"  :placeholder="$t('global.value')">
                                           <template #prepend>
                                               <font-awesome-icon :icon="
                                            field.type === 'phone' ? 'phone' :
                                            field.type === 'email' ? 'at' :
                                            field.type === 'address' ? 'map-location-dot' : ''
                                        "/>
                                           </template>
                                       </el-input>
                                   </div>

                                    <!--Delete Icon-->
                                    <div class="flex flex-col justify-between space-y-3 h-full ">
                                        <!--Delete-->
                                        <div @click="deleteContactField(index)" class="flex h-6 w-6 items-center justify-center bg-rose-500 text-white rounded-full cursor-pointer active:scale-95">
                                            <font-awesome-icon icon="x"/>
                                        </div>
                                        <!--Make Default-->
                                        <el-popconfirm
                                            :title="$t('supplier.main.question.'+ (form.contact_info[index].is_primary ? 'areYouSureRemoveDefaultContact' : 'areYouSureMakeDefaultContact'))"
                                            :confirm-button-text="$t('global.yes')"
                                            :cancel-button-text="$t('global.no')"
                                            @confirm="makeDefaultContactField(index)">
                                            <template #reference>
                                            <font-awesome-icon
                                                icon="circle-check"
                                                class="h-6 w-6 cursor-pointer active:scale-95"
                                                :class="form.contact_info[index].is_primary ? 'text-emerald-500' : 'text-slate-500 hover:text-emerald-600 hover:animate-pulse'"
                                            />
                                            </template>
                                        </el-popconfirm>
                                    </div>
                                </div>

                            </template>
                        </div>

                        <el-empty v-else :description="$t('global.noData')"/>

                    </el-tab-pane>

                </el-tabs>
                <!--Action Buttons-->
                <el-form-item label-width="0">
                    <div class="flex justify-between w-full -mb-8">
                        <el-button v-if="formType==='create'" @click="form.reset()">
                            {{ $t('global.reset') }}
                        </el-button>

                        <el-button type="primary" @click="submit(formRef)">
                            {{ $t(formType === 'create' ? 'global.create' : 'global.update') }}
                        </el-button>
                    </div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout";
import {computed, reactive, ref} from "vue";
import {useI18n} from "vue-i18n";
import {Inertia} from "@inertiajs/inertia";

const props = defineProps({
    supplierTableData: {
        type: Object,
        default: {}
    },
    typeTableData: {
        type: Object,
        default: {}
    },
    types: {
        type: Array,
        default: []
    },
    tags: {
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
    supplier_types: [],
    contact_info: {},
    tags: [],
    is_active: true,
    notes: {},
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
    /*supplier_types: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
    ],
    is_active: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'focus'},
    ]*/
});

/*Create*/
const submit = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            if (formType.value === 'create') {
                form.post(route('supplier.store'))
            } else {
                form.put(route('supplier.update', {id: form.id}))
            }
            form.reset();
            showModal.value = false;
        } else {
            return false
        }
    })
}

const createContactField = (type) => {
    let id = (Math.random().toString(36) + Date.now().toString(36)).toLowerCase().substr(2, 9)
    form.contact_info[id] = {
        type: type,
        title: '',
        value: '',
        is_primary: 0,
    }
}

const makeDefaultContactField = (id)=>{
    let type = form.contact_info[id].type
    let primary_count = 0
    for(const t in form.contact_info){
        if(form.contact_info[t].type === type && form.contact_info[t].is_primary === 1){
            primary_count++
        }
    }

    /*Validate*/
    if(form.contact_info[id].is_primary){
        form.contact_info[id].is_primary = false
    }else{
        if(primary_count === 0){
            form.contact_info[id].is_primary = true
        }else{
            alert('You can only have one primary contact')
        }
    }
}

const deleteContactField= (id) => {
    delete form.contact_info[id]
}

/*Update*/
const getRowInfo = (id) => {
    axios.get(route("supplier.edit", {id: id})).then(response => {
        form.id = response.data.id;
        form.code = response.data.code;
        form.name = response.data.name;
        form.supplier_types = response.data.supplier_types;
        form.contact_info = response.data.contact_info;
        form.is_active = response.data.is_active;
        form.notes = response.data.notes;
    })
    showModal.value = true;
    formType.value = "update"
}
/*Delete*/
const handleDelete = (id) => {
    Inertia.delete(route("supplier.destroy", id), {
        preserveState: true,
    });
}
</script>
