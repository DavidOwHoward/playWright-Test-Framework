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


export class PPAPSubmissions_p extends DetailsPageBase {
  get PPAPSubmissionNumber() {

    const { root, section } = this.fieldRootInSection(`PPAPSubmissionNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalDate() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalDate_f`, `Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalNotes() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalNotes_f`, `Approval`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalProof() {

    const { root, section } = this.fieldRootInSection(`File_f`, `Approval`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalSubmissionDate() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalSubmissionD_f`, `Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalTargetDate() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalTargetDate_f`, `Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ExplanationorComments() {

    const { root, section } = this.fieldRootInSection(`ExplanationorComments_f`, `Approval`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InternalApproval() {

    const { root, section } = this.fieldRootInSection(`InternalApproval_f`, `Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get MissingInternalApprovers() {

    const { root, section } = this.fieldRootInSection(`MissingInternalApprovers_f`, `Approval`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CancellationReason() {

    const { root, section } = this.fieldRootInSection(`CancellationReason_f`, `Cancellation`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Cancelled() {

    const { root, section } = this.fieldRootInSection(`Cancelled_f`, `Cancellation`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Application() {

    const { root, section } = this.fieldRootInSection(`Application_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _BuyerBuyerCode() {

    const { root, section } = this.fieldRootInSection(`BuyerBuyerCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAddress() {

    const { root, section } = this.fieldRootInSection(`SupplierAddress_f`, `Organization Manufacturing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAddressLine2() {

    const { root, section } = this.fieldRootInSection(`SupplierAddressLine2_f`, `Organization Manufacturing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierNameandVendorCode() {

    const { root, section } = this.fieldRootInSection(`SupplierNameandVendorCode_f`, `Organization Manufacturing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalEngineeringChanges() {

    const { root, section } = this.fieldRootInSection(`AdditionalEngineeringChange_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalEngineeringDate() {

    const { root, section } = this.fieldRootInSection(`AdditionalEngineeringDate_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CheckingAidChangeDate() {

    const { root, section } = this.fieldRootInSection(`CheckingAidChangeDate_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CheckingAidChangeLevel() {

    const { root, section } = this.fieldRootInSection(`CheckingAidChangeLevel_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CheckingAidNumber() {

    const { root, section } = this.fieldRootInSection(`CheckingAidNumber_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerPartNumber() {

    const { root, section } = this.fieldRootInSection(`CustomerPartNumber_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringChangeDate() {

    const { root, section } = this.fieldRootInSection(`EngineeringChangeDate_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringChangeLevel() {

    const { root, section } = this.fieldRootInSection(`EngineeringChangeLevel_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OriginalPartNumber() {

    const { root, section } = this.fieldRootInSection(`OriginalPartNumber_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartName() {

    const { root, section } = this.fieldRootInSection(`PartName_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PONumber() {

    const { root, section } = this.fieldRootInSection(`PONumber_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _SafetyandorGovt() {

    const { root, section } = this.fieldRootInSection(`SafetyandorGovt_f`, `Part Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ShownonDrawingNumber() {

    const { root, section } = this.fieldRootInSection(`ShownonDrawingNumber_f`, `Part Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Weight() {

    const { root, section } = this.fieldRootInSection(`Weight_f`, `Part Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MeetingAllPPAPRequirements() {

    const { root, section } = this.fieldRootInSection(`MeetingAllPPAPRequirements_f`, `Requirements`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequirementStatus() {

    const { root, section } = this.fieldRootInSection(`RequirementStatus_f`, `Requirements`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeinPartProcessing() {

    const { root, section } = this.fieldRootInSection(`rfsChangeinPartProcessing_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangetoOptionalConstructionorMaterial() {

    const { root, section } = this.fieldRootInSection(`rfsChangetoOptionalConst_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CorrectionofDiscrepancy() {

    const { root, section } = this.fieldRootInSection(`rfsCorrectionofDiscrepancy_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _EngineeringChanges() {

    const { root, section } = this.fieldRootInSection(`rfsEngineeringChanges_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _IMDSOtherCustomerFormat() {

    const { root, section } = this.fieldRootInSection(`IMDSOtherCustomerFormat_f`, `Submission Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialSubmission() {

    const { root, section } = this.fieldRootInSection(`rfsInitialSubmission_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _Otherpleasespecify() {

    const { root, section } = this.fieldRootInSection(`rfsOtherpleasespecify_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get OtherDescription() {

    const { root, section } = this.fieldRootInSection(`rfsOtherDescription_f`, `Submission Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartsProducedatAdditionalLocation() {

    const { root, section } = this.fieldRootInSection(`rfsPartsProducedAdditionLoc_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PolymericParts() {

    const { root, section } = this.fieldRootInSection(`PolymericParts_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonForSubmission() {

    const { root, section } = this.fieldRootInSection(`labelReasonForSubmission_f`, `Submission Information`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get SubstancesofConcern() {

    const { root, section } = this.fieldRootInSection(`SubstancesofConcern_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierorMaterialSourceChange() {

    const { root, section } = this.fieldRootInSection(`rfsSupplierorMaterialSource_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingInactivethan1year() {

    const { root, section } = this.fieldRootInSection(`rfsToolingInactivethan1year_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingTransferReplacementRefurbishmentoradditional() {

    const { root, section } = this.fieldRootInSection(`rfsTooling_f`, `Submission Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AppearanceCriteria() {

    const { root, section } = this.fieldRootInSection(`srAppearanceCriteria_f`, `Submission Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerToolTagged() {

    const { root, section } = this.fieldRootInSection(`CustomerToolTagged_f`, `Submission Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DimensionalMeasurements() {

    const { root, section } = this.fieldRootInSection(`srDimensionalMeasurements_f`, `Submission Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Explanation() {

    const { root, section } = this.fieldRootInSection(`ExplanationComments_f`, `Submission Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ExplanationComments() {

    const { root, section } = this.fieldRootInSection(`Explanation_f`, `Submission Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MaterialandFunctionalTests() {

    const { root, section } = this.fieldRootInSection(`srMaterialandFunctionalTests_f`, `Submission Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get MeetsallDesignRequirements() {

    const { root, section } = this.fieldRootInSection(`MeetsallDesignRequirements_f`, `Submission Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _MoldCavityProductionProcess() {

    const { root, section } = this.fieldRootInSection(`MoldCavityProductionProcess_f`, `Submission Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Numberofhours() {

    const { root, section } = this.fieldRootInSection(`Numberofhours_f`, `Submission Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductionRate() {

    const { root, section } = this.fieldRootInSection(`ProductionRate_f`, `Submission Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StatisticalProcessPackage() {

    const { root, section } = this.fieldRootInSection(`srStatisticalProcessPackage_f`, `Submission Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

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

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`APQPProject_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `Organization Manufacturing Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PPAPRequirementSet() {

    const { root, section } = this.fieldRootInSection(`SubmissionLevel_f`, `Requirements`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`AdditionalManufacturingDocu_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
