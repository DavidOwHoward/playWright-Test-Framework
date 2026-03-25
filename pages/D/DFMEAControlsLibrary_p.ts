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


export class DFMEAControlsLibrary_p extends DetailsPageBase {
  get ConfirmationofCurrentPreventandDetectionControlsComments() {

    const { root, section } = this.fieldRootInSection(`ConfirmationofCurrentPreven_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentDetectionControlofFailureCauseorFailureMode() {

    const { root, section } = this.fieldRootInSection(`CurrentDetectionControlofFa_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentPreventionControlofFailureCause() {

    const { root, section } = this.fieldRootInSection(`CurrentPreventionControlofF_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DetectionofFailureCause() {

    const { root, section } = this.fieldRootInSection(`DetectionofFailureCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEACause() {

    const { root, section } = this.fieldRootInSection(`DFMEACause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceofFailureCause() {

    const { root, section } = this.fieldRootInSection(`OccurrenceofFailureCause_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
