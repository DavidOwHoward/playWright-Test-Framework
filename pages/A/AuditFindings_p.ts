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


export class AuditFindings_p extends DetailsPageBase {
  get AuditFindingNumber() {

    const { root, section } = this.fieldRootInSection(`AuditFindingNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get DateofFinding() {

    const { root, section } = this.fieldRootInSection(`DateofFinding_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoNCR() {

    const { root, section } = this.fieldRootInSection(`EscalatetoNCR_f`, `Audit Finding Review`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingReviewNotes() {

    const { root, section } = this.fieldRootInSection(`AuditFindingReviewNotes_f`, `Audit Finding Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoCorrectiveAction() {

    const { root, section } = this.fieldRootInSection(`EscalatetoCAPA_f`, `Audit Finding Review`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingDetails() {

    const { root, section } = this.fieldRootInSection(`AuditFindingDetails_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingTitle() {

    const { root, section } = this.fieldRootInSection(`AuditFindingTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FindingComplete() {

    const { root, section } = this.fieldRootInSection(`FindingComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualCompletionDate() {

    const { root, section } = this.fieldRootInSection(`ActualCompletionDate_f`, `Task Assignment/Escalation`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProgressCompletionNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressCompletionNotes_f`, `Task Assignment/Escalation`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `Task Assignment/Escalation`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TaskDescription() {

    const { root, section } = this.fieldRootInSection(`TaskDescription_f`, `Task Assignment/Escalation`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditFindingType() {

    const { root, section } = this.fieldRootInSection(`AuditFindingType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Auditor() {

    const { root, section } = this.fieldRootInSection(`Auditorr_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `Audit Finding Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformance() {

    const { root, section } = this.fieldRootInSection(`Nonconformance_f`, `Audit Finding Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Audit() {

    const { root, section } = this.fieldRootInSection(`Audit_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditResult() {

    const { root, section } = this.fieldRootInSection(`AuditResult_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `Task Assignment/Escalation`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
