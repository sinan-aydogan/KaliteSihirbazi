import JobDescriptionController from './JobDescriptionController'
import JobDescriptionAssignmentController from './JobDescriptionAssignmentController'

const JobDescription = {
    JobDescriptionController: Object.assign(JobDescriptionController, JobDescriptionController),
    JobDescriptionAssignmentController: Object.assign(JobDescriptionAssignmentController, JobDescriptionAssignmentController),
}

export default JobDescription