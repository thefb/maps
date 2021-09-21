import { Location } from './Interfaces/Location'

export interface Mappable {
  location: Location,
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map
  private googleMapMarker: google.maps.Marker

  constructor(lat: number, lng: number, divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: lat,
        lng: lng,
      }
    })
  }

  addMarker(mappable: Mappable, lbl?: string): void {
    const marker = this.googleMapMarker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      label: lbl
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}