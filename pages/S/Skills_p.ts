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


export class Skills_p extends DetailsPageBase {
  get Skill() {

    const { root, section } = this.fieldRootInSection(`Skill_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillCode() {

    const { root, section } = this.fieldRootInSection(`SkillCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MinimumNumberofAudits() {

    const { root, section } = this.fieldRootInSection(`MinimumNumberofAudits_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _SelfDirected() {

    const { root, section } = this.fieldRootInSection(`SelfDirected_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocuments() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocuments_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get Processes() {

    const { root, section } = this.fieldRootInSection(`Processes_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get QualityAlerts() {

    const { root, section } = this.fieldRootInSection(`QualityAlerts_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _InstructionalVideos() {

    const { root, section } = this.fieldRootInSection(`InstructionalVideo_f`, `Skill Performance Steps`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get ExpirationFrequency() {

    const { root, section } = this.fieldRootInSection(`ExpirationFrequency_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillType() {

    const { root, section } = this.fieldRootInSection(`SkillType_f`, `[Frozen Section]`);

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

  get EmployeesWithSkill() {

    const { root, section } = this.fieldRootInSection(`EmployeesWithSkill_f`, `Employees`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionTypes() {

    const { root, section } = this.fieldRootInSection(`InspectionTypes_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ItemGroups() {

    const { root, section } = this.fieldRootInSection(`ItemGroups_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkCenters() {

    const { root, section } = this.fieldRootInSection(`WorkCenters_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillPerformanceSteps() {

    const { root, section } = this.fieldRootInSection(`SkillPerformanceSteps_f`, `Skill Performance Steps`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillTrainingQuestions() {

    const { root, section } = this.fieldRootInSection(`SkillTrainingQuestions_f`, `Training Questions`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRoles() {

    const { root, section } = this.fieldRootInSection(`EmployeeRoles_f`, `Training Roles`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAuditTypes() {

    const { root, section } = this.fieldRootInSection(`SupplierAuditTypes_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
