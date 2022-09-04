<template>
    <setting-layout
        :title="$t('settingMenu.propertyTypes')"
    >
        <content-card
            :title="$t('settingMenu.propertyTypes')"
            :sub-title="$t('settingMenu.propertyTypesDesc')"
        >
            <inner-table :data="data" :headers="headers" >
                <template #buttons>
                    <simple-button color="green">
                        <font-awesome-icon icon="plus" class="mr-2"/>
                        {{$t('global.addNew')}}
                    </simple-button>
                </template>
            </inner-table>
        </content-card>
    </setting-layout>
</template>

<script>
/*Functions*/
import {ref} from "vue";
import {useI18n} from "vue-i18n";

/*Components*/
import SettingLayout from "@/Layouts/SettingLayout.vue";
import ContentCard from "@/Layouts/ContentCard.vue";
import InnerTable from "@/Components/Table/InnerTable.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import Badge from "@/Components/Badge/Badge.vue";
export default {
    name: "Index",
    components: {Badge, SimpleButton, InnerTable, ContentCard, SettingLayout},
    props: {
        data: {
            type: [Array,Object],
            default: ()=>{
                return []
            }
        }
    },
    setup(){
        /*Multi-lang*/
        const {t} = useI18n();

        /*Content*/
        const headers = ref([
            {
                id: 'name',
                name: t('settingMenu.propertyType')
            }
        ])

        return {
            headers
        }
    }
}
</script>

<style scoped>

</style>
