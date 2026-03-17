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


export class FMEAMSRFrequencyCriteria_p extends DetailsPageBase {
  get CorporateorProductLineExamples() {

    const { root, section } = this.fieldRootInSection(`CorporateorProductLineExamp_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EstimatedFrequency() {

    const { root, section } = this.fieldRootInSection(`EstimatedFrequency_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FrequencyCriteria() {

    const { root, section } = this.fieldRootInSection(`FrequencyCriteria_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FrequencyRank() {

    const { root, section } = this.fieldRootInSection(`Rank_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }
}
