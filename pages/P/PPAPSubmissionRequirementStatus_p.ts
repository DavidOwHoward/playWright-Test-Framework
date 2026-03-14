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


export class PPAPSubmissionRequirementStatus_p extends DetailsPageBase {
  get Comment() {

    const { root, section } = this.fieldRootInSection(`Comment_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlan() {

    const { root, section } = this.fieldRootInSection(`ControlPlan_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IncludeDesignFMEAReport() {

    const { root, section } = this.fieldRootInSection(`IncludeDesignFMEAReport_f`, `General`);

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

  get PartSubmissionWarrantReportRequired() {

    const { root, section } = this.fieldRootInSection(`PartSubmissionWarrantRequir_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PPAPRequirement() {

    const { root, section } = this.fieldRootInSection(`PPAPRequirement_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTaskfile() {

    const { root, section } = this.fieldRootInSection(`ProjectTaskfile_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get RequirementMet() {

    const { root, section } = this.fieldRootInSection(`RequirementMet_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTask() {

    const { root, section } = this.fieldRootInSection(`APQPProjectTask_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Records() {

    const { root, section } = this.fieldRootInSection(`Records_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
