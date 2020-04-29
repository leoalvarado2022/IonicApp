import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ContractListItem} from '../../contract-interfaces';

@Component({
  selector: 'app-contract-list-item',
  templateUrl: './contract-list-item.component.html',
  styleUrls: ['./contract-list-item.component.scss'],
})
export class ContractListItemComponent implements OnInit, OnDestroy {

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
    this.editContractEvent.emit(contract);
  };

  /**
   * deleteContract
   * @param contract
   */
  public deleteContract = (contract: ContractListItem): void => {
    this.deleteContractEvent.emit(contract);
  };
}