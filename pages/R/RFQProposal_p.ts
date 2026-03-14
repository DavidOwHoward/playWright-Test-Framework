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


export class RFQProposal_p extends DetailsPageBase {
  get RFQProposalNumber() {

    const { root, section } = this.fieldRootInSection(`RFQProposalNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get EstimatedAnnualSpend() {

    const { root, section } = this.fieldRootInSection(`EstimatedAnnualSpend_f`, `Analysis and Recommendation`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedUnitPrice() {

    const { root, section } = this.fieldRootInSection(`LandedUnitPrice_f`, `Analysis and Recommendation`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _Suppliertimingsupportsprogramrequirements() {

    const { root, section } = this.fieldRootInSection(`Suppliertimingsupportsprogr_f`, `Analysis and Recommendation`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingCost() {

    const { root, section } = this.fieldRootInSection(`ToolingCost_f`, `Analysis and Recommendation`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovedDate() {

    const { root, section } = this.fieldRootInSection(`ApprovedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Background() {

    const { root, section } = this.fieldRootInSection(`Background_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmittedDate() {

    const { root, section } = this.fieldRootInSection(`SubmittedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Summary() {

    const { root, section } = this.fieldRootInSection(`Summary_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Buyer() {

    const { root, section } = this.fieldRootInSection(`Buyer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQManagementPlan() {

    const { root, section } = this.fieldRootInSection(`RFQManagementPlan_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RecommendedSupplier() {

    const { root, section } = this.fieldRootInSection(`RecommendedSupplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierBestDeliveryRating() {

    const { root, section } = this.fieldRootInSection(`SupplierBestDeliveryRating_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierBestQualityRating() {

    const { root, section } = this.fieldRootInSection(`SupplierBestQualityRating_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierLeastleadtime() {

    const { root, section } = this.fieldRootInSection(`SupplierLeastleadtime_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierLowestPartPrice() {

    const { root, section } = this.fieldRootInSection(`SupplierLowestPartPrice_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FinalRFQs() {

    const { root, section } = this.fieldRootInSection(`FinalRFQs_f`, `Analysis and Recommendation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuoteAnalysis() {

    const { root, section } = this.fieldRootInSection(`QuoteAnalysis_f`, `Analysis and Recommendation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
