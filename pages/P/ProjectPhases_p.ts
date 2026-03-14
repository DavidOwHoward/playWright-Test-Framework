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


export class ProjectPhases_p extends DetailsPageBase {
  get ActualFinishDate() {

    const { root, section } = this.fieldRootInSection(`ActualFinishDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualStartDate() {

    const { root, section } = this.fieldRootInSection(`ActualStartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get BaselineFinishDate() {

    const { root, section } = this.fieldRootInSection(`BaselineFinishDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get BaselineStartDate() {

    const { root, section } = this.fieldRootInSection(`BaselineStartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Phase() {

    const { root, section } = this.fieldRootInSection(`Gate_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectedFinishDate() {

    const { root, section } = this.fieldRootInSection(`GateEndDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectedStartDate() {

    const { root, section } = this.fieldRootInSection(`GateStartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PhaseApproval() {

    const { root, section } = this.fieldRootInSection(`GateApproval_f`, `Phase Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ColorStatus() {

    const { root, section } = this.fieldRootInSection(`ColorStatus_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PhaseCriticalTaskStatus() {

    const { root, section } = this.fieldRootInSection(`CriticalGateStatus_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PhaseNoncriticalTaskStatus() {

    const { root, section } = this.fieldRootInSection(`NoncriticalGateStatus_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`APQPProject_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmissionLevel() {

    const { root, section } = this.fieldRootInSection(`SubmissionLevel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Tasks() {

    const { root, section } = this.fieldRootInSection(`Tasks_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PhaseApprovers() {

    const { root, section } = this.fieldRootInSection(`GateApprovers_f`, `Phase Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
