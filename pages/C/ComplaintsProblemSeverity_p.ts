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


export class ComplaintsProblemSeverity_p extends DetailsPageBase {
  get ComplaintProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`ComplaintProblemSeverity_f`, `General `);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresCAPA() {

    const { root, section } = this.fieldRootInSection(`RequiresCAPA_f`, `General `);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SeverityCriteria() {

    const { root, section } = this.fieldRootInSection(`SeverityCriteria_f`, `General `);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CAPAProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`CAPAProblemSeverity_f`, `General `);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Domains() {

    const { root, section } = this.fieldRootInSection(`Domains_f`, `General `);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entities() {

    const { root, section } = this.fieldRootInSection(`BusinessEntities_f`, `General `);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General `);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
