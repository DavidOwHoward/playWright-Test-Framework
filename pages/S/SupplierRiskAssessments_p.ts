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


export class SupplierRiskAssessments_p extends DetailsPageBase {
  get AssessmentNumber() {

    const { root, section } = this.fieldRootInSection(`AssessmentNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Coordinator() {

    const { root, section } = this.fieldRootInSection(`Coordinator_f`, `General`);

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

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Risks() {

    const { root, section } = this.fieldRootInSection(`Risks_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
