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


export class FinancialPlanningVolumes_p extends DetailsPageBase {
  get AnnualFPVQuantity() {

    const { root, section } = this.fieldRootInSection(`AnnualFPVQuantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get FPVYear() {

    const { root, section } = this.fieldRootInSection(`Year_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductionWeeksperYear() {

    const { root, section } = this.fieldRootInSection(`ProductionWeeksperYear_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get WeeklyQuantity() {

    const { root, section } = this.fieldRootInSection(`WeeklyQuantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Program() {

    const { root, section } = this.fieldRootInSection(`Program_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrimTakeRates() {

    const { root, section } = this.fieldRootInSection(`TrimTakeRates_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
