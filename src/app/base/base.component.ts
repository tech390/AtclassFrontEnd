import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { DataStoreService } from '../services/data-store.service';
import { tap } from 'rxjs/internal/operators/tap';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {

  sidenav_val = true;
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
      this.dataStoreService.toggleSideNavBarVal$.pipe(
        tap((state)=>{
          this.sidenav_val = state;
        }),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe();
  }

  ngOnDestroy(): void{
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
