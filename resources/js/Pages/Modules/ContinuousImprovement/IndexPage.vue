<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router} from "@inertiajs/vue3";
import Grid from "@/Layouts/Grid.vue";
import DataWidget from "@/Layouts/DataWidget.vue";
import SimpleButton from "@/Components/Button/SimpleButton.vue";
import HelpButton from "@/Components/Help/HelpButton.vue";

import Translates from "./translates";

const {t, tm} = Translates();

defineProps({
    summary: {
        type: Object,
        default: () => ({})
    },
    recentSuggestions: {
        type: Array,
        default: () => []
    },
    recentAudits: {
        type: Array,
        default: () => []
    },
})

const suggestionStatusLabels = {
    submitted: 'Gönderildi',
    under_review: 'Değerlendiriliyor',
    approved: 'Onaylandı',
    rejected: 'Reddedildi',
    in_progress: 'Uygulanıyor',
    implemented: 'Uygulandı',
    closed: 'Kapatıldı',
}

const suggestionStatusColorClasses = {
    submitted: 'bg-slate-100 text-slate-700',
    under_review: 'bg-sky-100 text-sky-700',
    approved: 'bg-indigo-100 text-indigo-700',
    rejected: 'bg-rose-100 text-rose-700',
    in_progress: 'bg-amber-100 text-amber-700',
    implemented: 'bg-emerald-100 text-emerald-700',
    closed: 'bg-slate-200 text-slate-500',
}

const scoreColorClass = (score) => {
    if (score >= 20) return 'text-emerald-600'
    if (score >= 15) return 'text-amber-600'
    return 'text-rose-600'
}
</script>

<template>
    <app-layout :title="tm('title.indexPage.title')" :sub-title="tm('title.indexPage.subTitle')">
        <template #actionArea>
            <help-button title="Sürekli İyileştirme — Nasıl Çalışır?" subtitle="Kaizen felsefesi merkezli iyileştirme araçları">
                <p><strong>Kaizen Önerileri:</strong> Herkesin küçük iyileştirme fikirlerini kaydedip, değerlendirme → onay → uygulama → gerçekleşen kazanç adımlarıyla takip ettiği öneri sistemi. Her öneri, uygulama sürecinde PDCA (Planla-Uygula-Kontrol Et-Önlem Al) döngüsüyle izlenir.</p>
                <p><strong>5S Denetimleri:</strong> Bir alanın Sınıflandır/Düzenle/Temizlik/Standartlaştır/Disiplin kriterlerine göre puanlandığı düzenli denetimler; puanı düşük kriterler için bulgu/aksiyon açılır.</p>
                <p><strong>Gemba Turları:</strong> Sahaya gidip gözlem yapılan, güvenlik/kalite/akış/maliyet/motivasyon başlıklarında bulgu kaydedilen saha turları.</p>
            </help-button>
            <simple-button type="route" :link="route('area.index')" color="blue">
                <font-awesome-icon icon="map-location-dot" class="mr-2"/>
                <span v-text="t('action.manageAreas')"/>
            </simple-button>
            <simple-button type="route" :link="route('kaizen-category.index')" color="blue">
                <font-awesome-icon icon="tags" class="mr-2"/>
                <span v-text="t('action.manageCategories')"/>
            </simple-button>
        </template>

        <!--Summary Cards-->
        <Grid :large="4" :medium="2" :small="1">
            <data-widget :title="tm('term.openSuggestions')" :value="String(summary.open_suggestions)" bg-icon="lightbulb"/>
            <data-widget :title="tm('term.implementedThisYear')" :value="String(summary.implemented_this_year)" bg-icon="circle-check" diff-color="green"/>
            <data-widget :title="tm('term.realizedSavingThisYear')" :value="String(summary.realized_saving_this_year)" bg-icon="arrow-trend-up" diff-color="green"/>
            <data-widget :title="tm('term.average5sScore')" :value="summary.average_5s_score !== null ? `${summary.average_5s_score} / 25` : '-'" bg-icon="broom" diff-color="blue"/>
        </Grid>

        <Grid :large="4" :medium="2" :small="1" class="mt-4">
            <data-widget :title="tm('term.openGembaFindings')" :value="String(summary.open_gemba_findings)" bg-icon="person-walking" diff-color="orange"/>
        </Grid>

        <Grid :large="2" :medium="1" :small="1" :gap="4" class="mt-8">
            <!--Recent Suggestions-->
            <div class="rounded-xl border border-slate-300 bg-white p-4 shadow-md shadow-slate-300/40 dark:border-slate-500 dark:bg-slate-700">
                <div class="flex items-center justify-between mb-3">
                    <p class="font-semibold" v-text="tm('term.recentSuggestions')"/>
                    <simple-button type="route" :link="route('kaizen-suggestion.index')" color="blue">
                        <span v-text="t('action.kaizenSuggestions')"/>
                    </simple-button>
                </div>
                <table class="w-full text-sm">
                    <tbody>
                    <tr v-for="suggestion in recentSuggestions" :key="suggestion.id"
                        class="border-t border-slate-200 dark:border-slate-500 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-600"
                        @click="router.visit(route('kaizen-suggestion.show', suggestion.id))">
                        <td class="px-2 py-2 text-xs text-slate-400">{{ suggestion.code }}</td>
                        <td class="px-2 py-2">{{ suggestion.title }}</td>
                        <td class="px-2 py-2 text-right">
                            <span class="px-2 py-0.5 rounded text-xs"
                                  :class="suggestionStatusColorClasses[suggestion.status] ?? 'bg-slate-100 text-slate-700'"
                                  v-text="suggestionStatusLabels[suggestion.status] ?? suggestion.status"/>
                        </td>
                    </tr>
                    <tr v-if="recentSuggestions.length === 0">
                        <td colspan="3" class="text-center py-4 text-slate-400" v-text="tm('message.feedback.emptySuggestionsList')"/>
                    </tr>
                    </tbody>
                </table>
            </div>

            <!--Recent 5S Audits-->
            <div class="rounded-xl border border-slate-300 bg-white p-4 shadow-md shadow-slate-300/40 dark:border-slate-500 dark:bg-slate-700">
                <div class="flex items-center justify-between mb-3">
                    <p class="font-semibold" v-text="tm('term.recentAudits')"/>
                    <simple-button type="route" :link="route('five-s-audit.index')" color="blue">
                        <span v-text="t('action.fiveSAudits')"/>
                    </simple-button>
                </div>
                <table class="w-full text-sm">
                    <tbody>
                    <tr v-for="audit in recentAudits" :key="audit.id"
                        class="border-t border-slate-200 dark:border-slate-500 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-600"
                        @click="router.visit(route('five-s-audit.show', audit.id))">
                        <td class="px-2 py-2 text-xs text-slate-400">{{ audit.code }}</td>
                        <td class="px-2 py-2">{{ audit.area?.name ?? '-' }}</td>
                        <td class="px-2 py-2 text-right font-semibold" :class="scoreColorClass(audit.total_score)">{{ audit.total_score }} / 25</td>
                    </tr>
                    <tr v-if="recentAudits.length === 0">
                        <td colspan="3" class="text-center py-4 text-slate-400" v-text="tm('message.feedback.emptyAuditsList')"/>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Grid>
    </app-layout>
</template>
