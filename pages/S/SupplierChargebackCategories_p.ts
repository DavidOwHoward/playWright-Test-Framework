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


export class SupplierChargebackCategories_p extends DetailsPageBase {
  get AutoAdd() {

    const { root, section } = this.fieldRootInSection(`AutoAdd_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ChargebackCategory() {

    const { root, section } = this.fieldRootInSection(`ChargebackCategory_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChargebackCategoryCode() {

    const { root, section } = this.fieldRootInSection(`ChargebackCategoryCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CostDetailsOption() {

    const { root, section } = this.fieldRootInSection(`CostDetailsOption_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultChargeperUnit() {

    const { root, section } = this.fieldRootInSection(`DefaultChargeperUnit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AutoAddforthefollowingSites() {

    const { root, section } = this.fieldRootInSection(`AutoAddforthefollowingSites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
