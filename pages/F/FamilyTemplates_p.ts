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


export class FamilyTemplates_p extends DetailsPageBase {
  get FamilyTemplateNumber() {

    const { root, section } = this.fieldRootInSection(`FamilyTemplateNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get Name() {

    const { root, section } = this.fieldRootInSection(`Name_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Approval() {

    const { root, section } = this.fieldRootInSection(`Approval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestricted() {

    const { root, section } = this.fieldRootInSection(`ITARRestricted_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARRestrictedSiteCheckbox() {

    const { root, section } = this.fieldRootInSection(`ITARRestrictedSiteCheckbox_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARSiteWarning() {

    const { root, section } = this.fieldRootInSection(`ITARSiteWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ShowAIAG4thEdition() {

    const { root, section } = this.fieldRootInSection(`ShowAIAG4thEdition_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `Process Control Plan`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get _CAPAsbyFailureMode() {

    const { root, section } = this.fieldRootInSection(`CAPAsbyFailureMode_f`, `Process FMEA`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentthestatustotheoriginalTeamgoals() {

    const { root, section } = this.fieldRootInSection(`Documentthestatustotheorigi_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get GenerateSuggestedProcessFMEA() {

    const { root, section } = this.fieldRootInSection(`GenerateSuggestedProcessFME_f`, `Process FMEA`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighriskFailureActionsTakenPlannedSummary() {

    const { root, section } = this.fieldRootInSection(`HighriskFailureActionsTaken_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _HighriskFailureSummary() {

    const { root, section } = this.fieldRootInSection(`HighriskFailureSummary_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get HowtheFunctionswereDevelopedSummary() {

    const { root, section } = this.fieldRootInSection(`HowtheFunctionswereDevelope_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InTentResultsComments() {

    const { root, section } = this.fieldRootInSection(`InTentResultsComments_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get RESULTSDOCUMENTATION() {

    const { root, section } = this.fieldRootInSection(`RESULTSDOCUMENTATION_f`, `Process FMEA`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _Summaryofactionstakenorplannedtoaddresshighriskfailuresandstatus() {

    const { root, section } = this.fieldRootInSection(`Summaryofactionstakenorplan_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TeamResultsCommentsListofparticipants() {

    const { root, section } = this.fieldRootInSection(`TeamResultsCommentsListofpa_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _TimingResultsCommentsFMEAduedate() {

    const { root, section } = this.fieldRootInSection(`TimingResultsCommentsFMEAdu_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ToolResultsCommentsHowdoweconductanalysismethodused() {

    const { root, section } = this.fieldRootInSection(`ToolResultsCommentsHowdowec_f`, `Process FMEA`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ImportProcessSpecs() {

    const { root, section } = this.fieldRootInSection(`ImportProcessSpecs_f`, `Specifications`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customer() {

    const { root, section } = this.fieldRootInSection(`Customer_f`, `General`);

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

  get ItemGroup() {

    const { root, section } = this.fieldRootInSection(`ItemGroup_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemType() {

    const { root, section } = this.fieldRootInSection(`ItemType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroupApprovers() {

    const { root, section } = this.fieldRootInSection(`ItemGroupApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemTypeApprovers() {

    const { root, section } = this.fieldRootInSection(`ItemTypeApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ControlPlan() {

    const { root, section } = this.fieldRootInSection(`ControlPlan_f`, `Process Control Plan`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFlow() {

    const { root, section } = this.fieldRootInSection(`ProcessFlow_f`, `Process Flow`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFMEAAnalysis() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEAAnalysis_f`, `Process FMEA`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProcessFMEAs() {

    const { root, section } = this.fieldRootInSection(`ProcessFMEAs_f`, `Process FMEA`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Specifications() {

    const { root, section } = this.fieldRootInSection(`Specifications_f`, `Specifications`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
