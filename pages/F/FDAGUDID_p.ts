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


export class FDAGUDID_p extends DetailsPageBase {
  get _DeviceSubjecttoDirectMarkingDMbutExempt() {

    const { root, section } = this.fieldRootInSection(`DeviceSubjecttoDirectMarkin_f`, `Alternative and Additional Identifiers - Direct Marketing`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DMDIDifferentfromPrimaryDI() {

    const { root, section } = this.fieldRootInSection(`DMDIDifferentfromPrimaryDI_f`, `Alternative and Additional Identifiers - Direct Marketing`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DMDINumber() {

    const { root, section } = this.fieldRootInSection(`DMDINumber_f`, `Alternative and Additional Identifiers - Direct Marketing`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CommercialDistributionEndDate() {

    const { root, section } = this.fieldRootInSection(`CommercialDistributionEndDa_f`, `Commercial Distribution`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CommercialDistributionStatus() {

    const { root, section } = this.fieldRootInSection(`CommercialDistributionStatu_f`, `Commercial Distribution`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DIRecordPublishDate() {

    const { root, section } = this.fieldRootInSection(`DIRecordPublishDate_f`, `Commercial Distribution`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _DevicelabeledasNotmadewithnaturalrubberlatex() {

    const { root, section } = this.fieldRootInSection(`DevicelabeledasNotmadewithn_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DevicePackagedasSterile() {

    const { root, section } = this.fieldRootInSection(`DevicePackagedasSterile_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _Devicerequiredtobelabeledascontainingnaturalrubberlatexordrynaturalrubber21CFR8014() {

    const { root, section } = this.fieldRootInSection(`Devicerequiredtobelabeledas_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ExpirationDate() {

    const { root, section } = this.fieldRootInSection(`ExpirationDate_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ForSingleUse() {

    const { root, section } = this.fieldRootInSection(`ForSingleUse_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _IsthedevicelabeledforMRISafety() {

    const { root, section } = this.fieldRootInSection(`IsthedevicelabeledforMRISaf_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get labelLatexInfo() {

    const { root, section } = this.fieldRootInSection(`labelLatexInfo_f`, `Device Characteristics`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get labelMRIStatus() {

    const { root, section } = this.fieldRootInSection(`labelMRIStatus_f`, `Device Characteristics`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get labelPrescriptStatus() {

    const { root, section } = this.fieldRootInSection(`labelPrescriptStatus_f`, `Device Characteristics`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get labelProdID() {

    const { root, section } = this.fieldRootInSection(`labelProdID_f`, `Device Characteristics`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get labelSterilization() {

    const { root, section } = this.fieldRootInSection(`labelSterilization_f`, `Device Characteristics`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LotorBatchNumber() {

    const { root, section } = this.fieldRootInSection(`LotorBatchNumber_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDate() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDate_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _OvertheCounterOTC() {

    const { root, section } = this.fieldRootInSection(`OvertheCounterOTC_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _PrescriptionUseRx() {

    const { root, section } = this.fieldRootInSection(`PrescriptionUseRx_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresSterilizationPriortoUse() {

    const { root, section } = this.fieldRootInSection(`RequiresSterilizationPriort_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SerialNumber() {

    const { root, section } = this.fieldRootInSection(`SerialNumber_f`, `Device Characteristics`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get BrandName() {

    const { root, section } = this.fieldRootInSection(`BrandName_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CatalogNumber() {

    const { root, section } = this.fieldRootInSection(`CatalogNumber_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompanyName() {

    const { root, section } = this.fieldRootInSection(`CompanyName_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompanyPhysicalAddress() {

    const { root, section } = this.fieldRootInSection(`CompanyPhysicalAddress_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceCount() {

    const { root, section } = this.fieldRootInSection(`DeviceCount_f`, `Device Identifier Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceDescription() {

    const { root, section } = this.fieldRootInSection(`DeviceDescription_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LabelerDUNSNumber() {

    const { root, section } = this.fieldRootInSection(`LabelerDUNSNumber_f`, `Device Identifier Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryDINumber() {

    const { root, section } = this.fieldRootInSection(`PrimaryDINumber_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofUseDINumber() {

    const { root, section } = this.fieldRootInSection(`UnitofUseDINumber_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VersionorModelNumber() {

    const { root, section } = this.fieldRootInSection(`VersionorModelNumber_f`, `Device Identifier Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CombinationProduct() {

    const { root, section } = this.fieldRootInSection(`CombinationProduct_f`, `Device Status`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceExemptfromPremarketSubmission() {

    const { root, section } = this.fieldRootInSection(`DeviceExemptfromPremarketSu_f`, `Device Status`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _HumanCellTissueorCellularorTissueBasedProductHCTP() {

    const { root, section } = this.fieldRootInSection(`HumanCellTissueorCellularor_f`, `Device Status`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Kit() {

    const { root, section } = this.fieldRootInSection(`Kit_f`, `Device Status`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get MRISafetyStatus() {

    const { root, section } = this.fieldRootInSection(`MRISafetyStatus_f`, `Device Characteristics`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get IssuingAgency() {

    const { root, section } = this.fieldRootInSection(`IssuingAgency_f`, `Device Identifier Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PackageDINumbers() {

    const { root, section } = this.fieldRootInSection(`PackageDINumbers_f`, `Alternative and Additional Identifiers - Package DI`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SecondaryDINumbers() {

    const { root, section } = this.fieldRootInSection(`SecondaryDINumbers_f`, `Alternative and Additional Identifiers - Secondary DI`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CustomerContactNumbers() {

    const { root, section } = this.fieldRootInSection(`CustomerContactNumbers_f`, `Customer Contact`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ClinicallyRelevantSizes() {

    const { root, section } = this.fieldRootInSection(`ClinicallyRelevantSizes_f`, `Device Characteristics`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SterilizationMethods() {

    const { root, section } = this.fieldRootInSection(`SterilizationMethods_f`, `Device Characteristics`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get StorageandHandling() {

    const { root, section } = this.fieldRootInSection(`StorageandHandling_f`, `Device Characteristics`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FDAListings() {

    const { root, section } = this.fieldRootInSection(`FDAListings_f`, `Device Status`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FDAPremarketSubmissionNumbers() {

    const { root, section } = this.fieldRootInSection(`FDAPremarketSubmissionNumbe_f`, `Device Status`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FDAProductCodes() {

    const { root, section } = this.fieldRootInSection(`FDAProductCodes_f`, `Device Status`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _GMDNs() {

    const { root, section } = this.fieldRootInSection(`GMDNs_f`, `Device Status`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
