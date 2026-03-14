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


export class Manuals_p extends DetailsPageBase {
  get Manual() {

    const { root, section } = this.fieldRootInSection(`Manual_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ManualCode() {

    const { root, section } = this.fieldRootInSection(`ManualCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ReferenceVideo() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `General`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReview() {

    const { root, section } = this.fieldRootInSection(`LastReview_f`, `Manual Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDate() {

    const { root, section } = this.fieldRootInSection(`NextReviewDate_f`, `Manual Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RequiresReview() {

    const { root, section } = this.fieldRootInSection(`RequiresReview_f`, `Manual Review`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ReviewNotes_f`, `Manual Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ParentManual() {

    const { root, section } = this.fieldRootInSection(`ParentManual_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewCompletedBy() {

    const { root, section } = this.fieldRootInSection(`ReviewCompletedBy_f`, `Manual Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `Manual Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssociatedDocuments() {

    const { root, section } = this.fieldRootInSection(`AssociatedDocuments_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssociatedDrawings() {

    const { root, section } = this.fieldRootInSection(`AssociatedDrawings_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssociatedProcesses() {

    const { root, section } = this.fieldRootInSection(`AssociatedProcesses_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChildManuals() {

    const { root, section } = this.fieldRootInSection(`ChildManuals_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
