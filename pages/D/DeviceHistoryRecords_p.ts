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


export class DeviceHistoryRecords_p extends DetailsPageBase {
  get RecordApproval() {

    const { root, section } = this.fieldRootInSection(`RecordApproval_f`, `Device History Record Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get DHRFile() {

    const { root, section } = this.fieldRootInSection(`DHRFile_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get _LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`LotSerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordAutoNumber() {

    const { root, section } = this.fieldRootInSection(`RecordAutoNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordDate() {

    const { root, section } = this.fieldRootInSection(`RecordDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordNumber() {

    const { root, section } = this.fieldRootInSection(`RecordNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RecordTitle() {

    const { root, section } = this.fieldRootInSection(`RecordTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceHistoryRecordType() {

    const { root, section } = this.fieldRootInSection(`DeviceHistoryRecordType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
