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


export class Measures_p extends DetailsPageBase {
  get Measure() {

    const { root, section } = this.fieldRootInSection(`Measure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MeasureCode() {

    const { root, section } = this.fieldRootInSection(`MeasureCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MeasureDescription() {

    const { root, section } = this.fieldRootInSection(`MeasureDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StatusSetup() {

    const { root, section } = this.fieldRootInSection(`StatusSetup_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ActiveTarget() {

    const { root, section } = this.fieldRootInSection(`ActiveTarget_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LatestReading() {

    const { root, section } = this.fieldRootInSection(`LatestReading_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Objective() {

    const { root, section } = this.fieldRootInSection(`Objective_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ObjectiveCategory() {

    const { root, section } = this.fieldRootInSection(`Perspective_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Targets() {

    const { root, section } = this.fieldRootInSection(`Targets_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get IndicatorfortheseRisks() {

    const { root, section } = this.fieldRootInSection(`IndicatorfortheseRisks_f`, `Risk Indicators`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
