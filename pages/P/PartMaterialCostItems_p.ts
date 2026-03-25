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


export class PartMaterialCostItems_p extends DetailsPageBase {
  get _Consumptionmaterialsitem() {

    const { root, section } = this.fieldRootInSection(`Consumption_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MaterialCost() {

    const { root, section } = this.fieldRootInSection(`MaterialCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MaterialSupplier() {

    const { root, section } = this.fieldRootInSection(`MaterialSupplier_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReferenceNumber() {

    const { root, section } = this.fieldRootInSection(`ReferenceNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Scrapperunit() {

    const { root, section } = this.fieldRootInSection(`Scrap_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ScrapResalePrice() {

    const { root, section } = this.fieldRootInSection(`ScrapResalePrice_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalMaterialItemCostperUnit() {

    const { root, section } = this.fieldRootInSection(`TotalMaterialItemCostperUni_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalScrapPrice() {

    const { root, section } = this.fieldRootInSection(`TotalScrapPrice_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PartWorksheet() {

    const { root, section } = this.fieldRootInSection(`PartWorksheet_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
