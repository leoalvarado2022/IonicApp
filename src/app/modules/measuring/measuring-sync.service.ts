import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageKeys } from 'src/app/services/storage/storage-keys';

@Injectable({
  providedIn: 'root'
})
export class MeasuringSyncService {

    constructor(
        private storage: Storage
      ) {
    
      }

    /**
   * getMeasuringToRecord
   */
   public getMeasuringToRecord = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.MeasuringsToRecord).then( (MeasuringToRecord: Array<any>) => {
      return MeasuringToRecord ?  MeasuringToRecord : [];
    });
  }

  /**
   * addMeasuringToRecord
   * - Add a single measuring to the measuringToRecord Array
   */
   public addMeasuringToRecord = (MeasuringToRecord: any): Promise<any> => {
    return this.storage.get(StorageKeys.MeasuringsToRecord).then((MeasuringsToRecord: Array<any>) => {
      if (MeasuringsToRecord) {
        MeasuringsToRecord.push(MeasuringToRecord);
        return this.storage.set(StorageKeys.MeasuringsToRecord, MeasuringsToRecord);
      } else {
        return this.storage.set(StorageKeys.MeasuringsToRecord, [MeasuringToRecord]);
      }
    });
  }

  public removeMeasuringToRecord = () => {
    return this.storage.get(StorageKeys.MeasuringsToRecord).then( (measuringsToRecord: Array<any>) => {
      if (measuringsToRecord) {
        
        return this.storage.remove(StorageKeys.MeasuringsToRecord);
      }

      return null;
    });
  }

  /**
   * getMeasuringsWithErrors
   */
   public getMeasuringsWithErrors = (): Promise<any> => {
    return this.storage.get(StorageKeys.MeasuringsWithErrors).then( (measuringsWithErrors: Array<any>) => {
      return measuringsWithErrors ? measuringsWithErrors : [];
    });
  }

  /**
   * addMeasuringsWithErrors
   * - Add multiple measures to the MeasuringsWithErrors Array
   */
  public addMeasuringsWithErrors = (withErrors: Array<any>) => {
    return this.storage.get(StorageKeys.MeasuringsWithErrors).then((measuringsWithErrors: Array<any>) => {
      if (measuringsWithErrors) {
        const mergeArrays = [...withErrors, ...measuringsWithErrors];
        return this.storage.set(StorageKeys.MeasuringsWithErrors, mergeArrays);
      } else {
        return this.storage.set(StorageKeys.MeasuringsWithErrors, withErrors);
      }
    });
  }

  public groupedData() {

  }

  public groupArray(filteredData,filter) {
    let measuringData = [];
    const grouped = {};
    filteredData.forEach( (value, index) => {
      filter.reduce( (obj,pos,k_index) => {
        obj[value[pos]] = obj[value[pos]] || (k_index + 1 === filter.length ? [] : {});
        return obj[value[pos]];
      },grouped).push(value);
    })
    const _grouped = JSON.parse(JSON.stringify(grouped));
    
    let i = 0;
    for(let g in _grouped) {
      measuringData[i] = [];
      for(let _d in _grouped[g]){
        measuringData[i] = {
          "measure":_grouped[g][_d][0]?.measure,
          "quantity":_grouped[g][_d].filter( item => item.id >= 0).length,
          "cost_center_code":_grouped[g][_d][0]?.cost_center_code,
          "cost_center_id":_grouped[g][_d][0]?.cost_center_id,
          "cost_center_name":_grouped[g][_d][0]?.cost_center_name,
          "pair_measure_id":_grouped[g][_d][0]?.pair_measure_id,
          "register_date":_grouped[g][_d][0]?.register_date,
          "detail": _grouped[g][_d].filter( item => (item.id == null || item.id >= 0)),
          "own_id": i
        };
        i++;
      }
    };
    
    const searchData = [...measuringData];

    return {searchData,measuringData,filteredData};

  }
    
}