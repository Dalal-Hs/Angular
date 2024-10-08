
import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { increment } from '../state/counter/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private Store=inject(Store);
  count$?:Observable<number>;
  increment()
  {
        this.Store.dispatch(increment());
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "We have added a product",
          showConfirmButton: false,
          timer: 1500
        });
  }
  constructor(private route:ActivatedRoute){

    this.count$=this.Store.select("counter")
  }
  st="prodects";
  chec="";
  payment="user";
  str:any;
  products_coffee:any;
  ngOnInit(){
    this.str=this.route.snapshot.paramMap.get('id')
    fetch('https://fake-coffee-api.vercel.app/api/1'+this.str)
    .then((response)=>response.json())
    .then((result)=>(this.products_coffee=result))
    console.log(this.products_coffee);
    console.log("works");
    
  }
}
