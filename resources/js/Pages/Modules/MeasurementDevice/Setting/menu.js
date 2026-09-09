import {ref} from "vue"
// Multi-lang
import Translates from "./Type/translates"

export default function () {

    const {tm} = Translates();

    const links = ref([
        {
            id: "gb",
            items: [
                {
                    'id': 'gb-type',
                    'label': tm('title.indexPage.title'),
                    type: "link",
                    link: 'measurement-device-type.index'
                },
            ]
        },
    ])

    return {
        links
    }
}
