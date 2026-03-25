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


export class ContainmentActions_p extends DetailsPageBase {
  get ContainmentNumber() {

    const { root, section } = this.fieldRootInSection(`ContainmentNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DispositionsNotesInstructions() {

    const { root, section } = this.fieldRootInSection(`DispositionsNotesInstructio_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`LotSerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PotentialQuantity() {

    const { root, section } = this.fieldRootInSection(`PotentialQuantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualQuantity() {

    const { root, section } = this.fieldRootInSection(`ActualQuantity_f`, `Progress`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ContainmentNotes() {

    const { root, section } = this.fieldRootInSection(`ContainmentNotes_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NoMasterUnit() {

    const { root, section } = this.fieldRootInSection(`NoMasterUnit_f`, `Progress`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get UnconvertedQuantity() {

    const { root, section } = this.fieldRootInSection(`UnconvertedQuantity_f`, `Progress`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Location() {

    const { root, section } = this.fieldRootInSection(`Location_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ComplaintsNumber() {

    const { root, section } = this.fieldRootInSection(`ComplaintsNumber_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Disposition() {

    const { root, section } = this.fieldRootInSection(`ProblemDisposition_f`, `General`);

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

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Nonconformance() {

    const { root, section } = this.fieldRootInSection(`Nonconformance_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PotentialQuantityUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`PotentialQuanityUnitofMeasu_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualQuantityUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`ActualQuantityUnitofMeasure_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MasterUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`MasterUnitofMeasure_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CostLogItems() {

    const { root, section } = this.fieldRootInSection(`CostLogItems_f`, `Associated Costs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
