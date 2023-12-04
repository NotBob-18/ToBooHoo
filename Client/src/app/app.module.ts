import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { ViewListPageComponent } from './Pages/view-list-page/view-list-page.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { NavbarComponentComponent } from './ui/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './ui/footer-component/footer-component.component';
import { CardsComponentComponent } from './ui/cards-component/cards-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ViewListPageComponent,
    LandingPageComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    CardsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
