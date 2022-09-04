<template>
    <app-layout title="Çok Yakında">
        <div class="flex flex-col space-y-8 w-full mt-4 bg-white rounded-lg justify-center items-center p-10">
            <img class="w-60" src="https://c.tenor.com/y5nfm0aMuQAAAAAd/working-hard.gif"/>
            <p class="text-5xl text-sky-700 text-center">
                Endişe yok ! Çok yakında bu modül de yayında olacak
            </p>
            <p class="text-2xl text-sky-700 text-center">
                Don't worry !, this module will be active soon
            </p>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
export default {
    name: "ComingSoon",
    components: {Image, AppLayout}
}
</script>

<style scoped>

</style>
