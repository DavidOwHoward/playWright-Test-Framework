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


export class SupplierPerformanceIndicators_p extends DetailsPageBase {
  get _DescriptionNotes() {

    const { root, section } = this.fieldRootInSection(`DescriptionNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get IndicatorCode() {

    const { root, section } = this.fieldRootInSection(`IndicatorCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get IndicatorName() {

    const { root, section } = this.fieldRootInSection(`IndicatorName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MaximumScore() {

    const { root, section } = this.fieldRootInSection(`MaximumScore_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierRiskCategory() {

    const { root, section } = this.fieldRootInSection(`SupplierRiskCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemPerformanceIndicator() {

    const { root, section } = this.fieldRootInSection(`SystemPerformanceIndicator_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Scores() {

    const { root, section } = this.fieldRootInSection(`Scores_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
