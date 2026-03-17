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


export class DesignHistoryFileTemplates_p extends DetailsPageBase {
  get CountryRequirements() {

    const { root, section } = this.fieldRootInSection(`CountryRequirements_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TemplateCode() {

    const { root, section } = this.fieldRootInSection(`TemplateCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TemplateName() {

    const { root, section } = this.fieldRootInSection(`TemplateName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignInput() {

    const { root, section } = this.fieldRootInSection(`DesignInput_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignOutput() {

    const { root, section } = this.fieldRootInSection(`DesignOutput_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignTransfer() {

    const { root, section } = this.fieldRootInSection(`DesignTransfer_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _UserRequirements() {

    const { root, section } = this.fieldRootInSection(`UserRequirements_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Validation() {

    const { root, section } = this.fieldRootInSection(`Validation_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Verification() {

    const { root, section } = this.fieldRootInSection(`Verification_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
