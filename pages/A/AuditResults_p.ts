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


export class AuditResults_p extends DetailsPageBase {
  get QuestionAutoNumber() {

    const { root, section } = this.fieldRootInSection(`QuestionAutoNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionNumber() {

    const { root, section } = this.fieldRootInSection(`QuestionNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MaxScore() {

    const { root, section } = this.fieldRootInSection(`MaxScore_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionChoices() {

    const { root, section } = this.fieldRootInSection(`QuestionChoices_f`, `General`);

    return new ChoiceField(this.page, root, async () => section.openAndWait(root));
  }

  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateIncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`CreateInvestigation_f`, `Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _CreateNonconformance() {

    const { root, section } = this.fieldRootInSection(`CreateNonconformance_f`, `Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Reference_f`, `Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Observations() {

    const { root, section } = this.fieldRootInSection(`Observations_f`, `Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Question() {

    const { root, section } = this.fieldRootInSection(`Question_f`, `Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ResultScore() {

    const { root, section } = this.fieldRootInSection(`ResultScore_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Skipped() {

    const { root, section } = this.fieldRootInSection(`Skipped_f`, `Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Weight() {

    const { root, section } = this.fieldRootInSection(`Weight_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditType() {

    const { root, section } = this.fieldRootInSection(`AuditType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Auditor() {

    const { root, section } = this.fieldRootInSection(`Auditor_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Audit() {

    const { root, section } = this.fieldRootInSection(`Audit_f`, `General`);

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

  get Result() {

    const { root, section } = this.fieldRootInSection(`Resultskipped_f`, `Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DocumentsReviewed() {

    const { root, section } = this.fieldRootInSection(`DocumentsReviewed_f`, `Links`);

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

  get _AuditFindings() {

    const { root, section } = this.fieldRootInSection(`AuditFinding_f`, `Results`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformance() {

    const { root, section } = this.fieldRootInSection(`Nonconformance_f`, `Results`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get IncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`Investigation_f`, `Results`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
