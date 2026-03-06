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


export class QuoteAnalysis_p extends DetailsPageBase {
  get EstimatedFPVVolume() {

    const { root, section } = this.fieldRootInSection(`EstimatedFPVVolume_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuotedComponentCost() {

    const { root, section } = this.fieldRootInSection(`QuotedComponentCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuotedMaterialCost() {

    const { root, section } = this.fieldRootInSection(`QuotedMaterialCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuotedPackagingPrice() {

    const { root, section } = this.fieldRootInSection(`QuotedPackagingPrice_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuotedPartPrice() {

    const { root, section } = this.fieldRootInSection(`QuotedPartPrice_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuotedProcessingCost() {

    const { root, section } = this.fieldRootInSection(`QuotedProcessingCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuotedToolingPrice() {

    const { root, section } = this.fieldRootInSection(`QuotedToolingPrice_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuotedTransportationPrice() {

    const { root, section } = this.fieldRootInSection(`QuotedTransportationPrice_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalLandedPiecePrice() {

    const { root, section } = this.fieldRootInSection(`SupplierTotalLandedPiecePri_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetComponentCost() {

    const { root, section } = this.fieldRootInSection(`UnderOverComponentCost_f`, `Program Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetFreightCost() {

    const { root, section } = this.fieldRootInSection(`UnderOverTargetTransportati_f`, `Program Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetMaterialCost() {

    const { root, section } = this.fieldRootInSection(`UnderOverTargetMaterialCost_f`, `Program Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetPackagingCost() {

    const { root, section } = this.fieldRootInSection(`UnderOverTargetPackagingCos_f`, `Program Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetPieceCost() {

    const { root, section } = this.fieldRootInSection(`UnderOverTargetPieceCost_f`, `Program Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetProcessingCost() {

    const { root, section } = this.fieldRootInSection(`UnderOverTargetProcessingCo_f`, `Program Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetToolingCost() {

    const { root, section } = this.fieldRootInSection(`UnderOverTargetToolingCost_f`, `Program Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierDeliveryRating() {

    const { root, section } = this.fieldRootInSection(`MonthlyOnTimeDeliveryRating_f`, `Supplier Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierQualityRating() {

    const { root, section } = this.fieldRootInSection(`SupplierQualityRating_f`, `Supplier Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SuppliertoProgramExchangeRate() {

    const { root, section } = this.fieldRootInSection(`SuppliertoProgramExchangeRa_f`, `Supplier Data`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQManagementPlan() {

    const { root, section } = this.fieldRootInSection(`RFQManagementPlan_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramCurrency() {

    const { root, section } = this.fieldRootInSection(`ProgramCurrency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQProposal() {

    const { root, section } = this.fieldRootInSection(`RFQProposal_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCurrency() {

    const { root, section } = this.fieldRootInSection(`SupplierCurrency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
