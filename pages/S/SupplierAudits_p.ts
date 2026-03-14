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


export class SupplierAudits_p extends DetailsPageBase {
  get ScheduledDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAuditNumber() {

    const { root, section } = this.fieldRootInSection(`SupplierAuditNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateSCAR() {

    const { root, section } = this.fieldRootInSection(`CreateSCAR_f`, `Audit Findings`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditResults() {

    const { root, section } = this.fieldRootInSection(`AuditResults_f`, `Audit Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditResultsList() {

    const { root, section } = this.fieldRootInSection(`AuditResultsList_f`, `Audit Results`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalTeamMembers() {

    const { root, section } = this.fieldRootInSection(`AdditionalTeamMembers_f`, `Audit Setup`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditTitle() {

    const { root, section } = this.fieldRootInSection(`AuditTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletetheAuditResultsandsettotheReadyforReviewstate() {

    const { root, section } = this.fieldRootInSection(`CompletetheAuditResultsands_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompeltedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LeadAuditorNotified() {

    const { root, section } = this.fieldRootInSection(`LeadAuditorNotified_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ScopeandObjectives() {

    const { root, section } = this.fieldRootInSection(`ScopeandObjectives_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TheSupplierAuditissetforSupplierSelfAssessment() {

    const { root, section } = this.fieldRootInSection(`TheSupplierAuditissetforSup_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get AssignedSQE() {

    const { root, section } = this.fieldRootInSection(`AssignedSQE_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LeadAuditor() {

    const { root, section } = this.fieldRootInSection(`LeadAuditor_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAuditType() {

    const { root, section } = this.fieldRootInSection(`SupplierAuditType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AuditFindings() {

    const { root, section } = this.fieldRootInSection(`AuditFindings_f`, `Audit Findings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierCorrectiveActionRequests() {

    const { root, section } = this.fieldRootInSection(`SupplierCorrectiveActionReq_f`, `Audit Findings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCorrectiveActionstoVerify() {

    const { root, section } = this.fieldRootInSection(`SupplierCorrectiveActionsVe_f`, `Audit Results`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AuditChecklists() {

    const { root, section } = this.fieldRootInSection(`Checklist_f`, `Audit Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAuditTeamMembers() {

    const { root, section } = this.fieldRootInSection(`SupplierAuditTeamMembers_f`, `Audit Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
