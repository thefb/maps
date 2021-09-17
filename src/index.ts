import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User()
const company = new Company()

const divId = 'map'

const map = new CustomMap(user.location.lat, user.location.lng, divId)

map.addMarker(user.location, 'User')
map.addMarker(company.location, 'Company')
