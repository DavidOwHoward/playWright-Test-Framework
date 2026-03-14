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


export class MfgDocumentDFMEAFailureAnalysis_p extends DetailsPageBase {
  get UpdatefromLibrary() {

    const { root, section } = this.fieldRootInSection(`UpdatefromLibrary_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureEffects() {

    const { root, section } = this.fieldRootInSection(`FailureEffects_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureMode() {

    const { root, section } = this.fieldRootInSection(`Failuremode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FocusElementFunctional() {

    const { root, section } = this.fieldRootInSection(`FocusElementFunctional_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FocusElementStructural() {

    const { root, section } = this.fieldRootInSection(`FocusElementStructural_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NextHigherLevelStructural() {

    const { root, section } = this.fieldRootInSection(`NextHigherLevelStructural_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NextLowerLevelFunctional() {

    const { root, section } = this.fieldRootInSection(`NextLowerLevelFunctional_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NextLowerLevelStructural() {

    const { root, section } = this.fieldRootInSection(`NextLowerLevelStructural_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RPNLevel() {

    const { root, section } = this.fieldRootInSection(`RPNLevel_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEAFailureAnalysisLibrary() {

    const { root, section } = this.fieldRootInSection(`DFMEAFailureAnalysisLibrary_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Detection() {

    const { root, section } = this.fieldRootInSection(`Detection_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NextHigherLevelFunctional() {

    const { root, section } = this.fieldRootInSection(`NextHigherLevelFunctional_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Occurrence() {

    const { root, section } = this.fieldRootInSection(`Occurrence_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Severity() {

    const { root, section } = this.fieldRootInSection(`Severity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureCauses() {

    const { root, section } = this.fieldRootInSection(`PotentialCauses_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FMEAMSR() {

    const { root, section } = this.fieldRootInSection(`FMEAMSR_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
