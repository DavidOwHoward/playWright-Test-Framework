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


export class ProcessInteractions_p extends DetailsPageBase {
  get CriticaltoQuality() {

    const { root, section } = this.fieldRootInSection(`CriticaltoQuality_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessInteractionDescription() {

    const { root, section } = this.fieldRootInSection(`ProcessInteractionDescripti_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessIn() {

    const { root, section } = this.fieldRootInSection(`ProcessIn_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessOut() {

    const { root, section } = this.fieldRootInSection(`ProcessOut_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
