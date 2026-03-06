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


export class ProjectTaskDependency_p extends DetailsPageBase {
  get Lag() {

    const { root, section } = this.fieldRootInSection(`Lag_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DependencyType() {

    const { root, section } = this.fieldRootInSection(`ProjectTaskDependencyType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PredecessorTask() {

    const { root, section } = this.fieldRootInSection(`PredecessorTask_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`APQPProject_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTask() {

    const { root, section } = this.fieldRootInSection(`APQPProjectsTask_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
