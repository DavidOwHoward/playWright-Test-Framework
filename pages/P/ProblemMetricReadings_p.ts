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


export class ProblemMetricReadings_p extends DetailsPageBase {
  get _ReadingDateTime() {

    const { root, section } = this.fieldRootInSection(`ReadingDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingNotes() {

    const { root, section } = this.fieldRootInSection(`ReadingNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingNumericValue() {

    const { root, section } = this.fieldRootInSection(`ReadingNumericValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingTextValue() {

    const { root, section } = this.fieldRootInSection(`ReadingTextValue_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemMetric() {

    const { root, section } = this.fieldRootInSection(`ProblemMetric_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
