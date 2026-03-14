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


export class CPRTasks_p extends DetailsPageBase {
  get ActualEnd() {

    const { root, section } = this.fieldRootInSection(`ActualEnd_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualStart() {

    const { root, section } = this.fieldRootInSection(`ActualStart_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Approvers() {

    const { root, section } = this.fieldRootInSection(`Approvers_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Checklist() {

    const { root, section } = this.fieldRootInSection(`Checklist_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Deadline() {

    const { root, section } = this.fieldRootInSection(`Deadline_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentComplete() {

    const { root, section } = this.fieldRootInSection(`PercentComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Progress() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresApproval() {

    const { root, section } = this.fieldRootInSection(`RequiresApproval_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StatusDate() {

    const { root, section } = this.fieldRootInSection(`StatusDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskId() {

    const { root, section } = this.fieldRootInSection(`TaskId_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformance() {

    const { root, section } = this.fieldRootInSection(`Nonconformance_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibliity() {

    const { root, section } = this.fieldRootInSection(`Responsibliity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLog_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
