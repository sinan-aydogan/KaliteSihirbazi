<script setup>
import { reactive, ref} from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import {useForm, router} from "@inertiajs/vue3";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Table from "@/Components/Table/Table.vue";
import Form from "@/Components/Form/Form.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import Modal from "@/Components/Modal/Modal.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
// Props
const props = defineProps({
    supplierTableData: {
        type: Object,
        default: {}
    },
    supplierTypeTableData: {
        type: Object,
        default: {}
    },
    supplierTypes: {
        type: Array,
        default: []
    },
    supplierTags: {
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
        label: t('term.code')
    },
    {
        id: 'name',
        label: t('term.name')
    },
    {
        id: "types",
        label: t('term.type')
    },
    {
        id: "tags",
        label: t('term.tag')
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
    types: [],
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

/*Validation*/
const checkDepartment = (rule, value, callback) => {
    if (!value && form.type === "sub") {
        return callback(new Error(t('global.messages.validation.required')))
    } else {
        return callback()
    }
}
const rules = reactive({
    code: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
    },
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
    },
    /*supplier_types: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'blur'},
    ],
    is_active: [
        {required: true, message: t('global.messages.validation.required'), trigger: 'focus'},
    ]*/
});

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
    const isValidated = await v$.value.$validate()
    if (!isValidated) return


    if (formType.value === 'create') {
        form.post(route('supplier.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    } else {
        form.put(route('supplier.update', {id: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            }
        })
    }
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
    router.delete(route("supplier.destroy", id), {
        preserveState: true,
    });
}
</script>

<template>
    <app-layout :title="$t('supplier.main.index.title')" :sub-title="$t('supplier.main.index.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('department.deleted')" color="red">
                <font-awesome-icon icon="trash-can" class="mr-2"/>
                <span v-text="t('term.deletedItems')"/>
            </simple-button>

            <simple-button @click="showModal = true; formType = 'create'" color="green">
                <font-awesome-icon icon="plus" class="mr-2"/>
                <span v-text="t('action.addNew')"/>
            </simple-button>
        </template>

        <Table
            :data="supplierTableData"
            :headers="tableHeaders"
            @view="router.visit(route('supplier.show', $event.id))"
            @edit="getRowInfo($event.id)"
            show-action
            edit-action
        >
            <!--Types-->
            <template #types="{props}">
                {{ props.types.map((type) => type.name).join(', ')}}
            </template>

            <!--Tags-->
            <template #tags="{props}">
                {{ props.tags.map((tag) => tag.name).join(', ')}}
            </template>
        </Table>
        <!--<template #actionArea>-->

        <!--    &lt;!&ndash;Deleted Items&ndash;&gt;-->
        <!--    <el-button @click="showModal = true;formType='create'">-->
        <!--        <font-awesome-icon icon="trash-can" class="mr-2"/>-->
        <!--        <span v-text="$t('global.deletedItems')"/>-->
        <!--    </el-button>-->

        <!--    &lt;!&ndash;Manage Types&ndash;&gt;-->
        <!--    <el-button type="primary" @click="showModal = true;">-->
        <!--        <font-awesome-icon icon="layer-group" class="mr-2"/>-->
        <!--        <span v-text="$t('supplier.type.global.manage')"/>-->
        <!--    </el-button>-->

        <!--    &lt;!&ndash;Add New&ndash;&gt;-->
        <!--    <el-button type="primary" @click="showModal = true;">-->
        <!--        <font-awesome-icon icon="plus" class="mr-2"/>-->
        <!--        <span v-text="$t('global.addNew')"/>-->
        <!--    </el-button>-->
        <!--</template>-->
        <!--&lt;!&ndash;Table&ndash;&gt;-->
        <!--<el-table :data="supplierTableData.data" style="width: 100%" :empty-text="$t('global.noData')">-->
        <!--    <el-table-column :label="$t('global.code')" prop="code" width="125px"/>-->
        <!--    <el-table-column :label="$t('supplier.main.global.name')" prop="name"/>-->

        <!--    &lt;!&ndash;Types&ndash;&gt;-->
        <!--    <el-table-column :label="$t('supplier.type.global.supplierType')" prop="types" align="center">-->
        <!--        <template #default="scope">-->
        <!--            <div class="flex flex-wrap space-x-1">-->
        <!--                <template v-for="(t,index) in scope.row.types">-->
        <!--                    <el-tag v-text="index"/>-->
        <!--                </template>-->
        <!--            </div>-->
        <!--        </template>-->
        <!--    </el-table-column>-->

        <!--    &lt;!&ndash;Status&ndash;&gt;-->
        <!--    <el-table-column :label="$t('global.status')" prop="is_active" align="center" width="150px">-->
        <!--        <template #default="scope">-->
        <!--            <el-tag v-if="scope.row.is_active" type="success" size="mini" v-text="$t('global.active')"/>-->
        <!--            <el-tag v-else type="danger" size="mini" v-text="$t('global.inactive')"/>-->
        <!--        </template>-->
        <!--    </el-table-column>-->
        <!--    <el-table-column align="right">-->

        <!--        <template #default="scope">-->
        <!--            &lt;!&ndash;Edit&ndash;&gt;-->
        <!--            <el-button size="small" @click="getRowInfo(scope.row.id)">-->
        <!--                {{ $t('global.edit') }}-->
        <!--            </el-button>-->
        <!--            &lt;!&ndash;Delete&ndash;&gt;-->
        <!--            <el-popconfirm-->
        <!--                :title="$t('global.questions.deleteConfirm')"-->
        <!--                :cancel-button-text="$t('global.no')"-->
        <!--                :confirm-button-text="$t('global.yes')"-->
        <!--                @confirm="handleDelete(scope.row.id)"-->
        <!--            >-->
        <!--                <template #reference>-->
        <!--                    <el-button-->
        <!--                        size="small"-->
        <!--                        type="danger"-->
        <!--                    >-->
        <!--                        {{ $t('global.delete') }}-->
        <!--                    </el-button>-->
        <!--                </template>-->
        <!--            </el-popconfirm>-->
        <!--        </template>-->
        <!--    </el-table-column>-->
        <!--</el-table>-->

        <!--&lt;!&ndash;Modal&ndash;&gt;-->
        <!--<el-dialog :title="$t('supplier.main.create.title')" v-model="showModal">-->
        <!--    <el-form-->
        <!--        ref="formRef"-->
        <!--        :model="form"-->
        <!--        label-width="auto"-->
        <!--        :rules="rules"-->
        <!--    >-->
        <!--        <el-tabs tab-position="top" class="demo-tabs">-->
        <!--            <el-tab-pane :label="$t('global.generalDetails')">-->
        <!--                &lt;!&ndash;Code&ndash;&gt;-->
        <!--                <el-form-item-->
        <!--                    :label="$t('global.code')"-->
        <!--                    prop="code"-->
        <!--                >-->
        <!--                    <el-input-->
        <!--                        v-model="form.code"-->
        <!--                        type="text"-->
        <!--                        autocomplete="off"-->
        <!--                        :formatter="(value) => value.toUpperCase()"-->
        <!--                        :maxlength="10"-->
        <!--                        show-word-limit-->
        <!--                    />-->
        <!--                </el-form-item>-->

        <!--                &lt;!&ndash;Name&ndash;&gt;-->
        <!--                <el-form-item-->
        <!--                    :label="$t('supplier.main.global.name')"-->
        <!--                    prop="name"-->
        <!--                >-->
        <!--                    <el-input-->
        <!--                        v-model="form.name"-->
        <!--                        type="text"-->
        <!--                        autocomplete="off"-->
        <!--                        :maxlength="100"-->
        <!--                        show-word-limit-->
        <!--                    />-->
        <!--                </el-form-item>-->

        <!--                &lt;!&ndash;Type&ndash;&gt;-->
        <!--                <el-form-item-->
        <!--                    :label="$t('supplier.type.global.supplierType')"-->
        <!--                    prop="supplier_types"-->
        <!--                >-->
        <!--                    <el-select-->
        <!--                        v-model="form.supplier_types"-->
        <!--                        multiple-->
        <!--                        filterable-->
        <!--                        clearable-->
        <!--                        :loading="loading"-->
        <!--                        :no-data-text="$t('global.noData')"-->
        <!--                        :no-match-text="$t('global.noMatches')"-->
        <!--                        :loading-text="$t('global.loading')"-->
        <!--                        :placeholder="$t('global.selectType')"-->
        <!--                    >-->
        <!--                        <el-option-->
        <!--                            v-for="item in types"-->
        <!--                            :key="item.id"-->
        <!--                            :label="item.name"-->
        <!--                            :value="item.id"-->
        <!--                        />-->
        <!--                    </el-select>-->
        <!--                </el-form-item>-->

        <!--                &lt;!&ndash;Tags&ndash;&gt;-->
        <!--                <el-form-item-->
        <!--                    :label="$t('global.tags')"-->
        <!--                    prop="tags"-->
        <!--                >-->
        <!--                    <el-select-->
        <!--                        v-model="form.tags"-->
        <!--                        multiple-->
        <!--                        filterable-->
        <!--                        clearable-->
        <!--                        :loading="loading"-->
        <!--                        :no-data-text="$t('global.noData')"-->
        <!--                        :no-match-text="$t('global.noMatches')"-->
        <!--                        :loading-text="$t('global.loading')"-->
        <!--                        :placeholder="$t('global.selectType')"-->
        <!--                    >-->
        <!--                        <el-option-->
        <!--                            v-for="item in tags"-->
        <!--                            :key="item.id"-->
        <!--                            :label="item.name"-->
        <!--                            :value="item.id"-->
        <!--                        />-->
        <!--                    </el-select>-->
        <!--                </el-form-item>-->

        <!--                &lt;!&ndash;Status&ndash;&gt;-->
        <!--                <el-form-item-->
        <!--                    :label="$t('global.status')"-->
        <!--                    prop="is_active"-->
        <!--                >-->
        <!--                    <el-radio-group v-model="form.is_active">-->
        <!--                        <el-radio-button :label="true">{{ $t('global.active') }}</el-radio-button>-->
        <!--                        <el-radio-button :label="false">{{ $t('global.inactive') }}</el-radio-button>-->
        <!--                    </el-radio-group>-->
        <!--                </el-form-item>-->
        <!--            </el-tab-pane>-->
        <!--            <el-tab-pane>-->
        <!--                <template #label>-->
        <!--                    <font-awesome-icon icon="at" class="mr-1"/>-->
        <!--                    <span v-text="$t('global.contactDetails')"/>-->
        <!--                </template>-->
        <!--                &lt;!&ndash;Button of contact adding&ndash;&gt;-->
        <!--                <div class="flex justify-end mt-1">-->
        <!--                    <el-dropdown type="primary" trigger="click">-->
        <!--                        <span-->
        <!--                            class="flex justify-center cursor-pointer bg-emerald-500 text-white p-2 space-x-2 rounded-lg tems-center">-->
        <!--                            <font-awesome-icon icon="plus"/>-->
        <!--                            <span v-text="$t('supplier.main.create.selectContactType')"></span>-->
        <!--                        </span>-->
        <!--                        <template #dropdown>-->
        <!--                            <el-dropdown-menu>-->
        <!--                                <el-dropdown-item @click="createContactField('phone')">-->
        <!--                                    <font-awesome-icon icon="phone" class="mr-2"/>-->
        <!--                                    <span v-text="$t('global.phoneNumber')"/>-->
        <!--                                </el-dropdown-item>-->
        <!--                                <el-dropdown-item @click="createContactField('email')">-->
        <!--                                    <font-awesome-icon icon="at" class="mr-2"/>-->
        <!--                                    <span v-text="$t('auth.email')"/>-->
        <!--                                </el-dropdown-item>-->
        <!--                                <el-dropdown-item @click="createContactField('address')">-->
        <!--                                    <font-awesome-icon icon="map-location-dot" class="mr-2"/>-->
        <!--                                    <span v-text="$t('global.address')"/>-->
        <!--                                </el-dropdown-item>-->
        <!--                            </el-dropdown-menu>-->
        <!--                        </template>-->
        <!--                    </el-dropdown>-->
        <!--                </div>-->

        <!--                &lt;!&ndash;Contact Details&ndash;&gt;-->
        <!--                <div class="space-y-2 py-4" v-if="Object.keys(form.contact_info).length>0">-->
        <!--                    <template v-for="(field,index) in form.contact_info" :key="field">-->

        <!--                        <div class="flex border rounded-lg space-x-2 p-2 w-full justify-between items-center h-full">-->
        <!--                           <div class="flex flex-col space-y-1 w-full">-->
        <!--                               &lt;!&ndash;Title&ndash;&gt;-->
        <!--                               <el-input v-model="form.contact_info[index].title" :placeholder="$t('global.title')"/>-->

        <!--                               &lt;!&ndash;Value&ndash;&gt;-->
        <!--                               <el-input v-model="form.contact_info[index].value"  :placeholder="$t('global.value')">-->
        <!--                                   <template #prepend>-->
        <!--                                       <font-awesome-icon :icon="-->
        <!--                                    field.type === 'phone' ? 'phone' :-->
        <!--                                    field.type === 'email' ? 'at' :-->
        <!--                                    field.type === 'address' ? 'map-location-dot' : ''-->
        <!--                                "/>-->
        <!--                                   </template>-->
        <!--                               </el-input>-->
        <!--                           </div>-->

        <!--                            &lt;!&ndash;Delete Icon&ndash;&gt;-->
        <!--                            <div class="flex flex-col justify-between space-y-3 h-full ">-->
        <!--                                &lt;!&ndash;Delete&ndash;&gt;-->
        <!--                                <div @click="deleteContactField(index)" class="flex h-6 w-6 items-center justify-center bg-rose-500 text-white rounded-full cursor-pointer active:scale-95">-->
        <!--                                    <font-awesome-icon icon="x"/>-->
        <!--                                </div>-->
        <!--                                &lt;!&ndash;Make Default&ndash;&gt;-->
        <!--                                <el-popconfirm-->
        <!--                                    :title="$t('supplier.main.question.'+ (form.contact_info[index].is_primary ? 'areYouSureRemoveDefaultContact' : 'areYouSureMakeDefaultContact'))"-->
        <!--                                    :confirm-button-text="$t('global.yes')"-->
        <!--                                    :cancel-button-text="$t('global.no')"-->
        <!--                                    @confirm="makeDefaultContactField(index)">-->
        <!--                                    <template #reference>-->
        <!--                                    <font-awesome-icon-->
        <!--                                        icon="circle-check"-->
        <!--                                        class="h-6 w-6 cursor-pointer active:scale-95"-->
        <!--                                        :class="form.contact_info[index].is_primary ? 'text-emerald-500' : 'text-slate-500 hover:text-emerald-600 hover:animate-pulse'"-->
        <!--                                    />-->
        <!--                                    </template>-->
        <!--                                </el-popconfirm>-->
        <!--                            </div>-->
        <!--                        </div>-->

        <!--                    </template>-->
        <!--                </div>-->

        <!--                <el-empty v-else :description="$t('global.noData')"/>-->

        <!--            </el-tab-pane>-->

        <!--        </el-tabs>-->
        <!--        &lt;!&ndash;Action Buttons&ndash;&gt;-->
        <!--        <el-form-item label-width="0">-->
        <!--            <div class="flex justify-between w-full -mb-8">-->
        <!--                <el-button v-if="formType==='create'" @click="form.reset()">-->
        <!--                    {{ $t('global.reset') }}-->
        <!--                </el-button>-->

        <!--                <el-button type="primary" @click="submit(formRef)">-->
        <!--                    {{ $t(formType === 'create' ? 'global.create' : 'global.update') }}-->
        <!--                </el-button>-->
        <!--            </div>-->
        <!--        </el-form-item>-->
        <!--    </el-form>-->
        <!--</el-dialog>-->
    </app-layout>

    <teleport to="body">
        <!--Modal-->
        <Modal
            v-model="showModal"
            :header="tm('title.createPage.title')"
            :subHeader="tm('title.createPage.subTitle')"
            closeable
            close-button
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

                    <!-- Type -->
                    <input-group class="col-span-3" labelFor="type" :label="tm('term.type')">
                        <select-input v-model="form.types" :options="supplierTypes" option-label="name"/>
                    </input-group>

                    <!-- Tags -->
                    <input-group class="col-span-3" labelFor="type" :label="tm('term.tag')">
                        <select-input v-model="form.tags" :options="supplierTags" option-label="name"/>
                    </input-group>

                </FormSection>
            </Form>
            <template #footer>
                <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()" />
                <SimpleButton :label="t('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
            </template>
        </Modal>
    </teleport>
</template>
