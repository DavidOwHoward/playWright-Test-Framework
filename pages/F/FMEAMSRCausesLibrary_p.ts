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


export class FMEAMSRCausesLibrary_p extends DetailsPageBase {
  get ItisrecommendedtohaveatleastonecontrolsoBestFrequencyandBestMonitoringlevelsareasse() {

    const { root, section } = this.fieldRootInSection(`LabelRecommendation_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get PotentialCauseofFailure() {

    const { root, section } = this.fieldRootInSection(`PotentialCauseofFailure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _BestFrequencyPotentialF() {

    const { root, section } = this.fieldRootInSection(`BestFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _BestMonitoringM() {

    const { root, section } = this.fieldRootInSection(`BestMonitoring_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MSRFailureMode() {

    const { root, section } = this.fieldRootInSection(`MSRFailureMode_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _MSRControls() {

    const { root, section } = this.fieldRootInSection(`Controls_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _MSROptimizations() {

    const { root, section } = this.fieldRootInSection(`Optimization_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProblemCauseCodes() {

    const { root, section } = this.fieldRootInSection(`ProblemCauseCodes_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
