import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

/*Quasar*/
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/tr'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'
import 'quasar/src/css/index.sass'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Quasar, {
                plugins: {}, // import Quasar plugins and add here
                lang: quasarLang,
                /*
                config: {
                  brand: {
                    // primary: '#e46262',
                    // ... or all other brand colors
                  },
                  notify: {...}, // default set of options for Notify Quasar plugin
                  loading: {...}, // default set of options for Loading Quasar plugin
                  loadingBar: { ... }, // settings for LoadingBar Quasar plugin
                  // ..and many more (check Installation card on each Quasar component/directive/plugin)
                }
                */
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
