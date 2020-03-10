import {Injectable} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';

interface Position {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  // Ubicacion por defecto santiago
  private lat = -33.4724728;
  private lng = -70.9100195;
  private positionHistory: Array<{ lat: number, lng: number }> = [];

  private currentPosition: BehaviorSubject<Position> = new BehaviorSubject<Position>({
    lat: this.lat,
    lng: this.lng
  });

  private readonly positionOptions = {
    enableHighAccuracy: true,
    timeout: 5000
  };

  constructor(private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition(this.positionOptions).then((data: any) => {
      this.updatePosition(data.coords.latitude, data.coords.longitude);
    }).catch(error => {
      console.log('getCurrentPosition', error);
    });

    this.startTracker();
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

  /**
   * startTracker
   */
  private startTracker = () => {
    this.geolocation.watchPosition().pipe(
      filter(p => p.coords !== undefined)
    ).subscribe(position => {
      this.positionHistory.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });

      this.updatePosition(position.coords.latitude, position.coords.longitude);
    }, error => {
      console.log({error});
    });
  }

  /**
   * showHistory
   */
  public showHistory = () => {
    return this.positionHistory;
  }
}
