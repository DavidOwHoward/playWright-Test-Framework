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


export class OBSDesignFMEAFunctions_p extends DetailsPageBase {
  get LibraryFunction() {

    const { root, section } = this.fieldRootInSection(`LibraryFunctionLabel_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get DisplayExpression() {

    const { root, section } = this.fieldRootInSection(`DisplayExpression_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FunctionTextField() {

    const { root, section } = this.fieldRootInSection(`Function_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FunctionCode() {

    const { root, section } = this.fieldRootInSection(`FunctionCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get LibraryDesignFunction() {

    const { root, section } = this.fieldRootInSection(`LibraryFunction_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get System() {

    const { root, section } = this.fieldRootInSection(`System_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Requirements() {

    const { root, section } = this.fieldRootInSection(`Requirements_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ManufacturingDocument() {

    const { root, section } = this.fieldRootInSection(`ManuDoc_f`, `General`);

    return new RcrField(this.page, root, async () => section.openAndWait(root));
  }
}
