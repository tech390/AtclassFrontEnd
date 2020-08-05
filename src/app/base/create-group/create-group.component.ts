import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  createGroup(){
    this.groupInfo = false;
    this.groupCreation = true;
  }

  submitGroupForm(groupForm){
    console.log(groupForm.value);
    this.router.navigateByUrl('/user/add-participants');
  }
}
