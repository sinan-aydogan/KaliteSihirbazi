<script setup>
import Modal from "@/Components/Modal/Modal.vue";
import TextAreaInput from "@/Components/Form/TextAreaInput.vue";
import FileInput from "@/Components/Form/FileInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";
import {router} from "@inertiajs/vue3";
import Alert from "@/Components/Alert/Alert.vue";
import Badge from "@/Components/Badge/Badge.vue";
import List from "@/Components/List/List.vue";

//Store
import {useShowDocument} from "./stores/showDocument";
const showDocument = useShowDocument();

// Multi-lang
import Translates from "./translates"
import {computed, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import {useFormat} from "@/Stores/useFormat.js";

const {t, tm} = Translates();
const format = useFormat();

const permissions = computed(() => showDocument.document?.permissions ?? {});
const latestVersion = computed(() => showDocument.document?.latest_version);
const isCancelled = computed(() => !!showDocument.document?.cancelled_at);

const refresh = () => showDocument.getDocument(showDocument.document.id);

const submitForReview = () => {
    router.post(route('document-version.submit', latestVersion.value.id), {}, {onSuccess: refresh});
}

const approveReview = () => {
    router.post(route('document-version.review', latestVersion.value.id), {approved: true}, {onSuccess: refresh});
}

const approveAndPublish = () => {
    router.post(route('document-version.approve', latestVersion.value.id), {}, {onSuccess: refresh});
}

const acknowledge = () => {
    router.post(route('document-version.acknowledge', latestVersion.value.id), {}, {onSuccess: refresh});
}

const showRejectForm = ref(false);
const rejectReason = ref('');
const confirmReject = () => {
    router.post(route('document-version.reject', latestVersion.value.id), {reason: rejectReason.value}, {
        onSuccess: () => {
            showRejectForm.value = false;
            rejectReason.value = '';
            refresh();
        }
    });
}

/*Revision Requests*/
const showRevisionRequestForm = ref(false);
const revisionRequestReason = ref('');
const submitRevisionRequest = () => {
    router.post(route('document-revision-request.store', showDocument.document.id), {reason: revisionRequestReason.value}, {
        onSuccess: () => {
            showRevisionRequestForm.value = false;
            revisionRequestReason.value = '';
            refresh();
        }
    });
}

const acceptRevisionRequest = (request) => {
    router.post(route('document-revision-request.accept', request.id), {}, {onSuccess: refresh});
}

/*Accepting a revision request is immediate and hard to undo, so both the tap and the full-swipe path route through this confirmation instead of calling acceptRevisionRequest directly.*/
const showAcceptConfirm = ref(false);
const acceptConfirmRequestId = ref(null);
const requestToAccept = computed(() => showDocument.document?.revision_requests?.find(r => r.id === acceptConfirmRequestId.value));
const requestAcceptConfirmation = (request) => {
    acceptConfirmRequestId.value = request.id;
    showAcceptConfirm.value = true;
}
const cancelAcceptConfirmation = () => {
    showAcceptConfirm.value = false;
    acceptConfirmRequestId.value = null;
}
const confirmAcceptRevisionRequest = () => {
    if (requestToAccept.value) acceptRevisionRequest(requestToAccept.value);
    showAcceptConfirm.value = false;
    acceptConfirmRequestId.value = null;
}

const rejectingRequestId = ref(null);
const rejectRequestNote = ref('');
const confirmRejectRevisionRequest = (request) => {
    router.post(route('document-revision-request.reject', request.id), {note: rejectRequestNote.value}, {
        onSuccess: () => {
            rejectingRequestId.value = null;
            rejectRequestNote.value = '';
            refresh();
        }
    });
}

/*New Revision (Version) Upload*/
const showNewVersionForm = ref(false);
const newVersionFile = ref(null);
const newVersionReason = ref('');
const newVersionDetail = ref('');
const fulfillingRequestId = ref(null);

const openNewVersionForm = (request = null) => {
    fulfillingRequestId.value = request?.id ?? null;
    showNewVersionForm.value = true;
}

const handleNewVersionFileChange = (files) => {
    newVersionFile.value = files?.[0] || null;
}

const submitNewVersion = () => {
    router.post(route('document-version.store', showDocument.document.id), {
        file: newVersionFile.value,
        revision_reason: newVersionReason.value,
        revision_detail: newVersionDetail.value,
        revision_request_id: fulfillingRequestId.value,
    }, {
        forceFormData: true,
        onSuccess: () => {
            showNewVersionForm.value = false;
            newVersionFile.value = null;
            newVersionReason.value = '';
            newVersionDetail.value = '';
            fulfillingRequestId.value = null;
            refresh();
        }
    });
}

/*Cancellation / Supersession*/
const showCancelForm = ref(false);
const cancelReason = ref('');
const supersededByDocumentId = ref(null);
const confirmCancel = () => {
    router.post(route('document.cancel', showDocument.document.id), {
        reason: cancelReason.value,
        superseded_by_document_id: supersededByDocumentId.value,
    }, {
        onSuccess: () => {
            showCancelForm.value = false;
            cancelReason.value = '';
            supersededByDocumentId.value = null;
            refresh();
        }
    });
}

/*A full (over-)swipe commits the row's primary action instead of just revealing the buttons.*/
const handleRevisionRequestFullSwipe = (request) => {
    if (permissions.value.canResolveRevisionRequest && request.status === 'pending') {
        requestAcceptConfirmation(request);
    } else if (permissions.value.canSubmitNewVersion && request.status === 'accepted') {
        openNewVersionForm(request);
    }
}

const revisionRequestStatusColor = (status) => ({
    pending: 'orange',
    accepted: 'green',
    rejected: 'red',
    completed: 'neutral',
}[status] ?? 'neutral')

const versionStatusColor = (status) => ({
    draft: 'neutral',
    in_review: 'orange',
    pending_approval: 'orange',
    approved: 'green',
    rejected: 'red',
    obsolete: 'neutral',
}[status] ?? 'neutral')

const documentIcon = computed(()=>{
    if(showDocument.document?.media?.length){
        switch (showDocument.document.media[0].mime_type) {
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
            <!--Cancellation Banner-->
            <Alert v-if="isCancelled" type="danger" class="mb-3">
                <div class="flex flex-col gap-1 text-sm text-left">
                    <span class="font-bold" v-text="tm('term.cancelled')"></span>
                    <span v-text="showDocument.document.cancellation_reason"></span>
                    <span v-if="showDocument.document.superseded_by_document">
                        <span v-text="tm('term.supersededBy')"></span>:
                        <span v-text="showDocument.document.superseded_by_document.name"></span>
                    </span>
                </div>
            </Alert>

            <!--Creating Info-->
            <div class="flex flex-col gap-2">
                <div class="flex gap-2">
                    <span class="font-bold" v-text="tm('term.createdBy')"></span>
                    <span v-text="showDocument.document?.creator?.name"></span>
                </div>
                <div class="flex gap-2">
                    <span class="font-bold" v-text="tm('term.createdAt')"></span>
                    <span v-text="format.dateTime(showDocument.document?.created_at)"></span>
                </div>
                <div v-if="latestVersion" class="flex gap-2 items-center">
                    <span class="font-bold" v-text="tm('term.versionStatus')"></span>
                    <Badge :color="versionStatusColor(latestVersion.status)">{{ latestVersion.status_label }}</Badge>
                </div>
                <div v-if="showDocument.document?.tags?.length" class="flex gap-2 items-center">
                    <span class="font-bold" v-text="tm('term.tags')"></span>
                    <div class="flex flex-wrap gap-1">
                        <span v-for="tag in showDocument.document.tags" :key="tag.id" v-text="tag.name"
                              class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-xs"/>
                    </div>
                </div>
            </div>

            <!--Workflow Actions-->
            <div v-if="latestVersion && (permissions.canSubmitForReview || permissions.canReview || permissions.canApprove || permissions.canReject || permissions.canAcknowledge || permissions.canManageAuthorities)"
                 class="flex flex-col gap-2 mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                <h5 class="text-xs font-semibold uppercase tracking-wide text-slate-400" v-text="tm('term.workflowActions')"></h5>
                <div class="flex flex-wrap gap-2">
                    <SimpleButton v-if="permissions.canSubmitForReview" :label="tm('action.submitForReview')" color="blue" size="slim" @click="submitForReview"/>
                    <SimpleButton v-if="permissions.canReview" :label="tm('action.approveReview')" color="green" size="slim" @click="approveReview"/>
                    <SimpleButton v-if="permissions.canApprove" :label="tm('action.approveAndPublish')" color="green" size="slim" @click="approveAndPublish"/>
                    <SimpleButton v-if="permissions.canReject" :label="tm('action.reject')" color="red" size="slim" @click="showRejectForm = !showRejectForm"/>
                    <SimpleButton v-if="permissions.canAcknowledge" :label="tm('action.acknowledge')" color="blue" size="slim" @click="acknowledge"/>
                    <SimpleButton v-if="permissions.canManageAuthorities" type="route" size="slim" :link="route('document-type-authority.index', showDocument.document.document_type?.id)" color="neutral">
                        <span v-text="tm('action.manageAuthorities')"/>
                    </SimpleButton>
                </div>

                <div v-if="showRejectForm" class="flex flex-col gap-2">
                    <TextAreaInput v-model="rejectReason"/>
                    <SimpleButton :label="tm('action.confirmReject')" color="red" size="slim" @click="confirmReject" :disabled="!rejectReason"/>
                </div>
            </div>

            <!--Lifecycle Actions: revision request / new revision / cancel-->
            <div v-if="!isCancelled && (permissions.canRequestRevision || permissions.canSubmitNewVersion || permissions.canCancel)"
                 class="flex flex-col gap-2 mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                <h5 class="text-xs font-semibold uppercase tracking-wide text-slate-400" v-text="tm('term.lifecycleActions')"></h5>
                <div class="flex flex-wrap gap-2">
                    <SimpleButton v-if="permissions.canRequestRevision" :label="tm('action.requestRevision')" color="neutral" size="slim" @click="showRevisionRequestForm = !showRevisionRequestForm"/>
                    <SimpleButton v-if="permissions.canSubmitNewVersion" :label="tm('action.uploadNewRevision')" color="blue" size="slim" @click="openNewVersionForm()"/>
                    <SimpleButton v-if="permissions.canCancel" :label="tm('action.cancelDocument')" color="red" size="slim" @click="showCancelForm = !showCancelForm"/>
                </div>

                <!--Revision Request Form-->
                <div v-if="showRevisionRequestForm" class="flex flex-col gap-2">
                    <TextAreaInput v-model="revisionRequestReason" :placeholder="tm('term.revisionRequestReason')"/>
                    <SimpleButton :label="tm('action.submitRevisionRequest')" color="neutral" size="slim" @click="submitRevisionRequest" :disabled="!revisionRequestReason"/>
                </div>

                <!--New Version Upload Form-->
                <div v-if="showNewVersionForm" class="flex flex-col gap-2">
                    <FileInput @change="handleNewVersionFileChange"/>
                    <TextAreaInput v-model="newVersionReason" :placeholder="tm('term.revisionReason')"/>
                    <TextAreaInput v-model="newVersionDetail" :placeholder="tm('term.revisionDetail')"/>
                    <SimpleButton :label="tm('action.submitNewVersion')" color="blue" size="slim" @click="submitNewVersion"/>
                </div>

                <!--Cancel Form-->
                <div v-if="showCancelForm" class="flex flex-col gap-2">
                    <TextAreaInput v-model="cancelReason" :placeholder="tm('term.cancellationReason')"/>
                    <SelectInput v-model="supersededByDocumentId" :options="showDocument.document.other_documents ?? []" optionLabel="name" :selectText="tm('term.supersededByOptional')"/>
                    <SimpleButton :label="tm('action.confirmCancel')" color="red" size="slim" @click="confirmCancel" :disabled="!cancelReason"/>
                </div>
            </div>

            <!--Revision Requests-->
            <div v-if="showDocument.document?.revision_requests" class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                <h5 class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2" v-text="tm('term.revisionRequests')"></h5>
                <List :items="showDocument.document.revision_requests" :actions-width="112"
                      @full-swipe="handleRevisionRequestFullSwipe">
                    <template #default="{item: request}">
                        <div class="flex flex-col gap-1 p-3 text-sm">
                            <div class="flex justify-between items-center gap-2">
                                <span class="font-medium" v-text="request.requested_by?.name"></span>
                                <Badge :color="revisionRequestStatusColor(request.status)">{{ tm('term.revisionRequestStatus.' + request.status) }}</Badge>
                            </div>
                            <span v-text="request.reason"></span>
                            <span v-if="request.resolution_note" class="italic text-slate-500" v-text="request.resolution_note"></span>

                            <div v-if="rejectingRequestId === request.id" class="flex flex-col gap-2 mt-1" @click.stop>
                                <TextAreaInput v-model="rejectRequestNote"/>
                                <SimpleButton :label="tm('action.confirmReject')" color="red" size="slim" @click="confirmRejectRevisionRequest(request)" :disabled="!rejectRequestNote"/>
                            </div>
                        </div>
                    </template>
                    <template v-if="permissions.canResolveRevisionRequest || permissions.canSubmitNewVersion" #actions="{item: request, close}">
                        <template v-if="permissions.canResolveRevisionRequest && request.status === 'pending'">
                            <button type="button" class="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-500 text-green-50 text-xs font-medium"
                                    @click="requestAcceptConfirmation(request); close()" v-text="tm('action.accept')"></button>
                            <button type="button" class="flex-1 flex items-center justify-center bg-rose-600 hover:bg-red-500 text-rose-50 text-xs font-medium"
                                    @click="rejectingRequestId = request.id; close()" v-text="tm('action.reject')"></button>
                        </template>
                        <button v-else-if="permissions.canSubmitNewVersion && request.status === 'accepted'" type="button"
                                class="flex-1 flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-sky-50 text-xs font-medium"
                                @click="openNewVersionForm(request); close()" v-text="tm('action.fulfillRevisionRequest')"></button>
                    </template>
                </List>
            </div>

            <!--Revisions-->
            <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                <h5 class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2" v-text="tm('term.revisions')"></h5>
                <List :items="showDocument.document.revisions ?? []" :swipeable="false">
                    <template #default="{item: revision}">
                        <div class="flex justify-between items-center gap-2 p-3 text-sm">
                            <span class="font-medium" v-text="t('term.revisionNumber', [revision.version])"></span>
                            <div class="flex items-center gap-2">
                                <Badge :color="versionStatusColor(revision.status)">{{ revision.status_label }}</Badge>
                                <span class="text-slate-500" v-text="format.dateTime(revision.created_at)"></span>
                            </div>
                        </div>
                    </template>
                </List>
            </div>
        </template>

        <template #footer>
            <!--Download-->
            <div v-if="showDocument.document.media?.length">

                <SimpleButton :link="showDocument.document.media[0].original_url" type="external" download>
                    <div class="flex gap-2 items-center">
                        <font-awesome-icon :icon="documentIcon"/>
                        <span v-text="$t('term.download')"></span>
                    </div>
                </SimpleButton>
            </div>
        </template>
    </Modal>

    <!--Accept Revision Request Confirmation: guards both the tap and the full-swipe-commit gesture-->
    <Modal
        closeable
        v-model="showAcceptConfirm"
        :header="tm('message.confirm.acceptRevisionRequestTitle')"
        max-width="sm"
        position="center"
        @closed="cancelAcceptConfirmation"
    >
        <p v-text="tm('message.confirm.acceptRevisionRequestMessage')" class="text-sm"></p>
        <template #footer>
            <SimpleButton :label="$t('action.cancel')" color="neutral" @click="cancelAcceptConfirmation"/>
            <SimpleButton :label="tm('action.accept')" color="green" @click="confirmAcceptRevisionRequest"/>
        </template>
    </Modal>
</template>
