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


export class GaugeSubTypes_p extends DetailsPageBase {
  get _GaugeSubTypeCode() {

    const { root, section } = this.fieldRootInSection(`GaugeSubTypeCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeSubTypeName() {

    const { root, section } = this.fieldRootInSection(`GaugeSubTypeName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LSL() {

    const { root, section } = this.fieldRootInSection(`LSL_f`, `Calibration Standards`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get USL() {

    const { root, section } = this.fieldRootInSection(`USL_f`, `Calibration Standards`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _Accuracy() {

    const { root, section } = this.fieldRootInSection(`Accuracy_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDecimals() {

    const { root, section } = this.fieldRootInSection(`NumberofDecimals_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `General`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeType() {

    const { root, section } = this.fieldRootInSection(`GaugeType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CalibrationStudyStandards() {

    const { root, section } = this.fieldRootInSection(`CalibrationStandards_f`, `Calibration Standards`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get __CalibrationStudyStandards() {

    const { root, section } = this.fieldRootInSection(`CalibrationStudyStandards2_f`, `Calibration Standards`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Gauges() {

    const { root, section } = this.fieldRootInSection(`Gauges_f`, `Used By`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
