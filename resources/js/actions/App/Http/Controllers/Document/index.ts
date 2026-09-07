import DocumentSettingController from './DocumentSettingController'
import DocumentController from './DocumentController'
import DocumentTypeController from './DocumentTypeController'
import DistributionPointController from './DistributionPointController'
import DocumentTypeAuthorityController from './DocumentTypeAuthorityController'
import DocumentTagSettingController from './DocumentTagSettingController'
import DocumentRevisionRequestController from './DocumentRevisionRequestController'
import DocumentActionController from './DocumentActionController'
import DocumentVersionController from './DocumentVersionController'
import DocumentVersionWorkflowController from './DocumentVersionWorkflowController'
const Document = {
    DocumentSettingController: Object.assign(DocumentSettingController, DocumentSettingController),
DocumentController: Object.assign(DocumentController, DocumentController),
DocumentTypeController: Object.assign(DocumentTypeController, DocumentTypeController),
DistributionPointController: Object.assign(DistributionPointController, DistributionPointController),
DocumentTypeAuthorityController: Object.assign(DocumentTypeAuthorityController, DocumentTypeAuthorityController),
DocumentTagSettingController: Object.assign(DocumentTagSettingController, DocumentTagSettingController),
DocumentRevisionRequestController: Object.assign(DocumentRevisionRequestController, DocumentRevisionRequestController),
DocumentActionController: Object.assign(DocumentActionController, DocumentActionController),
DocumentVersionController: Object.assign(DocumentVersionController, DocumentVersionController),
DocumentVersionWorkflowController: Object.assign(DocumentVersionWorkflowController, DocumentVersionWorkflowController),
}

export default Document