<script setup>
import {ref} from "vue"
import {useForm, router} from "@inertiajs/vue3";
import SettingLayout from "@/Layouts/SettingLayout.vue";
import Menu from "./menu";

/*Components*/
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Table from "@/Components/Table/Table.vue";
import Modal from "@/Components/Modal/Modal.vue";
import Form from "@/Components/Form/Form.vue"
import FormSection from "@/Components/Form/FormSection.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import TextInput from "@/Components/Form/TextInput.vue"

// Multi-lang
import Translates from "../translates"

/*Validation*/
import {helpers, maxLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const {t, tm} = Translates();

defineProps({
  tableData: Object
})
const headers = [
  {
    id: 'name',
    label: tm('term.statusName')
  }
]
const {links} = Menu()

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const formRef = ref()
const form = useForm({
  id: null,
  name: "",
})

// Rules
const rules = ref({
  name: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [255]), maxLength(255))
  },
})

const v$ = useVuelidate(rules, form)

/*Create*/
const handleSubmit = async () => {
  const isValidated = await v$.value.$validate()
  if (!isValidated) return

  if (formType.value === 'create') {
    form.post(route('vehicle-status.store'), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  } else {
    form.put(route('vehicle-status.update', {id: form.id}), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  }
}

/*Update*/
const getRowInfo = (id) => {
  axios.get(route("vehicle-status.edit", {id: id})).then(response => {
    form.id = response.data.id;
    form.name = response.data.name;
  })
  showModal.value = true;
  formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
  router.delete(route("vehicle-status.destroy", id), {
    preserveState: true,
  });
}
</script>

<template>
  <SettingLayout
      :title="tm('title.statusIndexPage.title')"
      :sub-title="tm('title.statusIndexPage.subTitle')"
      :links="links"
  >
    <template #actionArea>
      <simple-button type="route" :link="route('vehicle.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
        <span v-text="tm('action.goBack')" />
      </simple-button>
    </template>

    <!--Table-->
    <Table
        :data="tableData"
        :headers="headers"
        @edit="getRowInfo($event.id)"
        @delete="handleDelete($event.id)"
        edit-action
        delete-action
    >
      <template #actionArea>
        <!--Add New Button-->
        <simple-button @click="showModal = true; formType = 'create'" color="green">
          <font-awesome-icon icon="plus" class="mr-2"/>
          <span v-text="tm('action.addNew')"/>
        </simple-button>
      </template>
    </Table>

    <teleport to="body">
      <!--Modal-->
      <Modal
          v-model="showModal"
          :header="tm('title.statusCreatePage.title')"
          :subHeader="tm('title.statusCreatePage.subTitle')"
          closeable
          close-button
      >
        <Form full-size>
          <FormSection
              bg-less
          >
            <!-- Name -->
            <input-group class="col-span-6" labelFor="name" :label="tm('term.statusName')"
                         :errors="v$.name.$errors">
              <text-input v-model="form.name"/>
            </input-group>
          </FormSection>
        </Form>
        <template #footer>
          <SimpleButton :label="t('action.reset')" color="orange" @click="form.reset()" />
          <SimpleButton :label="t(`action.${formType === 'create' ? 'create' : 'update'}`)" color="green" @click="handleSubmit" :loading="form.processing"/>
        </template>
      </Modal>
    </teleport>
  </SettingLayout>
</template>
