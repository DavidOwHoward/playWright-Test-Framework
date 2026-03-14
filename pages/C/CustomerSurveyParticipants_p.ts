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


export class CustomerSurveyParticipants_p extends DetailsPageBase {
  get DateCompleted() {

    const { root, section } = this.fieldRootInSection(`DateCompleted_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SurveyResults() {

    const { root, section } = this.fieldRootInSection(`SurveyResults_f`, `Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get Contact() {

    const { root, section } = this.fieldRootInSection(`Contact_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerSurvey() {

    const { root, section } = this.fieldRootInSection(`CustomerSurvey_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
