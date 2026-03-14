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


export class ProjectTemplates_p extends DetailsPageBase {
  get DueDateCalculation() {

    const { root, section } = this.fieldRootInSection(`DueDateCalculation_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDateCalculationInUse() {

    const { root, section } = this.fieldRootInSection(`DueDateCalculationReadonly_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PPAPRequired() {

    const { root, section } = this.fieldRootInSection(`PPAPRequired_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTemplateName() {

    const { root, section } = this.fieldRootInSection(`ProjectTypeName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierProject() {

    const { root, section } = this.fieldRootInSection(`SupplierProject_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _RemainingCriticalTask() {

    const { root, section } = this.fieldRootInSection(`RemainingCriticalTask_f`, `Project Health Calculation`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _RemainingNoncriticalTask() {

    const { root, section } = this.fieldRootInSection(`RemainingNoncriticalTask_f`, `Project Health Calculation`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectHealthDescription() {

    const { root, section } = this.fieldRootInSection(`ProjectHealthDescription_f`, `Project Health Calculation`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmissionLevel() {

    const { root, section } = this.fieldRootInSection(`SubmissionLevel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTemplatePhases() {

    const { root, section } = this.fieldRootInSection(`ProjectTypeGates_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
