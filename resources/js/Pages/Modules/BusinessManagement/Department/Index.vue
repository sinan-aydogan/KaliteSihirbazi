<template>
    <app-layout title="Departmanlar" sub-title="İşletmenizdeki depatmanları buradan yönetebilirsiniz.">
        <template #actionArea>
            <simple-button color="neutral">
                <font-awesome-icon icon="trash-can"/>
                <span class="hidden md:block">Silinmişler</span>
            </simple-button>
            <simple-button color="green">
                <font-awesome-icon icon="plus"/>
                <span class="hidden md:block">Yeni Ekle</span>
            </simple-button>
        </template>

            <Table :data="data" :headers="headers" unique-id-key="id"></Table>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Table from "@/Components/Table/Table";
import SimpleButton from "@/Components/Button/SimpleButton";
export default {
    name: "Index",

    components: {SimpleButton, Table, AppLayout},

    props: {
        data: {
            type: Object,
            default: {}
        }
    },

    setup(){
        const headers = [
            {
                id: 'code',
                key: 'code',
                label: 'Kod',
                filterType: 'text'
            },
            {
                id: 'name',
                key: 'name',
                label: 'Departmant',
                filterType: 'text'
            },
            {
                id: 'user_name',
                key: 'user_name',
                label: 'Yönetici',
                filterType: 'select',
                align: 'center'
            },
            {
                id: 'department_name',
                key: 'department_name',
                label: 'Ana Departman',
                filterType: 'select',
                align: 'center'
            }
        ]

        return {
            headers
        }
    }
}
</script>

<style scoped>

</style>
