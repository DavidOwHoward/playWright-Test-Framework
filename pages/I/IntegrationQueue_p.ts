import { DetailsPageBase } from '../../BasePages/DetailsPageBase';
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


export class IntegrationQueue_p extends DetailsPageBase {
  get CallCount() {

    const { root, section } = this.fieldRootInSection(`CallCount`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CreationDate() {

    const { root, section } = this.fieldRootInSection(`CreationDate`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get IntegrationServiceGuid() {

    const { root, section } = this.fieldRootInSection(`IntegrationServiceGuid`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemId() {

    const { root, section } = this.fieldRootInSection(`ItemId`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessSystemName() {

    const { root, section } = this.fieldRootInSection(`ProcessSystemName`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RestData() {

    const { root, section } = this.fieldRootInSection(`RestData`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RestHeaders() {

    const { root, section } = this.fieldRootInSection(`RestHeaders`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RestHttpMethod() {

    const { root, section } = this.fieldRootInSection(`RestHttpMethod`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RestUrl() {

    const { root, section } = this.fieldRootInSection(`RestUrl`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ServiceType() {

    const { root, section } = this.fieldRootInSection(`ServiceType`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SoapContractTypeName() {

    const { root, section } = this.fieldRootInSection(`SoapContractTypeName`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SoapData() {

    const { root, section } = this.fieldRootInSection(`SoapData`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SoapMethodName() {

    const { root, section } = this.fieldRootInSection(`SoapMethodName`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SoapOptions() {

    const { root, section } = this.fieldRootInSection(`SoapOptions`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SoapServiceDescriptionGuid() {

    const { root, section } = this.fieldRootInSection(`SoapServiceDescriptionGuid`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Account() {

    const { root, section } = this.fieldRootInSection(`Account`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
