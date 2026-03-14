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


export class MfgDocumentProcessFlow_p extends DetailsPageBase {
  get InspectionRequiresApproval() {

    const { root, section } = this.fieldRootInSection(`InspectionRequiresApproval_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessNo() {

    const { root, section } = this.fieldRootInSection(`ProcessNo_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SourcesofVariation() {

    const { root, section } = this.fieldRootInSection(`SourcesofVariation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryProcess() {

    const { root, section } = this.fieldRootInSection(`StandardProcess_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessSymbol() {

    const { root, section } = this.fieldRootInSection(`ProcessSymbol_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Specifications() {

    const { root, section } = this.fieldRootInSection(`Specifications_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedComponents() {

    const { root, section } = this.fieldRootInSection(`RelatedComponents_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
