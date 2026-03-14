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


export class DesignVerificationReports_p extends DetailsPageBase {
  get ActualCompletionDate() {

    const { root, section } = this.fieldRootInSection(`ActualCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualResults() {

    const { root, section } = this.fieldRootInSection(`ActualResults_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`AdditionalNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportNumber() {

    const { root, section } = this.fieldRootInSection(`ReportNumber2_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleQuantity() {

    const { root, section } = this.fieldRootInSection(`SampleQuantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TestPassed() {

    const { root, section } = this.fieldRootInSection(`TestPassed_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedBy() {

    const { root, section } = this.fieldRootInSection(`CompletedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SampleType() {

    const { root, section } = this.fieldRootInSection(`SampleType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationPlan() {

    const { root, section } = this.fieldRootInSection(`VerificationPlan_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
