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


export class PFMEAFailureAnalysisLibrary_p extends DetailsPageBase {
  get _FailureEffectEndUser() {

    const { root, section } = this.fieldRootInSection(`FailureEffectEndUser_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureEffectShiptoPlant() {

    const { root, section } = this.fieldRootInSection(`FailureEffectShiptoPlant_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FailureEffectYourPlant() {

    const { root, section } = this.fieldRootInSection(`PotentialEffectsOfFailure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureMode() {

    const { root, section } = this.fieldRootInSection(`PotentialFailureMode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessItemSystemsubsystemEndUser() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessItemEndUser_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessItemSystemsubsystemShiptoPlant() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessItemShPlant_f`, `General`);

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

  get InactiveSpecification() {

    const { root, section } = this.fieldRootInSection(`InactiveSpecification_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RPN() {

    const { root, section } = this.fieldRootInSection(`RPN_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _SafetyRegulatory() {

    const { root, section } = this.fieldRootInSection(`SafteyRegulatory_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get BestDetection() {

    const { root, section } = this.fieldRootInSection(`Detection_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get BestOccurrence() {

    const { root, section } = this.fieldRootInSection(`MaxOccurence_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FunctionofProcessWorkElementFunctional() {

    const { root, section } = this.fieldRootInSection(`FunctionofProcessWorkElemen_f`, `General`);

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

    const { root, section } = this.fieldRootInSection(`Specification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Severity() {

    const { root, section } = this.fieldRootInSection(`Severity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecialClassification() {

    const { root, section } = this.fieldRootInSection(`SpecialClassification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Optimizations() {

    const { root, section } = this.fieldRootInSection(`RecommendedActionsTaken2_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PotentialCauses() {

    const { root, section } = this.fieldRootInSection(`PotentialCauses_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CAPAs() {

    const { root, section } = this.fieldRootInSection(`CAPAs_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
