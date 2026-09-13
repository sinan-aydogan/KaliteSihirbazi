import MeasurementDeviceController from './MeasurementDeviceController'
import MeasurementDeviceTypeController from './MeasurementDeviceTypeController'
import Calibration from './Calibration'
import Action from './Action'
import DeviceInfoController from './DeviceInfoController'
import MeasurementDeviceWorkflowController from './MeasurementDeviceWorkflowController'
const MeasurementDevice = {
    MeasurementDeviceController: Object.assign(MeasurementDeviceController, MeasurementDeviceController),
MeasurementDeviceTypeController: Object.assign(MeasurementDeviceTypeController, MeasurementDeviceTypeController),
Calibration: Object.assign(Calibration, Calibration),
Action: Object.assign(Action, Action),
DeviceInfoController: Object.assign(DeviceInfoController, DeviceInfoController),
MeasurementDeviceWorkflowController: Object.assign(MeasurementDeviceWorkflowController, MeasurementDeviceWorkflowController),
}

export default MeasurementDevice