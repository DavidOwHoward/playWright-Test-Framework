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


export class FamilyPFMEAFunctionalAnalysis_p extends DetailsPageBase {
  get UpdatefromLibrary() {

    const { root, section } = this.fieldRootInSection(`UpdatefromLibrary_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessItemSystemsubsystemEndUser() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessItemEndUser_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessItemSystemsubsystemShiptoPlant() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessItemPlant_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessItemSystemsubsystemYourPlant() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessItemSystem_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessStepProductCharacteristic() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessStepProduc_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessWorkElementsStructural() {

    const { root, section } = this.fieldRootInSection(`ProcessWorkElementsStructur_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UnlinkedPFMEAFailureAnalysis() {

    const { root, section } = this.fieldRootInSection(`UnlinkedPFMEAFailureAnalysi_f`, `General`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAFunctionalAnalysisLibrary() {

    const { root, section } = this.fieldRootInSection(`PFMEAFunctionalAnalysisLibr_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FamilyTemplate() {

    const { root, section } = this.fieldRootInSection(`FamilyTemplate_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessItemSystemSubsystemStructural() {

    const { root, section } = this.fieldRootInSection(`ProcessItemSystemSubsystemS_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessStepNameStructural() {

    const { root, section } = this.fieldRootInSection(`ProcessStepNameStructural_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessWorkElementProcessCharacteristic() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessWorkElemen_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAFailureAnalysis() {

    const { root, section } = this.fieldRootInSection(`PFMEAFailureAnalysis_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
