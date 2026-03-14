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


export class ControlLibrary_p extends DetailsPageBase {
  get DataForm() {

    const { root, section } = this.fieldRootInSection(`DataForm_f`, `Customer Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReporttoHonda() {

    const { root, section } = this.fieldRootInSection(`ReporttoHonda_f`, `Customer Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlDescription() {

    const { root, section } = this.fieldRootInSection(`ControlDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _EvaluationMeasurementTechnique() {

    const { root, section } = this.fieldRootInSection(`EvaluationMeasurementTechni_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Inspect() {

    const { root, section } = this.fieldRootInSection(`Inspect_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _MachineDeviceJigToolsforManufacturing() {

    const { root, section } = this.fieldRootInSection(`MachineDeviceJigToolsforMan_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AQLLevel() {

    const { root, section } = this.fieldRootInSection(`AQLNumber_f`, `Sampling`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequency() {

    const { root, section } = this.fieldRootInSection(`SampleFrequency_f`, `Sampling`);

    return new FrequencyField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequencyDescription() {

    const { root, section } = this.fieldRootInSection(`SampleFrequencyDescription_f`, `Sampling`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleSize() {

    const { root, section } = this.fieldRootInSection(`SampleSize_f`, `Sampling`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponsibleRole() {

    const { root, section } = this.fieldRootInSection(`ResponsibleRole_f`, `Customer Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlMethod() {

    const { root, section } = this.fieldRootInSection(`ControlMethod_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeNumber() {

    const { root, section } = this.fieldRootInSection(`GaugeNumber_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeType() {

    const { root, section } = this.fieldRootInSection(`GaugeType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReactionPlan() {

    const { root, section } = this.fieldRootInSection(`ReactionPlan_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipmentNumber() {

    const { root, section } = this.fieldRootInSection(`EquipmentNumber_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipmentType() {

    const { root, section } = this.fieldRootInSection(`EquipmentType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AQLTable() {

    const { root, section } = this.fieldRootInSection(`AQLTable_f`, `Sampling`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleSizeDescription() {

    const { root, section } = this.fieldRootInSection(`SampleSizeDescription_f`, `Sampling`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InspectionStations() {

    const { root, section } = this.fieldRootInSection(`InspectionStations_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InspectionTypes() {

    const { root, section } = this.fieldRootInSection(`InspectionTypes_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
