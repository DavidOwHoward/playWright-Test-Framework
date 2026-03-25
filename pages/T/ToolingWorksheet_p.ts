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


export class ToolingWorksheet_p extends DetailsPageBase {
  get ToolingIncoterms() {

    const { root, section } = this.fieldRootInSection(`ToolingIncoterms_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FamilyTool() {

    const { root, section } = this.fieldRootInSection(`FamilyTool_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolDescription() {

    const { root, section } = this.fieldRootInSection(`ToolDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingRequired() {

    const { root, section } = this.fieldRootInSection(`ToolingRequired_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalToolCost() {

    const { root, section } = this.fieldRootInSection(`TotalToolCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalToolLaborCost() {

    const { root, section } = this.fieldRootInSection(`TotalToolLaborCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalToolMaterialCost() {

    const { root, section } = this.fieldRootInSection(`TotalToolMaterialCost_f`, `General`);

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

  get ToolLabor() {

    const { root, section } = this.fieldRootInSection(`ToolLabor_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolMaterials() {

    const { root, section } = this.fieldRootInSection(`ToolMaterials_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
