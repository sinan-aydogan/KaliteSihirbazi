import {watch, ref, onBeforeMount} from "vue";
import {usePage} from "@inertiajs/vue3";
import {cloneDeep} from "lodash";

export default function () {
    /*Dark Mode*/
    const theme = ref(usePage().props.auth.user.theme);
    const appearingMode = ref(usePage().props.auth.user.theme)

    /*Dark Mode: Check Local Variables*/
    onBeforeMount(() => {
        if (usePage().props.auth.user.theme === "dark") {
            makeDark();
            theme.value = "dark";
        } else if (usePage().props.auth.user.theme === "light") {
            makeLight();
            theme.value = "light";
        } else {
            makeAuto();
            theme.value = "auto";
        }
    });

    /*Dark Mode: Set Functions*/
    const makeDark = () => {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("auto");
        appearingMode.value = "dark";
    };
    const makeLight = () => {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("auto");
        appearingMode.value = "light"
    };
    const makeAuto = () => {
        let darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
        const changeAutoTheme = () => {
            if (darkMedia.matches) {
                makeDark();
                appearingMode.value = "dark";
            } else {
                makeLight();
                appearingMode.value = "light"
            }
        };
        changeAutoTheme();
        darkMedia.onchange = () => {
            changeAutoTheme();
        };
    };

    /*Dark Mode: Watch*/
    watch(() => cloneDeep(usePage().props.auth.user.theme), (value) => {
            if (value === "dark") {
                makeDark();
            } else if (value === "light") {
                makeLight();
            } else {
                makeAuto();
            }
        },
        {deep: true}
    );

    return {theme, appearingMode};
}
