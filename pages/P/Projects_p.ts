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


export class Projects_p extends DetailsPageBase {
  get ProjectName() {

    const { root, section } = this.fieldRootInSection(`ProjectName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectNumber() {

    const { root, section } = this.fieldRootInSection(`ProjectNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateNewMfgDoc() {

    const { root, section } = this.fieldRootInSection(`CreateNewMfgDoc_f`, `General`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _CustomerorInternalPartNo() {

    const { root, section } = this.fieldRootInSection(`CustomerorInternalPartNo_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ItempreERP() {

    const { root, section } = this.fieldRootInSection(`ItempreERP_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectDescription() {

    const { root, section } = this.fieldRootInSection(`ProjectDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RevisionLevel() {

    const { root, section } = this.fieldRootInSection(`RevisionLevel_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualFinishDate() {

    const { root, section } = this.fieldRootInSection(`ActualFinishDate_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualStartDate() {

    const { root, section } = this.fieldRootInSection(`ActualStartDate_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get BaselineFinishDate() {

    const { root, section } = this.fieldRootInSection(`BaselineFinishDate_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get BaselineStartDate() {

    const { root, section } = this.fieldRootInSection(`BaselineStartDate_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectEndDate() {

    const { root, section } = this.fieldRootInSection(`ProjectEndDate_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectStartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectedFinishDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectedStartDate() {

    const { root, section } = this.fieldRootInSection(`StartDateCalc_f`, `Phases`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SetBaselineDates() {

    const { root, section } = this.fieldRootInSection(`SetBaselineDates_f`, `Phases`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get Tasks() {

    const { root, section } = this.fieldRootInSection(`Tasks_f`, `Phases`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get BusinessPlanandMarketingStrategySummary() {

    const { root, section } = this.fieldRootInSection(`BusinessPlanandMarketingStr_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CapacityPlanningSummary() {

    const { root, section } = this.fieldRootInSection(`CapacityPlanningSummary_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerInputsSummary() {

    const { root, section } = this.fieldRootInSection(`CustomerInputsSummary_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignGoalsSummary() {

    const { root, section } = this.fieldRootInSection(`DesignGoalsSummary_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get HistoricalCAPAs() {

    const { root, section } = this.fieldRootInSection(`HistoricalCAPAs_f`, `Plan and Define`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get HistoricalCustomerComplaints() {

    const { root, section } = this.fieldRootInSection(`HistoricalCustomerComplaint_f`, `Plan and Define`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get HistoricalIncidentInvestigations() {

    const { root, section } = this.fieldRootInSection(`HistoricalIncidentInvestiga_f`, `Plan and Define`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _HistoricalNonconformances() {

    const { root, section } = this.fieldRootInSection(`HistoricalNonconformances_f`, `Plan and Define`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get HistoricalSCARs() {

    const { root, section } = this.fieldRootInSection(`HistoricalSCARs_f`, `Plan and Define`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturingApportionmentAllocationGoalsRequirements() {

    const { root, section } = this.fieldRootInSection(`ManufacturingApportionmentA_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductReliabilityStudiesSummary() {

    const { root, section } = this.fieldRootInSection(`ProductReliabilityStudiesSu_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProductProcessAssumptionSummary() {

    const { root, section } = this.fieldRootInSection(`ProductProcessAssumptionSum_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProductProcessBenchmarkingSummary() {

    const { root, section } = this.fieldRootInSection(`ProductProcessBenchmarkingS_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProgramRisksduetonewtechcomplexitymaterialapplicationetc() {

    const { root, section } = this.fieldRootInSection(`ProgramRisks_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReliabilityandDurabilityGoalsRequirements() {

    const { root, section } = this.fieldRootInSection(`ReliabilityandDurabilityGoa_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReliabilityandQualityGoals() {

    const { root, section } = this.fieldRootInSection(`ReliabilityandQualityGoals_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SummaryofHistoricalInformationRelevanttotheProject() {

    const { root, section } = this.fieldRootInSection(`SummaryOfHistoricalInfo_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _SummaryofSupplierRelatedHistoricalInformation() {

    const { root, section } = this.fieldRootInSection(`SummaryOfSupplierInfo_f`, `Plan and Define`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get APQPRiskFactorsChecklist() {

    const { root, section } = this.fieldRootInSection(`APQPRiskFactorsChecklist_f`, `Program Concept`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectClosureApproval() {

    const { root, section } = this.fieldRootInSection(`ProjectApproval_f`, `Project Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectPlanningandSchedulingApproval() {

    const { root, section } = this.fieldRootInSection(`ProjectPlanningandSchedulin_f`, `Project Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighRiskSupplier() {

    const { root, section } = this.fieldRootInSection(`HighRiskSupplier_f`, `Supplier Evaluation`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _HistoricalSupplierProjects() {

    const { root, section } = this.fieldRootInSection(`HistoricalSupplierProjects_f`, `Supplier Evaluation`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get SourcingChecklist() {

    const { root, section } = this.fieldRootInSection(`SourcingChecklist_f`, `Supplier Evaluation`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectManager() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTemplate() {

    const { root, section } = this.fieldRootInSection(`APQPProjectType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProjectTemplate() {

    const { root, section } = this.fieldRootInSection(`ProjectTypeCopy_f`, `[Frozen Section]`);

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

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ItemfromERP() {

    const { root, section } = this.fieldRootInSection(`ItemfromERP_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocuments_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Program() {

    const { root, section } = this.fieldRootInSection(`Program_f`, `General`);

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

  get CriticalProjectStatus() {

    const { root, section } = this.fieldRootInSection(`CriticalProjectStatus_f`, `Phases`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectColorStatus() {

    const { root, section } = this.fieldRootInSection(`ProjectColorStatus_f`, `Phases`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get __ManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocuments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Issues() {

    const { root, section } = this.fieldRootInSection(`Issues_f`, `Issues`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearned() {

    const { root, section } = this.fieldRootInSection(`LessonsLearned_f`, `Lessons Learned`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ChangeRequests() {

    const { root, section } = this.fieldRootInSection(`ChangeRequest_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PPAPSubmissions() {

    const { root, section } = this.fieldRootInSection(`PPAPSubmissions_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Records() {

    const { root, section } = this.fieldRootInSection(`Records_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedProjects() {

    const { root, section } = this.fieldRootInSection(`RelatedAPQPProjects_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Phases() {

    const { root, section } = this.fieldRootInSection(`Gates_f`, `Phases`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get HistoricalLessonsLearned() {

    const { root, section } = this.fieldRootInSection(`HistoricalLessonsLearned_f`, `Plan and Define`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLogs_f`, `Project Team/Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProductQualityPlanningTeamMembers() {

    const { root, section } = this.fieldRootInSection(`ProductQualityPlanningTeam_f`, `Project Team/Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectRoles() {

    const { root, section } = this.fieldRootInSection(`NewPDProjectRoles_f`, `Project Team/Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get StakeholderApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `Project Team/Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierandCustomerContacts() {

    const { root, section } = this.fieldRootInSection(`SupplierCustomerContacts_f`, `Project Team/Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `Risks`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignHistoryFile() {

    const { root, section } = this.fieldRootInSection(`DesignHistoryFile_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
