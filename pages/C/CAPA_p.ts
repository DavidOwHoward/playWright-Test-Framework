import { DetailsPageBase } from '../../BasePages/DetailsPageBase';
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


export class CAPA_p extends DetailsPageBase {
  get CAPANumber() {

    const { root, section } = this.fieldRootInSection(`CAPANumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ActionTasksMustBeCompletedPriortoClosureReadyforApproval() {

    const { root, section } = this.fieldRootInSection(`ActionTasksMustBeCompletedP_f`, `Completion`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproveforClosure() {

    const { root, section } = this.fieldRootInSection(`ApproveforClosure_f`, `Completion`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get CommunicationtoCustomerIsRequired() {

    const { root, section } = this.fieldRootInSection(`CommunicationtoCustomerIsRe_f`, `Corrective/Preventive Action`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _CorrectivePreventiveActionTasksMustBeCompletedPriortoVerification() {

    const { root, section } = this.fieldRootInSection(`CorrectivePreventiveActionT_f`, `Corrective/Preventive Action`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerCommunicationNotRequiredJustification() {

    const { root, section } = this.fieldRootInSection(`CustomerCommunicationNotReq_f`, `Corrective/Preventive Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeCorrectiveActionPlan() {

    const { root, section } = this.fieldRootInSection(`EscapeCAPlan_f`, `Corrective/Preventive Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceCorrectiveActionPlan() {

    const { root, section } = this.fieldRootInSection(`OccurrenceCAPlan_f`, `Corrective/Preventive Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PlansApproval() {

    const { root, section } = this.fieldRootInSection(`PlansApproval_f`, `Corrective/Preventive Action`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProgressStatus() {

    const { root, section } = this.fieldRootInSection(`ProgressStatus_f`, `Corrective/Preventive Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProofofCustomerCommunication() {

    const { root, section } = this.fieldRootInSection(`ProofofCustomerCommunicatio_f`, `Corrective/Preventive Action`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicCorrectiveActionPlan() {

    const { root, section } = this.fieldRootInSection(`SystemicCAPlan_f`, `Corrective/Preventive Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ImagesofProblem() {

    const { root, section } = this.fieldRootInSection(`ImageofProblem_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ItemITARMismatchWarning_f`, `General`);

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

  get RepeatIssue() {

    const { root, section } = this.fieldRootInSection(`RepeatIssue_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportedBy() {

    const { root, section } = this.fieldRootInSection(`ReportedBy_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetDueDate() {

    const { root, section } = this.fieldRootInSection(`TargetDueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetRootCauseDate() {

    const { root, section } = this.fieldRootInSection(`TargetRootCauseDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPAsfortheSelectedCustomer() {

    const { root, section } = this.fieldRootInSection(`CAPAsfortheSelectedCustomer_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPAsfortheSelectedItem() {

    const { root, section } = this.fieldRootInSection(`CAPAsfortheSelectedItem_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPAsfortheSelectedProcess() {

    const { root, section } = this.fieldRootInSection(`CAPAsfortheSelectedProcess_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPAsfortheSelectedSupplier() {

    const { root, section } = this.fieldRootInSection(`CAPAsfortheSelectedSupplier_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonconformancesfortheSelectedItem() {

    const { root, section } = this.fieldRootInSection(`NonconformancesfortheSelect_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorNCRStateName() {

    const { root, section } = this.fieldRootInSection(`PriorNCRStateName_f`, `Historical Data`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateChangeRequest() {

    const { root, section } = this.fieldRootInSection(`CreateChangeRequest_f`, `Links`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _HowDidtheProblemHappen() {

    const { root, section } = this.fieldRootInSection(`HowDidtheProblemHappen_f`, `Problem Identification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HowMany() {

    const { root, section } = this.fieldRootInSection(`HowMany_f`, `Problem Identification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSolvingGoalStatement() {

    const { root, section } = this.fieldRootInSection(`ProblemSolvingGoalStatement_f`, `Problem Identification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VisualEvidence() {

    const { root, section } = this.fieldRootInSection(`VisualEvidence_f`, `Problem Identification`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhatisFailing() {

    const { root, section } = this.fieldRootInSection(`WhatisFailing_f`, `Problem Identification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhereWastheProblemFound() {

    const { root, section } = this.fieldRootInSection(`WhereWastheProblemFound_f`, `Problem Identification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhyIstheProblemOccurring() {

    const { root, section } = this.fieldRootInSection(`WhyIstheProblemOccurring_f`, `Problem Identification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeCauseNotes() {

    const { root, section } = this.fieldRootInSection(`EscapeCauseNotes_f`, `Root Cause Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceCauseNotes() {

    const { root, section } = this.fieldRootInSection(`OccurrenceCauseNotes_f`, `Root Cause Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicCauseNotes() {

    const { root, section } = this.fieldRootInSection(`SystemicCauseNotes_f`, `Root Cause Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationDate() {

    const { root, section } = this.fieldRootInSection(`VerificationDate_f`, `Verification`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationNotes() {

    const { root, section } = this.fieldRootInSection(`VerificationNotes_f`, `Verification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Champion() {

    const { root, section } = this.fieldRootInSection(`Champion_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ExecutiveChampion() {

    const { root, section } = this.fieldRootInSection(`ExecutiveChampion_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`ProblemSeverity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSource() {

    const { root, section } = this.fieldRootInSection(`ProblemSource_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSymptom() {

    const { root, section } = this.fieldRootInSection(`ProblemSymptom_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponsibleSite() {

    const { root, section } = this.fieldRootInSection(`ResponsibleSite_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyAuditFinding() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyAuditFinding_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyComplaint() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyComplaint_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyIncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyInvestigation_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InitiatedbyNonconformance() {

    const { root, section } = this.fieldRootInSection(`InitiatedbyNonconformance_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeRootCause() {

    const { root, section } = this.fieldRootInSection(`EscapeRootCause_f`, `Root Cause Analysis`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceRootCause() {

    const { root, section } = this.fieldRootInSection(`OccurrenceRootCause_f`, `Root Cause Analysis`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicRootCause() {

    const { root, section } = this.fieldRootInSection(`SystemicRootCause_f`, `Root Cause Analysis`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get VerifiedBy() {

    const { root, section } = this.fieldRootInSection(`VerifiedBy_f`, `Verification`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearned() {

    const { root, section } = this.fieldRootInSection(`LessonsLearned_f`, `Completion`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CorrectivePreventiveActionTasks() {

    const { root, section } = this.fieldRootInSection(`CAandPATasks_f`, `Corrective/Preventive Action`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get InternalDistribution() {

    const { root, section } = this.fieldRootInSection(`InternalDistribution_f`, `Corrective/Preventive Action`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get FamilyTemplateFailureMode() {

    const { root, section } = this.fieldRootInSection(`FamilyTemplateFailureMode_f`, `Failure Mode Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryFailureMode() {

    const { root, section } = this.fieldRootInSection(`LibraryFailureMode_f`, `Failure Mode Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocumentFailureMode() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocumentFailur_f`, `Failure Mode Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalTeamMembers() {

    const { root, section } = this.fieldRootInSection(`AdditionalTeamMembers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLog_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationGroups() {

    const { root, section } = this.fieldRootInSection(`NotificationGroups_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedCAPAs() {

    const { root, section } = this.fieldRootInSection(`RelateCAPAs_f`, `Links`);

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

  get ProblemMetrics() {

    const { root, section } = this.fieldRootInSection(`ProblemMetrics_f`, `Problem Identification`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSolvingTools() {

    const { root, section } = this.fieldRootInSection(`ProblemSolvingTools_f`, `Root Cause Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get MetricReadings() {

    const { root, section } = this.fieldRootInSection(`MetricReadings_f`, `Verification`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequest() {

    const { root, section } = this.fieldRootInSection(`ChangeRequest_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
