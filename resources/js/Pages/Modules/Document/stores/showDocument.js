import {ref} from "vue";
import {defineStore} from "pinia";

export const useShowDocument = defineStore('showDocument', ()=>{
    const showDialog = ref(false)
    const document = ref({})

    const getDocument = async (id)=>{
        showDialog.value = true
        const response = await axios.get(route('document.show', id))
        document.value = response.data
    }

    return {
        showDialog,
        document,
        getDocument
    }
})
