import faker from 'faker';
import { Mappable } from './CustomMap';

export const red = 'red';

export default 'green';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'red';
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    // console.log(this.location);
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
