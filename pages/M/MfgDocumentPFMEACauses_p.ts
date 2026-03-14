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


export class MfgDocumentPFMEACauses_p extends DetailsPageBase {
  get OccurrenceandDetectionLabel() {

    const { root, section } = this.fieldRootInSection(`ToproperlycalculateRPNatlea_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get UpdatefromLibrary() {

    const { root, section } = this.fieldRootInSection(`LibraryDesign_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get AddControl() {

    const { root, section } = this.fieldRootInSection(`AddControl_f`, `General`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get CauseSequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PotentialCauseofFailure() {

    const { root, section } = this.fieldRootInSection(`PotentialCauseofFailure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEACausesLibrary() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEACausesLibrary_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ActionPriorityAP() {

    const { root, section } = this.fieldRootInSection(`PFMEA_AP_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ApplicableWorkElement() {

    const { root, section } = this.fieldRootInSection(`ApplicableWorkElement_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get BaselineOccurrence() {

    const { root, section } = this.fieldRootInSection(`BaselineOccurrence_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get BestDetection() {

    const { root, section } = this.fieldRootInSection(`BestDetection_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get BestOccurrence() {

    const { root, section } = this.fieldRootInSection(`Occurrence_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureEffectFailureMode() {

    const { root, section } = this.fieldRootInSection(`MDProcessFMEA_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Controls() {

    const { root, section } = this.fieldRootInSection(`Controls_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProblemCauseCodes() {

    const { root, section } = this.fieldRootInSection(`ProblemCauseCodes_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
