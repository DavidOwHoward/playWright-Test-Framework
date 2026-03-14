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


export class EmployeeSkillChecks_p extends DetailsPageBase {
  get DateChecked() {

    const { root, section } = this.fieldRootInSection(`DateChecked_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionTypeCode() {

    const { root, section } = this.fieldRootInSection(`InspectionTypeCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemNumber() {

    const { root, section } = this.fieldRootInSection(`ItemNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RoleCode() {

    const { root, section } = this.fieldRootInSection(`RoleCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillCode() {

    const { root, section } = this.fieldRootInSection(`SkillCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SysMessageIdentifier() {

    const { root, section } = this.fieldRootInSection(`SysMessageIdentifier_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get sysTrueFalse() {

    const { root, section } = this.fieldRootInSection(`sysTrueFalse_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkCenterCode() {

    const { root, section } = this.fieldRootInSection(`WorkCenterCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }
}
