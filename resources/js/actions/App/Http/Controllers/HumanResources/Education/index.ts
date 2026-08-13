import EducationSettingController from './EducationSettingController'
import EducationController from './EducationController'
import EducationPlanController from './EducationPlanController'
import EducationTypeController from './EducationTypeController'
import EducationInstructorController from './EducationInstructorController'

const Education = {
    EducationSettingController: Object.assign(EducationSettingController, EducationSettingController),
    EducationController: Object.assign(EducationController, EducationController),
    EducationPlanController: Object.assign(EducationPlanController, EducationPlanController),
    EducationTypeController: Object.assign(EducationTypeController, EducationTypeController),
    EducationInstructorController: Object.assign(EducationInstructorController, EducationInstructorController),
}

export default Education