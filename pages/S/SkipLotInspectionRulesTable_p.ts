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


export class SkipLotInspectionRulesTable_p extends DetailsPageBase {
  get SkipLotCode() {

    const { root, section } = this.fieldRootInSection(`SkipLotCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SkipLotDescription() {

    const { root, section } = this.fieldRootInSection(`SkipLotDescription_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ChangeDescription() {

    const { root, section } = this.fieldRootInSection(`ChangeDescription_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsolescenceApproval() {

    const { root, section } = this.fieldRootInSection(`ObsolescenceApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get _Obsolete() {

    const { root, section } = this.fieldRootInSection(`Obsolete_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get PlanApproval() {

    const { root, section } = this.fieldRootInSection(`PlanApproval_f`, `General`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get Createdby() {

    const { root, section } = this.fieldRootInSection(`Createdby_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Domains() {

    const { root, section } = this.fieldRootInSection(`Domains_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entities() {

    const { root, section } = this.fieldRootInSection(`BusinessEntities_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _PlanApprovers() {

    const { root, section } = this.fieldRootInSection(`PlanApprovers_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _Sites() {

    const { root, section } = this.fieldRootInSection(`Sites_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SkipLotRules() {

    const { root, section } = this.fieldRootInSection(`SkipLotRules_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
