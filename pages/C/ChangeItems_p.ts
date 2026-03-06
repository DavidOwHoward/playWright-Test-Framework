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


export class ChangeItems_p extends DetailsPageBase {
  get ChangeDueDate() {

    const { root, section } = this.fieldRootInSection(`ChangeDueDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeItemNumber() {

    const { root, section } = this.fieldRootInSection(`ChangeItemNumbernew_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StatusDate() {

    const { root, section } = this.fieldRootInSection(`StatusDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ImpactedDocuments() {

    const { root, section } = this.fieldRootInSection(`ImpactedDocuments_f`, `General`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ImpactedDrawings() {

    const { root, section } = this.fieldRootInSection(`ImpactedDrawings_f`, `General`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ImpactedManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`ImpactedManufacturingDocume_f`, `General`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ImpactedProcesses() {

    const { root, section } = this.fieldRootInSection(`ImpactedProcesses_f`, `General`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforChange() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeOwner() {

    const { root, section } = this.fieldRootInSection(`ChangeItemOwner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedDocument() {

    const { root, section } = this.fieldRootInSection(`AffectedDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedDrawing() {

    const { root, section } = this.fieldRootInSection(`AffectedDrawing_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`AffectedManufacturingDocume_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedProcess() {

    const { root, section } = this.fieldRootInSection(`AffectedProcess_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeCategory() {

    const { root, section } = this.fieldRootInSection(`ChangeCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequest() {

    const { root, section } = this.fieldRootInSection(`ChangeRequest_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
