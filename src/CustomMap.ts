import { Location } from './Interfaces/Location'

export class CustomMap {
  private googleMap: google.maps.Map
  private googleMapMarker: google.maps.Marker

  constructor(lat: number, lng: number, divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 6,
      center: {
        lat: lat,
        lng: lng,
      }
    })
  }

  addMarker(location: Location, lbl?: string) {
    this.googleMapMarker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: location.lat,
        lng: location.lng
      },
      label: lbl
    })
  }
}