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


export class ActualReadings_p extends DetailsPageBase {
  get Reading() {

    const { root, section } = this.fieldRootInSection(`Reading_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingDate() {

    const { root, section } = this.fieldRootInSection(`ReadingDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingDueDate() {

    const { root, section } = this.fieldRootInSection(`ReadingDueDat_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingNotes() {

    const { root, section } = this.fieldRootInSection(`ReadingNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingValue() {

    const { root, section } = this.fieldRootInSection(`ReadingValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Measure() {

    const { root, section } = this.fieldRootInSection(`Measure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Target() {

    const { root, section } = this.fieldRootInSection(`Target_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformances() {

    const { root, section } = this.fieldRootInSection(`Nonconformances_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
