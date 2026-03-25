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


export class DeviceMasterRecordTemplates_p extends DetailsPageBase {
  get CountryRequirements() {

    const { root, section } = this.fieldRootInSection(`CountryRequirements_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteDeviceSpecifications() {

    const { root, section } = this.fieldRootInSection(`ObsoleteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoleteInstallationMaintenanceandService() {

    const { root, section } = this.fieldRootInSection(`ObsoleteInstallationMainten_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoletePackagingandLabeling() {

    const { root, section } = this.fieldRootInSection(`ObsoletePackagingandLabelin_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ObsoletePreviousVersion() {

    const { root, section } = this.fieldRootInSection(`ObsoletePreviousVersion_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteProductionProcessSpecifications() {

    const { root, section } = this.fieldRootInSection(`ObsoleteProductionProcessSp_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteQualityAssurance() {

    const { root, section } = this.fieldRootInSection(`ObsoleteQualityAssurance_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get TemplateCode() {

    const { root, section } = this.fieldRootInSection(`TemplateDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TemplateName() {

    const { root, section } = this.fieldRootInSection(`TemplateName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceSpecifications() {

    const { root, section } = this.fieldRootInSection(`DeviceSpecifications_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InstallationMaintenanceandService() {

    const { root, section } = this.fieldRootInSection(`InstallationMaintandServ_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingandLabeling() {

    const { root, section } = this.fieldRootInSection(`PackagingandLabeling_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductionProcessSpecifications() {

    const { root, section } = this.fieldRootInSection(`ProductionProcessSpecs_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityAssurance() {

    const { root, section } = this.fieldRootInSection(`QualityAssurance_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
