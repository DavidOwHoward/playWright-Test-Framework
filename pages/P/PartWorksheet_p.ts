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


export class PartWorksheet_p extends DetailsPageBase {
  get PartIncoterms() {

    const { root, section } = this.fieldRootInSection(`PartIncoterms_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LTAWarningLabel() {

    const { root, section } = this.fieldRootInSection(`LTAWarningLabel_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ProfitUnitCost() {

    const { root, section } = this.fieldRootInSection(`ProfitUnitCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PrototypePartCost() {

    const { root, section } = this.fieldRootInSection(`PrototypePartCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _RawMaterialMarkupPercent() {

    const { root, section } = this.fieldRootInSection(`RawMaterialMarkupPercent_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _RawMaterialUsed() {

    const { root, section } = this.fieldRootInSection(`RawMaterialUsed_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _SGAUnitCost() {

    const { root, section } = this.fieldRootInSection(`SGA_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalComponentCost() {

    const { root, section } = this.fieldRootInSection(`TotalComponentCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalMaterialCost() {

    const { root, section } = this.fieldRootInSection(`TotalMaterialCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalPartUnitCost() {

    const { root, section } = this.fieldRootInSection(`TotalPartUnitCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalProcessingCost() {

    const { root, section } = this.fieldRootInSection(`TotalProcessingCost_f`, `General`);

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

  get _ComponentCosts() {

    const { root, section } = this.fieldRootInSection(`ComponentCosts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LTACommitments() {

    const { root, section } = this.fieldRootInSection(`LTACommitments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _MaterialCosts() {

    const { root, section } = this.fieldRootInSection(`MaterialCosts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessingCosts() {

    const { root, section } = this.fieldRootInSection(`ProcessingCosts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RawMaterialScrapbyProcess() {

    const { root, section } = this.fieldRootInSection(`RawMaterialScrapbyProcess_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
