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


export class ExpressionQueue_p extends DetailsPageBase {
  get Message() {

    const { root, section } = this.fieldRootInSection(`Message`, `Auxiliary`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status`, `Auxiliary`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemId() {

    const { root, section } = this.fieldRootInSection(`ItemId`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessSystemName() {

    const { root, section } = this.fieldRootInSection(`ProcessSystemName`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }
}
