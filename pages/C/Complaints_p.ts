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


export class Complaints_p extends DetailsPageBase {
  get ComplaintNumber() {

    const { root, section } = this.fieldRootInSection(`ComplaintNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get EstimatedCompletionDate() {

    const { root, section } = this.fieldRootInSection(`EstimatedCompletionDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get StepDueDate() {

    const { root, section } = this.fieldRootInSection(`StepDueDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActionPlanApproval() {

    const { root, section } = this.fieldRootInSection(`ActionPlanApproval_f`, `Action Plan`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ActionPlandescription() {

    const { root, section } = this.fieldRootInSection(`ActionPlandescription_f`, `Action Plan`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemInventory() {

    const { root, section } = this.fieldRootInSection(`ItemInventory_f`, `Action Plan`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get AssessmentApproval() {

    const { root, section } = this.fieldRootInSection(`AssessmentApproval_f`, `Assessment`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get AssessmentSummary() {

    const { root, section } = this.fieldRootInSection(`AssessmentSummary_f`, `Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CreateIncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`CreateInvestigation_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoAdverseEvent() {

    const { root, section } = this.fieldRootInSection(`EscalatetoAdverseEvent_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _EscalatetoCAPA() {

    const { root, section } = this.fieldRootInSection(`EscalatetoCAPA1_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _EscalatetoNonconformance() {

    const { root, section } = this.fieldRootInSection(`EscalatetoCAPA_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoSCAR() {

    const { root, section } = this.fieldRootInSection(`EscalatetoSCAR_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _InvestigateComplaint() {

    const { root, section } = this.fieldRootInSection(`InvestigateComplaint_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ItemtoBeReturned() {

    const { root, section } = this.fieldRootInSection(`Itemtobereturned_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get JustificationforNoAdverseEvent() {

    const { root, section } = this.fieldRootInSection(`JustificationforNoAdverseEv_f`, `Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _JustificationforNoNonconformance() {

    const { root, section } = this.fieldRootInSection(`JustificationforNoCAPA_f`, `Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get JustificationNottoInvestigate() {

    const { root, section } = this.fieldRootInSection(`InvestigateJustificationNot_f`, `Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _JustificationtoEscalate() {

    const { root, section } = this.fieldRootInSection(`JustificationtoEscalate_f`, `Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get JustificationtoInvestigate() {

    const { root, section } = this.fieldRootInSection(`InvestigateJustification_f`, `Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get KnownIssue() {

    const { root, section } = this.fieldRootInSection(`KnownIssue_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NotifyCustomer() {

    const { root, section } = this.fieldRootInSection(`NotifyCustomer_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _RegulatoryPathwayOwnership() {

    const { root, section } = this.fieldRootInSection(`RegulatoryPathwayOwnership_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RMANumber() {

    const { root, section } = this.fieldRootInSection(`RMANumber_f`, `Assessment`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierIssue() {

    const { root, section } = this.fieldRootInSection(`SupplierIssue_f`, `Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerResolution() {

    const { root, section } = this.fieldRootInSection(`CustomerResolution_f`, `Closure `);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get FinalApproval() {

    const { root, section } = this.fieldRootInSection(`FinalApproval_f`, `Closure `);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ResolutionDetails() {

    const { root, section } = this.fieldRootInSection(`ResolutionDetails_f`, `Closure `);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Address1() {

    const { root, section } = this.fieldRootInSection(`Address1_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Address1() {

    const { root, section } = this.fieldRootInSection(`CalculatedAddress1_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Address2() {

    const { root, section } = this.fieldRootInSection(`Address2_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Address2() {

    const { root, section } = this.fieldRootInSection(`CalculatedAddress2_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get City() {

    const { root, section } = this.fieldRootInSection(`CalculatedCity_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _City() {

    const { root, section } = this.fieldRootInSection(`City_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Country() {

    const { root, section } = this.fieldRootInSection(`CalculatedCountry_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Country() {

    const { root, section } = this.fieldRootInSection(`Country_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Email() {

    const { root, section } = this.fieldRootInSection(`CalculatedEmail_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Email() {

    const { root, section } = this.fieldRootInSection(`Email_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FirstName() {

    const { root, section } = this.fieldRootInSection(`CalculatedFirstName_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FirstName() {

    const { root, section } = this.fieldRootInSection(`FirstName_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LastName() {

    const { root, section } = this.fieldRootInSection(`CalculatedLastName_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _LastName() {

    const { root, section } = this.fieldRootInSection(`LastName_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MiddleName() {

    const { root, section } = this.fieldRootInSection(`MiddleName_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PhoneNumber() {

    const { root, section } = this.fieldRootInSection(`CalculatedPhoneNumber_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _PhoneNumber() {

    const { root, section } = this.fieldRootInSection(`PhoneNumber_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PostalCode() {

    const { root, section } = this.fieldRootInSection(`CalculatedPostalCode_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _PostalCode() {

    const { root, section } = this.fieldRootInSection(`PostalCode_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportedBy() {

    const { root, section } = this.fieldRootInSection(`ReportedBy_f`, `Complainant`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _SendEmailAcknowledgement() {

    const { root, section } = this.fieldRootInSection(`SendEmailAcknowledgement_f`, `Complainant`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _StateProvinceRegion() {

    const { root, section } = this.fieldRootInSection(`CalculatedStateProvinceRegi_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get __StateProvinceRegion() {

    const { root, section } = this.fieldRootInSection(`StateProvinceRegion_f`, `Complainant`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _DateIssueFoundOccurred() {

    const { root, section } = this.fieldRootInSection(`DateIssueFoundOccurred_f`, `Event Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DateIssueFoundOccurredcannotbesetbeyondtheCurrentDateAcorrectdate() {

    const { root, section } = this.fieldRootInSection(`DateIssueFoundOccurredcanno_f`, `Event Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _EventProblemDescription() {

    const { root, section } = this.fieldRootInSection(`EventProblemDescription_f`, `Event Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportedDate() {

    const { root, section } = this.fieldRootInSection(`ReportedDate_f`, `Event Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportedDatecannotbesetbeyondtheCurrentDateAcorrectdate() {

    const { root, section } = this.fieldRootInSection(`ReportedDatecannotbesetbeyo_f`, `Event Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DateClosed() {

    const { root, section } = this.fieldRootInSection(`DateClosed_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiateDate() {

    const { root, section } = this.fieldRootInSection(`InitiateDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LatestCompletedActionDate() {

    const { root, section } = this.fieldRootInSection(`LatestCompletedActionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _LifeScienceIssue() {

    const { root, section } = this.fieldRootInSection(`LifeScienceIssue_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ComplaintsfortheSelectedItems() {

    const { root, section } = this.fieldRootInSection(`ComplaintsfortheSelectedIte_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonconformancesfortheSelectedItems() {

    const { root, section } = this.fieldRootInSection(`NonconformancesfortheSelect_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _QualityAlertsforSelectedItems() {

    const { root, section } = this.fieldRootInSection(`QualityAlertsforSelectedIte_f`, `Historical Data`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _CustomerHasRequestedInvestigationFindings() {

    const { root, section } = this.fieldRootInSection(`RequestedFindings_f`, `Investigation`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerResolutionDetails() {

    const { root, section } = this.fieldRootInSection(`CustomerResolutionDetails_f`, `Investigation`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateProvidedtoCustomer() {

    const { root, section } = this.fieldRootInSection(`ProvidedtoCustomer_f`, `Investigation`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InvestigationDate() {

    const { root, section } = this.fieldRootInSection(`InvestigationDate_f`, `Investigation`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InvestigationNotes() {

    const { root, section } = this.fieldRootInSection(`InvestigationNotes_f`, `Investigation`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProvidedBy() {

    const { root, section } = this.fieldRootInSection(`ProvidedBy_f`, `Investigation`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Age() {

    const { root, section } = this.fieldRootInSection(`Age_f`, `Patient Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DateofBirth() {

    const { root, section } = this.fieldRootInSection(`DateofBirth_f`, `Patient Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DateofBirthKnown() {

    const { root, section } = this.fieldRootInSection(`DateofBirthKnown_f`, `Patient Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PatientIdentifier() {

    const { root, section } = this.fieldRootInSection(`PatientIdentifier_f`, `Patient Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Weight() {

    const { root, section } = this.fieldRootInSection(`Weight_f`, `Patient Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DateUserFacilityorImporterBecameAwareofEvent() {

    const { root, section } = this.fieldRootInSection(`AwareDate_f`, `Reportability Assessment`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _NoofEventsSummarized() {

    const { root, section } = this.fieldRootInSection(`NoofEventsSummarized_f`, `Reportability Assessment`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDaystoReport() {

    const { root, section } = this.fieldRootInSection(`NumberofDaystoReport_f`, `Reportability Assessment`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportDueDate() {

    const { root, section } = this.fieldRootInSection(`ReportDueDate_f`, `Reportability Assessment`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportabilityAssessment() {

    const { root, section } = this.fieldRootInSection(`ReportabilityAssessment_f`, `Reportability Assessment`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get _Reportable() {

    const { root, section } = this.fieldRootInSection(`Reportable_f`, `Reportability Assessment`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Priority() {

    const { root, section } = this.fieldRootInSection(`Priority_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEvent() {

    const { root, section } = this.fieldRootInSection(`AdverseEvent_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA1_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ComplaintProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`ComplaintProblemSeverity_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformance() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Problemasfound() {

    const { root, section } = this.fieldRootInSection(`Problemasfound_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSource() {

    const { root, section } = this.fieldRootInSection(`ProblemSource_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SCAR() {

    const { root, section } = this.fieldRootInSection(`SCAR_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierItem() {

    const { root, section } = this.fieldRootInSection(`SupplierItem_f`, `Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CompanyName() {

    const { root, section } = this.fieldRootInSection(`CompanyName_f`, `Complainant`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Contact() {

    const { root, section } = this.fieldRootInSection(`Contact_f`, `Complainant`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Problemasreported() {

    const { root, section } = this.fieldRootInSection(`Problemasreported_f`, `Event Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ComplaintType() {

    const { root, section } = this.fieldRootInSection(`ComplaintType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

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

  get Responsible() {

    const { root, section } = this.fieldRootInSection(`Responsible_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SearchItemBySalesOrderInvoice() {

    const { root, section } = this.fieldRootInSection(`SearchItemBySalesOrderInvoi_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SearchItemBySerialNumber() {

    const { root, section } = this.fieldRootInSection(`SearchItemBySerialNumber_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AgeUnits() {

    const { root, section } = this.fieldRootInSection(`AgeUnits_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Ethnicity() {

    const { root, section } = this.fieldRootInSection(`Ethnicity_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Gender() {

    const { root, section } = this.fieldRootInSection(`Gender_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WeightUnits() {

    const { root, section } = this.fieldRootInSection(`WeightUnits_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssignedSpecialist() {

    const { root, section } = this.fieldRootInSection(`AssignedSpecialist_f`, `Reportability Assessment`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ActionItems() {

    const { root, section } = this.fieldRootInSection(`ActionItems_f`, `Action Plan`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemreturnInformation() {

    const { root, section } = this.fieldRootInSection(`ItemreturnInformation_f`, `Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityAlert() {

    const { root, section } = this.fieldRootInSection(`QualityAlert_f`, `Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskAssessment() {

    const { root, section } = this.fieldRootInSection(`RiskAssessment_f`, `Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalContacts() {

    const { root, section } = this.fieldRootInSection(`AdditionalContacts_f`, `Complainant`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Attachments() {

    const { root, section } = this.fieldRootInSection(`Attachments_f`, `Correspondence/Attachments`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CorrespondenceNotes() {

    const { root, section } = this.fieldRootInSection(`CorrespondenceNotes_f`, `Correspondence/Attachments`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Race() {

    const { root, section } = this.fieldRootInSection(`Race_f`, `Patient Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportingAgencies() {

    const { root, section } = this.fieldRootInSection(`ReportingAgencies_f`, `Reportability Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TypeofReportableEvent() {

    const { root, section } = this.fieldRootInSection(`TypeofReportableEvent_f`, `Reportability Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get IncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`Investigation_f`, `Assessment`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
