import {ref} from "vue"
import {useI18n} from "vue-i18n";

export default function () {

    const {t} = useI18n();

    const links = ref([
        {
            id: "gb",
            items: [
                {
                    'id': 'gb-general',
                    'label': t('term.generalSettings'),
                    type: "link",
                    link: 'measurement-device-setting.index'
                },
                {
                    'id': 'gb-type',
                    'label': t('mainMenu.measurementDeviceTypes'),
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
