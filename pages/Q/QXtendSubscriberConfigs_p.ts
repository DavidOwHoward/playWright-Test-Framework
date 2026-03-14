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


export class QXtendSubscriberConfigs_p extends DetailsPageBase {
  get AllowSuperseded() {

    const { root, section } = this.fieldRootInSection(`AllowSuperseded_f`, `Subscriber`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ResponseTimeout() {

    const { root, section } = this.fieldRootInSection(`ResponseTimeout_f`, `Subscriber`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SoapAction() {

    const { root, section } = this.fieldRootInSection(`SoapAction_f`, `Subscriber`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SOAPEnvelope() {

    const { root, section } = this.fieldRootInSection(`SOAPEnvelope_f`, `Subscriber`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SOAPHeader() {

    const { root, section } = this.fieldRootInSection(`SOAPHeader_f`, `Subscriber`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SubscriberCode() {

    const { root, section } = this.fieldRootInSection(`SubscriberCode_f`, `Subscriber`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SubscriberDescription() {

    const { root, section } = this.fieldRootInSection(`SubscriberDescription_f`, `Subscriber`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetURL() {

    const { root, section } = this.fieldRootInSection(`TargetURL_f`, `Subscriber`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get BusinessObject() {

    const { root, section } = this.fieldRootInSection(`BusinessObject_f`, `Subscriber Profile`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Filter() {

    const { root, section } = this.fieldRootInSection(`Filter_f`, `Subscriber Profile`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Profile() {

    const { root, section } = this.fieldRootInSection(`Profile_f`, `Subscriber Profile`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
