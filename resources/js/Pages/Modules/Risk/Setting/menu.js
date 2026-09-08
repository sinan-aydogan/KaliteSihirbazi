import {ref} from "vue"
// Multi-lang
import Translates from "../translates"

export default function (){

    const {tm} = Translates();

    const links = ref([
        {
            id: "gb",
            items: [
                {'id': 'gb-general', 'label': tm('menu.general'), type: "link", link: 'risk-setting.index'},
                {'id': 'gb-categories', 'label': tm('menu.categories'), type: "link", link: 'risk-category.index'},
                {'id': 'gb-hazard-classes', 'label': tm('menu.hazardClasses'), type: "link", link: 'risk-hazard-class.index'},
            ]
        },
    ])

    return {
        links
    }
}
