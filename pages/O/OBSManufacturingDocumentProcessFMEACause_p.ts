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


export class OBSManufacturingDocumentProcessFMEACause_p extends DetailsPageBase {
  get NonconformanceOccurrences() {

    const { root, section } = this.fieldRootInSection(`NonconformanceOccurrences_f`, `General`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get PotentialCauseofFailure() {

    const { root, section } = this.fieldRootInSection(`PotentialCauseofFailure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CopiedCauseID() {

    const { root, section } = this.fieldRootInSection(`CopiedCauseID_f`, `Hidden`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get OriginalVersionCauseId() {

    const { root, section } = this.fieldRootInSection(`OriginalVersionCauseId_f`, `Hidden`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Occurrence() {

    const { root, section } = this.fieldRootInSection(`Occurrence_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProblemCauseCodes() {

    const { root, section } = this.fieldRootInSection(`ProblemCauseCodes_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
