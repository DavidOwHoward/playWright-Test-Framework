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


export class LPALayer_p extends DetailsPageBase {
  get LayerName() {

    const { root, section } = this.fieldRootInSection(`LayerName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofLPAsMonthly() {

    const { root, section } = this.fieldRootInSection(`NumberofLPAsMonthly_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofLPAsWeekly() {

    const { root, section } = this.fieldRootInSection(`NumberofLPAsWeekly_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultAuditType() {

    const { root, section } = this.fieldRootInSection(`DefaultAuditType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultLeadAuditor() {

    const { root, section } = this.fieldRootInSection(`DefaultLeadAuditor_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LPAGroup() {

    const { root, section } = this.fieldRootInSection(`LPAGroup_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Checklists() {

    const { root, section } = this.fieldRootInSection(`Checklists_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
