<template>
    <app-layout :title="title">
        <div class="flex flex-col md:flex-row md:space-x-12">
            <!--Setting Menu-->
            <div class="w-full mb-4 md:w-52 md:flex-shrink-0">
                <setting-menu/>
            </div>

            <!--Content-->
            <div class="w-full">
                <slot></slot>
            </div>
        </div>
    </app-layout>
</template>

<script>
import SettingMenu from "@/Layouts/SettingMenu";
import AppLayout from "@/Layouts/AppLayout";
export default {
    name: "SettingLayout",
    components: {AppLayout, SettingMenu},
    props: {
        title: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
