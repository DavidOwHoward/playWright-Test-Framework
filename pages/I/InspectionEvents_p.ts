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


export class InspectionEvents_p extends DetailsPageBase {
  get _EventDateTime() {

    const { root, section } = this.fieldRootInSection(`EventDateTime_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ItemGroupApproversExist() {

    const { root, section } = this.fieldRootInSection(`ItemGroupApproversExist_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ItemITARMismatchWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get MissingValidationType() {

    const { root, section } = this.fieldRootInSection(`MissingValidationType_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _AutomatedTotalDestructiveQty() {

    const { root, section } = this.fieldRootInSection(`AutomatedTotalDestructiveQt_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get BatchSize() {

    const { root, section } = this.fieldRootInSection(`BatchSize_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestrictedWarning() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LotSerialNumber() {

    const { root, section } = this.fieldRootInSection(`LotNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _MfrDocInspectionPlan() {

    const { root, section } = this.fieldRootInSection(`InspectionEventLinkage_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get OrderNumber() {

    const { root, section } = this.fieldRootInSection(`OrderNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PackSerialId() {

    const { root, section } = this.fieldRootInSection(`PackSerialId_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Reference() {

    const { root, section } = this.fieldRootInSection(`Reference_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Results() {

    const { root, section } = this.fieldRootInSection(`Results_f`, `Inspection Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get _CompleteIntervalInspections() {

    const { root, section } = this.fieldRootInSection(`CompleteIntervalInspections_f`, `Interval Inspections`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get IntervalInspectionSchedule() {

    const { root, section } = this.fieldRootInSection(`IntervalInspectionSchedule_f`, `Interval Inspections`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get PauseIntervalInspections() {

    const { root, section } = this.fieldRootInSection(`PauseIntervalInspections_f`, `Interval Inspections`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ResumeIntervalInspections() {

    const { root, section } = this.fieldRootInSection(`ResumeIntervalInspections_f`, `Interval Inspections`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScheduledIntervalInspections() {

    const { root, section } = this.fieldRootInSection(`ScheduledIntervalInspection_f`, `Interval Inspections`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _Deviations() {

    const { root, section } = this.fieldRootInSection(`Deviations_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _QualityAlerts() {

    const { root, section } = this.fieldRootInSection(`QualityAlerts_f`, `Links`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `Reference Video`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `Summary`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionApproval() {

    const { root, section } = this.fieldRootInSection(`InspectionApproval_f`, `Summary`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _MaxNonDestructiveQty() {

    const { root, section } = this.fieldRootInSection(`MaxNonDestructiveQty_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberFailedInspectionResults() {

    const { root, section } = this.fieldRootInSection(`NumberFailed_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberFailedIntervalInspections() {

    const { root, section } = this.fieldRootInSection(`NumberFailedTime_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberIncompleteInspectionResults() {

    const { root, section } = this.fieldRootInSection(`NumberIncomplete_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberIncompleteIntervalInspections() {

    const { root, section } = this.fieldRootInSection(`NumberIncompleteTime_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberPassedInspectionResults() {

    const { root, section } = this.fieldRootInSection(`NumberPassed_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberPassedIntervalInspections() {

    const { root, section } = this.fieldRootInSection(`NumberPassedTime_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get OverallResult() {

    const { root, section } = this.fieldRootInSection(`OverallResult_f`, `Summary`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalDestructiveQty() {

    const { root, section } = this.fieldRootInSection(`TotalDestructiveQty_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TotalDestructiveQty() {

    const { root, section } = this.fieldRootInSection(`TotalDestructiveQtyUser_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Employee() {

    const { root, section } = this.fieldRootInSection(`Employee_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkOrder() {

    const { root, section } = this.fieldRootInSection(`WorkOrder_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`BusinessEntity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPlan() {

    const { root, section } = this.fieldRootInSection(`InspectionPlan_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionType() {

    const { root, section } = this.fieldRootInSection(`InspectionType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManufacturingDocument_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _ProcessFromMfgDocument() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFromPlan() {

    const { root, section } = this.fieldRootInSection(`Process2_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get QADInventoryTransaction() {

    const { root, section } = this.fieldRootInSection(`QADInventoryTransaction_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReceivedItem() {

    const { root, section } = this.fieldRootInSection(`ReceivedItem_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InspectionStations() {

    const { root, section } = this.fieldRootInSection(`InspectionStations_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroupApprovers() {

    const { root, section } = this.fieldRootInSection(`ItemGroupApprovers_f`, `Summary`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Nonconformances() {

    const { root, section } = this.fieldRootInSection(`Nonconformance_f`, `Links`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
