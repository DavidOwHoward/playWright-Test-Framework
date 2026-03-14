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


export class InspectionTypes_p extends DetailsPageBase {
  get InspectionTypeCode() {

    const { root, section } = this.fieldRootInSection(`InspectionTypeID_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionTypeName() {

    const { root, section } = this.fieldRootInSection(`InspectionTypeName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPlanItems() {

    const { root, section } = this.fieldRootInSection(`InspectionPlanItems_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlan() {

    const { root, section } = this.fieldRootInSection(`ControlPlan_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
