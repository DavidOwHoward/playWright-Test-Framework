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


export class RFQs_p extends DetailsPageBase {
  get RFQID() {

    const { root, section } = this.fieldRootInSection(`RFQID_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get WorksheetsComplete() {

    const { root, section } = this.fieldRootInSection(`WorksheetsComplete_f`, `Cost Information Worksheets`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get EstimatedTotalVolume() {

    const { root, section } = this.fieldRootInSection(`EstimatedTotalVolume_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ExchangeRate() {

    const { root, section } = this.fieldRootInSection(`ExchangeRate_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQCancelled() {

    const { root, section } = this.fieldRootInSection(`RFQCancelled_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQRound() {

    const { root, section } = this.fieldRootInSection(`RFQRound_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmissionDate() {

    const { root, section } = this.fieldRootInSection(`SubmissionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasureConversion() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasureConversion_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UpdateRequestComments() {

    const { root, section } = this.fieldRootInSection(`UpdateRequestComments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestLogisticsReview() {

    const { root, section } = this.fieldRootInSection(`RequireLogisticsReview_f`, `Reviews and Approval`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestToolingReview() {

    const { root, section } = this.fieldRootInSection(`RequestToolingReview_f`, `Reviews and Approval`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQApproval() {

    const { root, section } = this.fieldRootInSection(`RFQApproval_f`, `Reviews and Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get AcceptPartIncoterms() {

    const { root, section } = this.fieldRootInSection(`AcceptPartIncoterms_f`, `Terms and Conditions`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AcceptPartPaymentTerms() {

    const { root, section } = this.fieldRootInSection(`AcceptPartPaymentTerms_f`, `Terms and Conditions`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AcceptToolingIncoterms() {

    const { root, section } = this.fieldRootInSection(`AcceptToolingIncoterms_f`, `Terms and Conditions`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AcceptToolingPaymentTerms() {

    const { root, section } = this.fieldRootInSection(`AcceptToolingPaymentTerms_f`, `Terms and Conditions`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ERS() {

    const { root, section } = this.fieldRootInSection(`ERS_f`, `Terms and Conditions`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _NamedPlacepartdelivery() {

    const { root, section } = this.fieldRootInSection(`NamedPlacepartdelivery_f`, `Terms and Conditions`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NamedPlacetooldelivery() {

    const { root, section } = this.fieldRootInSection(`NamedPlacetooldelivery_f`, `Terms and Conditions`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _RejectionCommentspartdelivery() {

    const { root, section } = this.fieldRootInSection(`RejectionCommentspartdelive_f`, `Terms and Conditions`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _RejectionCommentstooldelivery() {

    const { root, section } = this.fieldRootInSection(`RejectionCommentstooldelive_f`, `Terms and Conditions`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Buyer() {

    const { root, section } = this.fieldRootInSection(`Buyer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorRFQfromwhichtocopy() {

    const { root, section } = this.fieldRootInSection(`PriorRFQfromwhichtocopy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQManagementPlan() {

    const { root, section } = this.fieldRootInSection(`RFQPlan_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramCurrency() {

    const { root, section } = this.fieldRootInSection(`ProgramCurrency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierContact() {

    const { root, section } = this.fieldRootInSection(`SupplierContact_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCurrency() {

    const { root, section } = this.fieldRootInSection(`SupplierCurrency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemofMeasure() {

    const { root, section } = this.fieldRootInSection(`SystemofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PartIncoterms() {

    const { root, section } = this.fieldRootInSection(`PartIncoterms_f`, `Terms and Conditions`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPaymentTerms() {

    const { root, section } = this.fieldRootInSection(`PartPaymentTerms_f`, `Terms and Conditions`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingIncoterms() {

    const { root, section } = this.fieldRootInSection(`ToolingIncoterms_f`, `Terms and Conditions`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingPaymentTerms() {

    const { root, section } = this.fieldRootInSection(`ToolingPaymentTerms_f`, `Terms and Conditions`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LogisticsReviews() {

    const { root, section } = this.fieldRootInSection(`LogisticsReviews_f`, `Reviews and Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingReviews() {

    const { root, section } = this.fieldRootInSection(`ToolingReviews_f`, `Reviews and Approval`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Drawings() {

    const { root, section } = this.fieldRootInSection(`Drawings_f`, `Terms and Conditions`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelevantDocuments() {

    const { root, section } = this.fieldRootInSection(`RelevantDocuments_f`, `Terms and Conditions`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringDesignWorksheet() {

    const { root, section } = this.fieldRootInSection(`EngineeringDesignWorksheet_f`, `Cost Information Worksheets`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get FeasibilityWorksheet() {

    const { root, section } = this.fieldRootInSection(`FeasibilityWorksheet_f`, `Cost Information Worksheets`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialCapacityWorksheet() {

    const { root, section } = this.fieldRootInSection(`InitialCapacityWorksheet_f`, `Cost Information Worksheets`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingWorksheet() {

    const { root, section } = this.fieldRootInSection(`PackagingWorksheet_f`, `Cost Information Worksheets`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get PartWorksheet() {

    const { root, section } = this.fieldRootInSection(`PartWorksheet_f`, `Cost Information Worksheets`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingWorksheet() {

    const { root, section } = this.fieldRootInSection(`ToolingWorksheet_f`, `Cost Information Worksheets`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationWorksheet() {

    const { root, section } = this.fieldRootInSection(`TransportationWorksheet_f`, `Cost Information Worksheets`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
