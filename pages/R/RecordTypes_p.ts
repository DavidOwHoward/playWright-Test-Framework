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


export class RecordTypes_p extends DetailsPageBase {
  get RecordType() {

    const { root, section } = this.fieldRootInSection(`RecordType_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordTypeCode() {

    const { root, section } = this.fieldRootInSection(`RecordTypeCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ConverttoPDF() {

    const { root, section } = this.fieldRootInSection(`ConverttoPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get FileMethod() {

    const { root, section } = this.fieldRootInSection(`FileMethod_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MinimumRecordRetention() {

    const { root, section } = this.fieldRootInSection(`MinimumRecordRetention_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RestrictPDF() {

    const { root, section } = this.fieldRootInSection(`RestrictPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get StorageLocation() {

    const { root, section } = this.fieldRootInSection(`StorageLocation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReview() {

    const { root, section } = this.fieldRootInSection(`LastReview_f`, `Record Type Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDue() {

    const { root, section } = this.fieldRootInSection(`NextReviewDue_f`, `Record Type Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresReview() {

    const { root, section } = this.fieldRootInSection(`RequiresReview_f`, `Record Type Review`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ReviewNotes_f`, `Record Type Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PersonResponsible() {

    const { root, section } = this.fieldRootInSection(`PersonResponsible_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DefaultTimeBasedDisposalFrequency() {

    const { root, section } = this.fieldRootInSection(`DefaultTimebasedDisposalFre_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewCompletedBy() {

    const { root, section } = this.fieldRootInSection(`ReviewCompletedBy_f`, `Record Type Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `Record Type Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
