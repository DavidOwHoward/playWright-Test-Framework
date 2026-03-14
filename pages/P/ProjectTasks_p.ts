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


export class ProjectTasks_p extends DetailsPageBase {
  get NoApproversAssigned() {

    const { root, section } = this.fieldRootInSection(`NoApproversAssigned_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

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

  get Critical() {

    const { root, section } = this.fieldRootInSection(`Criticality_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DeadlineDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DependencyCalculatedDates() {

    const { root, section } = this.fieldRootInSection(`DependencyCalculatedDates_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DependentFinishDate() {

    const { root, section } = this.fieldRootInSection(`CalculatedFinishDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DependentStartDate() {

    const { root, section } = this.fieldRootInSection(`CalculatedStartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Duration() {

    const { root, section } = this.fieldRootInSection(`Duration_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectedFinishDate() {

    const { root, section } = this.fieldRootInSection(`EndDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectedStartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _Requirements() {

    const { root, section } = this.fieldRootInSection(`Requirements_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresApproval() {

    const { root, section } = this.fieldRootInSection(`RequireApproval_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentComplete() {

    const { root, section } = this.fieldRootInSection(`PercentComplete_f`, `Progress`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgressNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressNotes_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskChecklist() {

    const { root, section } = this.fieldRootInSection(`TaskChecklist_f`, `Progress`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskFile() {

    const { root, section } = this.fieldRootInSection(`TaskFile_f`, `Progress`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get ProofofCustomerApproval() {

    const { root, section } = this.fieldRootInSection(`ProofofCustomerApproval_f`, `Task Approval`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskApproval() {

    const { root, section } = this.fieldRootInSection(`TaskApproval_f`, `Task Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierContact() {

    const { root, section } = this.fieldRootInSection(`SupplierContact_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskStatus() {

    const { root, section } = this.fieldRootInSection(`TaskStatus_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get APQPProject() {

    const { root, section } = this.fieldRootInSection(`CRbacktoNewProductDevelopme_f`, `General`);

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

    const { root, section } = this.fieldRootInSection(`APQPProjectGate_f`, `General`);

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

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Predecessors() {

    const { root, section } = this.fieldRootInSection(`Predecessors_f`, `Dependencies`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Level1Approvers() {

    const { root, section } = this.fieldRootInSection(`Level1Approvers_f`, `Task Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Level2Approvers() {

    const { root, section } = this.fieldRootInSection(`Level2Approvers_f`, `Task Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Level3Approvers() {

    const { root, section } = this.fieldRootInSection(`Level3Approvers_f`, `Task Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLogs() {

    const { root, section } = this.fieldRootInSection(`CostsLogs_f`, `Task Issues/Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Issues() {

    const { root, section } = this.fieldRootInSection(`Issues_f`, `Task Issues/Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PPAPRequirement() {

    const { root, section } = this.fieldRootInSection(`PPAPRequirement_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
