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


export class InspectionStations_p extends DetailsPageBase {
  get ComputerName() {

    const { root, section } = this.fieldRootInSection(`ComputerName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionStationName() {

    const { root, section } = this.fieldRootInSection(`InspectionStationName_f`, `General`);

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

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Employees() {

    const { root, section } = this.fieldRootInSection(`Employees_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AssociatedLocations() {

    const { root, section } = this.fieldRootInSection(`AssociatedLocations_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlan() {

    const { root, section } = this.fieldRootInSection(`ControlPlan_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
