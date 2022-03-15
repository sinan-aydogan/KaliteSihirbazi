/* Multi-language */
import {useI18n} from "vue-i18n";
import {computed} from "vue";

export default function ({roles, permissions}) {

    const {t} = useI18n()

    /*Main Menu Links*/
    const links = computed(() => {
        return [
            {
                id: 'bm',
                label: t('mainMenu.businessManagement'),
                icon: 'building',
                type: "dropdown",
                links: [
                    {
                        id: 'bm-dp',
                        label: t('mainMenu.departments'),
                        icon: 'sitemap',
                        type: "route",
                        link: 'department.index'
                    },
                    {
                        id: 'bm-wh',
                        label: t('mainMenu.warehouses'),
                        icon: 'warehouse',
                        type: "route",
                        link: 'warehouse.index'
                    },
                    {
                        id: 'bm-vh',
                        label: t('mainMenu.vehicles'),
                        icon: 'van-shuttle',
                        type: "route",
                        link: 'vehicles.index'
                    },
                    {
                        id: 'bm-dv',
                        label: t('mainMenu.devices'),
                        icon: 'desktop',
                        type: "route",
                        link: 'device.index'
                    },
                    {
                        id: 'bm-mc',
                        label: t('mainMenu.machines'),
                        icon: 'gears',
                        type: "route",
                        link: 'machine.index'
                    },
                    {
                        id: 'bm-cus',
                        label: t('mainMenu.customers'),
                        icon: 'handshake',
                        type: "route",
                        link: 'customer.index'
                    },
                    {
                        id: 'bm-sup',
                        label: t('mainMenu.suppliers'),
                        icon: 'store',
                        type: "route",
                        link: 'supplier.index'
                    },
                    {
                        id: 'bm-aud',
                        label: t('mainMenu.auditFirms'),
                        icon: 'landmark',
                        type: "route",
                        link: 'audit-firm.index'
                    }
                ]
            },
            {
                id: 'hr',
                label: t('mainMenu.humanResources'),
                icon: 'user-group',
                type: "dropdown",
                links: [
                    {
                        id: 'hr-st',
                        label: t('mainMenu.staff'),
                        icon: 'users',
                        type: "route",
                        link: 'staff.index'
                    },
                    {
                        id: 'hr-jd',
                        label: t('mainMenu.jobDescriptions'),
                        icon: 'list-check',
                        type: "route",
                        link: 'job-description.index'
                    },
                    {
                        id: 'hr-edu',
                        label: t('mainMenu.educationPlaning'),
                        icon: 'chalkboard-user',
                        type: "route",
                        link: 'education-plan.index'
                    },
                    {
                        id: 'hr-tto',
                        label: t('mainMenu.takeTimeOff'),
                        icon: 'person-running',
                        type: "route",
                        link: 'take-time-off.index'
                    }
                ]
            },
            {
                id: 'capa',
                label: t('mainMenu.capaSystem'),
                icon: 'highlighter',
                type: "dropdown",
                links: [
                    {
                        id: 'capa-pr',
                        label: t('mainMenu.problems'),
                        icon: 'bug',
                        type: "route",
                        link: 'problem.index'
                    },
                    {
                        id: 'capa-ac',
                        label: t('mainMenu.actions'),
                        icon: 'arrow-right-arrow-left',
                        type: "route",
                        link: 'capa-action.index'
                    }
                ]
            },
            {
                id: 'pr',
                label: t('mainMenu.productionManagement'),
                icon: 'shapes',
                type: "dropdown",
                links: [
                    {
                        id: 'pr-pr',
                        label: t('mainMenu.products'),
                        icon: 'boxes',
                        type: "route",
                        link: 'product.index'
                    },
                    {
                        id: 'pr-rm',
                        label: t('mainMenu.rawMaterials'),
                        icon: 'droplet',
                        type: "route",
                        link: 'raw-material.index'
                    },
                    {
                        id: 'pr-cm',
                        label: t('mainMenu.consumableMaterials'),
                        icon: 'diagram-predecessor',
                        type: "route",
                        link: 'consumable-material.index'
                    },
                    {
                        id: 'pr-pt',
                        label: t('mainMenu.productTrees'),
                        icon: 'code-pull-request',
                        type: "route",
                        link: 'product-tree.index'
                    }
                ]
            },
            {
                id: 'dc',
                label: t('mainMenu.documentation'),
                icon: 'file-lines',
                type: "dropdown",
                links: [
                    {
                        id: 'dc-dl',
                        label: t('mainMenu.documents'),
                        icon: 'folder-tree',
                        type: "route",
                        link: 'document.index'
                    },
                    {
                        id: 'dc-rr',
                        label: t('mainMenu.requestsOfTheRevision'),
                        icon: 'file-import',
                        type: "route",
                        link: 'document-revision-request.index'
                    },
                    {
                        id: 'dc-dp',
                        label: t('mainMenu.distributionPoints'),
                        icon: 'location-dot',
                        type: "route",
                        link: 'document-distribution-point.index'
                    },
                    {
                        id: 'dc-ac',
                        label: t('mainMenu.actions'),
                        icon: 'arrow-right-arrow-left',
                        type: "route",
                        link: 'document-action.index'
                    }
                ]
            },
            {
                id: 'md',
                label: t('mainMenu.measurementDeviceManagement'),
                icon: 'pen-ruler',
                type: "dropdown",
                links: [
                    {
                        id: 'md-mdl',
                        label: t('mainMenu.measurementDevices'),
                        icon: 'ruler-combined',
                        type: "route",
                        link: 'measurement-device.index'
                    },
                    {
                        id: 'md-co',
                        label: t('mainMenu.calibrationTasks'),
                        icon: 'code-commit',
                        type: "route",
                        link: 'calibration-task.index'
                    },
                    {
                        id: 'md-ac',
                        label: t('mainMenu.actions'),
                        icon: 'arrow-right-arrow-left',
                        type: "route",
                        link: 'measurement-device-action.index'
                    }
                ]
            },
            {
                id: 'cr',
                label: t('mainMenu.certification'),
                icon: 'certificate',
                type: "dropdown",
                links: [
                    {
                        id: 'cr-au',
                        label: t('mainMenu.audits'),
                        icon: 'eye',
                        type: "route",
                        link: 'audit.index'
                    },
                    {
                        id: 'cr-cr',
                        label: t('mainMenu.certificates'),
                        icon: 'award',
                        type: "route",
                        link: 'certificate.index'
                    },
                    {
                        id: 'cr-st',
                        label: t('mainMenu.standards'),
                        icon: 'rectangle-list',
                        type: "route",
                        link: 'standard.index'
                    },
                ]
            },
            {
                id: 'ci',
                label: t('mainMenu.continuesImprovement'),
                icon: 'bolt',
                type: "dropdown",
                links: [
                    {
                        id: 'ci-cl',
                        label: t('mainMenu.improvementWorks'),
                        icon: 'seedling',
                        type: "route",
                        link: 'improvement-work.index'
                    }
                ]
            }
        ]
    });


    return {links}

};
