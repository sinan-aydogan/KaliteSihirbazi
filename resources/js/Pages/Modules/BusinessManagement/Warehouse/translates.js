import {useI18n} from "vue-i18n";
import tr from "./translates/tr.json"
import en from "./translates/en.json"

export default function () {
    const {t, tm, tc} = useI18n({
        messages: {
            en,
            tr
        }
    });

    return {
        t,
        tm,
        tc,
    }
}