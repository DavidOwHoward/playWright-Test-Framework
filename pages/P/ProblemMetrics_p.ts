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


export class ProblemMetrics_p extends DetailsPageBase {
  get _BaselineDateTime() {

    const { root, section } = this.fieldRootInSection(`BaselineDateTime_f`, `Baseline`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get BaselineNumericValue() {

    const { root, section } = this.fieldRootInSection(`BaselineNumericValue_f`, `Baseline`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get BaselineTextValue() {

    const { root, section } = this.fieldRootInSection(`BaselineTextValue_f`, `Baseline`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MetricCode() {

    const { root, section } = this.fieldRootInSection(`MetricCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MetricDescription() {

    const { root, section } = this.fieldRootInSection(`MetricDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MetricName() {

    const { root, section } = this.fieldRootInSection(`MetricName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _MetricReadings() {

    const { root, section } = this.fieldRootInSection(`MetricReadings_f`, `Readings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
