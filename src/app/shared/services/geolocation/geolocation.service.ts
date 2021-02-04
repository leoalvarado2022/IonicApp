import {Injectable} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {BehaviorSubject, from, of, throwError} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';

interface Position {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  // Santiago map coords
  private readonly santiagoPosition: Position = { lat: -33.4724728, lng: -70.9100195 };
  private readonly positionOptions = {
    enableHighAccuracy: true,
    timeout: 2000
  };

  private positionHistory: Array<Position> = [];
  private currentPosition: BehaviorSubject<Position> = new BehaviorSubject<Position>(null);  

  constructor(private geolocation: Geolocation) {    



    /*
    
    */
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
   * showHistory
   */
  public showHistory = () => {
    return this.positionHistory;
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
   * startTracker
   */
  private startTracker = () => {
    this.geolocation.watchPosition().pipe(
      filter( (p: any) => p.coords !== undefined)
    ).subscribe((position: any) => {
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
   * watchPosition
   */
  public watchPosition = () => {
    return this.geolocation.watchPosition({ enableHighAccuracy: true });
  }
}
