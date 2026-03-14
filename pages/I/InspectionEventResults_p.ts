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


export class InspectionEventResults_p extends DetailsPageBase {
  get IncompleteCount() {

    const { root, section } = this.fieldRootInSection(`IncompleteCount_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionDate() {

    const { root, section } = this.fieldRootInSection(`InspectionDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PassCount() {

    const { root, section } = this.fieldRootInSection(`PassCount_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Specification() {

    const { root, section } = this.fieldRootInSection(`Specification_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeCalibrationState() {

    const { root, section } = this.fieldRootInSection(`GaugeCalibrationState_f`, `Gauge Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeStatus() {

    const { root, section } = this.fieldRootInSection(`GaugeStatus_f`, `Gauge Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _AcceptanceCriteriaNotes() {

    const { root, section } = this.fieldRootInSection(`SpecificationNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Cavity() {

    const { root, section } = this.fieldRootInSection(`Cavity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Destructive() {

    const { root, section } = this.fieldRootInSection(`Destructive_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EditResultLabel() {

    const { root, section } = this.fieldRootInSection(`EditResultLabel_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get EditResults() {

    const { root, section } = this.fieldRootInSection(`EditResults_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionResultNotes() {

    const { root, section } = this.fieldRootInSection(`InspectionResultNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LowerLimit() {

    const { root, section } = this.fieldRootInSection(`LowerLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PassorFail() {

    const { root, section } = this.fieldRootInSection(`PassorFail_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `General`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get ResultDate() {

    const { root, section } = this.fieldRootInSection(`ResultDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationNumber() {

    const { root, section } = this.fieldRootInSection(`CharacteristicNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Target() {

    const { root, section } = this.fieldRootInSection(`Target_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UpperLimit() {

    const { root, section } = this.fieldRootInSection(`UpperLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _VisualAids() {

    const { root, section } = this.fieldRootInSection(`VisualAid1_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get _VisualAidsDescription() {

    const { root, section } = this.fieldRootInSection(`VisualAidDescription1_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequencyDescription() {

    const { root, section } = this.fieldRootInSection(`SampleFrequencyDescription_f`, `Result Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get BatchSize() {

    const { root, section } = this.fieldRootInSection(`BatchSize_f`, `Result Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LotNumber() {

    const { root, section } = this.fieldRootInSection(`LotNumber_f`, `Result Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDecimals() {

    const { root, section } = this.fieldRootInSection(`NumberofDecimals_f`, `Result Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `Result Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequency() {

    const { root, section } = this.fieldRootInSection(`SampleFrequency_f`, `Result Information`);

    return new FrequencyField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleSize() {

    const { root, section } = this.fieldRootInSection(`SampleSize_f`, `Result Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `Result Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SerialNumber() {

    const { root, section } = this.fieldRootInSection(`SerialNumber_f`, `Result Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkInstructions() {

    const { root, section } = this.fieldRootInSection(`WorkInstructions_f`, `Work Instructions`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeType() {

    const { root, section } = this.fieldRootInSection(`GaugeType_f`, `Gauge Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeUsed() {

    const { root, section } = this.fieldRootInSection(`GaugedUsed_f`, `Gauge Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipment() {

    const { root, section } = this.fieldRootInSection(`Equipment_f`, `Gauge Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipmentType() {

    const { root, section } = this.fieldRootInSection(`EquipmentType_f`, `Gauge Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecialClassification() {

    const { root, section } = this.fieldRootInSection(`SpecialClassification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationDataType() {

    const { root, section } = this.fieldRootInSection(`SpecificationDataType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LowerDays() {

    const { root, section } = this.fieldRootInSection(`LowerDays_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocumentSpecification() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocumentSpecif_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFlow() {

    const { root, section } = this.fieldRootInSection(`ProcessFlow_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReactionPlan() {

    const { root, section } = this.fieldRootInSection(`ReactionPlan_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationNameId() {

    const { root, section } = this.fieldRootInSection(`SpecificationNameId_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationType() {

    const { root, section } = this.fieldRootInSection(`SpecificationType_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UpperDays() {

    const { root, section } = this.fieldRootInSection(`UpperDays_f`, `Result Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalDocuments() {

    const { root, section } = this.fieldRootInSection(`AdditionalDocuments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
