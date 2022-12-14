import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkComponent } from './pages/link/link.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LinkComponent, HomeComponent],
  imports: [BrowserModule, APP_ROUTES, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
