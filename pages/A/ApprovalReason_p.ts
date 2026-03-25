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


export class ApprovalReason_p extends DetailsPageBase {
  get Description() {

    const { root, section } = this.fieldRootInSection(`Description`, `Approval Reason Info`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Reason() {

    const { root, section } = this.fieldRootInSection(`ReasonCode`, `Approval Reason Info`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonType() {

    const { root, section } = this.fieldRootInSection(`ReasonType`, `Approval Reason Info`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`BusinessUnit`, `Approval Reason Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Person() {

    const { root, section } = this.fieldRootInSection(`PersonId`, `Approval Reason Info`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
