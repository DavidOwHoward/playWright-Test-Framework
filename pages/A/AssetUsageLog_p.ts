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


export class AssetUsageLog_p extends DetailsPageBase {
  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _UsageDateTime() {

    const { root, section } = this.fieldRootInSection(`UsageDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get UsageValue() {

    const { root, section } = this.fieldRootInSection(`UsageValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Gauge() {

    const { root, section } = this.fieldRootInSection(`Gauge_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingandEquipment() {

    const { root, section } = this.fieldRootInSection(`Equipment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UsageUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UsageUnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
