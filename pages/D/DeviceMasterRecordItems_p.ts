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


export class DeviceMasterRecordItems_p extends DetailsPageBase {
  get ObsoleteWarning() {

    const { root, section } = this.fieldRootInSection(`ObsoleteWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresReview() {

    const { root, section } = this.fieldRootInSection(`SettoRequiresReview_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReviewCompleteNoChanges() {

    const { root, section } = this.fieldRootInSection(`ReviewCompleteNoChanges_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get UpdatetoLatestVersion() {

    const { root, section } = this.fieldRootInSection(`UpdatetoLatestVersion_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentationDescription() {

    const { root, section } = this.fieldRootInSection(`DocumentationDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get JustificationforNoDocumentation() {

    const { root, section } = this.fieldRootInSection(`JustificationforNoDocumenta_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Number() {

    const { root, section } = this.fieldRootInSection(`Number_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _RequiresReview() {

    const { root, section } = this.fieldRootInSection(`RequiresReview_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignControl() {

    const { root, section } = this.fieldRootInSection(`DesignControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DeviceSpecificationsforDMR() {

    const { root, section } = this.fieldRootInSection(`DeviceSpecifications_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Document() {

    const { root, section } = this.fieldRootInSection(`Document_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentationType() {

    const { root, section } = this.fieldRootInSection(`DocumentationType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Drawing() {

    const { root, section } = this.fieldRootInSection(`Drawing_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InstallationMaintenanceandServicingProceduresandMethodsforDMR() {

    const { root, section } = this.fieldRootInSection(`InstallationMaintenanceServ_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PackagingandLabelingSpecificationsforDMR() {

    const { root, section } = this.fieldRootInSection(`PackagingandLabelingSpecifi_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProductionProcessSpecificationsforDMR() {

    const { root, section } = this.fieldRootInSection(`ProductionProcessSpecs_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _QualityAssuranceProceduresandSpecificationsforDMR() {

    const { root, section } = this.fieldRootInSection(`QualityAssuranceProcandSpecs_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
