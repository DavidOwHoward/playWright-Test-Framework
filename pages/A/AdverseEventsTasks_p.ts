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


export class AdverseEventsTasks_p extends DetailsPageBase {
  get ExtensionApproved() {

    const { root, section } = this.fieldRootInSection(`ExtensionApproved_f`, `Extension Request`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NewTargetDate() {

    const { root, section } = this.fieldRootInSection(`NewTargetDate_f`, `Extension Request`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforApprovingorRejectingExtension() {

    const { root, section } = this.fieldRootInSection(`ExtensionApprovalNotes_f`, `Extension Request`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforExtension() {

    const { root, section } = this.fieldRootInSection(`ReasonforExtension_f`, `Extension Request`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestExtension() {

    const { root, section } = this.fieldRootInSection(`RequestExtension_f`, `Extension Request`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get FormalResponse() {

    const { root, section } = this.fieldRootInSection(`FormalResponse_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Task() {

    const { root, section } = this.fieldRootInSection(`Task_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TaskNotesObjectives() {

    const { root, section } = this.fieldRootInSection(`TaskNotesObjectives_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEventAssignedSpecialist() {

    const { root, section } = this.fieldRootInSection(`ComplaintAssignedSpecialist_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEventNumber() {

    const { root, section } = this.fieldRootInSection(`Complaint_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskCategory() {

    const { root, section } = this.fieldRootInSection(`TaskCategory_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ExtensionRequestCompletedBy() {

    const { root, section } = this.fieldRootInSection(`ExtensionRequestCompletedBy_f`, `Extension Request`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryTask() {

    const { root, section } = this.fieldRootInSection(`LibraryTask_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationResponsibility() {

    const { root, section } = this.fieldRootInSection(`VerificationResponsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgressNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressNotes_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
