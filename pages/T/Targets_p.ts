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


export class Targets_p extends DetailsPageBase {
  get DateGroup() {

    const { root, section } = this.fieldRootInSection(`DateGroup_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EndDate() {

    const { root, section } = this.fieldRootInSection(`EndDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDecimals() {

    const { root, section } = this.fieldRootInSection(`NumberofDecimals_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Target() {

    const { root, section } = this.fieldRootInSection(`Target_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetValue() {

    const { root, section } = this.fieldRootInSection(`TargetValue_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Year() {

    const { root, section } = this.fieldRootInSection(`Year_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DisplayFormat() {

    const { root, section } = this.fieldRootInSection(`DisplayFormat_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LatestReading() {

    const { root, section } = this.fieldRootInSection(`LatestReading_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Measure() {

    const { root, section } = this.fieldRootInSection(`Measure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReadingFrequency() {

    const { root, section } = this.fieldRootInSection(`ReadingFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ActualReadings() {

    const { root, section } = this.fieldRootInSection(`ActualReadings_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
