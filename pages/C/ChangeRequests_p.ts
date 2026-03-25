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


export class ChangeRequests_p extends DetailsPageBase {
  get CRNumber() {

    const { root, section } = this.fieldRootInSection(`DocumentCRNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _AllowNewItems() {

    const { root, section } = this.fieldRootInSection(`AllowNewItems_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _AllowObsoleteItems() {

    const { root, section } = this.fieldRootInSection(`AllowObsoleteItems_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Approval() {

    const { root, section } = this.fieldRootInSection(`Approval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalMethod() {

    const { root, section } = this.fieldRootInSection(`ApprovalMethod_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateChangeOrder() {

    const { root, section } = this.fieldRootInSection(`CreateChangeOrder_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _CustomerNotificationandApprovalRequired() {

    const { root, section } = this.fieldRootInSection(`CustomerNotificationandAppr_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EffectiveDate() {

    const { root, section } = this.fieldRootInSection(`EffectiveDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EvidenceofApproval() {

    const { root, section } = this.fieldRootInSection(`EvidenceofApproval_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestCancelled() {

    const { root, section } = this.fieldRootInSection(`RequestCancelled_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get StatusDate() {

    const { root, section } = this.fieldRootInSection(`StatusDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TeamApproval() {

    const { root, section } = this.fieldRootInSection(`TeamApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskChecklist() {

    const { root, section } = this.fieldRootInSection(`RiskChecklist_f`, `Risk Assessment`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskChecklistValidation() {

    const { root, section } = this.fieldRootInSection(`RiskChecklistValidation_f`, `Risk Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequestType() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Coordinator() {

    const { root, section } = this.fieldRootInSection(`Coordinator_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

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

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceMasterRecord() {

    const { root, section } = this.fieldRootInSection(`DeviceMasterRecord_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedDocuments() {

    const { root, section } = this.fieldRootInSection(`AffectedDocuments_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedDrawings() {

    const { root, section } = this.fieldRootInSection(`Drawings_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`AffectedManufacturingDocume_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedProcesses() {

    const { root, section } = this.fieldRootInSection(`AffectedProcesses_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeItems() {

    const { root, section } = this.fieldRootInSection(`DocumentChangeItems_f`, `Change Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Impacts() {

    const { root, section } = this.fieldRootInSection(`Impacts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Issues() {

    const { root, section } = this.fieldRootInSection(`Issues_f`, `Issues`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproversbySite() {

    const { root, section } = this.fieldRootInSection(`ApproversbySite_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentOwners() {

    const { root, section } = this.fieldRootInSection(`DocumentOwners_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedImprovements() {

    const { root, section } = this.fieldRootInSection(`RelatedImprovements_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedProjects() {

    const { root, section } = this.fieldRootInSection(`RelatedProjects_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NewDocumentRequests() {

    const { root, section } = this.fieldRootInSection(`NewDocumentRequests_f`, `New Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NewDrawingRequests() {

    const { root, section } = this.fieldRootInSection(`NewDrawingRequests_f`, `New Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NewMfgDocumentRequests() {

    const { root, section } = this.fieldRootInSection(`NewMfgDocumentRequests_f`, `New Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NewProcessRequests() {

    const { root, section } = this.fieldRootInSection(`NewProcessRequests_f`, `New Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumenttoObsolete() {

    const { root, section } = this.fieldRootInSection(`DocumenttoObsolete_f`, `Obsolete Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteDrawingRequests() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDrawingRequests_f`, `Obsolete Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteMfgDocumentRequests() {

    const { root, section } = this.fieldRootInSection(`ObsoleteMfgDocumentRequests_f`, `Obsolete Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteProcessRequests() {

    const { root, section } = this.fieldRootInSection(`ObsoleteProcessRequests_f`, `Obsolete Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `Risk Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeOrder() {

    const { root, section } = this.fieldRootInSection(`ChangeOrder_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
