// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {iosDeviceNames} from './ios-device-names';
import { version } from './version';

export const environment = {
  production: false,
  app_name: 'FX10',
  api_url: 'http://127.0.0.1:5572',
  // api_url: 'https://apiqa.fx360.cl',
  appVersion: version.number,
  tz: 'America/Santiago',
  iosDeviceNames,
  syncTimerMinutes: 10,
  searchDeliveryListMSec: 10000,
  searchDeliveryListAcceptedMSec: 8000
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
