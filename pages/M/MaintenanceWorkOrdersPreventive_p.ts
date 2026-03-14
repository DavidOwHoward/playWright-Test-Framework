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


export class MaintenanceWorkOrdersPreventive_p extends DetailsPageBase {
  get _EstTimetoComplete() {

    const { root, section } = this.fieldRootInSection(`EstTimetoComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get KeyEquipment() {

    const { root, section } = this.fieldRootInSection(`KeyEquipment_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledDate_f`, `General`);

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

  get EquipmentMaintenanceProcedurePartsRequired() {

    const { root, section } = this.fieldRootInSection(`EMaintenanceProcedurePartsR_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get MaintenanceProcedurePartsRequired() {

    const { root, section } = this.fieldRootInSection(`MaintenanceProcedurePartsRe_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedDocuments_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _CompletedDateTime() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `Progress`);

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

  get EquipmentMaintenanceProcedure() {

    const { root, section } = this.fieldRootInSection(`EquipmentMaintenanceProcedu_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MaintenanceProcedure() {

    const { root, section } = this.fieldRootInSection(`MaintenanceProcedure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Priority() {

    const { root, section } = this.fieldRootInSection(`Priority_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TeamResponsibility() {

    const { root, section } = this.fieldRootInSection(`RoleResponsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrderType() {

    const { root, section } = this.fieldRootInSection(`WorkOrderType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _OnHoldReason() {

    const { root, section } = this.fieldRootInSection(`OnHoldReason_f`, `Progress`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CostLog() {

    const { root, section } = this.fieldRootInSection(`CostLog_f`, `Progress`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
