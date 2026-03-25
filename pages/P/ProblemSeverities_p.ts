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


export class ProblemSeverities_p extends DetailsPageBase {
  get DefaultDaysforCompletion() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforCompletion_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforContainment() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforContainment_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforCorrectiveAction() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforCorrectiveAct_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforRootCause() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforRootCause_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSeverity() {

    const { root, section } = this.fieldRootInSection(`ProblemSeverity_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemSeverityCode() {

    const { root, section } = this.fieldRootInSection(`ProblemSeverityCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresCorrectiveAction() {

    const { root, section } = this.fieldRootInSection(`RequiresCorrectiveAction_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SeverityCriteria() {

    const { root, section } = this.fieldRootInSection(`SeverityCriteria_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
