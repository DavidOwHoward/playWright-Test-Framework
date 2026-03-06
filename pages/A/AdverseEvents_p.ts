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


export class AdverseEvents_p extends DetailsPageBase {
  get AdverseEventNumber() {

    const { root, section } = this.fieldRootInSection(`ComplaintNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CreatedDateTime() {

    const { root, section } = this.fieldRootInSection(`CreatedDateTime_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get FinalApprovalforClosure() {

    const { root, section } = this.fieldRootInSection(`FinalApprovalforClosure_f`, `Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalCommentsRelevantTestsLaboratoryData() {

    const { root, section } = this.fieldRootInSection(`RelevantTestsLaboratoryData_f`, `Event Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEvent() {

    const { root, section } = this.fieldRootInSection(`AdverseEvent_f`, `Event Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DateofDeath() {

    const { root, section } = this.fieldRootInSection(`DateofDeath_f`, `Event Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _EventProblemDescription() {

    const { root, section } = this.fieldRootInSection(`EventProblemDescription_f`, `Event Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EventDate() {

    const { root, section } = this.fieldRootInSection(`EventDate_f`, `Event Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _OtherRelevantHistoryPreexistingConditions() {

    const { root, section } = this.fieldRootInSection(`OtherRelevantHistory_f`, `Event Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductProblem() {

    const { root, section } = this.fieldRootInSection(`ProductProblem_f`, `Event Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportedDate() {

    const { root, section } = this.fieldRootInSection(`ReportedDate_f`, `Event Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproximateAgeofDevice() {

    const { root, section } = this.fieldRootInSection(`ApproximateAgeofDevice_f`, `Facility/Importer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateReportSenttoFDA() {

    const { root, section } = this.fieldRootInSection(`FacilityDateReportedToFDA_f`, `Facility/Importer`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DateReportSenttoManufacturer() {

    const { root, section } = this.fieldRootInSection(`FacilityDateReportedToMfg_f`, `Facility/Importer`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DateReportedtoFDAorManufacturer() {

    const { root, section } = this.fieldRootInSection(`FacilityReportDate_f`, `Facility/Importer`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DateUserFacilityorImporterBecameAwareofEvent() {

    const { root, section } = this.fieldRootInSection(`AwareDate_f`, `Facility/Importer`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _Followup() {

    const { root, section } = this.fieldRootInSection(`FollowupNumber_f`, `Facility/Importer`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportSenttoFDA() {

    const { root, section } = this.fieldRootInSection(`FacilityReportedToFDA_f`, `Facility/Importer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportSenttoManufacturer() {

    const { root, section } = this.fieldRootInSection(`FacilityReportedToMfg_f`, `Facility/Importer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TypeofReport() {

    const { root, section } = this.fieldRootInSection(`FacilityReportType_f`, `Facility/Importer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _UserFacilityorImporter() {

    const { root, section } = this.fieldRootInSection(`UserFacilityorImporter_f`, `Facility/Importer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _UserFacilityImporterReportNumber() {

    const { root, section } = this.fieldRootInSection(`UserFacilityImporterReportN_f`, `Facility/Importer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Address1() {

    const { root, section } = this.fieldRootInSection(`ReporterAddress1_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Address2() {

    const { root, section } = this.fieldRootInSection(`ReporterAddress2_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _AlsoReportedtoFDA() {

    const { root, section } = this.fieldRootInSection(`AlsoReportedtoFDA_f`, `Initial Reporter`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get City() {

    const { root, section } = this.fieldRootInSection(`ReporterCity_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Country() {

    const { root, section } = this.fieldRootInSection(`ReporterCountry_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Email() {

    const { root, section } = this.fieldRootInSection(`ReporterEmail_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FirstName() {

    const { root, section } = this.fieldRootInSection(`ReporterFirstName_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HealthProfessional() {

    const { root, section } = this.fieldRootInSection(`HealthProfessional_f`, `Initial Reporter`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get LastName() {

    const { root, section } = this.fieldRootInSection(`ReporterLastName_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MiddleName() {

    const { root, section } = this.fieldRootInSection(`ReporterMiddleName_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccupationOther() {

    const { root, section } = this.fieldRootInSection(`ReporterOccupationOther_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PhoneNumber() {

    const { root, section } = this.fieldRootInSection(`ReporterPhoneNumber_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PostalCode() {

    const { root, section } = this.fieldRootInSection(`ReporterPostalCode_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _StateProvinceRegion() {

    const { root, section } = this.fieldRootInSection(`ReporterState_f`, `Initial Reporter`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DEVICEMANUFACTURERSONLY() {

    const { root, section } = this.fieldRootInSection(`DeviceManufacturersLabel2_f`, `Investigation`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Tasksmustbecompletedpriortoapproval() {

    const { root, section } = this.fieldRootInSection(`Tasksmustbecompletedpriorto_f`, `Investigation`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _21USC360ifReportingNumber() {

    const { root, section } = this.fieldRootInSection(`USC360ReportingNumber_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalManufacturerNarrative() {

    const { root, section } = this.fieldRootInSection(`AdditionalManufacturerNarra_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdverseEventTerms() {

    const { root, section } = this.fieldRootInSection(`AdverseEventTerms_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ANDA() {

    const { root, section } = this.fieldRootInSection(`ANDANumber_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _BLA() {

    const { root, section } = this.fieldRootInSection(`BLANumber_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompoundingOutsourcingFacility503B() {

    const { root, section } = this.fieldRootInSection(`CompoundingOutsourcingFacil_f`, `Manufacturer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ContactOfficeSiteName() {

    const { root, section } = this.fieldRootInSection(`ContactOfficeSiteName_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CorrectedData() {

    const { root, section } = this.fieldRootInSection(`CorrectedData_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateReceivedbyManufacturer() {

    const { root, section } = this.fieldRootInSection(`DateReceivedbyManufacturer_f`, `Manufacturer`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceEvaluated() {

    const { root, section } = this.fieldRootInSection(`DeviceEvaluated_f`, `Manufacturer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _DEVICEMANUFACTURERSONLY() {

    const { root, section } = this.fieldRootInSection(`DeviceManufacturersLabel_f`, `Manufacturer`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ExplanationForNotEvaluatingDevice() {

    const { root, section } = this.fieldRootInSection(`ExplanationForNotEvaluating_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _IfINDPreANDAGiveProtocol() {

    const { root, section } = this.fieldRootInSection(`INDProtocol_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _IND() {

    const { root, section } = this.fieldRootInSection(`INDNumber_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _LabeledforSingleUse() {

    const { root, section } = this.fieldRootInSection(`LabeledforSingleUse_f`, `Manufacturer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufactureDate() {

    const { root, section } = this.fieldRootInSection(`ManufactureDate_f`, `Manufacturer`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturerReportNumber() {

    const { root, section } = this.fieldRootInSection(`ManufacturerReportNumber_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingSiteName() {

    const { root, section } = this.fieldRootInSection(`ManufacturingSiteName_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NDA() {

    const { root, section } = this.fieldRootInSection(`NDANumber_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NotEvaluatedCode() {

    const { root, section } = this.fieldRootInSection(`NotEvaluatedCode_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OutsourcingFacility() {

    const { root, section } = this.fieldRootInSection(`OutsourcingFacility_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _PMA510k() {

    const { root, section } = this.fieldRootInSection(`PMA510k_f`, `Manufacturer`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Age() {

    const { root, section } = this.fieldRootInSection(`PatientAge_f`, `Patient Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DateofBirth() {

    const { root, section } = this.fieldRootInSection(`PatientDateofBirth_f`, `Patient Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DateofBirthKnown() {

    const { root, section } = this.fieldRootInSection(`Age_f`, `Patient Information`);

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

  get _NoofEventsSummarized() {

    const { root, section } = this.fieldRootInSection(`NumberofEventsSummarized_f`, `Reportability Assessment`);

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

  get InsertSuspectDevice() {

    const { root, section } = this.fieldRootInSection(`InsertSuspectDevice_f`, `Suspect Items`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get InsertSuspectProduct() {

    const { root, section } = this.fieldRootInSection(`InsertSuspectProduct_f`, `Suspect Items`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get MedicalProductandTreatmentGivenattheSameTimeOftheEventandDate() {

    const { root, section } = this.fieldRootInSection(`AdditionalMedicalProducts_f`, `Suspect Items`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AssignedSpecialist() {

    const { root, section } = this.fieldRootInSection(`AssignedSpecialist_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CreatedBy() {

    const { root, section } = this.fieldRootInSection(`CreatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Contact() {

    const { root, section } = this.fieldRootInSection(`ReporterContact_f`, `Facility/Importer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FacilityImporter() {

    const { root, section } = this.fieldRootInSection(`ReporterFacility_f`, `Facility/Importer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LocationWhereEventOccurred() {

    const { root, section } = this.fieldRootInSection(`Location_f`, `Facility/Importer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Occupation() {

    const { root, section } = this.fieldRootInSection(`ReporterOccupation_f`, `Initial Reporter`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `Manufacturer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `Manufacturer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingSite() {

    const { root, section } = this.fieldRootInSection(`ManufacturingSite_f`, `Manufacturer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingSiteContact() {

    const { root, section } = this.fieldRootInSection(`ManufacturingSiteContact_f`, `Manufacturer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `Manufacturer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UsageofDevice() {

    const { root, section } = this.fieldRootInSection(`MfgUsageofDevice_f`, `Manufacturer`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AgeUnits() {

    const { root, section } = this.fieldRootInSection(`AgeUnits_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Ethnicity() {

    const { root, section } = this.fieldRootInSection(`PatientEthnicity_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Gender() {

    const { root, section } = this.fieldRootInSection(`PatientSex_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WeightUnits() {

    const { root, section } = this.fieldRootInSection(`PatientWeightUnits_f`, `Patient Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EventOutcomes() {

    const { root, section } = this.fieldRootInSection(`EventOutcomes_f`, `Event Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelevantTestsLaboratoryData() {

    const { root, section } = this.fieldRootInSection(`RelevantTests_f`, `Event Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ComponentCode() {

    const { root, section } = this.fieldRootInSection(`FacilityDeviceComponentCode_f`, `Facility/Importer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _HealthEffectClinicalCode() {

    const { root, section } = this.fieldRootInSection(`FacilityHealthClinicalCode_f`, `Facility/Importer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _HealthEffectImpactCode() {

    const { root, section } = this.fieldRootInSection(`FacilityHealthImpactCode_f`, `Facility/Importer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get MedicalDeviceProblemCode() {

    const { root, section } = this.fieldRootInSection(`FacilityDeviceProblemCode_f`, `Facility/Importer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Attachments() {

    const { root, section } = this.fieldRootInSection(`Attachments_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ComponentCodes() {

    const { root, section } = this.fieldRootInSection(`DeviceComponentCode_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _HealthEffectClinicalCodes() {

    const { root, section } = this.fieldRootInSection(`HealthClinicalCode_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _HealthEffectImpactCodes() {

    const { root, section } = this.fieldRootInSection(`HealthImpactCode_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InvestigationConclusions() {

    const { root, section } = this.fieldRootInSection(`InvestigationConclusions_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InvestigationFindings() {

    const { root, section } = this.fieldRootInSection(`InvestigationFindings_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _MedicalDeviceProblemCodes() {

    const { root, section } = this.fieldRootInSection(`DeviceProblemCode_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedComplaints() {

    const { root, section } = this.fieldRootInSection(`RelatedComplaints_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedNonconformances() {

    const { root, section } = this.fieldRootInSection(`RelatedNonconformances_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Tasks() {

    const { root, section } = this.fieldRootInSection(`Tasks_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TypeofInvestigation() {

    const { root, section } = this.fieldRootInSection(`TypeofInvestigation_f`, `Investigation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductTypes() {

    const { root, section } = this.fieldRootInSection(`MfgProductType_f`, `Manufacturer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RemedialActionType() {

    const { root, section } = this.fieldRootInSection(`MfgRemedialActionType_f`, `Manufacturer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportSource() {

    const { root, section } = this.fieldRootInSection(`MfgReportSource_f`, `Manufacturer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Race() {

    const { root, section } = this.fieldRootInSection(`PatientRace_f`, `Patient Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportingAgencies() {

    const { root, section } = this.fieldRootInSection(`ReportingAgencies_f`, `Reportability Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TypeofReportableEvent() {

    const { root, section } = this.fieldRootInSection(`MfgTypeOfReportableEvent_f`, `Reportability Assessment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Submissions() {

    const { root, section } = this.fieldRootInSection(`Submissions_f`, `Submissons`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SuspectDevice() {

    const { root, section } = this.fieldRootInSection(`SuspectDevice_f`, `Suspect Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SuspectProducts() {

    const { root, section } = this.fieldRootInSection(`SuspectProducts_f`, `Suspect Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
