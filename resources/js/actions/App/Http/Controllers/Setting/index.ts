import GlobalSettingController from './GlobalSettingController'
import ModuleController from './ModuleController'
import PropertyController from './PropertyController'
import PropertyTypeController from './PropertyTypeController'
import RoleController from './RoleController'
import UserManagementController from './UserManagementController'
const Setting = {
    GlobalSettingController: Object.assign(GlobalSettingController, GlobalSettingController),
ModuleController: Object.assign(ModuleController, ModuleController),
PropertyController: Object.assign(PropertyController, PropertyController),
PropertyTypeController: Object.assign(PropertyTypeController, PropertyTypeController),
RoleController: Object.assign(RoleController, RoleController),
UserManagementController: Object.assign(UserManagementController, UserManagementController),
}

export default Setting