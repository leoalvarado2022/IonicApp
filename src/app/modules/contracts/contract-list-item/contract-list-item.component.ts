import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contract-list-item',
  templateUrl: './contract-list-item.component.html',
  styleUrls: ['./contract-list-item.component.scss'],
})
export class ContractListItemComponent implements OnInit {

  @Input() contract: any = null;

  constructor() {

  }

  ngOnInit() {

  }

}
