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


export class ProblemSolvingTasks_p extends DetailsPageBase {
  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskNumber() {

    const { root, section } = this.fieldRootInSection(`TaskNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapePlan() {

    const { root, section } = this.fieldRootInSection(`EscapePlan_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrencePlan() {

    const { root, section } = this.fieldRootInSection(`OccurrencePlan_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PreventionPlan() {

    const { root, section } = this.fieldRootInSection(`PreventionPlan_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicPlan() {

    const { root, section } = this.fieldRootInSection(`SystemicPlan_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskDescription() {

    const { root, section } = this.fieldRootInSection(`TaskDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskTitle() {

    const { root, section } = this.fieldRootInSection(`TaskTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompleteDate() {

    const { root, section } = this.fieldRootInSection(`CompleteDate_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ExtensionApproval() {

    const { root, section } = this.fieldRootInSection(`ExtensionApproval_f`, `Progress`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ExtensionApprovalComments() {

    const { root, section } = this.fieldRootInSection(`ExtensionApprovalComments_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProgressCompletionNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressCompletionNotes_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforRequestingExtension() {

    const { root, section } = this.fieldRootInSection(`ReasonForExtension_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestExtension() {

    const { root, section } = this.fieldRootInSection(`RequestExtension_f`, `Progress`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestedDueDate() {

    const { root, section } = this.fieldRootInSection(`RequestedDueDate_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customercomplaint() {

    const { root, section } = this.fieldRootInSection(`Customercomplaint_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Improvement() {

    const { root, section } = this.fieldRootInSection(`Improvement_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get IncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`Investigation_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`Initiatedby_f`, `[Frozen Section]`);

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

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
