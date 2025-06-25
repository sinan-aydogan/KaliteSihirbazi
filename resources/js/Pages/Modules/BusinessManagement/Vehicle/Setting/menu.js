import {ref} from "vue"
// Multi-lang
import Translates from "../translates"

export default function (){

    const {t, tm} = Translates();

    const links = ref([
        {
            id: "vh",
            items: [
                {
                    'id': 'vh-general',
                    'label': tm('term.generalSettings'),
                    type: "link",
                    link: 'vehicle-setting.index'
                },
                {
                    'id': 'vh-type',
                    'label': t('term.type'),
                    type: "link",
                    link: 'vehicle-type.index'
                },
                {
                    'id': 'vh-status',
                    'label': t('term.status'),
                    type: "link",
                    link: 'vehicle-status.index'
                }
            ]
        },
    ])

    return {
        links
    }
}
