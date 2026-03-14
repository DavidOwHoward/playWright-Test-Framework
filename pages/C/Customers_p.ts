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


export class Customers_p extends DetailsPageBase {
  get ShipTo() {

    const { root, section } = this.fieldRootInSection(`ShipTo_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalContacts() {

    const { root, section } = this.fieldRootInSection(`AdditionalContacts_f`, `Contact(s)`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get AlternateCustomerCode() {

    const { root, section } = this.fieldRootInSection(`AlternateCustomerCode_f`, `Item(s)`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Contacts() {

    const { root, section } = this.fieldRootInSection(`Contacts_f`, `Contact(s)`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DomainSettings() {

    const { root, section } = this.fieldRootInSection(`DomainSettings_f`, `Customer Domain Settings`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CustomerItems() {

    const { root, section } = this.fieldRootInSection(`CustomerItems_f`, `Item(s)`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
