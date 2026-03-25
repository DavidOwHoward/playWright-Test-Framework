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


export class FDAAnnexB_p extends DetailsPageBase {
  get CodeHierarchy() {

    const { root, section } = this.fieldRootInSection(`CodeHierarchy_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FDACode() {

    const { root, section } = this.fieldRootInSection(`FDACode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get IMDRFCode() {

    const { root, section } = this.fieldRootInSection(`IMDRFCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get NCItCode() {

    const { root, section } = this.fieldRootInSection(`NCItCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Definition() {

    const { root, section } = this.fieldRootInSection(`Definition_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Level1Term() {

    const { root, section } = this.fieldRootInSection(`Level1Term_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonIMDRFCodeTerm() {

    const { root, section } = this.fieldRootInSection(`NonIMDRFCodeTerm_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StatusDescription() {

    const { root, section } = this.fieldRootInSection(`StatusDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }
}
