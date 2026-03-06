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


export class Records_p extends DetailsPageBase {
  get RecordNumber() {

    const { root, section } = this.fieldRootInSection(`RecordNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordTitle() {

    const { root, section } = this.fieldRootInSection(`RecordTitle_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ConverttoPDF() {

    const { root, section } = this.fieldRootInSection(`ConverttoPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DisposalDate() {

    const { root, section } = this.fieldRootInSection(`DisposalDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DisposalNotes() {

    const { root, section } = this.fieldRootInSection(`DisposalNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestrictedWarning() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorNumber() {

    const { root, section } = this.fieldRootInSection(`PriorNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReceivedDate() {

    const { root, section } = this.fieldRootInSection(`ReceivedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordDate() {

    const { root, section } = this.fieldRootInSection(`RecordDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordFile() {

    const { root, section } = this.fieldRootInSection(`RecordFile_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get RestrictPDF() {

    const { root, section } = this.fieldRootInSection(`RestrictPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get StorageLocation() {

    const { root, section } = this.fieldRootInSection(`StorageLocation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SuggestedRecordDisposalDate() {

    const { root, section } = this.fieldRootInSection(`SuggestedRecordDisposalDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordType() {

    const { root, section } = this.fieldRootInSection(`RecordType_f`, `[Frozen Section]`);

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

  get Originator() {

    const { root, section } = this.fieldRootInSection(`Originator_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TimebasedDisposalFrequency() {

    const { root, section } = this.fieldRootInSection(`TimebasedDisposalFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OriginalDocument() {

    const { root, section } = this.fieldRootInSection(`OriginalDocument_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`APQPProject_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Customers() {

    const { root, section } = this.fieldRootInSection(`Customers_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Departments() {

    const { root, section } = this.fieldRootInSection(`Departments_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Suppliers() {

    const { root, section } = this.fieldRootInSection(`Suppliers_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
