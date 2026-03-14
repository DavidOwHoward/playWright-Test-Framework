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


export class PFMEAControlMethods_p extends DetailsPageBase {
  get _100VisualInspection() {

    const { root, section } = this.fieldRootInSection(`_100VisualInspection_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlMethod() {

    const { root, section } = this.fieldRootInSection(`ControlMethod_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Detect() {

    const { root, section } = this.fieldRootInSection(`Detect_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get MethodofPeriodicVerification() {

    const { root, section } = this.fieldRootInSection(`MethodofPeriodicVerificatio_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Prevent() {

    const { root, section } = this.fieldRootInSection(`Prevent_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Document() {

    const { root, section } = this.fieldRootInSection(`Document_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
