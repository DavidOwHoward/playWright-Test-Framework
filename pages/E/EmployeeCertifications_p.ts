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


export class EmployeeCertifications_p extends DetailsPageBase {
  get CertificationStartDate() {

    const { root, section } = this.fieldRootInSection(`CertificationStateDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovedforCertification() {

    const { root, section } = this.fieldRootInSection(`ApprovedforCertification_f`, `Certification Approval`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CertificationApproval() {

    const { root, section } = this.fieldRootInSection(`CertificationApproval_f`, `Certification Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRoleRequiredSkills() {

    const { root, section } = this.fieldRootInSection(`TrainingRoleRequiredSkills_f`, `General`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get Certifier() {

    const { root, section } = this.fieldRootInSection(`Certifier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRole() {

    const { root, section } = this.fieldRootInSection(`TrainingRole_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CertificationEvents() {

    const { root, section } = this.fieldRootInSection(`CertificationEvents_f`, `Certification Events`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
