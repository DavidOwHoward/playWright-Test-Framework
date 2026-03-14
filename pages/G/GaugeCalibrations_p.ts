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


export class GaugeCalibrations_p extends DetailsPageBase {
  get CompletedDate() {

    const { root, section } = this.fieldRootInSection(`CompletedDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationApproval() {

    const { root, section } = this.fieldRootInSection(`CalibrationApproval_f`, `Calibration Approval`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationProcedureSteps() {

    const { root, section } = this.fieldRootInSection(`CalibrationProcedureSteps_f`, `Calibration Procedure`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get _DocumentReferences() {

    const { root, section } = this.fieldRootInSection(`DocumentReferences1_f`, `Calibration Procedure`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeSpecificCalibrationNotes() {

    const { root, section } = this.fieldRootInSection(`GaugeSpecificCalibrationNot_f`, `Calibration Procedure`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AfterResult() {

    const { root, section } = this.fieldRootInSection(`AfterResult_f`, `Calibration Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _AfterResult() {

    const { root, section } = this.fieldRootInSection(`AfterResultCalc_f`, `Calibration Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get AttributeCalibrationResults() {

    const { root, section } = this.fieldRootInSection(`AttributeCalibrationResults_f`, `Calibration Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get BeforeResult() {

    const { root, section } = this.fieldRootInSection(`BeforeResult_f`, `Calibration Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _BeforeResult() {

    const { root, section } = this.fieldRootInSection(`BeforeResultCalc_f`, `Calibration Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationResults() {

    const { root, section } = this.fieldRootInSection(`CalibrationResults_f`, `Calibration Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateInvestigation() {

    const { root, section } = this.fieldRootInSection(`CreateInvestigation_f`, `Calibration Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get CreateNCR() {

    const { root, section } = this.fieldRootInSection(`CreateNCR_f`, `Calibration Results`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get JustificationNottoCreateNCR() {

    const { root, section } = this.fieldRootInSection(`JustificationNottoCreateNCR_f`, `Calibration Results`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationCost() {

    const { root, section } = this.fieldRootInSection(`CalibrationCost_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationHours() {

    const { root, section } = this.fieldRootInSection(`CalibrationHours_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Comments() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalCalibration() {

    const { root, section } = this.fieldRootInSection(`ExternalCalibration_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ExternalCalibrationCertificate() {

    const { root, section } = this.fieldRootInSection(`ExternalCalibrationCertific_f`, `General`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get PastDue() {

    const { root, section } = this.fieldRootInSection(`PastDue_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PastDueinnextXDays() {

    const { root, section } = this.fieldRootInSection(`PastDueinnextXDays_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get RelativeHumidity() {

    const { root, section } = this.fieldRootInSection(`RelativeHumidity_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Temperature() {

    const { root, section } = this.fieldRootInSection(`Temperature_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `Reference Video`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get Gauge() {

    const { root, section } = this.fieldRootInSection(`Gauge_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationSite() {

    const { root, section } = this.fieldRootInSection(`CalibrationSite_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeSite() {

    const { root, section } = this.fieldRootInSection(`GaugeSite_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeSubType() {

    const { root, section } = this.fieldRootInSection(`GaugeSubType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeType() {

    const { root, section } = this.fieldRootInSection(`GaugeType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get IncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`Investigation_f`, `Calibration Approval`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NonConformances() {

    const { root, section } = this.fieldRootInSection(`NonConformances_f`, `Calibration Approval`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
