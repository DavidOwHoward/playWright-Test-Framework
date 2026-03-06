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


export class SupplierAuditFindings_p extends DetailsPageBase {
  get _WarningLink() {

    const { root, section } = this.fieldRootInSection(`LinkWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _WarningUnlink() {

    const { root, section } = this.fieldRootInSection(`UnlinkWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingDetails() {

    const { root, section } = this.fieldRootInSection(`AuditFindingDetails_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingNumber() {

    const { root, section } = this.fieldRootInSection(`AuditFindingNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingTitle() {

    const { root, section } = this.fieldRootInSection(`AuditFindingTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ClosedDate() {

    const { root, section } = this.fieldRootInSection(`ClosedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DateofFinding() {

    const { root, section } = this.fieldRootInSection(`DateofFinding_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _StatusComments() {

    const { root, section } = this.fieldRootInSection(`StatusComments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskDescription() {

    const { root, section } = this.fieldRootInSection(`TaskDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingType() {

    const { root, section } = this.fieldRootInSection(`AuditFindingType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Auditor() {

    const { root, section } = this.fieldRootInSection(`Auditor_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAudit() {

    const { root, section } = this.fieldRootInSection(`SupplierAudit_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAuditResult() {

    const { root, section } = this.fieldRootInSection(`SupplierAuditResult_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
