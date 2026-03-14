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


export class MMOGLEAssessments_p extends DetailsPageBase {
  get AssessmentDetail() {

    const { root, section } = this.fieldRootInSection(`AssessmentDetail_f`, `Assessment`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get AssessmentNumber() {

    const { root, section } = this.fieldRootInSection(`AssessmentNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get AssessmentTeam() {

    const { root, section } = this.fieldRootInSection(`AssessmentTeam_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssessmentType() {

    const { root, section } = this.fieldRootInSection(`AssessmentType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Organizer() {

    const { root, section } = this.fieldRootInSection(`Organizer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
