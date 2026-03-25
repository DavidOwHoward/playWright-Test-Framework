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


export class Objectives_p extends DetailsPageBase {
  get Objective() {

    const { root, section } = this.fieldRootInSection(`Objective_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ObjectiveCode() {

    const { root, section } = this.fieldRootInSection(`ObjectiveCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ObjectiveCategory() {

    const { root, section } = this.fieldRootInSection(`Perspective_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupportedObjectives() {

    const { root, section } = this.fieldRootInSection(`SupportedObjectives_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Measures() {

    const { root, section } = this.fieldRootInSection(`Measures_f`, `Measures`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `Risks`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Tactics() {

    const { root, section } = this.fieldRootInSection(`Tactics_f`, `Tactics`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
