import {ref} from "vue"
// Multi-lang
import Translates from "../translates"

export default function (){

    const {tm} = Translates();

    const links = ref([
        {
            id: "gb",
            items: [
                {'id': 'gb-general', 'label': tm('menu.general'), type: "link", link: 'customer-complaint-setting.index'},
            ]
        },
    ])

    return {
        links
    }
}
