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


export class PackagingCostItemsExpendable_p extends DetailsPageBase {
  get PackagingMaterial() {

    const { root, section } = this.fieldRootInSection(`PackagingMaterial_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MaterialCostperpackagecontainer() {

    const { root, section } = this.fieldRootInSection(`MaterialCostperpackageconta_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MaterialSpecification() {

    const { root, section } = this.fieldRootInSection(`MaterialSpecification_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingCostperunit() {

    const { root, section } = this.fieldRootInSection(`PackagingCostperunit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _Unitsperpackagecontainer() {

    const { root, section } = this.fieldRootInSection(`Unitsperpackagecontainer_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingType() {

    const { root, section } = this.fieldRootInSection(`PackagingType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingWorksheet() {

    const { root, section } = this.fieldRootInSection(`PackagingWorksheet_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
