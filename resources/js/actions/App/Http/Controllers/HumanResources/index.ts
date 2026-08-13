import Employee from './Employee'
import JobDescription from './JobDescription'
import Education from './Education'

const HumanResources = {
    Employee: Object.assign(Employee, Employee),
    JobDescription: Object.assign(JobDescription, JobDescription),
    Education: Object.assign(Education, Education),
}

export default HumanResources