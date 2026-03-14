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


export class Locations_p extends DetailsPageBase {
  get LocationCode() {

    const { root, section } = this.fieldRootInSection(`LocationCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LocationName() {

    const { root, section } = this.fieldRootInSection(`LocationName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionLocation() {

    const { root, section } = this.fieldRootInSection(`InspectionLocation_f`, `Inspection Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
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

  get DefaultInspector() {

    const { root, section } = this.fieldRootInSection(`DefaultInspector_f`, `Inspection Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionFailInventoryStatus() {

    const { root, section } = this.fieldRootInSection(`InspFailInvStatust_f`, `Inspection Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionFailLocation() {

    const { root, section } = this.fieldRootInSection(`InspFailLocation_f`, `Inspection Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPassInventoryStatus() {

    const { root, section } = this.fieldRootInSection(`InspPassInvStatust_f`, `Inspection Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionPassLocation() {

    const { root, section } = this.fieldRootInSection(`InspPassLocation_f`, `Inspection Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionType() {

    const { root, section } = this.fieldRootInSection(`InspectionType_f`, `Inspection Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AssociatedInspectionStations() {

    const { root, section } = this.fieldRootInSection(`AssociatedInspectionStation_f`, `Inspection Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
