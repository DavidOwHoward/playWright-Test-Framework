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


export class Addresses_p extends DetailsPageBase {
  get Address1() {

    const { root, section } = this.fieldRootInSection(`Address1_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Address2() {

    const { root, section } = this.fieldRootInSection(`Address2_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Address3() {

    const { root, section } = this.fieldRootInSection(`Address3_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AddressType() {

    const { root, section } = this.fieldRootInSection(`AddressType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get City() {

    const { root, section } = this.fieldRootInSection(`City_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Country() {

    const { root, section } = this.fieldRootInSection(`Country_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get eSyncName() {

    const { root, section } = this.fieldRootInSection(`eSyncValue_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FullAddress() {

    const { root, section } = this.fieldRootInSection(`DisplayExpression_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GeneralPhoneNumber() {

    const { root, section } = this.fieldRootInSection(`GeneralPhoneNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PostalCode() {

    const { root, section } = this.fieldRootInSection(`Post_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _StateProvinceRegion() {

    const { root, section } = this.fieldRootInSection(`State_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get BusinessRelationCode() {

    const { root, section } = this.fieldRootInSection(`BusinessRelationCode_f`, `Relationships`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `Relationships`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedCompanys() {

    const { root, section } = this.fieldRootInSection(`RelatedCompanys_f`, `Relationships`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
