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


export class DesignHistoryFileTemplateItems_p extends DetailsPageBase {
  get ObsoleteWarning() {

    const { root, section } = this.fieldRootInSection(`ObsoleteWarning_f`, `[Frozen Section]`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentationTitle() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get JustificationforNoDocumentation() {

    const { root, section } = this.fieldRootInSection(`JustificationforNoDocumenta_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignControl() {

    const { root, section } = this.fieldRootInSection(`DesignControl_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignInputforTemplate() {

    const { root, section } = this.fieldRootInSection(`DesignInput_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignOutputforTemplate() {

    const { root, section } = this.fieldRootInSection(`DesignOutput_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignTransferforTemplate() {

    const { root, section } = this.fieldRootInSection(`DesignTransfer_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DFMEAFailureAnalysisLibrary() {

    const { root, section } = this.fieldRootInSection(`DFMEAFailureAnalysisLibrary_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Document() {

    const { root, section } = this.fieldRootInSection(`Document_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DocumentationType() {

    const { root, section } = this.fieldRootInSection(`DocumentationType_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Drawing() {

    const { root, section } = this.fieldRootInSection(`Drawing_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get LibrarySpecification() {

    const { root, section } = this.fieldRootInSection(`LibrarySpecification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PFMEAFailureAnalysisLibrary() {

    const { root, section } = this.fieldRootInSection(`PFMEAFailureAnalysisLibrary_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Process() {

    const { root, section } = this.fieldRootInSection(`Process_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Record() {

    const { root, section } = this.fieldRootInSection(`Record_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Responsibility() {

    const { root, section } = this.fieldRootInSection(`Responsibility_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RiskManagement() {

    const { root, section } = this.fieldRootInSection(`RiskManagement_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get UserRequirementforTemplate() {

    const { root, section } = this.fieldRootInSection(`UserRequirement_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ValidationforTemplate() {

    const { root, section } = this.fieldRootInSection(`Validation_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get VerificationforTemplate() {

    const { root, section } = this.fieldRootInSection(`Verification_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
