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


export class EmployeeTitles_p extends DetailsPageBase {
  get EmployeeTitle() {

    const { root, section } = this.fieldRootInSection(`EmployeeTitle_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeTitleCode() {

    const { root, section } = this.fieldRootInSection(`EmployeeTitleCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TopManagement() {

    const { root, section } = this.fieldRootInSection(`TopManagement_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AutomaticallyCreateTrainingRole() {

    const { root, section } = this.fieldRootInSection(`AutomaticallyCreateTraining_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get MakeInactive() {

    const { root, section } = this.fieldRootInSection(`MakeInactive_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _MakeInactive() {

    const { root, section } = this.fieldRootInSection(`SetStateInactive_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardCost() {

    const { root, section } = this.fieldRootInSection(`StandardCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _EducationalTrainingRequirements() {

    const { root, section } = this.fieldRootInSection(`EducationTrainingReqs_f`, `Job Description`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get JobResponsibilities() {

    const { root, section } = this.fieldRootInSection(`JobResponsibilities_f`, `Job Description`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get JobSummary() {

    const { root, section } = this.fieldRootInSection(`JobSummary_f`, `Job Description`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportsTo() {

    const { root, section } = this.fieldRootInSection(`ReportsTo_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get BackupPersonnel() {

    const { root, section } = this.fieldRootInSection(`BackupPersonnel_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeesWithTitle() {

    const { root, section } = this.fieldRootInSection(`Employees_f`, `Training Roles`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiredTrainingRoles() {

    const { root, section } = this.fieldRootInSection(`RequiredTrainingRoles2_f`, `Training Roles`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
