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

const actionColor = (action) => ({
    approved: 'green',
    acknowledged: 'green',
    revision_request_accepted: 'green',
    rejected: 'red',
    revision_request_rejected: 'red',
    cancelled: 'red',
    authority_revoked: 'red',
}[action] ?? 'neutral')

const actionColorClasses = {
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    neutral: 'bg-slate-100 text-slate-700',
}

const tableHeaders = [
    {
        id: 'document',
        label: tm('term.documentColumn'),
        value: (value) => `${value.document.code} - ${value.document.name}`,
    },
    {
        id: 'action_label',
        label: tm('term.actionTypeLabel'),
    },
    {
        id: 'document_version',
        label: tm('term.actionVersionLabel'),
        value: (value) => value.document_version ? t('term.revisionNumber', [value.document_version.version]) : '-',
    },
    {
        id: 'user',
        label: tm('term.performedByLabel'),
        value: (value) => value.user?.name ?? '-',
    },
    {
        id: 'created_at',
        label: tm('term.createdAt'),
        value: (value) => format.dateTime(value.created_at),
    },
]
</script>

<template>
    <app-layout :title="tm('title.actionIndexPage.title')" :sub-title="tm('title.actionIndexPage.subTitle')">
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
            <!--Action Type-->
            <template #action_label="{props}">
                <span v-text="props.action_label"
                      class="px-2 py-0.5 rounded text-xs"
                      :class="actionColorClasses[actionColor(props.action)]"/>
            </template>
        </Table>
    </app-layout>

    <teleport to="body">
        <show-modal/>
    </teleport>
</template>
