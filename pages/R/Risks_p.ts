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


export class Risks_p extends DetailsPageBase {
  get RiskNumber() {

    const { root, section } = this.fieldRootInSection(`RiskNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get CurrentCauseSummary() {

    const { root, section } = this.fieldRootInSection(`CurrentCauses_f`, `Analysis/Evaluation`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskLevel() {

    const { root, section } = this.fieldRootInSection(`CurrentRPN_f`, `Analysis/Evaluation`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReviewMonitorNotes() {

    const { root, section } = this.fieldRootInSection(`ReivewMonitorNotes_f`, `Monitor`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _CurrentControls() {

    const { root, section } = this.fieldRootInSection(`CurrentControls_f`, `Treatment/Control`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TreatmentOptionsSummary() {

    const { root, section } = this.fieldRootInSection(`TreatmentOptions_f`, `Treatment/Control`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TreatmentsBeingImplementedSummary() {

    const { root, section } = this.fieldRootInSection(`TreatmentsBeingImplemented_f`, `Treatment/Control`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskDriver() {

    const { root, section } = this.fieldRootInSection(`RiskDriver_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskEvaluation() {

    const { root, section } = this.fieldRootInSection(`RiskEvaluation_f`, `Analysis/Evaluation`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SummarizedConsequence() {

    const { root, section } = this.fieldRootInSection(`CurrentConsequence_f`, `Analysis/Evaluation`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SummarizedLikelihood() {

    const { root, section } = this.fieldRootInSection(`CurrentLikelihood_f`, `Analysis/Evaluation`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeRequest() {

    const { root, section } = this.fieldRootInSection(`ChangeRequest_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Complaint() {

    const { root, section } = this.fieldRootInSection(`Complaint_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

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

  get IncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`Investigation_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`APQPProject_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskAssessment() {

    const { root, section } = this.fieldRootInSection(`RiskAssessment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierRiskAssessment() {

    const { root, section } = this.fieldRootInSection(`SupplierRiskAssessment_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _BowTieAnalysis() {

    const { root, section } = this.fieldRootInSection(`BowTieAnalysis_f`, `Analysis/Evaluation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Actions() {

    const { root, section } = this.fieldRootInSection(`Actions_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearnedCreated() {

    const { root, section } = this.fieldRootInSection(`LessonsLearnedCreated_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LessonsLearnedEvaluated() {

    const { root, section } = this.fieldRootInSection(`LessonsLearnedEvaluated_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _StandardSections() {

    const { root, section } = this.fieldRootInSection(`StandardSections_f`, `Links`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedNonconformances() {

    const { root, section } = this.fieldRootInSection(`RelatedNonconformances_f`, `Monitor`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Controls() {

    const { root, section } = this.fieldRootInSection(`Controls_f`, `Treatment/Control`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Treatments() {

    const { root, section } = this.fieldRootInSection(`Treatments_f`, `Treatment/Control`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedRiskEvents() {

    const { root, section } = this.fieldRootInSection(`RelatedRiskEvents_f`, `Monitor`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
