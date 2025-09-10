<template>
    <div>
        <!--Preview-->
        <div
            v-if="files.length>0 && preview && !multiple"
            class="flex justify-center items-center my-2 overflow-hidden rounded-md"
        >
            <img v-if="files[0].type.split('/')[0] === 'image'" class="max-h-36 w-auto p-1 border rounded-md"
                 :src="urlGenerator(files[0])"/>
        </div>
        <!--Input-->
        <div class="flex h-10 w-full sm:text-sm dark:bg-slate-900/30 border items-center border-slate-300 dark:border-slate-600 bg-white overflow-hidden rounded-md">
            <input ref="inputRef" class="hidden" type="file" :multiple="multiple" :accept="accept" @change="updateFile"/>
            <!--Single File Title & Size-->
            <div v-if="!multiple && files.length>0"
                 class="flex flex-wrap flex-grow overflow-hidden p-2 justify-between items-center">
                <!--File Title-->
                <div class="flex overflow-hidden whitespace-nowrap">
                    {{ files[0].name }}
                </div>
                <!--File Size-->
                <div class="flex overflow-hidden whitespace-nowrap">
                    Size: {{ sizeCalculator(files[0].size) }}
                </div>
            </div>
            <!--Multiple File-->
            <div v-else class="flex px-4 overflow-hidden whitespace-nowrap w-full">
                {{ files.length === 0 ? $t('action.chooseFile') : $t('action.chooseFile', { count: files.length }) }}
            </div>
            <!--Buttons-->
            <div class="flex flex-grow-0 flex-shrink-0 items-center space-x-2 bg-white hover:bg-gray-300 dark:bg-gray-900 hover:dark:bg-gray-800">
                <button
                    v-if="files[0]"
                    class="input-clear-button"
                    type="button"
                    @click="clearFile"
                >
                  <svg class="input-clear-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button
                    class="form-control cursor-pointer min-h-10 px-4 border-l border-slate-200 dark:border-slate-600 outline-none focus:outline-none whitespace-nowrap"
                    type="button"
                    @click="inputRef.click()"
                >
                    {{  $t('action.browse') }}
                </button>
            </div>
        </div>
        <!--Multiple File Area-->
        <transition name="fade">
            <div v-if="files.length>0 && multiple" class="flex flex-col border w-full p-4 mt-2 rounded-md">
                <transition-group name="fade" tag="div">
                <div v-for="(item,index) in files"
                    class="flex items-center justify-between border p-2 w-full my-1 rounded-md"
                    :key="item.index">
                        <!--Left Area-->
                        <div class="flex items-center gap-4 overflow-hidden min-w-0 flex-1 pr-4">

                            <!--File Preview-->
                            <div v-if="preview">
                                <img v-if="item.type.split('/')[0] === 'image'" class="h-14 w-14 p-1 border object-cover rounded-md" :src="urlGenerator(item)"/>
                                <font-awesome-icon v-else-if="item.type.split('/')[0] === 'video'" icon="fa-solid fa-video" style="font-size: 1.5rem;" class="p-3 border text-gray-600 rounded-md"/>
                                <font-awesome-icon v-else-if="item.type.split('/')[0] === 'audio'" icon="fa-solid fa-music" style="font-size: 1.5rem;" class="p-3 border text-gray-600 rounded-md"/>
                                <div v-else class="relative flex justify-center items-center w-14 h-14 border text-gray-600 rounded-md">
                                    <font-awesome-icon icon="fa-solid fa-file" class="p-3 text-gray-600" style="font-size: 2.5rem;"/>
                                    <span class="absolute flex pt-0.5 w-10 rounded-md items-center justify-center bg-gray-600 text-white top-5 text-sm font-semibold overflow-hidden">
                                       {{  upperCase(item.name)}}
                                   </span>
                                </div>
                            </div>
                            <!--File Name-->
                            <span class="font-semibold truncate">
                                {{ item.name }}
                            </span>
                        </div>
                        <!--Right Area-->
                        <div class="flex justify-between items-center gap-4">
                            <!--File Size-->
                            <span>
                                <badge>
                                    {{ sizeCalculator(item.size) }}
                                </badge>
                            </span>
                            <!--Delete Button-->
                            <simple-button type="button" color="red" @click.native="deleteFile(index)">
                                <font-awesome-icon icon="trash-can"/>
                            </simple-button>
                        </div>
                    </div>
                </transition-group>
            </div>
        </transition>

    </div>
</template>

<script setup>
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Badge from "@/Components/Badge/Badge.vue";
import { ref } from "vue";

defineProps({
    value: {},
    accept: {
        type: String,
        default: ''
    },
    multiple: {
        type: Boolean,
        default: false
    },
    browseLabel: {
        type: String,
    },
    preview: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['change']);

const files = ref([]);
const inputRef = ref(null);

const clearFile = () => {
    inputRef.value = null
    files.value = []
    emit('change', null)
}

const deleteFile = (index) => {
    files.value.splice(index, 1)
    inputRef.value.files = null
    emit('change', files.value)
}

const updateFile = () => {
    let x = 0;
    for (x = 0; x < inputRef.value.files.length; x++) {
        inputRef.value.files[x].index = x
        files.value.push(inputRef.value.files[x])
    }
    emit('change', files.value)
}

const sizeCalculator = (value) => {
    let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (value === 0) return "0 Byte";
    let i = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
    return Math.round(value / Math.pow(1024, i), 2) + " " + sizes[i];
}

const urlGenerator = (value) => {
    console.log(value)
    return URL.createObjectURL(value)
}

const upperCase = (value) => {
    return value.toUpperCase().split('.')[value.toUpperCase().split('.').length-1]
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all .4s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
    max-height: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: translateX(30px);
    max-height: 100%;
}
</style>
