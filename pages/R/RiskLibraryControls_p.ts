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


export class RiskLibraryControls_p extends DetailsPageBase {
  get ControlDescription() {

    const { root, section } = this.fieldRootInSection(`ControlDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskLibraryControlNumber() {

    const { root, section } = this.fieldRootInSection(`RiskLibraryControlNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskLibraryControlSummary() {

    const { root, section } = this.fieldRootInSection(`RiskLibraryControlSummary_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedDocuments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
