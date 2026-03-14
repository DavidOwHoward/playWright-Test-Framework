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


export class GaugeStudyStandards_p extends DetailsPageBase {
  get ReferenceValue() {

    const { root, section } = this.fieldRootInSection(`ReferenceValue_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardDescription() {

    const { root, section } = this.fieldRootInSection(`StandardDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardID() {

    const { root, section } = this.fieldRootInSection(`StandardID_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TargetReference() {

    const { root, section } = this.fieldRootInSection(`TargetReference_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationStandard() {

    const { root, section } = this.fieldRootInSection(`CalibrationStandard_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeStudy() {

    const { root, section } = this.fieldRootInSection(`GaugeStudy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RelatedSample() {

    const { root, section } = this.fieldRootInSection(`RelatedSample_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
