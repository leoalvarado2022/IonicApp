import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, AfterViewInit} from '@angular/core';
import {ContractListItem} from '../../contract-interfaces';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-contract-list-item',
  templateUrl: './contract-list-item.component.html',
  styleUrls: ['./contract-list-item.component.scss'],
})
export class ContractListItemComponent implements OnInit, OnDestroy {

  @ViewChild('slide') slide: IonItemSliding;

  @Input() contract: ContractListItem = null;
  @Output() editContractEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteContractEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.contract = null;
  }

  /**
   * editContract
   * @param contract
   */
  public editContract = (contract: ContractListItem): void => {
    this.editContractEvent.emit({contract, slide: this.slide});
  }

  /**
   * deleteContract
   * @param contract
   */
  public deleteContract = (contract: ContractListItem): void => {
    this.deleteContractEvent.emit({contract, slide: this.slide});
  }

}
