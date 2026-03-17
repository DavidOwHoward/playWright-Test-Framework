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


export class DFMEAStructuralAnalysisLibrary_p extends DetailsPageBase {
  get AcknowledgeITARRestrictionChange() {

    const { root, section } = this.fieldRootInSection(`AcknowledgeITARRestrictionC_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get BlockDiagram() {

    const { root, section } = this.fieldRootInSection(`BlockDiagram_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get BoundaryDiagram() {

    const { root, section } = this.fieldRootInSection(`BoundaryDiagram_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get InterfaceAnalysis() {

    const { root, section } = this.fieldRootInSection(`InterfaceAnalysis_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _NextLowerLevelStructure() {

    const { root, section } = this.fieldRootInSection(`NextLowerLevelStructure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StructureTree() {

    const { root, section } = this.fieldRootInSection(`StructureTree_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _FocusElementStructure() {

    const { root, section } = this.fieldRootInSection(`FocusElementStructure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NextHigherLevelStructure() {

    const { root, section } = this.fieldRootInSection(`NextHigherLevelStructure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get FunctionalAnalysis() {

    const { root, section } = this.fieldRootInSection(`FunctionalAnalysis_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
