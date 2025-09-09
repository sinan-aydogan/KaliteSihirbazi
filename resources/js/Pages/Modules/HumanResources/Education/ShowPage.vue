<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {ref} from "vue";
import {router} from "@inertiajs/vue3";

// Components
import SimpleButton from "@/Components/Button/SimpleButton.vue"
import Alert from "@/Components/Alert/Alert.vue"
import Badge from "@/Components/Badge/Badge.vue"

// Props
const props = defineProps({
    data: {
        type: Object,
        default: {}
    }
})

// Multi-lang
import Translates from "./translates"

const {t, tm} = Translates();

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

            <!--Manage Participants-->
            <simple-button color="purple">
                <font-awesome-icon icon="users" class="mr-2"/>
                <span v-text="tm('action.manageParticipants')"/>
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
                        <simple-button color="green" size="sm">
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
                                    <div class="flex space-x-2 text-xs">
                                        <Badge :color="participation.is_attend ? 'green' : 'gray'" size="sm">
                                            {{ participation.is_attend ? tm('term.isAttend') : 'Katılmadı' }}
                                        </Badge>
                                        <Badge v-if="participation.score !== null" color="blue" size="sm">
                                            {{ participation.score }} puan
                                        </Badge>
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
                            <simple-button size="sm" color="blue" class="ml-2">
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
</template> 