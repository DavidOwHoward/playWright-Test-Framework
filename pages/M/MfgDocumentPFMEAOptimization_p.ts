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


export class MfgDocumentPFMEAOptimization_p extends DetailsPageBase {
  get ActionTakenwithPointertoEvidence() {

    const { root, section } = this.fieldRootInSection(`ActionsTakenandCompDate_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletionDate() {

    const { root, section } = this.fieldRootInSection(`CompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ConfirmationofCurrentPreventandDetectionControlsComments() {

    const { root, section } = this.fieldRootInSection(`ConfirmationofCurrentPreven_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NewRPN() {

    const { root, section } = this.fieldRootInSection(`NewRPN_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEADetectionAction() {

    const { root, section } = this.fieldRootInSection(`RecommendedAction_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAPreventiveAction() {

    const { root, section } = this.fieldRootInSection(`PFMEAPreventiveAction_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponsibilityandTargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`RespandTargetCompDate_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualActionPriorityAP() {

    const { root, section } = this.fieldRootInSection(`ResidualPFMEAAP_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualDetectionD() {

    const { root, section } = this.fieldRootInSection(`NewDetection_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualOccurrenceO() {

    const { root, section } = this.fieldRootInSection(`NewOccurrence_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualSeverityS() {

    const { root, section } = this.fieldRootInSection(`NewSeverity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResponsiblePersonsName() {

    const { root, section } = this.fieldRootInSection(`ResponsiblePersonsName_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
