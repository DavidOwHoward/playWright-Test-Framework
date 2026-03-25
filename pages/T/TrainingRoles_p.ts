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


export class TrainingRoles_p extends DetailsPageBase {
  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRole() {

    const { root, section } = this.fieldRootInSection(`EmployeeRole_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRoleCode() {

    const { root, section } = this.fieldRootInSection(`EmployeeRoleCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproveSkillsChange() {

    const { root, section } = this.fieldRootInSection(`Approval_f`, `Change Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproveStatusChangetoActive() {

    const { root, section } = this.fieldRootInSection(`ApproveStatusChangetoActive_f`, `Change Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproveStatusChangetoInactive() {

    const { root, section } = this.fieldRootInSection(`ApproveStatusChangetoInacti_f`, `Change Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproveInitialSetup() {

    const { root, section } = this.fieldRootInSection(`ApproveInitialSetup_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _SkillstoAddNotice() {

    const { root, section } = this.fieldRootInSection(`SkillstoAddNotice_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeInitiator() {

    const { root, section } = this.fieldRootInSection(`ChangeInitiator_f`, `Change Approval`);

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

  get _SkillstoAddtoTrainingRole() {

    const { root, section } = this.fieldRootInSection(`SkillstoAdd_f`, `Change Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SkillstoRemovefromTrainingRole() {

    const { root, section } = this.fieldRootInSection(`SkillstoRemove_f`, `Change Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CertificationEventSetup() {

    const { root, section } = this.fieldRootInSection(`CertificationEventSetup_f`, `Employee Certification`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _EmployeeCertifications() {

    const { root, section } = this.fieldRootInSection(`EmployeeCertifications_f`, `Employee Certification`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiredSkills() {

    const { root, section } = this.fieldRootInSection(`RequiredSkills_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeswithTrainingRole() {

    const { root, section } = this.fieldRootInSection(`Employees_f`, `Employees`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeswithTrainingRolesforSuccessionDevelopment() {

    const { root, section } = this.fieldRootInSection(`EmployeeSuccessionDevel_f`, `Employees`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
