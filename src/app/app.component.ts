import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'task4';
  constructor( private router: Router) {}
  value!:any;
  currentVal!:string;

  updateCurrentVal(val:any) {
    this.currentVal = val;
  }
  navigate(){
    this.router.navigate(['/']).then(() => {
      
      this.router.navigate(["/",this.currentVal, {foo:this.value}]);
      
    });
   }
}