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


export class SimpleFishboneAnalysis_p extends DetailsPageBase {
  get Backbone() {

    const { root, section } = this.fieldRootInSection(`Backbone_f`, `Fishbone Analysis`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Environment() {

    const { root, section } = this.fieldRootInSection(`Environment_f`, `Fishbone Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Machines() {

    const { root, section } = this.fieldRootInSection(`Machines_f`, `Fishbone Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Manpower() {

    const { root, section } = this.fieldRootInSection(`Manpower_f`, `Fishbone Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Materials() {

    const { root, section } = this.fieldRootInSection(`Materials_f`, `Fishbone Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Measurement() {

    const { root, section } = this.fieldRootInSection(`Measurement_f`, `Fishbone Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Methods() {

    const { root, section } = this.fieldRootInSection(`Methods_f`, `Fishbone Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }
}
