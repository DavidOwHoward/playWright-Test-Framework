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


export class ProjectTasksLibrary_p extends DetailsPageBase {
  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierResponsibleTask() {

    const { root, section } = this.fieldRootInSection(`SupplierResponsibleTask_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Critical() {

    const { root, section } = this.fieldRootInSection(`Criticality_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Duration() {

    const { root, section } = this.fieldRootInSection(`Duration_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PPAPSaveWarning() {

    const { root, section } = this.fieldRootInSection(`PPAPSaveWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _Requirements() {

    const { root, section } = this.fieldRootInSection(`Requirements_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresApproval() {

    const { root, section } = this.fieldRootInSection(`RequireApproval_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresCustomerApproval() {

    const { root, section } = this.fieldRootInSection(`RequiresCustomerApproval_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresFile() {

    const { root, section } = this.fieldRootInSection(`RequiresFile_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Phase() {

    const { root, section } = this.fieldRootInSection(`Gate_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PPAPRequirement() {

    const { root, section } = this.fieldRootInSection(`PPAPRequirement_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectRoleResponsibility() {

    const { root, section } = this.fieldRootInSection(`ProjectRoleResponsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Level1ApproverRoles() {

    const { root, section } = this.fieldRootInSection(`Level1ApproverRoles_f`, `Approval Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Level2ApproverRoles() {

    const { root, section } = this.fieldRootInSection(`Level2ApproverRoles_f`, `Approval Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Level3ApproverRoles() {

    const { root, section } = this.fieldRootInSection(`Level3ApproverRoles_f`, `Approval Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Predecessors() {

    const { root, section } = this.fieldRootInSection(`Predecessors_f`, `Dependencies`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SubmissionLevels() {

    const { root, section } = this.fieldRootInSection(`SubmissionLevels_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskChecklist() {

    const { root, section } = this.fieldRootInSection(`NewProductDevelopmentQuesti_f`, `Task Checklist`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
