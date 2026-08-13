import DocumentSettingController from './DocumentSettingController'
import DocumentController from './DocumentController'
import DocumentTypeController from './DocumentTypeController'
import DistributionPointController from './DistributionPointController'

const Document = {
    DocumentSettingController: Object.assign(DocumentSettingController, DocumentSettingController),
    DocumentController: Object.assign(DocumentController, DocumentController),
    DocumentTypeController: Object.assign(DocumentTypeController, DocumentTypeController),
    DistributionPointController: Object.assign(DistributionPointController, DistributionPointController),
}

export default Document