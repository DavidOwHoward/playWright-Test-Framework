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


export class MfgDocumentFMEAMSRMonitoringResponse_p extends DetailsPageBase {
  get MostSevereFailureEffect() {

    const { root, section } = this.fieldRootInSection(`MostSevereFailureEffect_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RationaleforFrequency() {

    const { root, section } = this.fieldRootInSection(`RationaleforFrequency_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentMonitoringControl() {

    const { root, section } = this.fieldRootInSection(`CurrentMonitoringControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentSystemResponse() {

    const { root, section } = this.fieldRootInSection(`CurrentSystemResponse_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignFailure() {

    const { root, section } = this.fieldRootInSection(`DesignFailure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FrequencyofFailureCause() {

    const { root, section } = this.fieldRootInSection(`FrequencyofFailureCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MonitoringofFailureCause() {

    const { root, section } = this.fieldRootInSection(`MonitoringofFailureCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get MSRCause() {

    const { root, section } = this.fieldRootInSection(`MSRCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SeverityAfterMSR() {

    const { root, section } = this.fieldRootInSection(`SeverityAfterMSR_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
