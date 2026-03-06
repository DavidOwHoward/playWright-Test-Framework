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


export class RiskEvents_p extends DetailsPageBase {
  get EventNumber() {

    const { root, section } = this.fieldRootInSection(`EventNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get _InitiatedDateTime() {

    const { root, section } = this.fieldRootInSection(`InitiatedDateTime_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ActionTaken() {

    const { root, section } = this.fieldRootInSection(`ActionTaken_f`, `Action Taken`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EscalatetoComplaint() {

    const { root, section } = this.fieldRootInSection(`EscalatetoComplaint_f`, `Action Taken`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _EscalatetoNonconformance() {

    const { root, section } = this.fieldRootInSection(`EscalatetoNonconformance_f`, `Action Taken`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TargetCompletion() {

    const { root, section } = this.fieldRootInSection(`TargetCompletion_f`, `Action Taken`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Address1() {

    const { root, section } = this.fieldRootInSection(`Address1_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Address2() {

    const { root, section } = this.fieldRootInSection(`Address2_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get City() {

    const { root, section } = this.fieldRootInSection(`City_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Country() {

    const { root, section } = this.fieldRootInSection(`Country_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerName() {

    const { root, section } = this.fieldRootInSection(`CustomerName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Email() {

    const { root, section } = this.fieldRootInSection(`Email_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EventDescription() {

    const { root, section } = this.fieldRootInSection(`EventDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EventSummary() {

    const { root, section } = this.fieldRootInSection(`EventSummary_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FirstName() {

    const { root, section } = this.fieldRootInSection(`FirstName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LastName() {

    const { root, section } = this.fieldRootInSection(`LastName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PhoneNumber() {

    const { root, section } = this.fieldRootInSection(`PhoneNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PostalCode() {

    const { root, section } = this.fieldRootInSection(`PostalCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _StateProvinceRegion() {

    const { root, section } = this.fieldRootInSection(`StateProvinceRegion_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedBy() {

    const { root, section } = this.fieldRootInSection(`InitiatedBy_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskEventSource() {

    const { root, section } = this.fieldRootInSection(`RiskEventSource_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Coordinator() {

    const { root, section } = this.fieldRootInSection(`Coordinator_f`, `Action Taken`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerContact() {

    const { root, section } = this.fieldRootInSection(`CustomerContact_f`, `General`);

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

  get Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Actions() {

    const { root, section } = this.fieldRootInSection(`Actions_f`, `Action Taken`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get NotificationGroups() {

    const { root, section } = this.fieldRootInSection(`NotificationGroups_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProblemCauseCodes() {

    const { root, section } = this.fieldRootInSection(`ProblemCauseCodes_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedRisks() {

    const { root, section } = this.fieldRootInSection(`RelatedRisks_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
