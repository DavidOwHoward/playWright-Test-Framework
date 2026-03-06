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


export class ReturnRequests_p extends DetailsPageBase {
  get Daterequested() {

    const { root, section } = this.fieldRootInSection(`Daterequested_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get DateReturned() {

    const { root, section } = this.fieldRootInSection(`DateReturned_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RequestNumber() {

    const { root, section } = this.fieldRootInSection(`RequestNumber_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get RMANumber() {

    const { root, section } = this.fieldRootInSection(`RMANumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Customercomplaint() {

    const { root, section } = this.fieldRootInSection(`Customercomplaint_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Requestedby() {

    const { root, section } = this.fieldRootInSection(`Requestedby_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Attachments() {

    const { root, section } = this.fieldRootInSection(`Attachments_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Correspondence() {

    const { root, section } = this.fieldRootInSection(`Correspondence_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
