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


export class MfgDocumentFMEAMSRFailureAnalysis_p extends DetailsPageBase {
  get FailureEffects() {

    const { root, section } = this.fieldRootInSection(`FailureEffects_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureMode() {

    const { root, section } = this.fieldRootInSection(`FailureMode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureNetworkDiagram() {

    const { root, section } = this.fieldRootInSection(`FailureNetworkDiagram_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
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

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangesOverTime() {

    const { root, section } = this.fieldRootInSection(`ChangesOverTime_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlFactors() {

    const { root, section } = this.fieldRootInSection(`ControlFactors_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerUsage() {

    const { root, section } = this.fieldRootInSection(`CustomerUsage_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalEnvironment() {

    const { root, section } = this.fieldRootInSection(`ExternalEnvironment_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FunctionalRequirements() {

    const { root, section } = this.fieldRootInSection(`FunctionalRequirements_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Input() {

    const { root, section } = this.fieldRootInSection(`Input_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get IntendedOutput() {

    const { root, section } = this.fieldRootInSection(`IntendedOutput_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NoiseFactors() {

    const { root, section } = this.fieldRootInSection(`NoiseFactors_f`, `P-Diagram`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonFunctionalRequirements() {

    const { root, section } = this.fieldRootInSection(`NonFunctionalRequirements_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PiecetoPieceVariation() {

    const { root, section } = this.fieldRootInSection(`PiecetoPieceVariation_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemInteractions() {

    const { root, section } = this.fieldRootInSection(`SystemInteractions_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get UnintendedOutput() {

    const { root, section } = this.fieldRootInSection(`UnintendedOutput_f`, `P-Diagram`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _BestDiagnosticMonitoringM() {

    const { root, section } = this.fieldRootInSection(`BestMonitoring_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _BestFrequencyPotentialF() {

    const { root, section } = this.fieldRootInSection(`BestFrequency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignFailure() {

    const { root, section } = this.fieldRootInSection(`DesignFailure_f`, `General`);

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

  get Severity() {

    const { root, section } = this.fieldRootInSection(`Severity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureCauses() {

    const { root, section } = this.fieldRootInSection(`FailureCauses_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
