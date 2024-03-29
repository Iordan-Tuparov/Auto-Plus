import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { CarsModule } from './cars/cars.module';
import { UserRoutingModule } from './user/user-routing.module';
import { appInterceptorProvider } from './app.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, AuthenticateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    CoreModule,
    UserModule,
    CarsModule,
    HttpClientModule,
  ],
  providers: [appInterceptorProvider, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
