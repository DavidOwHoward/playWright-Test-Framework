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


export class Deviations_p extends DetailsPageBase {
  get DeviationNumber() {

    const { root, section } = this.fieldRootInSection(`DeviationNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ExpirationDate() {

    const { root, section } = this.fieldRootInSection(`ExpirationDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ExpirationQuantity() {

    const { root, section } = this.fieldRootInSection(`ExpirationQuantity_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalDate() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalDate_f`, `Customer Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalDocumentation() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalDocumentati_f`, `Customer Approval`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalNotes() {

    const { root, section } = this.fieldRootInSection(`CustomerApprovalNotes_f`, `Customer Approval`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerApprovalSubmissionDate() {

    const { root, section } = this.fieldRootInSection(`CustApprovalSubmissionDate_f`, `Customer Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateInvestigation() {

    const { root, section } = this.fieldRootInSection(`CreateInvestigation_f`, `Deviation Specifics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresCustomerApproval() {

    const { root, section } = this.fieldRootInSection(`RequiresCustomerApproval_f`, `Deviation Specifics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresInternalApproval() {

    const { root, section } = this.fieldRootInSection(`RequiresInternalApproval_f`, `Deviation Specifics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviationDescription() {

    const { root, section } = this.fieldRootInSection(`DeviationDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _DeviationImages() {

    const { root, section } = this.fieldRootInSection(`DeviationImage_f`, `General`);

    return new Picture(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorNumber() {

    const { root, section } = this.fieldRootInSection(`PriorNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierDeviationreadyforSubmission() {

    const { root, section } = this.fieldRootInSection(`SupplierDeviationreadyforSu_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviationApproval() {

    const { root, section } = this.fieldRootInSection(`DeviationApproval_f`, `Internal Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `Deviation Specifics`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`QuantityUnitofMeasure_f`, `Deviation Specifics`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssignedSQE() {

    const { root, section } = this.fieldRootInSection(`AssignedSQE_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviationType() {

    const { root, section } = this.fieldRootInSection(`DeviationType_f`, `General`);

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

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

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

  get SupplierItem() {

    const { root, section } = this.fieldRootInSection(`SupplierItem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DeviationApprovers() {

    const { root, section } = this.fieldRootInSection(`DeviationApprovers_f`, `Deviation Specifics`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedDocuments_f`, `Deviation Specifics`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Distribution() {

    const { root, section } = this.fieldRootInSection(`Distribution_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationGroups() {

    const { root, section } = this.fieldRootInSection(`NotificationGroups_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get IncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`Investigation_f`, `Deviation Specifics`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedNonconformances() {

    const { root, section } = this.fieldRootInSection(`RelatedNonconformance_f`, `Deviation Specifics`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
