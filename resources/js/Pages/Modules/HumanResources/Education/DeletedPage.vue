<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router} from "@inertiajs/vue3";

// Components
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"

// Props
const props = defineProps({
    tableData: {
        type: Object,
        default: {}
    }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

/*Table*/
const tableHeaders = [
    {
        id: 'name',
        label: tm('term.name')
    },
    {
        id: 'education_plan.name',
        label: tm('term.educationPlan'),
        value: (row) => row?.education_plan?.name || ''
    },
    {
        id: 'planned_date',
        label: tm('term.plannedDate'),
        value: (row) => !!row?.planned_date ? new Date(row.planned_date).toLocaleDateString('tr-TR') : ''
    },
    {
        id: 'duration',
        label: tm('term.duration'),
        value: (row) => row?.duration ? `${row.duration} dk` : ''
    },
    {
        id: 'status',
        label: tm('term.status'),
        value: (row) => {
            if (row?.is_cancelled) return tm('term.cancelled');
            if (row?.is_completed) return tm('term.completed');
            return tm('term.planned');
        }
    },
    {
        id: 'deleted_at',
        label: t('term.deletedAt'),
        value: (row) => !!row?.deleted_at ? new Date(row.deleted_at).toLocaleDateString('tr-TR') : ''
    }
]

/*Restore*/
const handleRestore = (id) => {
    router.post(route("education.restore", id), {}, {
        preserveState: true,
    });
}

/*Permanent Delete*/
const handlePermanentDelete = (id) => {
    router.delete(route("education.permanent-destroy", id), {
        preserveState: true,
    });
}

</script>

<template>
    <app-layout :title="tm('title.deletedPage.title')" :sub-title="tm('title.deletedPage.subTitle')">
        <template #actionArea>
            <!--Return to List-->
            <simple-button type="route" :link="route('education.index')" color="gray">
                <font-awesome-icon icon="arrow-left" class="mr-2"/>
                <span v-text="tm('action.returnToList')"/>
            </simple-button>
        </template>
        
        <Table
            :data="tableData"
            :headers="tableHeaders"
            @restore="handleRestore($event.id)"
            @permanent-delete="handlePermanentDelete($event.id)"
            restore-action
            permanent-delete-action
        />
    </app-layout>
</template> 