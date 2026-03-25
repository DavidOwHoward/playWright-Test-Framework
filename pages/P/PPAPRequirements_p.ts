import { DetailsPageBase } from '../../BasePages/DetailsPageBase';
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


export class PPAPRequirements_p extends DetailsPageBase {
  get ControlPlanReport() {

    const { root, section } = this.fieldRootInSection(`ControlPlanReport_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IncludeDesignFMEAReport() {

    const { root, section } = this.fieldRootInSection(`IncludeDesignFMEAReport_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _IncludePartSubmissionWarrantReport() {

    const { root, section } = this.fieldRootInSection(`IncludePartSubmissionWarran_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IncludeProcessFlowReport() {

    const { root, section } = this.fieldRootInSection(`IncludeProcessFlowReport_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IncludeProcessFMEAReport() {

    const { root, section } = this.fieldRootInSection(`IncludeProcessFMEAReport_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IncludeWorkInstructionReport() {

    const { root, section } = this.fieldRootInSection(`IncludeWorkInstructionRepor_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequirementDescription() {

    const { root, section } = this.fieldRootInSection(`RequirementDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequirementNumber() {

    const { root, section } = this.fieldRootInSection(`RequirementNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequirementSubmissionLevels() {

    const { root, section } = this.fieldRootInSection(`RequirementSubmissionLevels_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
