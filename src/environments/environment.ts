import {iosDeviceNames} from './ios-device-names';
import {version} from './version';

export const environment = {
  production: false,
  app_name: 'FX360',
  // api_url: 'http://localhost:5572',
  // RED LUIS
  api_url: 'http://192.168.1.120:5572',
  // api_url: 'https://apiqa.fx360.cl',
  api_url_delivery: 'http://127.0.0.1:5573',
  // api_url_delivery: 'https://delivery.fx360.cl',
  appVersion: version.number,
  tz: 'America/Santiago',
  iosDeviceNames,
  syncTimerMinutes: 10,
  searchDeliveryListMSec: 20000,
  searchDeliveryListAcceptedMSec: 18000,
  googleMapsApiKey: 'AIzaSyA9T2KTzXZkhW4HVaiA6U-TsXo0jL6asRs'
};
