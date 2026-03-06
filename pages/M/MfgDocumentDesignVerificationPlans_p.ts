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


export class MfgDocumentDesignVerificationPlans_p extends DetailsPageBase {
  get AcceptanceCriteria() {

    const { root, section } = this.fieldRootInSection(`AcceptanceCriteria_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleQuantity() {

    const { root, section } = this.fieldRootInSection(`SampleQuantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleQuantitynonnegativevalue() {

    const { root, section } = this.fieldRootInSection(`SampleQuantitynonnegativeva_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetStartDate() {

    const { root, section } = this.fieldRootInSection(`TargetStartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TestDescription() {

    const { root, section } = this.fieldRootInSection(`TestDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TestNumber() {

    const { root, section } = this.fieldRootInSection(`TestNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get TestRequirements() {

    const { root, section } = this.fieldRootInSection(`TargetRequirements_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleType() {

    const { root, section } = this.fieldRootInSection(`SampleType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SpecificationTestMethod() {

    const { root, section } = this.fieldRootInSection(`SpecificationTestMethod_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TestResponsibility() {

    const { root, section } = this.fieldRootInSection(`TestResponsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TestStage() {

    const { root, section } = this.fieldRootInSection(`TestStage_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Nonconformances() {

    const { root, section } = this.fieldRootInSection(`Nonconformances_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TestReports() {

    const { root, section } = this.fieldRootInSection(`TestReports_f`, `Test Reports`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
