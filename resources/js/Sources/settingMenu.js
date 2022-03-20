/* Multi-language */
import { useI18n } from "vue-i18n";
import { computed } from "vue";

export default function ({ roles, permissions }) {
    const { t } = useI18n();

    /*Setting Menu Links*/
    const links = computed(() => {
        return [
            {
                id: "gb",
                items: [
                    {
                        id: "gb-gs",
                        label: t("settingMenu.generalSettings"),
                        icon: "landmark",
                        type: "dropdown",
                        link: "global-setting.index",
                    },
                    {
                        id: "gb-mm",
                        label: t("settingMenu.moduleManagement"),
                        icon: "microchip",
                        type: "dropdown",
                        link: "module.index",
                    },
                ],
            },
            {
                id: "cm",
                items: [
                    {
                        id: "cm-pm",
                        label: t("settingMenu.propertyManagement"),
                        icon: "layer-group",
                        type: "dropdown",
                        links: [
                            {
                                id: "cm-pm-pt",
                                label: t("settingMenu.propertyTypes"),
                                type: "link",
                                link: "property-type.index",
                            },
                            {
                                id: "cm-pm-p",
                                label: t("settingMenu.properties"),
                                type: "link",
                            },
                        ],
                    },
                ],
            },
            {
                id: "au",
                items: [
                    {
                        id: "au-am",
                        label: t("settingMenu.authorizationManagement"),
                        icon: "shield",
                        type: "dropdown",
                        links: [
                            {
                                id: "au-am-pg",
                                label: t("settingMenu.permissionGroups"),
                            },
                            {
                                id: "au-am-p",
                                label: t("settingMenu.permissions"),
                            },
                            {
                                id: "au-am-r",
                                label: t("settingMenu.roles"),
                            },
                        ],
                    },
                ],
            },
        ];
    });

    return { links };
}
