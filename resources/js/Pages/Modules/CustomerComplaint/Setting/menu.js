import {ref} from "vue"
// Multi-lang
import Translates from "../translates"

export default function (){

    const {t} = Translates();

    const links = ref([
        {
            id: "gb",
            items: [
                {'id': 'gb-general', 'label': t('menu.general'), type: "link", link: 'customer-complaint-setting.index'},
                {'id': 'gb-source-type', 'label': t('menu.sourceTypes'), type: "link", link: 'complaint-source-type.index'},
                {'id': 'gb-subject', 'label': t('menu.subjects'), type: "link", link: 'complaint-subject.index'},
            ]
        },
    ])

    return {
        links
    }
}
