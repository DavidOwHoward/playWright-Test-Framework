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


export class MfgDocumentDFMEAOptimization_p extends DetailsPageBase {
  get ActionTakenWithPointertoEvidence() {

    const { root, section } = this.fieldRootInSection(`ActionsTaken_f`, `General`);

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

  get DFMEADetectionAction() {

    const { root, section } = this.fieldRootInSection(`RecommendedAction_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEAPreventiveAction() {

    const { root, section } = this.fieldRootInSection(`DFMEAPreventiveAction_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActionType() {

    const { root, section } = this.fieldRootInSection(`ActionType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MfgDocumentDFMEACause() {

    const { root, section } = this.fieldRootInSection(`MfgDocumentDFMEACause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualActionPriorityAP() {

    const { root, section } = this.fieldRootInSection(`ResidualDFMEAAP_f`, `General`);

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

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
