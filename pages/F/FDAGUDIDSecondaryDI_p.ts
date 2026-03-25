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


export class FDAGUDIDSecondaryDI_p extends DetailsPageBase {
  get SecondaryDINumber() {

    const { root, section } = this.fieldRootInSection(`SecondaryDINumber_f`, `Secondary DI Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryDINumber() {

    const { root, section } = this.fieldRootInSection(`PrimaryDINumber_f`, `Secondary DI Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SecondaryDIIssuingAgency() {

    const { root, section } = this.fieldRootInSection(`SecondaryDIIssuingAgency_f`, `Secondary DI Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
