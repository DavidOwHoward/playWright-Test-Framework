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


export class SupplierAuditResults_p extends DetailsPageBase {
  get Observations() {

    const { root, section } = this.fieldRootInSection(`Observations_f`, `General`);

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

  get QuestionNumber() {

    const { root, section } = this.fieldRootInSection(`QuestionNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Reference() {

    const { root, section } = this.fieldRootInSection(`Reference_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionCategory() {

    const { root, section } = this.fieldRootInSection(`QuestionCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuestionId() {

    const { root, section } = this.fieldRootInSection(`QuestionId_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAudit() {

    const { root, section } = this.fieldRootInSection(`SupplierAudit_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAuditFindings() {

    const { root, section } = this.fieldRootInSection(`SupplierAuditFindings_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
