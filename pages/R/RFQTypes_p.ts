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


export class RFQTypes_p extends DetailsPageBase {
  get _PlanApprovalRequired() {

    const { root, section } = this.fieldRootInSection(`RFQManagementPlanApprovalRe_f`, `Approval Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDueDays() {

    const { root, section } = this.fieldRootInSection(`DefaultRFQDueDateLeadTime_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQType() {

    const { root, section } = this.fieldRootInSection(`RFQPlanType_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateRFQAward() {

    const { root, section } = this.fieldRootInSection(`CreateRFQAward_f`, `Workflow Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _RequireLogisticsReview() {

    const { root, section } = this.fieldRootInSection(`RFQLogisticsReviewsRequired_f`, `Workflow Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _RequireToolingReview() {

    const { root, section } = this.fieldRootInSection(`RFQToolingReviewsRequired_f`, `Workflow Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get EngineeringDesignWorksheet() {

    const { root, section } = this.fieldRootInSection(`EngineeringDesignWorksheet_f`, `Worksheet Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get FeasibilityWorksheet() {

    const { root, section } = this.fieldRootInSection(`FeasibilityWorksheet_f`, `Worksheet Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialCapacityWorksheet() {

    const { root, section } = this.fieldRootInSection(`InitialCapacityWorksheet_f`, `Worksheet Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingWorksheet() {

    const { root, section } = this.fieldRootInSection(`PackagingWorksheet_f`, `Worksheet Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PartWorksheet() {

    const { root, section } = this.fieldRootInSection(`PartWorksheet_f`, `Worksheet Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingWorksheet() {

    const { root, section } = this.fieldRootInSection(`ToolingWorksheet_f`, `Worksheet Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationWorksheet() {

    const { root, section } = this.fieldRootInSection(`TransportationWorksheet_f`, `Worksheet Options`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get WorksheetOptionLabel() {

    const { root, section } = this.fieldRootInSection(`WorksheetOptionLabel_f`, `Worksheet Options`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get PlanApprovers() {

    const { root, section } = this.fieldRootInSection(`RFQManagementPlanApprovers_f`, `Approval Options`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
