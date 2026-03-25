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


export class SupplierPerformanceReviews_p extends DetailsPageBase {
  get ReviewNumber() {

    const { root, section } = this.fieldRootInSection(`ReviewNumber_f`, `[Frozen Section]`);

    return new AutoNumField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledDate() {

    const { root, section } = this.fieldRootInSection(`ScheduledDate_f`, `[Frozen Section]`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get CompleteDate() {

    const { root, section } = this.fieldRootInSection(`CompleteDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _ComplaintResolutionTimeLast12Months() {

    const { root, section } = this.fieldRootInSection(`ComplaintResolutionTime_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MonthlyComplaintsPerMillion() {

    const { root, section } = this.fieldRootInSection(`MonthlyComplaintsPerMillion_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get _MonthlyPartsDefectsPerMillion() {

    const { root, section } = this.fieldRootInSection(`MonthlyPartsPerMillion_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofFailures() {

    const { root, section } = this.fieldRootInSection(`Failures_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofOpportunities() {

    const { root, section } = this.fieldRootInSection(`Opportunities_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get NumberofSCARs() {

    const { root, section } = this.fieldRootInSection(`SCARs_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PerformanceIndicatorResults() {

    const { root, section } = this.fieldRootInSection(`PerformanceIndicatorResults_f`, `Results`);

    return new ChecklistField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalScore() {

    const { root, section } = this.fieldRootInSection(`TotalScore_f`, `Results`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get PeriodEndDate() {

    const { root, section } = this.fieldRootInSection(`ManPeriodEndDate_f`, `Scheduling`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get _PeriodEndDate() {

    const { root, section } = this.fieldRootInSection(`PeriodEndDate_f`, `Scheduling`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get PeriodStartDate() {

    const { root, section } = this.fieldRootInSection(`PeriodStartDate_f`, `Scheduling`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get SchedulingFrequency() {

    const { root, section } = this.fieldRootInSection(`SchedulingFrequency_f`, `Scheduling`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get ScheduledReviewer() {

    const { root, section } = this.fieldRootInSection(`ScheduledReviewer_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Supplier() {

    const { root, section } = this.fieldRootInSection(`Supplier_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get CompletedBy() {

    const { root, section } = this.fieldRootInSection(`CompletedBy_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierCommodity() {

    const { root, section } = this.fieldRootInSection(`SupplierCommodity_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SupplierRiskCategory() {

    const { root, section } = this.fieldRootInSection(`SupplierRiskCategory_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }
}
