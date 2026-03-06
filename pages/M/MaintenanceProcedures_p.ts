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


export class MaintenanceProcedures_p extends DetailsPageBase {
  get DefaultPMUsageFrequency() {

    const { root, section } = this.fieldRootInSection(`PMUsageFrequency_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _EstTimetoComplete() {

    const { root, section } = this.fieldRootInSection(`EstTimetoComplete_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcedureNumber() {

    const { root, section } = this.fieldRootInSection(`ProcedureNumber_f`, `General`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiredDowntime() {

    const { root, section } = this.fieldRootInSection(`RequiredDowntime_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartsRequired() {

    const { root, section } = this.fieldRootInSection(`PartsRequired_f`, `Procedure`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcedureInstructions() {

    const { root, section } = this.fieldRootInSection(`ProcedureInstructions_f`, `Procedure`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Version information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultPrioirty() {

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

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PMUsageUnit() {

    const { root, section } = this.fieldRootInSection(`PMUsageUnit_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrderType() {

    const { root, section } = this.fieldRootInSection(`WorkOrderType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssociatedDocuments() {

    const { root, section } = this.fieldRootInSection(`AssociatedDocuments_f`, `Procedure`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PartsList() {

    const { root, section } = this.fieldRootInSection(`PartsList_f`, `Procedure`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolingEquipmentMaintenanceProcedures() {

    const { root, section } = this.fieldRootInSection(`EquipmentMaintenanceProcedu_f`, `Tooling & Equipment`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
