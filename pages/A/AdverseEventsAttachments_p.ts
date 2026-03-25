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


export class AdverseEventsAttachments_p extends DetailsPageBase {
  get ConverttoPDF() {

    const { root, section } = this.fieldRootInSection(`ConverttoPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CreatedDate() {

    const { root, section } = this.fieldRootInSection(`CreatedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceEvaluationSummary() {

    const { root, section } = this.fieldRootInSection(`DeviceEvaluationSummary_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get FileAttachment() {

    const { root, section } = this.fieldRootInSection(`FileAttachment_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get IncludewithSubmission() {

    const { root, section } = this.fieldRootInSection(`IncludewithSubmission_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RestrictPDF() {

    const { root, section } = this.fieldRootInSection(`RestrictPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEvent() {

    const { root, section } = this.fieldRootInSection(`Complaint_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CreatedBy() {

    const { root, section } = this.fieldRootInSection(`CreatedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
