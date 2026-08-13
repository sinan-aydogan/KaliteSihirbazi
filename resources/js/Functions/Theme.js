import {watch, ref, onUnmounted} from "vue";
import {usePage} from "@inertiajs/vue3";

export default function () {
    /*Dark Mode*/
    const theme = ref(usePage().props.auth.user.theme);
    const appearingMode = ref(usePage().props.auth.user.theme)

    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    let autoThemeListener = null;

    /*Dark Mode: Set Functions*/
    const setDarkAppearance = () => {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("auto");
        appearingMode.value = "dark";
    };
    const setLightAppearance = () => {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("auto");
        appearingMode.value = "light"
    };
    const makeDark = () => {
        stopAutoTheme();
        setDarkAppearance();
    };
    const makeLight = () => {
        stopAutoTheme();
        setLightAppearance();
    };
    const makeAuto = () => {
        const changeAutoTheme = () => {
            if (darkMedia.matches) {
                setDarkAppearance();
                appearingMode.value = "dark";
            } else {
                setLightAppearance();
                appearingMode.value = "light"
            }
        };
        changeAutoTheme();
        stopAutoTheme();
        autoThemeListener = changeAutoTheme;
        darkMedia.addEventListener('change', autoThemeListener);
    };

    function stopAutoTheme() {
        if (autoThemeListener) {
            darkMedia.removeEventListener('change', autoThemeListener);
            autoThemeListener = null;
        }
    }

    const applyTheme = (value) => {
        theme.value = ['light', 'dark', 'auto'].includes(value) ? value : 'auto';

        if (theme.value === 'dark') makeDark();
        else if (theme.value === 'light') makeLight();
        else makeAuto();
    };

    /*Dark Mode: Watch*/
    watch(() => usePage().props.auth.user.theme, applyTheme, {immediate: true});
    onUnmounted(stopAutoTheme);

    return {theme, appearingMode};
}
