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


export class RiskBowTieAnalysisCause_p extends DetailsPageBase {
  get CauseDescription() {

    const { root, section } = this.fieldRootInSection(`CauseDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Likelihood() {

    const { root, section } = this.fieldRootInSection(`Likelihood_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risk() {

    const { root, section } = this.fieldRootInSection(`Risk_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RiskBowTieAnalysisEvent() {

    const { root, section } = this.fieldRootInSection(`RiskBowTieAnalysisEvent_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProblemCauseCodes() {

    const { root, section } = this.fieldRootInSection(`ProblemCauseCodes_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Treatments() {

    const { root, section } = this.fieldRootInSection(`Treatments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
