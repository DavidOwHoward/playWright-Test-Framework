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


export class Drawings_p extends DetailsPageBase {
  get DrawingNumber() {

    const { root, section } = this.fieldRootInSection(`DrawingNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DrawingTitle() {

    const { root, section } = this.fieldRootInSection(`DrawingTitle_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ConverttoPDF() {

    const { root, section } = this.fieldRootInSection(`ConverttoPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DrawingFile() {

    const { root, section } = this.fieldRootInSection(`DrawingFile_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
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

  get _ObsoleteDrawing() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDrawing1_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
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

  get VersionApproval() {

    const { root, section } = this.fieldRootInSection(`VersionApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ShareWithAllSuppliers() {

    const { root, section } = this.fieldRootInSection(`ShareWithAllSuppliers_f`, `Links`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDaysforApproval() {

    const { root, section } = this.fieldRootInSection(`NumberofDaysforApproval_f`, `Owner`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
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

  get DrawingAutoNumber() {

    const { root, section } = this.fieldRootInSection(`DrawingAutoNumber_f`, `Version Specific`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
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

    const { root, section } = this.fieldRootInSection(`VersionDate_f`, `Version Specific`);

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

  get DrawingType() {

    const { root, section } = this.fieldRootInSection(`DrawingType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SourceDrawing() {

    const { root, section } = this.fieldRootInSection(`DrawingFeaturesSource_f`, `Feature(s)`);

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

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationRole() {

    const { root, section } = this.fieldRootInSection(`NotificationRole_f`, `Owner`);

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

  get _DrawingFeatures() {

    const { root, section } = this.fieldRootInSection(`DrawingFeatures_f`, `Feature(s)`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DrawingReferences() {

    const { root, section } = this.fieldRootInSection(`DrawingReferences_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ShareWithTheseSuppliers() {

    const { root, section } = this.fieldRootInSection(`ShareWithTheseSuppliers_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipment() {

    const { root, section } = this.fieldRootInSection(`Equipment_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `Owner`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedManufacturingDocumen_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeOrder() {

    const { root, section } = this.fieldRootInSection(`ChangeOrder_f`, `Version Specific`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
