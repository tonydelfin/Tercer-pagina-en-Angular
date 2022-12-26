import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AppRoutinModule } from './app-routing.module';
import { PaisModule } from './pais/pais.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutinModule,
    HttpClientModule,
    
    SharedModule,
    PaisModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
