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


export class ManagementSystemStandardSections_p extends DetailsPageBase {
  get Justification() {

    const { root, section } = this.fieldRootInSection(`Justification_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NotApplicable() {

    const { root, section } = this.fieldRootInSection(`NotApplicable_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _SectionReqNumber() {

    const { root, section } = this.fieldRootInSection(`SectionNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _SectionRequirementName() {

    const { root, section } = this.fieldRootInSection(`SectionName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ManagementSystemStandard() {

    const { root, section } = this.fieldRootInSection(`ManagementSystemStandard_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedProcesses() {

    const { root, section } = this.fieldRootInSection(`RelatedProcesses_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
