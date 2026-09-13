<script setup>
import {Link, router} from "@inertiajs/vue3";
import {ref} from "vue";
import SelectInput from "@/Components/Form/SelectInput.vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  routeParam: {
    type: [String, Number],
    required: true,
  },
})

const selectedTab = ref(route().current());
const changePage = () => {
  router.visit(route(selectedTab.value, props.routeParam));
}
</script>

<template>
  <div>
    <!--Tabs-->
    <div class="hidden md:flex select-none pb-3 -mb-3 scrollbar-thin scrollbar-thumb-rose-500">
      <template v-for="i in tabs" :key="i.id">
        <Link :href="route(i.route, routeParam)"
             class="mr-1 flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition"
              :class="{
                'border-rose-500 bg-rose-500 text-white shadow-sm hover:bg-rose-600 dark:border-rose-500 dark:bg-rose-600' : route().current() === i.route,
                'border-slate-300 bg-white text-slate-600 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-rose-500 dark:hover:bg-slate-600' : route().current() !== i.route
              }"
        >
          <span v-text="i.label"></span>
        </Link>
      </template>
    </div>

    <!--Select Navigation-->
    <div class="block md:hidden">
      <SelectInput v-model="selectedTab" @changed="changePage" :options="tabs" option-key="route"></SelectInput>
    </div>
  </div>
</template>
