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


export class Items_p extends DetailsPageBase {
  get ItemDescription() {

    const { root, section } = this.fieldRootInSection(`ItemDescription_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemNumber() {

    const { root, section } = this.fieldRootInSection(`ItemNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _AddNewMfgDocument() {

    const { root, section } = this.fieldRootInSection(`AddNewMfgDocument_f`, `Drawings & Documents`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARWarningforDocuments() {

    const { root, section } = this.fieldRootInSection(`ITARWarningforDocuments_f`, `Drawings & Documents`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARWarningforDrawings() {

    const { root, section } = this.fieldRootInSection(`ITARWarningforDrawings_f`, `Drawings & Documents`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARWarningforMfgDocuments() {

    const { root, section } = this.fieldRootInSection(`ITARWarningforMfgDocuments_f`, `Drawings & Documents`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocuments1_f`, `Drawings & Documents`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARDrawingsDocumentsWarning() {

    const { root, section } = this.fieldRootInSection(`ITARDrawingsDocumentsWarnin_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITAREnabledWarning() {

    const { root, section } = this.fieldRootInSection(`ITAREnabledWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemDescription2() {

    const { root, section } = this.fieldRootInSection(`ItemDescription2_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroupITARWarning() {

    const { root, section } = this.fieldRootInSection(`ItemGroupITARWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ItemPictures() {

    const { root, section } = this.fieldRootInSection(`ItemPicture_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OutofServiceDate() {

    const { root, section } = this.fieldRootInSection(`OutofServiceDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Price() {

    const { root, section } = this.fieldRootInSection(`Price_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductSafetyRelated() {

    const { root, section } = this.fieldRootInSection(`ProductSafetyRelated_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Revision() {

    const { root, section } = this.fieldRootInSection(`Revision_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SparePart() {

    const { root, section } = this.fieldRootInSection(`SparePart_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionRequired() {

    const { root, section } = this.fieldRootInSection(`InspectionRequired_f`, `Inventory`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARImpactedCAPAs() {

    const { root, section } = this.fieldRootInSection(`ITARImpactedCAPAs_f`, `ITAR Impacts`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARImpactedInspectionEvents() {

    const { root, section } = this.fieldRootInSection(`ITARImpactedInspectionEvent_f`, `ITAR Impacts`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARImpactedInspectionPlans() {

    const { root, section } = this.fieldRootInSection(`ITARImpactedInspectionPlans_f`, `ITAR Impacts`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARImpactedInvestigations() {

    const { root, section } = this.fieldRootInSection(`ITARImpactedInvestigations_f`, `ITAR Impacts`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARImpactedMfgDocuments() {

    const { root, section } = this.fieldRootInSection(`ITARImpactedMfgDocuments_f`, `ITAR Impacts`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARImpactedNonconformances() {

    const { root, section } = this.fieldRootInSection(`ITARImpactedNonconformances_f`, `ITAR Impacts`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARImpactedSCARs() {

    const { root, section } = this.fieldRootInSection(`ITARImpactedSCARs_f`, `ITAR Impacts`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get BrandName() {

    const { root, section } = this.fieldRootInSection(`BrandName_f`, `Marketing`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CatalogNumber() {

    const { root, section } = this.fieldRootInSection(`CatalogNumber_f`, `Marketing`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CommonName() {

    const { root, section } = this.fieldRootInSection(`CommonName_f`, `Marketing`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ModelNumber() {

    const { root, section } = this.fieldRootInSection(`ModelNumber_f`, `Marketing`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductCode() {

    const { root, section } = this.fieldRootInSection(`ProductCode_f`, `Marketing`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UniqueNumber() {

    const { root, section } = this.fieldRootInSection(`UniqueNumber_f`, `Marketing`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemType() {

    const { root, section } = this.fieldRootInSection(`ItemType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

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

  get ItemGroup() {

    const { root, section } = this.fieldRootInSection(`ItemGroup_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductLine() {

    const { root, section } = this.fieldRootInSection(`ProductLine_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARResponsibility() {

    const { root, section } = this.fieldRootInSection(`ITARResponsibility_f`, `ITAR Impacts`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CustomerItems() {

    const { root, section } = this.fieldRootInSection(`CustomerItems_f`, `Customer and Supplier Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierItems() {

    const { root, section } = this.fieldRootInSection(`SupplierItems_f`, `Customer and Supplier Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Drawings & Documents`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Drawings() {

    const { root, section } = this.fieldRootInSection(`Drawings_f`, `Drawings & Documents`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InventoryLocations() {

    const { root, section } = this.fieldRootInSection(`InventoryLocations_f`, `Inventory`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Programs() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `Customer and Supplier Items`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
