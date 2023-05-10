<script setup>
import Modal from "@/Components/Modal/Modal.vue";

//Store
import {useShowDocument} from "./stores/showDocument";
const showDocument = useShowDocument();

// Multi-lang
import Translates from "./translates"
import {computed} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import SimpleButton from "@/Components/Button/SimpleButton.vue";

const {t, tm} = Translates();

const documentIcon = computed(()=>{
    if(showDocument.document?.media){
        switch (showDocument.document?.media[0].mime_type) {
            case 'application/pdf':
                return 'fa-file-pdf'
            case 'application/msword':
                return 'fa-file-word'
            default:
                return 'fa-file'
        }
    }

})
</script>

<template>
    <Modal
        closeable
        close-button
        v-model="showDocument.showDialog"
        :header="showDocument.document?.name"
        :subHeader="showDocument.document.department?.name + ' / ' +showDocument.document.document_type?.name"
    >
        <template #default>
            <!--Creating Info-->
            <div class="flex flex-col gap-2">
                <div class="flex gap-2">
                    <span class="font-bold" v-text="$t('term.createdBy')"></span>
                    <span v-text="showDocument.document?.created_by?.name"></span>
                </div>
                <div class="flex gap-2">
                    <span class="font-bold" v-text="$t('term.createdAt')"></span>
                    <span v-text="showDocument.document?.created_at"></span>
                </div>
            </div>

            <!--Revisions-->
            <div>
                <h5>Revizyonlar</h5>
                <ul>
                    <li v-for="revision in showDocument.document.revisions" v-bind="revision" :key="revision.id">
                        <span v-text="revision.version"></span>
                        <span v-text="revision.created_at"></span>
                    </li>
                </ul>

            </div>
        </template>

        <template #footer>
            <!--Make a revision request-->
            <SimpleButton :label="tm('term.makeRevisionRequest')" color="orange"></SimpleButton>

            <!--Download-->
            <div v-if="showDocument.document.hasOwnProperty('media')">

                <SimpleButton :link="showDocument.document.media[0].original_url" type="external" download>
                    <div class="flex gap-2 items-center">
                        <font-awesome-icon :icon="documentIcon"/>
                        <span v-text="$t('term.download')"></span>
                    </div>
                </SimpleButton>
            </div>
        </template>
    </Modal>
</template>
