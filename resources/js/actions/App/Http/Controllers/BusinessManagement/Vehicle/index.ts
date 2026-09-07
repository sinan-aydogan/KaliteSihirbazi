import VehicleSettingController from './VehicleSettingController'
import VehicleTypeController from './VehicleTypeController'
import VehicleStatusController from './VehicleStatusController'
const Vehicle = {
    VehicleSettingController: Object.assign(VehicleSettingController, VehicleSettingController),
VehicleTypeController: Object.assign(VehicleTypeController, VehicleTypeController),
VehicleStatusController: Object.assign(VehicleStatusController, VehicleStatusController),
}

export default Vehicle