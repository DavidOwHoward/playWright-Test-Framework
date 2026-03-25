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


export class TransportationCostItems_p extends DetailsPageBase {
  get ShipFrom() {

    const { root, section } = this.fieldRootInSection(`ShipFrom_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ShipTo() {

    const { root, section } = this.fieldRootInSection(`ShipTo_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalFreightperPart() {

    const { root, section } = this.fieldRootInSection(`TotalFreightperPart_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationWorksheet() {

    const { root, section } = this.fieldRootInSection(`TransportationWorksheet_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationType() {

    const { root, section } = this.fieldRootInSection(`TransportationType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
