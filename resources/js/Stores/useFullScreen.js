import { defineStore } from "pinia";
import {useFullscreen} from '@vueuse/core'
import {ref} from "vue";

export const useFullscreenStore = defineStore("fullscreen", () => {
    const globalContainer = ref();
    const {isFullscreen, toggle} = useFullscreen(globalContainer.value);

    return {
        globalContainer,
        isFullscreen,
        toggle
    }
});
