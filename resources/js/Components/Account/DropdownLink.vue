<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: String,
    as: String,
});
</script>

<template>
    <div class="contents">
        <button v-if="as == 'button'" type="submit" class="flex min-h-10 w-full items-center px-3 py-2.5 text-left text-sm leading-5 text-slate-700 transition duration-150 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
            <slot />
        </button>

        <a v-else-if="as =='a'" :href="href" class="flex min-h-10 w-full items-center px-3 py-2.5 text-sm leading-5 text-slate-700 transition duration-150 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
            <slot />
        </a>

        <Link v-else :href="href" class="flex min-h-10 w-full items-center px-3 py-2.5 text-sm leading-5 text-slate-700 transition duration-150 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
            <slot />
        </Link>
    </div>
</template>
