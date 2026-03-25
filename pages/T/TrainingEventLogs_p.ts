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


export class TrainingEventLogs_p extends DetailsPageBase {
  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get labelInstructionsAll() {

    const { root, section } = this.fieldRootInSection(`labelInstructionsAll_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get MaximumScore() {

    const { root, section } = this.fieldRootInSection(`MaximumScore_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberofDaysforReviewApproval() {

    const { root, section } = this.fieldRootInSection(`NumberofDaysforApproval_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofQuestions() {

    const { root, section } = this.fieldRootInSection(`NumberofQuestions_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReviewApprovalDueDate() {

    const { root, section } = this.fieldRootInSection(`ReviewApprovalDueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReviewApprovalStartDate() {

    const { root, section } = this.fieldRootInSection(`ReviewApprovalStartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ScorePercentage() {

    const { root, section } = this.fieldRootInSection(`ScorePercentage_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEvaluationQuestions() {

    const { root, section } = this.fieldRootInSection(`TrainingEvaluationQuestions_f`, `General`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventDescription() {

    const { root, section } = this.fieldRootInSection(`TrainingEventDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingLogApproval() {

    const { root, section } = this.fieldRootInSection(`TrainingEventLogApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get YourScore() {

    const { root, section } = this.fieldRootInSection(`YourScore_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _InstructionalVideosFromtheSkill() {

    const { root, section } = this.fieldRootInSection(`InstructionalVideoSkill_f`, `Instructional Videos`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get _VideosFromtheTrainingEvent() {

    const { root, section } = this.fieldRootInSection(`InstructionalVideo_f`, `Instructional Videos`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get Document() {

    const { root, section } = this.fieldRootInSection(`Document_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewSkillRating() {

    const { root, section } = this.fieldRootInSection(`NewSkillRating_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PreviousSkillRating() {

    const { root, section } = this.fieldRootInSection(`PreviousSkillRating_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skill() {

    const { root, section } = this.fieldRootInSection(`Skill_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEvent() {

    const { root, section } = this.fieldRootInSection(`TrainingEvent_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
