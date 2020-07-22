import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'user', loadChildren: () => import('./base/base.module').then(m => m.BaseModule)},      
      { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
      { path: '', redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
