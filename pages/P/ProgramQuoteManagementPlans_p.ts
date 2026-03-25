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


export class ProgramQuoteManagementPlans_p extends DetailsPageBase {
  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQPlanCode() {

    const { root, section } = this.fieldRootInSection(`AutoNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQPlancompletionDueDate() {

    const { root, section } = this.fieldRootInSection(`RFQPlancompletionDueDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LastUpdateDate() {

    const { root, section } = this.fieldRootInSection(`LastUpdateDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQRound() {

    const { root, section } = this.fieldRootInSection(`RFQRound_f`, `RFQ Links`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _RFQsCurrentRound() {

    const { root, section } = this.fieldRootInSection(`RFQsCurrentRound_f`, `RFQ Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _RFQsHistoricalList() {

    const { root, section } = this.fieldRootInSection(`RFQsList_f`, `RFQ Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get PlanApproval() {

    const { root, section } = this.fieldRootInSection(`PlanApproval_f`, `RFQ Plan Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get PlanApprovalDueDate() {

    const { root, section } = this.fieldRootInSection(`PlanApprovalDueDate_f`, `RFQ Plan Approval`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ASQE() {

    const { root, section } = this.fieldRootInSection(`ASQE_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Buyer() {

    const { root, section } = this.fieldRootInSection(`Buyer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GlobalItemGroupManager() {

    const { root, section } = this.fieldRootInSection(`GlobalItemGroupManager_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroup() {

    const { root, section } = this.fieldRootInSection(`ItemGroup_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Planner() {

    const { root, section } = this.fieldRootInSection(`RFQPlanner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramCurrency() {

    const { root, section } = this.fieldRootInSection(`ProgramCurrency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQPlanType() {

    const { root, section } = this.fieldRootInSection(`RFQPlanType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SourceDirectedSupplier() {

    const { root, section } = this.fieldRootInSection(`SourceDirectedSupplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Drawings() {

    const { root, section } = this.fieldRootInSection(`Drawings_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ParticipatingSuppliers() {

    const { root, section } = this.fieldRootInSection(`ParticipatingSuppliers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItems() {

    const { root, section } = this.fieldRootInSection(`ProgramItems_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _TermsConditionsRelevantDocuments() {

    const { root, section } = this.fieldRootInSection(`TermsConditionsRelevantDocu_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProgramsinProgramItems() {

    const { root, section } = this.fieldRootInSection(`ProgramsinProgramItems_f`, `RFQ Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQProposals() {

    const { root, section } = this.fieldRootInSection(`RFQProposals_f`, `RFQ Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SourcingRecommendations() {

    const { root, section } = this.fieldRootInSection(`SCRecommendation_f`, `RFQ Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
