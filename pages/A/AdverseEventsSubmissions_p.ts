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


export class AdverseEventsSubmissions_p extends DetailsPageBase {
  get AcknowledgementReceived() {

    const { root, section } = this.fieldRootInSection(`AcknowledgementReceived_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AutomatedSubmission() {

    const { root, section } = this.fieldRootInSection(`AutomatedSubmission_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get FinalSubmission() {

    const { root, section } = this.fieldRootInSection(`FinalSubmission_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _SubmissionDateTime() {

    const { root, section } = this.fieldRootInSection(`SubmissionDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmissionNumber() {

    const { root, section } = this.fieldRootInSection(`SubmissionNumber_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEvent() {

    const { root, section } = this.fieldRootInSection(`Complaint_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEventAssignedSpecialist() {

    const { root, section } = this.fieldRootInSection(`ComplaintAssignedSpecialist_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FollowUpType() {

    const { root, section } = this.fieldRootInSection(`FollowUpType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportType() {

    const { root, section } = this.fieldRootInSection(`ReportType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportingAgency() {

    const { root, section } = this.fieldRootInSection(`ReportingAgency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmissionAcknowledgements() {

    const { root, section } = this.fieldRootInSection(`SubmissionAcknowledgements_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
