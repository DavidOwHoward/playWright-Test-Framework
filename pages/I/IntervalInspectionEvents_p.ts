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


export class IntervalInspectionEvents_p extends DetailsPageBase {
  get SampleFrequencyDescription() {

    const { root, section } = this.fieldRootInSection(`SampleFrequencyDescription_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get BatchSize() {

    const { root, section } = this.fieldRootInSection(`BatchSize_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ClicktoAdjustSchedulingOptions() {

    const { root, section } = this.fieldRootInSection(`CloseSchedule_f`, `Results`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `Results`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get IntervalScheduledtoClose() {

    const { root, section } = this.fieldRootInSection(`CloseInspectionSchedule_f`, `Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`LotNumber_f`, `Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberFailed() {

    const { root, section } = this.fieldRootInSection(`NumberFailedTime_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberIncomplete() {

    const { root, section } = this.fieldRootInSection(`NumberIncompleteTime_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberPassed() {

    const { root, section } = this.fieldRootInSection(`NumberPassedTime_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ReasonforSkipping() {

    const { root, section } = this.fieldRootInSection(`SkipReason_f`, `Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Results() {

    const { root, section } = this.fieldRootInSection(`Results_f`, `Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get SkipThisInspection() {

    const { root, section } = this.fieldRootInSection(`Skip_f`, `Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionEvent() {

    const { root, section } = this.fieldRootInSection(`InspectionEvent_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPlan() {

    const { root, section } = this.fieldRootInSection(`InspectionPlan_f`, `Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessFromMfgDocument() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `Results`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
