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


export class MfgDocumentDFMEAControls_p extends DetailsPageBase {
  get UpdatefromLibrary() {

    const { root, section } = this.fieldRootInSection(`LibraryDesign_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ConfirmationofCurrentPreventandDetectionControlsComments() {

    const { root, section } = this.fieldRootInSection(`ConfirmationofCurrentPreven_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryDFMEAControl() {

    const { root, section } = this.fieldRootInSection(`LibraryDFMEAControl_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentDetectionControlofFailureCauseorFailureMode() {

    const { root, section } = this.fieldRootInSection(`CurrentDetectionControlofFa_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentPreventionControlofFailureCause() {

    const { root, section } = this.fieldRootInSection(`CurrentPreventionControlofF_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DetectionLevel() {

    const { root, section } = this.fieldRootInSection(`DetectionLevel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEACause() {

    const { root, section } = this.fieldRootInSection(`PotentialCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceLevel() {

    const { root, section } = this.fieldRootInSection(`OccurrenceLevel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
