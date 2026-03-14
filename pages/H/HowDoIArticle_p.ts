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


export class HowDoIArticle_p extends DetailsPageBase {
  get ArticleType() {

    const { root, section } = this.fieldRootInSection(`ArticleType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessName() {

    const { root, section } = this.fieldRootInSection(`ProcessName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GeneralPicture() {

    const { root, section } = this.fieldRootInSection(`GeneralPicture_f`, `General Picture`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get _ArticleSteps() {

    const { root, section } = this.fieldRootInSection(`ArticleSteps_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
