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


export class ItemGroups_p extends DetailsPageBase {
  get DefaultApprovalDays() {

    const { root, section } = this.fieldRootInSection(`DefaultApprovalDays_f`, `Approval Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ITAREnabledWarning() {

    const { root, section } = this.fieldRootInSection(`ITAREnabledWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroupCode() {

    const { root, section } = this.fieldRootInSection(`ItemGroupCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroupName() {

    const { root, section } = this.fieldRootInSection(`ItemGroupName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GlobalItemGroupManager() {

    const { root, section } = this.fieldRootInSection(`GlobalItemGroupManager_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Approvers() {

    const { root, section } = this.fieldRootInSection(`Approvers_f`, `Approval Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Buyers() {

    const { root, section } = this.fieldRootInSection(`Buyers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationList() {

    const { root, section } = this.fieldRootInSection(`NotificationList_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
