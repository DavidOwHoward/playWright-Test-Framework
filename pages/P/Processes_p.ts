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


export class Processes_p extends DetailsPageBase {
  get ProcessCode() {

    const { root, section } = this.fieldRootInSection(`ProcessCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessName() {

    const { root, section } = this.fieldRootInSection(`ProcessName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DetailedProcessFlowFile() {

    const { root, section } = this.fieldRootInSection(`DetailedProcessFlowFile_f`, `Auditing Information`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get _DetailedProcessFlowImages() {

    const { root, section } = this.fieldRootInSection(`DetailedProcessFlowImage_f`, `Auditing Information`);

    return new Picture(this.page, root, async () => section.openAndWait(root));
  }

  get _HowDocumentationMethods() {

    const { root, section } = this.fieldRootInSection(`HowDocumentationMethods_f`, `Auditing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MonitoringandMeasurement() {

    const { root, section } = this.fieldRootInSection(`Measures_f`, `Auditing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhatEquipmentMaterials() {

    const { root, section } = this.fieldRootInSection(`WhatEquipmentMaterials_f`, `Auditing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhomPersonnelCompetencies() {

    const { root, section } = this.fieldRootInSection(`WhomPersonnelCompetencies_f`, `Auditing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EffectiveDate() {

    const { root, section } = this.fieldRootInSection(`EffectiveDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteProcess() {

    const { root, section } = this.fieldRootInSection(`ObsoleteProcess_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoletionApproval() {

    const { root, section } = this.fieldRootInSection(`ObsoletionApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessDescription() {

    const { root, section } = this.fieldRootInSection(`ProcessDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforObsoleting() {

    const { root, section } = this.fieldRootInSection(`ReasonforObsoleting_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedCAPAs() {

    const { root, section } = this.fieldRootInSection(`RelatedCAPAs_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedNonconformances() {

    const { root, section } = this.fieldRootInSection(`RelatedNonconformances_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionRequiresApproval() {

    const { root, section } = this.fieldRootInSection(`InspectionRequiresApproval_f`, `Manufacturing Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ListProcessinAPQP() {

    const { root, section } = this.fieldRootInSection(`ListProcessinAPQP_f`, `Manufacturing Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessControls() {

    const { root, section } = this.fieldRootInSection(`ProcessControls_f`, `Manufacturing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessFailureModes() {

    const { root, section } = this.fieldRootInSection(`ProcessFailureModes_f`, `Manufacturing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReviewProcessSpecifications() {

    const { root, section } = this.fieldRootInSection(`AllSpecificationsLocked_f`, `Manufacturing Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SourcesofVariation() {

    const { root, section } = this.fieldRootInSection(`SourcesofVariation_f`, `Manufacturing Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UnlockedSpecsWarning() {

    const { root, section } = this.fieldRootInSection(`UnlockedSpecsWarning_f`, `Manufacturing Information`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReview() {

    const { root, section } = this.fieldRootInSection(`LastReview_f`, `Requires Review `);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDue() {

    const { root, section } = this.fieldRootInSection(`NextReviewDue_f`, `Requires Review `);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ReviewNotes_f`, `Requires Review `);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateTrainingEvent() {

    const { root, section } = this.fieldRootInSection(`CreateTrainingEvent_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InstructionalVideo() {

    const { root, section } = this.fieldRootInSection(`InstructionalVideo_f`, `Skill and Training`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresTraining() {

    const { root, section } = this.fieldRootInSection(`RequiresTraining_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingAid() {

    const { root, section } = this.fieldRootInSection(`TrainingAid_f`, `Skill and Training`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDueDate() {

    const { root, section } = this.fieldRootInSection(`ChangeDueDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforChange() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `Version Specific`);

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

  get ProcessCategory() {

    const { root, section } = this.fieldRootInSection(`ProcessCategory_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessOwner() {

    const { root, section } = this.fieldRootInSection(`ProcessOwner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

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

  get ParentProcess() {

    const { root, section } = this.fieldRootInSection(`ParentProcess_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessSymbol() {

    const { root, section } = this.fieldRootInSection(`ProcessSymbol_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TopManagementReviewer() {

    const { root, section } = this.fieldRootInSection(`TopManagementReviewer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewCompletedBy() {

    const { root, section } = this.fieldRootInSection(`ReviewCompletedBy_f`, `Requires Review `);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `Requires Review `);

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

  get _ProcessInputs() {

    const { root, section } = this.fieldRootInSection(`ProcessInputs_f`, `Auditing Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessOutputs() {

    const { root, section } = this.fieldRootInSection(`ProcessOutputs_f`, `Auditing Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Authorities() {

    const { root, section } = this.fieldRootInSection(`Authorities_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibilities() {

    const { root, section } = this.fieldRootInSection(`Responsibilities_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedDocuments_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessFMEALibrary4thEdition() {

    const { root, section } = this.fieldRootInSection(`LibraryProcessFMEAs_f`, `Manufacturing Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get __ProcessFMEALibrary4thEdition() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEA4thEdHistorical_f`, `Manufacturing Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessFMEALibraryAIAGVDA() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEAAIAGVDAHistorical_f`, `Manufacturing Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get __ProcessFMEALibraryAIAGVDA() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEAAnalysis_f`, `Manufacturing Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessSpecifications() {

    const { root, section } = this.fieldRootInSection(`LibrarySpecifications_f`, `Manufacturing Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `Risks `);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillTrainingQuestions() {

    const { root, section } = this.fieldRootInSection(`SkillTrainingQuestions_f`, `Skill and Training`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessWorkElements() {

    const { root, section } = this.fieldRootInSection(`ProcessWorkElements_f`, `Work Elements`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedManagementSystemStandardSectionsRequirements() {

    const { root, section } = this.fieldRootInSection(`RelatedManagementSystemStan_f`, `Auditing Information`);

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
