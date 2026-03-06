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


export class NCRandCAPACategory_p extends DetailsPageBase {
  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequireCustomer() {

    const { root, section } = this.fieldRootInSection(`RequireCustomer_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequireItem() {

    const { root, section } = this.fieldRootInSection(`RequireItem_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _RequireLotSerial() {

    const { root, section } = this.fieldRootInSection(`RequireLotSerial_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequireProcess() {

    const { root, section } = this.fieldRootInSection(`RequireProcess_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequireQuantity() {

    const { root, section } = this.fieldRootInSection(`RequireQuantity_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequireRiskAssessment() {

    const { root, section } = this.fieldRootInSection(`RequireRiskAssessment_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequireSupplier() {

    const { root, section } = this.fieldRootInSection(`RequireSupplier_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ExecutiveChampion() {

    const { root, section } = this.fieldRootInSection(`ExecutiveChampion_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultChampionSetup() {

    const { root, section } = this.fieldRootInSection(`DefaultChampionSetup_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
