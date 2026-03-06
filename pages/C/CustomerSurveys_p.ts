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


export class CustomerSurveys_p extends DetailsPageBase {
  get EndDate() {

    const { root, section } = this.fieldRootInSection(`EndDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get StartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SurveyNumber() {

    const { root, section } = this.fieldRootInSection(`SurveyNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get SurveyTitle() {

    const { root, section } = this.fieldRootInSection(`SurveyTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SurveyAnalysis() {

    const { root, section } = this.fieldRootInSection(`SurveyAnalysis_f`, `Summary`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Coordinator() {

    const { root, section } = this.fieldRootInSection(`Coordinator_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SurveyParticipants() {

    const { root, section } = this.fieldRootInSection(`SurveyParticipants_f`, `Participants`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
