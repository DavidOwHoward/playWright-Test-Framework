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


export class QXtendBusinessObjectDataFieldsConfigs_p extends DetailsPageBase {
  get AddOnly() {

    const { root, section } = this.fieldRootInSection(`AddOnly_f`, `Data Field`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AlwaysPublish() {

    const { root, section } = this.fieldRootInSection(`AlwaysPublish_f`, `Data Field`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DataType() {

    const { root, section } = this.fieldRootInSection(`DataType_f`, `Data Field`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FieldName() {

    const { root, section } = this.fieldRootInSection(`FieldName_f`, `Data Field`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FixedValue() {

    const { root, section } = this.fieldRootInSection(`FixedValue_f`, `Data Field`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Include() {

    const { root, section } = this.fieldRootInSection(`Include_f`, `Data Field`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Primary() {

    const { root, section } = this.fieldRootInSection(`Primary_f`, `Data Field`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SourceApplicationType() {

    const { root, section } = this.fieldRootInSection(`SourceApplicationType_f`, `Data Field`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get XMLName() {

    const { root, section } = this.fieldRootInSection(`XMLName_f`, `Data Field`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DataObject() {

    const { root, section } = this.fieldRootInSection(`DataObject_f`, `Data Field`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
