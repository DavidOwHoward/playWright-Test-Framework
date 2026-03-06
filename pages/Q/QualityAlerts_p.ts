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


export class QualityAlerts_p extends DetailsPageBase {
  get ExpirationDate() {

    const { root, section } = this.fieldRootInSection(`ExpirationDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityAlertNumber() {

    const { root, section } = this.fieldRootInSection(`QualityAlertNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get _DistributionorNotificationGroupsselectionofatleast1person() {

    const { root, section } = this.fieldRootInSection(`DistributionorNotificationG_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IssueDescription() {

    const { root, section } = this.fieldRootInSection(`IssueDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorNumber() {

    const { root, section } = this.fieldRootInSection(`PriorNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityAuthorized() {

    const { root, section } = this.fieldRootInSection(`QuantityAuthorized_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ActionRequired() {

    const { root, section } = this.fieldRootInSection(`ActionRequired_f`, `Quality Issue`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _IssuePictures() {

    const { root, section } = this.fieldRootInSection(`IssuePicture_f`, `Quality Issue`);

    return new Picture(this.page, root, async () => section.openAndWait(root));
  }

  get CreateTrainingEvent() {

    const { root, section } = this.fieldRootInSection(`CreateTrainingEvent_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresTraining() {

    const { root, section } = this.fieldRootInSection(`RequiresTraining_f`, `Skill and Training`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingAid() {

    const { root, section } = this.fieldRootInSection(`TrainingAid_f`, `Skill and Training`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InitiatedbyNonconformance() {

    const { root, section } = this.fieldRootInSection(`ParrentNonconformance_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`ProblemSeverity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skill() {

    const { root, section } = this.fieldRootInSection(`Skill_f`, `Skill and Training`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Customers() {

    const { root, section } = this.fieldRootInSection(`Customers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Distribution() {

    const { root, section } = this.fieldRootInSection(`Distribution_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationGroups() {

    const { root, section } = this.fieldRootInSection(`NotificationGroups_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Suppliers() {

    const { root, section } = this.fieldRootInSection(`Suppliers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillTrainingQuestions() {

    const { root, section } = this.fieldRootInSection(`SkillTrainingQuestions_f`, `Skill and Training`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrainingEvents() {

    const { root, section } = this.fieldRootInSection(`TrainingEvents_f`, `Skill and Training`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
