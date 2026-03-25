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


export class SupplierCommodities_p extends DetailsPageBase {
  get ExemptfromReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ExemptfromReviewNotes_f`, `Performance Reviews`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LastAuditCompleted() {

    const { root, section } = this.fieldRootInSection(`LastAuditCompleted_f`, `Supplier Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReviewCompleted() {

    const { root, section } = this.fieldRootInSection(`LastReviewCompleted_f`, `Supplier Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextAuditDue() {

    const { root, section } = this.fieldRootInSection(`NextAuditDue_f`, `Supplier Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDue() {

    const { root, section } = this.fieldRootInSection(`NextReviewDue_f`, `Supplier Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Commodity() {

    const { root, section } = this.fieldRootInSection(`ItemGroup_f`, `Supplier Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `Supplier Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierApprovalStatus() {

    const { root, section } = this.fieldRootInSection(`SupplierApprovalStatus_f`, `Supplier Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierAuditReviewResponsibility() {

    const { root, section } = this.fieldRootInSection(`SupplierAuditReviewResp_f`, `Supplier Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierRiskCategory() {

    const { root, section } = this.fieldRootInSection(`SupplierRiskCategory_f`, `Supplier Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierPerformanceReviews() {

    const { root, section } = this.fieldRootInSection(`SupplierPerformanceReviews_f`, `Performance Reviews`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
