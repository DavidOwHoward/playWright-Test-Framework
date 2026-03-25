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


export class GaugeSubTypeCalibrationStandardsResults_p extends DetailsPageBase {
  get LowerLimit() {

    const { root, section } = this.fieldRootInSection(`LowerLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Measurement() {

    const { root, section } = this.fieldRootInSection(`Measurement_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ReferenceValue() {

    const { root, section } = this.fieldRootInSection(`ReferenceValue_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleNumber() {

    const { root, section } = this.fieldRootInSection(`SampleNumber_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardDescription() {

    const { root, section } = this.fieldRootInSection(`StandardDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardID() {

    const { root, section } = this.fieldRootInSection(`StandardID_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetReference() {

    const { root, section } = this.fieldRootInSection(`Target_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UpperLimit() {

    const { root, section } = this.fieldRootInSection(`UpperLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeSubType() {

    const { root, section } = this.fieldRootInSection(`GaugeSubType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MasterGauge() {

    const { root, section } = this.fieldRootInSection(`MasterGauge_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
