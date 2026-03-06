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


export class Audits_p extends DetailsPageBase {
  get AuditNumber() {

    const { root, section } = this.fieldRootInSection(`AuditNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledFinishDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledFinishDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledStartDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledStartDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditCompleteDate() {

    const { root, section } = this.fieldRootInSection(`AuditCompleteDate_f`, `Audit Results`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditId() {

    const { root, section } = this.fieldRootInSection(`AuditId_f`, `Audit Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditResults() {

    const { root, section } = this.fieldRootInSection(`AuditResults_f`, `Audit Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditResultsList() {

    const { root, section } = this.fieldRootInSection(`AuditResultsList_f`, `Audit Results`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get EachAuditResultiscompleteorskipped() {

    const { root, section } = this.fieldRootInSection(`EachAuditResultiscompleteor_f`, `Audit Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IncompleteAuditResults() {

    const { root, section } = this.fieldRootInSection(`IncompleteAuditResults_f`, `Audit Results`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get MaximumPossibleScore() {

    const { root, section } = this.fieldRootInSection(`MaximumPossibleScore_f`, `Audit Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentageScore() {

    const { root, section } = this.fieldRootInSection(`PercentageScore_f`, `Audit Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalScore() {

    const { root, section } = this.fieldRootInSection(`TotalScore_f`, `Audit Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalTeamMembers() {

    const { root, section } = this.fieldRootInSection(`AdditionalTeamMembers_f`, `Audit Team`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdjustScheduleDates() {

    const { root, section } = this.fieldRootInSection(`AdjustScheduleDates_f`, `General`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditTitle() {

    const { root, section } = this.fieldRootInSection(`AuditTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeFrequency() {

    const { root, section } = this.fieldRootInSection(`ChangeFrequency_f`, `General`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScheduledFinishDatecannotbesetpriortoScheduledStartDateMinimalonehourdifference() {

    const { root, section } = this.fieldRootInSection(`ScheduledFinishDatecannotbe_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalScopeandObjectives() {

    const { root, section } = this.fieldRootInSection(`AdditionalScopeandObjective_f`, `Reference Coverage`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PreviousAudits() {

    const { root, section } = this.fieldRootInSection(`PreviousAudits_f`, `Reference Coverage`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditApproval() {

    const { root, section } = this.fieldRootInSection(`AuditApproval_f`, `Summary`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ExecutiveSummary() {

    const { root, section } = this.fieldRootInSection(`ExecutiveSummary_f`, `Summary`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Organizer() {

    const { root, section } = this.fieldRootInSection(`Organizer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditType() {

    const { root, section } = this.fieldRootInSection(`AuditType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LeadAuditor() {

    const { root, section } = this.fieldRootInSection(`LeadAuditor_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LPAGroup() {

    const { root, section } = this.fieldRootInSection(`LPAGroup_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LPALayer() {

    const { root, section } = this.fieldRootInSection(`LPALayer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SchedulingFrequency() {

    const { root, section } = this.fieldRootInSection(`SchedulingFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `Organization Coverage`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `Organization Coverage`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `Reference Coverage`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AuditFindings() {

    const { root, section } = this.fieldRootInSection(`AuditFindings_f`, `Audit Findings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _IncidentInvestigations() {

    const { root, section } = this.fieldRootInSection(`Investigations_f`, `Audit Findings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformances() {

    const { root, section } = this.fieldRootInSection(`Nonconformances_f`, `Audit Findings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditTeamMembers() {

    const { root, section } = this.fieldRootInSection(`AuditTeamMembers_f`, `Audit Team`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditChecklist() {

    const { root, section } = this.fieldRootInSection(`AuditChecklist_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Departments() {

    const { root, section } = this.fieldRootInSection(`Departments_f`, `Organization Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Shifts() {

    const { root, section } = this.fieldRootInSection(`Shifts_f`, `Organization Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `Organization Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _WorkCenters() {

    const { root, section } = this.fieldRootInSection(`WorkCenters_f`, `Organization Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocumentProcessControlPlanLinkstoAudits() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocumentProces_f`, `Reference Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Processs() {

    const { root, section } = this.fieldRootInSection(`Processs_f`, `Reference Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _StandardSections() {

    const { root, section } = this.fieldRootInSection(`StandardSections_f`, `Reference Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Standards() {

    const { root, section } = this.fieldRootInSection(`Standards_f`, `Reference Coverage`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocuments_f`, `Reviewed Materials`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewedDocuments() {

    const { root, section } = this.fieldRootInSection(`ReviewedDocuments_f`, `Reviewed Materials`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
