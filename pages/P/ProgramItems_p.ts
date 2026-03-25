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


export class ProgramItems_p extends DetailsPageBase {
  get CreatedDate() {

    const { root, section } = this.fieldRootInSection(`CreatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemDescription() {

    const { root, section } = this.fieldRootInSection(`ItemDescription_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SourcingCommitteeApprovalDate() {

    const { root, section } = this.fieldRootInSection(`SourcingCommitteeApprovalDa_f`, `Approval Section`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _Cancelled() {

    const { root, section } = this.fieldRootInSection(`Cancelled_f`, `Item Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalVolume() {

    const { root, section } = this.fieldRootInSection(`TotalVolume_f`, `Item Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedComponentCost() {

    const { root, section } = this.fieldRootInSection(`LandedComponentCost_f`, `Landed Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedMaterialCost() {

    const { root, section } = this.fieldRootInSection(`LandedMaterialCost_f`, `Landed Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedPackagingCost() {

    const { root, section } = this.fieldRootInSection(`LandedPackagingCost_f`, `Landed Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedPieceCost() {

    const { root, section } = this.fieldRootInSection(`LandedPieceCost_f`, `Landed Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedProcessingCost() {

    const { root, section } = this.fieldRootInSection(`LandedProcessingCost_f`, `Landed Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedToolingCost() {

    const { root, section } = this.fieldRootInSection(`LandedToolingCost_f`, `Landed Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LandedTransportationCost() {

    const { root, section } = this.fieldRootInSection(`LandedTransportationCost_f`, `Landed Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetComponentCost() {

    const { root, section } = this.fieldRootInSection(`TargetComponentCost_f`, `Target Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetMaterialCost() {

    const { root, section } = this.fieldRootInSection(`TargetMaterialCost_f`, `Target Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetPackagingCost() {

    const { root, section } = this.fieldRootInSection(`TargetPackagingCost_f`, `Target Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetPieceCost() {

    const { root, section } = this.fieldRootInSection(`TargetPieceCost_f`, `Target Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetProcessingCost() {

    const { root, section } = this.fieldRootInSection(`TargetProcessingCost_f`, `Target Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetToolingCost() {

    const { root, section } = this.fieldRootInSection(`TargetToolingCost_f`, `Target Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetTransportationCost() {

    const { root, section } = this.fieldRootInSection(`TargetTransportationCost_f`, `Target Price Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemNumber() {

    const { root, section } = this.fieldRootInSection(`ItemNumber_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `Approval Section`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroup() {

    const { root, section } = this.fieldRootInSection(`ItemGroup_f`, `Item Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `Item Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LogisticsApproval() {

    const { root, section } = this.fieldRootInSection(`LogisticsApproval_f`, `Approval Section`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingApproval() {

    const { root, section } = this.fieldRootInSection(`ToolingApproval_f`, `Approval Section`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItemTrims() {

    const { root, section } = this.fieldRootInSection(`ProgramItemTrims_f`, `Item Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramQuoteManagementPlans() {

    const { root, section } = this.fieldRootInSection(`ProgramQuoteManagementPlans_f`, `Item Information`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Programs() {

    const { root, section } = this.fieldRootInSection(`Programs_f`, `Item Information`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
