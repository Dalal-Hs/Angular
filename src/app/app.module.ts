import { metaReducers } from './reducers/index';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { InoiceComponent } from './invoice/inoice.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ListComponent,
    CheckoutComponent,
    PaymentComponent,
    InoiceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
