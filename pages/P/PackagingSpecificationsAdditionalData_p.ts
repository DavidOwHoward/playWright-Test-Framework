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


export class PackagingSpecificationsAdditionalData_p extends DetailsPageBase {
  get ContainerDescription() {

    const { root, section } = this.fieldRootInSection(`ContainerDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Containersperlayer() {

    const { root, section } = this.fieldRootInSection(`Containersperlayer_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ContainersperUL() {

    const { root, section } = this.fieldRootInSection(`ContainersperUL_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DunnageDescription() {

    const { root, section } = this.fieldRootInSection(`DunnageDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ExteriorDimensions() {

    const { root, section } = this.fieldRootInSection(`ExteriorDimensions_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingPicture1() {

    const { root, section } = this.fieldRootInSection(`PackagingPicture1_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingPicture2() {

    const { root, section } = this.fieldRootInSection(`PackagingPicture2_f`, `General`);

    return new PictureField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingSequence() {

    const { root, section } = this.fieldRootInSection(`PackagingSequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Picture1Description() {

    const { root, section } = this.fieldRootInSection(`Picture1Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Picture2Description() {

    const { root, section } = this.fieldRootInSection(`Picture2Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get StackingLimit() {

    const { root, section } = this.fieldRootInSection(`StackingLimit_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TareWeight() {

    const { root, section } = this.fieldRootInSection(`TareWeight_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalPartQuantityPerUL() {

    const { root, section } = this.fieldRootInSection(`TotalPartQuantityPerUL_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TotalWeightWParts() {

    const { root, section } = this.fieldRootInSection(`TotalWeightWParts_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DimUnitofMeasure() {

    const { root, section } = this.fieldRootInSection(`DimUnitofMeasure_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingSpecification() {

    const { root, section } = this.fieldRootInSection(`PackagingSpecification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PackagingType() {

    const { root, section } = this.fieldRootInSection(`PackagingType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TareWeightUOM() {

    const { root, section } = this.fieldRootInSection(`TareWeightUOM_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalWeightUOM() {

    const { root, section } = this.fieldRootInSection(`TotalWeightUOM_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
