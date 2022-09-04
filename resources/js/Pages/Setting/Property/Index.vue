<template>
    <setting-layout
        :title="$t('settingMenu.moduleManagement')"
    >
        <content-card
            :title="$t('settingMenu.moduleManagement')"
            :sub-title="$t('settingMenu.moduleManagementDesc')"
        >
            <inner-table :data="data" :headers="headers" >
                <template #buttons>
                    <simple-button color="green">
                        <font-awesome-icon icon="plus" class="mr-2"/>
                        {{$t('global.addNew')}}
                    </simple-button>
                </template>

                <!--Name-->
                <template #name="{props}">
                    <div class="flex flex-col">
                        <span v-text="props.name"></span>
                        <div class="flex space-x-2 items-center text-xs text-slate-500">
                            <span>Licence: </span>
                            <span class="font-normal italic" v-text="props.licence_key"></span>
                        </div>
                    </div>
                </template>

                <!--Status-->
                <template #status="{props}">
                    <badge :color="props.status ? 'green' : 'red'">
                        {{props.status ? 'Aktif' : 'Pasif'}}
                    </badge>
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
                name: t('settingMenu.module')
            },
            {
                id: 'status',
                name: t('global.status'),
                align: 'center'
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
