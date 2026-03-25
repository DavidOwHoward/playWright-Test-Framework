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


export class InspectionEventQuestions_p extends DetailsPageBase {
  get AQLNumber() {

    const { root, section } = this.fieldRootInSection(`AQLNumber_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Cavity() {

    const { root, section } = this.fieldRootInSection(`Cavity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Destructive() {

    const { root, section } = this.fieldRootInSection(`Destructive_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get LowerLimit() {

    const { root, section } = this.fieldRootInSection(`LowerLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfgDocumentInspectionPlan() {

    const { root, section } = this.fieldRootInSection(`InspectionEventLinkage_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDecimals() {

    const { root, section } = this.fieldRootInSection(`NumberofDecimals_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `General`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequency() {

    const { root, section } = this.fieldRootInSection(`SampleFrequency_f`, `General`);

    return new FrequencyField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequencyDescription() {

    const { root, section } = this.fieldRootInSection(`SampleFrequencyDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleSize() {

    const { root, section } = this.fieldRootInSection(`SampleSize2_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationName() {

    const { root, section } = this.fieldRootInSection(`SpecificationName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationNotes() {

    const { root, section } = this.fieldRootInSection(`SpecificationNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationNumber() {

    const { root, section } = this.fieldRootInSection(`SpecificationNumber_f`, `General`);

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

  get AQLTable() {

    const { root, section } = this.fieldRootInSection(`AQLTable_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlan() {

    const { root, section } = this.fieldRootInSection(`ControlPlan_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeType() {

    const { root, section } = this.fieldRootInSection(`GaugeType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPlan() {

    const { root, section } = this.fieldRootInSection(`InspectionPlan_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPlanItem() {

    const { root, section } = this.fieldRootInSection(`InspectionPlanItem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LowerDays() {

    const { root, section } = this.fieldRootInSection(`LowerDays_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocumentSpecification() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocumentSpecif_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationDataType() {

    const { root, section } = this.fieldRootInSection(`SpecificationDataType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationNameID() {

    const { root, section } = this.fieldRootInSection(`SpecificationNameID_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationType() {

    const { root, section } = this.fieldRootInSection(`SpecificationType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipment() {

    const { root, section } = this.fieldRootInSection(`Equipment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipmentType() {

    const { root, section } = this.fieldRootInSection(`EquipmentType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UpperDays() {

    const { root, section } = this.fieldRootInSection(`UpperDays_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalDocuments() {

    const { root, section } = this.fieldRootInSection(`AdditionalDocuments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
