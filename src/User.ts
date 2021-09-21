import faker from 'faker'
import { Location } from './Interfaces/Location'

export class User {
  name: string
  location: Location


  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}

