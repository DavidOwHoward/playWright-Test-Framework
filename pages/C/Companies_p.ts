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


export class Companies_p extends DetailsPageBase {
  get CompanyName() {

    const { root, section } = this.fieldRootInSection(`CompanyName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompanyNumber() {

    const { root, section } = this.fieldRootInSection(`CompanyNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRequirments() {

    const { root, section } = this.fieldRootInSection(`ITARRequirments_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Website() {

    const { root, section } = this.fieldRootInSection(`Website_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompanyType() {

    const { root, section } = this.fieldRootInSection(`CompanyType_f`, `General`);

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

  get MainAddress() {

    const { root, section } = this.fieldRootInSection(`MainAddress_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SharedSet() {

    const { root, section } = this.fieldRootInSection(`SharedSet_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Addresss() {

    const { root, section } = this.fieldRootInSection(`Addresss_f`, `Address(s)`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Contacts() {

    const { root, section } = this.fieldRootInSection(`Contacts_f`, `Contact(s)`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
