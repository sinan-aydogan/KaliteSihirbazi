import {ref} from "vue"
import {useI18n} from "vue-i18n";

export default function () {

    const {t} = useI18n();

    const links = ref([
        {
            id: "gb",
            items: [
                {
                    'id': 'gb-category',
                    'label': t('mainMenu.kaizenCategories'),
                    type: "link",
                    link: 'kaizen-category.index'
                },
                {
                    'id': 'gb-area',
                    'label': t('mainMenu.improvementAreas'),
                    type: "link",
                    link: 'improvement-area.index'
                },
            ]
        },
    ])

    return {
        links
    }
}
