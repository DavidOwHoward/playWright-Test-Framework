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
import { PictureField } from '../../components/fields/PictureField';


export class SupplierChargebacksDetail_p extends DetailsPageBase {
  get CostperUnit() {

    const { root, section } = this.fieldRootInSection(`CostperUnit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _InternalNotesNotVisibletoSupplier() {

    const { root, section } = this.fieldRootInSection(`InternalNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofPeople() {

    const { root, section } = this.fieldRootInSection(`NumberofPeople_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofUnits() {

    const { root, section } = this.fieldRootInSection(`NumberofUnits_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalCost() {

    const { root, section } = this.fieldRootInSection(`TotalCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalUnits() {

    const { root, section } = this.fieldRootInSection(`TotalUnits_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ChargebackCategory() {

    const { root, section } = this.fieldRootInSection(`ChargebackCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierChargeback() {

    const { root, section } = this.fieldRootInSection(`SupplierChargeback_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
