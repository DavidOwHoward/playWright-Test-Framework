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


export class AdhocTasks_p extends DetailsPageBase {
  get ActionTaken() {

    const { root, section } = this.fieldRootInSection(`ActionTaken_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ClosedDate() {

    const { root, section } = this.fieldRootInSection(`ClosedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Instructions() {

    const { root, section } = this.fieldRootInSection(`Instructions_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Role() {

    const { root, section } = this.fieldRootInSection(`Role_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
