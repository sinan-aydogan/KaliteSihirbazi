<template>
    <!--Top Area-->
    <div class="mb-2">
        <!--Titles-->
        <div class="flex flex-col justify-start">
            <!--Title-->
            <h2 v-if="title" class="text-2xl font-semibold">
                {{title}}
            </h2>
            <!--Sub Title-->
            <h5 v-if="subTitle" class="text-sm text-slate-400">
                {{subTitle}}
            </h5>
        </div>
        <!--Action Area-->
        <div>

        </div>
    </div>
    <!--Content-->
    <div class="p-4 bg-white dark:bg-slate-800/50 rounded-lg shadow border dark:border-slate-600">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ContentCard",
    props: {
        title: {
            type: String,
            default: null
        },
        subTitle: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
