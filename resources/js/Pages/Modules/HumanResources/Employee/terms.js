// Multi-lang
import Translates from "./translates"

export default function (){

    const {tm} = Translates();
    const employmentTypes = [
        {
            id: 'fullTime',
            label: tm('term.fullTime')
        },
        {
            id: 'partTime',
            label: tm('term.partTime')
        },
        {
            id: 'seasonal',
            label: tm('term.seasonal')
        },
        {
            id: 'intern',
            label: tm('term.intern')
        },
        {
            id: 'contracted',
            label: tm('term.contracted')
        },
        {
            id: 'dailyWage',
            label: tm('term.dailyWage')
        },
        {
            id: 'handicappedStaff',
            label: tm('term.handicappedStaff')
        },
        {
            id: 'convictStaff',
            label: tm('term.convictStaff')
        }
    ]
    const bloodTypes = [
        {
            id: 'A+',
            label: 'A+'
        },
        {
            id: 'A-',
            label: 'A-'
        },
        {
            id: 'B+',
            label: 'B+'
        },
        {
            id: 'B-',
            label: 'B-'
        },
        {
            id: 'AB+',
            label: 'AB+'
        },
        {
            id: 'AB-',
            label: 'AB-'
        },
        {
            id: '0+',
            label: '0+'
        },
        {
            id: '0-',
            label: '0-'
        }
    ]
    const locationTypes = [
        {
            id: 'abroad',
            label: tm('term.abroad')
        },
        {
            id: 'domestic',
            label: tm('term.domestic')
        }
    ]
    const genders = [
        {
            id: 'female',
            label: tm('term.female')
        },
        {
            id: 'male',
            label: tm('term.male')
        },
        {
            id: 'other',
            label: tm('term.other')
        }
    ]
    const yesNoQuestions = [
        {
            id: true,
            label: tm('term.yes')
        },
        {
            id: false,
            label: tm('term.no')
        }
    ]
    const statuses = [
        {
            id: 'working',
            label: tm('term.working'),
            style: 'bg-emerald-500'
        },
        {
            id: 'left',
            label: tm('term.left'),
            style: 'bg-amber-500'
        },
        {
            id: 'retired',
            label: tm('term.retired'),
            style: 'bg-slate-500'
        },
        {
            id: 'fired',
            label: tm('term.fired'),
            style: 'bg-rose-500'
        }
    ]

    return {
        employmentTypes,
        bloodTypes,
        locationTypes,
        genders,
        yesNoQuestions,
        statuses
    }
}