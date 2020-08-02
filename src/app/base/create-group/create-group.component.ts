import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  groupInfo: boolean = true;
  groupCreation: boolean = false;
  groupName: string;
  groupDescription: string;
  constructor() { }

  ngOnInit() {
  }

  createGroup(){
    this.groupInfo = false;
    this.groupCreation = true;
  }

  submitGroupForm(groupForm){
    console.log(groupForm.value)
  }
}
