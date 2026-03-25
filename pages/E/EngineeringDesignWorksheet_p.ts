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


export class EngineeringDesignWorksheet_p extends DetailsPageBase {
  get Year1() {

    const { root, section } = this.fieldRootInSection(`Year1_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringServices() {

    const { root, section } = this.fieldRootInSection(`EngineeringServices_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PrototypeTooling() {

    const { root, section } = this.fieldRootInSection(`PrototypeTooling_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Samples() {

    const { root, section } = this.fieldRootInSection(`Samples_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TestingandValidation() {

    const { root, section } = this.fieldRootInSection(`TestingandValidation_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
