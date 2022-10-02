import {ref} from "vue"
// Multi-lang
import Translates from "../translates"

export default function (){

    const {t, tm} = Translates();

    const links = ref([
        {
            id: "gb",
            items: [
                {
                    'id': 'gb-general',
                    'label': tm('term.generalSettings'),
                    type: "link",
                    link: 'warehouse-setting.index'
                },
                {
                    'id': 'gb-type',
                    'label': t('term.type'),
                    type: "link",
                    link: 'warehouse-type.index'
                }
            ]
        },

    ])

    return {
        links
    }
}