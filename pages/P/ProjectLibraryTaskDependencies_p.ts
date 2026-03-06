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


export class ProjectLibraryTaskDependencies_p extends DetailsPageBase {
  get Lag() {

    const { root, section } = this.fieldRootInSection(`Lag_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryPhase() {

    const { root, section } = this.fieldRootInSection(`LibraryGate_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTemplate() {

    const { root, section } = this.fieldRootInSection(`ProjectType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DependencyType() {

    const { root, section } = this.fieldRootInSection(`LibTaskDependencyType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryTask() {

    const { root, section } = this.fieldRootInSection(`LibraryTask_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PredecessorTask() {

    const { root, section } = this.fieldRootInSection(`PredecessorTask_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
