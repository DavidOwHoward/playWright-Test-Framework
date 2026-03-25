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


export class FiveWhyAnalysis_p extends DetailsPageBase {
  get EscapeWhy1() {

    const { root, section } = this.fieldRootInSection(`EscapeWhy1_f`, `Escape Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeWhy2() {

    const { root, section } = this.fieldRootInSection(`EscapeWhy2_f`, `Escape Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeWhy3() {

    const { root, section } = this.fieldRootInSection(`EscapeWhy3_f`, `Escape Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeWhy4() {

    const { root, section } = this.fieldRootInSection(`EscapeWhy4_f`, `Escape Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscapeWhy5() {

    const { root, section } = this.fieldRootInSection(`EscapeWhy5_f`, `Escape Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceWhy1() {

    const { root, section } = this.fieldRootInSection(`OccurrenceWhy1_f`, `Occurrence Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceWhy2() {

    const { root, section } = this.fieldRootInSection(`OccurrenceWhy2_f`, `Occurrence Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceWhy3() {

    const { root, section } = this.fieldRootInSection(`OccurrenceWhy3_f`, `Occurrence Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceWhy4() {

    const { root, section } = this.fieldRootInSection(`OccurrenceWhy4_f`, `Occurrence Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get OccurrenceWhy5() {

    const { root, section } = this.fieldRootInSection(`OccurrenceWhy5_f`, `Occurrence Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicWhy1() {

    const { root, section } = this.fieldRootInSection(`SystemicWhy1_f`, `Systemic Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicWhy2() {

    const { root, section } = this.fieldRootInSection(`SystemicWhy2_f`, `Systemic Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicWhy3() {

    const { root, section } = this.fieldRootInSection(`SystemicWhy3_f`, `Systemic Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicWhy4() {

    const { root, section } = this.fieldRootInSection(`SystemicWhy4_f`, `Systemic Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SystemicWhy5() {

    const { root, section } = this.fieldRootInSection(`SystemicWhy5_f`, `Systemic Analysis`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }
}
