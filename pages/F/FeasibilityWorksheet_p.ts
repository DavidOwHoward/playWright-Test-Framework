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


export class FeasibilityWorksheet_p extends DetailsPageBase {
  get FeasibilityChecklist() {

    const { root, section } = this.fieldRootInSection(`FeasibilityChecklist_f`, `General`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get FeasibilityChecklistComplete() {

    const { root, section } = this.fieldRootInSection(`FeasibilityChecklistComplet_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _IsPartFeasibleYesNo() {

    const { root, section } = this.fieldRootInSection(`IsPartFeasibleYesNo_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PaperclipLabel() {

    const { root, section } = this.fieldRootInSection(`PaperclipLabel_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
