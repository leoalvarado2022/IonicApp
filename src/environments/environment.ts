import {iosDeviceNames} from './ios-device-names';
import {version} from './version';

export const environment = {
  production: false,
  app_name: 'FX360',
  api_url: 'http://192.168.1.90:5572',
  api_url_delivery: 'http://127.0.0.1:5573',
  // api_url: 'https://apiqa.fx360.cl',
  appVersion: version.number,
  tz: 'America/Santiago',
  iosDeviceNames,
  syncTimerMinutes: 10,
  searchDeliveryListMSec: 10000,
  searchDeliveryListAcceptedMSec: 8000,
  googleMapsApiKey: 'AIzaSyA9T2KTzXZkhW4HVaiA6U-TsXo0jL6asRs'
};
