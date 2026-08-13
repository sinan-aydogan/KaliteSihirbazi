import WarehouseSettingController from './WarehouseSettingController'
import WarehouseController from './WarehouseController'
import WarehouseTypeController from './WarehouseTypeController'

const Warehouse = {
    WarehouseSettingController: Object.assign(WarehouseSettingController, WarehouseSettingController),
    WarehouseController: Object.assign(WarehouseController, WarehouseController),
    WarehouseTypeController: Object.assign(WarehouseTypeController, WarehouseTypeController),
}

export default Warehouse