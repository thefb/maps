import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User()

const divId = 'map'

new CustomMap(user.location.lat, user.location.lng, divId)
