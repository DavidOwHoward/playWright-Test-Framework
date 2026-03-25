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


export class IncidentInvestigations_p extends DetailsPageBase {
  get _IncidentDateTime() {

    const { root, section } = this.fieldRootInSection(`IncidentDateTime_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get IncidentNumber() {

    const { root, section } = this.fieldRootInSection(`IncidentNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletion_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ClosureApproval() {

    const { root, section } = this.fieldRootInSection(`ClosureApproval_f`, `Closure`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ClosureNotes() {

    const { root, section } = this.fieldRootInSection(`ClosureNotes_f`, `Closure`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `Closure`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DescriptionofIncidentProblemSituation() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Email() {

    const { root, section } = this.fieldRootInSection(`Email_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ImagesofIncidentProblemSituation() {

    const { root, section } = this.fieldRootInSection(`ImageofIncident_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARInvestigatorWarning() {

    const { root, section } = this.fieldRootInSection(`ITARInvestigatorWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
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

  get _NotableSurroundingsCircumstances() {

    const { root, section } = this.fieldRootInSection(`NotableSurroundings_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PhoneNumber() {

    const { root, section } = this.fieldRootInSection(`PhoneNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportedBy() {

    const { root, section } = this.fieldRootInSection(`ReportedBytext_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportedbyEmployee() {

    const { root, section } = this.fieldRootInSection(`ReportedbyEmployee_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportedDateTime() {

    const { root, section } = this.fieldRootInSection(`ReportedDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificLocation() {

    const { root, section } = this.fieldRootInSection(`SpecificLocation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InvestigationPlan() {

    const { root, section } = this.fieldRootInSection(`Plan_f`, `Investigation Plan`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _InvestigationStartDateTime() {

    const { root, section } = this.fieldRootInSection(`InvestigationStartDateTime_f`, `Investigation Plan`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get AnalysisConducted() {

    const { root, section } = this.fieldRootInSection(`AnalysisConducted_f`, `Investigation Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DescriptionofRequired3rdPartyReporting() {

    const { root, section } = this.fieldRootInSection(`ThirdPartyDescription_f`, `Investigation Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoCAPA() {

    const { root, section } = this.fieldRootInSection(`EscalatetoCAPA_f`, `Investigation Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoNCR() {

    const { root, section } = this.fieldRootInSection(`EscalatetoNCR_f`, `Investigation Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoSCAR() {

    const { root, section } = this.fieldRootInSection(`EscalatetoSCAR_f`, `Investigation Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InvestigationandStepsTaken() {

    const { root, section } = this.fieldRootInSection(`Results_f`, `Investigation Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InvestigationChecklist() {

    const { root, section } = this.fieldRootInSection(`InvestigationChecklist_f`, `Investigation Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get InvestigationChecklistandTasksMustBeCompletedPriortoClosureApproval() {

    const { root, section } = this.fieldRootInSection(`ChecklistComplete_f`, `Investigation Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Label() {

    const { root, section } = this.fieldRootInSection(`Label_f`, `Investigation Results`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get RelevantDataCollected() {

    const { root, section } = this.fieldRootInSection(`RelevantData_f`, `Investigation Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Requires3rdPartyReporting() {

    const { root, section } = this.fieldRootInSection(`ThirdParty_f`, `Investigation Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SummaryofFindings() {

    const { root, section } = this.fieldRootInSection(`SummaryofFindings_f`, `Investigation Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`SupplierItemITARMismatchWar_f`, `Investigation Results`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _AwayFromWorkdays() {

    const { root, section } = this.fieldRootInSection(`AwayFromWork_f`, `OSHA 300/301`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _CaseNo() {

    const { root, section } = this.fieldRootInSection(`CaseNo_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CheckIfEventTimeCannotBeDetermined() {

    const { root, section } = this.fieldRootInSection(`CannotDetermineEventTime_f`, `OSHA 300/301`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get City() {

    const { root, section } = this.fieldRootInSection(`City_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateHired() {

    const { root, section } = this.fieldRootInSection(`DateHired_f`, `OSHA 300/301`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DateofBirth() {

    const { root, section } = this.fieldRootInSection(`DateofBirth_f`, `OSHA 300/301`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DateofInjuryOnsetofIllness() {

    const { root, section } = this.fieldRootInSection(`InjuryDate_f`, `OSHA 300/301`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DescribetheInjuryorIllness() {

    const { root, section } = this.fieldRootInSection(`InjuryDescription_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeInformation() {

    const { root, section } = this.fieldRootInSection(`EmployeeInformation_f`, `OSHA 300/301`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get FacilityCity() {

    const { root, section } = this.fieldRootInSection(`FacilityCity_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FacilityState() {

    const { root, section } = this.fieldRootInSection(`FacilityState_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FacilityStreet() {

    const { root, section } = this.fieldRootInSection(`FacilityStreet_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FacilityZip() {

    const { root, section } = this.fieldRootInSection(`FacilityZip_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HospitalizedOvernightasInPatient() {

    const { root, section } = this.fieldRootInSection(`HospitalizedOvernightasInPa_f`, `OSHA 300/301`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _IfEmployeeDiedWhenDidDeathOccur() {

    const { root, section } = this.fieldRootInSection(`DeathDate_f`, `OSHA 300/301`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get JobTitle() {

    const { root, section } = this.fieldRootInSection(`JobTitle_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _LocationofTreatmentFacilityifoffsite() {

    const { root, section } = this.fieldRootInSection(`LocationofTreatment_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MaleFemale() {

    const { root, section } = this.fieldRootInSection(`MaleFemale_f`, `OSHA 300/301`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _NameofPhysicianHealthCareProfessional() {

    const { root, section } = this.fieldRootInSection(`NameofPhysician_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _OnJobTransferorRestrictionsdays() {

    const { root, section } = this.fieldRootInSection(`OnJobTransfer_f`, `OSHA 300/301`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PhysicianInformation() {

    const { root, section } = this.fieldRootInSection(`PhysicianInformation_f`, `OSHA 300/301`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get State() {

    const { root, section } = this.fieldRootInSection(`State_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Street() {

    const { root, section } = this.fieldRootInSection(`Street_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TimeEmployeeBeganWork() {

    const { root, section } = this.fieldRootInSection(`TimeEmployeeBeganWork_f`, `OSHA 300/301`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _TreatedinanEmergencyRoom() {

    const { root, section } = this.fieldRootInSection(`TreatedinanEmergencyRoom_f`, `OSHA 300/301`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhatHappened() {

    const { root, section } = this.fieldRootInSection(`WhatHappened_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhatObjectorSubstanceDirectlyHarmedtheEmployee() {

    const { root, section } = this.fieldRootInSection(`ObjectThatCausedHarm_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _WhatWastheEmployeeDoingJustBeforetheIncidentOccurred() {

    const { root, section } = this.fieldRootInSection(`ActivityPrior_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get WheretheEventOccurred() {

    const { root, section } = this.fieldRootInSection(`WheretheEventOccurred_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Zip() {

    const { root, section } = this.fieldRootInSection(`Zip_f`, `OSHA 300/301`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ItemITARMismatchWarning_f`, `Related Info`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _SerialBatchLot() {

    const { root, section } = this.fieldRootInSection(`Serial_f`, `Related Info`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get IncidentType() {

    const { root, section } = this.fieldRootInSection(`IncidentType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReportedBy() {

    const { root, section } = this.fieldRootInSection(`ReportedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Shift() {

    const { root, section } = this.fieldRootInSection(`Shift_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LeadInvestigator() {

    const { root, section } = this.fieldRootInSection(`LeadInvestigator_f`, `Investigation Plan`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SituationType() {

    const { root, section } = this.fieldRootInSection(`SituationType_f`, `Investigation Plan`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `Investigation Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierItem() {

    const { root, section } = this.fieldRootInSection(`SupplierItem_f`, `Investigation Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _EmployeesName() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `OSHA 300/301`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyAudit() {

    const { root, section } = this.fieldRootInSection(`Audit_f`, `Related Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyAuditResult() {

    const { root, section } = this.fieldRootInSection(`AuditResult_f`, `Related Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyComplaint() {

    const { root, section } = this.fieldRootInSection(`Complaint_f`, `Related Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyDeviation() {

    const { root, section } = this.fieldRootInSection(`Deviation_f`, `Related Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyGaugeCalibration() {

    const { root, section } = this.fieldRootInSection(`Calibration_f`, `Related Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyInspectionEvent() {

    const { root, section } = this.fieldRootInSection(`Inspection_f`, `Related Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `Related Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearned() {

    const { root, section } = this.fieldRootInSection(`LessonsLearned_f`, `Closure`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationGroup() {

    const { root, section } = this.fieldRootInSection(`NotificationGroup_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalInvestigators() {

    const { root, section } = this.fieldRootInSection(`AdditionalInvestigators_f`, `Investigation Plan`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PersonsofInterest() {

    const { root, section } = this.fieldRootInSection(`PersonsofInterest_f`, `Investigation Plan`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelevantDocuments() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Investigation Plan`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InvestigationTasks() {

    const { root, section } = this.fieldRootInSection(`InvestigationTasks_f`, `Investigation Results`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `Related Info`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPA() {

    const { root, section } = this.fieldRootInSection(`CAPA_f`, `Investigation Results`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformance() {

    const { root, section } = this.fieldRootInSection(`NCR_f`, `Investigation Results`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get SCAR() {

    const { root, section } = this.fieldRootInSection(`SCAR_f`, `Investigation Results`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
