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


export class GaugeCalibrationResults_p extends DetailsPageBase {
  get After() {

    const { root, section } = this.fieldRootInSection(`After_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AfterResult() {

    const { root, section } = this.fieldRootInSection(`AfterResult_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AfterResultAttribute() {

    const { root, section } = this.fieldRootInSection(`AfterResultAttribute_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Before() {

    const { root, section } = this.fieldRootInSection(`Before_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get BeforeResult() {

    const { root, section } = this.fieldRootInSection(`BeforeResult_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get BeforeResultAttribute() {

    const { root, section } = this.fieldRootInSection(`BeforeResultAttribute_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LowerLimit() {

    const { root, section } = this.fieldRootInSection(`LowerLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardDescription() {

    const { root, section } = this.fieldRootInSection(`StandardDescription_f`, `General`);

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

  get GaugeCalibration() {

    const { root, section } = this.fieldRootInSection(`GaugeCalibration_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MasterGauge() {

    const { root, section } = this.fieldRootInSection(`MasterGauge_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
