<script setup>
import {computed, ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";
import {useI18n} from "vue-i18n";
import {helpers, maxLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

/*Layouts*/
import SettingLayout from "@/Layouts/SettingLayout.vue";
import Menu from "@/Sources/settingMenu";

/*Components*/
import InnerTable from "@/Components/Table/InnerTable.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Badge from "@/Components/Badge/Badge.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";

const {t} = useI18n();
const {links} = Menu();

const props = defineProps({
    roles: {type: Array, default: () => []},
    permissionModules: {type: Object, default: () => ({})},
});

const actions = ['view', 'create', 'update', 'delete'];
const moduleEntries = computed(() => Object.entries(props.permissionModules));

const headers = ref([
    {id: 'name', name: t('settingMenu.role')},
    {id: 'users_count', name: t('settingMenu.users'), align: 'center'},
    {id: 'permissions', name: t('settingMenu.permissions'), align: 'center'},
    {id: 'actions', name: '', align: 'right'},
]);

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const form = useForm({
    id: null,
    name: '',
    permissions: [],
});

const rules = ref({
    name: {
        required: helpers.withMessage(t('message.validation.required'), required),
        maxLength: helpers.withMessage(t('message.validation.maxLength', [100]), maxLength(100)),
    },
    permissions: {},
});

const v$ = useVuelidate(rules, form);

const isChecked = (moduleKey, action) => form.permissions.includes(`${moduleKey}.${action}`);

const togglePermission = (moduleKey, action) => {
    const name = `${moduleKey}.${action}`;
    form.permissions = isChecked(moduleKey, action)
        ? form.permissions.filter((p) => p !== name)
        : [...form.permissions, name];
};

const toggleModuleRow = (moduleKey) => {
    const names = actions.map((action) => `${moduleKey}.${action}`);
    const allChecked = names.every((name) => form.permissions.includes(name));
    form.permissions = allChecked
        ? form.permissions.filter((p) => !names.includes(p))
        : [...new Set([...form.permissions, ...names])];
};

const openCreate = () => {
    form.reset();
    v$.value.$reset();
    formType.value = 'create';
    showModal.value = true;
};

const getRowInfo = (row) => {
    form.id = row.id;
    form.name = row.name;
    form.permissions = [...row.permissions];
    formType.value = 'update';
    showModal.value = true;
};

const handleSubmit = async () => {
    const isValidated = await v$.value.$validate();
    if (!isValidated) return;

    if (formType.value === 'create') {
        form.post(route('role.store'), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            },
        });
    } else {
        form.put(route('role.update', {role: form.id}), {
            onSuccess: () => {
                form.reset();
                v$.value.$reset();
                showModal.value = false;
            },
        });
    }
};

const handleDelete = (id) => {
    router.delete(route('role.destroy', id), {preserveState: true});
};
</script>

<template>
    <setting-layout :title="t('settingMenu.roles')" :sub-title="t('settingMenu.rolesDesc')" :links="links">
        <InnerTable :data="roles" :headers="headers" :selectable="false">
            <template #buttons>
                <simple-button @click="openCreate" color="green">
                    <font-awesome-icon icon="plus" class="mr-2"/>
                    {{ t('action.addNew') }}
                </simple-button>
            </template>

            <!--Name-->
            <template #name="{props: row}">
                <div class="flex items-center space-x-2">
                    <span v-text="row.name"></span>
                    <Badge v-if="row.is_protected" color="orange">{{ t('settingMenu.protectedRole') }}</Badge>
                </div>
            </template>

            <!--Permission Count-->
            <template #permissions="{props: row}">
                <span v-text="row.permissions.length"></span>
            </template>

            <!--Actions-->
            <template #actions="{props: row}">
                <div class="flex justify-end items-center space-x-2">
                    <button v-if="!row.is_protected" @click="getRowInfo(row)" class="hover:text-sky-600">
                        <font-awesome-icon icon="edit"/>
                    </button>
                    <button v-if="!row.is_protected" @click="handleDelete(row.id)" class="hover:text-rose-600">
                        <font-awesome-icon icon="trash"/>
                    </button>
                </div>
            </template>
        </InnerTable>

        <teleport to="body">
            <Modal v-model="showModal" :header="t('settingMenu.roles')" closeable close-button size="4xl">
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-12" labelFor="name" :label="t('settingMenu.role')" :errors="v$.name.$errors">
                            <text-input v-model="form.name"/>
                        </input-group>

                        <div class="col-span-12">
                            <label class="mb-2 block text-sm font-medium">{{ t('settingMenu.permissions') }}</label>
                            <div class="max-h-[24rem] overflow-y-auto border dark:border-slate-600 rounded-md">
                                <table class="min-w-full text-sm">
                                    <thead>
                                    <tr class="border-b dark:border-slate-600">
                                        <th class="text-left py-2 px-3"></th>
                                        <th v-for="action in actions" :key="action" class="text-center py-2 px-3">
                                            {{ t(`action.${action}`) }}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="[moduleKey, label] in moduleEntries" :key="moduleKey" class="border-b last:border-b-0 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                                        <td class="py-1.5 px-3 cursor-pointer select-none" @click="toggleModuleRow(moduleKey)">{{ label }}</td>
                                        <td v-for="action in actions" :key="action" class="text-center py-1.5 px-3">
                                            <input
                                                type="checkbox"
                                                class="w-4 h-4 rounded"
                                                :checked="isChecked(moduleKey, action)"
                                                @change="togglePermission(moduleKey, action)"
                                            />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()"/>
                    <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </setting-layout>
</template>
