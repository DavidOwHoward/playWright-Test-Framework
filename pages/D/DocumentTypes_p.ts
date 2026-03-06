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


export class DocumentTypes_p extends DetailsPageBase {
  get DocumentType() {

    const { root, section } = this.fieldRootInSection(`DocumentType_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTypeCode() {

    const { root, section } = this.fieldRootInSection(`DocumentTypeCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NextDocumentNumber() {

    const { root, section } = this.fieldRootInSection(`NextDocumentNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultApprovalDays() {

    const { root, section } = this.fieldRootInSection(`DefaultApprovalDays_f`, `Approval Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewsRequireApproval() {

    const { root, section } = this.fieldRootInSection(`ReviewsRequireApproval_f`, `Approval Setup`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ConverttoPDF() {

    const { root, section } = this.fieldRootInSection(`ConverttoPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRequirement_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RestrictPDF() {

    const { root, section } = this.fieldRootInSection(`RestrictPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `Document Review`);

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

  get DefaultSkillRating() {

    const { root, section } = this.fieldRootInSection(`DefaultSkillRating_f`, `Training Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillType() {

    const { root, section } = this.fieldRootInSection(`SkillType_f`, `Training Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEventType() {

    const { root, section } = this.fieldRootInSection(`TrainingEventType_f`, `Training Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTypeApprovers() {

    const { root, section } = this.fieldRootInSection(`DocumentTypeApprovers_f`, `Approval Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTypeEditors() {

    const { root, section } = this.fieldRootInSection(`DocumentTypeEditors_f`, `Approval Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTypeViewers() {

    const { root, section } = this.fieldRootInSection(`DocumentTypeViewers_f`, `Approval Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
