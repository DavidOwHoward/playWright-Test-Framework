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


export class WorkflowLibrary_p extends DetailsPageBase {
  get CalculateFrom() {

    const { root, section } = this.fieldRootInSection(`CalculateFrom_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Instructions() {

    const { root, section } = this.fieldRootInSection(`Instructions_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDaystoComplete() {

    const { root, section } = this.fieldRootInSection(`NumberofDaystoComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentageofTimetoComplete() {

    const { root, section } = this.fieldRootInSection(`PercentageofTimetoComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SequenceNumber() {

    const { root, section } = this.fieldRootInSection(`SequenceNumber_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Role() {

    const { root, section } = this.fieldRootInSection(`Role_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkflowCategory() {

    const { root, section } = this.fieldRootInSection(`WorkflowCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdhocTasks() {

    const { root, section } = this.fieldRootInSection(`AdhocTasks_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
