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


export class Meetings_p extends DetailsPageBase {
  get MeetingNumber() {

    const { root, section } = this.fieldRootInSection(`Meeting_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get MeetingTitle() {

    const { root, section } = this.fieldRootInSection(`MeetingTitle_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MeetingAgenda() {

    const { root, section } = this.fieldRootInSection(`MeetingAgenda_f`, `Agenda`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `Agenda`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Location() {

    const { root, section } = this.fieldRootInSection(`Location_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PrivateCheckboxField() {

    const { root, section } = this.fieldRootInSection(`Private_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Guests() {

    const { root, section } = this.fieldRootInSection(`Guests_f`, `Invitees`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Facilitator() {

    const { root, section } = this.fieldRootInSection(`Facilitator_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MeetingType() {

    const { root, section } = this.fieldRootInSection(`MeetingType_f`, `[Frozen Section]`);

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

  get Project() {

    const { root, section } = this.fieldRootInSection(`NewProductDevelopment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeParticipants() {

    const { root, section } = this.fieldRootInSection(`EmployeeParticipants_f`, `Invitees`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalParticipants() {

    const { root, section } = this.fieldRootInSection(`CustomerParticipants_f`, `Invitees`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ParticipantAttendance() {

    const { root, section } = this.fieldRootInSection(`ParticipantAttendance_f`, `Invitees`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _IssuesDiscussed() {

    const { root, section } = this.fieldRootInSection(`IssuesDiscussed_f`, `Issues`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewIssues() {

    const { root, section } = this.fieldRootInSection(`NewIssues_f`, `Issues`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Improvements() {

    const { root, section } = this.fieldRootInSection(`Improvements_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearned() {

    const { root, section } = this.fieldRootInSection(`LessonsLearned_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformances() {

    const { root, section } = this.fieldRootInSection(`Nonconformances_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
