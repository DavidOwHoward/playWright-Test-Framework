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


export class NotificationGroups_p extends DetailsPageBase {
  get DefaultforCAPA() {

    const { root, section } = this.fieldRootInSection(`DefaultforCAPA_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultforDeviations() {

    const { root, section } = this.fieldRootInSection(`DefaultforDeviations_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultforIncidentInvestigations() {

    const { root, section } = this.fieldRootInSection(`DefaultforInvestigations_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _DefaultforNonconformance() {

    const { root, section } = this.fieldRootInSection(`DefaultforNonconformance_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultforQualityAlerts() {

    const { root, section } = this.fieldRootInSection(`DefaultforQualityAlerts_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultforRiskEvents() {

    const { root, section } = this.fieldRootInSection(`DefaultforRiskEvents_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationGroupName() {

    const { root, section } = this.fieldRootInSection(`NotificationGroupName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

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

  get NotificationList() {

    const { root, section } = this.fieldRootInSection(`NotificationList_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
