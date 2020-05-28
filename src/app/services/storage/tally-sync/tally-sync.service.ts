import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MainSyncService } from '../main/main-sync.service';
import { Tally } from 'src/app/modules/tallies/tally.interface';
import { StorageKeys } from '../storage-keys';


@Injectable({
  providedIn: 'root'
})
export class TallySyncService extends MainSyncService {

  private tallyTempId = 1;
  private talliesToRecord: Array<Tally>  = [];

  constructor(private storage: Storage) {
    super();
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
   * getTalliesToRecord
   */
  public getTalliesToRecord = (): Promise<Array<Tally>> => {
    return this.storage.get(StorageKeys.TalliesToRecord);
  }

  /**
   * setTalliesToRecord
   */
  private setTalliesToRecord = (talliesToRecord: Array<Tally>): Promise<Array<Tally>> => {
    return this.storage.set(StorageKeys.TalliesToRecord, talliesToRecord);
  }

  /**
   * addTalliesToRecord
   * @param tallies
   */
  public addTalliesToRecord = (talliesToRecord: Array<Tally>, tallyToRecord: Tally): Promise<any> => {
    talliesToRecord.push(tallyToRecord);
    return this.setTalliesToRecord(talliesToRecord);
  }

  /**
   * editTallyToRecord
   */
  public editTallyToRecord = (talliesToRecord: Array<Tally>, tallyToRecord: Tally): Promise<any> => {
    const index = talliesToRecord.findIndex(item => item.tempId === tallyToRecord.tempId);

    // - Si el ID temporal existe en el array se actualiza el indice del array con el objecto nuevo.
    // - Si el ID temporal no existe en el array se inserta al array.
    if (index > -1) {
      talliesToRecord[index] = tallyToRecord;
    } else {
      talliesToRecord.push(tallyToRecord);
    }

    return this.setTalliesToRecord(talliesToRecord);
  }

  /**
   * removeTallyToRecord
   */
  public removeTallyToRecord = (talliesToRecord: Array<Tally>, tallyToRecord: any): Promise<any> => {
    talliesToRecord = talliesToRecord.filter(item => item.id !== tallyToRecord.id);

    return this.setTalliesToRecord(talliesToRecord);
  }

  /**
   * removeTalliesToRecord
   * @param indexes
   */
  public removeTalliesToRecord = (talliesToRecord: Array<Tally>, indexes: Array<number>): Promise<any> => {
    const toRemoved = talliesToRecord.filter(item => !indexes.includes(item.tempId));

    return this.setTalliesToRecord(toRemoved);
  }

  /**
   * getTalliesWithErrors
   */
  public getTalliesWithErrors = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.TalliesWithErrors);
  }

  /**
   * addTalliesWithErrors
   * @param tallies
   */
  public addTalliesWithErrors = (tallies: Array<any>): Promise<any> => {
    return this.storage.set(StorageKeys.TalliesWithErrors, tallies);
  }

  /**
   * removeTalliesWithErrors
   * @param indexes
   */
  public removeTalliesWithErrors = (indexes: Array<number>): number => {
    /*
    const talliesWithErrors = this.getTalliesWithErrors();
    const toRemoved = talliesWithErrors.filter(item => !indexes.includes(item.tempId));

    const toRecord = {...this.getState().toRecord, talliesWithErrors: [...toRemoved]};
    this.setState({toRecord}, StoreActions.RemoveTalliesWithErrors);

    return toRemoved.length;
    */

    return 0;
  }

  /**
   * getNumberOfWorkerTallies
   * - Filter tallies of a worker by date
   * - Filter tallies of a worker that are marked to delete
   * - Filter tallies to record that are being edited
   */
  public getNumberOfWorkerTallies = (syncedTallies: Array<Tally>, talliesToRecord: Array<Tally>,  worker: any, currentDate: string, ignoreId: number = null): Array<Tally> => {
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
