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
import { PictureField } from '../../components/fields/PictureField';


export class SupplierPerformanceReviewResults_p extends DetailsPageBase {
  get _DescriptionNotes() {

    const { root, section } = this.fieldRootInSection(`DescriptionNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PerformanceIndicatorCode() {

    const { root, section } = this.fieldRootInSection(`PerfIndicatorCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PerformanceIndicatorName() {

    const { root, section } = this.fieldRootInSection(`PerfIndicatorName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewComments() {

    const { root, section } = this.fieldRootInSection(`ReviewComments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Score() {

    const { root, section } = this.fieldRootInSection(`Score_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
