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


export class DeviceMasterRecords_p extends DetailsPageBase {
  get DMRName() {

    const { root, section } = this.fieldRootInSection(`DMRName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DMRNumber() {

    const { root, section } = this.fieldRootInSection(`DMRNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresReviewWarning() {

    const { root, section } = this.fieldRootInSection(`RequiresReviewWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewComplete() {

    const { root, section } = this.fieldRootInSection(`RequiresReview_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoletionApproval() {

    const { root, section } = this.fieldRootInSection(`ObsoletionApproval_f`, `Change Management`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Change Management`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateChangeRequest() {

    const { root, section } = this.fieldRootInSection(`CreateChangeRequest_f`, `Change Management`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EffectiveDate() {

    const { root, section } = this.fieldRootInSection(`EffectiveDate_f`, `Change Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteDMR() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDMR_f`, `Change Management`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteItems() {

    const { root, section } = this.fieldRootInSection(`ObsoleteItems_f`, `Change Management`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforObsoleting() {

    const { root, section } = this.fieldRootInSection(`ReasonforObsoleting_f`, `Change Management`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VersionApproval() {

    const { root, section } = this.fieldRootInSection(`VersionApproval_f`, `Change Management`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteWarningDeviceSpecifications() {

    const { root, section } = this.fieldRootInSection(`ObsoleteWarning_f`, `Device Specifications`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get CountryRequirements() {

    const { root, section } = this.fieldRootInSection(`CountryRequirements_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteInstallationMaintenanceandService() {

    const { root, section } = this.fieldRootInSection(`ObsoleteInstallationMainten_f`, `Installation, Maintenance and Service`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoletePackagingandLabeling() {

    const { root, section } = this.fieldRootInSection(`ObsoletePackagingandLabelin_f`, `Packaging and Labeling`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteProductionProcessSpecifications() {

    const { root, section } = this.fieldRootInSection(`ObsoleteProductionProcessSp_f`, `Production Process Specifications`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteQualityAssurance() {

    const { root, section } = this.fieldRootInSection(`ObsoleteQualityAssurance_f`, `Quality Assurance`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get DMRTemplate() {

    const { root, section } = this.fieldRootInSection(`DMRTemplate_f`, `[Frozen Section]`);

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

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

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

  get _AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `Change Management`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceSpecifications() {

    const { root, section } = this.fieldRootInSection(`DeviceSpecifications_f`, `Device Specifications`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedItems() {

    const { root, section } = this.fieldRootInSection(`RelatedItems_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InstallationMaintenanceandService() {

    const { root, section } = this.fieldRootInSection(`InstallationMaintenanceSpec_f`, `Installation, Maintenance and Service`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingandLabeling() {

    const { root, section } = this.fieldRootInSection(`PackagingandLabeling_f`, `Packaging and Labeling`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductionProcessSpecifications() {

    const { root, section } = this.fieldRootInSection(`ProductionProcessSpecs_f`, `Production Process Specifications`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityAssuranceProceduresandSpecifications() {

    const { root, section } = this.fieldRootInSection(`QualityAssuranceProcsSpecs_f`, `Quality Assurance`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ChangeRequests() {

    const { root, section } = this.fieldRootInSection(`ChangeRequests_f`, `Change Management`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
