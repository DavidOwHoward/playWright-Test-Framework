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


export class ProcessFMEAOccurrenceCriteria_p extends DetailsPageBase {
  get CorporateorProductLineExamples() {

    const { root, section } = this.fieldRootInSection(`CorporateorProductLineExamp_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Incidentsper1000itemsvehicles() {

    const { root, section } = this.fieldRootInSection(`FailureRates_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceRank() {

    const { root, section } = this.fieldRootInSection(`Rank_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PredictionofFailureCauseOccurring() {

    const { root, section } = this.fieldRootInSection(`PredictionofFailureCauseOcc_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PreventionControls() {

    const { root, section } = this.fieldRootInSection(`PreventionControls_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TimeBasedFailureCausePrediction() {

    const { root, section } = this.fieldRootInSection(`TimeBasedFailureCausePredic_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TypeofControl() {

    const { root, section } = this.fieldRootInSection(`TypeofControl_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }
}
