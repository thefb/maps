import faker from 'faker'
import { Location } from './Interfaces/Location'

export class Company {
  companyName: string
  catchPhrase: string
  location: Location


  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}
