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


export class Contacts_p extends DetailsPageBase {
  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Anemailaddressisrequired() {

    const { root, section } = this.fieldRootInSection(`TocreateanaccountEmail_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateQMSUserAccount() {

    const { root, section } = this.fieldRootInSection(`CreateUserAccount_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateSupplierPortalUserAccount() {

    const { root, section } = this.fieldRootInSection(`CreateSupplierPortalUserAcc_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DirectPhone() {

    const { root, section } = this.fieldRootInSection(`DirectPhone_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Extension() {

    const { root, section } = this.fieldRootInSection(`Extension_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARCompliant() {

    const { root, section } = this.fieldRootInSection(`ITARCompliant_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get MissingSetupInformation() {

    const { root, section } = this.fieldRootInSection(`MissingSetupInformation_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get MobilePhone() {

    const { root, section } = this.fieldRootInSection(`MobilePhone_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierAdminRole() {

    const { root, section } = this.fieldRootInSection(`SupplierPortalAccountRole_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Company() {

    const { root, section } = this.fieldRootInSection(`Company_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AdditionalCompanies() {

    const { root, section } = this.fieldRootInSection(`AdditionalCompanies_f`, `Additional Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ContactGroups() {

    const { root, section } = this.fieldRootInSection(`ContactGroups_f`, `Additional Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Correspondence() {

    const { root, section } = this.fieldRootInSection(`Correspondence_f`, `Correspondence`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
