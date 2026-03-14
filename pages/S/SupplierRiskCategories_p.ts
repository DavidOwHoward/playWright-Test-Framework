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


export class SupplierRiskCategories_p extends DetailsPageBase {
  get RiskCategoryCode() {

    const { root, section } = this.fieldRootInSection(`RiskCategoryCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskCategoryName() {

    const { root, section } = this.fieldRootInSection(`RiskCategoryName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FiveLabel() {

    const { root, section } = this.fieldRootInSection(`FiveLabel_f`, `Supplier Approval Configuration`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get FourLabel() {

    const { root, section } = this.fieldRootInSection(`FourLabel_f`, `Supplier Approval Configuration`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageFive() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageFive_f`, `Supplier Approval Configuration`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageFour() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageFour_f`, `Supplier Approval Configuration`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageOne() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageOne_f`, `Supplier Approval Configuration`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageThree() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageThree_f`, `Supplier Approval Configuration`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageTwo() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageTwo_f`, `Supplier Approval Configuration`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ThreeLabel() {

    const { root, section } = this.fieldRootInSection(`ThreeLabel_f`, `Supplier Approval Configuration`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get TwoLabel() {

    const { root, section } = this.fieldRootInSection(`TwoLabel_f`, `Supplier Approval Configuration`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFrequency() {

    const { root, section } = this.fieldRootInSection(`AuditFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalRatingFive() {

    const { root, section } = this.fieldRootInSection(`ApprovalRatingFive_f`, `Supplier Approval Configuration`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalRatingFour() {

    const { root, section } = this.fieldRootInSection(`ApprovalRatingFour_f`, `Supplier Approval Configuration`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalRatingOne() {

    const { root, section } = this.fieldRootInSection(`ApprovalRatingOne_f`, `Supplier Approval Configuration`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalRatingThree() {

    const { root, section } = this.fieldRootInSection(`ApprovalRatingThree_f`, `Supplier Approval Configuration`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalRatingTwo() {

    const { root, section } = this.fieldRootInSection(`ApprovalRatingTwo_f`, `Supplier Approval Configuration`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PerformanceIndicators() {

    const { root, section } = this.fieldRootInSection(`PerformanceIndicators_f`, `Supplier Performance Indicators`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
