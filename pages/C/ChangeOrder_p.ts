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


export class ChangeOrder_p extends DetailsPageBase {
  get ChangeOrderNumber() {

    const { root, section } = this.fieldRootInSection(`ChangeOrderNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EffectiveDate() {

    const { root, section } = this.fieldRootInSection(`EffectiveDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequestNumber() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestNumber_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Coordinator() {

    const { root, section } = this.fieldRootInSection(`Coordinator_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ActionItems() {

    const { root, section } = this.fieldRootInSection(`ActionItems_f`, `Action Item`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedDocuments() {

    const { root, section } = this.fieldRootInSection(`AffectedDocuments_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedDrawings() {

    const { root, section } = this.fieldRootInSection(`Drawings_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`AffectedManufacturingDocume_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AffectedProcesses() {

    const { root, section } = this.fieldRootInSection(`AffectedProcesses_f`, `Affected Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
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
}
