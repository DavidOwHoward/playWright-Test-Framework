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


export class InspectionPlanItems_p extends DetailsPageBase {
  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `Inspection Requirements`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AQLNumber() {

    const { root, section } = this.fieldRootInSection(`AQLNumber_f`, `Sampling`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequency() {

    const { root, section } = this.fieldRootInSection(`SampleFrequenc_f`, `Sampling`);

    return new FrequencyField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleFrequencyDescription() {

    const { root, section } = this.fieldRootInSection(`SampleFrequency_f`, `Sampling`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleSize() {

    const { root, section } = this.fieldRootInSection(`SampleSize_f`, `Sampling`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `Visual Aid`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get _VisualAids() {

    const { root, section } = this.fieldRootInSection(`VisualAid1_f`, `Visual Aid`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get _VisualAidsDescription() {

    const { root, section } = this.fieldRootInSection(`VisualAid1Description_f`, `Visual Aid`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Inspectionplan() {

    const { root, section } = this.fieldRootInSection(`Inspectionplan_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Gauge() {

    const { root, section } = this.fieldRootInSection(`Gauge_f`, `Inspection Requirements`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeType() {

    const { root, section } = this.fieldRootInSection(`GaugeType_f`, `Inspection Requirements`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionStation() {

    const { root, section } = this.fieldRootInSection(`InspectionStation_f`, `Inspection Requirements`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionType() {

    const { root, section } = this.fieldRootInSection(`InspectionType_f`, `Inspection Requirements`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Processes() {

    const { root, section } = this.fieldRootInSection(`Processes_f`, `Inspection Requirements`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Specification() {

    const { root, section } = this.fieldRootInSection(`DrawingFeature_f`, `Inspection Requirements`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Specification() {

    const { root, section } = this.fieldRootInSection(`Specification_f`, `Inspection Requirements`);

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
}
