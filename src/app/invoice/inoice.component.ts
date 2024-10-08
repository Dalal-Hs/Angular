import { Component,inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { increment } from '../state/counter/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inoice',
  templateUrl: './inoice.component.html',
  styleUrl: './inoice.component.css'
})
export class InoiceComponent {
 
  constructor(private route:ActivatedRoute){

  }
  products_coffee:any;
 
  str:any;
  ngOnInit(){
    this.str=this.route.snapshot.paramMap.get('id')
    fetch('https://fake-coffee-api.vercel.app/api/1'+this.str)
    .then((response)=>response.json())
    .then((result)=>(this.products_coffee=result))
    console.log(this.products_coffee);
    console.log("works");
    
  }
   
}
