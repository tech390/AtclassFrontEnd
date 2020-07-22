import { Component } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  
  sidenav_val = true;

  constructor(private dataStoreService:DataStoreService) {}

  toggleSideNav(){
    this.sidenav_val = !this.sidenav_val;
    this.dataStoreService.toggleSideNavVal(this.sidenav_val);
  }

}
