import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent{

  public isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.status.subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }

}
