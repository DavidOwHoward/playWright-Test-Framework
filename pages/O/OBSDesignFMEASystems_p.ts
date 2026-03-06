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


export class OBSDesignFMEASystems_p extends DetailsPageBase {
  get SystemCode() {

    const { root, section } = this.fieldRootInSection(`SystemCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemName() {

    const { root, section } = this.fieldRootInSection(`SystemName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DisplayExpression() {

    const { root, section } = this.fieldRootInSection(`DisplayExpression_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemImage() {

    const { root, section } = this.fieldRootInSection(`SystemImage_f`, `General`);

    return new Picture(this.page, root, async () => section.openAndWait(root));
  }

  get ControlFactors() {

    const { root, section } = this.fieldRootInSection(`ControlFactors_f`, `P-Diagram Control Factors`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InputSignal() {

    const { root, section } = this.fieldRootInSection(`InputSignal_f`, `P-Diagram Input Signal`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangesOverTime() {

    const { root, section } = this.fieldRootInSection(`ChangesOverTime_f`, `P-Diagram Noise Factors`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerUsage() {

    const { root, section } = this.fieldRootInSection(`CustomerUsage_f`, `P-Diagram Noise Factors`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalEnvironment() {

    const { root, section } = this.fieldRootInSection(`ExternalEnvironment_f`, `P-Diagram Noise Factors`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PiecetoPieceVariation() {

    const { root, section } = this.fieldRootInSection(`PiecetoPieceVariation_f`, `P-Diagram Noise Factors`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemInteractions() {

    const { root, section } = this.fieldRootInSection(`SystemInteractions_f`, `P-Diagram Noise Factors`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ErrorStates() {

    const { root, section } = this.fieldRootInSection(`ErrorStates_f`, `P-Diagram Output Response and Error States`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OutputResponse() {

    const { root, section } = this.fieldRootInSection(`OutputResponse_f`, `P-Diagram Output Response and Error States`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SubSystems() {

    const { root, section } = this.fieldRootInSection(`SubSystems_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SystemFunctions() {

    const { root, section } = this.fieldRootInSection(`SystemFunctions_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
