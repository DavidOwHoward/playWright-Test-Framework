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


export class Currencies_p extends DetailsPageBase {
  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrencyCode() {

    const { root, section } = this.fieldRootInSection(`CurrencyCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Symbol() {

    const { root, section } = this.fieldRootInSection(`Symbol_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ExchangeRates() {

    const { root, section } = this.fieldRootInSection(`Conversions_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
