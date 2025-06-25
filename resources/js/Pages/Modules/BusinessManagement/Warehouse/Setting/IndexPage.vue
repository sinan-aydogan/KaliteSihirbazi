<script setup>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Menu from "@/Pages/Modules/BusinessManagement/Warehouse/Setting/menu";
import Alert from "@/Components/Alert/Alert.vue";

const {links} = Menu()
</script>

<template>
  <SettingLayout
      title="Depo Ayarları"
      sub-title="Depolar için özellik tanımlayın ve ayarlarını değiştirin"
      :links="links"
  >
    <template #actionArea>
      <simple-button type="route" :link="route('warehouse.index')">
        <font-awesome-icon icon="fa-solid fa-left-long" class="mr-2" />
        <span v-text="tm('action.goBack')" />
      </simple-button>
    </template>

    <Alert>
        Genel ayarlar bölümünde henüz özel ayarlar bulunmamaktadır. Sol menüden diğer ayarları yapabilirsiniz.
    </Alert>
  </SettingLayout>
</template>
