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


export class PFMEAControlsLibrary_p extends DetailsPageBase {
  get UpdatefromLibrary() {

    const { root, section } = this.fieldRootInSection(`LibraryDesign_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get DataForm() {

    const { root, section } = this.fieldRootInSection(`DataForm_f`, `Customer Specific Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReporttoHonda() {

    const { root, section } = this.fieldRootInSection(`ReporttoHonda_f`, `Customer Specific Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ConfirmationofCurrentPreventandDetectionControlsComments() {

    const { root, section } = this.fieldRootInSection(`ConfirmationofCurrentPreven_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlDescription() {

    const { root, section } = this.fieldRootInSection(`ControlDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Detection() {

    const { root, section } = this.fieldRootInSection(`Detection_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _EvaluationMeasurementTechnique() {

    const { root, section } = this.fieldRootInSection(`EvaluationMeasurementTechni_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MachineDeviceJigToolsforManu() {

    const { root, section } = this.fieldRootInSection(`MachineDeviceJigToolsforMan_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Prevention() {

    const { root, section } = this.fieldRootInSection(`Prevention_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ShowonCustomerCPReport() {

    const { root, section } = this.fieldRootInSection(`ShowonCustomerCPReport_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AQLNumber() {

    const { root, section } = this.fieldRootInSection(`AQLNumber_f`, `Sampling & Inspection`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Inspect() {

    const { root, section } = this.fieldRootInSection(`Inspect_f`, `Sampling & Inspection`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequency() {

    const { root, section } = this.fieldRootInSection(`SampleFrequency_f`, `Sampling & Inspection`);

    return new FrequencyField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequencyDescription() {

    const { root, section } = this.fieldRootInSection(`SampleFrequencyDescription_f`, `Sampling & Inspection`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleSize() {

    const { root, section } = this.fieldRootInSection(`SampleSize_f`, `Sampling & Inspection`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `Visual Aid`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get _VisualAids() {

    const { root, section } = this.fieldRootInSection(`VisualAids_f`, `Visual Aid`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get _VisualAidsDescription() {

    const { root, section } = this.fieldRootInSection(`VisualAidsDescription_f`, `Visual Aid`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryControl() {

    const { root, section } = this.fieldRootInSection(`LibraryControl_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponsibleRole() {

    const { root, section } = this.fieldRootInSection(`ResponsibleRole_f`, `Customer Specific Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlMethod() {

    const { root, section } = this.fieldRootInSection(`ControlMethod_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DetectionLevel() {

    const { root, section } = this.fieldRootInSection(`DetectionLevel_f`, `General`);

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

  get OccurrenceLevel() {

    const { root, section } = this.fieldRootInSection(`OccurrenceLevel_f`, `General`);

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

    const { root, section } = this.fieldRootInSection(`AQLTable_f`, `Sampling & Inspection`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleSizeDescription() {

    const { root, section } = this.fieldRootInSection(`SampleSizeDescription_f`, `Sampling & Inspection`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InspectionStations() {

    const { root, section } = this.fieldRootInSection(`InspectionStations_f`, `Sampling & Inspection`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InspectionTypes() {

    const { root, section } = this.fieldRootInSection(`InspectionType_f`, `Sampling & Inspection`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
