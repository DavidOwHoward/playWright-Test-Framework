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


export class TransportationWorksheet_p extends DetailsPageBase {
  get DestinationCity() {

    const { root, section } = this.fieldRootInSection(`DestinationCity_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DestinationCountry() {

    const { root, section } = this.fieldRootInSection(`DestinationCountry_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get DestinationPostalCode() {

    const { root, section } = this.fieldRootInSection(`DestinationPostalCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _DestinationStateProvince() {

    const { root, section } = this.fieldRootInSection(`DestinationStateProvince_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _Duty() {

    const { root, section } = this.fieldRootInSection(`Duty_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get Frequency() {

    const { root, section } = this.fieldRootInSection(`Frequency_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProductCountryofOrigin() {

    const { root, section } = this.fieldRootInSection(`ProductCountryofOrigin_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ShipCityofOrigin() {

    const { root, section } = this.fieldRootInSection(`ShipCityofOrigin_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ShipCountryofOrigin() {

    const { root, section } = this.fieldRootInSection(`ShipCountryofOrigin_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get ShipPostalCode() {

    const { root, section } = this.fieldRootInSection(`ShipPostalCode_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get _ShipStateProvinceofOrigin() {

    const { root, section } = this.fieldRootInSection(`ShipStateProvinceofOrigin_f`, `General`);

    return new TextField(this.page, root, async () => section.openAndWait(root));
  }

  get TotalTransportationCostperPart() {

    const { root, section } = this.fieldRootInSection(`TotalTransportationCostperP_f`, `General`);

    return new NumericField(this.page, root, async () => section.openAndWait(root));
  }

  get ProgramItem() {

    const { root, section } = this.fieldRootInSection(`ProgramItem_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get RFQ() {

    const { root, section } = this.fieldRootInSection(`RFQ_f`, `[Frozen Section]`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get Per() {

    const { root, section } = this.fieldRootInSection(`Per_f`, `General`);

    return new ScrField(this.page, root, async () => section.openAndWait(root));
  }

  get TransportationCosts() {

    const { root, section } = this.fieldRootInSection(`TransportationCosts_f`, `General`);

    return new McrField(this.page, root, async () => section.openAndWait(root));
  }
}
