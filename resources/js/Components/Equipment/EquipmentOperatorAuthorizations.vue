<script setup>
import {ref} from "vue";
import {useForm, router} from "@inertiajs/vue3";
import {useI18n} from "vue-i18n";

import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue";
import FormSection from "@/Components/Form/FormSection.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import TextAreaInput from "@/Components/Form/TextAreaInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import Badge from "@/Components/Badge/Badge.vue";

const {t} = useI18n();

const props = defineProps({
    equipmentType: {type: String, required: true},
    equipmentId: {type: [Number, String], required: true},
    authorizations: {type: Array, default: () => []},
    employees: {type: Array, default: () => []},
});

const showModal = ref(false);

const form = useForm({
    employee_id: null,
    granted_at: new Date().toISOString().slice(0, 10),
    expires_at: '',
    note: '',
});

const openCreate = () => {
    form.reset();
    form.granted_at = new Date().toISOString().slice(0, 10);
    showModal.value = true;
};

const submit = () => {
    form.post(route('equipment-operator-authorization.store', {equipmentType: props.equipmentType, equipmentId: props.equipmentId}), {
        onSuccess: () => {
            form.reset();
            showModal.value = false;
        },
    });
};

const revoke = (authorization) => {
    router.delete(route('equipment-operator-authorization.destroy', {
        equipmentType: props.equipmentType,
        equipmentId: props.equipmentId,
        authorization: authorization.id,
    }), {preserveScroll: true});
};

const isExpired = (authorization) => authorization.expires_at && new Date(authorization.expires_at) < new Date();
</script>

<template>
    <div class="rounded-lg border dark:border-slate-600 p-4">
        <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold flex items-center space-x-2">
                <font-awesome-icon icon="user-shield"/>
                <span>{{ t('equipment.operatorAuthorizations') }}</span>
            </h3>
            <SimpleButton @click="openCreate" color="green">
                <font-awesome-icon icon="plus" class="mr-1"/>
                {{ t('action.addNew') }}
            </SimpleButton>
        </div>

        <ul class="divide-y dark:divide-slate-600">
            <li v-for="authorization in authorizations" :key="authorization.id" class="py-2 flex items-center justify-between">
                <div>
                    <span class="font-medium">{{ authorization.employee?.employeeName }}</span>
                    <span class="text-xs text-slate-500 ml-2">{{ t('equipment.grantedAt') }}: {{ authorization.granted_at }}</span>
                    <Badge v-if="authorization.expires_at" :color="isExpired(authorization) ? 'red' : 'neutral'">
                        {{ t('equipment.expiresAt') }}: {{ authorization.expires_at }}
                    </Badge>
                    <div v-if="authorization.education" class="text-xs text-slate-500">{{ t('equipment.grantedByEducation') }}: {{ authorization.education.name }}</div>
                </div>
                <button @click="revoke(authorization)" class="hover:text-rose-600">
                    <font-awesome-icon icon="trash"/>
                </button>
            </li>
            <li v-if="!authorizations.length" class="py-2 text-sm text-slate-400">{{ t('equipment.noOperators') }}</li>
        </ul>

        <teleport to="body">
            <Modal v-model="showModal" :header="t('equipment.operatorAuthorizations')" closeable close-button>
                <Form full-size>
                    <FormSection bg-less>
                        <input-group class="col-span-12" labelFor="employee_id" :label="t('equipment.employee')">
                            <select-input v-model="form.employee_id" :options="employees" optionLabel="employeeName"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="granted_at" :label="t('equipment.grantedAt')">
                            <text-input input-type="date" v-model="form.granted_at"/>
                        </input-group>
                        <input-group class="col-span-6" labelFor="expires_at" :label="t('equipment.expiresAt')">
                            <text-input input-type="date" v-model="form.expires_at"/>
                        </input-group>
                        <input-group class="col-span-12" labelFor="note" :label="t('equipment.note')">
                            <TextAreaInput v-model="form.note"/>
                        </input-group>
                    </FormSection>
                </Form>
                <template #footer>
                    <SimpleButton :label="t('action.save')" color="green" @click="submit" :loading="form.processing"/>
                </template>
            </Modal>
        </teleport>
    </div>
</template>
