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


export class MDRReportabilityQuestions_p extends DetailsPageBase {
  get Question() {

    const { root, section } = this.fieldRootInSection(`Question_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionCode() {

    const { root, section } = this.fieldRootInSection(`QuestionCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceNotes() {

    const { root, section } = this.fieldRootInSection(`ReferenceNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportableIfYes() {

    const { root, section } = this.fieldRootInSection(`ReportableIfYes_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportingCalendarDays() {

    const { root, section } = this.fieldRootInSection(`ReportingCalendarDays_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TypeofReportableEvent() {

    const { root, section } = this.fieldRootInSection(`TypeofReportableEvent_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportingAgencies() {

    const { root, section } = this.fieldRootInSection(`ReportingAgencies_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
