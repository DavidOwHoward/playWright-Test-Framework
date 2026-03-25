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


export class QXtendConfigs_p extends DetailsPageBase {
  get ESAlertMonitorFrequency() {

    const { root, section } = this.fieldRootInSection(`ESAlertMonitorFrequency_f`, `Event Service`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ESCode() {

    const { root, section } = this.fieldRootInSection(`ESCode_f`, `Event Service`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ESDescription() {

    const { root, section } = this.fieldRootInSection(`ESDescription_f`, `Event Service`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ESMaxRetryLimit() {

    const { root, section } = this.fieldRootInSection(`ESMaxRetryLimit_f`, `Event Service`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ESNumberofAgents() {

    const { root, section } = this.fieldRootInSection(`ESNumberofAgents_f`, `Event Service`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ESPollingFrequency() {

    const { root, section } = this.fieldRootInSection(`ESPollingFrequency_f`, `Event Service`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ESSourceApplication() {

    const { root, section } = this.fieldRootInSection(`ESSourceApplication_f`, `Event Service`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ESSourceApplicationType() {

    const { root, section } = this.fieldRootInSection(`ESSourceApplicationType_f`, `Event Service`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AccessTokenURL() {

    const { root, section } = this.fieldRootInSection(`AccessTokenURL_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get Audience() {

    const { root, section } = this.fieldRootInSection(`Audience_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get AuthenticationType() {

    const { root, section } = this.fieldRootInSection(`AuthenticationType_f`, `General`);

    return new CheckboxField(this.page, root, async () => section.openAndWait(root));
  }

  get Client() {

    const { root, section } = this.fieldRootInSection(`Client_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ClientSecret() {

    const { root, section } = this.fieldRootInSection(`ClientSecret_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ClientSecret() {

    const { root, section } = this.fieldRootInSection(`ClientSecretRO_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ClientSecretLabel() {

    const { root, section } = this.fieldRootInSection(`ClientSecretLabel_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get ConfigurationName() {

    const { root, section } = this.fieldRootInSection(`ConfigurationName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EQMSMetaDatabaseName() {

    const { root, section } = this.fieldRootInSection(`MetaDatabaseName_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get EQMSServicesBasePath() {

    const { root, section } = this.fieldRootInSection(`MQ1ElementsServicesBasePath_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QxtendConfigurationServiceURL() {

    const { root, section } = this.fieldRootInSection(`QxtendConfigurationServiceU_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QxtendPassword() {

    const { root, section } = this.fieldRootInSection(`QxtendPassword_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _QxtendPassword() {

    const { root, section } = this.fieldRootInSection(`QxtendPasswordRO_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get QxtendPasswordLabel() {

    const { root, section } = this.fieldRootInSection(`QxtendPasswordLabel_f`, `General`);

    return new LabelField(this.page, root, async () => section.openAndWait(root));
  }

  get QxtendUsername() {

    const { root, section } = this.fieldRootInSection(`QxtendUsername_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ResetClientSecret() {

    const { root, section } = this.fieldRootInSection(`ResetClientSecret_f`, `General`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get ResetQxtendPassword() {

    const { root, section } = this.fieldRootInSection(`ResetQxtendPassword_f`, `General`);

    return new CommandField(this.page, root, async () => section.openAndWait(root));
  }

  get Scope() {

    const { root, section } = this.fieldRootInSection(`Scope_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get SubscriberSuffix() {

    const { root, section } = this.fieldRootInSection(`SubscriberSuffix_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MPAlertMonitorFrequency() {

    const { root, section } = this.fieldRootInSection(`MPAlertMonitorFrequency_f`, `Message Publisher`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MPCode() {

    const { root, section } = this.fieldRootInSection(`MPCode_f`, `Message Publisher`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MPDescription() {

    const { root, section } = this.fieldRootInSection(`MPDescription_f`, `Message Publisher`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MPMaxRetryLimit() {

    const { root, section } = this.fieldRootInSection(`MPMaxRetryLimit_f`, `Message Publisher`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MPNumberofAgents() {

    const { root, section } = this.fieldRootInSection(`MPNumberofAgents_f`, `Message Publisher`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MPPollingFrequency() {

    const { root, section } = this.fieldRootInSection(`MPPollingFrequency_f`, `Message Publisher`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MSAlertMonitorFrequency() {

    const { root, section } = this.fieldRootInSection(`MSAlertMonitorFrequency_f`, `Message Sender`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MSCode() {

    const { root, section } = this.fieldRootInSection(`MSCode_f`, `Message Sender`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MSDescription() {

    const { root, section } = this.fieldRootInSection(`MSDescription_f`, `Message Sender`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get MSMaxRetryLimit() {

    const { root, section } = this.fieldRootInSection(`MSMaxRetryLimit_f`, `Message Sender`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MSNumberofAgents() {

    const { root, section } = this.fieldRootInSection(`MSNumberofAgents_f`, `Message Sender`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get MSPollingFrequency() {

    const { root, section } = this.fieldRootInSection(`MSPollingFrequency_f`, `Message Sender`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get BusinessObjectsCreated() {

    const { root, section } = this.fieldRootInSection(`BusinessObjects_f`, `Business Objects`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get BusinessObjectsRequired() {

    const { root, section } = this.fieldRootInSection(`BusinessObjectsRequired_f`, `Business Objects`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get BusinessEventTypes() {

    const { root, section } = this.fieldRootInSection(`BusinessEventTypes_f`, `Database/Business Event Types`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get DatabaseEventTypes() {

    const { root, section } = this.fieldRootInSection(`DatabaseEventTypes_f`, `Database/Business Event Types`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get ProfilesCreated() {

    const { root, section } = this.fieldRootInSection(`ProfilesCreated_f`, `Profiles`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }

  get Subscribers() {

    const { root, section } = this.fieldRootInSection(`Subscribers_f`, `Subscribers`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
