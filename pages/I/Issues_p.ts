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


export class Issues_p extends DetailsPageBase {
  get DateInitiated() {

    const { root, section } = this.fieldRootInSection(`DateInitiated_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get IssueNumber() {

    const { root, section } = this.fieldRootInSection(`IssueNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _IssueImages() {

    const { root, section } = this.fieldRootInSection(`IssueImage_f`, `General`);

    return new Picture(this.page, root, async () => section.openAndWait(root));
  }

  get Priority() {

    const { root, section } = this.fieldRootInSection(`Priority_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Severity() {

    const { root, section } = this.fieldRootInSection(`Severity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Summary() {

    const { root, section } = this.fieldRootInSection(`Summary_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AllTaskResponsibilitiesAssigned() {

    const { root, section } = this.fieldRootInSection(`AllTaskResponsibilitiesAssi_f`, `Issue Workflow`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AllWorkflowCompleted() {

    const { root, section } = this.fieldRootInSection(`AllWorkflowCompleted_f`, `Issue Workflow`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentComplete() {

    const { root, section } = this.fieldRootInSection(`PercentComplete_f`, `Progress`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgressNotes() {

    const { root, section } = this.fieldRootInSection(`Progress_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationDate() {

    const { root, section } = this.fieldRootInSection(`VerificationDate_f`, `Verification`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationNotes() {

    const { root, section } = this.fieldRootInSection(`VerificationNotes_f`, `Verification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationRequired() {

    const { root, section } = this.fieldRootInSection(`VerificationRequired_f`, `Verification`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`AssignedTo_f`, `[Frozen Section]`);

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

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get IssueCategory() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `General`);

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

  get WorkflowCategory() {

    const { root, section } = this.fieldRootInSection(`WorkflowCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequest() {

    const { root, section } = this.fieldRootInSection(`ChangeRequest_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Meeting() {

    const { root, section } = this.fieldRootInSection(`Meeting_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`APQPProject_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTask() {

    const { root, section } = this.fieldRootInSection(`APQPProjectTask_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ColorStatus() {

    const { root, section } = this.fieldRootInSection(`ColorStatus_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _OnHoldReason() {

    const { root, section } = this.fieldRootInSection(`OnHoldReason_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ResolutionCode() {

    const { root, section } = this.fieldRootInSection(`ResolutionCode_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get VerifiedBy() {

    const { root, section } = this.fieldRootInSection(`VerifiedBy_f`, `Verification`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Verifier() {

    const { root, section } = this.fieldRootInSection(`Verifier_f`, `Verification`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Workflow() {

    const { root, section } = this.fieldRootInSection(`Workflows_f`, `Issue Workflow`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _WorkflowRoles() {

    const { root, section } = this.fieldRootInSection(`WorkflowRoles_f`, `Issue Workflow`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLog_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearned() {

    const { root, section } = this.fieldRootInSection(`LessonsLearned_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
