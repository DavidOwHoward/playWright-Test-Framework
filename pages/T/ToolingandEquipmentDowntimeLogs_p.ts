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


export class ToolingandEquipmentDowntimeLogs_p extends DetailsPageBase {
  get _DateTimeDown() {

    const { root, section } = this.fieldRootInSection(`DateTimeDown_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DateTimerestart() {

    const { root, section } = this.fieldRootInSection(`DateTimeRepaired_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Reason() {

    const { root, section } = this.fieldRootInSection(`Reason_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Repairs() {

    const { root, section } = this.fieldRootInSection(`Repairs_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StopDuration() {

    const { root, section } = this.fieldRootInSection(`StopDuration_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Shift() {

    const { root, section } = this.fieldRootInSection(`Shift_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipment() {

    const { root, section } = this.fieldRootInSection(`Equipment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkCenter() {

    const { root, section } = this.fieldRootInSection(`WorkCenter_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrders() {

    const { root, section } = this.fieldRootInSection(`WorkOrders_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
