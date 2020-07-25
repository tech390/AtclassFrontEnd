import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SharedModule } from '../shared/shared.module';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      { path: 'home-page', component: HomePageComponent },
      { path: 'create-group', component: CreateGroupComponent }
    ]
  }
]
@NgModule({
  declarations: [
    BaseComponent,
    HomePageComponent,
    CreateGroupComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BaseModule { }
