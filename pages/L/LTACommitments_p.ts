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


export class LTACommitments_p extends DetailsPageBase {
  get _ReductionfromPreviousYear() {

    const { root, section } = this.fieldRootInSection(`ReductionfromPreviousYear_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CalculatedLTAYearUnitPrice() {

    const { root, section } = this.fieldRootInSection(`CalculatedLTAYearUnitPrice_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LTAYear() {

    const { root, section } = this.fieldRootInSection(`LTAYear_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PartWorksheet() {

    const { root, section } = this.fieldRootInSection(`PartWorksheet_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
