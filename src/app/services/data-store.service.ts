import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public toggleSideNavBarVal$ = new Subject<boolean>();
  constructor() { }

  toggleSideNavVal(val: boolean){
    this.toggleSideNavBarVal$.next(val);
  }
}
