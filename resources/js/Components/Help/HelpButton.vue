<script setup>
import {ref} from "vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Modal from "@/Components/Modal/Modal.vue"

defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: "",
    },
})

const show = ref(false)
</script>

<template>
    <simple-button color="neutral" type="button" @click="show = true">
        <font-awesome-icon icon="circle-question" class="mr-2"/>
        <span>Nasıl Çalışır?</span>
    </simple-button>

    <teleport to="body">
        <Modal v-model="show" :header="title" :subHeader="subtitle" closeable close-button max-width="3xl">
            <div class="prose prose-sm dark:prose-invert max-w-none space-y-4">
                <slot/>
            </div>
        </Modal>
    </teleport>
</template>
