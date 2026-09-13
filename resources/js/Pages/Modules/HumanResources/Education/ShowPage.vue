<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
import {router} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Alert from "@/Components/Alert/Alert.vue"
import Badge from "@/Components/Badge/Badge.vue"
import HelpButton from "@/Components/Help/HelpButton.vue"
import Modal from "@/Components/Modal/Modal.vue"
import InputGroup from "@/Components/Form/InputGroup.vue"
import SelectInput from "@/Components/Form/SelectInput.vue"
import TextAreaInput from "@/Components/Form/TextAreaInput.vue"

// Props
const props = defineProps({
    data: {
        type: Object,
        default: {}
    },
    candidateUsers: {
        type: Array,
        default: () => []
    }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

/*Add participant*/
const showAddParticipantModal = ref(false);
const newParticipantUserId = ref(null);
const addParticipant = () => {
    if (!newParticipantUserId.value) return;
    router.post(route('education.add-participant', props.data.id), {
        user_id: newParticipantUserId.value,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            showAddParticipantModal.value = false;
            newParticipantUserId.value = null;
        }
    })
}

/*Update participant (attendance / success / score)*/
const updateParticipant = (participation, changes) => {
    router.put(route('education.update-participant', [props.data.id, participation.user_id]), {
        is_attend: participation.is_attend,
        status: participation.status,
        score: participation.score,
        ...changes,
    }, {preserveScroll: true})
}

/*Remove participant*/
const removeParticipant = (participation) => {
    router.delete(route('education.remove-participant', [props.data.id, participation.user_id]), {preserveScroll: true})
}

/*Effectiveness evaluation*/
const showEffectivenessModal = ref(false);
const evaluatingParticipation = ref(null);
const effectivenessForm = ref({rating: 'not_evaluated', note: ''});

const effectivenessOptions = [
    {id: 'not_evaluated', label: 'Değerlendirilmedi'},
    {id: 'ineffective', label: 'Etkisiz'},
    {id: 'partially_effective', label: 'Kısmen Etkili'},
    {id: 'effective', label: 'Etkili'},
]

const effectivenessColorClasses = {
    not_evaluated: 'neutral',
    ineffective: 'red',
    partially_effective: 'orange',
    effective: 'green',
}

const openEvaluateEffectiveness = (participation) => {
    evaluatingParticipation.value = participation;
    effectivenessForm.value = {
        rating: participation.effectiveness_rating ?? 'not_evaluated',
        note: participation.effectiveness_note ?? '',
    };
    showEffectivenessModal.value = true;
}

const submitEffectiveness = () => {
    router.put(route('education.update-participant', [props.data.id, evaluatingParticipation.value.user_id]), {
        is_attend: evaluatingParticipation.value.is_attend,
        status: evaluatingParticipation.value.status,
        score: evaluatingParticipation.value.score,
        effectiveness_rating: effectivenessForm.value.rating,
        effectiveness_note: effectivenessForm.value.note,
    }, {
        preserveScroll: true,
        onSuccess: () => showEffectivenessModal.value = false,
    })
}

/*Participant documents*/
const uploadParticipantDocument = (participation, event) => {
    const file = event.target.files[0];
    if (!file) return;

    router.post(route('education.upload-participant-document', [props.data.id, participation.user_id]), {
        document: file,
    }, {preserveScroll: true, forceFormData: true})
}

const deleteParticipantDocument = (participation, mediaId) => {
    router.delete(route('education.delete-participant-document', [props.data.id, participation.user_id, mediaId]), {preserveScroll: true})
}

const formatExpiresAt = (participation) => {
    if (!participation.expires_at) return null;
    const isExpired = new Date(participation.expires_at) < new Date();
    return {text: formatDate(participation.expires_at), expired: isExpired};
}

// Status badge colors
const getStatusColor = (education) => {
    if (education.is_cancelled) return 'red';
    if (education.is_completed) return 'green';
    return 'blue';
}

const getStatusText = (education) => {
    if (education.is_cancelled) return tm('term.cancelled');
    if (education.is_completed) return tm('term.completed');
    return tm('term.planned');
}

// Date formatting
const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString('tr-TR') : '';
}

// Duration formatting
const formatDuration = (minutes) => {
    if (!minutes) return '';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0 && mins > 0) {
        return `${hours} saat ${mins} dakika`;
    } else if (hours > 0) {
        return `${hours} saat`;
    } else {
        return `${mins} dakika`;
    }
}

</script>

<template>
    <app-layout :title="tm('title.showPage.title')" :sub-title="props.data.name">
        <template #actionArea>
            <help-button title="Eğitim Detayı — Nasıl Çalışır?" subtitle="Durum, katılımcı ve eğitmen yönetimi">
                <p><strong>Durum Rozeti:</strong> Bir eğitim varsayılan olarak "Planlandı" durumundadır. Düzenleme formundaki "Tamamlandı" ve "İptal Edildi" işaretleri birbirinden bağımsızdır — sistem ikisinin aynı anda işaretlenmesini engellemez, rozet önceliği önce iptali, sonra tamamlanmayı gösterir.</p>
                <p><strong>Katılımcılar:</strong> Her katılımcı için üç ayrı bilgi tutulur: <strong>Katıldı mı</strong> (fiilen eğitime katıldı mı), <strong>Başarılı mı</strong> (eğitimi başarıyla tamamladı mı) ve 0-100 arası <strong>puan</strong>. Bu üçü birbirinden bağımsızdır; birini işaretlemek diğerini otomatik değiştirmez.</p>
                <p><strong>Eğitmenler:</strong> Eğitmen listesi, kişi bazlı hesap gerektirmeyen ayrı bir "Eğitmen" tanım tablosundan (Modül Ayarları) gelir — katılımcı listesindeki kullanıcı hesaplarından farklıdır.</p>
            </help-button>

            <!--Return to List-->
            <simple-button type="route" :link="route('education.index')" color="gray">
                <font-awesome-icon icon="arrow-left" class="mr-2"/>
                <span v-text="tm('action.returnToList')"/>
            </simple-button>

            <!--Edit-->
            <simple-button type="route" :link="route('education.edit', props.data.id)" color="blue">
                <font-awesome-icon icon="edit" class="mr-2"/>
                <span v-text="tm('action.editEducation')"/>
            </simple-button>
        </template>

        <div class="grid grid-cols-12 gap-6">
            <!--Education Basic Info-->
            <div class="col-span-12 lg:col-span-8">
                <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold">{{ tm('term.education') }}</h3>
                        <Badge :color="getStatusColor(data)">
                            {{ getStatusText(data) }}
                        </Badge>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ tm('term.educationPlan') }}
                            </label>
                            <p class="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                {{ data.education_plan?.name }}
                            </p>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ tm('term.plannedDate') }}
                            </label>
                            <p class="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                {{ formatDate(data.planned_date) }}
                            </p>
                        </div>
                        
                        <div v-if="data.performed_date">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ tm('term.performedDate') }}
                            </label>
                            <p class="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                {{ formatDate(data.performed_date) }}
                            </p>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ tm('term.duration') }}
                            </label>
                            <p class="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                {{ formatDuration(data.duration) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!--Education Types-->
            <div class="col-span-12 lg:col-span-4">
                <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                    <h3 class="text-lg font-semibold mb-4">{{ tm('term.educationTypes') }}</h3>
                    <div class="space-y-2">
                        <Badge 
                            v-for="type in data.education_types" 
                            :key="type.id"
                            color="green"
                            class="mr-2 mb-2"
                        >
                            {{ type.name }}
                        </Badge>
                        <Alert v-if="!data.education_types?.length">
                            {{ tm('message.feedback.noEducationTypes') }}
                        </Alert>
                    </div>
                </div>
            </div>

            <!--Description-->
            <div class="col-span-12">
                <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                    <h3 class="text-lg font-semibold mb-4">{{ tm('term.description') }}</h3>
                    <p v-if="data.description" class="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {{ data.description }}
                    </p>
                    <Alert v-else>
                        {{ tm('message.feedback.noDescription') }}
                    </Alert>
                </div>
            </div>

            <!--Source (Problem/Capa, if raised as a corrective action)-->
            <div v-if="data.problem || data.capa" class="col-span-12">
                <div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 shadow">
                    <h3 class="text-lg font-semibold mb-2 text-amber-800 dark:text-amber-300">Kaynak</h3>
                    <p v-if="data.problem" class="text-amber-700 dark:text-amber-400 cursor-pointer hover:underline" @click="router.visit(route('problem.show', data.problem.id))">
                        {{ tm('term.sourceProblem') }}: {{ data.problem.code }} — {{ data.problem.title }}
                    </p>
                    <p v-if="data.capa" class="text-amber-700 dark:text-amber-400 cursor-pointer hover:underline" @click="router.visit(route('capa.show', data.capa.id))">
                        {{ tm('term.sourceCapa') }}: {{ data.capa.code }} — {{ data.capa.title }}
                    </p>
                </div>
            </div>

            <!--Cancel Reason (if cancelled)-->
            <div v-if="data.is_cancelled && data.cancel_reason" class="col-span-12">
                <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 shadow">
                    <h3 class="text-lg font-semibold mb-4 text-red-800 dark:text-red-300">
                        {{ tm('term.cancelReason') }}
                    </h3>
                    <p class="text-red-700 dark:text-red-400">
                        {{ data.cancel_reason }}
                    </p>
                </div>
            </div>

            <!--Instructors-->
            <div class="col-span-12 lg:col-span-6">
                <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                    <h3 class="text-lg font-semibold mb-4">{{ tm('term.educationInstructors') }}</h3>
                    <div v-if="data.instructors?.length" class="space-y-3">
                        <div 
                            v-for="instructor in data.instructors" 
                            :key="instructor.id"
                            class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"
                        >
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    {{ instructor.name.charAt(0).toUpperCase() }}
                                </div>
                                <div>
                                    <p class="font-medium">{{ instructor.name }}</p>
                                    <p v-if="instructor.pivot?.role" class="text-sm text-gray-500">
                                        {{ instructor.pivot.role }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Alert v-else>
                        {{ tm('message.feedback.noInstructors') }}
                    </Alert>
                </div>
            </div>

            <!--Participants-->
            <div class="col-span-12 lg:col-span-6">
                <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold">{{ tm('term.participants') }}</h3>
                        <simple-button color="green" size="sm" @click="showAddParticipantModal = true">
                            <font-awesome-icon icon="plus" class="mr-1"/>
                            {{ tm('term.addParticipant') }}
                        </simple-button>
                    </div>
                    <div v-if="data.participations?.length" class="space-y-3">
                        <div
                            v-for="participation in data.participations"
                            :key="participation.id"
                            class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"
                        >
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    {{ participation.user?.name?.charAt(0).toUpperCase() }}
                                </div>
                                <div>
                                    <p class="font-medium">{{ participation.user?.name }}</p>
                                    <div class="flex flex-wrap items-center gap-2 text-xs mt-1">
                                        <Badge
                                            class="cursor-pointer"
                                            :color="participation.is_attend ? 'green' : 'gray'"
                                            size="sm"
                                            @click="updateParticipant(participation, {is_attend: !participation.is_attend})"
                                        >
                                            {{ participation.is_attend ? tm('term.isAttend') : 'Katılmadı' }}
                                        </Badge>
                                        <Badge
                                            class="cursor-pointer"
                                            :color="participation.status ? 'blue' : 'gray'"
                                            size="sm"
                                            @click="updateParticipant(participation, {status: !participation.status})"
                                        >
                                            {{ participation.status ? 'Başarılı' : 'Başarısız' }}
                                        </Badge>
                                        <input
                                            type="number"
                                            min="0"
                                            max="100"
                                            :value="participation.score"
                                            @change="updateParticipant(participation, {score: $event.target.value === '' ? null : Number($event.target.value)})"
                                            class="w-16 text-xs rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                                            placeholder="puan"
                                        />
                                        <button
                                            type="button"
                                            class="text-red-500 hover:text-red-700"
                                            @click="removeParticipant(participation)"
                                        >
                                            <font-awesome-icon icon="trash-can"/>
                                        </button>
                                    </div>
                                    <div class="flex flex-wrap items-center gap-2 text-xs mt-1">
                                        <Badge
                                            class="cursor-pointer"
                                            :color="effectivenessColorClasses[participation.effectiveness_rating ?? 'not_evaluated']"
                                            size="sm"
                                            @click="openEvaluateEffectiveness(participation)"
                                        >
                                            {{ tm(`term.effectivenessValue.${participation.effectiveness_rating ?? 'not_evaluated'}`) }}
                                        </Badge>
                                        <Badge v-if="formatExpiresAt(participation)" :color="formatExpiresAt(participation).expired ? 'red' : 'neutral'" size="sm">
                                            {{ tm('term.expiresAt') }}: {{ formatExpiresAt(participation).text }}
                                        </Badge>
                                        <label class="cursor-pointer text-slate-400 hover:text-sky-600" :title="tm('term.documents')">
                                            <font-awesome-icon icon="paperclip"/>
                                            <input type="file" class="hidden" @change="uploadParticipantDocument(participation, $event)"/>
                                        </label>
                                        <span v-for="document in participation.media" :key="document.id" class="flex items-center gap-1">
                                            <a :href="document.original_url" target="_blank" class="text-sky-600 hover:underline truncate max-w-[100px]">{{ document.name }}</a>
                                            <font-awesome-icon icon="circle-xmark" class="cursor-pointer text-slate-400 hover:text-red-600" @click="deleteParticipantDocument(participation, document.id)"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Alert v-else>
                        {{ tm('message.feedback.noParticipants') }}
                    </Alert>
                </div>
            </div>

            <!--Documents-->
            <div class="col-span-12">
                <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                    <h3 class="text-lg font-semibold mb-4">{{ tm('term.documents') }}</h3>
                    <div v-if="data.media?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div 
                            v-for="document in data.media" 
                            :key="document.id"
                            class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded"
                        >
                            <font-awesome-icon icon="file" class="text-blue-500 mr-3"/>
                            <div class="flex-1">
                                <p class="font-medium truncate">{{ document.name }}</p>
                                <p class="text-xs text-gray-500">{{ document.mime_type }}</p>
                            </div>
                            <simple-button size="sm" color="blue" class="ml-2" type="external" :link="document.original_url" download>
                                <font-awesome-icon icon="download"/>
                            </simple-button>
                        </div>
                    </div>
                    <Alert v-else>
                        {{ tm('message.feedback.noDocuments') }}
                    </Alert>
                </div>
            </div>
        </div>
    </app-layout>

    <teleport to="body">
        <Modal
            v-model="showAddParticipantModal"
            :header="tm('term.addParticipant')"
            closeable
            close-button
        >
            <input-group label-for="participant_user_id" :label="tm('term.participants')">
                <select-input v-model="newParticipantUserId" :options="candidateUsers" option-key="id" option-label="name"/>
            </input-group>
            <template #footer>
                <SimpleButton :label="t('action.create')" color="green" @click="addParticipant"/>
            </template>
        </Modal>
    </teleport>

    <teleport to="body">
        <Modal
            v-model="showEffectivenessModal"
            :header="tm('term.effectivenessRating')"
            closeable
            close-button
        >
            <input-group label-for="effectiveness_rating" :label="tm('term.effectivenessRating')">
                <select-input v-model="effectivenessForm.rating" :options="effectivenessOptions" option-key="id" option-label="label"/>
            </input-group>
            <input-group label-for="effectiveness_note" :label="tm('term.effectivenessNote')" class="mt-4">
                <text-area-input v-model="effectivenessForm.note" :rows="3"/>
            </input-group>
            <template #footer>
                <SimpleButton :label="t('action.update')" color="green" @click="submitEffectiveness"/>
            </template>
        </Modal>
    </teleport>
</template> 