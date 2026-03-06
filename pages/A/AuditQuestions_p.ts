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


export class AuditQuestions_p extends DetailsPageBase {
  get QuestionAutoNumber() {

    const { root, section } = this.fieldRootInSection(`QuestionAutoNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionNumber() {

    const { root, section } = this.fieldRootInSection(`QuestionNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MaxScore() {

    const { root, section } = this.fieldRootInSection(`MaxScore_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Reference_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Question() {

    const { root, section } = this.fieldRootInSection(`Question_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionChoices() {

    const { root, section } = this.fieldRootInSection(`QuestionChoices_f`, `General`);

    return new ChoiceField(this.page, root, async () => section.openAndWait(root));
  }

  get RandomQuestionNumber() {

    const { root, section } = this.fieldRootInSection(`RandomQuestionNumber_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Weight() {

    const { root, section } = this.fieldRootInSection(`Weight_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _AuditChecklists() {

    const { root, section } = this.fieldRootInSection(`AuditChecklists_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get CreatedBy() {

    const { root, section } = this.fieldRootInSection(`CreatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionCategory() {

    const { root, section } = this.fieldRootInSection(`QuestionCategory_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditType() {

    const { root, section } = this.fieldRootInSection(`AuditType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get MSSSectionsCovered() {

    const { root, section } = this.fieldRootInSection(`MSSSectionsCovered_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessesCovered() {

    const { root, section } = this.fieldRootInSection(`ProcesssCovered_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedDocuments() {

    const { root, section } = this.fieldRootInSection(`RelatedDocuments_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
