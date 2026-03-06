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


export class RiskTreatments_p extends DetailsPageBase {
  get RiskLevelAfterTreatment() {

    const { root, section } = this.fieldRootInSection(`RiskLevelAfterTreatment_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TreatmentDescription() {

    const { root, section } = this.fieldRootInSection(`TreatmentDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ConsequenceAfterTreatment() {

    const { root, section } = this.fieldRootInSection(`ConsequenceAfterTreatment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LikelihoodAfterTreatment() {

    const { root, section } = this.fieldRootInSection(`LikelihoodAfterTreatment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risk() {

    const { root, section } = this.fieldRootInSection(`Risk_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RiskBowTieAnalysisCause() {

    const { root, section } = this.fieldRootInSection(`RiskBowTieAnalysisCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RiskBowTieAnalysisConsequence() {

    const { root, section } = this.fieldRootInSection(`RiskBowTieAnalysisConsequen_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskEvaluationAfterTreatment() {

    const { root, section } = this.fieldRootInSection(`RiskEvaluationAfterTreatmen_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TreatmentType() {

    const { root, section } = this.fieldRootInSection(`TreatmentType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
