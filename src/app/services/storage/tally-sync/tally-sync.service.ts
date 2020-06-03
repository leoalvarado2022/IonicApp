import { Injectable } from '@angular/core';
import { MainSyncService } from '../main/main-sync.service';
import { Tally } from 'src/app/modules/tallies/tally.interface';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../storage-keys';

@Injectable({
  providedIn: 'root'
})
export class TallySyncService extends MainSyncService {

  private tallyTempId = 1;

  constructor(private storage: Storage) {
    super();
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
  public getNumberOfWorkerTallies = (syncedTallies: Array<Tally>, talliesToRecord: Array<Tally>, worker: any, currentDate: string, ignoreId: number = null): Array<Tally> => {
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

}
