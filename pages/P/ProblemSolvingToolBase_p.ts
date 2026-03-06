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


export class ProblemSolvingToolBase_p extends DetailsPageBase {
  get DateInitiated() {

    const { root, section } = this.fieldRootInSection(`DateInitiated_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSolvingGoalStatement() {

    const { root, section } = this.fieldRootInSection(`ProblemSolvingGoalStatement_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSolvingToolNumber() {

    const { root, section } = this.fieldRootInSection(`ProblemSolvingToolNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolType() {

    const { root, section } = this.fieldRootInSection(`ToolType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
