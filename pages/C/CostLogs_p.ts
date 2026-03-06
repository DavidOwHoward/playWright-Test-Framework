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


export class CostLogs_p extends DetailsPageBase {
  get EntryDate() {

    const { root, section } = this.fieldRootInSection(`EntryDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Quantity() {

    const { root, section } = this.fieldRootInSection(`Quantity_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Total() {

    const { root, section } = this.fieldRootInSection(`Total_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitCost() {

    const { root, section } = this.fieldRootInSection(`UnitCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CostAccount() {

    const { root, section } = this.fieldRootInSection(`CostAccount_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CPRTask() {

    const { root, section } = this.fieldRootInSection(`CPRTask_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
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

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkCenter() {

    const { root, section } = this.fieldRootInSection(`WorkCenter_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ContainmentAction() {

    const { root, section } = this.fieldRootInSection(`ContainmentAction_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Gauge() {

    const { root, section } = this.fieldRootInSection(`Gauge_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Issue() {

    const { root, section } = this.fieldRootInSection(`Issue_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Nonconformance() {

    const { root, section } = this.fieldRootInSection(`Nonconformance_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`NewProductDevelopment_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProjectTask() {

    const { root, section } = this.fieldRootInSection(`NewProductDevelopmentTask_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingEvent() {

    const { root, section } = this.fieldRootInSection(`TrainingEvent_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrderPreventive() {

    const { root, section } = this.fieldRootInSection(`WorkOrderPreventive_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrderReactive() {

    const { root, section } = this.fieldRootInSection(`WorkOrderReactive_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
