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


export class ReceivingItemLog_p extends DetailsPageBase {
  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DeliveryLate() {

    const { root, section } = this.fieldRootInSection(`DeliveryLate_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DeliveryReceivedDate() {

    const { root, section } = this.fieldRootInSection(`DeliveryReceivedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LineDescription() {

    const { root, section } = this.fieldRootInSection(`LineDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`LotSerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OrganizationPaidPremiumFreight() {

    const { root, section } = this.fieldRootInSection(`OrganizationPaidPremiumFrei_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ReceivedQuantity() {

    const { root, section } = this.fieldRootInSection(`ReceivedQuantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierLotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`SupplierLotSerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierPaidPremiumFreight() {

    const { root, section } = this.fieldRootInSection(`SupplierPaidPremiumFreight_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get POItemLog() {

    const { root, section } = this.fieldRootInSection(`POItemLog_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TransactionDetails() {

    const { root, section } = this.fieldRootInSection(`TransactionDetails_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
