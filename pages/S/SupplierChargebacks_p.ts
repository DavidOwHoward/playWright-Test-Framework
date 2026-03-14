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


export class SupplierChargebacks_p extends DetailsPageBase {
  get ChargebackNumber() {

    const { root, section } = this.fieldRootInSection(`ChargebackNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedDate() {

    const { root, section } = this.fieldRootInSection(`InitiatedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ChargebackTotal() {

    const { root, section } = this.fieldRootInSection(`ChargebackTotal_f`, `Chargeback Details`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _InternalNotesNotVisibletoSupplier() {

    const { root, section } = this.fieldRootInSection(`InternalNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PONumber() {

    const { root, section } = this.fieldRootInSection(`PONumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DueDate() {

    const { root, section } = this.fieldRootInSection(`DueDate_f`, `Supplier Response`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get InitialNotificationDate() {

    const { root, section } = this.fieldRootInSection(`InitialNotificationDate_f`, `Supplier Response`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _RMAReferenceNumberREQUIRED() {

    const { root, section } = this.fieldRootInSection(`RMAReferenceNumber_f`, `Supplier Response`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierApproval() {

    const { root, section } = this.fieldRootInSection(`SupplierApproval_f`, `Supplier Response`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierCommentsREQUIRED() {

    const { root, section } = this.fieldRootInSection(`AdditionalSupplierComments_f`, `Supplier Response`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCommentsLabel() {

    const { root, section } = this.fieldRootInSection(`SupplierCommentsLabel_f`, `Supplier Response`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `Chargeback Details`);

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

  get OriginatingSCAR() {

    const { root, section } = this.fieldRootInSection(`OriginatingSCAR_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChargebackDetails() {

    const { root, section } = this.fieldRootInSection(`ChargebackDetails_f`, `Chargeback Details`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get InternalNotification() {

    const { root, section } = this.fieldRootInSection(`InternalNotification_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedItems() {

    const { root, section } = this.fieldRootInSection(`RelatedItems_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierNotification() {

    const { root, section } = this.fieldRootInSection(`SupplierNotification_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SupplierNotificationInternal() {

    const { root, section } = this.fieldRootInSection(`SupplierNotificationInterna_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SCARs() {

    const { root, section } = this.fieldRootInSection(`SCARs_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
