import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../../shared/services/http/http.service';
import { Tally } from '../../tally.interface';

@Injectable({
  providedIn: 'root'
})
export class TallyService {

  private readonly recordTalliesUrl = 'tallies/record';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {

  }

  /**
   * recordTallies
   * @param tallies
   */
  public recordTallies = (tallies: Array<any>) => {
    const url = this.httpService.buildUrl(this.recordTalliesUrl);
    return this.httpClient.post(url, this.httpService.buildBody({tallies}), {headers: this.httpService.getHeaders()});
  }


  /**
   * TALLY VALIDATIONS
   * ========================================================================================================================================
   * ========================================================================================================================================
   */

  /**
   * removeTimeFromDate
   * @param date
   */
  public removeTimeFromDate = (date: string): string => {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  }

  /**
   * getNumberOfWorkerTallies
   * - Filter tallies of a worker by date
   * - Filter tallies of a worker that are marked to delete
   */
  public getNumberOfWorkerTallies = (worker: any, tallies: Array<Tally>, talliesToRecord: Array<Tally>, currentDate: string): Array<Tally> => {
    // Get the tallys to be deleted and convert the ID to positive for comparison use
    const markedToDelete = talliesToRecord.map(item => item.id < 0 ? item.id * -1 : item.id );

    // Filter synced tallies by current date and tallies not marked for delete
    const filteredTallies = tallies.filter(item => {
      const tallyDate = this.removeTimeFromDate(item.date);
      const current = this.removeTimeFromDate(currentDate);

      return item.workerId === worker.id && tallyDate === current && !markedToDelete.includes(item.id);
    });

    // Filter tallies to record by cyrrent date
    const toRecord = talliesToRecord.filter(item => {
      const tallyDate = this.removeTimeFromDate(item.date);
      const current = this.removeTimeFromDate(currentDate);

      return item.workerId === worker.id && tallyDate === current;
    });

    // Return joined lists
    return [...toRecord, ...filteredTallies];
  }

}
