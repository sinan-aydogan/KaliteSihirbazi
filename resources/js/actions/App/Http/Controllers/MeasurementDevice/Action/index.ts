import MeasurementDeviceActionController from './MeasurementDeviceActionController'
import MeasurementDeviceActionTypeController from './MeasurementDeviceActionTypeController'
import DeviceActionController from './DeviceActionController'
const Action = {
    MeasurementDeviceActionController: Object.assign(MeasurementDeviceActionController, MeasurementDeviceActionController),
MeasurementDeviceActionTypeController: Object.assign(MeasurementDeviceActionTypeController, MeasurementDeviceActionTypeController),
DeviceActionController: Object.assign(DeviceActionController, DeviceActionController),
}

export default Action