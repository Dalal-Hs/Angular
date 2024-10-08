import { Component , inject} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    private Store=inject(Store);
    count$?:Observable<number>;
    constructor()
    {
      this.count$=this.Store.select("counter")
    }
  str="";
  invoice="";
}
