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


export class Improvements_p extends DetailsPageBase {
  get ImprovementNumber() {

    const { root, section } = this.fieldRootInSection(`ImprovementNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _AchievedImpactsNotes() {

    const { root, section } = this.fieldRootInSection(`AchievedImpactsNotes_f`, `Completion`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CongratulatetheTeam() {

    const { root, section } = this.fieldRootInSection(`CongratulatetheTeam_f`, `Completion`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReadAcrossNotes() {

    const { root, section } = this.fieldRootInSection(`ReadAcrossNotes_f`, `Completion`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateCreated() {

    const { root, section } = this.fieldRootInSection(`DateCreated_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LogImprovementasAnonymous() {

    const { root, section } = this.fieldRootInSection(`LogImprovementasAnonymous_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _PotentialImpactsNotes() {

    const { root, section } = this.fieldRootInSection(`PotentialImpactsNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PurposedSolution() {

    const { root, section } = this.fieldRootInSection(`PurposedSolution_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PlanSummary() {

    const { root, section } = this.fieldRootInSection(`PlanSummary_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgressNotes() {

    const { root, section } = this.fieldRootInSection(`ProgressNotes_f`, `Progress`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetImplementationDate() {

    const { root, section } = this.fieldRootInSection(`TargetImplementationDate_f`, `Progress`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Champion() {

    const { root, section } = this.fieldRootInSection(`Champion_f`, `[Frozen Section]`);

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

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmittedBy() {

    const { root, section } = this.fieldRootInSection(`SubmittedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedProject() {

    const { root, section } = this.fieldRootInSection(`RelatedAPQPProject_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AchievedImpacts() {

    const { root, section } = this.fieldRootInSection(`AchievedImpacts_f`, `Completion`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PotentialImpacts() {

    const { root, section } = this.fieldRootInSection(`PotentialImpacts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearned() {

    const { root, section } = this.fieldRootInSection(`LessonsLearned_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessesAffected() {

    const { root, section } = this.fieldRootInSection(`ProcesssAffected_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ImprovementTasks() {

    const { root, section } = this.fieldRootInSection(`ImprovementTasks_f`, `Progress`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
