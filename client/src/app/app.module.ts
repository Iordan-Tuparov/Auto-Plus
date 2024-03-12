import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AppComponent, DetailsComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
