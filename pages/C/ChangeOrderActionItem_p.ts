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


export class ChangeOrderActionItem_p extends DetailsPageBase {
  get ActionItemNumber() {

    const { root, section } = this.fieldRootInSection(`ActionItemNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Summary() {

    const { root, section } = this.fieldRootInSection(`Summary_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateComplete() {

    const { root, section } = this.fieldRootInSection(`DateComplete_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentageComplete() {

    const { root, section } = this.fieldRootInSection(`PercentageComplete_f`, `Progress`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeOrderNumber() {

    const { root, section } = this.fieldRootInSection(`ChangeOrderNumber_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entities() {

    const { root, section } = this.fieldRootInSection(`BusinessEntities_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Drawings() {

    const { root, section } = this.fieldRootInSection(`Drawings_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocuments_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Processes() {

    const { root, section } = this.fieldRootInSection(`Processes_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgressorCompletionNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressorCompletionNotes_f`, `Progress`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
