import { Company } from './Company';
import { User } from './User';

const user = new User()

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 6,
  center: {
    lat: user.location.lat,
    lng: user.location.lng,
  }
})

