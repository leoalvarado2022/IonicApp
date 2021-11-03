import { Injectable } from '@angular/core';
import { Tally } from 'src/app/modules/tallies/tally.interface';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../storage-keys';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TallySyncService {

  private tallyTempId = 1;

  constructor(private storage: Storage) {

  }

  /**
   * getTalliesToRecord
   */
  public getTalliesToRecord = (): Promise<Array<Tally>> => {
    return this.storage.get(StorageKeys.TalliesToRecord).then( (talliesToRecord: Array<Tally>) => {
      return talliesToRecord ?  talliesToRecord : [];
    });
  }

  /**
   * addTallyToRecord
   * - Add a single tally to the talliesToRecord Array
   */
  public addTallyToRecord = (tallyToRecord: Tally): Promise<any> => {
    return this.storage.get(StorageKeys.TalliesToRecord).then((talliesToRecord: Array<Tally>) => {
      if (talliesToRecord) {
        talliesToRecord.push(tallyToRecord);
        return this.storage.set(StorageKeys.TalliesToRecord, talliesToRecord);
      } else {
        return this.storage.set(StorageKeys.TalliesToRecord, [tallyToRecord]);
      }
    });
  }

  /**
   * addTalliesToRecord
   * - Add multiple tallies to the talliesToRecord Array
   */
  public addTalliesToRecord = (toRecord: Array<Tally>) => {
    return this.storage.get(StorageKeys.TalliesToRecord).then((talliesToRecord: Array<Tally>) => {
      if (talliesToRecord) {
        const mergeArrays = [...toRecord, ...talliesToRecord];
        return this.storage.set(StorageKeys.TalliesToRecord, mergeArrays);
      } else {
        return this.storage.set(StorageKeys.TalliesToRecord, toRecord);
      }
    });
  }

  /**
   * editTallyToRecord
   */
  public editTallyToRecord = (tallyToEdit: Tally): Promise<any> => {
    return this.storage.get(StorageKeys.TalliesToRecord).then( (talliesToRecord: Array<Tally>) => {
      if (talliesToRecord) {
        const index = talliesToRecord.findIndex(item => item.tempId === tallyToEdit.tempId);

        // - Si el ID temporal existe se actualiza el indice del array con el objecto nuevo.
        // - Si el ID temporal no existe se inserta al array.
        if (index > -1) {
          talliesToRecord[index] = tallyToEdit;
        } else {
          talliesToRecord.push(tallyToEdit);
        }

        return this.storage.set(StorageKeys.TalliesToRecord, talliesToRecord);
      } else {
        return this.storage.set(StorageKeys.TalliesToRecord, [tallyToEdit]);
      }
    });
  }

  /**
   * removeTallyToRecord
   */
  public removeTallyToRecord = (tallyToRecordTempId: number) => {
    return this.storage.get(StorageKeys.TalliesToRecord).then( (talliesToRecord: Array<Tally>) => {
      if (talliesToRecord) {
        const filtered = talliesToRecord.filter(item => item.tempId !== tallyToRecordTempId);
        return this.storage.set(StorageKeys.TalliesToRecord, filtered);
      }

      return null;
    });
  }

  /**
   * removeTalliesToRecord
   */
  public removeTalliesToRecord = (tempIds: Array<number>) => {
    return this.storage.get(StorageKeys.TalliesToRecord).then( (talliesToRecord: Array<Tally>) => {
      if (talliesToRecord) {
        const filtered = talliesToRecord.filter(item => !tempIds.includes(item.tempId));
        return this.storage.set(StorageKeys.TalliesToRecord, filtered);
      }

      return null;
    });
  }

  /**
   * addTalliesToSyncedTallies
   * @param recorded
   */
  public addTalliesToSyncedTallies = (recorded: Array<number>) => {
    return this.storage.get(StorageKeys.TalliesToRecord).then((talliesToRecord: Array<Tally>) => {
      if (talliesToRecord) {
        const mergeArrays = talliesToRecord.filter(x => recorded.includes(x.tempId) && x.status !== 'delete' );
        return this.storage.set(StorageKeys.Tallies, mergeArrays);
      }

      return [];
    });
  }

  /**
   * getTallyTempId
   */
  public getTallyTempId(): number {
    return this.tallyTempId;
  }

  /**
   * increaseTallyTempId
   */
  public increaseTallyTempId = (): void => {
    this.tallyTempId = this.tallyTempId + 1;
  }

  /**
   * getTalliesWithErrors
   */
  public getTalliesWithErrors = (): Promise<any> => {
    return this.storage.get(StorageKeys.TalliesWithErrors).then( (talliesWithErrors: Array<any>) => {
      return talliesWithErrors ? talliesWithErrors : [];
    });
  }

  /**
   * addTalliesWithErrors
   * - Add multiple tallies to the talliesWithErrors Array
   */
  public addTalliesWithErrors = (withErrors: Array<any>) => {
    return this.storage.get(StorageKeys.TalliesWithErrors).then((talliesWithErrors: Array<any>) => {
      if (talliesWithErrors) {
        const mergeArrays = [...withErrors, ...talliesWithErrors];
        return this.storage.set(StorageKeys.TalliesWithErrors, mergeArrays);
      } else {
        return this.storage.set(StorageKeys.TalliesWithErrors, withErrors);
      }
    });
  }

  /**
   * getNumberOfWorkerTallies
   * - Filter tallies of a worker by date
   * - Filter tallies of a worker that are marked to delete
   * - Filter tallies to record that are being edited
   */
  public getNumberOfWorkerTallies = (
    syncedTallies: Array<Tally>,
    talliesToRecord: Array<Tally>,
    worker: any,
    currentDate: string,
    ignoreId: number = null,
  ): Array<Tally> => {
    // Get the tallys to be deleted and convert the ID to positive for comparison use
    const markedToDelete = talliesToRecord.filter(item => item.status === 'delete').map(item => item.id * -1);

    // Get the tallys to be edited
    const markedToEdit = talliesToRecord.filter(item => item.status === 'edit').map(item => item.id);

    // Filter synced tallies by current date and not marked for delete
    const filteredTallies = syncedTallies.filter(item => {
      const tallyDate = this.removeTimeFromDate(item.date);
      const current = this.removeTimeFromDate(currentDate);

      return item.workerId === worker.id && tallyDate === current && !markedToDelete.includes(item.id) && !markedToEdit.includes(item.id);
    });

    // Filter tallies to record by current date and that are not being edited
    const toRecord = talliesToRecord.filter(item => {
      const tallyDate = this.removeTimeFromDate(item.date);
      const current = this.removeTimeFromDate(currentDate);

      return item.workerId === worker.id && tallyDate === current && item.status !== 'delete' && item.tempId !== ignoreId;
    });

    // Return joined lists
    return [...toRecord, ...filteredTallies];
  }

  public getNumberOfWorkerTalliesAndTemp = (
    syncedTallies: Array<Tally>,
    talliesToRecord: Array<Tally>,
    talliesTemp: Array<any>,
    worker: any,
    currentDate: string,
    ignoreId: number = null,
  ): Array<Tally> => {
    // Get the tallys to be deleted and convert the ID to positive for comparison use
    const markedToDelete = talliesToRecord.filter(item => item.status === 'delete').map(item => item.id * -1);

    // Get the tallys to be edited
    const markedToEdit = talliesToRecord.filter(item => item.status === 'edit').map(item => item.id);

    // Filter synced tallies by current date and not marked for delete
    const filteredTallies = syncedTallies.filter(item => {
      const tallyDate = this.removeTimeFromDate(item.date);
      const current = this.removeTimeFromDate(currentDate);

      return item.workerId === worker.id && tallyDate === current && !markedToDelete.includes(item.id) && !markedToEdit.includes(item.id);
    });

    // Filter tallies to record by current date and that are not being edited
    const toRecord = talliesToRecord.filter(item => {
      const tallyDate = this.removeTimeFromDate(item.date);
      const current = this.removeTimeFromDate(currentDate);

      return item.workerId === worker.id && tallyDate === current && item.status !== 'delete' && item.tempId !== ignoreId;
    });

    // Filter temporal tallies by current date
    const temporalTallies = talliesTemp.filter((item: any) => {
      const tallyDate = this.removeTimeFromDate(item.fecha);
      const current = this.removeTimeFromDate(currentDate);

      return item.id_par_entidades_trabajador === worker.id && tallyDate === current;
    });

    // Return joined lists
    return [...toRecord, ...filteredTallies, ...temporalTallies];
  }

  /**
   * removeTimeFromDate
   * @param date
   */
  public removeTimeFromDate = (date: string): string => {
    if (date && date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  }

  /**
   * getWorkersByQuadrille
   * @param quadrilleId
   * @param currentDate
   */
  public getWorkersByQuadrille = (quadrilleId: number, currentDate: string): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Workers).then( (workers: Array<any>) => {
      if (workers) {
        return workers.filter(item => item.quadrille === quadrilleId && this.validContractDate(item, currentDate));
      }

      return [];
    });
  }

  /**
   * validContractDate
   */
  private validContractDate = (worker: any, currentDate: string): boolean => {
    if (currentDate) {
      const start = moment(worker.startDate).toISOString();
      const end = moment(worker.endDate).toISOString();

      return moment(currentDate).isBetween(start, end);
    }

    return false;
  }

  /**
   * getWorkerById
   * @param id
   */
  public getWorkerById = (id: number): Promise<any> => {
    return this.storage.get(StorageKeys.Workers).then( (workers: Array<any>) => {
      if (workers) {
        return workers.find(item => item.id === id);
      }

      return null;
    });
  }

  /**
   * getWorkerSyncedTallies
   */
  public getWorkerSyncedTallies = (workerId: number): Promise<Array<Tally>> => {
    return this.storage.get(StorageKeys.Tallies).then( (tallies: Array<Tally>) => {
      if (tallies) {
        return tallies.filter(item => item.workerId === workerId);
      }

      return [];
    });
  }

  /**
   * getWorkerTalliesToRecord
   */
  public getWorkerTalliesToRecord = (workerId: number): Promise<Array<Tally>> => {
    return this.storage.get(StorageKeys.TalliesToRecord).then( (tallies: Array<Tally>) => {
      if (tallies) {
        return tallies.filter(item => item.workerId === workerId);
      }

      return [];
    });
  }

}
