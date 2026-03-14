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


export class PackagingChangeRequestTypes_p extends DetailsPageBase {
  get ChangeRequestType() {

    const { root, section } = this.fieldRootInSection(`NewField1_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequestTypeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestTypeDescriptio_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Defaultdaysforapproval() {

    const { root, section } = this.fieldRootInSection(`Defaultdaysforapproval_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get EHSApprover() {

    const { root, section } = this.fieldRootInSection(`EHSApprover_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingApprover() {

    const { root, section } = this.fieldRootInSection(`ManufacturingApprover_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingApprover() {

    const { root, section } = this.fieldRootInSection(`PackagingApprover_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityApprover() {

    const { root, section } = this.fieldRootInSection(`QualityApprover_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
