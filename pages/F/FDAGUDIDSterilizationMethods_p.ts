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


export class FDAGUDIDSterilizationMethods_p extends DetailsPageBase {
  get PrimaryDINumber() {

    const { root, section } = this.fieldRootInSection(`PrimaryDINumber_f`, `Secondary DI Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SterilizationMethod() {

    const { root, section } = this.fieldRootInSection(`SterilizationMethod_f`, `Secondary DI Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
