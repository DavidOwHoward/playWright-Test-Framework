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


export class AdverseEventsSuspectItems_p extends DetailsPageBase {
  get ProductorDevice() {

    const { root, section } = this.fieldRootInSection(`ProductorDevice_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get BrandName() {

    const { root, section } = this.fieldRootInSection(`BrandName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CatalogNumber() {

    const { root, section } = this.fieldRootInSection(`CatalogNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CommonName() {

    const { root, section } = this.fieldRootInSection(`CommonName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ConcomitantMedicalProductsandTherapyDates() {

    const { root, section } = this.fieldRootInSection(`AssociatedMedicalProductsan_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CreateNonConformance() {

    const { root, section } = this.fieldRootInSection(`CreateNonConformance_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceAvailableforEvaluation() {

    const { root, section } = this.fieldRootInSection(`DeviceAvailableforEvaluatio_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DiagnosisForUse() {

    const { root, section } = this.fieldRootInSection(`DiagnosisForUse_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Dose() {

    const { root, section } = this.fieldRootInSection(`DoseFrequencyRouteUsed_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _EventAbatedAfterDoseChanges() {

    const { root, section } = this.fieldRootInSection(`EventAbatedAfterDoseChanges_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EventReappearedAfterReintroduction() {

    const { root, section } = this.fieldRootInSection(`EventReappearedAfterReintro_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ExpirationDate() {

    const { root, section } = this.fieldRootInSection(`ExpirationDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ExplantedDate() {

    const { root, section } = this.fieldRootInSection(`ExplantedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Frequency() {

    const { root, section } = this.fieldRootInSection(`ProductFrequency_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ImplantedDate() {

    const { root, section } = this.fieldRootInSection(`ImplantedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LotNumber() {

    const { root, section } = this.fieldRootInSection(`LotNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ModelNumber() {

    const { root, section } = this.fieldRootInSection(`ModelNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NameandStrength() {

    const { root, section } = this.fieldRootInSection(`ProductNameStrength_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NationalDrugCodeNDC() {

    const { root, section } = this.fieldRootInSection(`NationalDrugCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonconformanceCategory() {

    const { root, section } = this.fieldRootInSection(`NonCategory_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get OperatorofDevice() {

    const { root, section } = this.fieldRootInSection(`OperatorofDevice_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get OtherOperator() {

    const { root, section } = this.fieldRootInSection(`OtherOperator_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Procode() {

    const { root, section } = this.fieldRootInSection(`Procode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReturnedDate() {

    const { root, section } = this.fieldRootInSection(`ReturnedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReusedSingleUseDevice() {

    const { root, section } = this.fieldRootInSection(`ReusedSingleUseDevice_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RouteUsed() {

    const { root, section } = this.fieldRootInSection(`ProductRouteUsed_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SerialNumber() {

    const { root, section } = this.fieldRootInSection(`SerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ServicedbyaThirdParty() {

    const { root, section } = this.fieldRootInSection(`ServicedbyaThirdParty_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _TreatmentTherapyStartDate() {

    const { root, section } = this.fieldRootInSection(`TherapyDates_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TreatmentTherapyStopDate() {

    const { root, section } = this.fieldRootInSection(`TherapyStopDate_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UniqueIdentifier() {

    const { root, section } = this.fieldRootInSection(`UniqueIdentifier_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufCompounderLabel() {

    const { root, section } = this.fieldRootInSection(`Mfr_Compounder_Lbl_f`, `Manuf./Compounder`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturerCompounderName() {

    const { root, section } = this.fieldRootInSection(`ManufacturerCompounderName_f`, `Manuf./Compounder`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfrAddress1() {

    const { root, section } = this.fieldRootInSection(`MfrAddress1_f`, `Manuf./Compounder`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfrAddress2() {

    const { root, section } = this.fieldRootInSection(`MfrAddress2_f`, `Manuf./Compounder`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfrCity() {

    const { root, section } = this.fieldRootInSection(`MfrCity_f`, `Manuf./Compounder`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfrCountry() {

    const { root, section } = this.fieldRootInSection(`MfrCountry_f`, `Manuf./Compounder`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfrPostalCode() {

    const { root, section } = this.fieldRootInSection(`MfrPostalCode_f`, `Manuf./Compounder`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfrStateProvinceRegion() {

    const { root, section } = this.fieldRootInSection(`MfrStateProvinceRegion_f`, `Manuf./Compounder`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReprocessorAddress1() {

    const { root, section } = this.fieldRootInSection(`ReprocessorAddress1_f`, `Reprocessor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReprocessorAddress2() {

    const { root, section } = this.fieldRootInSection(`ReprocessorAddress2_f`, `Reprocessor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReprocessorCity() {

    const { root, section } = this.fieldRootInSection(`ReprocessorCity_f`, `Reprocessor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReprocessorCountry() {

    const { root, section } = this.fieldRootInSection(`ReprocessorCountry_f`, `Reprocessor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReprocessorName() {

    const { root, section } = this.fieldRootInSection(`ReprocessorName_f`, `Reprocessor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReprocessorPostalCode() {

    const { root, section } = this.fieldRootInSection(`ReprocessorPostalCode_f`, `Reprocessor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReprocessorStateProvinceRegion() {

    const { root, section } = this.fieldRootInSection(`ReprocessorState_f`, `Reprocessor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEvent() {

    const { root, section } = this.fieldRootInSection(`Complaint_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdverseEventAssignedSpecialist() {

    const { root, section } = this.fieldRootInSection(`ComplaintAssignedSpecialist_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get __NonconformanceCategory() {

    const { root, section } = this.fieldRootInSection(`NonconformanceCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Contact() {

    const { root, section } = this.fieldRootInSection(`Contact_f`, `Manuf./Compounder`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturerCompounder() {

    const { root, section } = this.fieldRootInSection(`ManufacturerCompunder_f`, `Manuf./Compounder`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Reprocessor() {

    const { root, section } = this.fieldRootInSection(`Reprocessor_f`, `Reprocessor`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReprocessorContact() {

    const { root, section } = this.fieldRootInSection(`ReprocessorContact_f`, `Reprocessor`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductType() {

    const { root, section } = this.fieldRootInSection(`ProductType_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedNonConformance() {

    const { root, section } = this.fieldRootInSection(`RelatedNonConformance_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
