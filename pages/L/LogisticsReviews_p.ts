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


export class LogisticsReviews_p extends DetailsPageBase {
  get RFQRound() {

    const { root, section } = this.fieldRootInSection(`RFQRound_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReviewCompletedDateTime() {

    const { root, section } = this.fieldRootInSection(`ReviewCompletedDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReviewInitiatedDateTime() {

    const { root, section } = this.fieldRootInSection(`ReviewInitiatedDateTime_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `Review Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationWorksheetDetails() {

    const { root, section } = this.fieldRootInSection(`TransportationWorksheetDeta_f`, `Review Information`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationWorksheet() {

    const { root, section } = this.fieldRootInSection(`TransportationWorksheet_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Reviewer() {

    const { root, section } = this.fieldRootInSection(`Reviewer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
