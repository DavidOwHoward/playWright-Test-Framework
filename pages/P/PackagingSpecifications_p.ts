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


export class PackagingSpecifications_p extends DetailsPageBase {
  get _ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Change Management`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ChangeRequestApproval() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestapproval_f`, `Change Management`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Changerequestinitiateddate() {

    const { root, section } = this.fieldRootInSection(`Changerequestinitiateddate_f`, `Change Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequested() {

    const { root, section } = this.fieldRootInSection(`ChangeRequested_f`, `Change Management`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CRapprovalduedate() {

    const { root, section } = this.fieldRootInSection(`CRapprovalduedate_f`, `Change Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CRstartdate() {

    const { root, section } = this.fieldRootInSection(`CRstartdate_f`, `Change Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Numberofdaysforapproval() {

    const { root, section } = this.fieldRootInSection(`Numberofdaysforapproval_f`, `Change Management`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofdaysforVersionapproval() {

    const { root, section } = this.fieldRootInSection(`NumberofdaysforVersionappro_f`, `Change Management`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProposedChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ProposedChangeDescription_f`, `Change Management`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforChange() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `Change Management`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforProposedChange() {

    const { root, section } = this.fieldRootInSection(`ReasonforProposedChange_f`, `Change Management`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get VersionApproval() {

    const { root, section } = this.fieldRootInSection(`VersionApproval_f`, `Change Management`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Versionapprovaldate() {

    const { root, section } = this.fieldRootInSection(`Versionapprovaldate_f`, `Change Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Versionapprovalduedate() {

    const { root, section } = this.fieldRootInSection(`Versionapprovalduedate_f`, `Change Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Versionapprovalstartdate() {

    const { root, section } = this.fieldRootInSection(`Versionapprovalstartdate_f`, `Change Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get AnnualVolumeofparts() {

    const { root, section } = this.fieldRootInSection(`AnnualVolumeofparts_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CostperPart() {

    const { root, section } = this.fieldRootInSection(`CostperPart_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Dangerousgoods() {

    const { root, section } = this.fieldRootInSection(`Dangerousgoods_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PartDimension() {

    const { root, section } = this.fieldRootInSection(`PartDimension_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartMaterial() {

    const { root, section } = this.fieldRootInSection(`PartMaterial_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartWeight() {

    const { root, section } = this.fieldRootInSection(`PartWeight_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityPerProduct() {

    const { root, section } = this.fieldRootInSection(`QuantityPerProduct_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCode() {

    const { root, section } = this.fieldRootInSection(`SupplierCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPicture1() {

    const { root, section } = this.fieldRootInSection(`PartPicture1_f`, `Pictures/Drawings`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPicture1Description() {

    const { root, section } = this.fieldRootInSection(`PartPicture1Description_f`, `Pictures/Drawings`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPicture2() {

    const { root, section } = this.fieldRootInSection(`PartPicture2_f`, `Pictures/Drawings`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPicture2Description() {

    const { root, section } = this.fieldRootInSection(`PartPicture2Description_f`, `Pictures/Drawings`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ContainerDescription() {

    const { root, section } = this.fieldRootInSection(`ContainerDescription_f`, `Primary Packaging Data`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DunnageDescription() {

    const { root, section } = this.fieldRootInSection(`DunnageDescription_f`, `Primary Packaging Data`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ExteriorDimensions() {

    const { root, section } = this.fieldRootInSection(`ExteriorDimensions_f`, `Primary Packaging Data`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Picture1Description() {

    const { root, section } = this.fieldRootInSection(`Picture1Description_f`, `Primary Packaging Data`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Picture2Description() {

    const { root, section } = this.fieldRootInSection(`Picture2Description_f`, `Primary Packaging Data`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryPackagingHeight() {

    const { root, section } = this.fieldRootInSection(`PrimaryPackagingHeight_f`, `Primary Packaging Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryPackagingLength() {

    const { root, section } = this.fieldRootInSection(`PrimaryPackagingLength_f`, `Primary Packaging Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryPackagingPicture1() {

    const { root, section } = this.fieldRootInSection(`PrimaryPackagingPicture1_f`, `Primary Packaging Data`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryPackagingPicture2() {

    const { root, section } = this.fieldRootInSection(`PrimaryPackagingPicture2_f`, `Primary Packaging Data`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryPackagingWidth() {

    const { root, section } = this.fieldRootInSection(`PrimaryPackagingWidth_f`, `Primary Packaging Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityPerContainer() {

    const { root, section } = this.fieldRootInSection(`QuantityPerContainer_f`, `Primary Packaging Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TareWeight() {

    const { root, section } = this.fieldRootInSection(`TareWeight_f`, `Primary Packaging Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TotalWeightWParts() {

    const { root, section } = this.fieldRootInSection(`TotalWeightWParts_f`, `Primary Packaging Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ConveyanceType() {

    const { root, section } = this.fieldRootInSection(`ConveyanceType_f`, `Shipping Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CostperConveyance() {

    const { root, section } = this.fieldRootInSection(`CostperConveyance_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PartsperConveyance() {

    const { root, section } = this.fieldRootInSection(`PartsperConveyance_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PartsperUnitLoad() {

    const { root, section } = this.fieldRootInSection(`PartsperUnitLoad_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadHeight() {

    const { root, section } = this.fieldRootInSection(`UnitLoadHeight_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadLength() {

    const { root, section } = this.fieldRootInSection(`UnitLoadLength_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadWeight() {

    const { root, section } = this.fieldRootInSection(`UnitLoadWeight_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadWidth() {

    const { root, section } = this.fieldRootInSection(`UnitLoadWidth_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadsPerConveyance() {

    const { root, section } = this.fieldRootInSection(`UnitLoadsPerConveyance_f`, `Shipping Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PartNumberandDescription() {

    const { root, section } = this.fieldRootInSection(`PartNumberandDescription_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierOwner() {

    const { root, section } = this.fieldRootInSection(`SupplierOwner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequesttype() {

    const { root, section } = this.fieldRootInSection(`ChangeRequesttype_f`, `Change Management`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequestedBy() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestedby_f`, `Change Management`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get BuildType() {

    const { root, section } = this.fieldRootInSection(`BuildType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Buyer() {

    const { root, section } = this.fieldRootInSection(`Buyer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DimUOM() {

    const { root, section } = this.fieldRootInSection(`DimUOM_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PartClassification() {

    const { root, section } = this.fieldRootInSection(`PartClassification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemofMeasure() {

    const { root, section } = this.fieldRootInSection(`SystemofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WeightUOM() {

    const { root, section } = this.fieldRootInSection(`WeightUOM_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingType() {

    const { root, section } = this.fieldRootInSection(`PackagingType_f`, `Primary Packaging Data`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PrimaryPackagingDimensionalUOM() {

    const { root, section } = this.fieldRootInSection(`PrimaryPackagingDimensional_f`, `Primary Packaging Data`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TareWeightUOM() {

    const { root, section } = this.fieldRootInSection(`TareWeightUOM_f`, `Primary Packaging Data`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalWeightUOM() {

    const { root, section } = this.fieldRootInSection(`TotalWeightUOM_f`, `Primary Packaging Data`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationMode() {

    const { root, section } = this.fieldRootInSection(`TransportationMode_f`, `Shipping Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadDimensionalUOM() {

    const { root, section } = this.fieldRootInSection(`UnitLoadDimensionalUOM_f`, `Shipping Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitLoadWeightUOM() {

    const { root, section } = this.fieldRootInSection(`UnitLoadWeightUOM_f`, `Shipping Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApproversOnly() {

    const { root, section } = this.fieldRootInSection(`ApproversOnly_f`, `Change Management`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalPackagingSpecification() {

    const { root, section } = this.fieldRootInSection(`AdditionalPackagingSpecific_f`, `Secondary Packaging Data`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
