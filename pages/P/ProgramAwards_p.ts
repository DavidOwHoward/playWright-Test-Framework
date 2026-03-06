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


export class ProgramAwards_p extends DetailsPageBase {
  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemDescription() {

    const { root, section } = this.fieldRootInSection(`ItemDescription_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AwardLetter() {

    const { root, section } = this.fieldRootInSection(`AwardLetter_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get _Projectrequired() {

    const { root, section } = this.fieldRootInSection(`Projectrequired_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get RecommendationComments() {

    const { root, section } = this.fieldRootInSection(`RecommendationComments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPOApproval() {

    const { root, section } = this.fieldRootInSection(`PartPOApproval_f`, `Part PO`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPODate() {

    const { root, section } = this.fieldRootInSection(`PartPODate_f`, `Part PO`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPODocument() {

    const { root, section } = this.fieldRootInSection(`PartPODocument_f`, `Part PO`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPONumber() {

    const { root, section } = this.fieldRootInSection(`PartPONumber_f`, `Part PO`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PartPORevisionDate() {

    const { root, section } = this.fieldRootInSection(`PartPORevisionDate_f`, `Part PO`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingPOApproval() {

    const { root, section } = this.fieldRootInSection(`ToolingPOApproval_f`, `Tooling PO`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingPODate() {

    const { root, section } = this.fieldRootInSection(`ToolingPODate_f`, `Tooling PO`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingPODocument() {

    const { root, section } = this.fieldRootInSection(`ToolingPODocument_f`, `Tooling PO`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingPONumber() {

    const { root, section } = this.fieldRootInSection(`ToolingPONumber_f`, `Tooling PO`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ToolingPORevisionDate() {

    const { root, section } = this.fieldRootInSection(`ToolingPORevisionDate_f`, `Tooling PO`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Buyer() {

    const { root, section } = this.fieldRootInSection(`Buyer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierContact() {

    const { root, section } = this.fieldRootInSection(`SupplierContact_f`, `[Frozen Section]`);

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

  get ProjectTemplate() {

    const { root, section } = this.fieldRootInSection(`ProjectType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SCRecommendation() {

    const { root, section } = this.fieldRootInSection(`SCRecommendation_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`Project_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
