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


export class ToolingandEquipment_p extends DetailsPageBase {
  get NumberofCavities() {

    const { root, section } = this.fieldRootInSection(`NumberOfCavities_f`, `Cavity Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _DisplayExpressionToolingEquipment() {

    const { root, section } = this.fieldRootInSection(`DisplayExpressionEquipment_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get IsatDowntime() {

    const { root, section } = this.fieldRootInSection(`IsatDowntime_f`, `General Tooling & Equipment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _KeyToolingEquipment() {

    const { root, section } = this.fieldRootInSection(`KeyEquipment_f`, `General Tooling & Equipment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ModelNumber() {

    const { root, section } = this.fieldRootInSection(`ModelNumber_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SerialNumber() {

    const { root, section } = this.fieldRootInSection(`SerialNumber_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentAutoNumber() {

    const { root, section } = this.fieldRootInSection(`EquipmentAutoNumber_f`, `General Tooling & Equipment`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentDescription() {

    const { root, section } = this.fieldRootInSection(`EquipmentDescription_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentNumber() {

    const { root, section } = this.fieldRootInSection(`EquipmentNumber_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get WarrantyInformation() {

    const { root, section } = this.fieldRootInSection(`WarrantyInformation_f`, `General Tooling & Equipment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get HoursinUseSinceMaintenance() {

    const { root, section } = this.fieldRootInSection(`HoursinUseSinceMaintenance_f`, `Location/Status`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Location() {

    const { root, section } = this.fieldRootInSection(`Location_f`, `Location/Status`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _StatusDateTime() {

    const { root, section } = this.fieldRootInSection(`StatusDateTime_f`, `Location/Status`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get UsageFrequencyValue() {

    const { root, section } = this.fieldRootInSection(`UsageFrequencyHours_f`, `Location/Status`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General Asset`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General Tooling & Equipment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Manufacturer() {

    const { root, section } = this.fieldRootInSection(`Manufacturer_f`, `General Tooling & Equipment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Program() {

    const { root, section } = this.fieldRootInSection(`Program_f`, `General Tooling & Equipment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentSubType() {

    const { root, section } = this.fieldRootInSection(`EquipmentSubType_f`, `General Tooling & Equipment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentType() {

    const { root, section } = this.fieldRootInSection(`EquipmentType_f`, `General Tooling & Equipment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkCenter() {

    const { root, section } = this.fieldRootInSection(`WorkCenter_f`, `General Tooling & Equipment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `Location/Status`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Cavities() {

    const { root, section } = this.fieldRootInSection(`Cavities_f`, `Cavity Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Downtime() {

    const { root, section } = this.fieldRootInSection(`Downtime_f`, `Downtime Log`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedToolingEquipment() {

    const { root, section } = this.fieldRootInSection(`RelatedEquipment_f`, `General Tooling & Equipment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentUsage() {

    const { root, section } = this.fieldRootInSection(`EquipmentUsage_f`, `General Tooling & Equipment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentMaintenanceProcedures() {

    const { root, section } = this.fieldRootInSection(`EquipmentMaintenanceProcedu_f`, `Maintenance Procedures`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Preventive() {

    const { root, section } = this.fieldRootInSection(`Preventive_f`, `Maintenance Work Orders`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Reactive() {

    const { root, section } = this.fieldRootInSection(`Reactive_f`, `Maintenance Work Orders`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
