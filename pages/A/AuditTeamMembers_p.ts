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


export class AuditTeamMembers_p extends DetailsPageBase {
  get Auditee() {

    const { root, section } = this.fieldRootInSection(`Auditee_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Auditor() {

    const { root, section } = this.fieldRootInSection(`Auditor_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NotifyofAudit() {

    const { root, section } = this.fieldRootInSection(`NotifyofAudit_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NotifyWhenAuditisComplete() {

    const { root, section } = this.fieldRootInSection(`NotifyWhenAuditisComplete_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Audit() {

    const { root, section } = this.fieldRootInSection(`Audit_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditNumber() {

    const { root, section } = this.fieldRootInSection(`AuditNumber_f`, `Audit Information`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditTitle() {

    const { root, section } = this.fieldRootInSection(`AuditTitle_f`, `Audit Information`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduleDate() {

    const { root, section } = this.fieldRootInSection(`ScheduleDate_f`, `Audit Information`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
