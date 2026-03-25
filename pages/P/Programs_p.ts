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


export class Programs_p extends DetailsPageBase {
  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramCode() {

    const { root, section } = this.fieldRootInSection(`ProgramCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramName() {

    const { root, section } = this.fieldRootInSection(`Program_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Revision() {

    const { root, section } = this.fieldRootInSection(`Revision_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CPVPercentIncrease() {

    const { root, section } = this.fieldRootInSection(`CPVPercentIncrease_f`, `Capacity and Financial Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get FPVAverageAnnualVolume() {

    const { root, section } = this.fieldRootInSection(`FPVAverageAnnualVolume_f`, `Capacity and Financial Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MAXCPVWeekly() {

    const { root, section } = this.fieldRootInSection(`MAXCPVWeekly_f`, `Capacity and Financial Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalFPV() {

    const { root, section } = this.fieldRootInSection(`TotalFPV_f`, `Capacity and Financial Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get EOPDate() {

    const { root, section } = this.fieldRootInSection(`EOPDate_f`, `Program Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PPAPRequiredDate() {

    const { root, section } = this.fieldRootInSection(`PPAPRequiredDate_f`, `Program Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Program1stOffSamplesRequiredDate() {

    const { root, section } = this.fieldRootInSection(`Program1stOffSamplesRequire_f`, `Program Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Program1stOffToolRequiredDate() {

    const { root, section } = this.fieldRootInSection(`Program1stOffToolRequiredDa_f`, `Program Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PrototypeDate() {

    const { root, section } = this.fieldRootInSection(`PrototypeDate_f`, `Program Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SOPDate() {

    const { root, section } = this.fieldRootInSection(`SOPDate_f`, `Program Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingDate() {

    const { root, section } = this.fieldRootInSection(`ToolingDate_f`, `Program Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SavetheProgrambeforeopeningProgramItem() {

    const { root, section } = this.fieldRootInSection(`SavetheProgrambeforeopening_f`, `Program Item Information`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `Program Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductLine() {

    const { root, section } = this.fieldRootInSection(`ProductLine_f`, `Program Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramCurrency() {

    const { root, section } = this.fieldRootInSection(`ProgramCurrency_f`, `Program Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramEngineer() {

    const { root, section } = this.fieldRootInSection(`ProgramEngineer_f`, `Program Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramManager() {

    const { root, section } = this.fieldRootInSection(`ProgramManager_f`, `Program Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramType() {

    const { root, section } = this.fieldRootInSection(`ProgramType_f`, `Program Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQPlanner() {

    const { root, section } = this.fieldRootInSection(`RFQPlanner_f`, `Program Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CPV() {

    const { root, section } = this.fieldRootInSection(`CPV_f`, `Capacity and Financial Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get FPV() {

    const { root, section } = this.fieldRootInSection(`FPV_f`, `Capacity and Financial Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Domains() {

    const { root, section } = this.fieldRootInSection(`Domains_f`, `Program Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entities() {

    const { root, section } = this.fieldRootInSection(`BusinessEntities_f`, `Program Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `Program Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItems() {

    const { root, section } = this.fieldRootInSection(`ProgramItems_f`, `Program Item Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PQMPlans() {

    const { root, section } = this.fieldRootInSection(`PQMPlans_f`, `Program Information`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
