import { DetailsPageBase } from '../../basePages/DetailsPageBase';
import { TextField } from '../../components/fields/TextField';
import { ScrField } from '../../components/fields/ScrField';
import { NumericField } from '../../components/fields/NumericField';
import { DateField } from '../../components/fields/DateField';
import { FileField } from '../../components/fields/FileField';
import { McrField } from '../../components/fields/McrField';
import { ApprovalField } from '../../components/fields/ApprovalField';
import { LabelField } from '../../components/fields/LabelField';
import { CheckboxField } from '../../components/fields/CheckboxField';
import { RcrField } from '../../components/fields/RcrField';
import { ChecklistField } from '../../components/fields/ChecklistField';
import { ChoiceField } from '../../components/fields/ChoiceField';
import { AutoNumField } from '../../components/fields/AutoNumField';
import { VideoField } from '../../components/fields/VideoField';
import { CommandField } from '../../components/fields/CommandField';
import { DisplayListField } from '../../components/fields/DisplayListField';
import { FrequencyField } from '../../components/fields/FrequencyField';
import { PictureField } from '../../components/fields/PictureField';


export class Nonconformances_p extends DetailsPageBase {
  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonconformanceNumber() {

    const { root, section } = this.fieldRootInSection(`NonconformanceNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletionNotes() {

    const { root, section } = this.fieldRootInSection(`CompletionNotes_f`, `Completion`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _DispApproval() {

    const { root, section } = this.fieldRootInSection(`DispositionApproval_f`, `Containment/Disposition`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get DispositionNotes() {

    const { root, section } = this.fieldRootInSection(`DispositionNotes_f`, `Containment/Disposition`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoCorrectiveAction() {

    const { root, section } = this.fieldRootInSection(`EscalatetoCorrectiveAction_f`, `Containment/Disposition`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoSCAR() {

    const { root, section } = this.fieldRootInSection(`EscalatetoSCAR_f`, `Containment/Disposition`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `Containment/Disposition`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get JustificationNottoEscalate() {

    const { root, section } = this.fieldRootInSection(`JustificationNottoEscalate_f`, `Containment/Disposition`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RepeatIssue() {

    const { root, section } = this.fieldRootInSection(`RepeatIssues_f`, `Containment/Disposition`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetContainmentDate() {

    const { root, section } = this.fieldRootInSection(`TargetContainmentDate_f`, `Containment/Disposition`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ImagesofProblem() {

    const { root, section } = this.fieldRootInSection(`ImageofProblem_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialDispositionNotes() {

    const { root, section } = this.fieldRootInSection(`InitialDispositionNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestrictedWarning() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemDescription() {

    const { root, section } = this.fieldRootInSection(`ProblemDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportedBy() {

    const { root, section } = this.fieldRootInSection(`ReportedBy_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonconformancesfortheselectedCustomer() {

    const { root, section } = this.fieldRootInSection(`Nonconformancesforthecust_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonconformancesfortheselectedItem() {

    const { root, section } = this.fieldRootInSection(`NewField1_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonconformancesfortheselectedSupplier() {

    const { root, section } = this.fieldRootInSection(`Nonconformancesforthesupp_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _CreateDeviation() {

    const { root, section } = this.fieldRootInSection(`CreateDeviation_f`, `Links`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedCAPAs() {

    const { root, section } = this.fieldRootInSection(`RelatedCAPAs_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerPartNumber() {

    const { root, section } = this.fieldRootInSection(`CustomerPartNumber_f`, `Product/Process`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerReferenceNo() {

    const { root, section } = this.fieldRootInSection(`CustomerReferenceNo_f`, `Product/Process`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailedItemCost() {

    const { root, section } = this.fieldRootInSection(`FailedItemCost_f`, `Product/Process`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get FailedItemPrice() {

    const { root, section } = this.fieldRootInSection(`FailedItemPrice_f`, `Product/Process`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialMaterialCost() {

    const { root, section } = this.fieldRootInSection(`InitialMaterialCost_f`, `Product/Process`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ItemITARMismatchWarning_f`, `Product/Process`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemPrice() {

    const { root, section } = this.fieldRootInSection(`ItemCost_f`, `Product/Process`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`SerialNumber_f`, `Product/Process`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Quantity() {

    const { root, section } = this.fieldRootInSection(`Quantity_f`, `Product/Process`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierPartNumber() {

    const { root, section } = this.fieldRootInSection(`SupplierPartNumber_f`, `Product/Process`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskAssessment() {

    const { root, section } = this.fieldRootInSection(`RiskAssessment_f`, `Risk Assessment`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedDepartment() {

    const { root, section } = this.fieldRootInSection(`AffectedDepartment_f`, `Containment/Disposition`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `Containment/Disposition`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Champion() {

    const { root, section } = this.fieldRootInSection(`Champion_f`, `Containment/Disposition`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ExecutiveChampion() {

    const { root, section } = this.fieldRootInSection(`ExecutiveChampion_f`, `Containment/Disposition`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GeneralDisposition() {

    const { root, section } = this.fieldRootInSection(`ProblemDisposition_f`, `Containment/Disposition`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PreliminaryCause() {

    const { root, section } = this.fieldRootInSection(`ProblemCause_f`, `Containment/Disposition`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponsibleSite() {

    const { root, section } = this.fieldRootInSection(`ResponsibleSite_f`, `Containment/Disposition`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialDisposition() {

    const { root, section } = this.fieldRootInSection(`InitialDisposition_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`ProblemSeverity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSource() {

    const { root, section } = this.fieldRootInSection(`ProblemCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSymptom() {

    const { root, section } = this.fieldRootInSection(`ProblemSymptom_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviationType() {

    const { root, section } = this.fieldRootInSection(`DeviationType_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyAdverseEvent() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyComplaint_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyAudit() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyAudit_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyAuditFinding() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyAuditFinding_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyAuditResult() {

    const { root, section } = this.fieldRootInSection(`InitiatedByAuditResult_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyComplaint() {

    const { root, section } = this.fieldRootInSection(`Initiatedby2019Complaint_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyGaugeCalibration() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyGaugeCalibration_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyIncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyInvestigation_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyInspectionEvent() {

    const { root, section } = this.fieldRootInSection(`InitiatedByInspectionEvent_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyQADTransaction() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyQADTransaction_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyRisk() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyRisk_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyRiskEvent() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyRiskEvent_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbySuspectItem() {

    const { root, section } = this.fieldRootInSection(`InitiatedbySuspectItem_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FailedItem() {

    const { root, section } = this.fieldRootInSection(`FailedItem_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FinishedItem() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`QuantityUnitofMeasure_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _QuantityUnitofMeasureFailedItem() {

    const { root, section } = this.fieldRootInSection(`QuantityUnitofMeasureFailed_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `Product/Process`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearned() {

    const { root, section } = this.fieldRootInSection(`LessonsLearned_f`, `Completion`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ContainmentActions() {

    const { root, section } = this.fieldRootInSection(`ContainmentActions_f`, `Containment/Disposition`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DispositionTeam() {

    const { root, section } = this.fieldRootInSection(`DispositionTeam_f`, `Containment/Disposition`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CPRTasks() {

    const { root, section } = this.fieldRootInSection(`CPRTasks_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLog_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Deviations() {

    const { root, section } = this.fieldRootInSection(`Deviations_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationGroups() {

    const { root, section } = this.fieldRootInSection(`NotificationGroups_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _QualityAlerts() {

    const { root, section } = this.fieldRootInSection(`QualityAlerts_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedDocuments_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedNonconformances() {

    const { root, section } = this.fieldRootInSection(`RelatedNonconformances_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCAR() {

    const { root, section } = this.fieldRootInSection(`SupplierCorrectiveActionReq_f`, `Containment/Disposition`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
