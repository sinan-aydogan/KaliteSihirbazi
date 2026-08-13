import EmployeeController from './EmployeeController'
import PersonalInfo from './PersonalInfo'
import EmploymentInfo from './EmploymentInfo'
import JobAssignmentController from './JobAssignmentController'
import TimeOffController from './TimeOffController'
import DebtController from './DebtController'
import EducationController from './EducationController'

const Employee = {
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    PersonalInfo: Object.assign(PersonalInfo, PersonalInfo),
    EmploymentInfo: Object.assign(EmploymentInfo, EmploymentInfo),
    JobAssignmentController: Object.assign(JobAssignmentController, JobAssignmentController),
    TimeOffController: Object.assign(TimeOffController, TimeOffController),
    DebtController: Object.assign(DebtController, DebtController),
    EducationController: Object.assign(EducationController, EducationController),
}

export default Employee