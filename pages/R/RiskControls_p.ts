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


export class RiskControls_p extends DetailsPageBase {
  get ControlDescription() {

    const { root, section } = this.fieldRootInSection(`ControlDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskLevelAfterControl() {

    const { root, section } = this.fieldRootInSection(`RiskLevelAfterControl_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ConsequenceAfterControl() {

    const { root, section } = this.fieldRootInSection(`ConsequenceAfterControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryRiskControl() {

    const { root, section } = this.fieldRootInSection(`LibraryRiskControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LikelihoodAfterControl() {

    const { root, section } = this.fieldRootInSection(`LikelihoodAfterControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedTreatment() {

    const { root, section } = this.fieldRootInSection(`RelatedTreatment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risk() {

    const { root, section } = this.fieldRootInSection(`Risk_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskEvaluationAfterControl() {

    const { root, section } = this.fieldRootInSection(`RiskEvaluationAfterControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Type() {

    const { root, section } = this.fieldRootInSection(`Type_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedDocuments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
