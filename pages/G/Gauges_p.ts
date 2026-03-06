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


export class Gauges_p extends DetailsPageBase {
  get GaugeAutoNumber() {

    const { root, section } = this.fieldRootInSection(`GaugeAutoNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeNumber() {

    const { root, section } = this.fieldRootInSection(`GaugeNumber_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationNotes() {

    const { root, section } = this.fieldRootInSection(`CalibrationNotes_f`, `Calibration/Service`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CalibrationStandardsFromGaugeSubType() {

    const { root, section } = this.fieldRootInSection(`CalibrationStandardsFromGau_f`, `Calibration/Service`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalCalibration() {

    const { root, section } = this.fieldRootInSection(`ExternalCalibration_f`, `Calibration/Service`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get HoursinUseSinceCalibration() {

    const { root, section } = this.fieldRootInSection(`HoursinUseSinceCalibration_f`, `Calibration/Service`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LastCalibrated() {

    const { root, section } = this.fieldRootInSection(`LastCalibrated_f`, `Calibration/Service`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PercentageofUseBeforeNotification() {

    const { root, section } = this.fieldRootInSection(`PercentageofUseBeforeNotifi_f`, `Calibration/Service`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UsageBasedScheduling() {

    const { root, section } = this.fieldRootInSection(`UsageBasedScheduling_f`, `Calibration/Service`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get UsageFrequencyHours() {

    const { root, section } = this.fieldRootInSection(`UsageFrequencyHours_f`, `Calibration/Service`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeDescription() {

    const { root, section } = this.fieldRootInSection(`GaugeDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get HandlingProcedure() {

    const { root, section } = this.fieldRootInSection(`HandlingProcedure_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Manufacturer() {

    const { root, section } = this.fieldRootInSection(`Manufacturer_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MasterGauge() {

    const { root, section } = this.fieldRootInSection(`MasterGauge_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ModelNumber() {

    const { root, section } = this.fieldRootInSection(`ModelNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _NIST() {

    const { root, section } = this.fieldRootInSection(`NIST_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RetiredDate() {

    const { root, section } = this.fieldRootInSection(`RetiredDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SerialNumber() {

    const { root, section } = this.fieldRootInSection(`SerialNumber_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DedicatedGauge() {

    const { root, section } = this.fieldRootInSection(`DedicatedGauge_f`, `Location/Status`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get HoursatLastInactive() {

    const { root, section } = this.fieldRootInSection(`HoursatLastInactive_f`, `Location/Status`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificLocation() {

    const { root, section } = this.fieldRootInSection(`SpecificLocation_f`, `Location/Status`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _StatusDateTime() {

    const { root, section } = this.fieldRootInSection(`StatusDateTime_f`, `Location/Status`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get StatusNotes() {

    const { root, section } = this.fieldRootInSection(`StatusNotes_f`, `Location/Status`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeSubType() {

    const { root, section } = this.fieldRootInSection(`GaugeSubType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeType() {

    const { root, section } = this.fieldRootInSection(`GaugeType_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultResponsibility() {

    const { root, section } = this.fieldRootInSection(`DefaultResponsibility_f`, `Calibration/Service`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CustomerOwner() {

    const { root, section } = this.fieldRootInSection(`CustomerOwner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeOwner() {

    const { root, section } = this.fieldRootInSection(`GaugeOwner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OwnerType() {

    const { root, section } = this.fieldRootInSection(`OwnerType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PurchaseFrom() {

    const { root, section } = this.fieldRootInSection(`PurchaseFrom_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ServiceSupplier() {

    const { root, section } = this.fieldRootInSection(`ServiceSupplier_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierOwner() {

    const { root, section } = this.fieldRootInSection(`SupplierOwner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AssignedTo() {

    const { root, section } = this.fieldRootInSection(`AssignedTo_f`, `Location/Status`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DedicatedCustomer() {

    const { root, section } = this.fieldRootInSection(`DedicatedCustomer_f`, `Location/Status`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DedicatedItem() {

    const { root, section } = this.fieldRootInSection(`DedicatedItem_f`, `Location/Status`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `Location/Status`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Status() {

    const { root, section } = this.fieldRootInSection(`Status_f`, `Location/Status`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get WorkCenter() {

    const { root, section } = this.fieldRootInSection(`WorkCenter_f`, `Location/Status`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _CalibrationStandardsFromGauge() {

    const { root, section } = this.fieldRootInSection(`GaugeCalibrationStandards_f`, `Calibration/Service`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeCalibrations() {

    const { root, section } = this.fieldRootInSection(`GaugeCalibrations_f`, `Calibration/Service`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeMaintenanceService() {

    const { root, section } = this.fieldRootInSection(`GaugeMaintenanceService_f`, `Calibration/Service`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeStudies() {

    const { root, section } = this.fieldRootInSection(`GaugeRRStudies_f`, `Studies`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
