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


export class EmployeeSkills_p extends DetailsPageBase {
  get ExpiresOn() {

    const { root, section } = this.fieldRootInSection(`ExpiresOn_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LastTrained() {

    const { root, section } = this.fieldRootInSection(`LastTrained_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresTraining() {

    const { root, section } = this.fieldRootInSection(`RequiresTraining_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _SelfDirected() {

    const { root, section } = this.fieldRootInSection(`SelfDirected_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentChange() {

    const { root, section } = this.fieldRootInSection(`DocumentChange_f`, `Training Required Reasons`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get FrequencyExpired() {

    const { root, section } = this.fieldRootInSection(`FrequencyExpired_f`, `Training Required Reasons`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RatingDeficiency() {

    const { root, section } = this.fieldRootInSection(`RatingDeficiency_f`, `Training Required Reasons`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEvent() {

    const { root, section } = this.fieldRootInSection(`TrainingEvent_f`, `Training Required Reasons`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skill() {

    const { root, section } = this.fieldRootInSection(`Skill_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRole() {

    const { root, section } = this.fieldRootInSection(`TrainingRole_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentRating() {

    const { root, section } = this.fieldRootInSection(`CurrentRating_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportsTo() {

    const { root, section } = this.fieldRootInSection(`ReportsTo_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiredRating() {

    const { root, section } = this.fieldRootInSection(`RequiredRating_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Shift() {

    const { root, section } = this.fieldRootInSection(`Shift_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillType() {

    const { root, section } = this.fieldRootInSection(`SkillType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrainingPlans() {

    const { root, section } = this.fieldRootInSection(`TrainingPlans_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
