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


export class DrawingFeatures_p extends DetailsPageBase {
  get UpdateFromLibrary() {

    const { root, section } = this.fieldRootInSection(`UpdateFromLibrary_f`, `[Frozen Section]`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get _AcceptanceCriteriaNotes() {

    const { root, section } = this.fieldRootInSection(`SpecificationNotes_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Code() {

    const { root, section } = this.fieldRootInSection(`SpecificationId_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InactiveSpecification() {

    const { root, section } = this.fieldRootInSection(`InactiveSpecification_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get InactiveSpecificationName() {

    const { root, section } = this.fieldRootInSection(`InactiveSpecificationName_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get InternalorExternal() {

    const { root, section } = this.fieldRootInSection(`InternalorExternal_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get LowerLimit() {

    const { root, section } = this.fieldRootInSection(`LowerLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofDecimals() {

    const { root, section } = this.fieldRootInSection(`NumberofDecimals_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _PassThroughCharacteristic() {

    const { root, section } = this.fieldRootInSection(`PassThroughCharacteristic_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Target() {

    const { root, section } = this.fieldRootInSection(`Target_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get UpperLimit() {

    const { root, section } = this.fieldRootInSection(`UpperLimit_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LibrarySpecification() {

    const { root, section } = this.fieldRootInSection(`LibrarySpecification_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Drawing() {

    const { root, section } = this.fieldRootInSection(`Drawing_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LowerDays() {

    const { root, section } = this.fieldRootInSection(`LowerDays_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecialClassification() {

    const { root, section } = this.fieldRootInSection(`SpecialClassification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationDataType() {

    const { root, section } = this.fieldRootInSection(`SpecificationDataType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SpecificationName() {

    const { root, section } = this.fieldRootInSection(`Specification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`UnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UpperDays() {

    const { root, section } = this.fieldRootInSection(`UpperDays_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ValidationType() {

    const { root, section } = this.fieldRootInSection(`SpecificationType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
