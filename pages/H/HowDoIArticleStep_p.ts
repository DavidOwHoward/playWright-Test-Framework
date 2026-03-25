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


export class HowDoIArticleStep_p extends DetailsPageBase {
  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StepDescription() {

    const { root, section } = this.fieldRootInSection(`StepDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StepPicture() {

    const { root, section } = this.fieldRootInSection(`StepPicture_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get StepTitle() {

    const { root, section } = this.fieldRootInSection(`StepTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Article() {

    const { root, section } = this.fieldRootInSection(`Article_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
