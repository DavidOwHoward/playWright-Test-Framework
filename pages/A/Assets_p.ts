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


export class Assets_p extends DetailsPageBase {
  get AssetDescription() {

    const { root, section } = this.fieldRootInSection(`AssetDescription_f`, `General Asset`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AssetNumber() {

    const { root, section } = this.fieldRootInSection(`AssetNumber_f`, `General Asset`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OriginalCost() {

    const { root, section } = this.fieldRootInSection(`OriginalCost_f`, `General Asset`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PlacedinServiceDate() {

    const { root, section } = this.fieldRootInSection(`PlacedinServiceDate_f`, `General Asset`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PurchaseDate() {

    const { root, section } = this.fieldRootInSection(`PurchaseDate_f`, `General Asset`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General Asset`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General Asset`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General Asset`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General Asset`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
