import {Injectable} from '@angular/core';
import { StorageSyncService } from '../storage-sync/storage-sync.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
    selectedMenu: any;
    access: Array<string>;
    constructor(private storageSyncService: StorageSyncService){

    }

    getPermission(url: string) {
        this.storageSyncService.getMenus().then( menu => {
            this.selectedMenu = menu.filter(x => x.menu_url == url);
            this.access = Array.from(this.selectedMenu[0].access);
        });
        return this;
    }

    hasDelete(){
        return this.access.includes("E");
    }

    hasEdit(){
        return this.access.includes("M");
    }

    hasCreate() {
        return this.access.includes("A");
    }

    hasSpecial() {
        return this.access.includes("X");
    }
}