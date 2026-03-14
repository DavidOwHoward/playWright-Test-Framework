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


export class POItemLog_p extends DetailsPageBase {
  get DeliveryDueDate() {

    const { root, section } = this.fieldRootInSection(`DeliveryDueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LineDescription() {

    const { root, section } = this.fieldRootInSection(`LineDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LineNumber() {

    const { root, section } = this.fieldRootInSection(`LineNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OrderNumber() {

    const { root, section } = this.fieldRootInSection(`OrderNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OrderedQuantity() {

    const { root, section } = this.fieldRootInSection(`OrderedQuantity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierItem() {

    const { root, section } = this.fieldRootInSection(`SupplierItem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReceivingItemLog() {

    const { root, section } = this.fieldRootInSection(`ReceivingItemLog_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
