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
                    link: 'document-setting.index'
                },
                {
                    'id': 'gb-type',
                    'label': tm('term.type'),
                    type: "link",
                    link: 'document-type.index'
                },
                {
                    'id': 'gb-type',
                    'label': tm('term.distributionPoints'),
                    type: "link",
                    link: 'distribution-point.index'
                },
            ]
        },

    ])

    return {
        links
    }
}
