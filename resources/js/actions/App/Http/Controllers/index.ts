import AccountController from './AccountController'
import ApiTokenController from './ApiTokenController'
import Setting from './Setting'
import Tag from './Tag'
import User from './User'
import DepartmentController from './DepartmentController'
import Warehouse from './Warehouse'
import BusinessManagement from './BusinessManagement'
import VehicleController from './VehicleController'
import SupplierController from './SupplierController'
import HumanResources from './HumanResources'
import Document from './Document'
import MeasurementDeviceSettingController from './MeasurementDeviceSettingController'
import MeasurementDevice from './MeasurementDevice'
import StandardController from './StandardController'
import CapaController from './CapaController'
import ProblemController from './ProblemController'
import AuditFirmController from './AuditFirmController'
import AuditSettingController from './AuditSettingController'
import AuditController from './AuditController'
import AuditTypeController from './AuditTypeController'
import AuditScopeController from './AuditScopeController'
import InternalAuditorController from './InternalAuditorController'
import AuditChecklistTemplateController from './AuditChecklistTemplateController'
import RiskSettingController from './RiskSettingController'
import RiskController from './RiskController'
import RiskCategoryController from './RiskCategoryController'
import RiskHazardClassController from './RiskHazardClassController'
import CustomerController from './CustomerController'
import CustomerComplaintSettingController from './CustomerComplaintSettingController'
import CustomerComplaintController from './CustomerComplaintController'
import ProblemSourceTypeController from './ProblemSourceTypeController'
import CapaSourceTypeController from './CapaSourceTypeController'
import ComplaintSourceTypeController from './ComplaintSourceTypeController'
import ComplaintSubjectController from './ComplaintSubjectController'
import DistributorController from './DistributorController'
import CompanyAccreditationController from './CompanyAccreditationController'
import CapaActionController from './CapaActionController'
import CapaWorkflowController from './CapaWorkflowController'
import ProblemWorkflowController from './ProblemWorkflowController'
import AuditWorkflowController from './AuditWorkflowController'
import AuditFirmAuditorController from './AuditFirmAuditorController'
import AuditChecklistQuestionController from './AuditChecklistQuestionController'
import AuditChecklistController from './AuditChecklistController'
import AuditChecklistAnswerController from './AuditChecklistAnswerController'
import AuditChecklistPrintController from './AuditChecklistPrintController'
import RiskWorkflowController from './RiskWorkflowController'
import RiskControlController from './RiskControlController'
import RiskReviewController from './RiskReviewController'
import CustomerComplaintWorkflowController from './CustomerComplaintWorkflowController'
const Controllers = {
    AccountController: Object.assign(AccountController, AccountController),
ApiTokenController: Object.assign(ApiTokenController, ApiTokenController),
Setting: Object.assign(Setting, Setting),
Tag: Object.assign(Tag, Tag),
User: Object.assign(User, User),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
Warehouse: Object.assign(Warehouse, Warehouse),
BusinessManagement: Object.assign(BusinessManagement, BusinessManagement),
VehicleController: Object.assign(VehicleController, VehicleController),
SupplierController: Object.assign(SupplierController, SupplierController),
HumanResources: Object.assign(HumanResources, HumanResources),
Document: Object.assign(Document, Document),
MeasurementDeviceSettingController: Object.assign(MeasurementDeviceSettingController, MeasurementDeviceSettingController),
MeasurementDevice: Object.assign(MeasurementDevice, MeasurementDevice),
StandardController: Object.assign(StandardController, StandardController),
CapaController: Object.assign(CapaController, CapaController),
ProblemController: Object.assign(ProblemController, ProblemController),
AuditFirmController: Object.assign(AuditFirmController, AuditFirmController),
AuditSettingController: Object.assign(AuditSettingController, AuditSettingController),
AuditController: Object.assign(AuditController, AuditController),
AuditTypeController: Object.assign(AuditTypeController, AuditTypeController),
AuditScopeController: Object.assign(AuditScopeController, AuditScopeController),
InternalAuditorController: Object.assign(InternalAuditorController, InternalAuditorController),
AuditChecklistTemplateController: Object.assign(AuditChecklistTemplateController, AuditChecklistTemplateController),
RiskSettingController: Object.assign(RiskSettingController, RiskSettingController),
RiskController: Object.assign(RiskController, RiskController),
RiskCategoryController: Object.assign(RiskCategoryController, RiskCategoryController),
RiskHazardClassController: Object.assign(RiskHazardClassController, RiskHazardClassController),
CustomerController: Object.assign(CustomerController, CustomerController),
CustomerComplaintSettingController: Object.assign(CustomerComplaintSettingController, CustomerComplaintSettingController),
CustomerComplaintController: Object.assign(CustomerComplaintController, CustomerComplaintController),
ProblemSourceTypeController: Object.assign(ProblemSourceTypeController, ProblemSourceTypeController),
CapaSourceTypeController: Object.assign(CapaSourceTypeController, CapaSourceTypeController),
ComplaintSourceTypeController: Object.assign(ComplaintSourceTypeController, ComplaintSourceTypeController),
ComplaintSubjectController: Object.assign(ComplaintSubjectController, ComplaintSubjectController),
DistributorController: Object.assign(DistributorController, DistributorController),
CompanyAccreditationController: Object.assign(CompanyAccreditationController, CompanyAccreditationController),
CapaActionController: Object.assign(CapaActionController, CapaActionController),
CapaWorkflowController: Object.assign(CapaWorkflowController, CapaWorkflowController),
ProblemWorkflowController: Object.assign(ProblemWorkflowController, ProblemWorkflowController),
AuditWorkflowController: Object.assign(AuditWorkflowController, AuditWorkflowController),
AuditFirmAuditorController: Object.assign(AuditFirmAuditorController, AuditFirmAuditorController),
AuditChecklistQuestionController: Object.assign(AuditChecklistQuestionController, AuditChecklistQuestionController),
AuditChecklistController: Object.assign(AuditChecklistController, AuditChecklistController),
AuditChecklistAnswerController: Object.assign(AuditChecklistAnswerController, AuditChecklistAnswerController),
AuditChecklistPrintController: Object.assign(AuditChecklistPrintController, AuditChecklistPrintController),
RiskWorkflowController: Object.assign(RiskWorkflowController, RiskWorkflowController),
RiskControlController: Object.assign(RiskControlController, RiskControlController),
RiskReviewController: Object.assign(RiskReviewController, RiskReviewController),
CustomerComplaintWorkflowController: Object.assign(CustomerComplaintWorkflowController, CustomerComplaintWorkflowController),
}

export default Controllers