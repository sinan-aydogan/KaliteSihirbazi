<script setup>
import EmptySource from '@/Components/Content/EmptySource.vue';
import ShowPage from '@/Pages/Modules/HumanResources/Employee/ShowPage.vue';

defineProps({ employee: Object, educations: Array });
</script>

<template>
  <ShowPage :employee="employee">
    <EmptySource
      v-if="educations.length === 0"
      message="Bu personel için henüz eğitim katılımı bulunmuyor."
      class="mt-6"
    />
    <div v-else class="mt-6 grid gap-3">
      <article
        v-for="participation in educations"
        :key="participation.id"
        class="rounded-xl border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-500 dark:bg-slate-700"
      >
        <h3 class="font-semibold">{{ participation.education?.name }}</h3>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
          Puan: {{ participation.score ?? '—' }}
        </p>
      </article>
    </div>
  </ShowPage>
</template>
