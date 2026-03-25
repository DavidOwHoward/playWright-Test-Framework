import { DetailsPageBase } from '../../BasePages/DetailsPageBase';
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


export class ChangeRequestTypes_p extends DetailsPageBase {
  get ChangeRequestType() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequestTypeCode() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestTypeCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultCoordinatorSetup() {

    const { root, section } = this.fieldRootInSection(`DefaultCoordinatorSetup_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskLibrary() {

    const { root, section } = this.fieldRootInSection(`RiskLibrary_f`, `Risk Analysis Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskQuestions() {

    const { root, section } = this.fieldRootInSection(`RiskQuestions_f`, `Risk Analysis Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
