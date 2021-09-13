import {iosDeviceNames} from './ios-device-names';
import {version} from './version';

export const environment = {
  production: true,
  app_name: 'FX360',
  api_url: 'https://api.fx360.cl',
  api_url_qa: 'https://apiqa.fx360.cl',
  api_url_delivery: 'https://delivery.fx360.cl',
  api_url_dte: 'https://api-dte.fx360.cl',
  appVersion: version.number,
  tz: 'America/Santiago',
  iosDeviceNames,
  syncTimerMinutes: 5,
  searchDeliveryListMSec: 10000,
  searchDeliveryListAcceptedMSec: 15000,
  googleMapsApiKey: 'AIzaSyCljnScMZM4NcOeqfo2R35FumzhvBbSZp0'
};
