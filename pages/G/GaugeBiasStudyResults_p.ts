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


export class GaugeBiasStudyResults_p extends DetailsPageBase {
  get Bias() {

    const { root, section } = this.fieldRootInSection(`Bias_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _PValue() {

    const { root, section } = this.fieldRootInSection(`PValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardName() {

    const { root, section } = this.fieldRootInSection(`StandardName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Target() {

    const { root, section } = this.fieldRootInSection(`Target_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeStudy() {

    const { root, section } = this.fieldRootInSection(`GaugeStudy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeStudyStandard() {

    const { root, section } = this.fieldRootInSection(`GaugeStudyStandard_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
