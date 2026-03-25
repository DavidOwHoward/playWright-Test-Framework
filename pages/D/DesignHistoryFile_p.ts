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


export class DesignHistoryFile_p extends DetailsPageBase {
  get DHFName() {

    const { root, section } = this.fieldRootInSection(`DHFName_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DHFNumber() {

    const { root, section } = this.fieldRootInSection(`DHFNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get _DesignInputChangeRequests() {

    const { root, section } = this.fieldRootInSection(`DesignInputChangeRequests_f`, `Design Input`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteDesignInput() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDesignInput_f`, `Design Input`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get AtleastoneDesignOutputforeachDesignInput() {

    const { root, section } = this.fieldRootInSection(`NoDesignInputsmissingaDesig_f`, `Design Output`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _DesignOutputChangeRequests() {

    const { root, section } = this.fieldRootInSection(`DesignOutputChangeRequests_f`, `Design Output`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteDesignOutput() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDesignOutput_f`, `Design Output`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get AllDesignTransferitemshaveadocumentationtype() {

    const { root, section } = this.fieldRootInSection(`AllDesignTransfershaveadocu_f`, `Design Transfer`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _DesignTransferChangeRequests() {

    const { root, section } = this.fieldRootInSection(`DesignTransferChangeRequest_f`, `Design Transfer`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteDesignTransfer() {

    const { root, section } = this.fieldRootInSection(`ObsoleteDesignTransfer_f`, `Design Transfer`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `Planning`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AtleastoneDesignReviewexists() {

    const { root, section } = this.fieldRootInSection(`AtleastoneDesignReviewexist_f`, `Project Management`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _CAPAsbyItemandRelatedItem() {

    const { root, section } = this.fieldRootInSection(`CAPAsbyItemandRelatedItem_f`, `Project Management`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get _ComplaintsbyItemandRelatedItems() {

    const { root, section } = this.fieldRootInSection(`ComplaintsbyItemandRelatedI_f`, `Project Management`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get CountryRequirements() {

    const { root, section } = this.fieldRootInSection(`CountryRequirements_f`, `Project Management`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EffectiveDate() {

    const { root, section } = this.fieldRootInSection(`EffectiveDate_f`, `Project Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get StartDate() {

    const { root, section } = this.fieldRootInSection(`StartDate_f`, `Project Management`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get VersionApproval() {

    const { root, section } = this.fieldRootInSection(`VersionApproval_f`, `Project Management`);

    return new ApprovalField(this.page, root, async () => section.openAndWait(root));
  }

  get AllValidationitemshaveadocumentationtype() {

    const { root, section } = this.fieldRootInSection(`AllValidationshaveadocument_f`, `Validation`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteValidation() {

    const { root, section } = this.fieldRootInSection(`ObsoleteValidation_f`, `Validation`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ValidationChangeRequests() {

    const { root, section } = this.fieldRootInSection(`ValidationChangeRequests_f`, `Validation`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get AllVerificationitemshaveadocumentationtype() {

    const { root, section } = this.fieldRootInSection(`AllVerificationshaveadocume_f`, `Verification`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ObsoleteVerification() {

    const { root, section } = this.fieldRootInSection(`ObsoleteVerification_f`, `Verification`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _VerificationChangeRequests() {

    const { root, section } = this.fieldRootInSection(`VerificationChangeRequests_f`, `Verification`);

    return new DisplayListField(this.page, root, async () => section.openAndWait(root));
  }

  get DHFTemplate() {

    const { root, section } = this.fieldRootInSection(`DHFTemplate_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Owner() {

    const { root, section } = this.fieldRootInSection(`Owner_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Domain() {

    const { root, section } = this.fieldRootInSection(`Domain_f`, `Planning`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Entity() {

    const { root, section } = this.fieldRootInSection(`Entity_f`, `Planning`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Item() {

    const { root, section } = this.fieldRootInSection(`Item_f`, `Planning`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Site() {

    const { root, section } = this.fieldRootInSection(`Site_f`, `Planning`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Project() {

    const { root, section } = this.fieldRootInSection(`Project_f`, `Project Management`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignInput() {

    const { root, section } = this.fieldRootInSection(`DesignInput_f`, `Design Input`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignOutput() {

    const { root, section } = this.fieldRootInSection(`DesignOutput_f`, `Design Output`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DesignTransfer() {

    const { root, section } = this.fieldRootInSection(`DesignTransfer_f`, `Design Transfer`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _RelatedItems() {

    const { root, section } = this.fieldRootInSection(`RelatedItems_f`, `Planning`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get UserRequirements() {

    const { root, section } = this.fieldRootInSection(`UserRequirements_f`, `Planning`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalApprovers() {

    const { root, section } = this.fieldRootInSection(`AdditionalApprovers_f`, `Project Management`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _DesignReviews() {

    const { root, section } = this.fieldRootInSection(`DesignReviews_f`, `Project Management`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Validation() {

    const { root, section } = this.fieldRootInSection(`Validation_f`, `Validation`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Verification() {

    const { root, section } = this.fieldRootInSection(`Verification_f`, `Verification`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
