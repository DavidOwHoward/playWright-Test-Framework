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


export class SkillTypes_p extends DetailsPageBase {
  get SkillType() {

    const { root, section } = this.fieldRootInSection(`SkillType_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SkillTypeCode() {

    const { root, section } = this.fieldRootInSection(`SkillTypeCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AutomatedRatingLabel() {

    const { root, section } = this.fieldRootInSection(`AutomatedRatingLabel_f`, `Automated Rating Setup`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageFive() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageFive_f`, `Automated Rating Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageFour() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageFour_f`, `Automated Rating Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageOne() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageOne_f`, `Automated Rating Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageThree() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageThree_f`, `Automated Rating Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _ScorePercentageTwo() {

    const { root, section } = this.fieldRootInSection(`ScorePercentageTwo_f`, `Automated Rating Setup`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NewRatingFive() {

    const { root, section } = this.fieldRootInSection(`NewRatingFive_f`, `Automated Rating Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewRatingFour() {

    const { root, section } = this.fieldRootInSection(`NewRatingFour_f`, `Automated Rating Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewRatingOne() {

    const { root, section } = this.fieldRootInSection(`NewRatingOne_f`, `Automated Rating Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewRatingThree() {

    const { root, section } = this.fieldRootInSection(`NewRatingThree_f`, `Automated Rating Setup`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get NewRatingTwo() {

    const { root, section } = this.fieldRootInSection(`NewRatingTwo_f`, `Automated Rating Setup`);

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

  get DefaultTrainingRoles() {

    const { root, section } = this.fieldRootInSection(`DefaultTrainingRoles_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Skills() {

    const { root, section } = this.fieldRootInSection(`Skills_f`, `Skills`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentTypes() {

    const { root, section } = this.fieldRootInSection(`DocumentTypes_f`, `Documents`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }

  get Documents() {

    const { root, section } = this.fieldRootInSection(`Documents_f`, `Documents`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
