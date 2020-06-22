import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NetworkService } from '../../shared/services/network/network.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { StepNames } from 'src/app/services/storage/step-names';

@Component({
  selector: 'app-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss'],
})
export class ToolbarButtonsComponent implements OnInit, OnDestroy {

  public globeColor: 'default' | 'success' | 'danger'  = 'default';

  private isOnline: boolean;
  private status$: Subscription;

  constructor(
    private networkService: NetworkService,
    public stepperService: StepperService
  ) {

  }

  ngOnInit() {
    this.status$ = this.networkService.getNetworkStatus().subscribe(status => this.isOnline = status);
  }

  ngOnDestroy() {
    this.status$.unsubscribe();
  }

  /**
   * getGlobeColor
   */
  public getGlobeColor = (): string => {
    if (this.isOnline) {
      return 'success';
    } else {
      return 'danger';
    }
  }

  /**
   * syncAll
   */
  public syncAll  = () => {
    if (this.isOnline) {
      this.stepperService.syncAll();
    }
  }

  /**
   * getStepNames
   */
  public getStepNames = () => {
    return StepNames;
  }

}
