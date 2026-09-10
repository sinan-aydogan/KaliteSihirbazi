<?php

return [
    /*
    |--------------------------------------------------------------------------
    | System Message Language Lines
    |--------------------------------------------------------------------------
    */

    'department' => [
        'created' => 'The new department named :department has been created successfully',
        'creation_failed' => 'The department named :department has been creation failed',
        'deleted' => 'The department named :department deleted successfully',
        'permanentDeleted' => 'The department named :department permanently deleted successfully',
        'restored' => 'The department named :department restored successfully',
        'updated' => 'The department named :department has been updated successfully',
        'update_failed' => 'The department named :department has been update failed',
    ],
    'vehicle' => [
        'created' => 'The new vehicle with licence plate :vehicle has been created successfully',
        'deleted' => 'The vehicle with licence plate :vehicle deleted successfully',
        'permanentDeleted' => 'The vehicle with licence plate :vehicle permanently deleted successfully',
        'restored' => 'The vehicle with licence plate :vehicle restored successfully',
        'updated' => 'The vehicle with licence plate :vehicle has been updated successfully'
    ],
    'jobDescription' => [
        'created' => 'The new job description named :jobDescription has been created successfully',
        'creation_failed' => 'The job description named :jobDescription has been creation failed',
        'deleted' => 'The job description named :jobDescription deleted successfully',
        'permanentDeleted' => 'The job description named :jobDescription permanently deleted successfully',
        'restored' => 'The job description named :jobDescription restored successfully',
        'updated' => 'The job description named :jobDescription has been updated successfully',
        'update_failed' => 'The job description named :jobDescription has been update failed',
    ],
    'jobDescriptionAssignment' => [
        'created' => ':employee assigned as a :jobDescription successfully',
        'deleted' => ':jobDescription of the assignment of :employee deleted successfully',
        'permanentDeleted' => ':jobDescription of the assignment of :employee permanent deleted successfully',
        'restored' => ':employee reassigned as a :jobDescription successfully',
        'updated' => ':jobDescription of the assignment of :employee updated successfuly'
    ],
    'employee' => [
        'created' => 'The new employee named :employee has been created successfully',
        'creation_failed' => 'The employee named :employee has been creation failed',
        'deleted' => 'The employee named :employee deleted successfully',
        'permanentDeleted' => 'The employee named :employee permanently deleted successfully',
        'restored' => 'The employee named :employee restored successfully',
        'updated' => 'The employee named :employee has been updated successfully',
    ],
    'warehouse' => [
        'created' => 'The new warehouse named :warehouse has been created successfully',
        'creation_failed' => 'The warehouse named :warehouse has been creation failed',
        'deleted' => 'The warehouse named :warehouse deleted successfully',
        'permanentDeleted' => 'The warehouse named :warehouse permanently deleted successfully',
        'restored' => 'The warehouse named :warehouse restored successfully',
        'updated' => 'The warehouse named :warehouse has been updated successfully',
        'update_failed' => 'The warehouse named :warehouse has been update failed'
    ],
    'warehouseType' => [
        'created' => 'The new warehouse type named :warehouseType has been created successfully',
        'deleted' => 'The warehouse type named :warehouseType deleted successfully',
        'permanentDeleted' => 'The warehouse type named :warehouseType permanently deleted successfully',
        'restored' => 'The warehouse type named :warehouseType restored successfully',
        'updated' => 'The warehouse type named :warehouseType has been updated successfully'
    ],
    'measurementDevice' => [
        'created' => ':measurementDeviceCode coded new :measurementDeviceType has been created successfully',
        'deleted' => ':measurementDeviceCode coded :measurementDeviceType deleted successfully',
        'permanentDeleted' => ':measurementDeviceCode coded :measurementDeviceType permanently deleted successfully',
        'restored' => ':measurementDeviceCode coded :measurementDeviceType restored successfully',
        'updated' => ':measurementDeviceCode coded :measurementDeviceType has been updated successfully'
    ],
    'measurementDeviceType' => [
        'created' => 'The new device type named :measurementDeviceType has been created successfully',
        'deleted' => 'The device type named :measurementDeviceType deleted successfully',
        'permanentDeleted' => 'The device type named :measurementDeviceType permanently deleted successfully',
        'restored' => 'The device type named :measurementDeviceType restored successfully',
        'updated' => 'The device type named :measurementDeviceType has been updated successfully'
    ],
    'measurementDeviceCalibration' => [
        'created' => 'The calibration task code #:measurementDeviceCalibration has been created successfully',
        'deleted' => 'The calibration task code #:measurementDeviceCalibration  deleted successfully',
        'permanentDeleted' => 'The calibration task code #:measurementDeviceCalibration  permanently deleted successfully',
        'restored' => 'The calibration task code #:measurementDeviceCalibration  restored successfully',
        'updated' => 'The calibration task code #:measurementDeviceCalibration  has been updated successfully'
    ],
    'document' => [
        'created' => 'The document named :document has been created successfully',
        'deleted' => 'The document named :document deleted successfully',
        'permanentDeleted' => 'The document named :document permanently deleted successfully',
        'restored' => 'The document named :document restored successfully',
        'updated' => 'The document named :document has been updated successfully',
        'cancelled' => 'The document named :document has been cancelled.'
    ],
    'documentType' => [
        'created' => 'The document type named :documentType has been created successfully',
        'deleted' => 'The document type named :documentType deleted successfully',
        'deletedError' => 'The document type named :documentType can not be deleted because it has attached documents in the system',
        'permanentDeleted' => 'The document type named :documentType permanently deleted successfully',
        'restored' => 'The document type named :documentType restored successfully',
        'updated' => 'The document type named :documentType has been updated successfully'
    ],
    'distributionPoint' => [
        'created' => 'The distribution point named :distributionPoint has been created successfully',
        'deleted' => 'The distribution point named :distributionPoint deleted successfully',
        'deletedError' => 'The distribution point named :distributionPoint can not be deleted because it has attached documents in the system',
        'permanentDeleted' => 'The distribution point named :distributionPoint permanently deleted successfully',
        'restored' => 'The distribution point named :distributionPoint restored successfully',
        'updated' => 'The distribution point named :distributionPoint has been updated successfully'
    ],
    'documentSettings' => [
        'updated' => 'The document settings has been updated successfully.',
        'tagsUpdated' => 'The tag types shown in the document module have been updated.'
    ],
    'tagType' => [
        'created' => 'Tag type created.',
        'updated' => 'Tag type updated.',
        'deleted' => 'Tag type deleted.'
    ],
    'tag' => [
        'created' => 'Tag created.',
        'deleted' => 'Tag deleted.'
    ],
    'documentTypeAuthority' => [
        'grantedToUsers' => 'Authority granted to :count user(s).',
        'grantedToDepartment' => 'Authority granted to :count department member(s).',
        'revoked' => 'Authority revoked.'
    ],
    'documentVersion' => [
        'created' => 'A new document revision has been uploaded.',
        'submitted' => 'The document version has been submitted for review.',
        'reviewed' => 'The document version has been reviewed.',
        'approved' => 'The document version has been approved and published.',
        'rejected' => 'The document version has been rejected.',
        'acknowledged' => 'The document has been marked as read.'
    ],
    'documentRevisionRequest' => [
        'created' => 'Revision request created.',
        'accepted' => 'Revision request accepted.',
        'rejected' => 'Revision request rejected.'
    ],
    'timeSettings' => [
        'updated' => 'The time settings have been updated successfully.'
    ],
    'educationSettings' => [
        'updated' => 'The education module settings have been updated successfully.'
    ],
    'standard' => [
        'created' => 'The standard named :standard has been created successfully',
        'updated' => 'The standard named :standard has been updated successfully',
        'deleted' => 'The standard named :standard deleted successfully',
        'deletedError' => 'The standard named :standard cannot be deleted because it has accreditation records'
    ],
    'companyAccreditation' => [
        'created' => 'Accreditation record created.',
        'updated' => 'Accreditation record updated.',
        'deleted' => 'Accreditation record deleted.'
    ],
    'capa' => [
        'created' => 'CAPA :capa created.',
        'updated' => 'CAPA :capa updated.',
        'deleted' => 'CAPA :capa deleted.',
        'deletedError' => 'CAPA :capa cannot be deleted because it has actions defined.',
        'submittedForVerification' => 'CAPA submitted for verification.',
        'verified' => 'CAPA verification recorded.',
        'reopened' => 'CAPA reopened.'
    ],
    'capaAction' => [
        'created' => 'Action created.',
        'updated' => 'Action updated.',
        'deleted' => 'Action deleted.',
        'started' => 'Action started.',
        'completed' => 'Action completed.'
    ],
    'problem' => [
        'created' => 'Problem :problem created.',
        'updated' => 'Problem :problem updated.',
        'deleted' => 'Problem :problem deleted.',
        'deletedError' => 'Problem :problem cannot be deleted because it has CAPAs raised against it.',
        'immediateActionRecorded' => 'Immediate action recorded.',
        'markedUnderReview' => 'Problem marked under review.',
        'closedWithoutCapa' => 'Problem closed without a CAPA.',
        'closed' => 'Problem closed.'
    ],
    'auditFirm' => [
        'created' => 'Audit firm :auditFirm created.',
        'updated' => 'Audit firm :auditFirm updated.',
        'deleted' => 'Audit firm :auditFirm deleted.',
        'deletedError' => 'Audit firm :auditFirm cannot be deleted because it has audits recorded against it.'
    ],
    'audit' => [
        'created' => 'Audit :audit created.',
        'updated' => 'Audit :audit updated.',
        'deleted' => 'Audit :audit deleted.',
        'deletedError' => 'Audit :audit cannot be deleted because it has findings recorded against it.',
        'started' => 'Audit started.',
        'completed' => 'Audit completed.',
        'cancelled' => 'Audit cancelled.'
    ],
    'auditType' => [
        'created' => 'Audit type created.',
        'updated' => 'Audit type updated.',
        'deleted' => 'Audit type deleted.',
        'deletedError' => 'This audit type cannot be deleted because it has audits recorded against it.',
        'deletedErrorProtected' => 'This system default audit type cannot be deleted.'
    ],
    'auditScope' => [
        'created' => 'Audit scope created.',
        'updated' => 'Audit scope updated.',
        'deleted' => 'Audit scope deleted.',
        'deletedError' => 'This audit scope cannot be deleted because it has audits recorded against it.',
        'deletedErrorProtected' => 'This system default audit scope cannot be deleted.'
    ],
    'internalAuditor' => [
        'created' => 'Internal auditor added.',
        'updated' => 'Internal auditor updated.',
        'deleted' => 'Internal auditor removed.'
    ],
    'auditChecklistTemplate' => [
        'created' => 'Checklist template created.',
        'updated' => 'Checklist template updated.',
        'deleted' => 'Checklist template deleted.'
    ],
    'auditChecklistQuestion' => [
        'created' => 'Question added.',
        'updated' => 'Question updated.',
        'deleted' => 'Question deleted.'
    ],
    'auditChecklist' => [
        'attached' => 'Checklist attached to the audit.'
    ],
    'auditChecklistAnswer' => [
        'saved' => 'Answer saved.'
    ],
    'auditSettings' => [
        'updated' => 'Audit module settings updated.'
    ],
    'auditFirmAuditor' => [
        'created' => 'Auditor added.',
        'updated' => 'Auditor updated.',
        'deleted' => 'Auditor deleted.',
        'mediaDeleted' => 'Document deleted.'
    ],
    'vehicleType' => [
        'created' => 'The new vehicle type named :vehicleType has been created successfully',
        'deleted' => 'The vehicle type named :vehicleType deleted successfully',
        'permanentDeleted' => 'The vehicle type named :vehicleType permanently deleted successfully',
        'restored' => 'The vehicle type named :vehicleType restored successfully',
        'updated' => 'The vehicle type named :vehicleType has been updated successfully'
    ],
    'vehicleStatus' => [
        'created' => 'The new vehicle status named :vehicleStatus has been created successfully',
        'deleted' => 'The vehicle status named :vehicleStatus deleted successfully',
        'permanentDeleted' => 'The vehicle status named :vehicleStatus permanently deleted successfully',
        'restored' => 'The vehicle status named :vehicleStatus restored successfully',
        'updated' => 'The vehicle status named :vehicleStatus has been updated successfully'
    ],
    'educationPlan' => [
        'created' => 'The new education plan named :educationPlan has been created successfully',
        'deleted' => 'The education plan named :educationPlan deleted successfully',
        'permanentDeleted' => 'The education plan named :educationPlan permanently deleted successfully',
        'restored' => 'The education plan named :educationPlan restored successfully',
        'updated' => 'The education plan named :educationPlan has been updated successfully'
    ],
    'educationType' => [
        'created' => 'The new education type named :educationType has been created successfully',
        'deleted' => 'The education type named :educationType deleted successfully',
        'permanentDeleted' => 'The education type named :educationType permanently deleted successfully',
        'restored' => 'The education type named :educationType restored successfully',
        'updated' => 'The education type named :educationType has been updated successfully'
    ],
    'educationInstructor' => [
        'created' => 'The new education instructor named :educationInstructor has been created successfully',
        'deleted' => 'The education instructor named :educationInstructor deleted successfully',
        'permanentDeleted' => 'The education instructor named :educationInstructor permanently deleted successfully',
        'restored' => 'The education instructor named :educationInstructor restored successfully',
        'updated' => 'The education instructor named :educationInstructor has been updated successfully',
        'mediaDeleted' => 'Media file has been deleted successfully'
    ],
    'education' => [
        'created' => 'The new education named :education has been created successfully',
        'deleted' => 'The education named :education deleted successfully',
        'permanentDeleted' => 'The education named :education permanently deleted successfully',
        'restored' => 'The education named :education restored successfully',
        'updated' => 'The education named :education has been updated successfully',
        'participantAdded' => 'Participant has been added to the education successfully',
        'participantUpdated' => 'Participant information has been updated successfully',
        'participantRemoved' => 'Participant has been removed from the education successfully',
        'mediaDeleted' => 'Media file has been deleted successfully'
    ],
    'supplier' => [
        'created' => 'The new supplier named :supplier has been created successfully',
        'creation_failed' => 'The supplier named :supplier has been creation failed',
        'deleted' => 'The supplier named :supplier deleted successfully',
        'deletedError' => 'The supplier named :supplier cannot be deleted because it has complaints on record.',
        'delete_failed' => 'The supplier named :supplier has been delete failed',
        'permanentDeleted' => 'The supplier named :supplier permanently deleted successfully',
        'restored' => 'The supplier named :supplier restored successfully',
        'updated' => 'The supplier named :supplier has been updated successfully',
        'update_failed' => 'The supplier named :supplier has been update failed',
    ],
    'distributor' => [
        'created' => 'Distributor :distributor created.',
        'updated' => 'Distributor :distributor updated.',
        'deleted' => 'Distributor :distributor deleted.',
        'deletedError' => 'Distributor :distributor cannot be deleted because it has complaints on record.',
    ],
    'risk' => [
        'created' => 'Risk :risk created.',
        'updated' => 'Risk :risk updated.',
        'deleted' => 'Risk :risk deleted.',
        'deletedError' => 'Risk :risk cannot be deleted because it has nonconformities raised against it.',
        'closed' => 'Risk :risk closed.'
    ],
    'riskCategory' => [
        'created' => 'Risk category created.',
        'updated' => 'Risk category updated.',
        'deleted' => 'Risk category deleted.',
        'deletedError' => 'This risk category cannot be deleted because it has risks assigned to it.',
        'deletedErrorProtected' => 'This system-default risk category cannot be deleted.'
    ],
    'riskHazardClass' => [
        'created' => 'Hazard class created.',
        'updated' => 'Hazard class updated.',
        'deleted' => 'Hazard class deleted.',
        'deletedError' => 'This hazard class cannot be deleted because it has risks assigned to it.',
        'deletedErrorProtected' => 'This system-default hazard class cannot be deleted.'
    ],
    'riskControl' => [
        'created' => 'Control added.',
        'updated' => 'Control updated.',
        'deleted' => 'Control deleted.'
    ],
    'riskReview' => [
        'created' => 'Review recorded.',
        'completed' => 'Review completed.'
    ],
    'riskSettings' => [
        'updated' => 'Risk module settings updated.'
    ],
    'customer' => [
        'created' => 'Customer created.',
        'updated' => 'Customer updated.',
        'deleted' => 'Customer deleted.',
        'deletedError' => 'This customer cannot be deleted because it has complaints on record.',
    ],
    'customerComplaint' => [
        'created' => 'Complaint :complaint recorded.',
        'updated' => 'Complaint :complaint updated.',
        'deleted' => 'Complaint :complaint deleted.',
        'deletedError' => 'Complaint :complaint cannot be deleted because it has root-cause/CAPA records raised against it.',
        'acknowledged' => 'First response recorded for complaint :complaint, investigation started.',
        'resolved' => 'Complaint :complaint marked as resolved.',
        'closed' => 'Complaint :complaint closed and the customer notified.',
        'reopened' => 'Complaint :complaint reopened.',
    ],
    'customerComplaintSettings' => [
        'updated' => 'Customer Complaints module settings updated.'
    ],
    'problemSourceType' => [
        'created' => 'Source type created.',
        'updated' => 'Source type updated.',
        'deleted' => 'Source type deleted.',
        'deletedError' => 'This source type cannot be deleted because it has nonconformities assigned to it.',
        'deletedErrorProtected' => 'This system-default source type cannot be deleted.'
    ],
    'capaSourceType' => [
        'created' => 'Source type created.',
        'updated' => 'Source type updated.',
        'deleted' => 'Source type deleted.',
        'deletedError' => 'This source type cannot be deleted because it has CAPA records assigned to it.',
        'deletedErrorProtected' => 'This system-default source type cannot be deleted.'
    ],
    'complaintSourceType' => [
        'created' => 'Complaint source created.',
        'updated' => 'Complaint source updated.',
        'deleted' => 'Complaint source deleted.',
        'deletedError' => 'This complaint source cannot be deleted because it has complaints assigned to it.',
        'deletedErrorProtected' => 'This system-default complaint source cannot be deleted.'
    ],
    'complaintSubject' => [
        'created' => 'Complaint subject created.',
        'updated' => 'Complaint subject updated.',
        'deleted' => 'Complaint subject deleted.',
        'deletedError' => 'This complaint subject cannot be deleted because it has complaints assigned to it.',
        'deletedErrorProtected' => 'This system-default complaint subject cannot be deleted.'
    ],
];
