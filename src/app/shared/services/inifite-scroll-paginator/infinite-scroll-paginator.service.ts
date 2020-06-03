import { Injectable } from '@angular/core';

@Injectable()
export class InfiniteScrollPaginatorService {

  private totalPages: number;
  private currentPage: number;
  private itemsPerPage: number;

  private data: Array<any> = [];
  private filteredData: Array<any> = [];

  constructor() {

  }

  /**
   * start
   */
  public start = (data: Array<any> = [], itemsPerPage: number = 5) => {
    this.data = data;
    this.currentPage = 0;
    this.itemsPerPage = itemsPerPage;
    this.filteredData = [];

    this.totalPages = this.data.length > 0 ? (this.data.length / this.itemsPerPage) : 1;
    this.addItems();
  }

  /**
   * addItems
   */
  public addItems = () => {
    const startPoint = this.currentPage * this.itemsPerPage;
    const endPoint = startPoint + this.itemsPerPage;
    const calc = this.data.slice(startPoint, endPoint);

    if (calc) {
      calc.forEach(item => this.filteredData.push(item));
    }

    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
    }
  }

  /**
   * getItems
   */
  public getItems = (): Array<any> => {
    return this.filteredData;
  }

  /**
   * disableInifiteScroll
   */
  public disableInifiteScroll = (): boolean => {
    return this.filteredData.length === this.data.length;
  }

  /**
   * reset
   */
  public reset = () => {
    this.currentPage = 0;
    this.filteredData = [];

    this.addItems();
  }

}
