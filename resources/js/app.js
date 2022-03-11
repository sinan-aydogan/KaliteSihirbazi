require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
/*Font Awesome*/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/*Vue-i18n*/
import { createI18n } from 'vue-i18n'
import enTranslates from "@/Languages/en.json"
import trTranslates from "@/Languages/tr.json"
const i18n = createI18n({
    locale: 'tr', // set locale
    fallbackLocale: 'tr', // set fallback locale
    messages: {
        en: enTranslates,
        tr: trTranslates
    }
});

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(i18n)
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
