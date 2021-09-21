import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User()
const company = new Company()

const map = new CustomMap(user.location.lat, user.location.lng, 'map')

map.addMarker(user, 'User')
map.addMarker(company, 'Company')
