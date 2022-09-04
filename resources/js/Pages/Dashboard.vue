<script setup>
import { reactive } from "vue"
import AppLayout from '@/Layouts/AppLayout.vue';
import Grid from "@/Layouts/Grid.vue";
import DataWidget from "@/Layouts/DataWidget.vue";

/*Sample Data*/
const sampleData = reactive({
    selected: 'month',
    calibrationOptions: [
        {
            id: 'month',
            label: 'Month',
            callBack: (toggle) => {
                sampleData.selected = 'month'
                toggle()
            }
        },
        {
            id: 'quarter',
            label: 'Quarter',
            callBack: (toggle) => {
                sampleData.selected = 'quarter'
                toggle()
            }
        },
        {
            id: 'year',
            label: 'Year',
            callBack: (toggle) => {
                sampleData.selected = 'year'
                toggle()
            }
        }
    ],
    subTitle: {
        month: {
            subTitle: 'Last Month',
            value: 3,
            diff: '5%',
            diffColor: 'orange'
        },
        quarter: {
            subTitle: 'Last Quarter',
            value: 54,
            diff: '12%',
            diffColor: 'red'
        },
        year: {
            subTitle: 'Last Year',
            value: 136,
            diff: '8%',
            diffColor: 'green'
        },
    }
})
</script>

<template>
    <AppLayout title="Dashboard">
        <grid>
            <data-widget indicator-color="red" title="DÖF/Capa" sub-title="Açık/Open" value="14"
                bg-icon="highlighter" />
            <data-widget indicator-color="green" title="Kaizens" sub-title="Mart/March" value="8" bg-icon="seedling" />
            <data-widget indicator-color="orange" title="Pending Works" sub-title="Assigned" value="2"
                bg-icon="list-check" />
            <data-widget indicator-color="neutral" title="Over Budget"
                :diff="sampleData.subTitle[sampleData.selected].diff"
                :diffColor="sampleData.subTitle[sampleData.selected].diffColor"
                :sub-title="sampleData.subTitle[sampleData.selected].subTitle"
                :value="sampleData.subTitle[sampleData.selected].value" :options="sampleData.calibrationOptions"
                limit="Max. Allowed to 15%" bg-icon="money-bill">
            </data-widget>
        </grid>
    </AppLayout>
</template>
