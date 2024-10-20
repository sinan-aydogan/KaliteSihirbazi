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
                }
            ]
        },

    ])

    return {
        links
    }
}
