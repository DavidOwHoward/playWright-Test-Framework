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


export class DocumentHardcopy_p extends DetailsPageBase {
  get IssueNumber() {

    const { root, section } = this.fieldRootInSection(`IssueNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get IssuedDate() {

    const { root, section } = this.fieldRootInSection(`IssuedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorNumber() {

    const { root, section } = this.fieldRootInSection(`PriorNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityIssued() {

    const { root, section } = this.fieldRootInSection(`QuantityIssued_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Recipient() {

    const { root, section } = this.fieldRootInSection(`Recipient_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RetireNotes() {

    const { root, section } = this.fieldRootInSection(`RetireNotes_f`, `Retrieval Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RetiredDate() {

    const { root, section } = this.fieldRootInSection(`RetiredDate_f`, `Retrieval Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Document() {

    const { root, section } = this.fieldRootInSection(`Document_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RetrievalResponsibility() {

    const { root, section } = this.fieldRootInSection(`RetrievalResponsibility_f`, `Retrieval Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
