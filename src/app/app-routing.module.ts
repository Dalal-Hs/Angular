import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { InoiceComponent } from './invoice/inoice.component';
import { CheckoutComponent } from './checkout/checkout.component';



const routes: Routes = [

  {path : '' , component:HomeComponent},
  {path : 'list/:str' , component:ListComponent},
  {path : 'details/:id' , component:DetailsComponent},
  {path : 'payment/:id' , component:PaymentComponent},
  {path : 'inoice/' , component:InoiceComponent},
  {path : 'checkout/' , component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
