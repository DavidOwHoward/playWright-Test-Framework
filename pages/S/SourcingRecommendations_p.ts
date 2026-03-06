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


export class SourcingRecommendations_p extends DetailsPageBase {
  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SourcingRecommendationID() {

    const { root, section } = this.fieldRootInSection(`SourcingRecommendationID_f`, `[Frozen Section]`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Approval() {

    const { root, section } = this.fieldRootInSection(`Approval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalDueDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalDueDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Buyer() {

    const { root, section } = this.fieldRootInSection(`Buyer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramQuoteManagementPlan() {

    const { root, section } = this.fieldRootInSection(`RFQManagementPlan_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroup() {

    const { root, section } = this.fieldRootInSection(`ItemGroup_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ApproverListLevel1() {

    const { root, section } = this.fieldRootInSection(`ApproverListLevel1_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ApproverListLevel2() {

    const { root, section } = this.fieldRootInSection(`ApproverListLevel2_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ApproverListLevel3() {

    const { root, section } = this.fieldRootInSection(`ApproverListLevel3_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProgramAwards() {

    const { root, section } = this.fieldRootInSection(`RFQAwards_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RecommendedRFQProposals() {

    const { root, section } = this.fieldRootInSection(`RecommendedRFQProposals_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
