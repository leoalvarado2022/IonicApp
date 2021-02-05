import {Injectable} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {from, of, throwError} from 'rxjs';
import {catchError, concatMap, delay, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private readonly positionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 3000
  };

  constructor(private geolocation: Geolocation) {

  }

  /**
   * getCurrentPosition
   */
  public getCurrentPosition = () => {
    return from(this.geolocation.getCurrentPosition(this.positionOptions)).pipe(
      filter( (p: any) => p.coords !== undefined),
      map( (data) => {
        return { lat: data.coords.latitude, lng: data.coords.longitude };
      }),
      catchError( (error) => {
        return throwError(error.message);
      }),
    );
  }

  /**
   * startTracker
   */
  public startTracker = () => {
    return this.geolocation.watchPosition(this.positionOptions).pipe(
      filter( (position: any) => position.coords !== undefined)
    );
  }

}
