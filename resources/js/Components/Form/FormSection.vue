<script setup>
</script>

    <template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1 flex justify-between">
            <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium text-slate-700 dark:text-slate-100">
                    <slot name="title" />
                </h3>

                <p class="mt-1 text-sm text-slate-500">
                    <slot name="description" />
                </p>
            </div>

            <div class="px-4 sm:px-0">
                <slot name="aside" />
            </div>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <div
                class="bg-white dark:bg-slate-700 px-4 py-5 sm:p-6 dark:bg-slate-600 dark:text-slate-100 text-slate-700 dark:text-slate-100 shadow sm:rounded-lg">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>
