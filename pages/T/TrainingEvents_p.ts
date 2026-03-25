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


export class TrainingEvents_p extends DetailsPageBase {
  get _ScheduledStartDateTime() {

    const { root, section } = this.fieldRootInSection(`ScheduledStartDateTime_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventDescription() {

    const { root, section } = this.fieldRootInSection(`TrainingEventDescription_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AverageHourlyRate() {

    const { root, section } = this.fieldRootInSection(`HourlyRate_f`, `Costs`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLogSubtotal() {

    const { root, section } = this.fieldRootInSection(`CostLogSubtotal_f`, `Costs`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalEventCosts() {

    const { root, section } = this.fieldRootInSection(`TotalEventCosts_f`, `Costs`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TraineeCostSubtotal() {

    const { root, section } = this.fieldRootInSection(`TotalCost_f`, `Costs`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DurationinHours() {

    const { root, section } = this.fieldRootInSection(`DurationinHours_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDaysforApproval() {

    const { root, section } = this.fieldRootInSection(`NumberofDaysforApproval_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScheduledEndDateTime() {

    const { root, section } = this.fieldRootInSection(`ScheduledEndDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierLedTraining() {

    const { root, section } = this.fieldRootInSection(`SupplierLedTraining_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventApproversValidation() {

    const { root, section } = this.fieldRootInSection(`TrainingEventApproversValid_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventLocation() {

    const { root, section } = this.fieldRootInSection(`TrainingEventLocation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventNumber() {

    const { root, section } = this.fieldRootInSection(`TrainingEventNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get _InstructionalVideos() {

    const { root, section } = this.fieldRootInSection(`InstructionalVideo_f`, `Instructional Video`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalDueDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalDueDate_f`, `Training Event Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalStartDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalStartDate_f`, `Training Event Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventApproval() {

    const { root, section } = this.fieldRootInSection(`TrainingEventApproval_f`, `Training Event Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _OrganizerTrainer() {

    const { root, section } = this.fieldRootInSection(`Organizer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `Costs`);

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

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventType() {

    const { root, section } = this.fieldRootInSection(`TrainingEventType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Document() {

    const { root, section } = this.fieldRootInSection(`Document_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityAlert() {

    const { root, section } = this.fieldRootInSection(`QualityAlert_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestforTraining() {

    const { root, section } = this.fieldRootInSection(`RequestforTraining_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultNewSkillRating() {

    const { root, section } = this.fieldRootInSection(`UpdateAllNewSkillRating_f`, `Training Log`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Attendees() {

    const { root, section } = this.fieldRootInSection(`Attendees_f`, `Attendees and Skills`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skills() {

    const { root, section } = this.fieldRootInSection(`Skills2_f`, `Attendees and Skills`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRoles() {

    const { root, section } = this.fieldRootInSection(`TrainingRoles_f`, `Attendees and Skills`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLog_f`, `Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrainingEventApprovers() {

    const { root, section } = this.fieldRootInSection(`TrainingEventApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeandSkills() {

    const { root, section } = this.fieldRootInSection(`EmployeeandSkills_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventLog() {

    const { root, section } = this.fieldRootInSection(`TrainingEventLog_f`, `Training Log`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
