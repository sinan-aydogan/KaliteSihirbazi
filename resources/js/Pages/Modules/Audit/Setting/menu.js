import {ref} from "vue"
// Multi-lang
import Translates from "../translates"

export default function (){

    const {tm} = Translates();

    const links = ref([
        {
            id: "gb",
            items: [
                {'id': 'gb-general', 'label': tm('menu.general'), type: "link", link: 'audit-setting.index'},
                {'id': 'gb-types', 'label': tm('menu.types'), type: "link", link: 'audit-type.index'},
                {'id': 'gb-scopes', 'label': tm('menu.scopes'), type: "link", link: 'audit-scope.index'},
                {'id': 'gb-checklist-templates', 'label': tm('menu.checklistTemplates'), type: "link", link: 'audit-checklist-template.index'},
                {'id': 'gb-internal-auditors', 'label': tm('menu.internalAuditors'), type: "link", link: 'internal-auditor.index'},
            ]
        },
    ])

    return {
        links
    }
}
