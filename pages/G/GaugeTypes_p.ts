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


export class GaugeTypes_p extends DetailsPageBase {
  get GaugeTypeCode() {

    const { root, section } = this.fieldRootInSection(`GaugeTypeCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GaugeTypeName() {

    const { root, section } = this.fieldRootInSection(`GaugeTypeName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TreatasAttributeforCalibrationStudies() {

    const { root, section } = this.fieldRootInSection(`AttributeGauge_f`, `[Frozen Section]`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ConductBiasStudy() {

    const { root, section } = this.fieldRootInSection(`ConductBiasStudy_f`, `Study Setup`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ConductLinearityStudy() {

    const { root, section } = this.fieldRootInSection(`ConductLinearityStudy_f`, `Study Setup`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ConductRRStudy() {

    const { root, section } = this.fieldRootInSection(`ConductRRStudy_f`, `Study Setup`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get GRRNumberofAppraisers() {

    const { root, section } = this.fieldRootInSection(`GRRNumberofAppraisers_f`, `Study Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get GRRNumberofTrials() {

    const { root, section } = this.fieldRootInSection(`GRRNumberofTrials_f`, `Study Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get StudyReasoningNotes() {

    const { root, section } = this.fieldRootInSection(`StudyReasoningNotes_f`, `Study Setup`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GRRNumberofSamples() {

    const { root, section } = this.fieldRootInSection(`GRRSampleNumberList_f`, `Study Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _GaugeSubTypes() {

    const { root, section } = this.fieldRootInSection(`GaugeSubTypes_f`, `Gauge Sub-Types`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get CalibrationProcedureSteps() {

    const { root, section } = this.fieldRootInSection(`CalibrationProcedureSteps_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DocumentReferences() {

    const { root, section } = this.fieldRootInSection(`DocumentReferences_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Gauges() {

    const { root, section } = this.fieldRootInSection(`Gauges_f`, `Used By`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
