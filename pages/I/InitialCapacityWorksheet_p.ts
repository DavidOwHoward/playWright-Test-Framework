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


export class InitialCapacityWorksheet_p extends DetailsPageBase {
  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CPVWeekly() {

    const { root, section } = this.fieldRootInSection(`CPVWeekly_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _LabelCapacity() {

    const { root, section } = this.fieldRootInSection(`LabelCapacity_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get MaxDaysperWeek() {

    const { root, section } = this.fieldRootInSection(`MaxDaysperWeek_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MaxHoursperDay() {

    const { root, section } = this.fieldRootInSection(`MaxHoursperDay_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MaxPartsperHour() {

    const { root, section } = this.fieldRootInSection(`MaxPartsperHour_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MaxPartsperWeek() {

    const { root, section } = this.fieldRootInSection(`MaxPartsperWeek_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MaxWeeksperYear() {

    const { root, section } = this.fieldRootInSection(`MaxWeeksperYear_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentofCapacityAllocated() {

    const { root, section } = this.fieldRootInSection(`PercentofCapacityAllocated_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandarddaysperWeek() {

    const { root, section } = this.fieldRootInSection(`StandarddaysperWeek_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardHoursperDay() {

    const { root, section } = this.fieldRootInSection(`StandardHoursperDay_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardPartsperHour() {

    const { root, section } = this.fieldRootInSection(`StandardPartsperHour_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardPartsperWeek() {

    const { root, section } = this.fieldRootInSection(`StandardPartsperWeek_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardWeeksperYear() {

    const { root, section } = this.fieldRootInSection(`StandardWeeksperYear_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalWeeklyCapacity() {

    const { root, section } = this.fieldRootInSection(`TotalWeeklyCapacity_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
