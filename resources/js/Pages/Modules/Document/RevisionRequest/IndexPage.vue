<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Table from "@/Components/Table/Table.vue"
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useShowDocument} from "../stores/showDocument";
import {useFormat} from "@/Stores/useFormat";
import ShowModal from "@/Pages/Modules/Document/ShowModal.vue";

const showDocument = useShowDocument();
const format = useFormat();

defineProps({
    tableData: {
        type: Object,
        default: () => ({})
    },
})

// Multi-lang
import Translates from "../translates"

const {t, tm} = Translates();

const tableHeaders = [
    {
        id: 'document',
        label: tm('term.documentColumn'),
        value: (value) => `${value.document.code} - ${value.document.name}`,
    },
    {
        id: 'requested_by',
        label: tm('term.requestedByLabel'),
        value: (value) => value.requested_by?.name ?? '',
    },
    {
        id: 'reason',
        label: tm('term.requestReasonLabel'),
    },
    {
        id: 'status',
        label: tm('term.requestStatusLabel'),
    },
    {
        id: 'created_at',
        label: tm('term.createdAt'),
        value: (value) => format.dateTime(value.created_at),
    },
]
</script>

<template>
    <app-layout :title="tm('title.revisionRequestIndexPage.title')" :sub-title="tm('title.revisionRequestIndexPage.subTitle')">
        <template #actionArea>
            <simple-button type="route" :link="route('document.index')" color="blue">
                <font-awesome-icon icon="folder-tree" class="mr-2"/>
                <span v-text="tm('term.document')"/>
            </simple-button>
        </template>

        <Table
            :data="tableData"
            :headers="tableHeaders"
            @view="showDocument.getDocument($event.document.id)"
            show-action
        >
            <!--Status-->
            <template #status="{props}">
                <span v-text="tm(`term.revisionRequestStatus.${props.status}`)"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="{
                          'bg-yellow-100 text-yellow-700': props.status === 'pending',
                          'bg-green-100 text-green-700': props.status === 'accepted',
                          'bg-red-100 text-red-700': props.status === 'rejected',
                          'bg-slate-100 text-slate-700': props.status === 'completed',
                      }"/>
            </template>
        </Table>
    </app-layout>

    <teleport to="body">
        <show-modal/>
    </teleport>
</template>
