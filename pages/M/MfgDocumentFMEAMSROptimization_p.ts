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


export class MfgDocumentFMEAMSROptimization_p extends DetailsPageBase {
  get ActionTakenwithPointertoEvidence() {

    const { root, section } = this.fieldRootInSection(`ActionTakenwithPointertoEvi_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletionDate() {

    const { root, section } = this.fieldRootInSection(`CompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DiagnosticMonitoringAction() {

    const { root, section } = this.fieldRootInSection(`DiagnosticMonitoringAction_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MostSevereFailureEffectafterSystemResponse() {

    const { root, section } = this.fieldRootInSection(`MostSevereFailureEffect_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MSRPreventativeAction() {

    const { root, section } = this.fieldRootInSection(`MSRPreventativeAction_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Remarks() {

    const { root, section } = this.fieldRootInSection(`Remarks_f`, `General`);

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

  get _MfgDocumentFMEAMSRCause() {

    const { root, section } = this.fieldRootInSection(`FMEAMSRCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualActionPriorityAP() {

    const { root, section } = this.fieldRootInSection(`ResidualMSRActionPriority_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualFrequencyF() {

    const { root, section } = this.fieldRootInSection(`ResidualFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualMonitoringM() {

    const { root, section } = this.fieldRootInSection(`ResidualMonitoring_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResidualSeverityS() {

    const { root, section } = this.fieldRootInSection(`ResidualSeverity_f`, `General`);

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

  get SystemResponse() {

    const { root, section } = this.fieldRootInSection(`SystemResponse_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
