import {ref} from "vue"
import {useI18n} from "vue-i18n";

export default function () {

    const {t} = useI18n();

    const links = ref([
        {
            id: "gb",
            items: [
                {
                    'id': 'gb-problem-source-type',
                    'label': t('mainMenu.problemSourceTypes'),
                    type: "link",
                    link: 'problem-source-type.index'
                },
                {
                    'id': 'gb-capa-source-type',
                    'label': t('mainMenu.capaSourceTypes'),
                    type: "link",
                    link: 'capa-source-type.index'
                },
            ]
        },
    ])

    return {
        links
    }
}
