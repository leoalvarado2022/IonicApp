import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private getSantiagoWeatherUrl = 'weather/santiago';
  private getLatLngWeatherUrl = 'weather/latlng';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
  ) {

  }

  /**
   * getSantiagoWeather
   */
  public getSantiagoWeather = () => {
    const url = this.httpService.buildUrl(this.getSantiagoWeatherUrl);
    const body = this.httpService.buildBody();
    return this.httpClient.post(url, body);
  }

  /**
   * getLatLngWeather
   * @param lat latitude 
   * @param lng longitude
   */
  public getLatLngWeather = (lat: number, lng: number) => {
    const url = this.httpService.buildUrl(this.getLatLngWeatherUrl);
    const body = this.httpService.buildBody({ lat, lng });
    return this.httpClient.post(url, body);
  }

}
