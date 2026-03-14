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


export class SkipLotInspectionRules_p extends DetailsPageBase {
  get Description() {

    const { root, section } = this.fieldRootInSection(`Description_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _EnableFailureConditions() {

    const { root, section } = this.fieldRootInSection(`EnableFailureConditions_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _EnablePromotionConditions() {

    const { root, section } = this.fieldRootInSection(`EnablePromotionConditions_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get FailureConditions() {

    const { root, section } = this.fieldRootInSection(`FailureConditions_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _NoofSuccessfulInspections() {

    const { root, section } = this.fieldRootInSection(`NoofSuccessfulInspections_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PromotionConditions() {

    const { root, section } = this.fieldRootInSection(`PromotionConditions_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ResumeHereIfSuccessful() {

    const { root, section } = this.fieldRootInSection(`ResumeHereIfSuccessful_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Sequence() {

    const { root, section } = this.fieldRootInSection(`Sequence_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ThresholdstoTriggerInspection() {

    const { root, section } = this.fieldRootInSection(`ThresholdstoTriggerInspecti_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get _ChooseAnyAdditionalTrainingMethodsBelowMayChooseMultiple() {

    const { root, section } = this.fieldRootInSection(`ChooseAnyMethodBelowMayChoo_f`, `Misc. Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get DateNotice() {

    const { root, section } = this.fieldRootInSection(`Spacer5_f`, `Misc. Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get DaysWithoutInspection() {

    const { root, section } = this.fieldRootInSection(`DaysWithoutInspection_f`, `Misc. Tracking Methods`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get LotsReceived() {

    const { root, section } = this.fieldRootInSection(`LotsReceived_f`, `Misc. Tracking Methods`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrackDateofLastInspection() {

    const { root, section } = this.fieldRootInSection(`TrackDateofLastInspection_f`, `Misc. Tracking Methods`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrackUniqueLotsReceived() {

    const { root, section } = this.fieldRootInSection(`TrackUniqueLotsReceived_f`, `Misc. Tracking Methods`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get UniqueLotNotice() {

    const { root, section } = this.fieldRootInSection(`UniqueLotNotice_f`, `Misc. Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ChooseaSingleQuantityBasedTrackingMethodBelow() {

    const { root, section } = this.fieldRootInSection(`ChooseaSingleMethodBelow_f`, `Qty Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LotQuantityNotice() {

    const { root, section } = this.fieldRootInSection(`Spacer3_f`, `Qty Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LotQuantityReceived() {

    const { root, section } = this.fieldRootInSection(`LotQuantityReceived_f`, `Qty Tracking Methods`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalQuanityNotice() {

    const { root, section } = this.fieldRootInSection(`Spacer1_f`, `Qty Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalQuantityReceived() {

    const { root, section } = this.fieldRootInSection(`TotalQuantityReceived_f`, `Qty Tracking Methods`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrackQuantitybyLotReceived() {

    const { root, section } = this.fieldRootInSection(`TrackQuantitybyLotReceived_f`, `Qty Tracking Methods`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrackQuantityReceived() {

    const { root, section } = this.fieldRootInSection(`TrackQuantityReceived_f`, `Qty Tracking Methods`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ChooseaSingleReceiptBasedTrackingMethodBelow() {

    const { root, section } = this.fieldRootInSection(`ChooseaSingleMethodBelow2_f`, `Receipt Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LotReceiptNotice() {

    const { root, section } = this.fieldRootInSection(`Spacer4_f`, `Receipt Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get LotReceipts() {

    const { root, section } = this.fieldRootInSection(`LotReceipts_f`, `Receipt Tracking Methods`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalReceiptNotice() {

    const { root, section } = this.fieldRootInSection(`Spacer2_f`, `Receipt Tracking Methods`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalReceipts() {

    const { root, section } = this.fieldRootInSection(`Receipts_f`, `Receipt Tracking Methods`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrackNumberofReceipts() {

    const { root, section } = this.fieldRootInSection(`TrackNumberofReceipts_f`, `Receipt Tracking Methods`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get _TrackReceiptsbyLot() {

    const { root, section } = this.fieldRootInSection(`TrackReceiptsbyLot_f`, `Receipt Tracking Methods`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get InspectionRuleTable() {

    const { root, section } = this.fieldRootInSection(`InspectionRuleTable_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NewRuleFail() {

    const { root, section } = this.fieldRootInSection(`NewRuleFail_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _NewRulePromo() {

    const { root, section } = this.fieldRootInSection(`NewRulePass_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
