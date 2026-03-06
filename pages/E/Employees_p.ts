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


export class Employees_p extends DetailsPageBase {
  get EmployeeCode() {

    const { root, section } = this.fieldRootInSection(`EmployeeCode_f`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get FirstName() {

    const { root, section } = this.fieldRootInSection(`FirstName`, `[Frozen Section]`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeePhoto() {

    const { root, section } = this.fieldRootInSection(`EmployeePhoto_f`, `Employee Information`);

    return new Picture(this.page, root, async () => section.openAndWait(root));
  }

  get HasAccount() {

    const { root, section } = this.fieldRootInSection(`HasAccount_f`, `Employee Information`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get HireDate() {

    const { root, section } = this.fieldRootInSection(`HireDate_f`, `Employee Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Notes() {

    const { root, section } = this.fieldRootInSection(`Notes_f`, `Employee Information`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SeparationDate() {

    const { root, section } = this.fieldRootInSection(`SeparationDate_f`, `Employee Information`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Signature() {

    const { root, section } = this.fieldRootInSection(`Signature_f`, `Employee Information`);

    return new Picture(this.page, root, async () => section.openAndWait(root));
  }

  get AlternateName() {

    const { root, section } = this.fieldRootInSection(`AlternateName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EmergencyContact() {

    const { root, section } = this.fieldRootInSection(`EmergencyContact_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EmergencyPhone() {

    const { root, section } = this.fieldRootInSection(`EmergencyPhone_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ITARCompliant() {

    const { root, section } = this.fieldRootInSection(`ITARCompliant_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get OutofOfficeEndDate() {

    const { root, section } = this.fieldRootInSection(`OutofOfficeEndDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get OutofOfficeStartDate() {

    const { root, section } = this.fieldRootInSection(`OutofOfficeStartDate_f`, `General`);

    return new DateField(this.page, root, async () => section.openAndWait(root));
  }

  get Phone() {

    const { root, section } = this.fieldRootInSection(`Phone_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Title() {

    const { root, section } = this.fieldRootInSection(`Title_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get OutofOfficeDelegateApprover() {

    const { root, section } = this.fieldRootInSection(`EmployeeDelegateApprover_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultDomain() {

    const { root, section } = this.fieldRootInSection(`DefaultEntity_f`, `Operations`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultEntity() {

    const { root, section } = this.fieldRootInSection(`DefaultBusinessEntity_f`, `Operations`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get DefaultSite() {

    const { root, section } = this.fieldRootInSection(`DefaultSite_f`, `Operations`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Department() {

    const { root, section } = this.fieldRootInSection(`Department_f`, `Operations`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get ReportsTo() {

    const { root, section } = this.fieldRootInSection(`ReportsTo_f`, `Operations`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Shift() {

    const { root, section } = this.fieldRootInSection(`Shift_f`, `Operations`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get PreviousTitle() {

    const { root, section } = this.fieldRootInSection(`PreviousTitle_f`, `Training/Certification Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get SuccessionDevelopmentTitle() {

    const { root, section } = this.fieldRootInSection(`SuccessionDevelopmentTitle_f`, `Training/Certification Information`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get _EmployeeEvents() {

    const { root, section } = this.fieldRootInSection(`EmployeeEvents_f`, `Employee Events`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _WorkEducationExperience() {

    const { root, section } = this.fieldRootInSection(`WorkEducationExperience_f`, `Employee Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _SecurityGroups() {

    const { root, section } = this.fieldRootInSection(`SecurityGroup_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get _AdditionalSites() {

    const { root, section } = this.fieldRootInSection(`AdditionalSites_f`, `Operations`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Certifications() {

    const { root, section } = this.fieldRootInSection(`Certifications_f`, `Training/Certification Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get EmployeeSkills() {

    const { root, section } = this.fieldRootInSection(`EmployeeSkills_f`, `Training/Certification Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get SuccessionDevelopmentTrainingRole() {

    const { root, section } = this.fieldRootInSection(`SuccessionDevelopmentTraini_f`, `Training/Certification Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingLog() {

    const { root, section } = this.fieldRootInSection(`TrainingLog_f`, `Training/Certification Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get TrainingRoles() {

    const { root, section } = this.fieldRootInSection(`TrainingRoles_f`, `Training/Certification Information`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
