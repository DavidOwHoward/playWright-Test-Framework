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


export class MDRLibraryTasks_p extends DetailsPageBase {
  get NumberofCalendarDays() {

    const { root, section } = this.fieldRootInSection(`NumberofCalendarDays_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresVerification() {

    const { root, section } = this.fieldRootInSection(`RequiresVerification_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TaskNotesObjectives() {

    const { root, section } = this.fieldRootInSection(`TaskNotesObjectives_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultResponsibilityPerson() {

    const { root, section } = this.fieldRootInSection(`DefaultResponsibilityPerson_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultResponsibilityRole() {

    const { root, section } = this.fieldRootInSection(`DefaultResponsibilityRole_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultResponsibilityType() {

    const { root, section } = this.fieldRootInSection(`DefaultResponsibilityType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultVerificationPerson() {

    const { root, section } = this.fieldRootInSection(`DefaultVerificationPerson_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultVerificationRole() {

    const { root, section } = this.fieldRootInSection(`DefaultVerificationRole_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultVerificationType() {

    const { root, section } = this.fieldRootInSection(`DefaultVerificationType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskCategory() {

    const { root, section } = this.fieldRootInSection(`TaskCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
