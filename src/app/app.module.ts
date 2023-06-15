import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoundsComponent } from './rounds/rounds.component';
import { RoundDetailsComponent } from './round-details/round-details.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    AppComponent,
    RoundsComponent,
    RoundDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
