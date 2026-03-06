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


export class FDAProductCodes_p extends DetailsPageBase {
  get Definition() {

    const { root, section } = this.fieldRootInSection(`Definition_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceClass() {

    const { root, section } = this.fieldRootInSection(`DeviceClass_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DeviceName() {

    const { root, section } = this.fieldRootInSection(`DeviceName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GMPExemptFlag() {

    const { root, section } = this.fieldRootInSection(`GMPExemptFlag_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductCode() {

    const { root, section } = this.fieldRootInSection(`ProductCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RegulationNumber() {

    const { root, section } = this.fieldRootInSection(`RegulationNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ThirdPartyReviewEligible() {

    const { root, section } = this.fieldRootInSection(`ThirdPartyReviewEligible_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MedicalSpecialty() {

    const { root, section } = this.fieldRootInSection(`MedicalSpecialty_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewPanel() {

    const { root, section } = this.fieldRootInSection(`ReviewPanel_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SubmissionType() {

    const { root, section } = this.fieldRootInSection(`SubmissionType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnclassifiedReasonCode() {

    const { root, section } = this.fieldRootInSection(`UnclassifiedReasonCode_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
