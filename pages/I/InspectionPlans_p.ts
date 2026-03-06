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


export class InspectionPlans_p extends DetailsPageBase {
  get InspectionPlanNumber() {

    const { root, section } = this.fieldRootInSection(`Inspectionplannumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPlanRequiresReview() {

    const { root, section } = this.fieldRootInSection(`InspectionPlanRequiresRevie_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ITARMismatchWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Versiondate() {

    const { root, section } = this.fieldRootInSection(`Versiondate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ApprovalDueDate() {

    const { root, section } = this.fieldRootInSection(`ApprovalDueDate_f`, `Approval Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `Approval Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Daysforapproval() {

    const { root, section } = this.fieldRootInSection(`Daysforapproval_f`, `Approval Information`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Obsolescenceapproval() {

    const { root, section } = this.fieldRootInSection(`Obsolescenceapproval_f`, `Approval Information`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Obsolescencereason() {

    const { root, section } = this.fieldRootInSection(`Obsolescencereason_f`, `Approval Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Obsolete() {

    const { root, section } = this.fieldRootInSection(`Obsolete_f`, `Approval Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Openinspectionevents() {

    const { root, section } = this.fieldRootInSection(`Openinspectionevents_f`, `Approval Information`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get Versionapproval() {

    const { root, section } = this.fieldRootInSection(`Versionapproval_f`, `Approval Information`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Destructive() {

    const { root, section } = this.fieldRootInSection(`Destructive_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionRequiresApproval() {

    const { root, section } = this.fieldRootInSection(`Inspectionrequiresapproval_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
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

  get ItemITARMismatchWarning() {

    const { root, section } = this.fieldRootInSection(`ItemITARMismatchWarning_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get OriginalInspectionplancreationdate() {

    const { root, section } = this.fieldRootInSection(`OriginalInspectionplancreat_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Inspectionevents() {

    const { root, section } = this.fieldRootInSection(`Inspectionevents_f`, `Inspection Events`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get InvalidInspectionItemsWarning() {

    const { root, section } = this.fieldRootInSection(`InvalidInspectionItemsWarni_f`, `Inspection Items`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ValidInspectionItems() {

    const { root, section } = this.fieldRootInSection(`ValidInspectionItems_f`, `Inspection Items`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _ReferenceVideos() {

    const { root, section } = this.fieldRootInSection(`ReferenceVideo_f`, `Training`);

    return new VideoField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingAid() {

    const { root, section } = this.fieldRootInSection(`TrainingAid_f`, `Training`);

    return new FileField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrainingEvents() {

    const { root, section } = this.fieldRootInSection(`TrainingEvents_f`, `Training`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPlanOwner() {

    const { root, section } = this.fieldRootInSection(`InspectionPlanOwner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemNumber() {

    const { root, section } = this.fieldRootInSection(`ItemNumber_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skill() {

    const { root, section } = this.fieldRootInSection(`Skill_f`, `Training`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Additionalapprovers() {

    const { root, section } = this.fieldRootInSection(`Additionalapprovers_f`, `Approval Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get LinkedDrawings() {

    const { root, section } = this.fieldRootInSection(`LinkedDrawings_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Inspectionitems() {

    const { root, section } = this.fieldRootInSection(`Inspectionitems_f`, `Inspection Items`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillTrainingQuestions() {

    const { root, section } = this.fieldRootInSection(`SkillTrainingQuestions_f`, `Training`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
