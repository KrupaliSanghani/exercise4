import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { AddressService } from './address.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustmerInputDataComponent } from './custmer-input-data/custmer-input-data.component';
import { CustomerDisplayDataComponent } from './customer-display-data/customer-display-data.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    CustmerInputDataComponent,
    CustomerDisplayDataComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
