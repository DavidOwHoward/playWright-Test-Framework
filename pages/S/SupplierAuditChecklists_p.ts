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


export class SupplierAuditChecklists_p extends DetailsPageBase {
  get ChecklistName() {

    const { root, section } = this.fieldRootInSection(`ChecklistName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChecklistNumber() {

    const { root, section } = this.fieldRootInSection(`ChecklistNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ChecklistOwner() {

    const { root, section } = this.fieldRootInSection(`ChecklistOwner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChecklistQuestions() {

    const { root, section } = this.fieldRootInSection(`ChecklistQuestions_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
