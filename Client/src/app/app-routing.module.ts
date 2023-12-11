import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { ViewListPageComponent } from './Pages/view-list-page/view-list-page.component';



const routes: Routes = [
  { path: '', component: RegisterPageComponent},
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'view', component: ViewListPageComponent },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
