import { DetailsPageBase } from '../../BasePages/DetailsPageBase';
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


export class SupplierCorrectiveActionRequests_p extends DetailsPageBase {
  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get SCARNumber() {

    const { root, section } = this.fieldRootInSection(`SCARNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovaltoClose() {

    const { root, section } = this.fieldRootInSection(`ApprovaltoClose_f`, `Closure`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ClosedDate() {

    const { root, section } = this.fieldRootInSection(`ClosedDate_f`, `Closure`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ClosureNotes() {

    const { root, section } = this.fieldRootInSection(`ClosureNotes_f`, `Closure`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestrictedWarning() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ItemITARMismatchWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`LotSerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemDescription() {

    const { root, section } = this.fieldRootInSection(`ProblemDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Quantity() {

    const { root, section } = this.fieldRootInSection(`Quantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`SupplierItemITARMismatchWar_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierPartNumber() {

    const { root, section } = this.fieldRootInSection(`SupplierPartNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierRMA() {

    const { root, section } = this.fieldRootInSection(`SupplierRMA_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetImplementationDate() {

    const { root, section } = this.fieldRootInSection(`ExpectedImplementationDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetInitialResponseDate() {

    const { root, section } = this.fieldRootInSection(`TargetInitialResponseDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Containment() {

    const { root, section } = this.fieldRootInSection(`Containment_f`, `Initial Response`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ContainmentApproval() {

    const { root, section } = this.fieldRootInSection(`ContainmentApproval_f`, `Initial Response`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialResponseDate() {

    const { root, section } = this.fieldRootInSection(`InitialResponseDate_f`, `Initial Response`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get IssuedDate() {

    const { root, section } = this.fieldRootInSection(`IssuedDate_f`, `Initial Response`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCANumber() {

    const { root, section } = this.fieldRootInSection(`SupplierCANumber_f`, `Initial Response`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierProblemDescription() {

    const { root, section } = this.fieldRootInSection(`SupplierProblemDescription_f`, `Initial Response`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualImplementationDate() {

    const { root, section } = this.fieldRootInSection(`ActualImplementationDate_f`, `Investigation and Corrective Action`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeCauseNotes() {

    const { root, section } = this.fieldRootInSection(`EscapeCauseNotes_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeCorrectiveActionPlan() {

    const { root, section } = this.fieldRootInSection(`EscapeCorrectiveActionPlan_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Isoloatedorsystemicproblem() {

    const { root, section } = this.fieldRootInSection(`Isoloatedorsystemicproblem_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ObservedPreviously() {

    const { root, section } = this.fieldRootInSection(`ObservedPreviosly_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceCauseNotes() {

    const { root, section } = this.fieldRootInSection(`RootCause_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceCorrectiveActionPlan() {

    const { root, section } = this.fieldRootInSection(`CorrectiveActionPlan_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PlanApproval() {

    const { root, section } = this.fieldRootInSection(`PlanApproval_f`, `Investigation and Corrective Action`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProgressStatus() {

    const { root, section } = this.fieldRootInSection(`ProgressStatus_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierTargetImplementationDate() {

    const { root, section } = this.fieldRootInSection(`TargetImplementationDate_f`, `Investigation and Corrective Action`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicCauseNotes() {

    const { root, section } = this.fieldRootInSection(`SystemicCauseNotes_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicCorrectiveActionPlan() {

    const { root, section } = this.fieldRootInSection(`SystemicCorrectiveActionPla_f`, `Investigation and Corrective Action`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationDate() {

    const { root, section } = this.fieldRootInSection(`VerificationDate_f`, `Verification`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationMethodNotComplete() {

    const { root, section } = this.fieldRootInSection(`VerificationComplete_f`, `Verification`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationNotes() {

    const { root, section } = this.fieldRootInSection(`VerificationNotes_f`, `Verification`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssignedSQE() {

    const { root, section } = this.fieldRootInSection(`AssignedSQE_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InternalChampion() {

    const { root, section } = this.fieldRootInSection(`InternalChampion_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`ProblemSeverity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSymptom() {

    const { root, section } = this.fieldRootInSection(`ProblemSymptom_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`QuantityUnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SCARCategory() {

    const { root, section } = this.fieldRootInSection(`SCARCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierChampion() {

    const { root, section } = this.fieldRootInSection(`SupplierChampion_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierChampionInternal() {

    const { root, section } = this.fieldRootInSection(`SupplierChampionInternal_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeRootCause() {

    const { root, section } = this.fieldRootInSection(`EscapeRootCause_f`, `Investigation and Corrective Action`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceRootCause() {

    const { root, section } = this.fieldRootInSection(`OccurrenceRootCause_f`, `Investigation and Corrective Action`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicRootCause() {

    const { root, section } = this.fieldRootInSection(`SystemicRootCause_f`, `Investigation and Corrective Action`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyComplaint() {

    const { root, section } = this.fieldRootInSection(`OriginatingComplaint_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyIncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`OriginatingInvestigation_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InitiatedbyNonconformance() {

    const { root, section } = this.fieldRootInSection(`OriginatingNonconformance_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbySupplierAudit() {

    const { root, section } = this.fieldRootInSection(`OriginatingSupplierAudit_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAuditResult() {

    const { root, section } = this.fieldRootInSection(`OriginatingSupplierAuditRes_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionEvent() {

    const { root, section } = this.fieldRootInSection(`InspectionEvent_f`, `Verification`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationMethod() {

    const { root, section } = this.fieldRootInSection(`VerificationMethod_f`, `Verification`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get VerifiedBy() {

    const { root, section } = this.fieldRootInSection(`VerifiedBy_f`, `Verification`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierItems() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformances() {

    const { root, section } = this.fieldRootInSection(`Nonconformances_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _VerificationFromSupplierAudits() {

    const { root, section } = this.fieldRootInSection(`VerificationFromSupplierAud_f`, `Verification`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedSupplierChargebacks() {

    const { root, section } = this.fieldRootInSection(`RelatedSupplierChargebacks_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
