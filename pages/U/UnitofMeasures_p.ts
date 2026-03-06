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


export class UnitofMeasures_p extends DetailsPageBase {
  get UnitAbbreviation() {

    const { root, section } = this.fieldRootInSection(`UnitAbbreviation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitName() {

    const { root, section } = this.fieldRootInSection(`UnitName_f`, `General`);

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

  get UnitType() {

    const { root, section } = this.fieldRootInSection(`UnitType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _UnitofMeasureConversions() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasureConversions_f`, `Conversions`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
