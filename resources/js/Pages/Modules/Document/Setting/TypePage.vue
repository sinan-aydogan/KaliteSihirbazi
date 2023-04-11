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
    id: 'code',
    label: tm('term.typeCode'),
    width: 'w-36'
  },
  {
    id: 'name',
    label: tm('term.typeName')
  }
]
const {links} = Menu()

/*Form*/
const showModal = ref(false);
const formType = ref('create');
const formRef = ref()
const form = useForm({
  id: null,
  code: "",
  name: "",
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

// Rules
const rules = ref({
  code: {
    required: helpers.withMessage(t('message.validation.required'), required),
    maxLength: helpers.withMessage(t('message.validation.maxLength', [10]), maxLength(10))
  },
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
    form.post(route('document-type.store'), {
      onSuccess: () => {
        form.reset();
        v$.value.$reset();
        showModal.value = false;
      }
    })
  } else {
    form.put(route('document-type.update', {id: form.id}), {
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
  axios.get(route("document-type.edit", {id: id})).then(response => {
    form.id = response.data.id;
    form.code = response.data.code;
    form.name = response.data.name;
  })
  showModal.value = true;
  formType.value = "update"
}

/*Delete*/
const handleDelete = (id) => {
  router.delete(route("document-type.destroy", id), {
    preserveState: true,
  });
}
</script>

<template>
  <SettingLayout
      :title="tm('title.typeIndexPage.title')"
      :sub-title="tm('title.typeIndexPage.subTitle')"
      :links="links"
  >
    <template #actionArea>
      <simple-button type="route" :link="route('document.index')">
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
          :header="tm('title.typeCreatePage.title')"
          :subHeader="tm('title.typeCreatePage.subTitle')"
          closeable
          close-button
      >
        <Form full-size>
          <FormSection
              bg-less
          >
            <!-- Code -->
            <input-group class="col-span-2" labelFor="code" :label="tm('term.typeCode')" :errors="v$.code.$errors">
              <text-input v-model="form.code"/>
            </input-group>

            <!-- Space Filler -->
            <div class="col-span-4"></div>

            <!-- Name -->
            <input-group class="col-span-6" labelFor="name" :label="tm('term.typeName')"
                         :errors="v$.name.$errors">
              <text-input v-model="form.name"/>
            </input-group>
          </FormSection>
        </Form>
        <template #footer>
          <SimpleButton :label="tm('action.reset')" color="orange" @click="form.reset()" />
          <SimpleButton :label="tm('action.create')" color="green" @click="handleSubmit" :loading="form.processing"/>
        </template>
      </Modal>
    </teleport>
  </SettingLayout>
</template>
