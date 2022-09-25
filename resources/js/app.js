import "./bootstrap";
import "../sass/app.sass";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { createPinia } from "pinia";

//Pinia
const pinia = createPinia();

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
});

import dayjs from "dayjs";
import "dayjs/locale/tr"

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
        ),
    setup({ el, app, props, plugin }) {
        const App = createApp({ render: () => h(app, props) });

        // vuei18n Global Import
        App.config.globalProperties.t = i18n.global.t;
        App.config.globalProperties.tm = i18n.global.tm;
        App.config.globalProperties.dayjs = dayjs;

        return App
            .component("font-awesome-icon", FontAwesomeIcon)
            .component("font-awesome-layers", FontAwesomeLayers)
            .component("font-awesome-layers-text", FontAwesomeLayersText)
            .use(i18n)
            .use(pinia)
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({ color: "#4B5563" });
