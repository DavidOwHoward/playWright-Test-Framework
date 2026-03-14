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


export class DocumentTemplates_p extends DetailsPageBase {
  get DocumentTemplate() {

    const { root, section } = this.fieldRootInSection(`DocumentTemplate_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTemplateCode() {

    const { root, section } = this.fieldRootInSection(`DocumentTemplateCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoletionApproval() {

    const { root, section } = this.fieldRootInSection(`ObsoletionApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get TemplateFile() {

    const { root, section } = this.fieldRootInSection(`TemplateFile_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get VersionApproval() {

    const { root, section } = this.fieldRootInSection(`VersionApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteDocument() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDocument_f`, `Owner`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteMessage() {

    const { root, section } = this.fieldRootInSection(`ObsoleteMessage_f`, `Owner`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforObsoleting() {

    const { root, section } = this.fieldRootInSection(`ReasonforObsoleting_f`, `Owner`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforChange() {

    const { root, section } = this.fieldRootInSection(`ReasonforChange_f`, `Version Specific`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentType() {

    const { root, section } = this.fieldRootInSection(`DocumentType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

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

  get ChangeRequestedBy() {

    const { root, section } = this.fieldRootInSection(`ChangeRequestedBy_f`, `Version Specific`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
