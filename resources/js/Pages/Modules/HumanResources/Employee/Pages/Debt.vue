<script setup>
import EmptySource from '@/Components/Content/EmptySource.vue';
import ShowPage from '@/Pages/Modules/HumanResources/Employee/ShowPage.vue';

defineProps({ employee: Object, debts: Array });
</script>

<template>
  <ShowPage :employee="employee">
    <EmptySource message="Zimmetli malzeme modülü henüz kullanıma açılmadı." class="mt-6" />
  </ShowPage>
</template>
