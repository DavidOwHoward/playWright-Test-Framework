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


export class Correspondence_p extends DetailsPageBase {
  get ActualEnd() {

    const { root, section } = this.fieldRootInSection(`ActualEnd_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActualStart() {

    const { root, section } = this.fieldRootInSection(`ActualStart_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PrivateCheckboxField() {

    const { root, section } = this.fieldRootInSection(`Private_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledEnd() {

    const { root, section } = this.fieldRootInSection(`ScheduledEnd_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledStart() {

    const { root, section } = this.fieldRootInSection(`ScheduledStart_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Subject() {

    const { root, section } = this.fieldRootInSection(`Subject_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MessageNotes() {

    const { root, section } = this.fieldRootInSection(`MessageNotes_f`, `Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Company() {

    const { root, section } = this.fieldRootInSection(`Company_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CorrespondenceDirection() {

    const { root, section } = this.fieldRootInSection(`CorrespondenceDirection_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CorrespondenceType() {

    const { root, section } = this.fieldRootInSection(`CorrespondenceType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `General`);

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

  get To() {

    const { root, section } = this.fieldRootInSection(`To_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CorrespondenceResult() {

    const { root, section } = this.fieldRootInSection(`CorrespondenceResult_f`, `Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
