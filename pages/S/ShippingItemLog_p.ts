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


export class ShippingItemLog_p extends DetailsPageBase {
  get _LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`LotSerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofShipments() {

    const { root, section } = this.fieldRootInSection(`NumberofShipments_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get QuantityShipped() {

    const { root, section } = this.fieldRootInSection(`QuantityShipped_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ShipmentDate() {

    const { root, section } = this.fieldRootInSection(`ShipmentDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerItem() {

    const { root, section } = this.fieldRootInSection(`CustomerItem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
