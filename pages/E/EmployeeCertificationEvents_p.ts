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


export class EmployeeCertificationEvents_p extends DetailsPageBase {
  get ScheduleDate() {

    const { root, section } = this.fieldRootInSection(`ScheduleDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationSentDate() {

    const { root, section } = this.fieldRootInSection(`NotificationSentDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _SkillPerformanceStepsResults() {

    const { root, section } = this.fieldRootInSection(`SkillPerformanceStepsResult_f`, `General`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get OverallResult() {

    const { root, section } = this.fieldRootInSection(`OverallResult_f`, `Performance Measures Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _PerformanceMeasuresResults() {

    const { root, section } = this.fieldRootInSection(`PerformanceMeasuresResults_f`, `Performance Measures Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get Certifier() {

    const { root, section } = this.fieldRootInSection(`Certifier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRole() {

    const { root, section } = this.fieldRootInSection(`TrainingRole_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CertificationFrequency() {

    const { root, section } = this.fieldRootInSection(`CertificationFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeCertification() {

    const { root, section } = this.fieldRootInSection(`EmployeeCertification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
