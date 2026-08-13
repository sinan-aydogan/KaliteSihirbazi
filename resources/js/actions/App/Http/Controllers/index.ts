import AccountController from './AccountController'
import ApiTokenController from './ApiTokenController'
import Setting from './Setting'
import User from './User'
import DepartmentController from './DepartmentController'
import Warehouse from './Warehouse'
import BusinessManagement from './BusinessManagement'
import VehicleController from './VehicleController'
import SupplierController from './SupplierController'
import HumanResources from './HumanResources'
import Document from './Document'
import MeasurementDevice from './MeasurementDevice'

const Controllers = {
    AccountController: Object.assign(AccountController, AccountController),
    ApiTokenController: Object.assign(ApiTokenController, ApiTokenController),
    Setting: Object.assign(Setting, Setting),
    User: Object.assign(User, User),
    DepartmentController: Object.assign(DepartmentController, DepartmentController),
    Warehouse: Object.assign(Warehouse, Warehouse),
    BusinessManagement: Object.assign(BusinessManagement, BusinessManagement),
    VehicleController: Object.assign(VehicleController, VehicleController),
    SupplierController: Object.assign(SupplierController, SupplierController),
    HumanResources: Object.assign(HumanResources, HumanResources),
    Document: Object.assign(Document, Document),
    MeasurementDevice: Object.assign(MeasurementDevice, MeasurementDevice),
}

export default Controllers