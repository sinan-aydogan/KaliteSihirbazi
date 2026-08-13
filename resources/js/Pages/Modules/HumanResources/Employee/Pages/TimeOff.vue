<script setup>
import EmptySource from '@/Components/Content/EmptySource.vue';
import ShowPage from '@/Pages/Modules/HumanResources/Employee/ShowPage.vue';

defineProps({ employee: Object, timeOffs: Array });
</script>

<template>
  <ShowPage :employee="employee">
    <EmptySource message="Bu personel için henüz izin kaydı bulunmuyor." class="mt-6" />
  </ShowPage>
</template>
