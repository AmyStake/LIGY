import { AboutComponent } from './layout/about/about.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
