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


export class NewDrawingRequests_p extends DetailsPageBase {
  get ConverttoPDF() {

    const { root, section } = this.fieldRootInSection(`ConverttoPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DrawingFile() {

    const { root, section } = this.fieldRootInSection(`DrawingFile_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get DrawingNumber() {

    const { root, section } = this.fieldRootInSection(`DrawingNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DrawingTitle() {

    const { root, section } = this.fieldRootInSection(`DrawingTitle_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestrictedWarning() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get RestrictPDF() {

    const { root, section } = this.fieldRootInSection(`RestrictPDF_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequest() {

    const { root, section } = this.fieldRootInSection(`ChangeRequest_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DrawingType() {

    const { root, section } = this.fieldRootInSection(`DrawingType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewDrawing() {

    const { root, section } = this.fieldRootInSection(`NewDrawing_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
