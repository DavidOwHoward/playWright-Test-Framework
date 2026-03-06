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


export class Suppliers_p extends DetailsPageBase {
  get _AdditionalContacts() {

    const { root, section } = this.fieldRootInSection(`AdditionalContacts_f`, `Contact Information`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Documents`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _Drawings() {

    const { root, section } = this.fieldRootInSection(`Drawings_f`, `Documents`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get AlternateSupplierCode() {

    const { root, section } = this.fieldRootInSection(`AlternateSupplierCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerDirectedProof() {

    const { root, section } = this.fieldRootInSection(`CustomerDirectedProof_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerDirectedSupplier() {

    const { root, section } = this.fieldRootInSection(`CustomerDirectedSupplier_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighRiskSupplier() {

    const { root, section } = this.fieldRootInSection(`HighRiskSupplier_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InternalSupplier() {

    const { root, section } = this.fieldRootInSection(`InternalSupplier_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProjectTasks() {

    const { root, section } = this.fieldRootInSection(`ProjectTasksList_f`, `Project Tasks`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get LastAuditCompleted() {

    const { root, section } = this.fieldRootInSection(`LastAuditCompleted_f`, `Reviews/Audits`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SendPerformanceReviewsWithoutReview() {

    const { root, section } = this.fieldRootInSection(`AutoCompleteReviews_f`, `Reviews/Audits`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ParentSupplier() {

    const { root, section } = this.fieldRootInSection(`ParentSupplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AccountingContact() {

    const { root, section } = this.fieldRootInSection(`AccountingContact_f`, `Contact Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AccountingContactInternal() {

    const { root, section } = this.fieldRootInSection(`AccountingContactInternal_f`, `Contact Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectSupplierContact() {

    const { root, section } = this.fieldRootInSection(`APQPProjectSupplierContact_f`, `Contact Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityContact() {

    const { root, section } = this.fieldRootInSection(`QualityContact_f`, `Contact Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityContactInternal() {

    const { root, section } = this.fieldRootInSection(`QualityContactInternal_f`, `Contact Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssignedSQE() {

    const { root, section } = this.fieldRootInSection(`LeadAuditor_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedSite() {

    const { root, section } = this.fieldRootInSection(`RelatedSite_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierApprovalStatus() {

    const { root, section } = this.fieldRootInSection(`SupplierApprovalStatus_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierRiskCategory() {

    const { root, section } = this.fieldRootInSection(`SupplierRiskCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCertifications() {

    const { root, section } = this.fieldRootInSection(`SupplierCertifications_f`, `Certifications`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Divisions() {

    const { root, section } = this.fieldRootInSection(`Divisions_f`, `Contact Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Commodities() {

    const { root, section } = this.fieldRootInSection(`SupplierCommodities_f`, `Item Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierItems() {

    const { root, section } = this.fieldRootInSection(`SupplierItems_f`, `Item Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformances() {

    const { root, section } = this.fieldRootInSection(`Nonconformances_f`, `NCRs/SCARs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierChargebacks() {

    const { root, section } = this.fieldRootInSection(`SupplierChargebacks_f`, `NCRs/SCARs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCorrectiveActionRequest() {

    const { root, section } = this.fieldRootInSection(`SCARs_f`, `NCRs/SCARs`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAudits() {

    const { root, section } = this.fieldRootInSection(`SupplierAudits_f`, `Reviews/Audits`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierPerformanceReviews() {

    const { root, section } = this.fieldRootInSection(`SupplierPerformanceReviews_f`, `Reviews/Audits`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DomainSettings() {

    const { root, section } = this.fieldRootInSection(`DomainSettings_f`, `Supplier Domain Settings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierRiskAssessments() {

    const { root, section } = this.fieldRootInSection(`SupplierRiskAssessments_f`, `Supplier Risks`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
