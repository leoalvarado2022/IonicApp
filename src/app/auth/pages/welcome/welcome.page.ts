import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../shared/services/storage/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  /**
   * limpiarCache
   */
  public limpiarCache = async () => {
    localStorage.clear();
    await this.storage.clearAllRow();
  }
}
