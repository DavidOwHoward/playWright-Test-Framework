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


export class QXtendBusinessEventConfigs_p extends DetailsPageBase {
  get BusinessObject() {

    const { root, section } = this.fieldRootInSection(`BusinessObject_f`, `Data Object Listening`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DataObject() {

    const { root, section } = this.fieldRootInSection(`DataObject_f`, `Data Object Listening`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EventFilter() {

    const { root, section } = this.fieldRootInSection(`EventFilter_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EventName() {

    const { root, section } = this.fieldRootInSection(`EventName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Object() {

    const { root, section } = this.fieldRootInSection(`Object_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }
}
