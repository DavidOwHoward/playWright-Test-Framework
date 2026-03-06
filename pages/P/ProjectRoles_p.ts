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


export class ProjectRoles_p extends DetailsPageBase {
  get Project() {

    const { root, section } = this.fieldRootInSection(`NewProductDevelopment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectRole() {

    const { root, section } = this.fieldRootInSection(`ProjectRole_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponsibilityorApprover() {

    const { root, section } = this.fieldRootInSection(`ResponsibilityorApprover_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
