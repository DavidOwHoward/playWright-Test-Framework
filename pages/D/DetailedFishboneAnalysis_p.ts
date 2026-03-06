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


export class DetailedFishboneAnalysis_p extends DetailsPageBase {
  get Effect() {

    const { root, section } = this.fieldRootInSection(`Effect_f`, `Cause and Effect Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LeftSpacer() {

    const { root, section } = this.fieldRootInSection(`LeftSpacer_f`, `Cause and Effect Analysis`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get RightSpacer() {

    const { root, section } = this.fieldRootInSection(`RightSpacer_f`, `Cause and Effect Analysis`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Environment() {

    const { root, section } = this.fieldRootInSection(`Environment_f`, `Cause and Effect Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Machines() {

    const { root, section } = this.fieldRootInSection(`Machines_f`, `Cause and Effect Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Materials() {

    const { root, section } = this.fieldRootInSection(`Materials_f`, `Cause and Effect Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Measurements() {

    const { root, section } = this.fieldRootInSection(`Measurements_f`, `Cause and Effect Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Methods() {

    const { root, section } = this.fieldRootInSection(`Methods_f`, `Cause and Effect Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Personnel() {

    const { root, section } = this.fieldRootInSection(`Personnel_f`, `Cause and Effect Analysis`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
