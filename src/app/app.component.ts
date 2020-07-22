import { Component, OnInit } from '@angular/core';
import { DataStoreService } from './services/data-store.service';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Atclass';
  
  constructor(){}
  
  ngOnInit(){
  }
}
