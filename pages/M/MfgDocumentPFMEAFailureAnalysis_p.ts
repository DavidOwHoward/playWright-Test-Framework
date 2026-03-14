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


export class MfgDocumentPFMEAFailureAnalysis_p extends DetailsPageBase {
  get AcceptWarning() {

    const { root, section } = this.fieldRootInSection(`AcceptWarning_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get UpdatefromLibrary() {

    const { root, section } = this.fieldRootInSection(`UpdatefromLibrary_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get WarningLabel() {

    const { root, section } = this.fieldRootInSection(`WarningLabel_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureEffectEndUser() {

    const { root, section } = this.fieldRootInSection(`FailureEffectEndUser_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureEffectShiptoPlant() {

    const { root, section } = this.fieldRootInSection(`FailureEffectShiptoPlant_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureEffectYourPlant() {

    const { root, section } = this.fieldRootInSection(`PotentialEffectsofFailure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureMode() {

    const { root, section } = this.fieldRootInSection(`PotentialFailureMode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureSequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
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

  get RPN() {

    const { root, section } = this.fieldRootInSection(`RPN_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _SafetyRegulatory() {

    const { root, section } = this.fieldRootInSection(`SafetyRegulatory_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryProcessFMEA() {

    const { root, section } = this.fieldRootInSection(`LibraryProcessFMEA_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignSystem() {

    const { root, section } = this.fieldRootInSection(`DesignSystem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Detection() {

    const { root, section } = this.fieldRootInSection(`Detection_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEAFailureAnalysis() {

    const { root, section } = this.fieldRootInSection(`DFMEAFailureAnalysis_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FunctionofProcessWorkElement() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessWorkElemen_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`SYS4thEditionManufacturingD_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Occurrence() {

    const { root, section } = this.fieldRootInSection(`Occurrance_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorityLevel() {

    const { root, section } = this.fieldRootInSection(`PriorityLevel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessItemSystemSubsystemStructural() {

    const { root, section } = this.fieldRootInSection(`ProcessItemSystemSubsystemS_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessStepNameStructural() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessWorkElementStructural() {

    const { root, section } = this.fieldRootInSection(`ProcessWorkElementStructura_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Requirement() {

    const { root, section } = this.fieldRootInSection(`Requirement_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Severity() {

    const { root, section } = this.fieldRootInSection(`Severity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SeverityDFMEA() {

    const { root, section } = this.fieldRootInSection(`DesignSeverity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecialClassification() {

    const { root, section } = this.fieldRootInSection(`SpecialClassification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SpecialClassification() {

    const { root, section } = this.fieldRootInSection(`SpecialClassificationReq_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureCausesoftheWorkElements() {

    const { root, section } = this.fieldRootInSection(`PotentialCauses_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Optimizations() {

    const { root, section } = this.fieldRootInSection(`RecommendedActionsTaken_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CAPAs() {

    const { root, section } = this.fieldRootInSection(`CAPAs_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
