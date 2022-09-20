// Multi-lang
import Translates from "./translates"

export default function (){

    const {tm} = Translates();
    const staffTypes = [
        {
            id: 'white',
            label: tm('term.whiteCollar')
        },
        {
            id: 'blue',
            label: tm('term.blueCollar')
        }
    ];
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

    return {
        staffTypes,
        locationTypes
    }
}