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


export class PFMEAFunctionalAnalysisWorkElementsLibrary_p extends DetailsPageBase {
  get FunctionoftheProcessWorkElements() {

    const { root, section } = this.fieldRootInSection(`FunctionoftheProcessWorkEle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InactiveSpecificationName() {

    const { root, section } = this.fieldRootInSection(`InactiveSpecificationName_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAFunctionalAnalysisLibrary() {

    const { root, section } = this.fieldRootInSection(`PFMEAFunctionalAnalysisLibr_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessCharacteristicSpecification() {

    const { root, section } = this.fieldRootInSection(`ProcessCharacteristicSpecif_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessWorkElement() {

    const { root, section } = this.fieldRootInSection(`ProcessWorkElement_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
