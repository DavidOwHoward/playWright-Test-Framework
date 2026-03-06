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


export class LessonsLearned_p extends DetailsPageBase {
  get LessonsLearnedNumber() {

    const { root, section } = this.fieldRootInSection(`LessonsLearnedNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DateCreated() {

    const { root, section } = this.fieldRootInSection(`DateCreated_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Impact() {

    const { root, section } = this.fieldRootInSection(`Impact_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ProblemorSuccess() {

    const { root, section } = this.fieldRootInSection(`ProblemorSuccess_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Recommendation() {

    const { root, section } = this.fieldRootInSection(`Recommendation_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LastReviewed() {

    const { root, section } = this.fieldRootInSection(`LastReviewed_f`, `Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get NextReviewDue() {

    const { root, section } = this.fieldRootInSection(`NextReviewDue_f`, `Review`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewNotes() {

    const { root, section } = this.fieldRootInSection(`ReviewNotes_f`, `Review`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Category() {

    const { root, section } = this.fieldRootInSection(`Category_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

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

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyCAPA() {

    const { root, section } = this.fieldRootInSection(`GeneratedfromCAPA_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyImprovement() {

    const { root, section } = this.fieldRootInSection(`GeneratedFromImprovement_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyIncidentInvestigation() {

    const { root, section } = this.fieldRootInSection(`GeneratedFromIncidentInvest_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyIssue() {

    const { root, section } = this.fieldRootInSection(`GeneratedFromIssue_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _InitiatedbyNonconformance() {

    const { root, section } = this.fieldRootInSection(`GeneratedFromNonconformance_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyProject() {

    const { root, section } = this.fieldRootInSection(`GeneratedFromAPQPProject_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InitiatedbyRisk() {

    const { root, section } = this.fieldRootInSection(`GeneratedFromRisk_f`, `Links`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewCompletedBy() {

    const { root, section } = this.fieldRootInSection(`ReviewCompletedBy_f`, `Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReviewFrequency() {

    const { root, section } = this.fieldRootInSection(`ReviewFrequency_f`, `Review`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Customers() {

    const { root, section } = this.fieldRootInSection(`Customers_f`, `Applicability`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemGroups() {

    const { root, section } = this.fieldRootInSection(`ItemGroups_f`, `Applicability`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ItemTypes() {

    const { root, section } = this.fieldRootInSection(`ItemTypes_f`, `Applicability`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Items() {

    const { root, section } = this.fieldRootInSection(`Items_f`, `Applicability`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Processes() {

    const { root, section } = this.fieldRootInSection(`Processes_f`, `Applicability`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Suppliers() {

    const { root, section } = this.fieldRootInSection(`Suppliers_f`, `Applicability`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
