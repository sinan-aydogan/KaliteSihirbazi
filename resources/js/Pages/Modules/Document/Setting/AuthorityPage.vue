<script setup>
import {computed, ref} from "vue"
import {useForm, router} from "@inertiajs/vue3";
import SettingLayout from "@/Layouts/SettingLayout.vue";
import Menu from "./menu";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue";
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue"
import OptionInput from "@/Components/Form/OptionInput.vue"

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates();
const {links} = Menu()

const props = defineProps({
    documentType: Object,
    authorities: {
        type: Array,
        default: () => []
    },
    departments: {
        type: Array,
        default: () => []
    },
    users: {
        type: Array,
        default: () => []
    },
})

const roleOptions = computed(() => [
    {id: 'author', label: tm('term.role.author')},
    {id: 'reviewer', label: tm('term.role.reviewer')},
    {id: 'approver', label: tm('term.role.approver')},
    {id: 'viewer', label: tm('term.role.viewer')},
])

const roleLabel = (role) => roleOptions.value.find(o => o.id === role)?.label ?? role

const headers = [
    {id: 'user', label: tm('term.authorityUser'), value: (row) => row.user?.name},
    {id: 'role', label: tm('term.authorityRole'), value: (row) => roleLabel(row.role)},
    {id: 'source', label: tm('term.authoritySource'), value: (row) => row.source_department?.name ?? tm('term.authorityDirect')},
    {id: 'granted_at', label: tm('term.authorityGrantedAt'), value: (row) => new Date(row.created_at).toLocaleDateString('tr-TR')},
]

/*Grant form*/
const target = ref('user')
const form = useForm({
    role: 'viewer',
    user_ids: [],
    department_id: null,
})

const handleGrant = () => {
    form
        .transform((data) => target.value === 'user'
            ? {role: data.role, user_ids: data.user_ids}
            : {role: data.role, department_id: data.department_id})
        .post(route('document-type-authority.store', props.documentType.id), {
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
                target.value = 'user';
            }
        })
}

const handleRevoke = (row) => {
    router.delete(route('document-type-authority.destroy', row.id), {preserveScroll: true})
}
</script>

<template>
    <SettingLayout
        :title="tm('title.authorityPage.title') + ' — ' + documentType.name"
        :sub-title="tm('title.authorityPage.subTitle')"
        :links="links"
    >
        <template #actionArea>
            <simple-button type="route" :link="route('document-type.index')">
                <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2"/>
                <span v-text="tm('action.goBack')"/>
            </simple-button>
        </template>

        <!--Grant Form-->
        <Form>
            <FormSection grid>
                <input-group class="col-span-12" :label="tm('term.grantTarget')">
                    <div class="flex gap-6">
                        <option-input v-model="target" value="user" :label="tm('term.grantTargetUser')"/>
                        <option-input v-model="target" value="department" :label="tm('term.grantTargetDepartment')"/>
                    </div>
                </input-group>

                <input-group class="col-span-4" labelFor="role" :label="tm('term.authorityRole')">
                    <select-input v-model="form.role" :options="roleOptions"/>
                </input-group>

                <input-group v-if="target === 'user'" class="col-span-6" labelFor="user_ids" :label="tm('term.authorityUser')">
                    <multi-select-input v-model="form.user_ids" :options="users" optionLabel="name"/>
                </input-group>
                <input-group v-else class="col-span-6" labelFor="department_id" :label="tm('term.department')">
                    <select-input v-model="form.department_id" :options="departments" optionLabel="name"/>
                </input-group>

                <div class="col-span-2 flex items-end">
                    <simple-button color="green" full-size @click="handleGrant" :loading="form.processing">
                        <span v-text="tm('action.grant')"/>
                    </simple-button>
                </div>
            </FormSection>
        </Form>

        <!--Current Authorities-->
        <Table
            :data="authorities"
            :headers="headers"
            :custom-actions="[{
                action: handleRevoke,
                color: 'red',
                label: tm('action.revoke'),
            }]"
        />
    </SettingLayout>
</template>
