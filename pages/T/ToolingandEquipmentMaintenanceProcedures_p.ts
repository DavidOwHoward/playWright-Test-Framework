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


export class ToolingandEquipmentMaintenanceProcedures_p extends DetailsPageBase {
  get CurrentUsagePercent() {

    const { root, section } = this.fieldRootInSection(`CurrentUsagePercent_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentUsageValue() {

    const { root, section } = this.fieldRootInSection(`CurrentUsageValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _EstTimetoComplete() {

    const { root, section } = this.fieldRootInSection(`EstTimetoComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MeterStartingValue() {

    const { root, section } = this.fieldRootInSection(`MeterStartingValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PMIntervalValue() {

    const { root, section } = this.fieldRootInSection(`PMIntervalValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PMType() {

    const { root, section } = this.fieldRootInSection(`PMType_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RateperDay() {

    const { root, section } = this.fieldRootInSection(`RateperDay_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiredDowntime() {

    const { root, section } = this.fieldRootInSection(`RequiredDowntime_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AssetMeter() {

    const { root, section } = this.fieldRootInSection(`AssetMeter_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultPriority() {

    const { root, section } = this.fieldRootInSection(`GeneralizedCode_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultSingleResponsibility() {

    const { root, section } = this.fieldRootInSection(`DefaultSingleResponsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultTeamResponsibility() {

    const { root, section } = this.fieldRootInSection(`DefaultTeamResponsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MaintenanceProcedure() {

    const { root, section } = this.fieldRootInSection(`MaintenanceProcedure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MeterUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`MeterUnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipment() {

    const { root, section } = this.fieldRootInSection(`Equipment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PartsList() {

    const { root, section } = this.fieldRootInSection(`PartsList_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
