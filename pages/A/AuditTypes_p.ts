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


export class AuditTypes_p extends DetailsPageBase {
  get AuditTypeCode() {

    const { root, section } = this.fieldRootInSection(`AuditTypeCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditTypeDescription() {

    const { root, section } = this.fieldRootInSection(`AuditTypeDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditTypeName() {

    const { root, section } = this.fieldRootInSection(`AuditTypeName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get HideLPAFields() {

    const { root, section } = this.fieldRootInSection(`HideLPAFields_f`, `Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get HideReferenceCoverage() {

    const { root, section } = this.fieldRootInSection(`HideReferenceCoverage_f`, `Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresApproval() {

    const { root, section } = this.fieldRootInSection(`RequiresApproval_f`, `Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresFindingstobeCompleted() {

    const { root, section } = this.fieldRootInSection(`RequiresFindingstobeComplet_f`, `Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
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

  get _Approvers() {

    const { root, section } = this.fieldRootInSection(`Approvers_f`, `Options`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AuditorSkills() {

    const { root, section } = this.fieldRootInSection(`AuditorSkills_f`, `Options`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LeadAuditorSkills() {

    const { root, section } = this.fieldRootInSection(`LeadAuditorSkills_f`, `Options`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
