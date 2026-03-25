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


export class DFMEAFailureAnalysisLibrary_p extends DetailsPageBase {
  get FailureEffects() {

    const { root, section } = this.fieldRootInSection(`FailureEffects_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureMode() {

    const { root, section } = this.fieldRootInSection(`FailureMode_f`, `General`);

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

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
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

    const { root, section } = this.fieldRootInSection(`RPN_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Detection() {

    const { root, section } = this.fieldRootInSection(`Detection_f`, `General`);

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

    const { root, section } = this.fieldRootInSection(`FailureCauses_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
