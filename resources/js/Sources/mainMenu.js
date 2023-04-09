/* Multi-language */
import {useI18n} from "vue-i18n";
import {computed} from "vue";

export default function ({roles, permissions}) {

    const {t} = useI18n()

    /*Main Menu Links*/
    const links = computed(() => {
        return [
            /*Business Management*/
            {
                id: 'bm',
                label: t('mainMenu.businessManagement'),
                icon: 'building',
                type: "dropdown",
                links: [
                    /*Departments*/
                    {
                        id: 'bm-dp',
                        label: t('mainMenu.departments'),
                        icon: 'sitemap',
                        type: "route",
                        link: 'department.index'
                    },
                    /*Warehouses*/
                    {
                        id: 'bm-wh',
                        label: t('mainMenu.warehouses'),
                        icon: 'warehouse',
                        type: "route",
                        link: 'warehouse.index'
                    },
                    /*Vehicles*/
                    {
                        id: 'bm-vh',
                        label: t('mainMenu.vehicles'),
                        icon: 'van-shuttle',
                        type: "route",
                        link: 'vehicles.index'
                    },
                    /*Devices*/
                    {
                        id: 'bm-dv',
                        label: t('mainMenu.devices'),
                        icon: 'desktop',
                        type: "route",
                        link: 'device.index'
                    },
                    /*Machines*/
                    {
                        id: 'bm-mc',
                        label: t('mainMenu.machines'),
                        icon: 'gears',
                        type: "route",
                        link: 'machine.index'
                    },
                    /*Customers*/
                    {
                        id: 'bm-cus',
                        label: t('mainMenu.customers'),
                        icon: 'handshake',
                        type: "route",
                        link: 'customer.index'
                    },
                    /*Suppliers*/
                    {
                        id: 'bm-sup',
                        label: t('mainMenu.suppliers'),
                        icon: 'store',
                        type: "route",
                        link: 'supplier.index'
                    },
                    /*Audit Firms*/
                    {
                        id: 'bm-aud',
                        label: t('mainMenu.auditFirms'),
                        icon: 'landmark',
                        type: "route",
                        link: 'audit-firm.index'
                    }
                ]
            },
            /*Human Resources*/
            {
                id: 'hr',
                label: t('mainMenu.humanResources'),
                icon: 'user-group',
                type: "dropdown",
                links: [
                    /*Employees*/
                    {
                        id: 'hr-st',
                        label: t('mainMenu.employees'),
                        icon: 'users',
                        type: "route",
                        link: 'employee.index'
                    },
                    /*Job Descriptions*/
                    {
                        id: 'hr-jd',
                        label: t('mainMenu.jobDescriptions'),
                        icon: 'list-check',
                        type: "route",
                        link: 'job-description.index'
                    },
                    /*Education Planning*/
                    {
                        id: 'hr-edu',
                        label: t('mainMenu.educationPlaning'),
                        icon: 'chalkboard-user',
                        type: "route",
                        link: 'education-plan.index'
                    },
                    /*Leave Management*/
                    {
                        id: 'hr-tto',
                        label: t('mainMenu.takeTimeOff'),
                        icon: 'person-running',
                        type: "route",
                        link: 'take-time-off.index'
                    }
                ]
            },
            /*CAPA System*/
            {
                id: 'capa',
                label: t('mainMenu.capaSystem'),
                icon: 'highlighter',
                type: "dropdown",
                links: [
                    /*Problems*/
                    {
                        id: 'capa-pr',
                        label: t('mainMenu.problems'),
                        icon: 'bug',
                        type: "route",
                        link: 'problem.index'
                    },
                    /*Actions*/
                    {
                        id: 'capa-ac',
                        label: t('mainMenu.actions'),
                        icon: 'arrow-right-arrow-left',
                        type: "route",
                        link: 'capa-action.index'
                    }
                ]
            },
            /*Production Management*/
            {
                id: 'pr',
                label: t('mainMenu.productionManagement'),
                icon: 'shapes',
                type: "dropdown",
                links: [
                    /*Products*/
                    {
                        id: 'pr-pr',
                        label: t('mainMenu.products'),
                        icon: 'boxes',
                        type: "route",
                        link: 'product.index'
                    },
                    /*Raw Materials*/
                    {
                        id: 'pr-rm',
                        label: t('mainMenu.rawMaterials'),
                        icon: 'droplet',
                        type: "route",
                        link: 'raw-material.index'
                    },
                    /*Consumables Materials*/
                    {
                        id: 'pr-cm',
                        label: t('mainMenu.consumableMaterials'),
                        icon: 'diagram-predecessor',
                        type: "route",
                        link: 'consumable-material.index'
                    },
                    /*Product Trees*/
                    {
                        id: 'pr-pt',
                        label: t('mainMenu.productTrees'),
                        icon: 'code-pull-request',
                        type: "route",
                        link: 'product-tree.index'
                    }
                ]
            },
            /*Documentation Management*/
            {
                id: 'dc',
                label: t('mainMenu.documentation'),
                icon: 'file-lines',
                type: "dropdown",
                links: [
                    /*Documents*/
                    {
                        id: 'dc-dl',
                        label: t('mainMenu.documents'),
                        icon: 'folder-tree',
                        type: "route",
                        link: 'document.index'
                    },
                    /*Revision Requests*/
                    {
                        id: 'dc-rr',
                        label: t('mainMenu.requestsOfTheRevision'),
                        icon: 'file-import',
                        type: "route",
                        link: 'document-revision-request.index'
                    },
                    /*Distribution Points*/
                    {
                        id: 'dc-dp',
                        label: t('mainMenu.distributionPoints'),
                        icon: 'location-dot',
                        type: "route",
                        link: 'document-distribution-point.index'
                    },
                    /*Actions*/
                    {
                        id: 'dc-ac',
                        label: t('mainMenu.actions'),
                        icon: 'arrow-right-arrow-left',
                        type: "route",
                        link: 'document-action.index'
                    }
                ]
            },
            /*Measurement Devices Management*/
            {
                id: 'md',
                label: t('mainMenu.measurementDeviceManagement'),
                icon: 'pen-ruler',
                type: "dropdown",
                links: [
                    /*Devices*/
                    {
                        id: 'md-mdl',
                        label: t('mainMenu.measurementDevices'),
                        icon: 'ruler-combined',
                        type: "route",
                        link: 'measurement-device.index'
                    },
                    /*Calibration Tasks*/
                    {
                        id: 'md-co',
                        label: t('mainMenu.calibrationTasks'),
                        icon: 'code-commit',
                        type: "route",
                        link: 'measurement-device-calibration.index'
                    },
                    /*Actions*/
                    {
                        id: 'md-ac',
                        label: t('mainMenu.actions'),
                        icon: 'arrow-right-arrow-left',
                        type: "route",
                        link: 'measurement-device-action.index'
                    }
                ]
            },
            /*Certification Management*/
            {
                id: 'cr',
                label: t('mainMenu.certification'),
                icon: 'certificate',
                type: "dropdown",
                links: [
                    /*Audits*/
                    {
                        id: 'cr-au',
                        label: t('mainMenu.audits'),
                        icon: 'eye',
                        type: "route",
                        link: 'audit.index'
                    },
                    /*Certificates*/
                    {
                        id: 'cr-cr',
                        label: t('mainMenu.certificates'),
                        icon: 'award',
                        type: "route",
                        link: 'certificate.index'
                    },
                    /*Standards*/
                    {
                        id: 'cr-st',
                        label: t('mainMenu.standards'),
                        icon: 'rectangle-list',
                        type: "route",
                        link: 'standard.index'
                    },
                ]
            },
            /*Continues Improvement Works*/
            {
                id: 'ci',
                label: t('mainMenu.continuesImprovement'),
                icon: 'bolt',
                type: "dropdown",
                links: [
                    /*Works*/
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
