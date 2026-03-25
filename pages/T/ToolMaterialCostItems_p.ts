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


export class ToolMaterialCostItems_p extends DetailsPageBase {
  get Cavities() {

    const { root, section } = this.fieldRootInSection(`Cavities_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get OtherToolType() {

    const { root, section } = this.fieldRootInSection(`ToolType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Quantity() {

    const { root, section } = this.fieldRootInSection(`Quantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolLife() {

    const { root, section } = this.fieldRootInSection(`ToolLife_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolMaterial() {

    const { root, section } = this.fieldRootInSection(`ToolMaterial_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolTimingweeks() {

    const { root, section } = this.fieldRootInSection(`ToolTimingweeks_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalMaterialCost() {

    const { root, section } = this.fieldRootInSection(`TotalMaterialCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TotalToolLifeparts() {

    const { root, section } = this.fieldRootInSection(`TotalToolLifeparts_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitCost() {

    const { root, section } = this.fieldRootInSection(`UnitCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingWorksheet() {

    const { root, section } = this.fieldRootInSection(`ToolingWorksheet_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolType() {

    const { root, section } = this.fieldRootInSection(`ToolTypeCR_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
