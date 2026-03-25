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


export class ManufacturingDocuments_p extends DetailsPageBase {
  get AcceptWarning() {

    const { root, section } = this.fieldRootInSection(`AcceptWarning_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARMismatchWarningItem() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarningItem_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARMismatchWarningSupplierItem() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarningSupplier_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocumentNumber() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocumentNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get WarningLabel() {

    const { root, section } = this.fieldRootInSection(`WarningLabel_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get WarningLabelCopyFamilyTemplate() {

    const { root, section } = this.fieldRootInSection(`WarningLabelCopyFamilyTempl_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get WarningLabelItemITARMismatch() {

    const { root, section } = this.fieldRootInSection(`WarningLabelItemITARMismatc_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get WarningLabelSupplierItemITARMismatch() {

    const { root, section } = this.fieldRootInSection(`WarningLabelSupplierItemITA_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _1GenerateSuggestedDesignFailureModes() {

    const { root, section } = this.fieldRootInSection(`_1GenerateSuggestedDesignFa_f`, `Design FMEA`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighriskFailureActionsTakenPlannedSummary() {

    const { root, section } = this.fieldRootInSection(`HighriskFailureActionsTaken_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get HowtheFunctionswereDevelopedSummary() {

    const { root, section } = this.fieldRootInSection(`HowtheFunctionswereDevelope_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _InTentResultsCommentsPurposeofDFMEA() {

    const { root, section } = this.fieldRootInSection(`InTentResultsCommentsPurpos_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OngoingDFMEAImprovementActionsSummary() {

    const { root, section } = this.fieldRootInSection(`OngoingDFMEAImprovementActi_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ResultsDocumentation() {

    const { root, section } = this.fieldRootInSection(`ResultsDocumentation_f`, `Design FMEA`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ScopeAnalysisSummary() {

    const { root, section } = this.fieldRootInSection(`ScopeAnalysisSummary_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TaskResultsCommentsScopeofthisFMEA() {

    const { root, section } = this.fieldRootInSection(`TaskResultsCommentsScopeoft_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TeamResultsCommentsListofparticipants() {

    const { root, section } = this.fieldRootInSection(`TeamResultsCommentsListofpa_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TimingResultsCommentsFMEAduedate() {

    const { root, section } = this.fieldRootInSection(`TimingResultsCommentsFMEAdu_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolResultsCommentsHowdoweconductanalysismethodused() {

    const { root, section } = this.fieldRootInSection(`ToolResultsCommentsHowdowec_f`, `Design FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _2GenerateSuggestedDesignVerificationPlans() {

    const { root, section } = this.fieldRootInSection(`_2GenerateSuggestedDesignVe_f`, `Design Verification Plan & Report`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get CompanyName() {

    const { root, section } = this.fieldRootInSection(`CompanyName_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CrossFunctionalTeamDFMEA() {

    const { root, section } = this.fieldRootInSection(`CrossFunctionalTeamTeamRost_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerName() {

    const { root, section } = this.fieldRootInSection(`CustomerName_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignResponsibility() {

    const { root, section } = this.fieldRootInSection(`DesignLead_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEADueDate() {

    const { root, section } = this.fieldRootInSection(`DFMEADueDate_f`, `DFMEA Analysis`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEAHeader() {

    const { root, section } = this.fieldRootInSection(`DFMEAHeader_f`, `DFMEA Analysis`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEANumber() {

    const { root, section } = this.fieldRootInSection(`DFMEANumber_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEARevisionDate() {

    const { root, section } = this.fieldRootInSection(`DFMEARevisionDate_f`, `DFMEA Analysis`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEAStartDate() {

    const { root, section } = this.fieldRootInSection(`DFMEAStartDate_f`, `DFMEA Analysis`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _EnableFMEAMSR() {

    const { root, section } = this.fieldRootInSection(`EnableFMEAMSR_f`, `DFMEA Analysis`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringLocation() {

    const { root, section } = this.fieldRootInSection(`EngineeringLocation_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InTent() {

    const { root, section } = this.fieldRootInSection(`InTent_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ModelYearPrograms() {

    const { root, section } = this.fieldRootInSection(`ModelYearPrograms_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonEmployeeTeam() {

    const { root, section } = this.fieldRootInSection(`NonemployeeTeam_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectIdentification() {

    const { root, section } = this.fieldRootInSection(`ProjectIdentification_f`, `DFMEA Analysis`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get _Step1PlanningandPreparation() {

    const { root, section } = this.fieldRootInSection(`Step1PlanningandPreparation_f`, `DFMEA Analysis`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _STEP2STRUCTURALANALYSIS() {

    const { root, section } = this.fieldRootInSection(`STEP2STRUCTURALANALYSIS_f`, `DFMEA Analysis`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Subject() {

    const { root, section } = this.fieldRootInSection(`Subject_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Tool() {

    const { root, section } = this.fieldRootInSection(`Tool_f`, `DFMEA Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReview() {

    const { root, section } = this.fieldRootInSection(`LastReview_f`, `Document Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDue() {

    const { root, section } = this.fieldRootInSection(`NextReviewDue_f`, `Document Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresReview() {

    const { root, section } = this.fieldRootInSection(`RequiresReview_f`, `Document Review`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ReviewNotes_f`, `Document Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighRiskFailureActionsTakenPlannedSummary() {

    const { root, section } = this.fieldRootInSection(`HighriskFailureActionsMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighRiskMSRFailureSummary() {

    const { root, section } = this.fieldRootInSection(`HighRiskFailSummaryMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get HowtheMSRFunctionsWereDevelopedSummary() {

    const { root, section } = this.fieldRootInSection(`HowtheFunctionsWereDevMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _InTentResultsCommentsPurposeofFMEAMSR() {

    const { root, section } = this.fieldRootInSection(`InTentResultsMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _OngoingFMEAMSRImprovementActionsSummary() {

    const { root, section } = this.fieldRootInSection(`OngoingMSRImprovementAction_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RESULTSDOCUMENTATION() {

    const { root, section } = this.fieldRootInSection(`MSRRESULTSDOCUMENTATION_f`, `FMEA-MSR`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScopeAnalysisSummary() {

    const { root, section } = this.fieldRootInSection(`ScopeAnalysisSummaryMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _STEP2MSRSTRUCTURALANALYSIS() {

    const { root, section } = this.fieldRootInSection(`STEP2_MSR_STRUCTURAL_f`, `FMEA-MSR`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _TaskResultsCommentsScopeofthisFMEAMSR() {

    const { root, section } = this.fieldRootInSection(`TaskResultsCommentsMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TeamResultsCommentsListofMSRparticipants() {

    const { root, section } = this.fieldRootInSection(`TeamResultsCommentsMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TimingResultsCommentsFMEAMSRduedate() {

    const { root, section } = this.fieldRootInSection(`TimingResultsFMEAMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get __ToolResultsCommentsHowdoweconductanalysismethodused() {

    const { root, section } = this.fieldRootInSection(`ToolResultsCommentsMSR_f`, `FMEA-MSR`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InTentMSR() {

    const { root, section } = this.fieldRootInSection(`InTentMSR_f`, `FMEA-MSR Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MSRDueDate() {

    const { root, section } = this.fieldRootInSection(`MSRDueDate_f`, `FMEA-MSR Analysis`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get MSRProjectIdentification() {

    const { root, section } = this.fieldRootInSection(`MSRProjectIdentification_f`, `FMEA-MSR Analysis`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get MSRStartDate() {

    const { root, section } = this.fieldRootInSection(`MSRStartDate_f`, `FMEA-MSR Analysis`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _STEP1PLANNINGANDPREPARATION() {

    const { root, section } = this.fieldRootInSection(`STEP1MSRPLANNINGANDPREPARAT_f`, `FMEA-MSR Analysis`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskMSR() {

    const { root, section } = this.fieldRootInSection(`TaskMSR_f`, `FMEA-MSR Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolMSR() {

    const { root, section } = this.fieldRootInSection(`ToolMSR_f`, `FMEA-MSR Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AcknowledgeITARRestrictionChange() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedSiteCheckbox_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CoreTeam() {

    const { root, section } = this.fieldRootInSection(`CoreTeam_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EffectiveDate() {

    const { root, section } = this.fieldRootInSection(`EffectiveDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringChangeDate() {

    const { root, section } = this.fieldRootInSection(`EngineeringChangeDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringChangeLevel() {

    const { root, section } = this.fieldRootInSection(`EngineeringChangeLevel_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get KeyDate() {

    const { root, section } = this.fieldRootInSection(`KeyDate_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ModelYearsVehicles() {

    const { root, section } = this.fieldRootInSection(`ModelYearsVehicles_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteMfgDocument() {

    const { root, section } = this.fieldRootInSection(`ObsoleteMfgDocument_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoletingApproval() {

    const { root, section } = this.fieldRootInSection(`ObsoletingApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforObsoleting() {

    const { root, section } = this.fieldRootInSection(`ReasonforObsoleting_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresCustomerApproval() {

    const { root, section } = this.fieldRootInSection(`RequiresCustomerApproval_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SafeLaunch() {

    const { root, section } = this.fieldRootInSection(`SafeLaunch_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SafeLaunchLabel() {

    const { root, section } = this.fieldRootInSection(`SafeLaunchLabel_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ShowAIAG4thEdition() {

    const { root, section } = this.fieldRootInSection(`ShowAIAG4thEdition_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _UseDocumentforReceivingInspection() {

    const { root, section } = this.fieldRootInSection(`UseDocumentforReceivingInsp_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _CompanyName() {

    const { root, section } = this.fieldRootInSection(`CompanyNamePFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CrossFunctionalTeamTeamRosterneededCoreTeam() {

    const { root, section } = this.fieldRootInSection(`CrossFunctionalTeamTeamRostPF_`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CustomerName() {

    const { root, section } = this.fieldRootInSection(`CustomerNamePFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _InTent() {

    const { root, section } = this.fieldRootInSection(`InTentPFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingLocation() {

    const { root, section } = this.fieldRootInSection(`ManufacturingLocation_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get __ModelYearPrograms() {

    const { root, section } = this.fieldRootInSection(`ModelYearProgramsPFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get __NonEmployeeTeam() {

    const { root, section } = this.fieldRootInSection(`NonemployeeTeamPFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEADueDate() {

    const { root, section } = this.fieldRootInSection(`PFMEADueDate_f`, `PFMEA Planning`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAHeader() {

    const { root, section } = this.fieldRootInSection(`PFMEAHeader_f`, `PFMEA Planning`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEANumber() {

    const { root, section } = this.fieldRootInSection(`FMEANumber_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEARevisionDate() {

    const { root, section } = this.fieldRootInSection(`PFMEARevisionDate_f`, `PFMEA Planning`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAStartDate() {

    const { root, section } = this.fieldRootInSection(`PFMEAStartDate_f`, `PFMEA Planning`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessResponsibility() {

    const { root, section } = this.fieldRootInSection(`ProcessResponsibility_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectIdentificationPFMEA() {

    const { root, section } = this.fieldRootInSection(`ProjectIdentificationPFMEA_f`, `PFMEA Planning`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get _STEP1PLANNINGANDPREPARATIONPFMEA() {

    const { root, section } = this.fieldRootInSection(`STEP1PLANNINGANDPREPARATION2_f`, `PFMEA Planning`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _Subject() {

    const { root, section } = this.fieldRootInSection(`SubjectPFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Task() {

    const { root, section } = this.fieldRootInSection(`TaskPFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Tool() {

    const { root, section } = this.fieldRootInSection(`ToolPFMEA_f`, `PFMEA Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _12CreateInspectionEventQuestions() {

    const { root, section } = this.fieldRootInSection(`_11CreateInspectionEventQue_f`, `Process Control Plan`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlanCustomerApprovalDocumentation() {

    const { root, section } = this.fieldRootInSection(`ControlPlanCustomerApproval_f`, `Process Control Plan`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlanNumber() {

    const { root, section } = this.fieldRootInSection(`ControlPlanNumber_f`, `Process Control Plan`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringApprovalDate() {

    const { root, section } = this.fieldRootInSection(`EngineeringApprovalDate_f`, `Process Control Plan`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityApprovalDate() {

    const { root, section } = this.fieldRootInSection(`CustomerQualityApprovalDate_f`, `Process Control Plan`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `Process Control Plan`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierApprovalDate() {

    const { root, section } = this.fieldRootInSection(`SupplierApprovalDate_f`, `Process Control Plan`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCode() {

    const { root, section } = this.fieldRootInSection(`SupplierCode_f`, `Process Control Plan`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ValidSkipLotRules() {

    const { root, section } = this.fieldRootInSection(`InvalidSkipLots_f`, `Process Control Plan`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _9GenerateSuggestedProcessFMEA() {

    const { root, section } = this.fieldRootInSection(`_9GenerateSuggestedProcessF_f`, `Process FMEA`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _CAPAsbyFailureMode() {

    const { root, section } = this.fieldRootInSection(`CAPAsbyFailureMode_f`, `Process FMEA`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerPFMEAApprovalDate() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalDate_f`, `Process FMEA`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get FMEACustomerApprovalDocumentation() {

    const { root, section } = this.fieldRootInSection(`FMEACustomerApprovalDocumen_f`, `Process FMEA`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get _GenerateFMEACurrentSpecifications() {

    const { root, section } = this.fieldRootInSection(`GenerateFMEACurrentSpecsOnl_f`, `Process FMEA`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get __HighriskFailureActionsTakenPlannedSummary() {

    const { root, section } = this.fieldRootInSection(`HighriskFailureActionsTPFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighriskFailureSummary() {

    const { root, section } = this.fieldRootInSection(`HighriskFailureSummaryPFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HowtheFunctionswereDevelopedSummary() {

    const { root, section } = this.fieldRootInSection(`HowtheFunctionswereDevePFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _InTentResultsCommentsPurposeofPFMEA() {

    const { root, section } = this.fieldRootInSection(`InTentResultsCommentsPFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OngoingPFMEAImprovementActionsSummary() {

    const { root, section } = this.fieldRootInSection(`OngoingPFMEAImprovementActi_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _RESULTSDOCUMENTATION() {

    const { root, section } = this.fieldRootInSection(`ResultsDocumentationPFMEA_f`, `Process FMEA`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get __ScopeAnalysisSummary() {

    const { root, section } = this.fieldRootInSection(`ScopeAnalysisSummaryPFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get __STEP2STRUCTURALANALYSIS() {

    const { root, section } = this.fieldRootInSection(`STEP2_PFMEA_STRUCTURAL_f`, `Process FMEA`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get __TaskResultsCommentsScopeofthisFMEA() {

    const { root, section } = this.fieldRootInSection(`TaskResultsCommentsScopPFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get __TeamResultsCommentsListofparticipants() {

    const { root, section } = this.fieldRootInSection(`TeamResultsCommentsListPFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get __TimingResultsCommentsFMEAduedate() {

    const { root, section } = this.fieldRootInSection(`TimingResultsCommentsPFMEAdu_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ___ToolResultsCommentsHowdoweconductanalysismethodused() {

    const { root, section } = this.fieldRootInSection(`ToolResultsCommentsHowPFMEA_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateTrainingEvent() {

    const { root, section } = this.fieldRootInSection(`CreateTrainingEvent_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresTraining() {

    const { root, section } = this.fieldRootInSection(`RequiresTraining_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingAid() {

    const { root, section } = this.fieldRootInSection(`TrainingAid_f`, `Skill and Training`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get _ApprovalofPassThroughCharacteristics() {

    const { root, section } = this.fieldRootInSection(`ApprovalofPassThroughCharac_f`, `Specifications`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ImportandLinkProcessSpec() {

    const { root, section } = this.fieldRootInSection(`ImportandLinkProcessSpec_f`, `Specifications`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ImportDrawingFeatures() {

    const { root, section } = this.fieldRootInSection(`_5ImportDrawingFeatures_f`, `Specifications`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalDueDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalDueDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalStartDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalStartDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDueDate() {

    const { root, section } = this.fieldRootInSection(`ChangeDueDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CopyFromFamilyTemplate() {

    const { root, section } = this.fieldRootInSection(`_3CopyfromFamilyTemplate_f`, `Version Specific`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get CopyFromManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`_4CopyfromManufacturingDocu_f`, `Version Specific`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalDocumentation() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalDocumentati_f`, `Version Specific`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDaysforApproval() {

    const { root, section } = this.fieldRootInSection(`NumberofDaysforApproval_f`, `Version Specific`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAStandardMismatch() {

    const { root, section } = this.fieldRootInSection(`PFMEAStandardMismatchft_f`, `Version Specific`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _PFMEAStandardMismatch() {

    const { root, section } = this.fieldRootInSection(`PFMEAStandardMismatchmd_f`, `Version Specific`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforChange() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StartingVersionDate() {

    const { root, section } = this.fieldRootInSection(`StartingVersionDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get StartingVersionNumber() {

    const { root, section } = this.fieldRootInSection(`StartingVersionNumber_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UpdatefromChangeOrderEffectiveDate() {

    const { root, section } = this.fieldRootInSection(`UpdatefromChangeOrderEffect_f`, `Version Specific`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get VersionApproval() {

    const { root, section } = this.fieldRootInSection(`VersionApproval_f`, `Version Specific`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierItem() {

    const { root, section } = this.fieldRootInSection(`SupplierItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ConfidentialityLevel() {

    const { root, section } = this.fieldRootInSection(`ConfidentialityLevel_f`, `DFMEA Analysis`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewCompletedBy() {

    const { root, section } = this.fieldRootInSection(`ReviewCompletedBy_f`, `Document Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `Document Review`);

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

  get Level() {

    const { root, section } = this.fieldRootInSection(`Level_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ConfidentialityLevel() {

    const { root, section } = this.fieldRootInSection(`ConfidentialityLevelPFMEA_f`, `PFMEA Planning`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringApprovalOwner() {

    const { root, section } = this.fieldRootInSection(`EngineeringApprovalOwner_f`, `Process Control Plan`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityApprovalOwner() {

    const { root, section } = this.fieldRootInSection(`QualityApprovalOwner_f`, `Process Control Plan`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierApprovalOwner() {

    const { root, section } = this.fieldRootInSection(`SupplierApprovalOwner_f`, `Process Control Plan`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skill() {

    const { root, section } = this.fieldRootInSection(`Skill_f`, `Skill and Training`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeCoordinator() {

    const { root, section } = this.fieldRootInSection(`ChangeCoordinator_f`, `Version Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeOwner() {

    const { root, section } = this.fieldRootInSection(`ChangeOwner_f`, `Version Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequest() {

    const { root, section } = this.fieldRootInSection(`ChangeRequest_f`, `Version Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FamilyTemplate() {

    const { root, section } = this.fieldRootInSection(`FamilyTemplate_f`, `Version Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SourceManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocuments_f`, `Version Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _MaterialComponents() {

    const { root, section } = this.fieldRootInSection(`MaterialComponents_f`, `Bill of Materials`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignFMEA() {

    const { root, section } = this.fieldRootInSection(`StructuralAnalysis_f`, `Design FMEA`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DesignVerificationPlans() {

    const { root, section } = this.fieldRootInSection(`DesignVerificationPlans_f`, `Design Verification Plan & Report`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignSystemsScope() {

    const { root, section } = this.fieldRootInSection(`DesignSystemsScope_f`, `DFMEA Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignTeam() {

    const { root, section } = this.fieldRootInSection(`DesignTeam_f`, `DFMEA Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplementalFMEAforMonitoringSystemResponse() {

    const { root, section } = this.fieldRootInSection(`FMEAMSR_f`, `FMEA-MSR`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerAddresses() {

    const { root, section } = this.fieldRootInSection(`CustomerAddresses_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedItems() {

    const { root, section } = this.fieldRootInSection(`RelatedItems_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessTeam() {

    const { root, section } = this.fieldRootInSection(`ProcessTeam_f`, `PFMEA Planning`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PPAPSubmissions() {

    const { root, section } = this.fieldRootInSection(`PPAPSubmissions_f`, `PPAP Submissions`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlan() {

    const { root, section } = this.fieldRootInSection(`ControlPlan_f`, `Process Control Plan`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get UtilizedSkipLots() {

    const { root, section } = this.fieldRootInSection(`UtilizedSkipLots_f`, `Process Control Plan`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFlow() {

    const { root, section } = this.fieldRootInSection(`ProcessFlow_f`, `Process Flow`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFMEA() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEA_f`, `Process FMEA`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFMEAnew() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEA20201_f`, `Process FMEA`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillTrainingQuestions() {

    const { root, section } = this.fieldRootInSection(`SkillTrainingQuestions_f`, `Skill and Training`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Specifications() {

    const { root, section } = this.fieldRootInSection(`Specifications_f`, `Specifications`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AssociatedDrawings() {

    const { root, section } = this.fieldRootInSection(`AssociatedDrawings_f`, `Version Specific`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InterdependentManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`InterdependentManufacturing_f`, `Version Specific`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroupApprovers() {

    const { root, section } = this.fieldRootInSection(`ItemGroupApprovers_f`, `Version Specific`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelevantDocumentation() {

    const { root, section } = this.fieldRootInSection(`RelevantDocumentation_f`, `Version Specific`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkInstructions() {

    const { root, section } = this.fieldRootInSection(`WorkInstructions_f`, `Work Instructions`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Projects() {

    const { root, section } = this.fieldRootInSection(`Projects_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrainingEvents() {

    const { root, section } = this.fieldRootInSection(`TrainingEvents_f`, `Skill and Training`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeOrder() {

    const { root, section } = this.fieldRootInSection(`ChangeOrder_f`, `Version Specific`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
