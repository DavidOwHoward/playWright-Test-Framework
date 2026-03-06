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


export class MaintenanceWorkOrdersReactive_p extends DetailsPageBase {
  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _EstTimetoComplete() {

    const { root, section } = this.fieldRootInSection(`EstTimetoComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get FoundDuringPM() {

    const { root, section } = this.fieldRootInSection(`FoundDuringPM_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get KeyEquipment() {

    const { root, section } = this.fieldRootInSection(`KeyEquipment_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Recommendation() {

    const { root, section } = this.fieldRootInSection(`Recommendation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportedDateTime() {

    const { root, section } = this.fieldRootInSection(`ReportedDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SafetyorHazardousSituation() {

    const { root, section } = this.fieldRootInSection(`SafetyorHazardousSituation_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduleDate() {

    const { root, section } = this.fieldRootInSection(`ScheduleDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledDowntime() {

    const { root, section } = this.fieldRootInSection(`ScheduledDowntime_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrderTitle() {

    const { root, section } = this.fieldRootInSection(`WorkOrderTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CompleteDateTime() {

    const { root, section } = this.fieldRootInSection(`CompleteDateTime_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgressorCompletionNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressorCompletionNotes_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UnscheduledDowntime() {

    const { root, section } = this.fieldRootInSection(`UnscheduledDowntime_f`, `Progress`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrderApproval() {

    const { root, section } = this.fieldRootInSection(`WorkOrderApproval_f`, `Progress`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Priority() {

    const { root, section } = this.fieldRootInSection(`Priority_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestedBy() {

    const { root, section } = this.fieldRootInSection(`RequestedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TeamResponsibility() {

    const { root, section } = this.fieldRootInSection(`TeamResponsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrderType() {

    const { root, section } = this.fieldRootInSection(`WorkOrderType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OnHoldReason() {

    const { root, section } = this.fieldRootInSection(`OnHoldReason_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Subsystem() {

    const { root, section } = this.fieldRootInSection(`Subsystem_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLog_f`, `Progress`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FaultCodes() {

    const { root, section } = this.fieldRootInSection(`FaultCodes_f`, `Progress`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
