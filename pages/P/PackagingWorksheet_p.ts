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


export class PackagingWorksheet_p extends DetailsPageBase {
  get PartsperUnitLoad() {

    const { root, section } = this.fieldRootInSection(`PartsperUnitLoad_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityPerContainer() {

    const { root, section } = this.fieldRootInSection(`QuantityPerContainer_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalExpendablePackagingCost() {

    const { root, section } = this.fieldRootInSection(`TotalExpendablePackagingCos_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalPackagingCost() {

    const { root, section } = this.fieldRootInSection(`TotalPackagingCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalReturnablePackagingCost() {

    const { root, section } = this.fieldRootInSection(`TotalReturnablePackagingCos_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadHeight() {

    const { root, section } = this.fieldRootInSection(`UnitLoadHeight_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadLength() {

    const { root, section } = this.fieldRootInSection(`UnitLoadLength_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadWeight() {

    const { root, section } = this.fieldRootInSection(`UnitLoadWeight_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadWidth() {

    const { root, section } = this.fieldRootInSection(`UnitLoadWidth_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadDimensionalUOM() {

    const { root, section } = this.fieldRootInSection(`UnitLoadDimensionalUOM_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadWeightUOM() {

    const { root, section } = this.fieldRootInSection(`UnitLoadWeightUOM_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ExpendablePackagingCosts() {

    const { root, section } = this.fieldRootInSection(`ExpendablePackagingCosts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReturnablePackagingCosts() {

    const { root, section } = this.fieldRootInSection(`ReturnablePackagingCosts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
