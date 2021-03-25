import { iosDeviceNames } from './ios-device-names';
import { version } from './version';

export const environment = {
  production: true,
  app_name: 'FX360',
  api_url: 'https://apiqa.fx360.cl',
  api_url_qa: "https://apiqa.fx360.cl",
  api_url_delivery: 'https://delivery.fx360.cl',
  appVersion: version.number,
  tz: 'America/Santiago',
  iosDeviceNames,
  syncTimerMinutes: 5,
  searchDeliveryListMSec: 10000,
  searchDeliveryListAcceptedMSec: 15000,
  googleMapsApiKey: 'AIzaSyA9T2KTzXZkhW4HVaiA6U-TsXo0jL6asRs'
};
