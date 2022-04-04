<template>
    <div class="flex h-8 items-center justify-center border rounded-lg px-2 py-1 space-x-1 bg-white">
        <!--Key-->
        <span class="text-sm text-slate-500 after:content[':']" v-text="filterKey"></span>
        <!--Comparator-->
        <font-awesome-icon v-if="filterComparator" :icon="filterComparator" size="xs" class="mt-0.5"/>
        <!--Value-->
        <span class="text-sm font-semibold after:content[':']" v-text="filterValue"></span>
        <div @click="$emit('deleteFilter', filterIndex)" class="flex items-center justify-center mt-0.5 w-4 h-4 text-slate-600 hover:bg-rose-600 rounded-full hover:text-slate-50 cursor-pointer">
            <font-awesome-icon icon="x" size="xs"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterBadge",

    props: {
        filterIndex: [Number, String],
        filterKey: String,
        filterComparator: String,
        filterValue: String
    }

}
</script>

<style scoped>

</style>
