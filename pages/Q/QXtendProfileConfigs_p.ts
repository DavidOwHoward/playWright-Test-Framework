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


export class QXtendProfileConfigs_p extends DetailsPageBase {
  get Filter() {

    const { root, section } = this.fieldRootInSection(`Filter_f`, `Profile`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProfileDescription() {

    const { root, section } = this.fieldRootInSection(`ProfileDescription_f`, `Profile`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProfileName() {

    const { root, section } = this.fieldRootInSection(`ProfileName_f`, `Profile`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get qdocName() {

    const { root, section } = this.fieldRootInSection(`qdocName_f`, `Profile`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SourceApplicationType() {

    const { root, section } = this.fieldRootInSection(`SourceApplicationType_f`, `Profile`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get BusinessObject() {

    const { root, section } = this.fieldRootInSection(`BusinessObject_f`, `Profile`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DataObjects() {

    const { root, section } = this.fieldRootInSection(`DataObjects_f`, `Profile`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
