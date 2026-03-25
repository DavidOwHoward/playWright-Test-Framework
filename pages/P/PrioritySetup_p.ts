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


export class PrioritySetup_p extends DetailsPageBase {
  get DefaultDaysforActionApprovalstate() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforActionApprova_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforActionPlanningstate() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforActionPlannin_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforFinalApprovalstate() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforFinalApproval_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _DefaultDaysforInProcessstate() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforInProcessstat_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforNew() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforNew_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforReadyforCRBreviewstate() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforReadyforCRBre_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDaysforReviewstate() {

    const { root, section } = this.fieldRootInSection(`DefaultDaysforReviewstate_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorityLevel() {

    const { root, section } = this.fieldRootInSection(`PriorityLevel_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PriorityLevelDescription() {

    const { root, section } = this.fieldRootInSection(`PriorityLevelDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Setasdefaultforallnewcomplaints() {

    const { root, section } = this.fieldRootInSection(`Setasdefaultforallnewcompla_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
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
}
