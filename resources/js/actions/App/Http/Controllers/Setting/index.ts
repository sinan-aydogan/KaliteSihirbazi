import GlobalSettingController from './GlobalSettingController'
import ModuleController from './ModuleController'
import PropertyController from './PropertyController'
import PropertyTypeController from './PropertyTypeController'

const Setting = {
    GlobalSettingController: Object.assign(GlobalSettingController, GlobalSettingController),
    ModuleController: Object.assign(ModuleController, ModuleController),
    PropertyController: Object.assign(PropertyController, PropertyController),
    PropertyTypeController: Object.assign(PropertyTypeController, PropertyTypeController),
}

export default Setting