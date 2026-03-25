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


export class RiskAssessments_p extends DetailsPageBase {
  get AssessmentNumber() {

    const { root, section } = this.fieldRootInSection(`AssessmentNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReview() {

    const { root, section } = this.fieldRootInSection(`LastReview_f`, `Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get MarkAllRisksObsolete() {

    const { root, section } = this.fieldRootInSection(`MarkAllRisksObsolete_f`, `Review`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDue() {

    const { root, section } = this.fieldRootInSection(`NextReviewDue_f`, `Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforObsolete() {

    const { root, section } = this.fieldRootInSection(`ReasonforObsolete_f`, `Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ReviewNotes_f`, `Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Coordinator() {

    const { root, section } = this.fieldRootInSection(`Coordinator_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManagementSystemStandard() {

    const { root, section } = this.fieldRootInSection(`ManagementSystemStandard_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

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

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewCompletedBy() {

    const { root, section } = this.fieldRootInSection(`ReviewCompletedBy_f`, `Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssessmentContext() {

    const { root, section } = this.fieldRootInSection(`AssessmentContext_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Actions() {

    const { root, section } = this.fieldRootInSection(`Actions_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
