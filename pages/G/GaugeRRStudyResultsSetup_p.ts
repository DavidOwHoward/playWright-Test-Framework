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


export class GaugeRRStudyResultsSetup_p extends DetailsPageBase {
  get Appraiser() {

    const { root, section } = this.fieldRootInSection(`Appraiser_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AppraiserNumber() {

    const { root, section } = this.fieldRootInSection(`AppraiserNumber_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AttributeOnly() {

    const { root, section } = this.fieldRootInSection(`AttributeOnly_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDecimals() {

    const { root, section } = this.fieldRootInSection(`NumberofDecimals_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofSamples() {

    const { root, section } = this.fieldRootInSection(`NumberofSamples_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Trial() {

    const { root, section } = this.fieldRootInSection(`Trial_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }
}
