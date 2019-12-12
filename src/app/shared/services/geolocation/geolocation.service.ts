import {Injectable} from '@angular/core';
import {ToastService} from '../toast/toast.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {BehaviorSubject} from 'rxjs';

interface Position {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  // Ubicacion por defecto santiago
  private lat = -33.4718999;
  private lng = -70.9100202;

  private currentPosition: BehaviorSubject<Position> = new BehaviorSubject<Position>({
    lat: this.lat,
    lng: this.lng
  });

  private readonly positionOptions = {
    enableHighAccuracy: true,
    timeout: 60 * 1000
  };

  constructor(
    private geolocation: Geolocation,
    private toastService: ToastService
  ) {
    this.geolocation.getCurrentPosition(this.positionOptions).then((data: any) => {
      this.updatePosition(data.coords.latitude, data.coords.longitude);
    }).catch((error) => {
      this.toastService.errorToast('El dispositivo no puede acceder a su ubicación');
    });

    this.geolocation.watchPosition(this.positionOptions).subscribe((data: any) => {
      if (data) {
        this.updatePosition(data.coords.latitude, data.coords.longitude);
      }
    });
  }

  /**
   * updatePosition
   * @param lat
   * @param lng
   */
  private updatePosition = (lat: number, lng: number) => {
    this.currentPosition.next({lat, lng});
  }

  /**
   * getCurrentPosition
   */
  public getCurrentPosition = () => {
    return this.currentPosition.asObservable();
  }

}
