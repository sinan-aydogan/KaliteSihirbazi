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
                        link: 'vehicle.index'
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
                    /*Distributors*/
                    {
                        id: 'bm-dis',
                        label: t('mainMenu.distributors'),
                        icon: 'truck',
                        type: "route",
                        link: 'distributor.index'
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
                        id: 'hr-edu-plan',
                        label: t('mainMenu.educationPlaning'),
                        icon: 'timeline',
                        type: "route",
                        link: 'education-plan.index'
                    },
                    /*Education*/
                    {
                        id: 'hr-edu',
                        label: t('mainMenu.education'),
                        icon: 'chalkboard-user',
                        type: "route",
                        link: 'education.index'
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
            /*Risk Management*/
            {
                id: 'risk',
                label: t('mainMenu.riskManagement'),
                icon: 'shield',
                type: "dropdown",
                links: [
                    /*Risks*/
                    {
                        id: 'risk-rk',
                        label: t('mainMenu.risks'),
                        icon: 'triangle-exclamation',
                        type: "route",
                        link: 'risk.index'
                    },
                    /*Risk Categories*/
                    {
                        id: 'risk-cat',
                        label: t('mainMenu.riskCategories'),
                        icon: 'layer-group',
                        type: "route",
                        link: 'risk-category.index'
                    },
                    /*Risk Hazard Classes*/
                    {
                        id: 'risk-hc',
                        label: t('mainMenu.riskHazardClasses'),
                        icon: 'radiation',
                        type: "route",
                        link: 'risk-hazard-class.index'
                    }
                ]
            },
            /*Customer Complaints*/
            {
                id: 'cc',
                label: t('mainMenu.customerComplaintManagement'),
                icon: 'comment-dots',
                type: "dropdown",
                links: [
                    /*Complaints*/
                    {
                        id: 'cc-complaints',
                        label: t('mainMenu.customerComplaints'),
                        icon: 'comment-dots',
                        type: "route",
                        link: 'customer-complaint.index'
                    },
                    /*Customers*/
                    {
                        id: 'cc-customers',
                        label: t('mainMenu.customers'),
                        icon: 'handshake',
                        type: "route",
                        link: 'customer.index'
                    },
                    /*Analytics*/
                    {
                        id: 'cc-analytics',
                        label: t('mainMenu.customerComplaintAnalytics'),
                        icon: 'arrow-trend-up',
                        type: "route",
                        link: 'customer-complaint-analytics.index'
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
                    /*CAPA Records*/
                    {
                        id: 'capa-ac',
                        label: t('mainMenu.capaRecords'),
                        icon: 'list-check',
                        type: "route",
                        link: 'capa.index'
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
                        link: 'distribution-point.index'
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
                    /*Calibration Orders*/
                    {
                        id: 'md-ct',
                        label: t('mainMenu.calibrationTasks'),
                        icon: 'clipboard-check',
                        type: "route",
                        link: 'measurement-device-calibration.index'
                    },
                    /*Calibration Firms*/
                    {
                        id: 'md-cf',
                        label: t('mainMenu.calibrationFirms'),
                        icon: 'building',
                        type: "route",
                        link: 'calibration-firm.index'
                    },
                    /*Calibration Technicians*/
                    {
                        id: 'md-cp',
                        label: t('mainMenu.calibrationTechnicians'),
                        icon: 'user-gear',
                        type: "route",
                        link: 'calibration-technician.index'
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
                    /*Internal Auditors*/
                    {
                        id: 'cr-ia',
                        label: t('mainMenu.internalAuditors'),
                        icon: 'user-group',
                        type: "route",
                        link: 'internal-auditor.index'
                    },
                    /*Checklist Templates*/
                    {
                        id: 'cr-ct',
                        label: t('mainMenu.checklistTemplates'),
                        icon: 'list-check',
                        type: "route",
                        link: 'audit-checklist-template.index'
                    },
                    /*Audit Types*/
                    {
                        id: 'cr-at',
                        label: t('mainMenu.auditTypes'),
                        icon: 'sitemap',
                        type: "route",
                        link: 'audit-type.index'
                    },
                    /*Audit Scopes*/
                    {
                        id: 'cr-as',
                        label: t('mainMenu.auditScopes'),
                        icon: 'diagram-project',
                        type: "route",
                        link: 'audit-scope.index'
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
