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


export class InventoryTransactionQAD_p extends DetailsPageBase {
  get EffectiveDate() {

    const { root, section } = this.fieldRootInSection(`EffectiveDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Line() {

    const { root, section } = this.fieldRootInSection(`Line_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Lot() {

    const { root, section } = this.fieldRootInSection(`Lot_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Number() {

    const { root, section } = this.fieldRootInSection(`Number_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QADUserText() {

    const { root, section } = this.fieldRootInSection(`QADUserText_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Quantity() {

    const { root, section } = this.fieldRootInSection(`Quantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityLocation() {

    const { root, section } = this.fieldRootInSection(`QuantityLocation_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityShort() {

    const { root, section } = this.fieldRootInSection(`QuantityShort_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonCode() {

    const { root, section } = this.fieldRootInSection(`ReasonCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReceiverId() {

    const { root, section } = this.fieldRootInSection(`ReceiverId_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Reference() {

    const { root, section } = this.fieldRootInSection(`Reference_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Remarks() {

    const { root, section } = this.fieldRootInSection(`Remarks_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SerialNumber() {

    const { root, section } = this.fieldRootInSection(`SerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TransactionDate() {

    const { root, section } = this.fieldRootInSection(`TransactionDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TransactionNumber() {

    const { root, section } = this.fieldRootInSection(`TransactionNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TransactionStatus() {

    const { root, section } = this.fieldRootInSection(`TransactionStatus_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TransactionType() {

    const { root, section } = this.fieldRootInSection(`TransactionType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Location() {

    const { root, section } = this.fieldRootInSection(`Location_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`QuantityUnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackSerialNumbers() {

    const { root, section } = this.fieldRootInSection(`PackSerialNumbers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
