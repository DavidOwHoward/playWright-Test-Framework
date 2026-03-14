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


export class SupplierCertifications_p extends DetailsPageBase {
  get Certification() {

    const { root, section } = this.fieldRootInSection(`Certification_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get CertificationDate() {

    const { root, section } = this.fieldRootInSection(`CertificationDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CertificationExpires() {

    const { root, section } = this.fieldRootInSection(`CertificationExpires_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CertificationNumber() {

    const { root, section } = this.fieldRootInSection(`CertificationNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CertificationAgency() {

    const { root, section } = this.fieldRootInSection(`CertificationAgency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Standard() {

    const { root, section } = this.fieldRootInSection(`Standard_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
