import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-add-participants-to-group',
  templateUrl: './add-participants-to-group.component.html',
  styleUrls: ['./add-participants-to-group.component.scss']
})
export class AddParticipantsToGroupComponent implements OnInit {
  
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    if(value === ""){
        return [];
    }
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
