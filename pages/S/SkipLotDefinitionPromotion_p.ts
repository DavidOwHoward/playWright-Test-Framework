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


export class SkipLotDefinitionPromotion_p extends DetailsPageBase {
  get CurrentInspectionStations() {

    const { root, section } = this.fieldRootInSection(`CurrentInspectionStations_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentInspectionType() {

    const { root, section } = this.fieldRootInSection(`CurrentInspectionType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentProcess() {

    const { root, section } = this.fieldRootInSection(`CurrentProcess_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NewInspectionStations() {

    const { root, section } = this.fieldRootInSection(`NewInspectionStations_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NewInspectionType() {

    const { root, section } = this.fieldRootInSection(`NewInspectionType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NewProcess() {

    const { root, section } = this.fieldRootInSection(`NewProcess_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SkipLotRuleSites() {

    const { root, section } = this.fieldRootInSection(`SkipLotRuleSites_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Valid() {

    const { root, section } = this.fieldRootInSection(`Valid_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentInspectionDefinition() {

    const { root, section } = this.fieldRootInSection(`CurrentInspectionDefinition_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewInspectionDefinition() {

    const { root, section } = this.fieldRootInSection(`NewInspectionDefinition_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewManfacturingDocument() {

    const { root, section } = this.fieldRootInSection(`NewManfacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SkipLotRulePart() {

    const { root, section } = this.fieldRootInSection(`SkipLotRule_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
