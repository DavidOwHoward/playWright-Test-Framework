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
import { PictureField } from '../../components/fields/PictureField';


export class QXtendBusinessObjectDataConfigs_p extends DetailsPageBase {
  get DataObjectName() {

    const { root, section } = this.fieldRootInSection(`DataObjectName_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FieldIdentifier() {

    const { root, section } = this.fieldRootInSection(`FieldIdentifier_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Filter() {

    const { root, section } = this.fieldRootInSection(`Filter_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Include() {

    const { root, section } = this.fieldRootInSection(`Include_f`, `Data Object`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InnerJoin() {

    const { root, section } = this.fieldRootInSection(`InnerJoin_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Join() {

    const { root, section } = this.fieldRootInSection(`Join_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ParentDataObjectName() {

    const { root, section } = this.fieldRootInSection(`ParentDataObjectName_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Primary() {

    const { root, section } = this.fieldRootInSection(`Primary_f`, `Data Object`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PublishWithParent() {

    const { root, section } = this.fieldRootInSection(`PublishWithParent_f`, `Data Object`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get SourceApplicationType() {

    const { root, section } = this.fieldRootInSection(`SourceApplicationType_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TableName() {

    const { root, section } = this.fieldRootInSection(`TableName_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get XMLName() {

    const { root, section } = this.fieldRootInSection(`XMLName_f`, `Data Object`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Fields() {

    const { root, section } = this.fieldRootInSection(`Fields_f`, `Data Object Fields`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
