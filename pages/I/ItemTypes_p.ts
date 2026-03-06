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


export class ItemTypes_p extends DetailsPageBase {
  get ItemTypeCode() {

    const { root, section } = this.fieldRootInSection(`ItemTypeCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemTypeName() {

    const { root, section } = this.fieldRootInSection(`ItemTypeName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SparePartDefault() {

    const { root, section } = this.fieldRootInSection(`SparePartDefault_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Approvers() {

    const { root, section } = this.fieldRootInSection(`Approvers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
