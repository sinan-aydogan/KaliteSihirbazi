<template>
    <div class="flex h-8 items-center justify-center gap-1 rounded-lg border border-slate-300 bg-white px-2 py-1 shadow-sm dark:border-slate-600 dark:bg-slate-700">
        <!--Key-->
        <span class="text-sm text-slate-500 dark:text-slate-400 after:content[':']" v-text="filterKey"></span>
        <!--Comparator-->
        <font-awesome-icon v-if="filterComparator" :icon="filterComparator" size="xs" class="mt-0.5"/>
        <!--Value-->
        <span class="max-w-40 truncate text-sm font-semibold" v-text="filterValue"></span>
        <button type="button" @click="$emit('deleteFilter')" class="flex size-5 cursor-pointer items-center justify-center rounded-full text-slate-500 hover:bg-rose-600 hover:text-white dark:text-rose-400">
            <font-awesome-icon icon="x" size="xs"/>
        </button>
    </div>
</template>

<script>
export default {
    name: "FilterBadge",

    emits: ['deleteFilter'],

    props: {
        filterKey: String,
        filterComparator: String,
        filterValue: [String, Number]
    }

}
</script>

<style scoped>

</style>
