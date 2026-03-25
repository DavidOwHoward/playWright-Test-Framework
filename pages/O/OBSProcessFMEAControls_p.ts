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


export class OBSProcessFMEAControls_p extends DetailsPageBase {
  get _sDetectionPreventionorLibraryDesignControl() {

    const { root, section } = this.fieldRootInSection(`sDetectionPreventionorLibra_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlDescription() {

    const { root, section } = this.fieldRootInSection(`ControlDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Detection() {

    const { root, section } = this.fieldRootInSection(`Detection_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Prevention() {

    const { root, section } = this.fieldRootInSection(`Prevention_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DetectionLevel() {

    const { root, section } = this.fieldRootInSection(`DetectionLevel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryDesignControl() {

    const { root, section } = this.fieldRootInSection(`LibraryDesignControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceLevel() {

    const { root, section } = this.fieldRootInSection(`OccurrenceLevel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PotentialCause() {

    const { root, section } = this.fieldRootInSection(`PotentialCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
