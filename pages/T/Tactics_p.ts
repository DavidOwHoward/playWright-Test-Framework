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


export class Tactics_p extends DetailsPageBase {
  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Priority() {

    const { root, section } = this.fieldRootInSection(`Priority_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TacticInitiative() {

    const { root, section } = this.fieldRootInSection(`TacticGoal_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TacticNumber() {

    const { root, section } = this.fieldRootInSection(`TacticNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletionDate() {

    const { root, section } = this.fieldRootInSection(`TargetCompletionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _Complete() {

    const { root, section } = this.fieldRootInSection(`Complete_f`, `Progress`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgressNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressNotes_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Champion() {

    const { root, section } = this.fieldRootInSection(`Champion_f`, `General`);

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

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedDepartments() {

    const { root, section } = this.fieldRootInSection(`RelatedDepartments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupportedObjectives() {

    const { root, section } = this.fieldRootInSection(`SupportedObjectives_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
