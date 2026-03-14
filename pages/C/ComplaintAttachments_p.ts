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


export class ComplaintAttachments_p extends DetailsPageBase {
  get AttachmentInformation() {

    const { root, section } = this.fieldRootInSection(`AttachmentInformation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateLogged() {

    const { root, section } = this.fieldRootInSection(`DateLogged_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get File() {

    const { root, section } = this.fieldRootInSection(`File_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get Image() {

    const { root, section } = this.fieldRootInSection(`Image_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get Customercomplaint() {

    const { root, section } = this.fieldRootInSection(`Customercomplaint_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Loggedby() {

    const { root, section } = this.fieldRootInSection(`Loggedby_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Returnrequest() {

    const { root, section } = this.fieldRootInSection(`Returnrequest_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
