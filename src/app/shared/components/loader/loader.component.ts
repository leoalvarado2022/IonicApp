import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoaderService} from '../../services/loader/loader.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {

  public isLoading = false;
  private loading$: Subscription;

  constructor(private loaderService: LoaderService) {

  }

  ngOnInit(): void {
    this.loaderService.getLoaderStatus().subscribe((state: boolean) => this.isLoading = state);
  }

  ngOnDestroy(): void {
    this.loading$.unsubscribe();
  }

}
