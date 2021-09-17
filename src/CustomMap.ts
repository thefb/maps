export class CustomMap {
  private googleMap: google.maps.Map

  constructor(lat: number, lng: number, divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 6,
      center: {
        lat: lat,
        lng: lng,
      }
    })
  }
}