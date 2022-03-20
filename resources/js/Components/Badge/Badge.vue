<template>
    <span
        class="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
        :class="[
            colors[color]
        ]"
    >
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: "Badge",
    props: {
        color: {
            type: String,
            default: 'blue'
        }
    },

    setup() {
        const colors = {
            blue: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
            red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800',
            green: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800',
            orange: 'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-800',
            neutral: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-200 dark:text-neutral-800',
            pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-800',
            violet: 'bg-violet-100 text-violet-800 dark:bg-violet-200 dark:text-violet-800',
        }

        return {
            colors
        }
    }
}
</script>

<style scoped>

</style>
