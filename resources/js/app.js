import './bootstrap';
import "../sass/app.sass";

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { createPinia } from "pinia";

/*Font Awesome*/
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import "@/Sources/icons";
/*Vue-i18n*/
import { createI18n } from "vue-i18n";
import enTranslates from "@/Languages/en.json";
import trTranslates from "@/Languages/tr.json";

const i18n = createI18n({
    legacy: false,
    locale: "tr", // set locale
    fallbackLocale: "tr", // set fallback locale
    messages: {
        en: enTranslates,
        tr: trTranslates,
    },
    missingWarn: false,
    fallbackWarn: false
});

/*Pinia*/
const pinia = createPinia()

/*Dayjs*/
import dayjs from "dayjs";
import "dayjs/locale/tr"

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        // vuei18n Global Import
        app.config.globalProperties.t = i18n.global.t;
        app.config.globalProperties.tm = i18n.global.tm;
        app.config.globalProperties.dayjs = dayjs;

        return app
            .component("font-awesome-icon", FontAwesomeIcon)
            .component("font-awesome-layers", FontAwesomeLayers)
            .component("font-awesome-layers-text", FontAwesomeLayersText)
            .use(i18n)
            .use(pinia)
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
