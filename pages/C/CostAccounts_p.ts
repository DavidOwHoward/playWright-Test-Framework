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


export class CostAccounts_p extends DetailsPageBase {
  get AccountDescription() {

    const { root, section } = this.fieldRootInSection(`AccountDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AllowQuantities() {

    const { root, section } = this.fieldRootInSection(`AllowQuantities_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultUnitCost() {

    const { root, section } = this.fieldRootInSection(`DefaultUnitCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get GLAccountNumber() {

    const { root, section } = this.fieldRootInSection(`GLAccountNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`QuantityUnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
