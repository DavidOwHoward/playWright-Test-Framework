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


export class EmployeeEvents_p extends DetailsPageBase {
  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeEventChecklist() {

    const { root, section } = this.fieldRootInSection(`EmployeeEventChecklist_f`, `General`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get EventInitiatedDate() {

    const { root, section } = this.fieldRootInSection(`EventInitiatedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EventCoordinator() {

    const { root, section } = this.fieldRootInSection(`EventCoordinator_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EventType() {

    const { root, section } = this.fieldRootInSection(`EventType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
