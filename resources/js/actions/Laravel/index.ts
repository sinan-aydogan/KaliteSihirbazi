import Fortify from './Fortify'
import Sanctum from './Sanctum'

const Laravel = {
    Fortify: Object.assign(Fortify, Fortify),
    Sanctum: Object.assign(Sanctum, Sanctum),
}

export default Laravel