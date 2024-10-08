import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  products_coffee:any;
  ino="";
  ngOnInit(){
 
    fetch('https://fake-coffee-api.vercel.app/api/1')
    .then((response)=>response.json())
    .then((result)=>(this.products_coffee=result))
    console.log(this.products_coffee);
    console.log("works");
    
  }
}
