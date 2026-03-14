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


export class GaugeStudies_p extends DetailsPageBase {
  get AttributeStudy() {

    const { root, section } = this.fieldRootInSection(`AttributeGauge_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get StudyDate() {

    const { root, section } = this.fieldRootInSection(`StudyDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Average() {

    const { root, section } = this.fieldRootInSection(`Average_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get AverageBias() {

    const { root, section } = this.fieldRootInSection(`AverageBias_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ConfidenceIntervalLower() {

    const { root, section } = this.fieldRootInSection(`ConfidenceIntervalLower_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ConfidenceIntervalUpper() {

    const { root, section } = this.fieldRootInSection(`ConfidenceIntervalUpper_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get df() {

    const { root, section } = this.fieldRootInSection(`df_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Significanttvalue() {

    const { root, section } = this.fieldRootInSection(`Significanttvalue_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Standarddeviation() {

    const { root, section } = this.fieldRootInSection(`Standarddeviation_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StandardErrorofMean() {

    const { root, section } = this.fieldRootInSection(`StandardErrorofMean_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get tstatistic() {

    const { root, section } = this.fieldRootInSection(`tstatistic_f`, `Bias`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get RelativeHumidity() {

    const { root, section } = this.fieldRootInSection(`RelativeHumidity_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StudyNotes() {

    const { root, section } = this.fieldRootInSection(`StudyNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Temperature() {

    const { root, section } = this.fieldRootInSection(`Temperature_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Intercept() {

    const { root, section } = this.fieldRootInSection(`Intercept_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Interceptp() {

    const { root, section } = this.fieldRootInSection(`Interceptp_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get InterceptStandardError() {

    const { root, section } = this.fieldRootInSection(`InterceptStandardError_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get IntercepttRatio() {

    const { root, section } = this.fieldRootInSection(`IntercepttRatio_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _RSquared() {

    const { root, section } = this.fieldRootInSection(`RSquared_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get s() {

    const { root, section } = this.fieldRootInSection(`s_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Slope() {

    const { root, section } = this.fieldRootInSection(`Slope_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Slopep() {

    const { root, section } = this.fieldRootInSection(`Slopep_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get SlopeStandardError() {

    const { root, section } = this.fieldRootInSection(`SlopeStandardError_f`, `Linearity`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get BiasandLinearityMeasurements() {

    const { root, section } = this.fieldRootInSection(`BiasandLinearityMeasurement_f`, `Measurements`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeRRMeasurements() {

    const { root, section } = this.fieldRootInSection(`Measurements_f`, `Measurements`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get ConductBiasStudy() {

    const { root, section } = this.fieldRootInSection(`ConductBiasStudy_f`, `Setup`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ConductLinearityStudy() {

    const { root, section } = this.fieldRootInSection(`ConductLinearityStudy_f`, `Setup`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ConductRRStudy() {

    const { root, section } = this.fieldRootInSection(`ConductRRStudy_f`, `Setup`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get IncompleteAttributeSetup() {

    const { root, section } = this.fieldRootInSection(`IncompleteAttributeSetup_f`, `Setup`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofAppraisers() {

    const { root, section } = this.fieldRootInSection(`NumberofAppraisers_f`, `Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofSamples() {

    const { root, section } = this.fieldRootInSection(`NumberofSamples_f`, `Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofTrials() {

    const { root, section } = this.fieldRootInSection(`NumberofTrials_f`, `Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessVariation() {

    const { root, section } = this.fieldRootInSection(`ProcessVariation_f`, `Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Tolerance() {

    const { root, section } = this.fieldRootInSection(`Tolerance_f`, `Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StudyCost() {

    const { root, section } = this.fieldRootInSection(`StudyCost_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StudyHours() {

    const { root, section } = this.fieldRootInSection(`StudyHours_f`, `Summary`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StudySummary() {

    const { root, section } = this.fieldRootInSection(`Comments_f`, `Summary`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Gauge() {

    const { root, section } = this.fieldRootInSection(`Gauge_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get StudyCoordinator() {

    const { root, section } = this.fieldRootInSection(`Coordinator_f`, `[Frozen Section]`);

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

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroup() {

    const { root, section } = this.fieldRootInSection(`ItemGroup_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Specification() {

    const { root, section } = this.fieldRootInSection(`Specification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AppraiserA() {

    const { root, section } = this.fieldRootInSection(`AppraiserA_f`, `Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AppraiserB() {

    const { root, section } = this.fieldRootInSection(`AppraiserB_f`, `Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get AppraiserC() {

    const { root, section } = this.fieldRootInSection(`AppraiserC_f`, `Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NumberofSamples() {

    const { root, section } = this.fieldRootInSection(`SampleNumberList_f`, `Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Currency() {

    const { root, section } = this.fieldRootInSection(`Currency_f`, `Summary`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get StudyAcceptance() {

    const { root, section } = this.fieldRootInSection(`StudyAcceptance_f`, `Summary`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get BiasbyStandard() {

    const { root, section } = this.fieldRootInSection(`BiasbyStandard_f`, `Bias`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeStudyStandards() {

    const { root, section } = this.fieldRootInSection(`GaugeStudyStandards_f`, `Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeStudyStandards() {

    const { root, section } = this.fieldRootInSection(`GaugeStudyStandardsAttribut_f`, `Setup`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
