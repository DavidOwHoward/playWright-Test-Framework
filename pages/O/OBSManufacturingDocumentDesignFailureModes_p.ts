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


export class OBSManufacturingDocumentDesignFailureModes_p extends DetailsPageBase {
  get FunctionScrField() {

    const { root, section } = this.fieldRootInSection(`Function_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Requirement() {

    const { root, section } = this.fieldRootInSection(`Requirement_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SystemorSubsystem() {

    const { root, section } = this.fieldRootInSection(`SystemorSubsystem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DFMEAPotentialFailureModesEffectsCausesandRecommendedActions() {

    const { root, section } = this.fieldRootInSection(`DFMEAFailureModesEffectsCau_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturingDocumentProcessFMEAs() {

    const { root, section } = this.fieldRootInSection(`ManufacturingdocumentProces_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
