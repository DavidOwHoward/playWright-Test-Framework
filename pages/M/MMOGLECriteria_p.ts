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


export class MMOGLECriteria_p extends DetailsPageBase {
  get CriterionNo() {

    const { root, section } = this.fieldRootInSection(`CriterionNo_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _RequirementCriterion() {

    const { root, section } = this.fieldRootInSection(`RequirementCriterion_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CriterionDescription() {

    const { root, section } = this.fieldRootInSection(`CriterionDescription_f`, `Reference`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QADDescription() {

    const { root, section } = this.fieldRootInSection(`QADDescription_f`, `Reference`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QADEOBProcessMap() {

    const { root, section } = this.fieldRootInSection(`QADEOBProcessMap_f`, `Reference`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ChapterSubchapter() {

    const { root, section } = this.fieldRootInSection(`ChapterSubchapter_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Weight() {

    const { root, section } = this.fieldRootInSection(`Weight_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AssessmentTypes() {

    const { root, section } = this.fieldRootInSection(`AssessmentTypes_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
