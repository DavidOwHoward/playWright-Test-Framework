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


export class ProcessFMEASeverityCriteria_p extends DetailsPageBase {
  get CorporateorProductLinesExamples() {

    const { root, section } = this.fieldRootInSection(`CorporateorProductLinesExam_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerEffect() {

    const { root, section } = this.fieldRootInSection(`CustomerEffect_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Effect() {

    const { root, section } = this.fieldRootInSection(`Effect_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ImpacttoEndUserwhenknown() {

    const { root, section } = this.fieldRootInSection(`ImpacttoEndUserwhenknown_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ImpacttoShiptoPlantwhenknown() {

    const { root, section } = this.fieldRootInSection(`ImpacttoShiptoPlantwhenknow_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ImpacttoYourPlant() {

    const { root, section } = this.fieldRootInSection(`ImpacttoYourPlant_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturingAssemblyEffect() {

    const { root, section } = this.fieldRootInSection(`ManufacturingAssemblyEffect_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Rank() {

    const { root, section } = this.fieldRootInSection(`Rank_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }
}
