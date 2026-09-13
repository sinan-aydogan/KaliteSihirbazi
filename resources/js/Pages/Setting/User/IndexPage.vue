<script setup>
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import {useI18n} from "vue-i18n";

/*Layouts*/
import SettingLayout from "@/Layouts/SettingLayout.vue";
import Menu from "@/Sources/settingMenu";

/*Components*/
import InnerTable from "@/Components/Table/InnerTable.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Badge from "@/Components/Badge/Badge.vue";
import Modal from "@/Components/Modal/Modal.vue";
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";

const {t} = useI18n();
const {links} = Menu();

const props = defineProps({
    users: {type: Array, default: () => []},
    roles: {type: Array, default: () => []},
});

const roleOptions = props.roles.map((name) => ({name}));

const headers = ref([
    {id: 'name', name: t('auth.name')},
    {id: 'email', name: t('auth.email')},
    {id: 'roles', name: t('settingMenu.roles')},
    {id: 'actions', name: '', align: 'right'},
]);

const showModal = ref(false);
const form = useForm({
    id: null,
    roles: [],
});

const openManageRoles = (row) => {
    form.id = row.id;
    form.roles = [...row.roles];
    showModal.value = true;
};

const handleSubmit = () => {
    form.put(route('user-management.update-roles', {user: form.id}), {
        onSuccess: () => {
            showModal.value = false;
        },
    });
};
</script>

<template>
    <setting-layout :title="t('settingMenu.users')" :sub-title="t('settingMenu.usersDesc')" :links="links">
        <InnerTable :data="users" :headers="headers" :selectable="false">
            <!--Roles-->
            <template #roles="{props: row}">
                <div class="flex flex-wrap gap-1">
                    <Badge v-for="role in row.roles" :key="role" color="blue">{{ role }}</Badge>
                    <span v-if="!row.roles.length" class="text-slate-400 text-sm">{{ t('settingMenu.noRole') }}</span>
                </div>
            </template>

            <!--Actions-->
            <template #actions="{props: row}">
                <div class="flex justify-end">
                    <button @click="openManageRoles(row)" class="hover:text-sky-600">
                        <font-awesome-icon icon="user-shield" class="mr-1"/>
                        {{ t('settingMenu.manageRoles') }}
                    </button>
                </div>
            </template>
        </InnerTable>

        <teleport to="body">
            <Modal v-model="showModal" :header="t('settingMenu.manageRoles')" closeable close-button>
                <InputGroup :label="t('settingMenu.roles')" label-for="roles">
                    <MultiSelectInput v-model="form.roles" :options="roleOptions" optionKey="name" optionLabel="name"/>
                </InputGroup>
                <template #footer>
                    <SimpleButton :label="t('action.save')" color="green" @click="handleSubmit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </setting-layout>
</template>
