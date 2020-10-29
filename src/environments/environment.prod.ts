import {iosDeviceNames} from './ios-device-names';
import { version } from './version';

export const environment = {
  production: true,
  app_name: 'FX10',
  api_url: 'https://apiqa.fx360.cl',
  appVersion: version.number,
  tz: 'America/Santiago',
  iosDeviceNames,
  syncTimerMinutes: 5,
  searchDeliveryListMSec: 5000,
  searchDeliveryListAcceptedMSec: 8000
};
