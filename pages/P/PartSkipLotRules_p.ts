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


export class PartSkipLotRules_p extends DetailsPageBase {
  get CreatedInspections() {

    const { root, section } = this.fieldRootInSection(`CreatedInspections_f`, `Created Inspections`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get PartDescription() {

    const { root, section } = this.fieldRootInSection(`PartDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SaveWarning() {

    const { root, section } = this.fieldRootInSection(`SaveWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentPassedInspections() {

    const { root, section } = this.fieldRootInSection(`CurrentPassedInspections_f`, `Log`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentQuantityReceived() {

    const { root, section } = this.fieldRootInSection(`CurrentQuanittyReceived_f`, `Log`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentReceipts() {

    const { root, section } = this.fieldRootInSection(`CurrentReceipts_f`, `Log`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentSkippedLots() {

    const { root, section } = this.fieldRootInSection(`CurrentSkippedLots_f`, `Log`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LastInspectionDate() {

    const { root, section } = this.fieldRootInSection(`LastInspectionDate_f`, `Log`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalLotsReceived() {

    const { root, section } = this.fieldRootInSection(`TotalLotsReceived_f`, `Log`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UniqueLotCountatLastInspection() {

    const { root, section } = this.fieldRootInSection(`LotCountatLastFailurePromot_f`, `Log`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocumentCopy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkipLotRuleTable() {

    const { root, section } = this.fieldRootInSection(`SkipLotRuleTable_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SuppliedPartNumber() {

    const { root, section } = this.fieldRootInSection(`SuppliedPartNumber_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentRule() {

    const { root, section } = this.fieldRootInSection(`CurrentRule_f`, `Log`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReceipt() {

    const { root, section } = this.fieldRootInSection(`LastReceipt_f`, `Log`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NextRule() {

    const { root, section } = this.fieldRootInSection(`NextRule_f`, `Log`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionstoCreate() {

    const { root, section } = this.fieldRootInSection(`InspectionstoCreate_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LotsReceivedList() {

    const { root, section } = this.fieldRootInSection(`LotsReceivedList_f`, `Log`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
