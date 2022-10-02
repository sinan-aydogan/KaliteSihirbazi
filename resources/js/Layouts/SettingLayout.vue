<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import SettingMenu from "@/Layouts/SettingMenu.vue";
defineProps({
  title: {
    type: String,
    default: null
  },
  links: {
    type: Array,
    default: ()=>([])
  }
})
</script>
<template>
    <app-layout :title="title">
      <template #actionArea>
        <slot name="actionArea"></slot>
      </template>
        <div class="flex flex-col md:flex-row md:space-x-12">
            <!--Setting Menu-->
            <div class="w-full mb-4 md:w-52 md:flex-shrink-0">
                <setting-menu :links="links"/>
            </div>

            <!--Content-->
            <div class="w-full">
                <slot></slot>
            </div>
        </div>
    </app-layout>
</template>
