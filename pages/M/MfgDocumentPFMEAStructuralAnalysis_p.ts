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


export class MfgDocumentPFMEAStructuralAnalysis_p extends DetailsPageBase {
  get UpdatefromLibray() {

    const { root, section } = this.fieldRootInSection(`UpdatefromLibray_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessItemSystemSubsystem() {

    const { root, section } = this.fieldRootInSection(`ProcessItemSystemSubsystem_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StructuralSequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _UseExistingProcessFlow() {

    const { root, section } = this.fieldRootInSection(`UseExistingProcessFlow_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAStructuralAnalysisLibrary() {

    const { root, section } = this.fieldRootInSection(`PFMEAStructuralAnalysisLibr_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFlow() {

    const { root, section } = this.fieldRootInSection(`ProcessFlow_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessStepName() {

    const { root, section } = this.fieldRootInSection(`ProcessStepName_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAFunctionalAnalysis() {

    const { root, section } = this.fieldRootInSection(`PFMEAFunctionalAnalysis_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessWorkElements() {

    const { root, section } = this.fieldRootInSection(`ProcessWorkElements_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
