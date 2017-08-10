import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { AppComponent }         from './app.component';
import { VendingMachineComponent }   from './vending-machine.component';

import { VendingMachineService } from './vending-machine.service';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    VendingMachineComponent,
  ],
  providers: [ VendingMachineService, LocalStorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
