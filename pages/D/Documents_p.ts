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


export class Documents_p extends DetailsPageBase {
  get DocumentNumber() {

    const { root, section } = this.fieldRootInSection(`DocTypeDocumentNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTitle() {

    const { root, section } = this.fieldRootInSection(`DocumentTitle_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentReviewLabel() {

    const { root, section } = this.fieldRootInSection(`DocumentReviewLabel_f`, `Document Review`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReview() {

    const { root, section } = this.fieldRootInSection(`LastReview_f`, `Document Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDue() {

    const { root, section } = this.fieldRootInSection(`NextReviewDue_f`, `Document Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewApproval() {

    const { root, section } = this.fieldRootInSection(`ReviewApproval_f`, `Document Review`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ReviewNotes_f`, `Document Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StartNewVersion() {

    const { root, section } = this.fieldRootInSection(`StartNewVersion_f`, `Document Review`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ConverttoPDF() {

    const { root, section } = this.fieldRootInSection(`ConverttoPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentFile() {

    const { root, section } = this.fieldRootInSection(`DocumentFile_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentVersionNumber() {

    const { root, section } = this.fieldRootInSection(`DisplayExpression_f`, `General`);

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

  get ITARRestrictedWarning() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteDocument() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDocument_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteMessage() {

    const { root, section } = this.fieldRootInSection(`ObsoleteMessage_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoletionApproval() {

    const { root, section } = this.fieldRootInSection(`ObsoletionApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforObsoleting() {

    const { root, section } = this.fieldRootInSection(`ReasonforObsoleting_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RestrictPDF() {

    const { root, section } = this.fieldRootInSection(`RestrictPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventsCompleteBeforeObsolete() {

    const { root, section } = this.fieldRootInSection(`TrainingCompleteToObsolete_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get VersionApproval() {

    const { root, section } = this.fieldRootInSection(`VersionApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ShareWithAllSuppliers() {

    const { root, section } = this.fieldRootInSection(`ShareWithAllSuppliers_f`, `Links`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Confidential() {

    const { root, section } = this.fieldRootInSection(`Confidential_f`, `Owner`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTypeApprovers() {

    const { root, section } = this.fieldRootInSection(`DocumentTypeApprovers_f`, `Owner`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDaysforApproval() {

    const { root, section } = this.fieldRootInSection(`NumberofDaysforApproval_f`, `Owner`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CreatingRecords() {

    const { root, section } = this.fieldRootInSection(`CreatingRecords_f`, `Records`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get AutomaticallyCreateNewSkill() {

    const { root, section } = this.fieldRootInSection(`AutomaticallyCreateNewSkill_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateTrainingEvent() {

    const { root, section } = this.fieldRootInSection(`CreateTrainingEvent_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _CreateTrainingEvent() {

    const { root, section } = this.fieldRootInSection(`CreateTrainingEventLbl_f`, `Skill and Training`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresTraining() {

    const { root, section } = this.fieldRootInSection(`RequiresTraining_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _RequiresTraining() {

    const { root, section } = this.fieldRootInSection(`RequiresTrainingLbl_f`, `Skill and Training`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _SelfDirected() {

    const { root, section } = this.fieldRootInSection(`SelfDirected_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingAid() {

    const { root, section } = this.fieldRootInSection(`TrainingAid_f`, `Skill and Training`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalDueDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalDueDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalStartDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalStartedDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalValidation() {

    const { root, section } = this.fieldRootInSection(`ApprovalValidation_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeChecklist() {

    const { root, section } = this.fieldRootInSection(`ChangeChecklist_f`, `Version Specific`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDueDate() {

    const { root, section } = this.fieldRootInSection(`ChangeDueDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalVersionDate() {

    const { root, section } = this.fieldRootInSection(`ExternalVersionDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalVersionNo() {

    const { root, section } = this.fieldRootInSection(`ExternalVersionNo_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorNumber() {

    const { root, section } = this.fieldRootInSection(`PriorNumber_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforChange() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReceivedDate() {

    const { root, section } = this.fieldRootInSection(`ReceivedDate_f`, `Version Specific`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
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

  get DocumentType() {

    const { root, section } = this.fieldRootInSection(`DocumentType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DocumentType() {

    const { root, section } = this.fieldRootInSection(`DocumentTypeForSeries_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

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

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponsibleSite() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedDocumentChangeItem() {

    const { root, section } = this.fieldRootInSection(`ChangeItem_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedDocumentChangeRequest() {

    const { root, section } = this.fieldRootInSection(`ChangedByRequest_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationRole() {

    const { root, section } = this.fieldRootInSection(`NotificationRole_f`, `Owner`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultRecordOwner() {

    const { root, section } = this.fieldRootInSection(`DefaultRecordOwner_f`, `Records`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultRecordType() {

    const { root, section } = this.fieldRootInSection(`DefaultRecordType_f`, `Records`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skill() {

    const { root, section } = this.fieldRootInSection(`Skill_f`, `Skill and Training`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillType() {

    const { root, section } = this.fieldRootInSection(`SkillType_f`, `Skill and Training`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeCategory() {

    const { root, section } = this.fieldRootInSection(`ChangeCategory_f`, `Version Specific`);

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

  get ChangeRequestedBy() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestedBy_f`, `Version Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalSites() {

    const { root, section } = this.fieldRootInSection(`AdditionalSites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Departments() {

    const { root, section } = this.fieldRootInSection(`Departments_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentHardcopyControl() {

    const { root, section } = this.fieldRootInSection(`DocumentHardcopyControl_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DocumentReferences() {

    const { root, section } = this.fieldRootInSection(`DocumentReferences_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DrawingReferences() {

    const { root, section } = this.fieldRootInSection(`DrawingReferences_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Equipment() {

    const { root, section } = this.fieldRootInSection(`Equipment_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Manuals() {

    const { root, section } = this.fieldRootInSection(`Manuals_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ShareWithTheseSuppliers() {

    const { root, section } = this.fieldRootInSection(`ShareWithTheseSuppliers_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `Owner`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentEditors() {

    const { root, section } = this.fieldRootInSection(`DocumentEditors_f`, `Owner`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentViewers() {

    const { root, section } = this.fieldRootInSection(`DocumentViewers_f`, `Owner`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Records() {

    const { root, section } = this.fieldRootInSection(`Records_f`, `Records`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillTrainingQuestions() {

    const { root, section } = this.fieldRootInSection(`SkillTrainingQuestions_f`, `Skill and Training`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRoles() {

    const { root, section } = this.fieldRootInSection(`TrainingRoles_f`, `Skill and Training`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Audits() {

    const { root, section } = this.fieldRootInSection(`Audits_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _MaintenanceProcedures() {

    const { root, section } = this.fieldRootInSection(`MaintenanceProcedures_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get Processes() {

    const { root, section } = this.fieldRootInSection(`Processes_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedDocumentChangeOrder() {

    const { root, section } = this.fieldRootInSection(`RelatedDocumentChangeOrder_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrainingEvents() {

    const { root, section } = this.fieldRootInSection(`TrainingEvents_f`, `Skill and Training`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentChangeRequests() {

    const { root, section } = this.fieldRootInSection(`DocumentChangeRequests_f`, `Version Specific`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
